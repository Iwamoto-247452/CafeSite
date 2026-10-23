const images = [
  "images/Cafe1.jpg",
  "images/Cafe2.jpg",
  "images/Cafe3.jpg"
]

const sliderImage = document.getElementById("slider-image");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let curentIndex = 0;

function showImage(){
  sliderImage.src = images[curentIndex];
}

function showNextImage(){
  curentIndex++;

  if (curentIndex >= images.length){
    curentIndex = 0;
  }

  showImage();

}

function showPrevImage(){
  curentIndex--;

  if (curentIndex < 0){
    curentIndex = images.length - 1;
  }

  showImage();

}

nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

setInterval(showNextImage, 5000);



const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

function showMenu(category){

  menuCards.forEach(function (card) {
    card.classList.remove("show");
    card.classList.remove("fade-in");
  });

  void document.body.offsetWidth;

  menuCards.forEach(function (card){

    const categories = card.dataset.category.split(" ");

    if(categories.includes(category)){
      card.classList.add("show");
      card.classList.add("fade-in");
    } else {
      card.classList.remove("show");
      card.classList.remove("fade-in");
    }

  });

}

menuTabs.forEach(function (tab){
  
  tab.addEventListener("click", function(){
  
  const selectedCategory = tab.dataset.category;

  showMenu(selectedCategory);
  
  menuTabs.forEach(function(button){
    button.classList.remove("active");
  });

  tab.classList.add("active");

  });
});

showMenu("recommended");