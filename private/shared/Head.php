<?php

    if(!isset($page_title)) {
        $page_title = '3B Baseball';
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <link rel="stylesheet" href="<?php echo url_for('/dev/css/RESET.css'); ?>">
    <link rel="stylesheet" href="<?php echo url_for('/dev/css/normalize.css'); ?>">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="<?php echo url_for('/dev/css/style.css'); ?>">
    <script src="<?php echo url_for('/dev/js/jquery.js'); ?>" defer></script>
    <script src="<?php echo url_for('/dev/js/app.js'); ?>" defer></script>


</head>
