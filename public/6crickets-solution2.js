const desiredCameraDetails = {
  lightLevel: [100, 500],
  subjectDistance: [1, 5]
};

const hardwareCameras = [
  { subjectDistance: [1, 3], lightLevel: [100, 300] },
  { subjectDistance: [4, 5], lightLevel: [200, 200] },
  { subjectDistance: [2, 6], lightLevel: [400, 500] },
];

//Assumption is made that subjectDistance and lightLevel individual values will follow [min, max] format

function hardwareCamsPassingTest(desiredCameraDetails, hardwareCameras) {
  const hardwareCamsAfterTest = hardwareCameras.map(cam => {
    let newCam = { ...cam }; 

    newCam.validSubjectDistance = 
      desiredCameraDetails.subjectDistance[0] <= newCam.subjectDistance[0] && 
      desiredCameraDetails.subjectDistance[1] >= newCam.subjectDistance[1];
    
    newCam.validLightLevel = 
      desiredCameraDetails.lightLevel[0] <= newCam.lightLevel[0] && 
      desiredCameraDetails.lightLevel[1] >= newCam.lightLevel[1];
    
    return newCam; 
  });

  return {
    hardwareSetPassed: hardwareCamsAfterTest.length > 0 && hardwareCamsAfterTest.every(cam => cam.validSubjectDistance && cam.validLightLevel),
    hardwaresPassed: hardwareCamsAfterTest.filter(cam => cam.validSubjectDistance && cam.validLightLevel),
  }
}

const testResults = hardwareCamsPassingTest(desiredCameraDetails, hardwareCameras)

console.log(testResults.hardwareSetPassed);
console.log(testResults.hardwaresPassed);