"use strict";

let scrollLinks = document.querySelectorAll('.scrollto');

scrollLinks.forEach((scrollLink) => {

    scrollLink.addEventListener('click', (e) => {

        e.preventDefault();

        var target = scrollLink.getAttribute("href").replace('#', '');

        //console.log(target);

        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });


    });

});
