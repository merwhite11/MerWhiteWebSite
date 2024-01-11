import React, {useState} from "react";
import {Document, Page} from "react-pdf";
// import ReactPDF from '@react-pdf/renderer';
import GVD from '../../docs/gvd.pdf';
import ZoomComponent from '../writing/ZoomComponent.jsx'


function SinglePage({doc}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fontSize, setFontSize] = useState(14);

  const [zoom, setZoom] = useState(1)
  //get total numbers of pages
  // const styles = StyleSheet.create({
  //   customFont: {
  //     fontSize: fontSize
  //   }
  // })

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
    setZoom(1)
  };

  function zoomIn() {
    setZoom(prevZoom => Math.min(prevZoom + .25, 2)); // Increase zoom by 10%, up to a maximum of 200%
  };

  function zoomOut() {
    setZoom(prevZoom => Math.max(prevZoom - .25, .5)); // Decrease zoom by 10%, down to a minimum of 50%
  };

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  function previousPage() {
    changePage(-1);
  };

  function nextPage() {
    changePage(1);
  };

  // const pdf = props;
    return (
      <div className="single-pdf-div">
        <ZoomComponent zoomIn={zoomIn} zoomOut={zoomOut}></ZoomComponent>
        <Document
          file={doc}
          // options={{workerSrc: "/pdf.worker.js"}}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={zoom}
          />

        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button
            type="button"
            disabled={pageNumber <=1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
};

export default SinglePage;