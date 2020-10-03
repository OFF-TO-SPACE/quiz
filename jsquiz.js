function Quiz (questions) {
  this.score = 0; 
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
}






function Question (text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
}






function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById('choice' + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}


function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
  var element = document.getElementById('quiz');
  element.innerHTML = gameOverHTML;
}


var questions = [
  new Question("1.When was SORCE launched?", ["a.25 January 2003","b.24  January 2002","c.26 January 2003","d.27 January 2002"], "a.25 January 2003"),
  new Question("2.Which instrument of AQUA is used to measure cloud properties?", ["a.AMSR-E","b.AMSU-A","c.AIRS","d.MODIS"], "a.AMSR-E"),
  new Question("3.When was the satellite Aura successfully launched?", ["a.25 July 2004","b.15 June 2004","c.15 July 2004","d.25 June 2004"], "c.15 July 2004"),
  new Question("4.Expand SOLSTICE?", ["a.Solar Systematic Comparison Experiment","b.Solar Synthetic Compaction Experiment","c.Space Orbit Secure Evolution","d.Solar Stellar Comparison Experiment"], "d.Solar Stellar Comparison Experiment"),
  new Question("5.Name ICESat-2's sole instrument?", ["a.ATLAS","b.AQUAS","c.SNOW","d.ICEX"], "a.ATLAS"),
  new Question("6.When was ICESat-2 launched?", ["a.11 September 2018","b.15 September 2017","c.15 September 2018","d.14 September 2017"], "c.15 September 2018"),
  new Question("7.Number of laser beams in ICESat-2?", ["a.1","b.2","c.6","d.4"], "c.6"),
  new Question("8.Former name of TERRA ?", ["a.EOS/AV-1","b.EOS/AM-1","c.EOS/AV-2","d.EOS/AM-3"], "b.EOS/AM-1"),
  new Question("9.What is the full form of HIRDLS?", ["a.High Resolution Dynamics Light Sounder","b.High Resolution Dynamics Limb Sounder","c.High Resolution Dynamite Limb Sounder","d.Half Resolution Dynamite Limb Sounder"], "b.High Resolution Dynamics Limb Sounder"),
  new Question("10.When was SORCE decommissioned?", ["a.10 February 2019","b.25 February 2020","c.23 February 2018","d.11 February 2019"], "b.25 February 2020"),
  new Question("11.What is TERRA’s mythical meaning?", ["a.Mother Earth","b.Green Earth","c.Father Land","d.I don't know"], "c.Mother Earth"),
  new Question("12.Aqua carries how many  instruments for studies of water on the Earth's ?", ["a.4","b.6","c.8","d.3"], "b.6"),
  new Question("13.Which instrument in Aura is used to measure infrared radiation?", ["a.HIRDLS","b.TES","c.OMI","d.MLS"], "a.HIRDLS"),
  new Question("14.Which instrument of TERRA is used to measure the reflected and radiant energy coming from the earths surface?", ["a.MISR","b.MODIS","c.CERES","d.MOPITT"], "c.CERES"),
  new Question("15.When was the satellite Aqua successfully launched?", ["a.15 July 2004","b.10 February 2003","c.26 January 2005","d.4 May 2004"], "d.4 May 2004"),

];

var quiz = new Quiz (questions);

populate();