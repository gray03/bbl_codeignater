<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| Hooks
| -------------------------------------------------------------------------
| This file lets you define "hooks" to extend CI without hacking the core
| files.  Please see the user guide for info:
|
|	https://codeigniter.com/user_guide/general/hooks.html
|
*/

$hook['post_controller'] = function(){
    $CI =& get_instance();

    $currentController = $CI->router->class;
    $currentMethod = $CI->router->method;

    $viewData = $CI->appData;

    $viewToRender = $CI->load->view($currentController . "/" . $currentMethod, $viewData, TRUE);

    $data = array('view' => $viewToRender);
    $CI->load->view("main", $data);
};