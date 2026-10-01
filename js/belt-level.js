const INSTRUCTOR_PASSWORD = 'Kyosanim';
const INSTRUCTOR_ACCESS_KEY = 'electric-city-instructor-access';
const levelName = document.body.dataset.level || 'Student';
const requiresPassword = levelName === 'Instructors';

const accessGate = document.querySelector('#access-gate');
const passwordForm = document.querySelector('#password-form');
const passwordInput = document.querySelector('#curriculum-password');
const passwordMessage = document.querySelector('#password-message');
const curriculumContent = document.querySelector('#curriculum-content');
const videoList = document.querySelector('#video-list');
const lockButton = document.querySelector('#lock-curriculum');

const videoSets = {
  'White Belt': [
    { title: 'How to Tie Your Belt', url: 'https://youtu.be/zpl_VCfkkh0' },
    { title: 'Gi Cho Hyung Il Bu', url: 'https://youtu.be/RJy-8PBQHAo' },
    { title: 'Gi Cho Hyung Ee Bu', url: 'https://youtu.be/OPrpY122Mws' },
    { title: 'Gi Cho Hyung Sam Bu', url: 'https://youtu.be/D4tjHPoDfNo' },
    { title: 'Hand One Steps 1-4', url: 'https://youtu.be/C0ykMEJj_Sc' },
    { title: 'Foot One Steps 1-4', url: 'https://youtu.be/cDM61M-7p_I' }
  ],
  'Orange Belt': [
    { title: 'Pyung Ahn Cho Dan', url: 'https://youtu.be/P9kkAJmGzL4' },
    { title: 'Hand One Steps 5-6', url: 'https://youtu.be/V-u09ZXNETw' },
    { title: 'Foot One Steps 5-6', url: 'https://youtu.be/ZS6b-O0Pqc4' }
  ],
  'Green Belt': [
    { title: 'Pyung Ahn Ee Dan', url: 'https://youtu.be/4hINhDbQUfQ' },
    { title: 'Hand One Steps 7-8', url: 'https://youtu.be/QtggQ3eN_5k' },
    { title: 'Foot One Steps 7-8', url: 'https://youtu.be/eY_oGPFMTlM' }
  ],
  'Green Belt, 1 Stripe': [
    { title: 'Pyung Ahn Sam Dan', url: 'https://youtu.be/sFS6mZcCA_U' },
    { title: 'Hand One Steps 9-10', url: 'https://youtu.be/Nj9NKfNHSgc' },
    { title: 'Foot One Steps 1-10', url: 'https://youtu.be/uWAuWzIywgA' }
  ],
  'Green Belt, 2 Stripes': [
    { title: 'Pyung Ahn Sa Dan', url: 'https://youtu.be/3Z9g7wouAqs' },
    { title: 'Hand One Steps 11-12', url: 'https://youtu.be/GQy30aXJFzE' },
    { title: 'Foot One Steps 11-12', url: 'https://youtu.be/lmbOSu8SyVE' }
  ],
  'Red Belt': [
    { title: 'Pyung Ahn Oh Dan', url: 'https://youtu.be/hryujHo0dkA' },
    { title: 'Hand One Steps 13-14', url: 'https://youtu.be/dZBNlneinr0' },
    { title: 'Foot One Steps 13-14', url: 'https://youtu.be/Ue58TD7K600' }
  ],
  'Red Belt, 1 Stripe': [
    { title: 'Bassai So', url: 'https://youtu.be/mVMkT-781pY' },
    { title: 'Hand One Steps 15-16', url: 'https://youtu.be/B0vKr8swNz0' },
    { title: 'Foot One Steps 15-16', url: 'https://youtu.be/tzcLM6b045s' }
  ],
  'Red Belt, 2 Stripes': [
    { title: 'Bassai Dae', url: 'https://youtu.be/OHUZruIJ2po' },
    { title: 'Hand One Steps 17-18', url: 'https://youtu.be/bKubwHoAYWI' },
    { title: 'Foot One Steps 17-18', url: 'https://youtu.be/L6gZ5QgmpLE' }
  ],
  'Cho Dan Bo': [
    { title: 'Nai Hanji Cho Dan', url: 'https://youtu.be/SPug-nCOea4' },
    { title: 'Hand One Steps 19-20', url: 'https://youtu.be/3FL_kp4aiGc' },
    { title: 'Foot One Steps 19-20', url: 'https://youtu.be/f1-SdiWhDiA' }
  ],
  'Cho Dan': [
    { title: 'Jin Do', url: 'https://youtu.be/YWG98fja5GY' },
    { title: 'Nai Hanji Ee Dan', url: 'https://youtu.be/hFVwHAbteDk' }
  ],
  'Ee Dan': [
    { title: 'Lo Hi', url: 'https://youtu.be/vBgrt_9ih-o' },
    { title: 'Nai Hanji Sam Dan', url: 'https://youtu.be/G0RxLnyD-HM' }
  ],
  'Sam Dan': [
    { title: 'Kong Sang Koon', url: 'https://youtu.be/tiOAOBzyevI' },
    { title: 'Sip Soo', url: 'https://youtu.be/l9AWVroy8Ss' }
  ],
  'Sa Dan': [
    { title: 'Saisan', url: 'https://youtu.be/nhWMjkidMow' },
    { title: 'Wang Shu', url: 'https://youtu.be/JJUaUkg2P1g' }
  ],
  'Oh Dan': [
    { title: 'Jion', url: 'https://youtu.be/e2dTSNh6DkA' },
    { title: 'Oh Sip Sa Bo', url: 'https://www.youtube.com/watch?v=REPLACE_WITH_VIDEO_ID' }
  ],
  Instructors: [
    { title: "Ji'in", url: 'https://youtu.be/lDTYRnJNauY' },
    { title: '2 Person Tai Chi Fight Set', url: 'https://youtu.be/L7zWMwmfCQc' },
    {
      title: 'Wrist Lock Flow Drill',
      url: 'https://youtu.be/5DvmcoUXtDw',
      note: `This video is only for basic reference.

1. Out
2. In
3. Under
4. Twist
5. Z
6. Armbar
7. Spock lock
Bonus. Finger lock`
    }
  ]
};

