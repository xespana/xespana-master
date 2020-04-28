// fallback: show controls if autoplay fails
// (needed for Samsung Internet for Android, as of v6.4)
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});
