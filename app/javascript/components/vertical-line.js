const initVerticalLine = () => {
  const line = document.getElementById("line");
  const imgCreative = document.getElementById("img-creative-intel");
  const blocCreative = document.querySelector(".bloc-creative-intelligent");
  if (line) {
    imgCreative.style.height = `${blocCreative.offsetHeight}px`;
    window.addEventListener('scroll', () => {
      const height = Math.abs(blocCreative.getBoundingClientRect().top);
      if(blocCreative.getBoundingClientRect().top < 0){
        line.style.height = `${height * 1.4 + 80}px`;
        line.style.maxHeight = `${blocCreative.offsetHeight}px`;
      }
      if(blocCreative.getBoundingClientRect().top < 0){
        imgCreative.style.opacity = "1"
      }
    });
  }
}

export { initVerticalLine };
