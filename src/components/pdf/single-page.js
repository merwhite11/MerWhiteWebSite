import React, {useState} from "react";
import {Document, Page} from "react-pdf";
import ReactPDF from '@react-pdf/renderer';
import pdf from '../../docs/gvd.pdf'

function SinglePage() {
  //get total numbers of pages
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
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
        <Document
          file={pdf}
          // options={{workerSrc: "/pdf.worker.js"}}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
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