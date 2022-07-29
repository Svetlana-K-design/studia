$(document).ready(function() { 
    $('.header__toggle').click(function(event) {
        $('.header__toggle, .header__navigation, .header').toggleClass('active');
    });
});

function openFormRemont() {
    var i, tabcontent;
    var x = document.getElementById("type-remont-room").value;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById("type-remont-room-" + x).style.display = "block";
  }
