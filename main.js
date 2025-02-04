import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// loading
document.addEventListener("DOMContentLoaded", function () {
  let content = document.querySelector(".loading-content");
  
  // 頁面載入時先淡出網站內容
  content.style.opacity = "0";

  setTimeout(() => {
    // 顯示 Loading 畫面
    document.querySelector(".logo-loading").style.opacity = "1";
    content.style.visibility = "hidden"; // 防止頁面閃現

    setTimeout(() => {
      // Loading 淡出
      document.querySelector(".logo-loading").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".logo-loading").style.display = "none";
        // 頁面淡入
        content.style.visibility = "visible";
        content.style.opacity = "1";
      }, 500); // 確保 Loading 淡出後才顯示頁面
    }, 1000); // Loading 顯示 2.3 秒
  }, 500); // 先讓原本的內容淡出後才進入 Loading
});






// cursor
const cursor = document.querySelector('.custom-cursor');
const cards = document.querySelectorAll('.project-card'); // 取得所有卡片

// 讓游標跟隨滑鼠移動
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// 針對每張卡片都加入 hover 事件
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursor.style.transform = 'scale(1.2)';
  });

  card.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursor.style.transform = 'scale(1)';
  });
});