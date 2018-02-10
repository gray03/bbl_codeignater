$(document).ready(function(){
	
	$(this).on("click", ".btn_readPost", function () {
	 var idSurvey = $(this).data('id');
	 var idUser = $(this).data('user-id');
	 $("#id_surveyView").val( idSurvey );
	 $("#id_userView").val( idUser );
	 
	
		$.ajax({
			type: 'GET',
			url: 'ajax/ajax_viewModal.php',
			data: 'surveyId='+idSurvey+'&userId='+idUser+'&action=survey',
			dataType: 'json',
			/*beforeSend:function (){
				$('.modal-body').html("<img src='img/LoaderIcon.gif' />");
			},*/
			success:function(data){
				var mSub = data[3];
				var mSpec = data[4];
				var mPic = data[6];
				var mDesc = data[8];
				var mVideo = data[9];
				var mBelieve = data[10];
				var mHope = data[11];
				var mLove = data[12];
				var uLName = data[18];
				var uFName = data[19];
				var uPic = data[20];
				
				$('.modal_leftCon h4').text(mSub);
				$('.modal_leftCon small').text(mSpec);
				$('.modal_leftCon p').text(mDesc);
				$('.user_div p').text(uFName + ' ' + uLName);
				
				if(uPic != ''){
					$('.user_modalPic').html('<div style="width:40px;height:40px;float:left;background-image: url('+uPic+');background-size: 100% 100%;" ></div>');
					
				}else{
					$('.user_modalPic').html('<div style="width:40px;height:40px;color:#FFF;float:left;background-color:rgb(154, 188, 169);text-align: center;padding-top: 6px; font-size: 20px;font-weight: 500;" >'+uFName.charAt(0)+uLName.charAt(0)+'</div>');
				}
				
				if(mPic != ''){
					$('.preview_media').html("<img src='images/"+mPic+"' class='img-responsive' />");
				}else if(mVideo != ''){
					$('.preview_media').html('<iframe width="100%" height="auto" src="https://www.youtube.com/embed/'+mVideo+'?rel=0" frameborder="0" allowfullscreen></iframe></div>');
				}else{
					$('.preview_media').html('<p></p>');
				}
				
				
				if(mBelieve == '0' && mHope == '0' && mLove == '0'){
					$('.badge').text('0');
				}else{
					$('.badge_believe').text(mBelieve);
					$('.badge_hope').text(mHope);
					$('.badge_love').text(mLove);
				}
			}
		});
	
	});
	

	
});
	