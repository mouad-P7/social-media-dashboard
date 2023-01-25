// import scripts
import "./js/toggle";

// import styles
import "./scss/style.scss";

// import images
import "./images/favicon-32x32.png";
import "./images/icon-down.svg";
import "./images/icon-facebook.svg";
import "./images/icon-instagram.svg";
import "./images/icon-twitter.svg";
import "./images/icon-up.svg";
import "./images/icon-youtube.svg";

// JQuery code
$(document).ready(function(){
  for(let i = 0; i < 5; i++){
    let value = $('.card .followers-update > data, .card .today-update > data').attr('value');
    console.log(value);
  }

});

