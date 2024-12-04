document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// 弹幕文本数组
const danmakuTexts = [
    "马杰：生日快乐小网站！",
  ];
  
  // 获取弹幕容器
  const container = document.getElementById('danmaku-container');
  
  // 创建并加入弹幕
  function createDanmaku() {
    // 随机选择一条弹幕文本
    const text = danmakuTexts[Math.floor(Math.random() * danmakuTexts.length)];
  
    // 创建弹幕div
    const danmaku = document.createElement('div');
    danmaku.className = 'danmaku';
    danmaku.textContent = text;
  
    // 设置弹幕初始位置
    danmaku.style.top = Math.random() * (container.offsetHeight - 30) + 'px'; // 随机垂直位置
    container.appendChild(danmaku);
  
    // 删除超出视图的弹幕
    setTimeout(() => {
      danmaku.remove();
    }, 10000); // 弹幕动画时长
  }
  
  // 每2秒创建一条弹幕
  setInterval(createDanmaku, 2000);
  