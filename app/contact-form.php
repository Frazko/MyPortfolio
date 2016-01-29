<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->IsHTML(true);
    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('fmurillo@gmail.com'); //recipient 
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = '<html><body><p>'. $_POST['inputName'] . "</p>\r\n\r\n <p>" . stripslashes($_POST['inputMessage'] .'</body></html>');

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        //echo json_encode($data);
        print_r(json_encode($data));
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    //echo json_encode($data);
    print_r(json_encode($data));

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    //echo json_encode($data);
    print_r(json_encode($data));

}