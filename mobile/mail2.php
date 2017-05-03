<?php
$recepient = "alex.me@live.ru";
$sitename = "Стоматология Universal";

if ($_GET["name"]) {
$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);


$pagetitle = "\"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \n";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}