<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee Attendance</title>

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="css.css">
</head>
<body class="bg-light">

<div class="container py-4">
    <div class="card p-3 mb-4 shadow-sm">
        <div class="row g-3" id="subjectFilter">
           
        </div>
    </div>

    <div class="card p-3 shadow-sm">
        <div class="table-responsive" id="attndnc_logs_card">
           
        </div>
    </div>
</div>

</body>

<script type="module" src="view/component-loader.js?t=<?php echo time(); ?>"></script>
</html>
