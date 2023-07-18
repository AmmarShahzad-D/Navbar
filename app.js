const navToggle = document.querySelector(".navbar-toggle");
const links = document.querySelector(".nav-link")

navToggle.addEventListener("click" , ()=> {
    links.classList.toggle("nav-link")
})


const togglerIcon = document.querySelector('.navbar-toggler-icon');

togglerIcon.addEventListener('click', () => {
  togglerIcon.style.transform = 'rotate(90deg)'
});

