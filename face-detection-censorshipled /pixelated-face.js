const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');
const faceDetector = new FaceDetector();
// console.log(video, canvas, faceCanvas, faceDetector);

// Write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  video.srcObject = stream;
  await video.play();
  // size the canvas to be the same size as the video
  // console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces);
  // ask the browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  // requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({boundingBox: face}) {
   // draw the small face
   faceCtx.drawImage()
   // take that face back out and draw it back at normal size.
}

populateVideo().then(detect);
