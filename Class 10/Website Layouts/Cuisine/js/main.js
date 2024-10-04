document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('images-container');
    
    const images = {
        breakfast: [
            'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ],
        lunch: [
            'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        dinner: [
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        dessert: [
            'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        shakes: [
            'https://images.pexels.com/photos/1169004/pexels-photo-1169004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/3547619/pexels-photo-3547619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/4409498/pexels-photo-4409498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/12419198/pexels-photo-12419198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    };

    function displayImages(category) {
        imagesContainer.innerHTML = '';
        const categoryImages = images[category];
        categoryImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = '23%';
            img.style.height = '400px';
            img.style.margin = '5px';
            imagesContainer.appendChild(img);
        });
    }

    function setActiveCategory(category) {
        document.querySelectorAll('#order ul li').forEach(li => {
            li.classList.remove('active');
        });
        const activeLi = document.querySelector(`#order ul li[data-category="${category}"]`);
        if (activeLi) {
            activeLi.classList.add('active');
        }
    }

    document.querySelectorAll('#order ul li a').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const category = anchor.parentElement.getAttribute('data-category');
            displayImages(category);
            setActiveCategory(category);
        });
    });

    displayImages('breakfast');
    setActiveCategory('breakfast');
});


document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('videoContainer');
    const leftArrow = document.querySelector('.bx-chevron-left');
    const rightArrow = document.querySelector('.bx-chevron-right');

    leftArrow.addEventListener('click', () => {
        loadPreviousVideo();
    });
    
    rightArrow.addEventListener('click', () => {
        loadNextVideo();
    });

    function loadPreviousVideo() {
        const currentSrc = videoContainer.getAttribute('src');
        const videoUrls = [
            'https://videos.pexels.com/video-files/3195650/3195650-uhd_3840_2160_25fps.mp4',

            'https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4',

            'https://videos.pexels.com/video-files/3752508/3752508-hd_1920_1080_24fps.mp4'
            ];
        const currentIndex = videoUrls.indexOf(currentSrc);
        const previousIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
        const previousVideoUrl = videoUrls[previousIndex];
        videoContainer.setAttribute('src', previousVideoUrl);
    }
    
    function loadNextVideo() {
        const currentSrc = videoContainer.getAttribute('src');
        const videoUrls = [
            'https://videos.pexels.com/video-files/3195650/3195650-uhd_3840_2160_25fps.mp4',

            'https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4',

            'https://videos.pexels.com/video-files/3752508/3752508-hd_1920_1080_24fps.mp4'
        ];
        const currentIndex = videoUrls.indexOf(currentSrc);
        const nextIndex = (currentIndex + 1) % videoUrls.length;
        const nextVideoUrl = videoUrls[nextIndex];
        // Update the video source URL
        videoContainer.setAttribute('src', nextVideoUrl);
    }

});


document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-item');
    const navDots = document.querySelectorAll('#review-next i');
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.style.display = 'block'; 
            } else {
                review.style.display = 'none'; 
            }
        });

        navDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('bx-radio-circle-marked');
                dot.classList.remove('bx-radio-circle');
            } else {
                dot.classList.add('bx-radio-circle');
                dot.classList.remove('bx-radio-circle-marked');
            }
        });
    }

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentReview = index;
            showReview(currentReview);
        });
    });

    showReview(currentReview);
});





