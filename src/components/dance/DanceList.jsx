import React from 'react';
import DanceTile from './DanceTile.jsx';


const DanceList = () => {
  var closer = "LJ-MTCDq0Zg?si=jf6KsUp6th0ozj04";
  var malamente = "Bc_uHVpIUD4?si=5J1EB9VbgqA0UXvo";
  var gravity = "opm9kHGv1iA?si=RQPDMHNZNoqcSmQU";
  var comer = "1E-QcAMJn2o?si=3NgXgUg0SK_g5ssQ";
  var seethrough = "2W3vhjb8nnw?si=vueEiFeCRjXKj3wB";
  var bikefreak = "GHb2TiEzRjk?si=SVLgiVgEBIueCisR";
  var seventeen = "JSbfwb3WekI?si=UMAfeXj-bU_oT6DY";
  var sunrise = "YVN3v3MdECs?si=9otaLMtOPIwvBmCZ";
  var pool = "TqCMGL_4MkM?si=O4cIcvnjbB4prYKf";
  var cooloff = "YND3kxGMk1U?si=F-USf8TCp9WYn1-y";
  var sucker = "EQC1BvdmSGM?si=7XrGVWF2X4WNQ-1b";
  var june = "UZpsfi2GKcc?si=lrfrRv4FxLI-AZAC";
  var sisterboy = "QMjknbOkObU?si=qHAkYFRKHLvt6UyY";
  const videoIds = [closer, malamente, gravity, comer, seethrough, bikefreak, seventeen, sunrise, pool, cooloff, sucker, june, sisterboy]

  return videoIds.map((vid) => <DanceTile videoId={vid}/>)
}

export default DanceList;