<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Landing extends BBL_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		// Check if has USER 
		/**
		 * if has USER / session
		 * redirect to Main
		 * 
		 * 
		 */
		$sess_data = array(
            'state' => FALSE
        );

        $this->session->set_userdata($sess_data);
		
		$this->appData['assets']['js'] = $this->load->view('assets/js/test', "", TRUE);
	}
}
