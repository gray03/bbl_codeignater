<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<div class='wrapperCon' >
	<div class="col-sm-5 col-md-6 col-lg-6" style='height:inherit;padding:0'>
		<div class='headerTagline'>
			<div  id='title'>
			<h3>"<span class='greenCol'>Be</span>lieve, <span class='greenCol'>ho</span>pe <span class='greenCol'>a</span>nd <span class='greenCol'>l</span>ove <br> for the <span class='greenCol'>Best</span> of <span class='greenCol'>Life</span>."</h3>
			<h4 style='color:#000'>Follow your trust, truth  and taste.</h4>
			<p style='    color: #02c3ff;
font-size: 16px;
font-weight: 600;'>Post your best, special or unique entry. Enjoy viewing, endorsing, challenging and voting.</p>
			</div>
		</div>
	
	</div>
	
	
		<div class="col-sm-9 col-md-6 col-lg-6 mobModal" style='display:none' >
			<div class='left_conA' style='    margin-bottom: 40px;'>
					
				  <ul class="index_nav nav nav-pills nav-justified">
					<li class="active"><a data-toggle="pill" href="#login">SIGN IN</a></li>
					<li><a data-toggle="pill" href="#register">SIGN UP</a></li>
				  </ul>
				  
				  
				  
				<div class="tab-content modalLoginContent" style='padding:15px 25px;overflow:auto'>
						<div id="login" class="tab-pane fade in active">
							<!--<h3 class='modal-title'>Be a part...</h3>-->
							<p class='modal-title' style='font-size:15px'>Post your best, special and unique entry. Cheer, behoal and share.</p><br><br>
							<h4 style='    margin: auto;'>Login User</h4>
							
							<form method="post" id='formLogin'>
								<div class='col-lg-12' style='margin-top:10px'>
									<div class="form-group">
										<input type="text" id='email' name="email" placeholder="Your Email" autofocus="autofocus" class="form-control"    />
									</div>
								</div>
								<div class='col-lg-12'>
									<div class="form-group" style='position:relative'>
										<input  class="form-control login-field login-field-password" id="pass_inputToogle" name="pass" type="password" placeholder="Your Password"   />
										<div id='winkShow' class="winkPass"></div>
									</div>
									<a href='' data-toggle="modal" data-target="#modalPassRec" class='modalPassRec' style='color:#ff3f3f'>Forgot your account??</a><br>
									<a href='' data-toggle="modal" data-target="#modalResEmailVer" class='modalResEmailVer' style='color:#ff3f3f'>Resend email verification??</a><br><br>
								</div>
								<center><button type="submit" class="btn btn-primaryButton2" name="btn-login" id="btn-submit" style='width: 93%; font-weight: 700; font-size: 16px;'>
									<span class="fa fa-pencil-square-o" aria-hidden="true"></span> Login Here
								</button> </center>
								<div class="FBCon">
								  <h5 style="text-align: center;" class=''>Or Try To</h5>
								   <a href=""><img class="img-responsive" style='width: 250px;    margin: auto;' src="<?php echo base_url('assets/'); ?>img/connect-with-facebook.png" alt="connect with facebook"></a>
								</div>
							</form>
							
						</div>
						<div id="register" class="tab-pane fade" style=' '>
							<h3 class='modal-title'>Register for Free</h3><br>
							<form role="form" id="formReg"  style='    margin-top: 10px;' enctype="multipart/form-data">
								<div id="error">
								<!-- error will be showen here ! -->
								</div>
								<div id="successMsg" style='    margin-bottom: 10px;'>
								<!-- success Msg will be showen here ! -->
								</div>	
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<input name="fname" class="form-control" type="text" id="fname" autofocus="autofocus" placeholder="First Name" value=""   />
											
										</div>
									</div>
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<input name="sname" type="text" id="sname" class="form-control" autofocus="autofocus" placeholder="Last Name" value=""  />
										</div>
									</div>
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<select name="selGender" id="selGender"  autofocus="autofocus" class="form-control" value="">
												<option value="" selected="selected">Gender</option>
												<option value="F">Female</option>
												<option value="M">Male</option> 
											</select>
										</div>
									</div>
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<input type="email" name="email" id="email" class="form-control"  autofocus="autofocus" placeholder='Email Address' value="" />
										</div>
									</div>
									<!--<div class='col-md-12 col-lg-12' >
										<div class="form-group">
											<input type="text" name="uname" id="uname" class="form-control"  autofocus="autofocus" placeholder='Username' value="<?php echo $_POST['uname']; ?>" />
										</div>
									</div>			-->
									
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<input name="pass" type="password"  id="pass" class="form-control" autofocus="autofocus" value="" placeholder='Password' required />
										</div>
									</div>
									<div class='col-sm-6 col-md-6 col-lg-6 inputSec' style='  '>
										<div class="form-group">
											<input name="repass" type="password"  id="repass" class="form-control" autofocus="autofocus" value="" placeholder='Retype Password' required />
										</div>
									</div>
									<!--<div class='col-md-6 col-lg-6' >
										<div class="form-group">
											<input  name="connum" type="text" autofocus="autofocus" class="form-control"  value="<?php //echo $_POST['connum']; ?>"  maxlength="11" placeholder='Contact #' required />
										</div>
									</div>-->
									
									<div class='col-sm-4 col-md-4 col-lg-4 bdaySec'    >
										<div class="form-group ">
											<label style='float:left;margin-right:15px;    color: #afafaf;'>Birthday</label>
											<select name="sel_month" id="sel_month" autofocus="autofocus"  class="form-control" value=""  class="sel_month" style=''>
											  <option value="" selected="selected">MM</option>
											  <option value="Jan">Jan</option>
											  <option value="Feb">Feb</option>
											  <option value="Mar">Mar</option>
											  <option value="Apr">Apr</option>
											  <option value="May">May</option>
											  <option value="Jun">Jun</option>
											  <option value="Jul">Jul</option>
											  <option value="Aug">Aug</option>
											  <option value="Sep">Sep</option>
											  <option value="Oct">Oct</option>
											  <option value="Nov">Nov</option>
											  <option value="Dec">Dec</option>
											</select>
										</div>
									</div>
									<div class='col-sm-4 col-md-4 col-lg-4 bdaySec'  >
										<div class="form-group ">
											<label style='float:left;margin-right:15px'>&nbsp;</label>
											<select name="day" id="select2 sel_day" autofocus="autofocus"   class="form-control" value="" required class='sel_day' >
												<option value="" selected="selected">DD</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="13">13</option>
												<option value="14">14</option>
												<option value="15">15</option>
												<option value="16">16</option>
												<option value="17">17</option>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
												<option value="32">32</option>
											</select> 
										</div>
									</div>
									<div class='col-sm-4 col-md-4 col-lg-4 bdaySec'  >
										<div class="form-group  ">
											<label style='float:left;margin-right:15px'>&nbsp;</label>
											<select name="year" id="txtyear" autofocus="autofocus"   class="form-control" value="" required >
												<option value="" selected="selected">YY</option>
												<?php
												$deducted = date('Y') - 6;
												for($x=$deducted; $x>=($deducted-90);$x--){ ?>
												<option> <?php echo $x; ?></option>
												<?php }
											?>
											</select> 
										</div>
									</div>
									<div class='col-sm-12 col-md-12 col-lg-12 inputCaptcha ' style='    margin-top: 40px;'  >
										<div class="g-recaptcha " data-sitekey="6LfYUDUUAAAAACaZ7NdoK06QA5DvrsCyupjCjbqX"></div>
										<label id="recaptcha_error" class="" style="display:none;color: rgb(255, 33, 33);    font-size: 11px;">Please check the recaptcha.</label>
									</div>
									<div class='col-sm-12 col-md-12 col-lg-12 inputTerms' style='     overflow: auto;   margin-top: 15px;'>
										<div class="form-group  ">
										  <p style='font-weight:600;    font-size: 11px;'><input type="checkbox" name='policy' id='policy' value=""> I agree to the Terms and Condition</p>
										</div>
									</div>
									
									<center><button type="submit" class="btn btn-primaryButton2 btn-register" name="btn-save" id="btn-submit"  style='width: 93%; font-weight: 700; font-size: 16px;margin-top:20px'>
										<span class="fa fa-share-square-o" aria-hidden="true" ></span> Submit
									</button>  </center>
									
									<div class="FBCon">
									  <h5 style="text-align: center;" class=''>Or Try To</h5>
									  <a href=""><img class="img-responsive" style='width: 250px;    margin: auto;' src="<?php echo base_url('assets/'); ?>img/connect-with-facebook.png" alt="connect with facebook"></a>
									</div>
							</form>
						
						</div>
				</div>
				  
			</div>
		
		</div>
	
	
	
	
</div>





<div class="footer">

	<div class="col-sm-6 col-md-6 col-lg-6">
		<small style='color: #FFF;font-weight: 600; margin-right: 35px;'>Behoal BestLife &copy; 2017</small></span>
		<span class="" style="">
			<span id="siteseal" style=' '><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=EnUfyvyE4SLuhTJjdtSAjwcGkNAfkydDJIoHOac0oNtlImD8kZWcoTfG4vd5"></script></span>
		</span>
	</div>
	<div class="col-sm-6 col-md-6 col-lg-6" style='color:#FFF;float:right'>
		<ul style='float: inherit;    margin-bottom: 0px;'>
			<li>PRIVACY</li><li>|</li>
			<li>TERMS AND CONDITIONS</li><li>|</li>
			<li>ABOUT US</li><li>|</li>
			<li>DEVELOPER</li><li>|</li>
		</ul>
		
	</div>

</div>
