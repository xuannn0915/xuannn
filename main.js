import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// loading
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".logo-loading").style.display = "none";
  }, 2300); // 確保動畫結束後才隱藏
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