<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>BeHoal Best Life</title>

    <link rel="stylesheet" href="<?= base_url('assets/'); ?>css/bootstrap.min.css"/>
</head>
<body>
    <?php $this->load->view('partials/header'); ?>
    <div class="container-fluid" id="main">
        <?= $view ?>
    </div>
</body>
</html>