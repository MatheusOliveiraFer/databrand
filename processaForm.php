<?php

$para="francisco@databrand.com.br";
$assunto="Contato pelo Site";
$nome=$_REQUEST['contactName'];
$email=$_REQUEST['contactEmail'];
$assunto=$_REQUEST['contactSubject'];
$mensagem=$_REQUEST['contactMessage'];

     $corpo = "<strong> Mensagem de Contato</strong><br></br>";
     $corpo .= "<strong>Nome:</strong> $contactName";
     $corpo .= "<br><strong>Email:</strong> $contactEmail";
     $corpo .= "<br><strong>Assunto:</strong> $contactSubject";
     $corpo .= "<br><strong>Mensagem:</strong> $contactMessage";

	 $header = "Content-Type: text/html; charset=utf-8\n";
	 $header.="From:$contactEmail Reply-to: $contactEmail";
	 
	 @mail ($para,$assunto,$corpo,$header);
	 
?>