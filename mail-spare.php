<?php
	$name  = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$errors;

	if (empty($name)) {
		$errors = "Будь ласка, введіть Ваше ім'я";
	} else {
		$userName = $name;
	}

	if (empty($phone)) {
		$errors = "Будь ласка, введіть Ваш номер телефону";
	} else {
		$userPhone = $phone;
	}

	$to = "info@hrupp.com"; 
	$mailBody = "Вам пришла заявку з сайту Hrupp\n"; 
	$mailBody .= "Ім'я користувача: " . $userName . "\n";
	$mailBody .= "Телефон користувача: " . $userPhone . "\n";

	if (mail($to, 'Вам пришла заявку з сайту Hrupp', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>