$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__messages__message">
          <div class="main-chat__messages__message__top-message">
           <div class="main-chat__messages__message__top-message__name">
             ${message.user_name}
           </div>
           <div class="main-chat__messages__message__top-message__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main-chat__messages__message__low-message">
           <p class="main-chat__messages__message__low-message__content">
             ${message.content}
           </p>
           <img class="Message__image" src="${message.image}">
         </div>
       </div>`
       return html;
    } else {
       let html =
         `<div class="main-chat__messages__message">
          <div class="main-chat__messages__message__top-message">
           <div class="main-chat__messages__message__top-message__name">
             ${message.user_name}
           </div>
           <div class="main-chat__messages__message__top-message__date">
             ${message.created_at}
           </div>
          </div>
         <div class="main-chat__messages__message__low-message">
           <p class="main-chat__messages__message__low-message__content">
             ${message.content}
          </p>
         </div>
       </div>`
       return html;
     };
  }

  $('.new-message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__messages').append(html);
      $('.new-message')[0].reset();
      $('.main-chat__messages').animate({ scrollTop: $('.main-chat__messages')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});