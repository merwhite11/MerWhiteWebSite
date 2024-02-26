import React, { useEffect, useRef } from 'react';
import ePub from 'epubjs';

const EpubViewer = ({doc}) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const epubUrl = process.env.PUBLIC_URL + `${doc}.epub`;
    const initEpubViewer = async () => {
      const book = await ePub(epubUrl);
      // const rendition = book.renderTo("area", { flow: "paginated", width: "900", height: "600" });

      const rendition = book.renderTo("viewer", {height: "100vh", width: "50vw", spread: "always"})
      // const rendition = book.renderTo(viewerRef.current);
      const displayed = rendition.display();


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
  }, []);

  return <div ref={viewerRef} style={{ width: '50vw', height: '100vh' }} />;
};

export default EpubViewer;