const gifs = document.querySelectorAll('.gif-pattern img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

gifs.forEach(gif => {
    gif.addEventListener('click', () => {
        lightboxImg.src = gif.src;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});