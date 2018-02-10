$(document).ready(function(){

	
	/* Display comment */
	
	var userId	=	$("#userId").val();
	var surveyId=	$("#surveyId").val();
	var message	=	$("#txtContentComment").val();
	var comID	=	var_decrypt($('.comID').data('comid'));
	//var comID	=	$('.survey_con_inner').children('section').attr('data-id');
	
	$(this).on("click", ".btn_editCom", function () {
		//alert(comID);
		var id	=	$(this).data('com');
		var decrypt_id = var_decrypt(id);
		
		//alert(decrypt_id);
		
		var content = $('.clk_editCon_'+decrypt_id).text();
		var idSurvey = var_decrypt($('.viewSID').attr('data-viewsid'));
		var idUser	= var_decrypt($('.viewUID').attr('data-viewuid'));
		$('#modalViewCom, .modal-backdrop').css("display", 'none');
		swal({
			  title: "Edit Your Comment",
			  //text: "Write something interesting:",
			  type: "input",
			  showCancelButton: true,
			  closeOnConfirm: false,
			  showLoaderOnConfirm: true,
			  animation: "slide-from-top",
			  inputPlaceholder: "Write something",
			  inputValue: content,
			},
			function(inputValue){
				if (inputValue === false){
					$('body').removeClass('modal-open');
					$('#modalViewCom').removeClass('in');
					return false;
				}
				if (inputValue === "") {
					swal.showInputError("You need to write something!");
					return false
				}
				
				
				$.ajax({
					type:"post",
					url:"ajax/ajax_comment.php",
					data:"comID="+decrypt_id+"&userID="+idUser+"&commentMes="+inputValue+"&action=showeditcomment",
					success:function(data){
						if(data == 'OK'){
							
							swal("Nice!", "It was succesfully edit your comment", "success");
							$('#modalViewCom').delay(10000).show();
							$('.modal-backdrop').css("display", 'block');
							$('body').removeClass('modal-open');
							showComment(idUser,idSurvey);
							showCommentLast(idSurvey);
							//alert('OK');
							
						}else{
							swal("Error Updating!", "Please try again", "error");
							$('body').removeClass('modal-open');
							$('#modalViewCom').removeClass('in');
						}
						
					 },
					error: function (xhr, ajaxOptions, thrownError) {
						swal("Error Updating!", "Please try again", "error");
						$('body').removeClass('modal-open');
						$('#modalViewCom').removeClass('in');
					}
				});
				
			});
	});
	
	
	$(this).on("click", "#lnkmodalViewCom", function () {
		var idSurvey	=	var_decrypt($(this).data('survey-id'));
		var idUser		= 	var_decrypt($(this).data('user-id'));
		
		var idSurvey_raw	=	$(this).data('survey-id');
		var idUser_raw		= 	$(this).data('user-id');

		
		$('.viewSID').attr('data-viewsid',idSurvey_raw);
		$('.viewUID').attr('data-viewuid',idUser_raw);
		//$('.viewCID').attr('data-viewcid',commentTotal);
		showComment(idUser,idSurvey);	
		
	});
	
	$("#postCommentMod").click(function(){
		var idSurvey2 		= 	$('.viewSID').attr('data-viewsid');
		var idSurvey2 		= 	var_decrypt($('.viewSID').attr('data-viewsid'));
		var idUser2			= 	var_decrypt($('.viewUID').attr('data-viewuid'));
		//var commentTotal2 = parseInt($('.viewCID').attr('data-viewcid'));
		var commentTotal 	= 	parseInt($('.updateCommentTotal-'+idSurvey2).attr('data-total-comment'));
		var message2		=	$("#txtContentComment").html();
				
		//alert(idSurvey2);
		
		$.ajax({
			type:"post",
			url:"ajax/ajax_comment.php",
			data:"userId="+idUser2+"&surveyId="+idSurvey2+"&commentMes="+message2,
			beforeSend: function(){
				$('#postCommentMod').html('<span class="fa fa-spinner fa-spin fa-fw"></span> POSTING ...');
			}, 
			success:function(data){
				if(data == 'ERROR'){
					$('.inputViewCom')[0].reset();				  
				}else{
					commentTotal2 = commentTotal + 1;
					
					$("#txtContentComment").empty();
					$('.inputViewCom')[0].reset();
					$('#postCommentMod').html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
					$('#postCommentMod').attr('disabled',true);
					$('.lnkmodalViewCom-'+idSurvey2).html('<i class="fa fa-search" aria-hidden="true"></i> view more comments');
					showComment(idUser2,idSurvey2);					  
					addCommentTotal(commentTotal2,idSurvey2);	
				}
			 }
		});
		

	});
	
	function showCommentLast(id){

		$.ajax({
			type:"post",
			url:"ajax/ajax_comment.php",
			data:"com_id="+id+"&action=showlastcomment",
			success:function(data){
				$(".commentShow").html(data);
			}
		});
	};
	
	function showComment(idUser2,idSurvey2){
		$.ajax({
			type:"post",
			url:"ajax/ajax_comment.php",
			data:"userId="+idUser2+"&surveyId="+idSurvey2+"&commentMes="+message+"&action=showcomment",
			beforeSend: function(){
				$('#loading').show();
			},
			success:function(data){
				 //$("#comment").html(data);
				 $('#loading').hide();
				 if(data == "No_Comment"){
					$("#showCommentModal").html(data);
				 }else{
					$("#showCommentModal").html(data);
				 }
			}
		});
	};
	
		//showComment();
	
	
	// Add total comment
	
	function addCommentTotal(commentTotal2,idSurvey2){
		$('.updateCommentTotal-'+idSurvey2).text(commentTotal2);
		$('.updateCommentTotal-'+idSurvey2).attr("data-total-comment",commentTotal2);
	}
	
	
	function var_decrypt(id){
		
		var id;
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'encrypt_ID='+id+'&action=getID',
			dataType: 'json',
			async: false,
			success:function(data){
				id = data;         
			}
		});
		
		return id;
		
	}
	
	//showCommentLast(comID);
	//setInterval(function(){
	//	showCommentLast(comID) // this will run after every 10 seconds
	//}, 10000);
	
	
});
	
