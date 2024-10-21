<?php
    header('Content-Type: application/json');

    $customer = [
        ['id' => 1, 'name' => 'John Doe'],
        ['id' => 2, 'name' => 'Jane Smith'],
     // Add more customers as needed
    ];

    echo json_encode(['records' => $customer]);
?>