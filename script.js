/* document.querySelector('.menu').addEventListener('click',()=> {
    document.querySelectorAll('.target').forEach((item)=> {
        item.classList.toggle('change')
    })
}) */
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('change');
    document.querySelector('.menu').classList.toggle('change');
});
const navbarLinks = document.querySelectorAll('.navbar-link');
function showNavbarLinksSequentially() {
    navbarLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('change');
        }, index * 200); // Adjust delay as needed
    });
}
// Call the function when desired, for example on page load or when a certain event occurs
showNavbarLinksSequentially();
const icons = document.querySelectorAll('.section-1-icons i');
let currentIndex = 0;
let= 1;
setInterval(() => {
    icons[currentIndex].classList.remove('change');
    currentIndex = (currentIndex + 1) % icons.length;
    icons[currentIndex].classList.add('change');
}, 4000);

