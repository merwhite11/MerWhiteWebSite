import React, { useState } from "react";
import { PDFViewer, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
import GVD from '../../docs/gvd.pdf';
import ZoomComponent from '../writing/ZoomComponent.jsx';
// import HappyMood from '../../assets/HappinessMood.ttf'


function TestPage({ doc }) {
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

  // Font.register({
  //   family: 'HappyMood',
  //   src: HappyMood
  // })
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      // fontFamily: "AntonFamily",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "AntonFamily",

    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      // fontFamily: "AntonFamily",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      // fontFamily: "AntonFamily",
    },
  });
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    setZoom(1)
  };

  function zoomIn() {
    setZoom(prevZoom => Math.min(prevZoom + .25, 2)); // Increase zoom by 10%, up to a maximum of 200%
  };

  function zoomOut() {
    setZoom(prevZoom => Math.max(prevZoom - .25, 1.5)); // Decrease zoom by 10%, down to a minimum of 50%
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
    <div style={{ position: 'relative', height: '100%' }}>
      <div>
        <PDFViewer>

          <Document

            // options={{workerSrc: "/pdf.worker.js"}}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
            // renderTextLayer={false}
            // renderAnnotationLayer={false}
            // scale={zoom}
            >
              <Text file={doc} style={styles.text}></Text>
            </Page>
          </Document>
        </PDFViewer>

      </div>
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
  );
};

export default TestPage;