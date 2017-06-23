<?php
    
//leemos la data
$data_en = file_get_contents("../js/videos-en.js", null, null, 10);
$data_es = file_get_contents("../js/videos-es.js", null, null, 10);

////creamos el JSON
$myJSONenco_en = json_encode($data_en);
$myJSONdeco_en = json_decode($myJSONenco_en);

$myJSONenco_es = json_encode($data_es);
$myJSONdeco_es = json_decode($myJSONenco_es);

$file_en = 'routes_en.json';
$file_es = 'routes_es.json';
file_put_contents($file_en, $myJSONdeco_en);
file_put_contents($file_es, $myJSONdeco_es);

?>