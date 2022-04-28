<?php
	$name    		= filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone     	= filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$errors;

	$recaptcha = $_POST['g-recaptcha-response'];
 
	if(!empty($recaptcha)) {
    //Получаем HTTP от recaptcha
    $recaptcha = $_REQUEST['g-recaptcha-response'];
    //Сюда пишем СЕКРЕТНЫЙ КЛЮЧ, который нам присвоил гугл
    $secret = '6Ld7CKsfAAAAABlT4SdfUbiOrdLqLiKJP8NMTr-8';
    //Формируем utl адрес для запроса на сервер гугла
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret ."&response=".$recaptcha."&remoteip=".					$_SERVER['REMOTE_ADDR'];
 
    //Инициализация и настройка запроса
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_TIMEOUT, 10);
    curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.16) Gecko/20110319 			Firefox/3.6.16");
    //Выполняем запрос и получается ответ от сервера гугл
    $curlData = curl_exec($curl);
	 
    curl_close($curl); 
    //Ответ приходит в виде json строки, декодируем ее
    $curlData = json_decode($curlData, true);
 
    //Смотрим на результат
    if($curlData['success']) {
			if (empty($name)) {
				$errors = "Будьте добры, введите сумму кредита";
			} else {
				$userName = $name;
			}

			if (empty($phone)) {
				$errors = "Будьте добры, введите номер телефона компании";
			} else {
				$userPhone = $phone;
			}

			$to = "info@hrupp.com";
			$mailBody .= "Ім'я користувача: " . $userName . "\n";
			$mailBody .= "Телефон користувача: " . $userPhone . "\n";
			
			if (mail($to, 'Вам пришла заявка з сайту Hrupp', $mailBody)) {
				$output = "ok";
				die($output);
			}	$output = $errors;
				die($output);
			}
    } else {
        //Капча не пройдена, сообщаем пользователю, все закрываем стираем и так далее
    }
	}
	else {
		$output = $errors;
		die($output);
	}

?>