import React, {useState} from "react";
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
import GVD from '../../docs/gvd.pdf';

function SinglePage({doc}) {
  //get total numbers of pages
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [zoom, setZoom] = useState(1)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
    setZoom(1)
  };

  function handleZoom(amount) {
    setZoom(amount)
  }

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