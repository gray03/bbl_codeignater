$(document).ready(function(){

	
	/* Display comment */
	
	//var userId=$("#userId").val();
	
	/* var surveyId=$(".surveyID").val();
	function showLastComment(){
		$.ajax({
			type:"POST",
			url:"ajax/ajax_comment.php",
			data:"action=showlastcomment",
			beforeSend: function(){
				//$('#loading').show();
				$("#commentField").text('OK');
			},
			success:function(data){
					$('#loading').hide();
				 $("#commentField").html(data);
				 //$('#postComment').attr('disabled',true);
			}
		});
	};
	showLastComment();  */
	
	
	$(this).on("click", "#lnkmodalViewCom", function () {
		var idSurvey	=	$(this).data('survey-id');
		var idUser		= 	$(this).data('user-id');
		$('.viewSID').attr('data-viewsid',idSurvey);
		$('.viewUID').attr('data-viewuid',idUser);

		function showCommentModal(){
			$.ajax({
				type:	"post",
				url:	"ajax/ajax_comment.php",
				data:	"userId="+idUser+"&surveyId="+idSurvey+"&commentMes="+message+"&action=showcomment",
				beforeSend: function(){
					$('#loading').show();
				},
				success:function(data){
					 //$("#comment").html(data);
					 $('#loading').hide();
					 $("#showCommentModal").html(data);
					// $('#postComment').attr('disabled',true);
				}
			});
		};
		
		showCommentModal();

		
	});
	

	$("#postCommentMod").click(function(){
		
		//alert(surveyId);
		
		var idSurvey2 = $('.viewSID').attr('data-viewsid');
		var idUser2	= $('.viewUID').attr('data-viewuid');
		var message2=$("#txtContentComment").val();
				
		$.ajax({
			type:"post",
			url:"ajax/ajax_comment.php",
			data:"userId="+idUser2+"&surveyId="+idSurvey2+"&commentMes="+message2,
			cache:false,
			beforeSend: function(){
				$('#postCommentMod').html('<span class="fa fa-spinner fa-spin fa-fw"></span> POSTING ...');
			}, 
			success:function(data){
				$("textarea").val('');
				$('.inputViewCom')[0].reset();
				$('#postCommentMod').html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
				$('#postCommentMod').attr('disabled',true);
				showComment();
			}
		});  



		function showComment(){
			$.ajax({
				type:"post",
				url:"ajax/ajax_comment.php",
				data:"userId="+idUser2+"&surveyId="+idSurvey2+"&commentMes="+message+"&action=showcomment",
				beforeSend: function(){
					$('#loading').show();
				},
				success:function(data){
					 $('#loading').hide();
					 $("#showCommentModal").html(data);
				}
			});
		};		
			

	}); 
		
	
	/* 
	var surveyId=$(".surveyID").attr('data-lastSurveyId');
	var message=$("#txtContentComment").val();

	function showLastComment(){
		$.ajax({
			type:	"POST",
			url:	"ajax/ajax_comment.php",
			data:	"surveyLastID="+surveyId+"&action=showlastcomment",
			success:function(data){
				$('.commentField').text(surveyId);
			}
		});
	}; 
	showLastComment(); */
	
	
});
	
