
var mcguffey = {};
var day = ['lesson1', 'lesson2', 'lesson3'];
var lesson1 = [['a', 'cheer.mp3'], ['cat','chime.mp3'], ['rat','chime.mp3'], ['and','cheer.mp3']];
var lesson2 = [['day2.1','chime.mp3'], ['day2.2','chime.mp3'], ['day2.3','chime.mp3']];
var lesson3 = [['day3.1','chime.mp3'], ['day3.2','chime.mp3'], ['day3.3','chime.mp3']];
var lesson = 0;
var word = 0;
var times = 0;
var length = 0;
var $page = $('#page');
var $yes = $('#yes');
var $no = $('#no');
var n = [];
var d = "";
var practice = [];
var random = "";
var dayNumber = 0;

$(document).ready(function() {


  $("#start").click(function() {
      $('.directions').css('display', 'none');
      console.log('lessons');
      again();
   })

function again() {
  if (times < 3) {
    times = times + 1;
    practiceWords();
  } else {
    return; //will load story to read
  }; //closes else
}; //closes again

function practiceWords() {
  console.log('practice words');
  console.log(day[userInput]);
  d = eval(day[userInput]);
  var length = d.length;
  console.log(length);
  for (var i=0; i < length; i++) {
    w = d[word]; //chooses the written word
    console.log(word);
    practice.push(w);
    console.log(w);
    word = word+1;
    console.log(word);
  }; //closes for
  writeWords($page, practice);
}; //closes practiceWords

function writeWords($page, practice) {
  console.log('writeWords');
  console.log(practice);
  $page.empty();
  var index = Math.floor(Math.random() * practice.length);
  var random = practice[index][0];
  $page.html('<span>' + random + '</span>');

  $page.click(function() {
  $('span').css('text-shadow', '0px 0px white');
  var audio = new Audio(practice[index][1]);
  audio.play();
    window.setTimeout(function() {
  writeWords($page, practice);
}, 2000);
}); // closes page click play word

/*
$no.click(function() {
  clickNo();
}); //end clickNo
*/
$yes.click(function(index, practice) {
     times = times + 1;
    $('#endScreen').css('display', 'block');
}); //closes yes

}; //closes writeWords
/*
function clickNo() {
  writeWords($page, practice);
} //closes clickNo


function clickYes(index, practice) {
  console.log(practice);
  practice.splice(index, 1);
  console.log(practice);
  console.log('practice length' + practice.length);
  if (practice.length >= 0) {
    writeWords($page, practice);
}//closes if
 else {
   times = times + 1;
  $('#endScreen').css('display', 'block');
} //closes else
} //closes clickYes
*/
//   $("<div><span>"n"</span></div>").appendTo('#page');
  //  $card.html('<span>' + $card.data('value') + "</span>");
//  word = word + 1;
  //} //closes for loop
 // closes function

//document.addEventListener("load", writeWords($page));

  }); // closes document load
