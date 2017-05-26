// JavaScript Document
$(document).ready(function() {

	var correct = 0;
	var incorrect = 0;
	var time = 20;
	var intervalid;
	var correctAnswer = "a";
	var incorrectAnswer = "b";
	var selected;
	
	$("#done").on("click", done);
	

	
	function run(){
		intervalid = setInterval(decrement, 1000);	
	}
	
	function decrement() {
		time--;
		
		$("#time").text(time);
		
		if (time === 0) {
			done();
		
		$("#correct").text("Correct" + correct);
		$("#incorrect").text("Incorrect" + incorrect);
	
		}
	}
	
	function done() {
		
		clearInterval(intervalid);
		$("#correct").text("Correct" + correct);
		$("#incorrect").text("Incorrect" + incorrect);
	}
	run();
	
	for (var j=0; j <document.UFC.q.length; j++){
		
		if (document.UFC.q[j].checked===true){
			
			selected = j;
		}
	}
	
//	STORES CLICKED ANSWER AND ADDS CORRECT AND INCORRECT ANSWERS
//	

	$("#answer1").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		c(clickedId);
	});
			function c(x) {
//				var x = $("#answer1").value;
//				
				if (x === correctAnswer) {
					correct++;
					console.log(correct);
				}
				
			}
	
	$("#answer2").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		d(clickedId);
	});
			function d(x) {
//				var x = $("#answer1").value;
//				
				if (x === correctAnswer) {
					correct++;
					console.log(correct);
				}
				
			}
	$("#answer3").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		e(clickedId);
	});
			function e(x) {
//				var x = $("#answer1").value;
//				
				if (x === correctAnswer) {
					correct++;
					console.log(correct);
				}
				
			}
	$("#answer4").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		f(clickedId);
	});
			function f(x) {
//				var x = $("#answer1").value;
//				
				if (x === correctAnswer) {
					correct++;
					console.log(correct);
				}
				
			}
	$("#incorrect1").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		g(clickedId);
	});
			function g(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect2").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ia(clickedId);
	});
			function ia(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect3").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ib(clickedId);
	});
			function ib(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect4").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ic(clickedId);
	});
			function ic(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect5").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ij(clickedId);
	});
			function ij(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect6").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ik(clickedId);
	});
			function ik(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect7").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		ir(clickedId);
	});
			function ir(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	$("#incorrect8").click(function() {
		
		var clickedId = $(this).attr("value");
		console.log(clickedId);
		im(clickedId);
	});
			function im(x) {
//				var x = $("#answer1").value;
//				
				if (x === incorrectAnswer) {
					incorrect++;
					console.log(incorrect);
				}
				
			}
	
		
});