$(document).ready(function(){

	/* Display post behoal  */

	  $.ajax({
		type:"html",
		/* url:"ajax/ajax_comment2.php",
		data:"action=showlastcomment", */
		/* beforeSend: function(){
			$('#commentField').text('OK');
		}, */
		success:function(){
			 $("#commentField").text('ok');
		} 
	  });
	}

	

});