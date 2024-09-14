
    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.photo-slider');
        let scrollAmount = 0;
        const slideInterval = setInterval(function() {
            slider.scrollTop += 100; // Adjust this value for scroll speed
            scrollAmount++;
            if (scrollAmount >= slider.scrollHeight - slider.clientHeight) {
                scrollAmount = 0;
                slider.scrollTop = 0;
            }
        }, 10); // Adjust the interval (in milliseconds) for scroll speed
    });

