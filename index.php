<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Main page</title>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
      * {
        box-sizing: border-box;
      }
      header {
        background-color: DarkCyan;
        padding: 20px;
        text-align: center;
        font-size: 35px;
        color: white;
        height: 80px;
        width: 100%;
        }
      nav {
        font-size: 20px;
        height: 65px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
        width: 100%;
        }
      .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        }
      .header-and-nav{
        position: fixed;
        width: 100% ;
      }
      .sidebar {
        display: block;
        float: left;
        cursor: pointer;
        width: 250px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        list-style-type: none;
        font-size: 18px;
        margin: 0px 0px 0px 0px;
        padding: 0;
        background-color: #f1f1f1;
        position: fixed;
        overflow: auto;
      }
      label, input {
        margin: 8px 0;
      }
      /* Sidebar links */
      .sidebar a {
        display: block;
        padding: 9px;
        text-decoration: none;
        font-size: 19px;
      }
/* Links on mouse-over */
      .sidebar a:hover:not(.active) {
        color: black;
      }
      button {
              padding: 10px 20px;
              margin-right: 5px;
              margin: 5px;
              cursor: pointer;
              border: none;
              border-radius: 4px;
              background-color:  DarkCyan;
              color: #fff;
              font-size: 16px;
              }
      .box {
              height: 145px;
              margin-bottom: 20px;
              width: 100%;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      .sidebar-and-container {
        display: flex;
        float: right;
        width: 1000px;
      }
      .container {
              width: 1000px;
              padding: 10px;
              float: right;
              margin-right: 18px;
              margin-left: 6px;
              margin-bottom: 20px;
              height: auto;
              font-size: 18px;
              background-color: #fff;
              color: black;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              flex-direction: column;
              }
      .row::after {
                    content: "";
                    display: inline;
                    clear: both;
                    margin-bottom: 10px;
            }
      .col-50 {
                width: 48%;
                float: left;
                display: inline-flex;
                margin-top: 10px;
                margin-bottom: 10px;
                text-align: left;
                align-items: flex-start;
            }
      .col-20 {
                    float: inherit;
                    width: 45%;
                    padding: 0px 0px 0px 18px;
                    margin-top: 15px;
            }

      .col-80 {
                    float: right;
                    width: 55%;
                    margin-top: 6px;
                   
            }   
      input[type=text], [type=email],[type=number], [type=tel], [type=date], select , textarea {
                    
                    padding: 10px 10px 10px 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    resize: inline;
                    width: 95%;
                    font-family: Arial;

              }
      label {
                    padding: 12px 12px 12px 0;
                    display: inline;
            }
      button:hover {
              background-color:  DarkCyan;
              }

      .error-message {
              color: red;
              margin-top: 10px;
              }
      
      article {
                    padding: 20px;
                    background-color: #f1f1f1;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    height: 100px; /* only for demonstration, should be removed */
                  }
                  
                  /* Clear floats after the columns */
      footer {
                  background-color: #777;
                  padding: 10px;
                  font-size: 18px;
                  text-align: center;
                  color: white;
                }



/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
    .content {
      margin-left: 250px;
      padding: 1px 16px;
      height: 1000px;
    }

    .card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  text-align: left;
}

