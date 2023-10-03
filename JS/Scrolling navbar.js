// function changeBg(){
//     var navbar = document.getElementById('navigation');
//     var scrollValue = window.scrollY;
//     // console.log(scrollValue);
//     if(scrollValue < 150){
//         navbar.classList.remove('bgColor');
//     } else {
//         navbar.classList.add('bgColor');
//     }
// }

// window.addEventListener('scroll', changeBg);



// const nav = document.querySelector('#navigation');
// const navTop = nav.offsetTop;

// function stickyNavigation() {
//     console.log('navTop = ' + navTop);
//     console.log('scrollY = ' + window.scrollY);
// }

// window.addEventListener('scroll', stickyNavigation);


// function stickyNavigation() {
//     if (window.scrollY >= navTop) {
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.classList.remove('fixed-nav');
//     }
// }


window.addEventListener("scroll", function(){
    var header = this.document.querySelector(".flex");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})