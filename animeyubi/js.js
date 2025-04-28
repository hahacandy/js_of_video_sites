// --- 요소 제거 스크립트 ---
const removeSelector = "#page-content > div > div.w-full.max-w-screen-2xl.px-3.mx-auto.py-10.bg-skin-primary.grid.gap-10 > section:nth-child(2)";
const removeIntervalId = setInterval(() => {
  const target = document.querySelector(removeSelector);
  if (target) {
    target.remove(); // 요소 삭제
    console.log("요소를 삭제했습니다.");
    clearInterval(removeIntervalId);
  }
}, 100);


// --- 네비게이션(헤더) 보이기/숨기기 ---
const nav = document.querySelector('#react-body > nav');
let navBottom = 0;

// 헤더 위치 갱신 함수
function updateNavBottom() {
  const rect = nav.getBoundingClientRect();
  navBottom = rect.bottom;
}

// 최초 로드 및 리사이즈 시 위치 갱신
window.addEventListener('load', updateNavBottom);
window.addEventListener('resize', updateNavBottom);

// 마우스 포인터 위치 기준
const showThresholdMin = 2;        // 상단 얼마나 지나야 나타날지
const showThresholdExtra = 75;      // nav 하단으로부터 허용 범위

window.addEventListener('mousemove', (e) => {
  const y = e.clientY;

  // y가 최소/최대 구간 사이일 때만 보여주기
  if (y > showThresholdMin && y < navBottom + showThresholdExtra) {
    nav.classList.remove('hidden');
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
    nav.classList.add('hidden');
  }
});


// --- "jimaku" 버튼 추가 및 복사 기능 ---
const checkInterval = setInterval(() => {
  const epiContainer = document.querySelector(
    '#page-content > div.w-full.max-w-screen-2xl.px-3.mx-auto.my-2.mb-14.anime-episode-container'
  );
  const targetElement = epiContainer?.querySelector(
    'div.flex.flex-col.gap-3.rounded.mt-2 > div.grid.grid-cols-1.gap-2 > div:nth-child(1) > div'
  );

  if (targetElement && !document.querySelector('#jimaku-button')) {
    const button = document.createElement('a');
    button.textContent = 'jimaku';
    button.href = 'https://jimaku.cc/';
    button.target = '_blank';
    button.id = 'jimaku-button';
    button.style.cssText = `
      display: inline-block;
      margin-top: 10px;
      padding: 6px 12px;
      background-color: #3498db;
      color: white;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    `;

    button.addEventListener('click', (e) => {
      e.preventDefault();

      const linkElement = epiContainer.querySelector(
        'div.grid.grid-cols-1.gap-2 > div:nth-child(3) > div > div:nth-child(1) > a'
      );

      if (linkElement) {
        const textToCopy = linkElement.textContent.trim();
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('클립보드에 복사됨:', textToCopy);
            window.open(button.href, '_blank');
          })
          .catch((err) => {
            console.error('복사 실패:', err);
            window.open(button.href, '_blank');
          });
      } else {
        console.warn('복사할 텍스트 요소를 찾을 수 없음');
        window.open(button.href, '_blank');
      }
    });

    targetElement.appendChild(button);
    clearInterval(checkInterval);
  }
}, 1000);


// --- 비디오 높이 조정 스크립트 ---
setInterval(() => {
  const videoElement = document.getElementById('anime-episode-video');
  if (videoElement) {
    videoElement.style.height = '60rem';
    console.log('비디오 높이 조정 완료');
    // 이 스크립트는 한 번만 실행하면 되므로 clearInterval은 removeIntervalId가 아닌
    // 해당 인터벌 ID 변수를 따로 관리해야 합니다.
  }
}, 1000);