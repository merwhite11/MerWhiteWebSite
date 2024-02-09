import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import { Container } from 'react-bootstrap';
import useLocalStorageState from 'use-local-storage-state';
import { Contents, Rendition } from 'epubjs';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

import { DEMO_URL } from '../config';


const TestPage = ({ doc, title }) => {

  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const rendition = useRef(null)
  const [largeText, setLargeText] = useState(false);
  const [rend, setRend] = useState(null)
  const [selections, setSelections] = useLocalStorageState('selections', []);
  // const [selections, setSelections] = useState([]);
  // const [storedSelections, setStoredSelections] = useState([])
  const storedSelections = JSON.parse(localStorage.getItem('selections')) || [];
  const [size, setSize] = useState(100)

  const addSelection = (newSelection) => {
    console.log('newSelection', newSelection)
    const updatedSelections = [...selections, newSelection];
    setSelections(updatedSelections);
    localStorage.setItem('selections', JSON.stringify(updatedSelections))
  }
  useEffect(() => {
    console.log('selections', selections)
    localStorage.setItem('selections', JSON.stringify(selections))
  }, [selections])

  useEffect(() => {
    if (rend) {
      console.log('rendition', rendition)
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
      rend.on('selected', setRenderSelection)
      return () => {
        rend?.off('selected', setRenderSelection)
      }
    }
  }, [setSelections, rend])

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
    <div className="container">
      <div className="row gap-4">
        <div className="col-12 d-flex justify-content-between align-items-center gap-2">
          <div className="col-md-10 border border-secondary bg-white min-height-100 p-2 rounded">
            <h4>Selections</h4>
            <ul class="list-unstyled border-top border-stone-400">
            {selections?.map(({ text, cfiRange }, i) => (
              <li key={i} className="p-2">
                <span>{text}</span>
                </li>
            ))}
            </ul>
          </div>
          <button onClick={() => setLargeText(!largeText)} className="btn btn-light">
            {largeText ? 'Smaller font' : 'Bigger font'}
          </button>
        </div>

        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div className="reader-container">
            <ReactReader
              // className="reader"
              title={title}
              url={epubUrl}
              location={location}
              locationChanged={(loc) => setLocation(loc)}
              getRendition={(r) => {
                setRend(r)
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
        </div>
      </div>
    </div>

  )
}

export default TestPage;