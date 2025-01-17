// Connection File JavaScr
// window.alert("Hello");

// Toggle Effact
let menuIcon = document.querySelector('#menu');
let navBar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
} 

//Scroll Section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => 
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //if i want to use animation that repeats on scroll use this
        else
        {
            sec.classList.remove('show-animate');
        }
    });

    //Remove Toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}








// For Slider
var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){    
    counter=1;
}
},3000);