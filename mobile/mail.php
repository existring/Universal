<?php
$recepient = "alex.me@live.ru";
$sitename = "Стоматология Universal";

if ($_GET["name"]) {
$name = trim($_GET["name"]);
$contact = trim($_GET["contact"]);
$address = trim($_GET["address"]);

$pagetitle = "\"$sitename\"";
$message = "Имя: $name \nКонтакт: $contact \nАдрес: $address";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}