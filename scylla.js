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

// 模拟生成弹幕
function createDanmaku(text) {
  const danmakuElement = document.createElement('div');
  danmakuElement.classList.add('danmaku'); // 添加类名
  danmakuElement.innerText = text; // 设置弹幕文本内容
  danmakuElement.style.top = `${Math.random() * 100}px`; // 随机设置弹幕的垂直位置
  
  // 将弹幕元素添加到容器中
  danmakuContainer.appendChild(danmakuElement);

  // 删除已滚动出去的弹幕元素
  setTimeout(() => {
    danmakuElement.remove();
  }, 10000); // 10秒后删除（与滚动时间匹配）
}

// 模拟弹幕数据，1秒生成一个弹幕
setInterval(() => {
  createDanmaku('马杰：生日快乐小网站'); // 可以修改为你需要的内容
}, 1000);

setInterval(() => {
    createDanmaku('朴仁国：如果她来滑雪，我就更喜欢她了'); // 可以修改为你需要的内容
  }, 1000);
