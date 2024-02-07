import { Contents, Rendition } from 'epubjs'
import React, { useState, useRef, useEffect } from 'react';
import { ReactReader, EpubView } from 'react-reader';
import useLocalStorageState from 'use-local-storage-state';
// type Props = {
//   title: string
//   actions?: ReactNode
//   above?: ReactNode
//   children: ReactNode
// }

export const Example = ({doc, title}) => {
  const epubUrl = process.env.PUBLIC_URL + `${doc}`;
  // const epubUrl = "https://react-reader.metabits.no/files/alice.epub"
  // const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const [location, setLocation] = useLocalStorageState('book-loc', 0);
  const rendition = useRef<Rendition | undefined>(undefined)
  const [largeText, setLargeText] = useState(false);

  const renditionRef = useRef<Rendition | null>(null);

  useEffect(() => {
    const book = new ePub(epubUrl); // Instantiate the ePub object with your EPUB file path
    const rendition = book.renderTo("reader-container"); // Render to an HTML element

    renditionRef.current = rendition;

    return () => {
      renditionRef.current?.destroy(); // Cleanup on unmount
    };
  }, []); // Run only once on component mount

  // Other component logic...

};

export default Example;