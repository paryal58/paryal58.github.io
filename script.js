const scrollingText = document.querySelector('.scrolling-text');
const scrollingContainer = document.querySelector('.scrolling-container');

scrollingContainer.addEventListener('scroll', () => {
    // Calculate the new font size based on the scroll position
    const newSize = 93 - scrollingContainer.scrollTop * 0.1;
    
    // Set the new font size with a minimum of 16px
    scrollingText.style.fontSize = Math.max(16, newSize) + 'px';
});