import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import { PiDotsThreeOutline, PiDotsThreeOutlineFill } from "react-icons/pi";
import useLocalStorageState from 'use-local-storage-state';
import Modal from './Modal.jsx';
import AppNavbar from '../AppNavbar.jsx'


const Reader = ({ doc, title }) => {

  const epubUrl = `${doc}`;
  const renditionRef = useRef(null)
  const [rend, setRend] = useState(null)
  const [bookProgress, setBookProgress] = useLocalStorageState('book-progress', {});
  const [largeText, setLargeText] = useState(null);
  const [selections, setSelections] = useLocalStorageState('selections', []);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
      if (!bookProgress[title]) {
        setBookProgress(prevProgress => ({
          ...prevProgress,
          [title]: 0
        }));
      }
  }, [title, bookProgress, setBookProgress]);

  const handleLocationChanged = (loc) => {
    // console.log(bookProgress)
    setBookProgress({
      ...bookProgress,
      [title]: loc
    });
  };

  function setRenderSelection(cfiRange, contents) {
    if (rend) {
      setSelections((prevSelections) => ({
        ...prevSelections,
        [title]: [
          ...(prevSelections[title] || []),
          {
            text: rend.getRange(cfiRange).toString(),
            cfiRange,
          },
        ],
      }));
      rend.annotations.add(
        'highlight',
        cfiRange,
        {},
        undefined,
        'hl',
        { fill: 'grey', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
      )
      const selection = contents.window.getSelection()
      selection?.removeAllRanges()
    }
  }



  useEffect(() => {
    localStorage.setItem('selections', JSON.stringify(selections))
  }, [selections])

  useEffect(() => {
    if (rend) {
      rend.on('selected', setRenderSelection)
      return () => {
        rend?.off('selected', setRenderSelection)
      }
    }
  }, [setSelections, rend])

  useEffect(() => {
    if (rend) {
      rend.themes.fontSize(largeText ? '140%' : '100%');
    }
  }, [rend, largeText]);

  const dots = isHovered ?
    <PiDotsThreeOutlineFill
      size={30}
      className="mt-2"
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleModal}
    />
    :
    <PiDotsThreeOutline
      size={30}
      className="mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onClick={toggleModal}
    />
  return (

    <div className="container background">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          {dots}
          <Modal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            largeText={largeText}
            setLargeText={setLargeText}
            rend={rend}
            selections={selections}
            setSelections={setSelections}
            title={title}
          />

        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <AppNavbar />
        </div>

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container">
            < ReactReader
              title={title}
              url={epubUrl}
              location={bookProgress[title] || 0}
              locationChanged={handleLocationChanged}
              getRendition={(rendition) => {
                // console.log('location', location)
                renditionRef.current = rendition;
                setRend(rendition)
                rendition.hooks.content.register((contents) => {
                  const body = contents.window.document.querySelector('body')
                  if (body) {
                    body.oncontextmenu = () => {
                      return false
                    }
                  }
                })
                rendition.themes.fontSize(largeText ? '140%' : '100%')
              }}
            />
          </div>
        </div>
      </div>
    </div >
  )
};

export default Reader;
