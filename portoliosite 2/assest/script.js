// Select the elements from the document
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');
const headerLogoConatiner = document.querySelector('.header__logo-container');

// Add an event listener to the hamburger menu button
hamMenuBtn.addEventListener('click', () => {
    // Toggle the small menu visibility
    smallMenu.classList.toggle('header__sm-menu--active');
    // Toggle the hamburger menu and close button visibility
    headerHamMenuBtn.classList.toggle('d-none');
    headerHamMenuCloseBtn.classList.toggle('d-none');
});

// Loop through the small menu links
for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    // Add an event listener to each link
    headerSmallMenuLinks[i].addEventListener('click', () => {
        // Hide the small menu
        smallMenu.classList.remove('header__sm-menu--active');
        // Show the hamburger menu and hide the close button
        headerHamMenuBtn.classList.remove('d-none');
        headerHamMenuCloseBtn.classList.add('d-none');
    });
}

// Add an event listener to the logo container
headerLogoConatiner.addEventListener('click', () => {
    // Redirect to the index page
    location.href = 'index.html';
});

//form code


// function sendEmail() {

// const bodyMessage = `Full Name:${fullName.value}<br> Email: ${email.value} <br> Message: ${message.value}`;

//     console.log("form submitted")
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "tasbeehullah.info@gmail.com",
//         Password: "ECD852152AA64DEFC6F87B35D9432180CE3A ",
//         To: 'tasbeehullah.info@gmail.com',
//         From: "tasbeehullah.info@gmail.com",
//         Subject: "this is subject",
//         Body: "this is body message"
//     }).then(
//         message => {
//             if (message === "OK") {
//                 Swal.fire({
//                     title: "Good job!",
//                     text: "Message sent Success!",
//                     icon: "success"
//                 });
//             }
//         }
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();

// });







const form = document.querySelector('.contact__form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}\nEmail: ${email.value}\nMessage: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "tasbeehullah.info@gmail.com",
        Password: "ECD852152AA64DEFC6F87B35D9432180CE3A",
        To: 'tasbeehullah.info@gmail.com',
        From: "tasbeehullah.info@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Message sent Success!",
                    icon: "success"
                });
            }
        }
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});