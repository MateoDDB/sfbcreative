const initContactCities = () => {
  const citiesNy = document.getElementById("nyc")
  const citiesParis = document.getElementById("paris")
  const citiesMilan = document.getElementById("milan")
  const wrapperBackground = document.querySelector(".site-wrapper")
  if (citiesNy) {
    citiesNy.addEventListener("mouseover", function(){
      wrapperBackground.style.backgroundImage = "linear-gradient(rgba(244,244,244,0.9), rgba(244,244,244,0.9)), url(https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)";
    });
    citiesNy.addEventListener("mouseout", function(){
      wrapperBackground.style.backgroundImage = "none";
      // console.log("hello")
    });
    citiesParis.addEventListener("mouseover", function(){
      wrapperBackground.style.backgroundImage = "linear-gradient(rgba(244,244,244,0.9), rgba(244,244,244,0.9)), url(https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)";
    });
    citiesParis.addEventListener("mouseout", function(){
      wrapperBackground.style.backgroundImage = "none";
      // console.log("hello")
    });
    citiesMilan.addEventListener("mouseover", function(){
      wrapperBackground.style.backgroundImage = "linear-gradient(rgba(244,244,244,0.9), rgba(244,244,244,0.9)), url(https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)";
    });
    citiesMilan.addEventListener("mouseout", function(){
      wrapperBackground.style.backgroundImage = "none";
      // console.log("hello")
    });
  }
}

export { initContactCities };
