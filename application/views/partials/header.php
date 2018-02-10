<?php
defined('BASEPATH') OR exit('No direct script access allowed');


?>



<div class='top_header_navi top_header_navi_index' >
	
	<ul class='index_menu'>
		<li class='top_header_navi_login'><img src='<?= base_url('assets/'); ?>img/behoal logo.jpg' height='44px' width='auto' style='margin-top:-10px' /><img src='<?= base_url('assets/'); ?>img/behoal title.jpg' height='25px' width='auto' style='margin:5px 5px' /></li>
		<li class='top_header_navi_reg'>
			<button type="button" class='btn-sm cus_btn modalLogin'  data-toggle="modal" data-target="#modalLogin"   ><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN </button>
			<button type="button" class='btn-sm cus_btn modalRegister' data-toggle='modal' data-target='#modalRegister' ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> REGISTER </button>
		</li>
	</ul>
</div>	




<!--
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">BBL</a>
    </div>

    <ul class="nav navbar-nav navbar-right">

      <?php //if ($this->session->userdata('state') === TRUE): ?>
        <li><a href="<?//= site_url('landing'); ?>">Logout</a></li>
      <?php //endif; ?>
    </ul>
  </div>
</nav>-->