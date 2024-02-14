import React, { useState, useRef, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import useLocalStorageState from 'use-local-storage-state';
// import Selections from './Selections.jsx';
import Modal from './Modal.jsx';


const Reader = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const renditionRef = useRef(null)
  const [rend, setRend] = useState(null)
  // const [firstRenderDone, setFirstRenderDone] = useState(false)
  // const [location, setLocation] = useState(null);
  const [location, setLocation] = useLocalStorageState('book-progress', 0);
  const [largeText, setLargeText] = useState(null);
  const [selections, setSelections] = useLocalStorageState('selections', []);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFontSize = () => {
    setLargeText(!largeText);
  }

  const toggleModal = () => {
    console.log('toggle clicked')
    setModalOpen(!modalOpen);
  };

  function setRenderSelection(cfiRange, contents) {
    if (rend) {
      setSelections((list) =>
        list.concat({
          text: rend.getRange(cfiRange).toString(),
          cfiRange,
        })
      )
      console.log('selections', selections)
      rend.annotations.add(
        'highlight',
        cfiRange,
        {},
        undefined,
        'hl',
        { fill: 'grey', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
      )
      const selection = contents.window.getSelection()
      console.log(selection)
      selection?.removeAllRanges()
    }
  }

  useEffect(() => {
    console.log('selections', selections)
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

  return (

    <div className="container">
      <div className="row gap-4">
        <div className="col-12 d-flex justify-content-between align-items-center gap-2">

          <div className="dots" onClick={toggleModal}>. . .</div>

          <Modal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            largeText={largeText}
            setLargeText={setLargeText}
            rend={rend}
            selections={selections}
            setSelections={setSelections} />

        </div>

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container">
            < ReactReader
              title={title}
              url={epubUrl}
              location={location}
              locationChanged={(loc) => { setLocation(loc) }}
              getRendition={(rendition) => {
                console.log('location', location)
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





// const locationChanged = epubcifi => {
//   if (!firstRenderDone) {
//     console.log('first render')
//     setLocation(localStorage.getItem('book-progress')); //returns null if item not found
//     setFirstRenderDone(true);
//     return;
//   }
//   console.log('second render')
//   localStorage.setItem('book-progress', epubcifi);
//   setLocation(epubcifi)
// }