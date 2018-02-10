<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div class="container"> 
    <div class="row">
        <div class="col-lg-6">
            HOME PAGE
        </div>
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Sign in</h3>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Password">
                        </div>
                        <br />
                        <a href="<?= site_url('/login') ?>" type="submit" class="btn btn-default pull-right">Log in</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>