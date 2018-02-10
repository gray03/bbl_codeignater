 <?php
include('../session.php');
include('../global.php');
include_once '../include/conn.php';
require '../func/funcvo.inc.php';			
$db_handle = new DBController();
$query ="SELECT * FROM survey_tbl WHERE del_status!='Y' ORDER BY survey_id DESC";
$result = $db_handle->runQuery($query);

if(!empty($result)) {
	$user_id = $login_session;
	foreach ($result as $links) {
	$uid=$links['user_id'];
	$survey_id=$links['survey_id'];

					
	?>
	
			
			
		<!--</a>-->
		
		
		<div class="col-lg-4">
			<div class="body_survey_con survey_thumnail " >
				<h6><?php echo $links["survey_subject"]; ?></h6>
				<small><?php echo $links["survey_specific"]; ?></small>
				<hr>
				<!--<img src='images/08-06-2016-1465359641.jpg' alt='subject image' width='100%' height='auto' style='margin:auto' />-->
				<div class='' style='width:100%;height:150px;border:1px solid red'>				</div>
				<p class='survey_con_details survey_details_ellip'><?php echo $links["survey_content"]; ?></p>
				
				<!--<div class='col-lg-12'>
					<div class='survey_profile_pic' style='background-image: url(images/user_silhouette.png);background-size: 100% 100%;'> </div>
				</div>-->
				
				<div class='col-lg-12' id="survey-<?php //echo $links["survey_id"]; ?>" >
				
					<div class="btn-believe">
						<button type="button" title="<?php //echo ucwords($str_status2); ?>/LIKE" class="love btn btn-xs btn-success" onClick="addLove(<?php //echo $links["survey_id"]; ?>,'<?php //echo $str_status2; ?>',<?php //echo $count_total; ?>,<?php //echo $count_rank; ?>,'<?php //echo $default_date ?>')"  >HOPE <span class="badge">7</span></button>
					</div>
					<div class="btn-hope">
						<button type="button" title="<?php //echo ucwords($str_status); ?>/LIKE" class="love btn btn-xs btn-success" onClick="addLove(<?php //echo $links["survey_id"]; ?>,'<?php //echo $str_status; ?>',<?php //echo $count_total; ?>,<?php //echo $count_rank; ?>,'<?php //echo $default_date ?>')"  >HOPE <span class="badge">7</span></button>
					</div>
					<div class="btn-love">
						<button type="button" title="<?php echo ucwords($str_status3); ?>/LIKE" class="love btn btn-xs btn-success" onClick="addLove(<?php //echo $links["survey_id"]; ?>,'<?php //echo $str_status3; ?>',<?php //echo $count_total; ?>,<?php //echo $count_rank; ?>,'<?php //echo $default_date ?>')"  >LOVE/LIKE <span class="badge">7</span></button>
					</div>
				<br>
				<hr>
				</div>
				
			
				<div class='col-lg-2'>
					<div class='survey_profile_pic' style='background-image: url(images/user_silhouette.png);background-size: 100% 100%;float:none'> </div>
				</div>
				<div class='col-lg-10'>
					<p>NAME</p>
				</div>
			</div>
		</div>
	
	
	<?php		
	}
}
?>
