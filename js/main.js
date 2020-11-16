const video = document.querySelector('.slider__video');
const sliderVideos = document.querySelectorAll('.slider__slide');

let i = 0;

//! Error not able to get the index properly
// for (sliderVideo of sliderVideos) {
//   sliderVideo.addEventListener('click', () => {
//     video.src = `../video/${i + 1}.mp4`;
//     i++;
//     console.log(i);
//   });
// }

for (let i = 0; i < sliderVideos.length; i++) {
  sliderVideos[i].addEventListener('click', () => {
    video.src = `../video/${i + 1}.mp4`;
  });
  console.log(i);
}
