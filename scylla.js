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

// 点击提交按钮时，将用户输入的内容作为弹幕显示
submitBtn.addEventListener('click', function () {
  const userInput = inputBox.value.trim(); // 获取用户输入的内容
  if (userInput) {
      createDanmaku(userInput); // 生成弹幕
      inputBox.value = ''; // 清空输入框
  } else {
      alert('请输入内容！');
  }
});

// 模拟弹幕数据，1秒生成一个弹幕
setInterval(() => {
  createDanmaku('马杰：生日快乐小网站'); 
  createDanmaku('');
  createDanmaku('朴仁国：我喜欢txx'); 
  createDanmaku('');
  createDanmaku('谦r：哈哈哈哈哈，教教我'); 
  createDanmaku('');
  createDanmaku('谦r：恋爱脑的科学解释'); 
  createDanmaku('唐欣欣：没事，就当我没看到，没看到就是不知道🌹');
  createDanmaku('吴一迪：我喜欢看被查封的黄色小网站');
   // 可以修改为你需要的内容
}, 3000);



// 点击图片查看放大效果
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG' && event.target.closest('#egypt-gallery .photo-grid')) {
      // 创建一个全屏遮罩层
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '9999';

      // 创建放大的图片
      const img = document.createElement('img');
      img.src = event.target.src;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '90%';
      img.style.borderRadius = '8px';

      // 将放大图片添加到遮罩层中
      overlay.appendChild(img);

      // 点击遮罩层关闭放大图
      overlay.addEventListener('click', function () {
          document.body.removeChild(overlay);
      });

      // 将遮罩层添加到 body 中
      document.body.appendChild(overlay);
  }
});







