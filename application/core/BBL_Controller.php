<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// Core controller of the app.
// Store session, user data, etc. here.

class BBL_Controller extends CI_Controller {
    public $appData = array();
    
    public function __construct()
    {
        parent::__construct();
    }
}