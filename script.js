document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  let bgmStarted = false;

  const button = document.getElementById("poyoButton");
  const countDisplay = document.getElementById("poyoCount");
  const poyoSound = document.getElementById("poyoSound");
  const bonusSound = new Audio("sounds/PowerUpSound.wav");
  const headSound = new Audio("sounds/HeadTap.wav");
  const bgm = document.getElementById("bgm");
  const bgmToggle = document.getElementById("bgmToggle");
  const plusOneContainer = document.getElementById("plusOneContainer");
  const kirbyImage = document.getElementById("kirbyImage");

  const showPlusOne = (text = "+1", color = "#00ffff") => {
    const plusOne = document.createElement("div");
    plusOne.className = "plusOne";
    plusOne.textContent = text;
    plusOne.style.color = color;
    plusOneContainer.appendChild(plusOne);
    setTimeout(() => plusOne.remove(), 1000);
  };

  const handlePoyo = (sound, increment = 1, visualText = "+1", visualColor = "#00ffff") => {
    count += increment;
    countDisplay.textContent = count;
    sound.currentTime = 0;
    sound.play();
    showPlusOne(visualText, visualColor);

    // スマホ対応：初回操作でBGMをスタート
    if (!bgmStarted) {
      bgm.play().catch(() => {});
      bgmStarted = true;
    }
  };

  // 🎈 ポヨボタンクリック
  button.addEventListener("click", () => {
    const isBonus = (count + 1) % 10 === 0;
    if (isBonus) {
      handlePoyo(bonusSound, 5, "+5!! 🎉", "#ffff00");
    } else {
      handlePoyo(poyoSound);
    }
  });

  // 🧠 カービィの頭クリック
  kirbyImage.addEventListener("click", (e) => {
    const rect = kirbyImage.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    if (clickY < rect.height / 2) {
      handlePoyo(headSound, 1, "+1 🎵", "#ff99ff");
    }
  });

  // 🎵 BGM ON/OFF トグル
  bgmToggle.addEventListener("click", () => {
    if (bgm.paused) {
      bgm.play().catch(() => {});
    } else {
      bgm.pause();
    }
  });
});
