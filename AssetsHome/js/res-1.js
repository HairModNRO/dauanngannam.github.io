// JavaScript Document

AOS.init({
  disable: function() {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  }
});



$(document).ready(function () {
  var h = $(window).height();
  var w = $(window).width();
  if (w > 960) {
    $('.wrapper').css({ transform: "scale(" + w / 1920 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });

  }
  else if (320 < w < 960) {
    $('.wrapper').css({ transform: "scale(" + w / 960 + ")" });
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });
  }

  $(window).on('resize', function () {
    var w1 = $(window).width();
    if (w1 > 960) {
      $('.wrapper').css({ transform: "scale(" + w / 1920 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });

    }


    var h = $(window).height();
    var w = $(window).width();
    if (w > 960) {
      $('.wrapper').css({ transform: "scale(" + w / 1920 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });

    }
    else if (320 < w < 960) {
      $('.wrapper').css({ transform: "scale(" + w / 960 + ")" });
      var iw = $(".wrapper")[0].getBoundingClientRect().width;
      var ih = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih, width: iw });
    }


  });

});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

$(document).ready(function() {
  $('#chienbinh').click((e)=>{ 
    $('.active').removeClass('active'); 
    $(e.currentTarget).addClass("active"); 
    $('.char-chienbinh').addClass('d-block');
    $('.char-xathu').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block'); 
    $('.char-satthu').removeClass('d-block');
  });
  $('#xathu').click((e)=>{ 
    $('.active').removeClass('active'); 
    $(e.currentTarget).addClass("active"); 
    $('.char-chienbinh').removeClass('d-block');
    $('.char-xathu').addClass('d-block'); 
    $('.char-phapsu').removeClass('d-block'); 
    $('.char-satthu').removeClass('d-block');

  });
  $('#phapsu').click((e)=>{ 
    $('.active').removeClass('active'); 
    $(e.currentTarget).addClass("active"); 
    $('.char-chienbinh').removeClass('d-block');
    $('.char-xathu').removeClass('d-block'); 
    $('.char-phapsu').addClass('d-block'); 
    $('.char-satthu').removeClass('d-block');

  });
  $('#satthu').click((e)=>{ 
    $('.active').removeClass('active'); 
    $(e.currentTarget).addClass("active"); 
    $('.char-chienbinh').removeClass('d-block');
    $('.char-xathu').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block'); 
    $('.char-satthu').addClass('d-block');
  });
  $('.next1').click((e)=>{ 
    $('.char-xathu').addClass('d-block');
    $('#xathu').addClass('active');
    $('#chienbinh').removeClass('active');
    $('.char-chienbinh').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block'); 
    $('.char-satthu').removeClass('d-block');
  });
  $('.next2').click((e)=>{ 
    $('.char-phapsu').addClass('d-block');
    $('#phapsu').addClass('active');
    $('#xathu').removeClass('active');
    $('.char-chienbinh').removeClass('d-block'); 
    $('.char-xathu').removeClass('d-block'); 
    $('.char-satthu').removeClass('d-block');
  });
  $('.next3').click((e)=>{ 
    $('.char-satthu').addClass('d-block');
    $('#satthu').addClass('active');
    $('#phapsu').removeClass('active');
    $('.char-chienbinh').removeClass('d-block'); 
    $('.char-xathu').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block');
  });
  $('.prev2').click((e)=>{ 
    $('.char-chienbinh').addClass('d-block');
    $('#chienbinh').addClass('active');
    $('#xathu').removeClass('active');
    $('.char-satthu').removeClass('d-block'); 
    $('.char-xathu').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block');
  });
  $('.prev3').click((e)=>{ 
    $('.char-xathu').addClass('d-block');
    $('#xathu').addClass('active');
    $('#phapsu').removeClass('active');
    $('.char-satthu').removeClass('d-block'); 
    $('.char-phapsu').removeClass('d-block'); 
    $('.char-chienbinh').removeClass('d-block');
  });
  $('.prev4').click((e)=>{ 
    $('.char-phapsu').addClass('d-block');
    $('#phapsu').addClass('active');
    $('#satthu').removeClass('active');
    $('.char-satthu').removeClass('d-block'); 
    $('.char-xathu').removeClass('d-block'); 
    $('.char-chienbinh').removeClass('d-block');
  });
});


