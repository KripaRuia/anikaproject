var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Which year was Ahmedabad founded by Ahemd I?",
		"options" : [
			{"a": "1411",
				"b": "1427",
				"c": "1480",
				"d": "1398"
			}
			],
		"answer":"1411",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Who was the first chief minister of Gujarat?",
		"options" : [
			{
				"a": "Babubahhi J. Patel",
				"b": "Chimanbhai Patel",
				"c": "Balwantrai Mehta",
				"d": "Jivraj Narayan Mehta"
			}
			],
		"answer":"Jivraj Narayan Mehta",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "The British East India company established its first factory in which city?",
		"options" : [
			{"a": "Ahmedabad",
				"b": "Surat",
				"c": "Rajkot",
				"d": "Gandhinagar"}
			],
		"answer":"Surat",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Who was the ruler of Gujarat when Allauddin Khilji annexed it?",
		"options" : [
			{"a": "Rai Karan",
			"b": "Bahadur Shah",
			"c": "Mahmud Shah III",
			"d": "Miran Muhammad Shah",
			}
			],
		"answer":"Rai Karan",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "Who was the first chief justice of the Gujarat High Court?",
		"options" : [
			{"a": "Jaishanker Manilal Shelat",
			"b": "Bipinchandra Jivanlal Divan",
			"c": "Sunderlal Desai",
			"d": "Ashish Jitendra Desai"
			}
			],
		"answer":"Sunderlal Desai",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Who was the longest serving Chief Minister of Gujarat?",
		"options" : [
			{"a": "Bhupendar Patel",
			"b":"Narendra Modi",
			"c":"Anandi Ben Patel",
			"d":"Vijay Rupani"
			}
			],
		"answer":"Narendra Modi",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "How many seats does Gujarat have in the Parliament?",
		"options" : [
			{"a": "23",
			"b": "24",
			"c": "26",
			"d": "30"
			}
			],
		"answer":"26",
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



