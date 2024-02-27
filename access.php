<?php

// Set the target URL for the POST request
$targetUrl = "https://creator.zoho.com/api/apps/ww/work_orders";

// Set the data to be sent in the POST request
$data = array(
    "First_Name" => "John",
    "Last_Name" => "Doe",
    "Email" => "johndoe@example.com",
    "Phone" => "123-456-7890"
);

// Convert the data array to JSON format
$jsonData = json_encode($data);

// Set the HTTP headers for the POST request
$headers = array(
    "Content-Type: application/json",
    "Authorization: Zoho-oauthtoken YOUR_OAUTH_TOKEN"
);

// Create a cURL handle
$curl = curl_init();

// Set the cURL options
curl_setopt_array($curl, array(
    CURLOPT_URL => $targetUrl,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $jsonData,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_RETURNTRANSFER => true
));

// Execute the cURL request
$response = curl_exec($curl);

// Close the cURL handle
curl_close($curl);

// Decode the JSON response
$responseData = json_decode($response, true);

// Check the response status
if ($responseData["success"] === true) {
    echo "Data sent successfully.";
} else {
    echo "Error sending data: " . $responseData["message"];
}

?>
