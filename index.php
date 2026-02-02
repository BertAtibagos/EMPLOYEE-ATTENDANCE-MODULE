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
        <div class="row g-3">
            <div class="col-md-4">
                <label class="form-label">Subject</label>
                <select class="form-select">
                    <option>Current Cut Off</option>
                    <option>Previous Cut Off</option>
                </select>
            </div>

            <!-- <div class="col-md-4">
                <label class="form-label">Start Date</label>
                <input type="date" id="startDate" class="form-control">
            </div>

            <div class="col-md-4">
                <label class="form-label">End Date</label>
                <input type="date" id="endDate" class="form-control">
            </div>

            <div class="d-flex align-items-end">
                <button id="filterBtn" class="btn w-100 text-white filter-btn">
                    Filter
                </button>
            </div> -->
        </div>
    </div>

    <div class="card p-3 shadow-sm">
        <div class="table-responsive" id="attndnc_logs_card">
           
        </div>
    </div>
</div>

</body>

<script type="module" src="view/index-script.js?t=<?php echo time(); ?>"></script>
</html>
