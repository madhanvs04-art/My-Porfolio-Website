var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");    
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// if(contactForm) {
//     contactForm.addEventListener("submit", function(event) {
//         event.preventDefault();
        
//         // Show success message
//         successMessage.classList.add("show");
        
//         // Clear the form
//         contactForm.reset();
        
//         // Hide success message after 3 seconds
//         setTimeout(function() {
//             successMessage.classList.remove("show");
//         }, 3000);
//     });
// }

// /////////////email js/////////////
// function sendMail(contactForm) {
//     emailjs.send("service_5h1v1eg","template_5tq6r9m",{
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "project_request": contactForm.projectsummary.value
//     })}

// Page loader: hide and remove when page finishes loading
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    // mark not busy for screen readers
    loader.setAttribute('aria-busy', 'false');
    // hide with a fade
    loader.classList.add('hidden');
    // remove from DOM after transition
    setTimeout(() => {
      if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
    }, 600);
  }
});

// Custom cursor (DOM-based with smooth trailing)
// (function() {
//   const cursor = document.getElementById('custom-cursor');
//   if (!cursor) return;

//   // enable the custom cursor (keeps native cursor for interactive controls)
//   document.body.classList.add('has-custom-cursor');

//   let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//   let pos = { x: mouse.x, y: mouse.y };
//   const lerp = (a, b, n) => (1 - n) * a + n * b;

//   document.addEventListener('mousemove', (e) => {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
//   });

//   const render = () => {
//     pos.x = lerp(pos.x, mouse.x, 0.18);
//     pos.y = lerp(pos.y, mouse.y, 0.18);
//     cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);

//   document.addEventListener('mousedown', () => cursor.classList.add('click'));
//   document.addEventListener('mouseup', () => cursor.classList.remove('click'));

//   const hoverTargets = 'a, button, .btn, input:not([type=hidden]), textarea, label';
//   document.querySelectorAll(hoverTargets).forEach(el => {
//     el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
//     el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
//   });

//   // On touch devices, disable custom cursor
//   const handleTouch = () => {
//     cursor.style.display = 'none';
//     document.body.classList.remove('has-custom-cursor');
//     window.removeEventListener('touchstart', handleTouch);
//   };
//   window.addEventListener('touchstart', handleTouch, { once: true });
// })();
