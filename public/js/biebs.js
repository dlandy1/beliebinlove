
$(document).ready(function() {

  var audio = new Audio('audio/biebs.mp3');
  var div = $( "div" );
  var title = "";
  var original = window.location.hash.toString();
  var messages = [];
  var timer = 0;
  var inl = 0;
  var userAgent = window.navigator.userAgent;
  var sources = [
  "images/bieb1.jpg",
  "images/Bieb.jpg",
  "images/efron.jpg",
  "images/love.jpg",
  "images/focused.jpg",
  "images/calvtay.jpg",
  "images/zayn.jpg",
  "images/biebsselena.jpg",
  "images/stewart.jpg",
  "images/kanye-biggestfan.jpg",
  "images/lovers.gif",
  "images/gomez.png",
  "images/kanye.jpg",
  "images/bill.jpg",
  "images/jfk.jpg",
  "images/kimk.jpg",
  "images/jay-and-bey.jpg",
  "images/miley.jpeg",
  "images/glasses.jpg",
    ];


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
      [ a +" needs a picture for a frame", 2300],
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
      [ a + " ain't gotta be " + b +"'s lover", 1500],
      [ "For "+ a + " to call " + b + " baby ", 1500],
      [ "Never been around no pressure", 1400],
      [ "Ain't that serious no", 800],
      ["Can "+ a +" and "+ b, 2000],
      [a +" and "+ b, 1500],
      ["Keep each other company", 1250],
      ["ooooh", 1550],
      ["Maybe " + a +" and "+ b, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 2000],
      ["This has gone on so long", 1500],
      ["Can't you just keep each other company?", 1500],
      ["Just let it happen", 1700],
      [ a + " and " + b, 1700],
      ["Let Justin's voice persuade you two", 1500],
      [a + " have you not texted " + b + " yet?", 1000],
      ["Can "+ a +" and "+ b+ " be! They be!", 1200],
      ["Be each other's company!", 4000],
      ["Be each other's company!", 2000],
      ["Ohhhhhh", 1300],
      ["Just Be each other's company!", 2000],
      ["Ohhhhhh", 1300],
      ["Be each other's company!", 2000],
      ["Ohhhhhh Ohhh Ohhh", 2000],
      ["Can "+ a +" and "+ b, 1500],
      [a +" and "+ b, 1500],
      ["Keep each other's company", 2000],
      ["Ohhhhhh Ohhh", 1500],
      ["Maybe " + a +" and "+ b, 1000],
      ["Can be", 2000],
      ["Be each other's company", 2000],
      ["Oh company", 2000]
    ];
  }

  $.cookie('delete', 'false');
  console.log(original.indexOf("#lover1"))
  if(original.indexOf("#lover1") > -1){
    first = (original.split('_')[1]).toString().split('-').join(' ');
    second = (original.split('_')[3]).toString().split('-').join(' ');
    messager(first, second)

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      audio.currentTime = 23;  
       audio.play();
    }
    else {
     audio.play();
    }
    var imageInterval = setInterval(function() {  nextPic(inl); }, 10000);
    nextMsg(0);
    imageInterval;
    startTime();
  }else{
     $(".video").fadeIn(500);
  } 

  $(".submit").click(function(){
    first = $(".date").val().toString().split(' ').join('-');
    second = $(".dater").val().toString().split(' ').join('-');
    $(".video").fadeOut(500);
    document.location.hash = ("lover1 " + first+" lover2 "+second).split(' ').join('_');
    first = first.toString().split('-').join(' ');
    second = second.toString().split('-').join(' ');
    messager(first, second)
    var imageInterval = setInterval(function() {  nextPic(inl); }, 10000);

    if( $(window).width() < 500){
       $("header").fadeOut(500);
      }  

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      audio.currentTime = 23;  
       audio.play();
    }
    else {
     audio.play();
    }
    nextMsg(0);
    nextPic(0);
    startTime();
  });

  var s = 0;

  function startTime() {
      s = s + 1;
      timer = s;
      console.log(s);
      setTimeout( startTime, 1000 );
  }


  function nextMsg(i) {

    if (!messages[i]) {
      $('#message').addClass("errorly");
      $('#message').html("<a class='paddinger' href='http://beliebinlove.herokuapp.com/'>Create Another!</a>")
      $('#message').fadeIn(100)
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        if(i >= 29 && i <= 34 || i >= 55 && i <= 60){
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

  function nextPic(i) {
    console.log(sources[i])
    if (!sources[i]) {
        // once there is no more message, do whatever you want
        clearInterval(imageInterval);      
              return;
    } else {
        document.getElementById("biebs2").src=sources[i];
        inl = i +1;
      }
    };

  $('#message').hide();


    $(window).blur(function() {
      if(!audio.paused){ 
        audio.pause();
        messages =[];
        sources = ["images/glasses.jpg"]
        document.getElementById("biebs2").src=sources[0];
        $("#message").html("<a class='paddinger' href='http://beliebinlove.herokuapp.com/'>Create Another!</a>You left the tab. <br> You must reload and stay on the tab for full video<br>Is it too late to say sorry ");
          }
      });
});