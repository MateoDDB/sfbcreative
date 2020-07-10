const initTitle = () => {
  let titles = document.querySelectorAll(".title");
  if(titles){
    titles.forEach(function(title){
      var i = 0;
      let titleHtml = title.innerHTML;
      title.innerHTML = ""
      function typeWriter(){
        if(i <= titleHtml.length){
          if(title.innerHTML.length > 0 && i == 0) {
            title.innerHTML += titleHtml.charAt(i+1)
          } else {
            title.innerHTML += titleHtml.charAt(i)
          }
          i++
          setTimeout(typeWriter, 160)
        } else {
          i = 0;
          // title.innerHTML = titleHtml.charAt(i)
          title.style.height = `${title.offsetHeight}px`;
          title.innerHTML = ""
          setTimeout(typeWriter, 160)
        }
      }
      typeWriter()
    });
  }
}

export { initTitle };
