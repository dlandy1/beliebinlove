$(document).ready(function() {

  var audio = document.getElementById("myAudio");
  var div = $( "div" );
  var title = "";
  var messages = [];
   $.cookie('delete', 'false');

  $(".submit").click(function(){
    first = $(".date").val().toString();
    second = $(".dater").val().toString();
    $("input, .submit").fadeOut(500);
    messages = [
      ["A! "+ first, 1000],
      ["B!" + second, 1000],
      ["C!", 1000],
      ["This is a website!", 1000]
    ];
    play()
  });

  function play() {
    if (audio.paused) {
        audio.play();
        nextMsg(0);
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}

  function nextMsg(i) {

    if (!messages[i]) {
        // once there is no more message, do whatever you want
          
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#message').html(messages[i][0]).fadeIn(500).delay(messages[i][1]).fadeOut(500,  function() {
                nextMsg(i + 1);
                console.log(messages);
                if (messages){
                  console.log(messages[i]);
                }
              })
      }
    };

  $('#message').hide();

  $(window).blur(function() {
      audio.pause();
      audio.currentTime = 0
      messages =[];
      $("body").html("Reload");
    });
});