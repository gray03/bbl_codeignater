/* vote.js */
$(document).ready(function() {

function addVote_believe(id,vote_rank) {
	$.ajax({
		url: "func/add_voteBelieve.php",
		data:'id='+id+'&vote_rank='+vote_rank,
		type: "POST",
		beforeSend: function(){
			$('#links-'+id+' .btn-votes').html("<img src='img/LoaderIcon.gif' />");
		},
		success: function(vote_rank_status){
			alert('Thanks For Vote');
		}
	});
}
function addVote_hoped(id,vote_rank) {
	$.ajax({
		url: "func/add_voteHope.php",
		data:'id='+id+'&vote_rank='+vote_rank,
		type: "POST",
		beforeSend: function(){
			$('#links-'+id+' .btn-votes').html("<img src='img/LoaderIcon.gif' />");
		},
		success: function(vote_rank_status){
			alert('Thanks For Vote');
		}
	});
}
function addVote_love(id,vote_rank) {
	$.ajax({
		url: "func/add_voteLove.php",
		data:'id='+id+'&vote_rank='+vote_rank,
		type: "POST",
		beforeSend: function(){
			$('#links-'+id+' .btn-votes').html("<img src='img/LoaderIcon.gif' />");
		},
		success: function(vote_rank_status){
			alert('Thanks For Vote');
		}
	});
}
});
