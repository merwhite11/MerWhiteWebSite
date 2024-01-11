import React, { useState } from "react";
import { Document, Page, PageLayout } from "react-pdf";
import layoutDocument from "@react-pdf/layout";
import pdf from '../../docs/blinking.pdf'

export default function DoublePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  function previousPage() {
    changePage(-2);
  };

  function nextPage() {
    changePage(2);
  };

  return (
    <div className="double-pdf-div">
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      // pageLayout = {twoColumnLeft}
      // options={{pageLayout:'twoColumnLeft'}}
      >
        <div className="pages">
          <Page className="page" pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />

          <div class="vr"></div>
          <Page className="page" pageNumber={pageNumber + 1} renderTextLayer={false} renderAnnotationLayer={false} />


        </div>
        {/* {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))} */}
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
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
}

