const selector = "#page-content > div > div.w-full.max-w-screen-2xl.px-3.mx-auto.py-10.bg-skin-primary.grid.gap-10 > section:nth-child(2)";

const intervalId = setInterval(() => {
  const target = document.querySelector(selector);
  if (target) {
    target.remove(); // 요소 삭제
    console.log("요소를 삭제.");
  }
  
}, 100);

/////////////////////////////////////////////////////////////////////

 const nav = document.querySelector('#react-body > nav');
  let navBottom = 0;

  function updateNavBottom() {
    const rect = nav.getBoundingClientRect();
    navBottom = rect.bottom;
  }

  // 최초 및 리사이즈 시 nav 위치 계산
  window.addEventListener('load', updateNavBottom);
  window.addEventListener('resize', updateNavBottom);

  // 마우스 움직임 감지
  window.addEventListener('mousemove', (e) => {
    if (e.clientY < navBottom + 40) {
      // 마우스가 nav보다 위에 → 보이게
      nav.classList.remove('hidden');
      nav.classList.add('visible');
    } else {
      // 마우스가 nav보다 아래로 → 숨기기
      nav.classList.remove('visible');
      nav.classList.add('hidden');
    }
  });
  
  /////////////////////////////////////////////////////////////////////
 
var checkInterval = setInterval(function () {
  var targetElement = document.querySelector(
    '#page-content > div.w-full.max-w-screen-2xl.px-3.mx-auto.my-2.mb-14.anime-episode-container > div.flex.flex-col.gap-3.rounded.mt-2 > div.grid.grid-cols-1.gap-2 > div:nth-child(1) > div'
  );

  if (targetElement && !document.querySelector('#jimaku-button')) {
    var button = document.createElement('a');
    button.textContent = 'jimaku';
    button.href = 'https://jimaku.cc/';
    button.target = '_blank';
    button.id = 'jimaku-button'; // 중복 방지용 ID
    button.style.display = 'inline-block';
    button.style.marginTop = '10px';
    button.style.padding = '6px 12px';
    button.style.backgroundColor = '#3498db';
    button.style.color = 'white';
    button.style.borderRadius = '6px';
    button.style.textDecoration = 'none';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';

    // 버튼 클릭 시 복사 기능 실행
    button.addEventListener('click', function (e) {
      e.preventDefault(); // 링크 기본 동작 잠시 막기

      // 복사할 대상 텍스트 추출
      var linkElement = document.querySelector(
        '#page-content > div.w-full.max-w-screen-2xl.px-3.mx-auto.my-2.mb-14.anime-episode-container > div.flex.flex-col.gap-3.rounded.mt-2 > div.grid.grid-cols-1.gap-2 > div:nth-child(3) > div > div:nth-child(1) > a'
      );

      if (linkElement) {
        var textToCopy = linkElement.textContent.trim();

        // 클립보드에 복사
        navigator.clipboard.writeText(textToCopy).then(function () {
          console.log('클립보드에 복사됨:', textToCopy);
          // 복사 성공 후 링크 열기
          window.open('https://jimaku.cc/', '_blank');
        }).catch(function (err) {
          console.error('복사 실패:', err);
          // 그래도 링크는 열어줌
          window.open('https://jimaku.cc/', '_blank');
        });
      } else {
        console.warn('복사할 텍스트 요소를 찾을 수 없음');
        window.open('https://jimaku.cc/', '_blank');
      }
    });

    targetElement.appendChild(button);
    clearInterval(checkInterval);
  }
}, 1000);

/////////////////////////////////

  setInterval(() => {
    const videoElement = document.getElementById("anime-episode-video");
    if (videoElement) {
      videoElement.style.height = "60rem";
      clearInterval(intervalId);
    }
  }, 1000);
