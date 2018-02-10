
$(document).ready(function(){
	
	var result_id 		 = 	var_decrypt($('#result_id').val());
	var result_word 	 = 	$('#result_word').val();
	var result_by	 	 = 	$('#result_by').val();
	var result_userid	 = 	var_decrypt($('#result_userid').val());
	var track_page		 = 	1; //track user scroll as page number, right now page number is 1
	var loading 		 = 	false; //prevents multiple loads
	var commentTotal 	 = 	parseInt($('.updateCommentTotal-'+result_id).attr('data-total-comment'));
	
	
	showResultAll(track_page);
	showResult();
	load_comment();
	
	
	
	$(window).scroll(function() { 
		if($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page
			track_page++; 
			showResultAll(track_page);	
		}
	});	
	
	
	//showResultAll();
	
	
	
	if(result_id != 'result'){
		$("#postCommentMod").click(function(){
			var idUser2			= 	var_decrypt($('.viewUID').val());
			var message2		=	$("#txtContentComment").html();
			//var totalcomment	=	$('.totalcomment_'+$('#result_id').val()).html();
			//var Gettotalcomment	=	$(this).val();
					
			
			$.ajax({
				type:"post",
				url:"ajax/ajax_comment.php",
				data:"userId="+idUser2+"&surveyId="+result_id+"&commentMes="+message2,
				beforeSend: function(){
					$('#postCommentMod').html('<span class="fa fa-spinner fa-spin fa-fw"></span> POSTING ...');
				}, 
				success:function(data){
					if(data == 'ERROR'){
						$('.inputViewCom')[0].reset();				  
					}else{	
						commentTotal = commentTotal + 1;
						$("#txtContentComment").empty();
						$('.inputViewCom')[0].reset();
						$('#postCommentMod').html('<span class="fa fa-share-square-o" aria-hidden="true"></span> POST');
						$('#postCommentMod').attr('disabled',true);
						load_comment();
						addCommentTotal(commentTotal,result_id);
					}
				 }
			});
			

		});
	}




	
	$(this).on("click", ".btn_editCom2", function () {

		var id				=	$(this).data('searchcom');
		var decrypt_id 		= var_decrypt(id);
		
		
		var content = $('#clk_editConSearch_'+decrypt_id).text();
		//var idSurvey = var_decrypt($('.viewSID').attr('data-viewsid'));
		$('#modalViewCom, .modal-backdrop').css("display", 'none');
		
		//alert(result_userid);
		
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
					//$('#modalViewCom').removeClass('in');
					return false;
				}
				if (inputValue === "") {
					swal.showInputError("You need to write something!");
					return false
				}
				
				
				$.ajax({
					type:"post",
					url:"ajax/ajax_comment.php",
					data:"comID="+decrypt_id+"&userID="+result_userid+"&commentMes="+inputValue+"&action=showeditcomment",
					success:function(data){
						if(data == 'OK'){
							
							swal("Nice!", "It was succesfully edit your comment", "success");
							//$('#modalViewCom').delay(10000).show();
							$('.modal-backdrop').css("display", 'block');
							$('body').removeClass('modal-open');
							load_comment();
							//showCommentLast(idSurvey);
							//alert('OK');
							
						}else{
							swal("Error Updating!", "Please try again", "error");
							$('body').removeClass('modal-open');
							//$('#modalViewCom').removeClass('in');
						}
						
					 },
					error: function (xhr, ajaxOptions, thrownError) {
						swal("Error Updating!", "Please try again", "error");
						$('body').removeClass('modal-open');
						//$('#modalViewCom').removeClass('in');
					}
				});
				
			});
	});	
	
	function showResultAll(track_page){
		if(loading == false){
			loading = true; 
			$('.loading-info').show();
			
			$.ajax({
				url: 'ajax/ajax_search.php',
				data: 'page='+track_page+'&view_result='+result_word+'&by='+result_by+'&action=load_resultall',
				type: 'POST',
				success: function(data){
					loading = false;
					if(data.trim().length == 0){
						$('#loading_end').html("No more records!");
						$('.loading-info').hide();
						return;
					}else{
						$("#showAllResult").append(data); 
						$('.loading-info').hide();
					}
					
				}
			});
		}
	}
	
	
	function showResult(){
			$('.loading-info').show();
			
			$.ajax({
				url: 'ajax/ajax_search.php',
				data: 'view_id='+result_id+'&action=load_result',
				type: 'POST',
				success: function(data){
					$("#show_result").html(data); 
					$('.loading-info').hide();
				}
			});
			
		//}
	}
	
	
	function load_comment(){
		$.ajax({
			url: 'ajax/ajax_search.php',
			data: 'view_id='+result_id+'&action=load_comment',
			type: 'POST',
			success: function(data){
				//result_comment = data;
				$("#showComment").html(data); 

			},
		});
		
	}
	
	
	// Add total comment
	
	function addCommentTotal(commentTotal,idSurvey){
		$('.updateCommentTotal-'+idSurvey).text(commentTotal);
		$('.updateCommentTotal-'+idSurvey).attr("data-total-comment",commentTotal);
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
});
