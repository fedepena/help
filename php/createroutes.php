<?php
function get_videos($filename) {
  $data = file_get_contents($filename);
  $search = array("var data = ", ";");
  $replace = array("");
  $data = str_replace($search, $replace, $data);
  $data = json_decode($data, true);
  $videos = $data['videos'];
  $videoData = array();

  foreach($videos as $video){
    unset($video['icon']);
    unset($video['tags']);
    $videoData[] = $video;
  }

  return $videoData;
}
$videos1 = array();
$videos2 = array();
$videos1 = get_videos("../js/videos-en.js");
$videos2 = get_videos("../js/videos-es.js");
$videos = array_merge($videos1, $videos2);

function set_array_json($array) {
  $file = 'routes.json';
  $setFile = file_put_contents($file, json_encode($array));
}

set_array_json($videos);

?>