(function ($) {
   'use strict';

   // Spinner
   var spinner = function () {
      setTimeout(function () {
         if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
         }
      }, 1);
   };
   spinner();

   // Initiate the wowjs
   new WOW().init();

   // Sticky Navbar
   $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
         $('.navbar').addClass('sticky-top shadow-sm');
      } else {
         $('.navbar').removeClass('sticky-top shadow-sm');
      }
   });

   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
      } else {
         $('.back-to-top').fadeOut('slow');
      }
   });
   $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
   });

   // Skills
   $('.skill').waypoint(
      function () {
         $('.progress .progress-bar').each(function () {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
         });
      },
      { offset: '80%' }
   );

   // Facts counter
   $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000,
   });

   // Testimonials carousel
   $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      dots: false,
      loop: true,
      nav: true,
      navText: [
         '<i class="bi bi-chevron-left"></i>',
         '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
         0: {
            items: 1,
         },
         992: {
            items: 2,
         },
      },
   });

   // Portfolio isotope and filter
   var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
   });
   $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('active');
      $(this).addClass('active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
   });
})(jQuery);

// chat box start
function toggleChat() {
   const chatContainer = document.getElementById('chat-container');
   chatContainer.classList.toggle('open');
}

function sendMessage() {
   const userInput = document.getElementById('user-input');
   const message = userInput.value.trim();

   if (message !== '') {
      addMessage(message, 'user');
      getBotResponse(message);
      userInput.value = '';
   }
}

function addMessage(message, sender) {
   const chatContent = document.getElementById('chat-content');
   const messageElement = document.createElement('p');
   messageElement.classList.add(`${sender}-message`);
   messageElement.textContent = message;

   chatContent.appendChild(messageElement);
   chatContent.scrollTop = chatContent.scrollHeight;
}

function getBotResponse(userMessage) {
   let botMessage = '';

   // Basic keyword-based responses
   if (userMessage.includes('hello', 'hi', 'how are you doing','getting started', )) {
      botMessage = 'Hi there! How can I help you today?';
   } else if (userMessage.includes('how are you')) {
      botMessage = 'I am just a bot, but I’m here to assist you!';
   } else if (userMessage.includes('your name')) {
      botMessage = 'I am a simple chatbot. Nice to meet you!';
   } else if (userMessage.includes('help')) {
      botMessage =
         'Sure! I can help with basic questions. What do you need assistance with?';
   } else {
      botMessage =
         'need help on how ?';
   }

   // Add the bot's response
   addMessage(botMessage, 'bot');
}

//chat box end
function openWhatsApp() {
   // Replace '1234567890' with your WhatsApp number, including the country code (e.g., '2341234567890' for Nigeria)
   const phoneNumber = '+2348156536417';
   const message = 'Hello! I would like to know more about your services.';

   // Construct the WhatsApp URL
   const whatsappUrl = `https://wa.me/${+2348156536417}?text=${encodeURIComponent(
      message
   )}`;

   // Open the WhatsApp chat link
   window.open(whatsappUrl, '_blank');
}

