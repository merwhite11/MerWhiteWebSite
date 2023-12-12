import React from 'react';
import DanceTile from './DanceTile.jsx'
const DanceList = () => {
  const videoIds = ["Bc_uHVpIUD4?si=5J1EB9VbgqA0UXvo", "opm9kHGv1iA?si=RQPDMHNZNoqcSmQU", "1E-QcAMJn2o?si=3NgXgUg0SK_g5ssQ"]

  return videoIds.map((vid) => <DanceTile videoId={vid}/>)
}

export default DanceList;