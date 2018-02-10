$(document).ready(function(){

		/* Display comment */
	
	var timelineId=$("#timelineId").val();
	function showTimeline(){
	  $.ajax({
		type:"post",
		url:"ajax/ajax_timeline.php",
		data:"timelineId="+timelineId+"&action=showTimeline",
		success:function(data){
			 $("#timeline_con").html(data);
			 //$('#postComment').attr('disabled',true);
		}
	  });
	};
	showTimeline();

});
	
