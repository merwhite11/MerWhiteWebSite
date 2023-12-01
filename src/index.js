require('file-loader?name=[name].[ext]!./index.html')
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import React, {useState, useRef} from 'react';
import App from './App';


import {usePdf, Pdf} from "@mikecousins/react-pdf";

const MyPdfViewer = () => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
        file: 'sample.pdf',
        page,
        canvasRef,
      });

      return (
        <Pdf file="./sample.pdf" page={page}>
          {({ pdfDocument, pdfPage, canvas }) => (
            <>
              {!pdfDocument && <span>Loading...</span>}
              {canvas}
              {Boolean(pdfDocument && pdfDocument.numPages) && (
                <nav>
                  <ul className="pager">
                    <li className="previous">
                      <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    <li className="next">
                      <button
                        disabled={page === pdfDocument.numPages}
                        onClick={() => setPage(page + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
        </Pdf>
      );
    };

// const App = () => {
//  return <h1>💠Welcome to Mer White's Web Site!💠</h1>;
//  }
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<MyPdfViewer />)
// ReactDOM.render(<App />, document.getElementById('app'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <MyPdfViewer/>
//         </BrowserRouter>
//     </React.StrictMode>
//     );