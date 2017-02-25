$(document).ready(function(){

	$(".segments").sortable();
	$(".male, .female").draggable({
		revert: "invalid",
		containment: ".segment3"
	});

	$(".dropbox").droppable({
		accept: ".male, .female",
		drop: function( event, ui ) {
			$( this )
			.addClass( "ui-state-highlight" )
		}
	});

	var email ;
	var fname ;
	var lname ;
	var name ;
	var pass  ;
	var cpass ;

	$("#submit").click(function(){
		email = $("#email").val();
		fname = $("#fname").val();
		lname = $("#lname").val();
		name = $("#name").val();
		pass = $("#pass").val();
		cpass = $("#cpass").val();

		var atemail = email.search("@");


		if(email == '' || fname == '' || lname == '' || name == '' || pass == '' || cpass == ''){
			$("#common-alert").css("display", "block");
		}else if(fname.length <2 && lname.length <2 && name.length <4){
			$("#name-alert").css("display", "block");
		}else if(pass.length<5 && cpass.length<5){
			$("#pass-alert").css("display", "block");
		}else if(email.length<5 && email.length<5){
			$("#email-length-alert").css("display", "block");
		}
		else if(atemail == -1){
			$("#email-alert").css("display", "block");
		}else if($("#checkbox").is(":checked") == true){
			$("#check-alert").css("display", "block");
		}else if($(".dropbox").hasClass("ui-state-highlight") == false){
			$("#gender-alert").css("display", "block");
		}
		else{
			$(".alert-success").css("display", "block");
		}
	});


	$("#fname, #lname, #pass, #cpass, #email").keyup(function(){
		fname = $("#fname").val();
		lname = $("#lname").val();
		pass = $("#pass").val();
		cpass = $("#cpass").val();
		email = $("#email").val();

		$("#name").val(fname+' '+lname);

		var atemail = email.search("@");
		var dotemail = email.search(".");

		if(atemail != -1 && dotemail != -1){
			$("#email").css({
				border : "1px solid #ccc"
			});

		}else{
			$("#email").css({
				border : "1px solid red"
			});
		}


		if(pass != cpass){
			$("#pass, #cpass").css({
				border : "1px solid red"
			});
		}else{
			$("#pass, #cpass").css({
				border : "1px solid #ccc"
			});
		}
	});
});