// Import the main component
// import React, { useState } from 'react';
// import { Worker, Viewer, SpecialZoomLevel, Icon, MinimalButton, Position, Tooltip, ScrollMode } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin, RenderGoToPageProps} from '@react-pdf-viewer/page-navigation';
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import GVD from '../../docs/gvd.pdf'

// // Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
// // import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // interface CustomizeNavigationButtonsExampleProps {
// //   fileUrl: string;
// // }



// function TestPage({ workerUrl }) {
//   const pageNavigationPluginInstance = pageNavigationPlugin();
//   const { GoToPreviousPage } = pageNavigationPluginInstance;

//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (change) => {
//     setCurrentPage((prevPage) => prevPage + change)
//   };
//   return (
//     <div>

//       <Worker workerUrl={workerUrl}>

//         <div className="single-pdf-div"
//         // style={{
//         //   border: '1px solid rgba(0, 0, 0, 0.3)',
//         //   height: '100vh',
//         //   maxWidth: 'auto',
//         //   backgroundColor: 'aliceblue'
//         // }}
//         >
//           {/* Button to go to the previous page */}
//           <div style={{ padding: '0 2px' }}>
//                     <GoToPreviousPage>
//                         {props: (RenderGoToPageProps) => (
//                             <button
//                                 style={{
//                                     backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
//                                     border: 'none',
//                                     borderRadius: '4px',
//                                     color: '#ffffff',
//                                     cursor: props.isDisabled ? 'not-allowed' : 'pointer',
//                                     padding: '8px',
//                                 }}
//                                 disabled={props.isDisabled}
//                                 onClick={props.onClick}
//                             >
//                                 Previous page
//                             </button>
//                         )}
//                     </GoToPreviousPage>
//                 </div>
//           <Viewer
//             style={{ backgroundColor: 'aliceblue', width: '50%' }}
//             fileUrl={GVD}
//             defaultScale={SpecialZoomLevel.PageFit}
//             plugins={[pageNavigationPluginInstance]}
//           />

//           {/* Button to go to the next page */}
//           <button onClick={() => handlePageChange(1)}>
//             Next Page
//           </button>

//         </div>
//       </Worker>
//     </div>
//   )
// }


// export default TestPage;

