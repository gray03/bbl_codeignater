/**********  Vote  **********/

function addBelieve(id,action,count_total) {
	
	var id_str = id.length;
	//if(id_str == 44){
		if(action!='disabled'){
			if(count_total != 'lA=='){
				$.ajax({
					type: 'GET',
					url: 'ajax/ajax_dashboardPost.php',
					data: 'id='+id+'&action_button='+action+'&count_total='+count_total,
					dataType: 'json',
					beforeSend: function(){
						$('#'+id+' .btn-believe').html("<img src='img/LoaderIcon.gif' />");
					},
					success:function(data){
						if(data['msg']== 'end_session'){
							swal({
								title: "Ops! Session Timeout",
								text: "Please login again your account",
								type: "warning",
								confirmButtonColor: "#177500 "
							}, function() {
								window.location = "logout.php";
							});
						}else{
							var idS = data['a2'];            
							var display_totalCnt = parseInt(data['a1']);              
							var likes_total = parseInt(data['a3']);
							var likes_total1 = data['a4'];
							var likes_total2 = data['a5'];
							var subtract_totalCnt_encryp = data['a6'];           
							var subtract_totalCnt = parseInt(data['a7']);           
							
							if(count_total != 'lA=='){
								likes_total = likes_total + 1;
								display_totalCnt = display_totalCnt + 1;
								//subtract_totalCnt = subtract_totalCnt - 1;
								$('#'+id+' .btn-believe').html('<button type="button" title="BELIEVE" class="btn btn-success btn-xs believe" onClick="addBelieve(\''+id+'\',\'believe\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/pray.png" /> BELIEVE <span class="badge">'+likes_total+' </span></button> ');
								$('#'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs believe" onClick="addHope(\''+id+'\',\'hope\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/human-brain.png" /> HOPE <span class="badge">'+likes_total1+' </span></button> ');
								$('#'+id+' .btn-love').html('<button type="button" title="love" class="btn btn-success btn-xs believe" onClick="addLove(\''+id+'\',\'love\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/favorite-heart-button.png" /> LOVE/LIKE <span class="badge">'+likes_total2+' </span></button> ');
								
							}else{
								$('#'+id+' .btn-believe button').addClass('disabled');
								$('#'+id+' .btn-hope button').addClass('disabled');
								$('#'+id+' .btn-love button').addClass('disabled');	
								swal("No more counts", "You can only vote 3 times", "warning");
							}
							$('#'+id+' .display_totalCnt').html('<span style="margin-right:30px">Behoals: '+display_totalCnt+' </span> Remaining Votes: '+subtract_totalCnt);
						}
						
						//alert(idS);
						 
						 
					}
				});
			}else{		
				//sweetAlert("No more counts");
				swal("No more counts", "You can only vote 3 times", "warning");
			}
		}else{
			swal("No more counts", "You can only vote 3 times", "warning");
		}
	//}else{
	//	sweetAlert("Oops...", "Something went wrong!", "error");
	//}
}



function addHope(id,action,count_total) {
	
	var id_str = id.length;
	//if(id_str == 44){
		if(action!='disabled'){
			if(count_total != 'lA=='){
				$.ajax({
					type: 'GET',
					url: 'ajax/ajax_dashboardPost.php',
					data: 'id='+id+'&action_button='+action+'&count_total='+count_total,
					dataType: 'json',
					beforeSend: function(){
						$('#'+id+' .btn-hope').html("<img src='img/LoaderIcon.gif' />");
					},
					success:function(data){
						if(data['msg']== 'end_session'){
							swal({
								title: "Ops! Session Timeout",
								text: "Please login again your account",
								type: "warning",
								confirmButtonColor: "#177500 "
							}, function() {
								window.location = "logout.php";
							});
						}else{
							var idS = data['a2'];            
							var display_totalCnt = parseInt(data['a1']);            
							var likes_total = data['a3'];
							var likes_total1 = parseInt(data['a4']);
							var likes_total2 = data['a5'];
							var subtract_totalCnt_encryp = data['a6'];           
							var subtract_totalCnt = parseInt(data['a7']);            
							
							if(count_total != 'lA=='){
								likes_total1 = likes_total1 + 1;
								display_totalCnt = display_totalCnt + 1;
								$('#'+id+' .btn-believe').html('<button type="button" title="BELIEVE" class="btn btn-success btn-xs believe" onClick="addBelieve(\''+id+'\',\'believe\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/pray.png" /> BELIEVE <span class="badge">'+likes_total+' </span></button> ');
								$('#'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs believe" onClick="addHope(\''+id+'\',\'hope\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/human-brain.png" /> HOPE <span class="badge">'+likes_total1+' </span></button> ');
								$('#'+id+' .btn-love').html('<button type="button" title="love" class="btn btn-success btn-xs believe" onClick="addLove(\''+id+'\',\'love\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/favorite-heart-button.png" /> LOVE/LIKE <span class="badge">'+likes_total2+' </span></button> ');
							}else{
								$('#'+id+' .btn-believe button').addClass('disabled');
								$('#'+id+' .btn-hope button').addClass('disabled');
								$('#'+id+' .btn-love button').addClass('disabled');	
								swal("No more counts", "You can only vote 3 times", "warning");
							}
							$('#'+id+' .display_totalCnt').html('<span style="margin-right:30px">Behoals: '+display_totalCnt+' </span> Remaining Votes: '+subtract_totalCnt);
							// alert(idS);
						}
						 
						 
					}
				});
			}else{	
				swal("No more counts", "You can only vote 3 times", "warning");
			}
			
		}else{
			swal("No more counts", "You can only vote 3 times", "warning");
		}
	//}else{
	//	sweetAlert("Oops...", "Something went wrong!", "error");
	//}
}




function addLove(id,action,count_total) {
	
	var id_str = id.length;
	//if(id_str == 44){
		if(action!='disabled'){
			if(count_total != 'lA=='){
				$.ajax({
					type: 'GET',
					url: 'ajax/ajax_dashboardPost.php',
					data: 'id='+id+'&action_button='+action+'&count_total='+count_total,
					dataType: 'json',
					beforeSend: function(){
						$('#'+id+' .btn-love').html("<img src='img/LoaderIcon.gif' />");
					},
					success:function(data){
						if(data['msg']== 'end_session'){
							swal({
								title: "Ops! Session Timeout",
								text: "Please login again your account",
								type: "warning",
								confirmButtonColor: "#177500 "
							}, function() {
								window.location = "logout.php";
							});
						}else{
							var idS = data['a2'];            
							var display_totalCnt = parseInt(data['a1']);          
							var likes_total = data['a3'];
							var likes_total1 = data['a4'];
							var likes_total2 = parseInt(data['a5']);
							var subtract_totalCnt_encryp = data['a6'];           
							var subtract_totalCnt = parseInt(data['a7']);         
							
							if(count_total != 'lA=='){
								likes_total2 = likes_total2 + 1;
								display_totalCnt = display_totalCnt + 1;
								$('#'+id+' .btn-believe').html('<button type="button" title="BELIEVE" class="btn btn-success btn-xs believe" onClick="addBelieve(\''+id+'\',\'believe\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/pray.png" /> BELIEVE <span class="badge">'+likes_total+' </span></button> ');
								$('#'+id+' .btn-hope').html('<button type="button" title="HOPE" class="btn btn-success btn-xs believe" onClick="addHope(\''+id+'\',\'hope\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/human-brain.png" /> HOPE <span class="badge">'+likes_total1+' </span></button> ');
								$('#'+id+' .btn-love').html('<button type="button" title="love" class="btn btn-success btn-xs believe" onClick="addLove(\''+id+'\',\'love\',\''+subtract_totalCnt_encryp+'\')"  ><img src="img/favorite-heart-button.png" /> LOVE/LIKE <span class="badge">'+likes_total2+' </span></button> ');
								
							}else{
								$('#'+id+' .btn-believe button').addClass('disabled');
								$('#'+id+' .btn-hope button').addClass('disabled');
								$('#'+id+' .btn-love button').addClass('disabled');	
								sweetAlert("No more counts");
							}
							$('#'+id+' .display_totalCnt').html('<span style="margin-right:30px">Behoals: '+display_totalCnt+' </span> Remaining Votes: '+subtract_totalCnt);
						// alert(idS);
						}
						 
						 
					}
				});
			}else{	
				swal("No more counts", "You can only vote 3 times", "warning");
			}
			
		}else{
			swal("No more counts", "You can only vote 3 times", "warning");
		}
	//}else{
	//	sweetAlert("Oops...", "Something went wrong!", "error");
	//}
}



/********** END Vote **********/
