$('.bot-icon').on('click', function () {
   $(this).toggleClass('active');
   if ($(this)[0].children[0].innerHTML === "Message") {
         $(".comment-add").slideToggle()
   }
});
$('.comment-add-btn').on('click', function () {
   // For Ckmider 
   document.querySelector('.bot-icon-message').classList.remove('active');
    $(".comment-add").slideUp()
})
