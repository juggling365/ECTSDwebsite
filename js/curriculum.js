const CURRICULUM_PASSWORD = 'Tangsoodo';
const ACCESS_KEY = 'electric-city-curriculum-access';

// Replace these placeholder URLs with your unlisted YouTube video links.
const curriculumVideos = [
  {
    title: 'How to prepare for class',
    level: 'All students',
    url: 'https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID'
  },
  {
    title: 'Fundamental stance and movement',
    level: 'Beginner curriculum',
    url: 'https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID'
  },
  {
    title: 'Basic form practice',
    level: 'Current students',
    url: 'https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID'
  }
];

const accessGate = document.querySelector('#access-gate');
const passwordForm = document.querySelector('#password-form');
const passwordInput = document.querySelector('#curriculum-password');
const passwordMessage = document.querySelector('#password-message');
const curriculumContent = document.querySelector('#curriculum-content');
const videoList = document.querySelector('#video-list');
const lockButton = document.querySelector('#lock-curriculum');

function showCurriculum() {
  accessGate.hidden = true;
  curriculumContent.hidden = false;
}

function lockCurriculum() {
  sessionStorage.removeItem(ACCESS_KEY);
  curriculumContent.hidden = true;
  accessGate.hidden = false;
  passwordInput.value = '';
  passwordInput.focus();
}

passwordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (passwordInput.value !== CURRICULUM_PASSWORD) {
    passwordMessage.textContent = 'That password did not match. Please try again.';
    passwordInput.select();
    return;
  }

  sessionStorage.setItem(ACCESS_KEY, 'granted');
  passwordMessage.textContent = '';
  showCurriculum();
});

lockButton.addEventListener('click', lockCurriculum);

if (sessionStorage.getItem(ACCESS_KEY) === 'granted') {
  showCurriculum();
}
