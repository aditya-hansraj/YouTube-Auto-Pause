// Function to pause video
function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
    console.log("Video paused");
  }
}

// Function to resume video
function resumeVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
    console.log("Video resumed");
  }
}

// Get settings from localStorage
const pauseOnTabChange = localStorage.getItem('pauseOnTabChange') === 'true';
const playOnTabChange = localStorage.getItem('playOnTabChange') === 'true';
const pauseOnWindowChange = localStorage.getItem('pauseOnWindowChange') === 'true';
const playOnWindowChange = localStorage.getItem('playOnWindowChange') === 'true';

// Handle tab visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden && pauseOnTabChange) {
    console.log("tab ch - paused");
    pauseVideo();
  } else if (!document.hidden && playOnTabChange) {
    console.log("tab ch - played");
    resumeVideo();
  }
});

// Handle window focus change
window.addEventListener('blur', () => {
  if (pauseOnWindowChange) {
    console.log("wnd ch - paused");
    pauseVideo();
  }
});

window.addEventListener('focus', () => {
  if (playOnWindowChange) {
    console.log("wnd ch - played");
    resumeVideo();
  }
});
