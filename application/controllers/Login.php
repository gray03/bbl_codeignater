<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends BBL_Controller {

    public function __construct()
    {
        parent::__construct();
    }

	public function index()
	{
        $sess_data = array(
            'state' => TRUE
        );
        $this->session->set_userdata($sess_data);
        redirect('/main');
    }
}
