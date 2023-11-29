const imageContainer = document.getElementById('image-container');
const images = document.querySelectorAll('.image');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
});

function updateImages() {
  images.forEach((image, index) => {
    const distance = (index - currentIndex + images.length) % images.length;
    const scale = 1 - 0.2 * Math.abs(distance);

    image.style.transform = `scale(${scale})`;
  });

  const translateXValue = -currentIndex * (100 + 10); // Adjusted for gap
  imageContainer.style.transform = `translateX(${translateXValue}%)`;
}