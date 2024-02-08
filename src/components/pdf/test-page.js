import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs'

import { DEMO_URL } from '../config';


const TestPage = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const rendition = useRef(null)
  const [largeText, setLargeText] = useState(false);
  const [selections, setSelections] = useState([]);
  const [size, setSize] = useState(100)

  useEffect(() => {
    if (rendition.current) {
      function setRenderSelection(cfiRange, contents) {
        if (rendition) {
          setSelections((list) =>
            list.concat({
              text: rendition.getRange(cfiRange).toString(),
              cfiRange,
            })
          )
          rendition.annotations.add(
            'highlight',
            cfiRange,
            {},
            undefined,
            'hl',
            { fill: 'red', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
          )
          const selection = contents.window.getSelection()
          selection?.removeAllRanges()
        }
      }
      rendition.on('selected', setRenderSelection)
      return () => {
        rendition?.off('selected', setRenderSelection)
      }
    }
  }, [setSelections, rendition])

  useEffect(() => {
    if (rendition.current) {
      console.log(rendition.current);
      rendition.current.themes.fontSize(largeText ? '140%' : '100%');
    }
  }, [largeText]);

  useEffect(() => {
    if (rendition.current) {
      rendition.current.themes.fontSize(largeText ? '140%' : '100%');
    }
  }, [rendition, largeText]);

  return (
    <div className="reader-container">
      <div className="font-size-btn">
        {/* <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
        <span>Current size: {size}%</span>
        <button onClick={() => changeSize(Math.max(80, size + 10))}>+</button> */}
          <button onClick={() => setLargeText(!largeText)} className="btn">{largeText? 'Decrease font-size' : 'Increase font-size'}
          </button>
      </div>

      < ReactReader className="reader"
        title={title}
        url={epubUrl}
        location={location}
        locationChanged={(loc) => setLocation(loc)}
        getRendition={(r) => {
          console.log('rendition', r)

          rendition.current = r
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
    // </div>
    // </div>
  )
}

export default TestPage;