const videos = videoSets[levelName] || [];

function showCurriculum() {
  accessGate.hidden = true;
  curriculumContent.hidden = false;
  renderVideos();
}

function lockCurriculum() {
  sessionStorage.removeItem(INSTRUCTOR_ACCESS_KEY);
  curriculumContent.hidden = true;
  accessGate.hidden = false;
  passwordInput.value = '';
  passwordInput.focus();
}

function renderVideos() {
  videoList.replaceChildren();
  videos.forEach((video) => {
    const card = document.createElement('article');
    card.className = 'video-card';
    card.innerHTML = `
      <div>
        <p class="video-level">${levelName}</p>
        <h3>${video.title}</h3>
        ${video.note ? `<p class="video-note">${video.note}</p>` : ''}
      </div>
      <a href="${video.url}" target="_blank" rel="noopener noreferrer">Watch video</a>
    `;
    videoList.append(card);
  });
}

if (!requiresPassword) {
  accessGate.hidden = true;
  lockButton.hidden = true;
  showCurriculum();
} else {
  passwordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (passwordInput.value !== INSTRUCTOR_PASSWORD) {
      passwordMessage.textContent = 'That password did not match. Please try again.';
      passwordInput.select();
      return;
    }
    sessionStorage.setItem(INSTRUCTOR_ACCESS_KEY, 'granted');
    passwordMessage.textContent = '';
    showCurriculum();
  });

  lockButton.addEventListener('click', lockCurriculum);

  if (sessionStorage.getItem(INSTRUCTOR_ACCESS_KEY) === 'granted') {
    showCurriculum();
  }
}