
$(document).ready(function() {

  var audio = document.getElementById("myAudio");
  var div = $( "div" );
  var title = "";
  var messages = [];
  var original = window.location.hash.toString();
  $.cookie('delete', 'false');
  console.log(original.indexOf("#1st"))
  if(original.indexOf("#1st") > -1){
    first = (original.split('_')[1]).toString().split('-').join(' ');
    second = (original.split('_')[3]).toString().split('-').join(' ');
    messages = [
      ["", 1000],
      ["Can "+ first +" and "+ second, 2000],
      [first +" and "+ second, 1500],
      ["Keep each other company", 1000],
      ["ooooh", 2000],
      ["Maybe " + first +" "+ second, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 500],
    ];
    play()
    startTime();
  }else{
     $(".video").fadeIn(500);
  } 

  $(".submit").click(function(){
    first = $(".date").val().toString().split(' ').join('-');
    second = $(".dater").val().toString().split(' ').join('-');
    $("input, .submit").fadeOut(500);
    document.location.hash = ("1st " + first+" 2nd "+second).split(' ').join('_');
    messages = [
      ["", 1000],
      ["Can "+ first +" and "+ second, 2000],
      [first +" and "+ second, 1500],
      ["Keep each other company", 1000],
      ["ooooh", 2000],
      ["Maybe " + first +" "+ second, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 500],
    ];
    play()
    startTime();
  });

  var s = 0;

  function startTime() {
      $("#txt").html(s);
      s = s + 1;
      setTimeout( startTime, 1000 );
  }

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
                
              })
      }
    };

  $('#message').hide();

  $(window).blur(function() {
      // audio.pause();
      // audio.currentTime = 0
      // messages =[];
  //     $(".container").html("Reload");
    });
});