<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>BeHoal Best Life</title>

    <link rel="stylesheet" href="<?= base_url('assets/'); ?>css/bootstrap.min.css"/>
	
	<link rel="stylesheet" href="<?= base_url('assets/'); ?>css/styles.css">
	<link rel="stylesheet" href="<?= base_url('assets/'); ?>css/styles_ver3.css">
	<link rel="stylesheet" href="<?= base_url('assets/'); ?>css/mob_styles.css">
	<link rel="stylesheet" href="<?= base_url('assets/'); ?>css/jQuery-plugin-progressbar.css">
	<link href="<?= base_url('assets/'); ?>css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?= base_url('assets/'); ?>css/masonry-docs.css" media="screen">
	
	<!-- SweetAlert -->
	<link rel="stylesheet" href="<?= base_url('assets/'); ?>dist/sweetalert.css">
	
	
	
	<link rel="icon" href="<?= base_url('assets/'); ?>img/behoal_logo.ico">
</head>
<body>
    <?php $this->load->view('partials/header'); ?>
    <div class="" id="wrapper" style='background-color:#ccc'>
        <?= $view ?>
    </div>
	
	<script src="<?= base_url('assets/'); ?>js/jquery-1.11.3.min.js" type="text/javascript"></script>

	<script src="<?= base_url('assets/'); ?>js/bootstrap/bootstrap.min.js" type="text/javascript"></script>
	
	<script src="<?= base_url('assets/'); ?>js/Carousel/jquery.carouFredSel-6.2.0-packed.js" type="text/javascript"></script>
	
	<script type="text/javascript" src="<?= base_url('assets/'); ?>lib/jquery-1.10.1.min.js"></script>
	<script type="text/javascript" src="<?= base_url('assets/'); ?>source/jquery.fancybox.js?v=2.1.5"></script>
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/'); ?>source/jquery.fancybox.css?v=2.1.5" media="screen" />
	
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/'); ?>source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" />
	<script type="text/javascript" src="<?= base_url('assets/'); ?>source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
	<script type="text/javascript" src="<?= base_url('assets/'); ?>source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>
	<script src="<?= base_url('assets/'); ?>js/fancybox.js"></script>
		
	<script src="<?= base_url('assets/'); ?>js/scripts.js" type="text/javascript"></script>
	<script src="<?= base_url('assets/'); ?>js/ajax_vote.js" type="text/javascript"></script>
	<script src="<?= base_url('assets/'); ?>js/global.js" type="text/javascript"></script>
	
	
	<!-- jquery timeago plugin -->
	<script type="text/javascript" src="<?= base_url('assets/'); ?>js/JqueryTimeago/jquery.livequery.js"></script>
	<script type="text/javascript" src="<?= base_url('assets/'); ?>js/JqueryTimeago/jquery.timeago.js"></script>
	
	<!-- SweetAlert -->
	<script src="<?= base_url('assets/'); ?>dist/sweetalert-dev.js"></script>
	
	<!--<script src="js/jquery-1.15.0.validate.min.js" type="text/javascript"></script>
	<script src="js/additional-methods-1.15.0.min.js" type="text/javascript"></script>-->
	
	<!-- Cool Carousel -->
	<script src="<?= base_url('assets/'); ?>js/Carousel/jquery.carouFredSel-6.0.4-packed.js" type="text/javascript"></script>
	
	
	<script src="<?= base_url('assets/'); ?>js/landing_js.js" type="text/javascript"></script>
	
	<??>
	
	
	
</body>


</html>