import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';
// import Selections from '../writing/Selections.jsx'

// import { DEMO_URL } from '../config';
// import Modal from '../writing/Modal.jsx';


const Reader = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const rendition = useRef(null)
  const [largeText, setLargeText] = useState(false);
  const [rend, setRend] = useState(null)
  // const [selections, setSelections] = useLocalStorageState('selections', []);
  // const [highlights, setHighlights] = useState(null);

  // const [modalOpen, setModalOpen] = useState(false);

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

  // useEffect(() => {
  //   console.log('selections', selections)
  //   localStorage.setItem('selections', JSON.stringify(selections))
  // }, [selections])

  //can't get highlights to repopulate on load
  // useEffect(() => {
  //   console.log(selections)
  //   selections?.map(({cfiRange}) => {
  //     rend?.annotations.add(cfiRange)
  //   })
  //   console.log('rend', rend?.annotations._annotations)
  // }, [rend])
  /*
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
        console.log(rendition.current);
        rend.themes.fontSize(largeText ? '140%' : '100%');
      }
    }, [largeText]);

    useEffect(() => {
      if (rend) {
       console.log('rend', rend)
        rend.themes.fontSize(largeText ? '140%' : '100%');
      }
    }, [rend, largeText]);
    */

  return (
    // <div className="container">
    //   <div className="row gap-4">
        {/* <div className="col-12 d-flex justify-content-between align-items-center gap-2"> */}

          {/* <div className="dots" onClick={toggleModal}>. . .</div> */}
          {/* <Selections rend={rend} selections={selections} setSelections={setSelections}/> */}
          {/* <Modal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            largeText={largeText}
            setLargeText={setLargeText}
            rend={rend}
            selections={selections}
            setSelections={setSelections} /> */}

        {/* </div> */}

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container">
            <ReactReader
              // className="reader"
              title={title}
              url={epubUrl}
              location={location}
              locationChanged={(loc) => setLocation(loc)}
              getRendition={(r) => {
                // rendition.current = r
                r.hooks.content.register((contents) => {
                  const body = contents.window.document.querySelector('body')
                  if (body) {
                    body.oncontextmenu = () => {
                      return false
                    }
                  }
                })
                r.themes.fontSize(largeText ? '140%' : '100%')
              }}
            />
          </div>
        </div>
    //   </div>
    // </div>

  )
}

export default Reader;