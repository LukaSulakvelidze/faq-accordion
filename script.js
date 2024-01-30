//First Question
const question1 = document.getElementById("question1");
const arrow1 = document.getElementById("arrow1");
const answer1 = document.getElementById("answer1");
answer1.style.display = "none"

arrow1.addEventListener('click', () =>{

  if (answer1.style.display === 'none') {
    answer1.style.display = 'block';
    arrow1.style.transform = "rotate(180deg)";
    question1.style.fontWeight = 700;

    answer2.style.display = 'none';
    question2.style.fontWeight = 400;
    arrow2.style.transform = "rotate(0deg)";

    answer3.style.display = 'none';
    question3.style.fontWeight = 400;
    arrow3.style.transform = "rotate(0deg)";

    answer4.style.display = 'none';
    question4.style.fontWeight = 400;
    arrow4.style.transform = "rotate(0deg)";

    answer5.style.display = 'none';
    question5.style.fontWeight = 400;
    arrow5.style.transform = "rotate(0deg)";
  } else {
    answer1.style.display = 'none';
    question1.style.fontWeight = 400;
    arrow1.style.transform = "rotate(0deg)";
  }
})

//Second Question
const question2 = document.getElementById("question2");
const arrow2 = document.getElementById("arrow2");
const answer2 = document.getElementById("answer2");
answer2.style.display = "none"

arrow2.addEventListener('click', () => {

  if (answer2.style.display === 'none') {
    answer2.style.display = 'block';
    arrow2.style.transform = "rotate(180deg)";
    question2.style.fontWeight = 700;

    answer1.style.display = 'none';
    question1.style.fontWeight = 400;
    arrow1.style.transform = "rotate(0deg)";

    answer3.style.display = 'none';
    question3.style.fontWeight = 400;
    arrow3.style.transform = "rotate(0deg)";

    answer4.style.display = 'none';
    question4.style.fontWeight = 400;
    arrow4.style.transform = "rotate(0deg)";

    answer5.style.display = 'none';
    question5.style.fontWeight = 400;
    arrow5.style.transform = "rotate(0deg)";
  } else {
    answer2.style.display = 'none';
    question2.style.fontWeight = 400;
    arrow2.style.transform = "rotate(0deg)";
  }
})

//Third Question
const question3 = document.getElementById("question3");
const arrow3 = document.getElementById("arrow3");
const answer3 = document.getElementById("answer3");
answer3.style.display = "none"

arrow3.addEventListener('click', () => {

  if (answer3.style.display === 'none') {
    answer3.style.display = 'block';
    arrow3.style.transform = "rotate(180deg)";
    question3.style.fontWeight = 700;

    answer1.style.display = 'none';
    question1.style.fontWeight = 400;
    arrow1.style.transform = "rotate(0deg)";

    answer2.style.display = 'none';
    question2.style.fontWeight = 400;
    arrow2.style.transform = "rotate(0deg)";

    answer4.style.display = 'none';
    question4.style.fontWeight = 400;
    arrow4.style.transform = "rotate(0deg)";

    answer5.style.display = 'none';
    question5.style.fontWeight = 400;
    arrow5.style.transform = "rotate(0deg)";
  } else {
    answer3.style.display = 'none';
    question3.style.fontWeight = 400;
    arrow3.style.transform = "rotate(0deg)";
  }
})

//Fourth Question
const question4 = document.getElementById("question4");
const arrow4 = document.getElementById("arrow4");
const answer4 = document.getElementById("answer4");
answer4.style.display = "none"

arrow4.addEventListener('click', () => {

  if (answer4.style.display === 'none') {
    answer4.style.display = 'block';
    arrow4.style.transform = "rotate(180deg)";
    question4.style.fontWeight = 700;

    answer1.style.display = 'none';
    question1.style.fontWeight = 400;
    arrow1.style.transform = "rotate(0deg)";

    answer2.style.display = 'none';
    question2.style.fontWeight = 400;
    arrow2.style.transform = "rotate(0deg)";

    answer3.style.display = 'none';
    question3.style.fontWeight = 400;
    arrow3.style.transform = "rotate(0deg)";

    answer5.style.display = 'none';
    question5.style.fontWeight = 400;
    arrow5.style.transform = "rotate(0deg)";
  } else {
    answer4.style.display = 'none';
    question4.style.fontWeight = 400;
    arrow4.style.transform = "rotate(0deg)";
  }
})

//Fifth Question
const question5 = document.getElementById("question5");
const arrow5 = document.getElementById("arrow5");
const answer5 = document.getElementById("answer5");
answer5.style.display = "none"

arrow5.addEventListener('click', () => {

  if (answer5.style.display === 'none') {
    answer5.style.display = 'block';
    arrow5.style.transform = "rotate(180deg)";
    question5.style.fontWeight = 700;

    answer1.style.display = 'none';
    question1.style.fontWeight = 400;
    arrow1.style.transform = "rotate(0deg)";

    answer2.style.display = 'none';
    question2.style.fontWeight = 400;
    arrow2.style.transform = "rotate(0deg)";

    answer3.style.display = 'none';
    question3.style.fontWeight = 400;
    arrow3.style.transform = "rotate(0deg)";

    answer4.style.display = 'none';
    question4.style.fontWeight = 400;
    arrow4.style.transform = "rotate(0deg)";

  } else {
    answer5.style.display = 'none';
    question5.style.fontWeight = 400;
    arrow5.style.transform = "rotate(0deg)";
  }
})