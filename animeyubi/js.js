const selector = "#page-content > div > div.w-full.max-w-screen-2xl.px-3.mx-auto.py-10.bg-skin-primary.grid.gap-10 > section:nth-child(2)";

const intervalId = setInterval(() => {
  const target = document.querySelector(selector);
  if (target) {
    target.remove(); // 요소 삭제
    console.log("요소를 삭제.");
  }
  
}, 100);


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
    if (e.clientY < navBottom + 100) {
      // 마우스가 nav보다 위에 → 보이게
      nav.classList.remove('hidden');
      nav.classList.add('visible');
    } else {
      // 마우스가 nav보다 아래로 → 숨기기
      nav.classList.remove('visible');
      nav.classList.add('hidden');
    }
  });
 