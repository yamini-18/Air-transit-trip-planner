<?php 

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from users where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location: index.php");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

?>


<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Login Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: teal;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;}
            * {box-sizing: border-box;}
            input[type=text], input[type=password] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            display: inline-block;
            border: none;
            background: #f1f1f1;
        }

        .login-container {
            background-color: #fff;
            border: 1px solid #ccc;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            font-size: 15px;
            padding: 16px;
            height: 450px;
            width: 410px;
        }
         
        h1 {
            font-size: 28px;
            color: teal;
        }

        h2 {
            font-size: 24px;
            color: teal;
        }
        input {
            width: 100%;
            padding: 6px 0; /* Equal padding at the top and bottom, no padding on the left and right */
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }


        button {
            background-color: teal;
            color: #fff;
            border: none;
            padding: 8px 18px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            margin: 8px 0;
            opacity: 0.9;
        }
        .button {
            background-color: teal;
            color: #fff;
            border: none;
            padding: 8px 18px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            margin: 8px 0;
            opacity: 0.9;
        }

        .error {
            color: red;
            font-size: 14px;
            margin-top: 10px;
        }
        
        .cancelbtn {
            padding: 10px 20px;
            background-color: #f44336;
        }
        .cancelbtn, .signupbtn {
            float: left;
            width: 50%;
        }
        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            font-size: 15px;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: teal;
            padding-top: 50px;
            padding: 16px;
        }

        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid teal;
            font-size: 15px;
            width: 80%; /* Could be more or less, depending on screen size */
            padding: 16px;
            border-radius: 10px;
        }

        /* Style the horizontal ruler */
        hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
        }
        
        /* The Close Button (x) */
        .close {+
            position: absolute;
            right: 35px;
            top: 15px;
            font-size: 40px;
            font-weight: bold;
            color: #f1f1f1;
        }

        .close:hover,
        .close:focus {
            color: #f44336;
            cursor: pointer;
        }

        /* Clear floats */
        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }
        .error {
            color: red;
        }

        /* Change styles for cancel button and signup button on extra small screens */
        @media screen and (max-width: 300px) {
        .cancelbtn, .signupbtn {
            width: 100%;
        }
        }
    </style>
    </head>
    <body background="https://cdn.dribbble.com/users/2365629/screenshots/14944543/media/3102713027e3209223abd5b71a4bbc07.gif" >

        <div class="login-container">
            <header style="background-color: #e3e3e3; font-family: Arial, Helvetica, sans-serif;font-size: 30px ; border-radius: 4px; padding: 12px;">
                <h1> <b> Air Transit Trip Planner </b></h1>
            </header>
            <header  style=" font-family: Arial, Helvetica, sans-serif; font-size: 20px ; border-radius: 4px; padding: 12px;">
                <h2> <b>Login page</h2></b>
            </header>
            
            <form method="post">
            <!-- class="login-form" id="loginForm"  -->
                <input type="text" id="username"  placeholder="Email" name="user_name" required>
                <input type="password" id="password" placeholder="Password" name="password"  required>
                <span id="loginError" class="error"><?php if(isset($_GET['error'])) { echo $_GET['error']; } ?></span>
                <input id="button" class= "button" type="submit" value="Login">
                <!-- <a style="color: #f1f1f1;"> Login </a>  -->
            
            <div style="text-align:center">
                <p class="signup-link"> New user? Sign up here  </p>
            </div>
            <p id="error-message" class="error"></p>
            <button type="button"  > <a href="signup.php" style="color: #f1f1f1;"> Sign Up</a> </button>
        </div>
        </form>
        </div>

        <!-- <script>
            document.getElementById("loginForm").addEventListener("submit", function(event) {
              event.preventDefault();
              
              var email = document.getElementById("email").value;
              var password = document.getElementById("password").value;
              var loginError = document.getElementById("loginError");
              
              // Simulating a check against a hardcoded database
              var validCredentials = {
                "user@example.com": "password123",
                "anotheruser@example.com": "letmein"
              };
              
              if (email in validCredentials && validCredentials[email] === password) {
                // Redirect to main page upon successful login
                window.location.href = "Mainpage.html"; 
              } else {
                loginError.textContent = "Invalid email or password!";
              }
            });
        </script> -->

    </body>
</html>