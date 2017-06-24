<?php
    
//leemos la data
$data_en = file_get_contents("../js/videos-en.js", null, null, 560, 3250 );
$data_es = file_get_contents("../js/videos-es.js", null, null, 620, 4386);

////creamos el JSON
$myJSONenco = json_encode($data_es.",".$data_en);
$myJSONdeco = json_decode($myJSONenco);

$file = 'routes.json';
file_put_contents($file, $myJSONdeco);

?>