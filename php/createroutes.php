<?php
    
//leemos la data
$data_en = file_get_contents("../js/videos-en.js", null, null, 10);
$data_es = file_get_contents("../js/videos-es.js", null, null, 10);

////creamos el JSON
$myJSON_en = json_encode($data_en);
$myJSON_es = json_encode($data_es);
$file_en = 'routes_en.json';
$file_es = 'routes_es.json';
file_put_contents($file_en, $myJSON_en);
file_put_contents($file_es, $myJSON_es);

?>