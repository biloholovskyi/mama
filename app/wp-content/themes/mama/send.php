<?php
session_start();
require($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$add = $_POST['user_add'];
$time = $_POST['user_time'];

$token = '1366005120:AAGUQl3skPNTAzBfUNKql-HM2kcx0djmTlA';
$chat_id = '-461192802';
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $tel,
  'Аддресс: ' => $add,
  'Время: ' => $time
);

foreach ($arr as $key => $value) { 
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$multiple_to_recipients = array(
  'Duchkevuch90@gmail.com'
);

wp_mail($multiple_to_recipients, "Новая заявка", "Имя: ".$name." | Номер: ".$tel." | Аддресс: ".$add." | Время: ".$time); 

$send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