#notification {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}

    </style>
  </head>
  <body>
    <div class="header-and-nav">
      <header>
        <b>Air Transit Trip Planner</b>
        <!-- Include any navigation elements here -->
      </header>

      <nav class="navbar navbar-expand-lg navbar-default bg-light border-bottom">
        <ul class="nav navbar-nav">
          <li class="active"><a href="Mainpage.html"> Home </a></li>
          <li><a href="tourist_places.html"> Services </a></li>
          <li><a href="about_us.html.html"> About us </a></li>
          <li><a href="contact_us.html.html"> Contact us </a></li>
        </ul>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <button  type="button" style="background-color: darkcyan; color: white; position: inherit;">
			  <a href="logout.php" style="color: #f1f1f1;">Logout</a>
                
              </button>
            </li>
            <li class="nav-item">
              <a href="profile.html"><img src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png" 
                  alt="Avatar" class="avatar"></a>            
            </li>
          </ul>
        </div>
      </nav>
          
      <div class="sidebar " id="sidebar-wrapper">
        <div class="list-group ">

              <a href="Hotel_booking.html"class="list-group-item list-group-item-action list-group-item-secondary ">Hotel Booking</a>
              <a href="Flights.html" class="list-group-item list-group-item-action list-group-item-light ">Flights</a>
              <a href="Car_rental.html" class="list-group-item list-group-item-action list-group-item-light">Car Rental</a>
              <a href="Bus_booking.html" class="list-group-item list-group-item-action ">Bus Booking</a>
              <a href="Stays.html" class="list-group-item list-group-item-action ">Stays</a>
              <a href="Packages.html" class="list-group-item list-group-item-action  ">Packages</a>
              <a href="Cruises" class="list-group-item list-group-item-action list-group-item-light">Cruises</a>
              <a href="Queries.html" class="list-group-item list-group-item-action list-group-item-light">Queries </a>
              <a href="Complaints.html" class="list-group-item list-group-item-action ">Complaints </a>
        </div>
      </div> 
    </div>

    <div class="box"></div>

    <!-- Other content related to the main page -->
    <main>
      <div class="sidebar-and-container">
        <div class="container" id="Hotels" >
          <form id="hotelForm">
          <h2 style="color: darkcyan; width: 97%;border-radius: 7px; padding: 10px;text-align:center ; background-color: #e3e3e3 ;font-size: 30px;">
            <b> Hotel Booking</b></h2>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="hotelName">Hotel Name:</label>
                </div>
                <div class="col-80">
                  <input type="text" id="hotelName" required> 
                </div>
              </div>
              <div class="col-50">
                <div class="col-20">
                  <label for="country">Select Country:</label>
                </div>
                <div class="col-80">
                  <select id="country" required>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="state">Enter State:</label>
                </div>
                <div class="col-80">
                  <input type="text" id="state" required>
                </div>
              </div>
              <div class="col-50">
                <div class="col-20">
                  <label for="city">Enter City Name:</label>
                </div>
                <div class="col-80">
                  <input type="text" id="city" required>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="fromDate">From Date:</label>
                </div>
                <div class="col-80">
                  <input type="date" id="fromDate" required>
                </div>
              </div>
              <div class="col-50">
                <div class="col-20">
                  <label for="toDate">To Date:</label>
                </div>
                <div class="col-80">
                  <input type="date" id="toDate" required>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="fullName">Enter Full Name:</label>
                </div>
                <div class="col-80">
                  <input type="text" id="fullName" required>
                </div>
              </div> 
              <div class="col-50">
                <div class="col-20">
                  <label for="rooms">Number of Rooms:</label>       
                </div>
                <div class="col-80">
                  <input type="number" id="rooms" min="1" required>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="adults">Number of Adults:</label>
                </div>
                <div class="col-80">
                  <input type="number" id="adults" min="1" required>
                </div>
              </div>
              <div class="col-50">
                <div class="col-20">
                  <label for="children">Number of Children:</label>
                </div>
                <div class="col-80">
                  <input type="number" id="children" min="0" required>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  <label for="phone">Phone Number:</label>
                </div>
                <div class="col-80">
                  <input type="tel" id="phone" required>
                </div>
              </div>
              <div class="col-50">
                <div class="col-20">
                  <label for="email">Email:</label>
                </div>
                <div class="col-80">
                  <input type="email" id="email" required>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-50">
                <div class="col-20">
                  
                </div>
                <div class="col-80">
                  
                </div>
              </div>
            </div>
            <button type="submit">Book Hotel Room</button>
          </form>
          <div id="notification" style="display: none;">You will receive an email once the reservation is made!</div>
        </div>
      </div>
        <div id="cardsContainer" class="container" >
          <div class="card">
            <h3>Easy to use trip planning tools</h3>
            <p><img src="https://icon-library.com/images/booking-icon-png/booking-icon-png-19.jpg" alt="Smiley face image" 
              style="float:left; width:42px; height:42px;">
              With useful tools like trip planner, flight tracker and bag measure, This is more than just a flight search site - it is your complete travel partner.</p>
          </div>
          <div class="card">
            <h3>Book with flexibility</h3>
            <p><img src="https://icon-library.com/images/booking-icon-png/booking-icon-png-12.jpg" alt="Smiley face image" 
              style="float:left; width:42px; height:42px;">
              Easily find and filter flights that suit your different requirements, like no cancellation fees.</p>
          </div>
          <div class="card">
            <h3>Search for the best flight deals</h3>
            <p><img src="https://icon-library.com/images/booking-icon-png/booking-icon-png-20.jpg" alt="Smiley face image" 
              style="float:left; width: 60px; height:60px; ">
              Search for the best flight deals. No need to search multiple websites, We compare all of them in one place just for you.</p>
          </div>
      </div> 
      </div>
  </body>

<script src="Hotel_booking.js"></script>
</html>
