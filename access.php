<?php
  // Process form submission
  if (isset($_POST['name']) && isset($_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Connect to the database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "my_database";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Insert data into the database
    $sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

    if ($conn->query($sql) === TRUE) {
      // Redirect to the success page
      header("Location: success.html");
    } else {
      // Display error message
      echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
    }

    // Close the database connection
    $conn->close();
  }
?>
