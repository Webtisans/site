<?php
$yourname = check_input($_POST['name'], "Enter your name");
$email    = check_input($_POST['email']);
$comments = check_input($_POST['message'], "Write your comments");

$recipient = "sales@webtisans.com";
$subject   = "A new potential client has filled in the form of the website.";
$message   = "Hi, a new person has filled the following information in the website: Name:"+$yourname+", Email: "+$email+", Message: "+$message;

?>

<?php
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }else{
      mail($recipient, $subject, $message);
      header('Location:thank-you.html');
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>