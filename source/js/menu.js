$(document).ready(function() { 
    $('.header__toggle').click(function(event) {
        $('.header__toggle, .header__navigation, .header, .page-body').toggleClass('active');
    });
});

//Tabs-form
function openFormRemont() {
    var i, tabcontent;
    var x = document.getElementById("type-remont-room").value;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById("type-remont-room-" + x).style.display = "block";
  }


//Pop-up price
$(document).ready(function () {
  $('.price__button').click(function (event) {
    $('.price__popup, .page-body').addClass('active');
  });

  // Нажатие клавиши Esc
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.price__popup, .page-body').removeClass('active');
    }
  });

  // Клик по странице
  $(document).click(function (e) {
    //if ($(e.target).closest('.price__popup').length) {
    if ($('.price__popup').hasClass('active')&&!($(e.target).hasClass('price__button'))) {  
      $('.price__popup, .page-body').removeClass('active');
    }
  });
});


//Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
      //const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});