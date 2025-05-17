const images = [
    { src: 'pomada2.webp', caption: '' },
    { src: 'teni2.jpg', caption: '' },
    { src: 'teni3.jpg', caption: '' },
    { src: 'pudra4.jpg', caption: '' },
    { src: 'pudra.jpg', caption: '' }
];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const slideInfo = document.getElementById('slideInfo');
const slideCaption = document.getElementById('slideCaption'); 

function updateImage() {
    sliderImage.src = `images/${images[currentIndex].src}`;
    slideInfo.textContent = `${currentIndex + 1} слайд из ${images.length}`;
    slideCaption.textContent = images[currentIndex].caption; 
    sliderImage.classList.remove('fade-in', 'fade-out'); 
    void sliderImage.offsetWidth; 
    sliderImage.classList.add('fade-in'); 
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        sliderImage.classList.remove('fade-in');
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            currentIndex--;
            updateImage();
        }, 300); 
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        sliderImage.classList.remove('fade-in');
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            currentIndex++;
            updateImage();
        }, 300); 
    }
});

updateImage();