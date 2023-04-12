var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "What is the main staple food of Gujarat?",
		"options" : [
			{"a": "Rice", 
			 "b":"Chapati", 
			 "c":"Khichdi", 
			 "d":"Paratha"}
			],
		"answer":"Khichdi",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Which of the following is a popular Gujarati snack?",
		"options" : [
			{"a": "Samosas", 
			 "b":"Vada Pav", 
			 "c":"Dhokla",
			 "d":"Biryani"}
			],
		"answer":"Dhokla",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Which of the following is a popular Gujarati sweet dish made from gram flour and sugar syrup?",
		"options" : [
			{"a" : "Gulab Jamun",
				"b": "Jalebi",
				"c": "Ladoo",
				"d": "Mohanthal"
			}
			],
		"answer":"Mohanthal",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "What is the name of the Gujarati dish made from steamed dumplings of gram flour, vegetables and spices?",
		"options" : [
			{"a": "Khandvi", 
			 "b":"Dhokla",
			 "c":"Thepla",
			 "d":"Fafda"
			}
			],
		"answer":"Dhokla",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "What is the name of the Gujarati bread made from wheat flour and fenugreek leaves?",
		"options" : [
			{"a": "Thepla",
				"b":"Paratha",
				"c": "Roti",
				"d": "Naan"
			}
			],
		"answer":"Thepla",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Which of the following is a popular Gujarati street food made from deep-fried gram flour and served with spicy chutney?",
		"options" : [
			{"a": "Samosa", 
			"b":"Vada Pav",
			"c":"Kachori",
			"d":"Fafda",
			}
			],
		"answer":"Fafda",
		"score":0,
		"status": ""
	},
	
	{
		"id" : 7,
		"question" : "What is the name of the Gujarati dish made from lentils and vegetables, usually served with rice?",
		"options" : [
			{"a" : "Khichdi",
				"b": "Kadhi",
				"c": "Dal",
				"d": "Rajma"
			}
			],
		"answer":"Dal",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "What is the name of the Gujarati snack made from roasted chickpeas and spices?",
		"options" : [
			{"a": "Chivda", 
			 "b":"Chakli",
			 "c":"Bhel",
			 "d":"Farsan"
			}
			],
		"answer":"Chakli",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Which of the following is a popular Gujarati curry made from yogurt, gram flour and spices?",
		"options" : [
			{"a":"Kadhi",
			"b": "Rajma",
			"c": "Dal",
			"d": "Khichdi"
			}
			],
		"answer":"Kadhi",
		"score":0,
		"status": ""
	},
		{
		"id" : 10,
		"question" : "What is the name of the Gujarati dish made from crispy fried strips of dough and served with sweet syrup?",
		"options" : [
			{"a": "Gulab Jamun",
			"b": "Jalebi",
			"c": "Ladoo",
			"d": "Mohanthal"
		
			}
			],
		"answer":"Jalebi",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "Which of the following is a popular Gujarati rice dish made with mixed vegetables and spices?",
		"options" : [
			{"a" : "Biryani",
				"b": "Pulao",
				"c": "Khichdi",
				"d": "Fried Rice"
			}
			],
		"answer":"Pulao",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "What is the name of the Gujarati snack made from gram flour and served with sweet and sour chutney?",
		"options" : [
			{"a": "Khandvi", 
			 "b":"Dhokla",
			 "c":"Thepla",
			 "d":"Fafda"
			}
			],
		"answer":"Fafda",
		"score":0,
		"status": ""
	},



	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



