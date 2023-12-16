let imgArray = [
    "images/studio4 (1).avif",
    "images/studio4 (2).avif",
    "images/studio4 (3).avif",
    "images/studio4 (4).avif",
  ];
  let currentIndex = 0;
  let output = document.querySelector("#imageSlide");
  let rightBtn = document.querySelector("#rightImgBtn");
  let LeftBtn = document.querySelector("#prevImgBtn");

  rightBtn.addEventListener("click", MoveNext);
  LeftBtn.addEventListener("click", MovePrev);

  function MoveNext() {
    currentIndex++;
    if (currentIndex >= imgArray.length) {
      currentIndex = 0;
    }
    output.src = imgArray[currentIndex];
  }

  function MovePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 4;
      currentIndex--;
    }
    output.src = imgArray[currentIndex];
  }