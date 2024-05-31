var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;
// Hamburger response menu
const hamButton = document.querySelector('#menu');
const heading = document.querySelector('.heading');
hamButton.addEventListener('click', () => {
    heading.classList.toggle('open');
    hamButton.classList.toggle('open');
});

