<?php

function random_Str($lenght = 48){
    return bin2hex(random_bytes($lenght / 2));
}

$lenght = 20;
$random_Str = random_Str($lenght);
echo $random_Str;

sleep(7);

