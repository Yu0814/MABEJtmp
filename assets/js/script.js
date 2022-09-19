'use strict'

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if(elem.length > 1) {
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active")
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar)

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-to-top-btn]");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        header.classList.add("active")
        backToBtn.classList.add("active")
    } else {
        header.classList.remove("active")
        backToBtn.classList.remove("active")
    }
})

/**
 * Comment
 */

 const testimonialsContainer = document.querySelector('.testimonials-container');
 const testimonial = document.querySelector('.testimonial');
 const userImage = document.querySelector('.user-image');
 const username = document.querySelector('.username');
 const role = document.querySelector('.role');
 
 const testimonials = [
   {
     name: 'JP Marra',
     position: 'Blue Elephant Capital Management, CEO',
     photo:
       "../assets/images/JP-Marra.jpeg",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident quos nemo. Quos sequi qui atque, explicabo sunt vitae praesentium minus laborum doloremque deleniti, ratione magni. Animi explicabo facere est ullam iure nisi tempore minima consectetur perferendis nostrum fuga, quod voluptatem quae ipsam tempora natus veniam incidunt numquam dicta libero" ,
   },
   {
     name: 'Chris Wyke',
     position: 'MA Financial Group, Joint CEO',
     photo: '../assets/images/Chris.png',
     text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit omnis odio facilis alias, consequuntur qui modi sequi explicabo voluptatum enim beatae et error dignissimos quis nostrum quaerat vel vitae harum illum. Veniam nemo iure sapiente nostrum? Sapiente eligendi deleniti excepturi? Veniam voluptatum aliquam amet temporibus quae. Voluptas, mollitia rem.",
   },
 ];
 
 let idx = 1
 
 function updateTestimonial() {
     const {name, position, photo, text } = testimonials[idx]
 
     testimonial.innerHTML = text
     userImage.src = photo
     username.innerHTML = name
     role.innerHTML = position
 
     idx++
 
     if(idx > testimonials.length - 1) {
         idx = 0
     }
 }
 
 setInterval(updateTestimonial, 10000)