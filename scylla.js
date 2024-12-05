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

// 获取弹幕容器
const danmakuContainer = document.getElementById('danmaku-container');

// 存储使用中的垂直位置
let usedPositions = [];

// 生成弹幕
function createDanmaku(text) {
  const danmaku = document.createElement('div');
  danmaku.classList.add('danmaku');
  danmaku.textContent = text;

  // 随机生成垂直位置
  let topPosition;
  do {
    topPosition = Math.floor(Math.random() * danmakuContainer.offsetHeight);
  } while (usedPositions.includes(topPosition));
  usedPositions.push(topPosition);

  // 设置弹幕位置
  danmaku.style.top = `${topPosition}px`;
  danmakuContainer.appendChild(danmaku);

  // 动画结束后删除弹幕，并释放位置
  setTimeout(() => {
    danmaku.remove();
    usedPositions = usedPositions.filter(pos => pos !== topPosition);
  }, 10000); // 10 秒后删除
}

// 模拟弹幕数据，1秒生成一个弹幕
setInterval(() => {
  createDanmaku('马杰：生日快乐小网站'); 
  createDanmaku('朴仁国：我喜欢txx'); 
  createDanmaku('谦r：哈哈哈哈哈，教教我'); 
  createDanmaku(''); // 可以修改为你需要的内容
}, 1000);
