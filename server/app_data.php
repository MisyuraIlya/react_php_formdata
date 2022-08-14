<?php 
$method = $_SERVER['REQUEST_METHOD'];
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *', true);

if($method == "POST"){
    $orderId = $_POST['order'];
    $isUploaded = null;
    foreach ($_FILES as $key => $value) {
        $file_name = $_FILES[$key]['name'];
        $file_tmp = $_FILES[$key]['tmp_name'];
        $file_size = $_FILES[$key]['size'];
        $upload_folder = 'uploads/';
        $moveFile = move_uploaded_file($file_tmp, $upload_folder.$orderId.'-'.$file_name);
        if($moveFile){
            $isUploaded = true;
        } 
    }

    


}

?>