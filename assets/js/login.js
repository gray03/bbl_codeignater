$(document).ready(function() {
	
	$('#login').click(function()
	{
		var username=$("#username").val();
		var password=$("#password").val();
		var dataString = 'username='+username+'&password='+password;
		if($.trim(username).length>0 && $.trim(password).length>0)
		{
		
 
			$.ajax({
				type: "POST",
				url: "func/process_login.php",
				data: dataString,
				cache: false,
				beforeSend: function(){
					$("#login").val('Connecting...');
				},
				success: function(data){
					if(data)
					{
						window.location.href = "dashboard.php";
					}
					else
					{
						 $('#sub1_box').shake();
						 $("#login").val('Login');
						 $("#error").html("<span style='color:#cc0000'><b>Error:</b></span> Invalid username and password. ");
					}
				} 
			});
		
		}
		else
		{
			 $('#sub1_box').shake();
			 $("#login").val('Login');
			 $("#error").html("<span style='color:#cc0000'><b>Error:</b></span> Empty Fields. Please try again. ");
		}
		return false;
	});
});