
$(document).ready(function() {

  var audio = new Audio('audio/biebs.mp3');
  audio.load();
  var div = $( "div" );
  var title = "";
  var original = window.location.hash.toString();
  var messages = [];
  var timer = 0;
  function messager(a, b) {
      messages = [
      ["", 1000],
      ["Can "+ a +" and "+ b, 2000],
      [a +" and "+ b, 1500],
      ["Keep each other company", 1250],
      ["ooooh", 1750],
      ["Maybe " + a +" and "+ b, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 1000],
      ["Set each other's lonely nights", 1250],
      ["Be each other's paradise", 1250],
      [ a +" needs a picture for a frame", 2500],
      [ "Someone to share " + b + "'s ring", 1450],
      [ "Tell " + a + " what you wanna drink", 1050],
      [ a  + " will tell you whats on the mind", 1500],
      [ a  + " doesn't know your middle name", 1750],
      [ "But we know thats going to change", 1750],
      [ a + " ain't gotta be " + b +"'s lover", 2150],
      [ "For "+ a + " to call " + b + " baby ", 1600],
      [ "Never been around no pressure", 1600],
      [ "Ain't that serious", 800],
      ["Can "+ a +" and "+ b, 2000],
      [a +" and "+ b, 1500],
      ["Keep each other company", 1250],
      ["ooooh", 1550],
      ["Maybe " + a +" and "+ b, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 2000],
      [a +" and "+ b + " you guys would be perfect", 2000],
      ["sooo perfect", 2000],
      ["like unbelievably good together", 2200],
      ["like better than Justin Bieber and Selena Gomez", 2200],
      ["or better than Calvin Harris and Taylor Swift", 2500],
      ["maybe equal to Kanye's love for Kanye", 2100],
      ["It ain't about the complications", 1250],
      [a + " is all about the elevation", 1250],
      ["They can keep it goin' up", 2500],
      [ "Oh, don't miss out on them", 1450],
      [ "Just want them to have a conversation", 1050],
      [ "Forget about the obligations", 1500],
      [ "Maybe they can stay in touch", 1750],
      [ "Oh that ain't doin' too much", 1550],
      [ a + " ain't gotta be " + b +"'s lover", 1800],
      [ "For "+ a + " to call " + b + " baby ", 1500],
      [ "Never been around no pressure", 1400],
      [ "Ain't that serious", 800],
      ["Can "+ a +" and "+ b, 2000],
      [a +" and "+ b, 1500],
      ["Keep each other company", 1250],
      ["ooooh", 1550],
      ["Maybe " + a +" and "+ b, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 2000],
    ];
  }

  $.cookie('delete', 'false');
  console.log(original.indexOf("#1st"))
  if(original.indexOf("#1st") > -1){
    first = (original.split('_')[1]).toString().split('-').join(' ');
    second = (original.split('_')[3]).toString().split('-').join(' ');
    messager(first, second)
    audio.play();
    nextMsg(0);
    startTime();
  }else{
     $(".video").fadeIn(500);
  } 

  $(".submit").click(function(){
    first = $(".date").val().toString().split(' ').join('-');
    second = $(".dater").val().toString().split(' ').join('-');
    $("input, .submit").fadeOut(500);
    document.location.hash = ("1st " + first+" 2nd "+second).split(' ').join('_');
    first = first.toString().split('-').join(' ');
    second = second.toString().split('-').join(' ');
    messager(first, second)
    audio.play();
    nextMsg(0);
    startTime();
  });

  var s = 0;

  function startTime() {
      $("#txt").html(s);
      s = s + 1;
      timer = s;
      setTimeout( startTime, 1000 );
  }


  function nextMsg(i) {

    if (!messages[i]) {
        // once there is no more message, do whatever you want
          
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        if(i >= 29 && i <= 34 ){
          $('#message').addClass('grey');
        }
        else{
          $('#message').removeClass('grey');
        }
        $('#message').html(messages[i][0]).fadeIn(500).delay(messages[i][1]).fadeOut(500,  function() {
                nextMsg(i + 1);
                
              })
      }
    };

  $('#message').hide();

  $(window).blur(function() {
      // audio.pause();
      // messages =[];
  //     $(".container").html("Reload");
    });
});