
	$(document).ready(function (){
		$('#winkShow').click(function(){
			if($('#winkShow').hasClass('winkHide')){
				//alert(true);
				$('#pass_inputToogle').attr('type', 'password');
				$(this).addClass('winkShow');
				$(this).removeClass('winkHide');
			}else{
				$('#pass_inputToogle').attr('type', 'text');
				$(this).removeClass('winkShow');
				$(this).addClass('winkHide')
			}
		});
		
		$('.modalPassRec').click(function(){
			//$('#modalLogin').modal('toogle');
			$('#modalLogin').removeClass('in').css('display', 'none').attr('aria-hidden', 'true');
			$('.modal-backdrop').remove();
		});
		/* $('#modalLogin').on('hidden', function(){
			$('#formLogin')[0].reset();
		}); */
		$('.emailRec').hide();
		$('.passRec').hide();
		$('.clickEmAd').click(function(){
			$('.emailRec').slideDown();
			$('.clickPass').hide();
		});
		$('.clickPass').click(function(){
			$('.passRec').slideDown();
			$('.clickEmAd').hide();
		});
		
		$('.returnField').click(function(){
			$('.clickEmAd, .clickPass ').show();
			$('.passRec, .emailRec').hide();
		});
		
		
		$('.modalResEmailVer').click(function(){
			$('#modalLogin').removeClass('in').css('display', 'none').attr('aria-hidden', 'true');
			$('.modal-backdrop').remove();
		});
		
		
		$('.modalLogin').on('click', function(){
			$('.index_nav li:last-child').removeClass('active');
			$('.index_nav li:first-child').addClass('active');
			$('#login').addClass('in active');
			$('#register').removeClass('in active');
			
			$(".mobModal").slideToggle("slow");
		});
		
		$('.modalRegister').on('click', function(){
			$('.index_nav li:last-child').addClass('active');
			$('.index_nav li:first-child').removeClass('active');
			$('#login').removeClass('in active');
			$('#register').addClass('in active');
			
			$(".mobModal").slideToggle("slow");
		});
		
		$('#formLogin').validate({
			rules: {
				email: {
					required:true,
					email: true
				},
				pass: {
					required:true
				}
			}
		});		
		
	});
