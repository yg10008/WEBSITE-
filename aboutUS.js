document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector('.typewriter p');
    const text = typewriterElement.textContent;
    let index = 0;
    
    function type() {
        typewriterElement.textContent = text.slice(0, index);
        index++;
        if (index > text.length) {
            index = 0; // Restart typing
        }
        setTimeout(type, 100); // Adjust typing speed as needed
    }
    
    type();
});
