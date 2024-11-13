$(function(){

  $('.blog-page__slider').slick({
    prevArrow: '<button type = "button" class = "slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000" width="24" height="24"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg> </button>',
    nextArrow:  '<button type = "button" class = "slick-next"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000" width="24" height="24"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg></button>',
    infinite: false
  });




  $('.product-tabs__top-item').on('click', function(e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  
});





  $('.product-slide__thumb').slick({
    asNavFor :'.product-slide__big',
    focusOnSelect : true,
    slidesToShow : 4,
    slidesToScroll : 1,
    vertical : true,
    draggable : false
  });

  $('.product-slide__big').slick({
    asNavFor :'.product-slide__thumb',
    draggable : false,
    arrows : false,
    fade : true
  });

  $(function(){
    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').css('color', '#8d8d8d');
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active')
        $(this).addClass('shop-content__filter-btn--active');
        $(this).css('color', '#fe3e57');
    });
});



  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
});


  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });


  $('.select-style, .product-one__item-num').styler();



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix:"$",
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })
  
  $('.top-slider__inner').slick({
     dots:true,
     arrows:false,
     fade:true,
     autoplay:true,
     autoplaySpeed: 2000
  });

    $(".star").rateYo({
      rating: 4,
      starWidth: "17px",
      normalFill:"#ccccce",
      ratedFill:"#ffc35b",
      readOnly:true,
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;;fill-opacity:1;" d="M 14.632812 6.121094 C 14.546875 5.867188 14.316406 5.691406 14.050781 5.667969 L 10.253906 5.367188 L 8.605469 1.726562 C 8.5 1.488281 8.261719 1.332031 8 1.332031 C 7.738281 1.332031 7.5 1.484375 7.394531 1.726562 L 5.746094 5.367188 L 1.949219 5.667969 C 1.6875 5.6875 1.460938 5.859375 1.371094 6.105469 C 1.285156 6.351562 1.347656 6.628906 1.535156 6.8125 L 4.34375 9.546875 L 3.351562 13.851562 C 3.289062 14.117188 3.394531 14.394531 3.621094 14.550781 C 3.84375 14.703125 4.144531 14.707031 4.371094 14.554688 L 8 12.132812 L 11.628906 14.554688 C 11.863281 14.710938 12.167969 14.703125 12.390625 14.539062 C 12.617188 14.375 12.71875 14.085938 12.640625 13.816406 L 11.421875 9.550781 L 14.445312 6.828125 C 14.644531 6.652344 14.714844 6.371094 14.632812 6.121094 Z M 14.632812 6.121094 "/> </g> </svg>'
    });
   
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }
    
    function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__clock');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');
    
      function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);



    
});


