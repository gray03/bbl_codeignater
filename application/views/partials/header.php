<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
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

      <?php if ($this->session->userdata('state') === TRUE): ?>
        <li><a href="<?= site_url('landing'); ?>">Logout</a></li>
      <?php endif; ?>
    </ul>
  </div><!-- /.container-fluid -->
</nav>