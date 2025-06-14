document.addEventListener("DOMContentLoaded", () => {
  let count = 0;

  const button = document.getElementById("poyoButton");
  const countDisplay = document.getElementById("poyoCount");
  const poyoSound = document.getElementById("poyoSound");
  const plusOneContainer = document.getElementById("plusOneContainer");
  const kirbyImage = document.getElementById("kirbyImage");

  // ボタンを押したとき
  button.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
    poyoSound.currentTime = 0;
    poyoSound.play();

    const plusOne = document.createElement("div");
    plusOne.className = "plusOne";
    plusOne.textContent = "+1";
    plusOneContainer.appendChild(plusOne);
    setTimeout(() => plusOne.remove(), 1000);
  });

  // カービィ画像の頭をクリックしたとき
  kirbyImage.addEventListener("click", (e) => {
    const rect = kirbyImage.getBoundingClientRect();
    const clickY = e.clientY - rect.top;

    if (clickY < rect.height / 2) {
      count++;
      countDisplay.textContent = count;
      poyoSound.currentTime = 0;
      poyoSound.play();

      const plusOne = document.createElement("div");
      plusOne.className = "plusOne";
      plusOne.textContent = "+1";
      plusOneContainer.appendChild(plusOne);
      setTimeout(() => plusOne.remove(), 1000);
    }
  });
});
