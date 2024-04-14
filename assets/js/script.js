// Nav bar formation
let navclass = document.querySelector("ul");
classgen = (x) => {
  navclass.classList.toggle("navdisplay");
  x.classList.toggle("change");
};

let home=document.getElementById('home');
let program=document.getElementById('program');
let login=document.getElementById('login');
let contact=document.getElementById('contact');
let Registration=document.getElementById('registration');

Homebtn=()=>{
home.classList.toggle('white');
program.classList.remove('white');
login.classList.remove('white');
contact.classList.remove('white');
Registration.classList.remove('white');
}
Progmbtn=()=>{
  program.classList.toggle('white');
  home.classList.remove('white');
  login.classList.remove('white');
  contact.classList.remove('white');
  Registration.classList.remove('white');
  }
  Campbtn=()=>{
   login.classList.toggle('white');
   home.classList.remove('white');
   program.classList.remove('white');
   contact.classList.remove('white');
   Registration.classList.remove('white');
    }
    Contbtn=()=>{
      contact.classList.toggle('white');
      home.classList.remove('white');
      login.classList.remove('white');
      program.classList.remove('white');
      Registration.classList.remove('white');
      }
      admbtn=()=>{
        Registration.classList.toggle('white');
        home.classList.remove('white');
        login.classList.remove('white');
         contact.classList.remove('white');
      program.classList.remove('white');
        }

// Chat Message
var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "101421454944610");
chatbox.setAttribute("attribution", "biz_inbox");
//  SDK Code / chat message
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v17.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

classgenadmisson = () => {
  let formdisplay = document.getElementById("form-display");
  formdisplay.classList.toggle("form-display-done");
};

// Submit btn inner text changer in admission form in admission section
formtext = () => {
  let textselect = document.getElementById("Form-type-selection");
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.innerText = `Apply in ${textselect.value}`;
};




document.getElementById("home").style.display = "block";
document.getElementById("allinstitute-page").style.display = "none";
document.getElementById("login").style.display = "none";


function homePage() {
    document.getElementById("home").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("allinstitute-page").style.display = "none";

}

function postPage() {
    document.getElementById("allinstitute-page").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "none";

}
function logIn() {
    document.getElementById("login").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("allinstitute-page").style.display = "none";

}

