var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "What is the capital of Gujarat?",
		"options" : [
			{"a": "Ahmedabad",
				"b": "Vadodara",
				"c": "Surat",
				"d": "Gandhinagar"
			}
			],
		"answer":"Ahmedabad",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "What is the name of the traditional dress worn by women in Gujarat?",
		"options" : [
			{
				"a": "Saree",
				"b": "Salwar Kameez",
				"c": "Chaniya Choli",
				"d": "Lehenga"
			}
			],
		"answer":"Saree",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "What is the name of the famous dance festival celebrated in Gujarat?",
		"options" : [
			{"a": "Holi",
				"b": "Diwali",
				"c": "Navratri",
				"d": "Christmas"}
			],
		"answer":"Navratri",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Which of the following is a famous temple in Gujarat dedicated to Lord Krishna?",
		"options" : [
			{"a": "Jagannath Temple",
			"b": "Dwarkadhish Temple",
			"c": "Somnath Temple",
			"d": "Akshardham Temple",
			}
			],
		"answer":"Dwarkadhish Temple",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "What is the name of the traditional Gujarati dance form performed during Navratri?",
		"options" : [
			{"a": "Kathak",
			"b": "Garba",
			"c": "Bharatanatyam",
			"d": "Kuchipudi"
			}
			],
		"answer":"Garba",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What is the name of the traditional Gujarati folk dance performed by men?",
		"options" : [
			{"a": "Garba",
			"b":"Dandiya",
			"c":"Bhavai",
			"d":"Tippani"
			}
			],
		"answer":"Dandiya",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "What is the name of the traditional Gujarati snack made from gram flour and steamed?",
		"options" : [
			{"a": "Kachori",
			"b": "Fafda",
			"c": "Dhokla",
			"d": "Samosa"
			}
			],
		"answer":"Dhokla",
		"score":0,
		"status": ""
	},
		{
		"id" : 8,
		"question" : "Which of the following is a famous festival celebrated by the Parsi community in Gujarat?",
		"options" : [
			{"a": "Navratri",
			"b": "Diwali",
			"c": "Holi",
			"d": "Navroz"
			}
			],
		"answer":"Navroz",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What is the name of the traditional Gujarati sweet made from milk and sugar?",
		"options" : [
			{"a": "Gulab Jamun",
				"b": "Jalebi",
				"c": "Ladoo",
				"d": "Basundi"
			}
			],
		"answer":"Basundi",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Which of the following is a famous handicraft of Gujarat?",
		"options" : [
			{
				"a": "Chikankari",
				"b": "Bandhani",
				"c": "Kantha",
				"d": "Phulkari"
			}
			],
		"answer":"Bandhani",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "What is the name of the famous hill station in Gujarat?",
		"options" : [
			{"a": "Saputara",
				"b": "Mahabaleshwar",
				"c": "Lonavala",
				"d": "Panchgani"}
			],
		"answer":"Saputara",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "Which of the following is a famous place in Gujarat known for its ancient stepwell?",
		"options" : [
			{"a": "Sidi Saiyyed Mosque",
			"b": "Rani Ki Vav",
			"c": "Adalaj Stepwell",
			"d": "Sun Temple",
			}
			],
		"answer":"Rani Ki Vav",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "What is the name of the traditional Gujarati instrument used in folk music?",
		"options" : [
			{"a": "Harmonium",
			"b": "Tabla",
			"c": "Dhol",
			"d": "Shehnai"
			}
			],
		"answer":"Dhol",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "Which of the following is a famous wildlife sanctuary in Gujarat?",
		"options" : [
			{"a": "Gir National Park",
			"b":"Bandhavgarh National Park",
			"c":"Kanaha National Park",
			"d":"Jim Corbett National Park"
			}
			],
		"answer":"Gir National Park",
		"score":0,
		"status": ""
	},
	{
		"id" : 15,
		"question" : "What is the name of the famous festival celebrated by the Gujarati community to mark the end of Navratri?",
		"options" : [
			{"a": "Diwali",
			"b": "Holi",
			"c": "Dussehra",
			"d": "Makar Sankranti"
			}
			],
		"answer":"Dussehra",
		"score":0,
		"status": ""
	}
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



