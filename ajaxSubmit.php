<?php 



// $name = $_POST["name"];
// $email = $_POST["email"];
// $message = $_POST["message"];

// $header = "From:" . $email . "\r\n";
// $header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
// $header .= "Mim Version: 1.0" . "\r\n";
// $header .= "Content Type: text/plain";

// $comment = "This message had been sent by " . $name . "\r\n";
// $comment .= "Email is: " . $email . "\r\n";
// $comment .= "Message is: " . $message . "\r\n";

// $for = "aaustinwalker@gmail.com"
// $subject = "New email from your website";

// mail($for, $subject, utf8_decode($comment), $header);

// //SERVER RES
// $name = $_POST["name"];
// echo json_encode(array(
// 		"Message" => sprintf("Your message has been sent %s", $name);
// 	));

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .=  "Mime-Version: 1.0  \r\n";
$header .= "Content-Type: text/plain";
$comment .= "This message was sent by: " . $name . " \r\n";
$comment .= "His email is: " . $email . " \r\n";
$comment .= "The message is: ". $message ." \r\n";
$for = 'aaustinwalker@gmail.com';
$subject = 'You have a new email from your website!';
mail($for, $subject, utf8_decode($comment), $header);

// server response!
$name = $_POST['name'];
echo json_encode(array(
	'message' => sprintf('Your email has been received %s', $name),
));


 ?>