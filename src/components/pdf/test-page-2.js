import React, { useEffect, useRef } from 'react';
import ePub from 'epubjs';

const EpubViewer = ({ doc }) => {
  const epubUrl = process.env.PUBLIC_URL + `${doc}.epub`;
  const viewerRef = useRef(null);

  useEffect(() => {
    const initEpubViewer = async () => {
      const book = await ePub(epubUrl);

      book.renderTo(viewerRef.current, { width: '70vw', height: '100vh' });

      // Optional: Handle navigation events (e.g., next page, previous page)
      book.on('book:pageChanged', ({ currentPage }) => {
        console.log('Current Page:', currentPage);
      });

      // Cleanup on unmount
      return () => {
        book.destroy();
      };
    };

    initEpubViewer();
  }, [epubUrl]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default EpubViewer;