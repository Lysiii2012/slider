document.addEventListener("DOMContentLoaded", () => {

    const imagesSlide = ['img/item1.jpg', 'img/item2.jpg', 'img/item3.jpg', 'img/item4.jpg'];
    const sliderImage = document.getElementById('slider-image');
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const paginationContainer = document.getElementById('slider-pagination');

    let currentIndex = 0;

    function updateSlider() {
        sliderImage.src = imagesSlide[currentIndex];

        sliderImage.classList.remove('fade-in');
        void sliderImage.offsetWidth;
        sliderImage.classList.add('fade-in');

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === imagesSlide.length - 1;
        updatePagination();
    }

    function updatePagination() {
        paginationContainer.innerHTML = '';
        imagesSlide.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            paginationContainer.appendChild(dot);
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < imagesSlide.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();

});
