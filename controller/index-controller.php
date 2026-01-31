<?php
require("../config/conn-config.php");

$type = $_POST['type'];

if($type == "FETCH_ATTENDANCE_LOGS"){

    $id = 64004;
    
    $qry = "SELECT
                `SchlClsLogHis_ID` AS id,
                DATE(log_hist.SchlClsLogHis_DATETIME) AS log_date,
                log_hist.SchlUserRF_ID,
                MIN(log_hist.SchlClsLogHis_DATETIME) AS first_login,
                MAX(log_hist.SchlClsLogHis_DATETIME) AS last_login
            FROM schoolclassloghistory AS log_hist
            WHERE `SchlEnrollAssColl_ID` = ?
            GROUP BY
                DATE(log_hist.SchlClsLogHis_DATETIME),
                log_hist.SchlUserRF_ID";

    $stmt = $dbPortal->prepare($qry);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $fetch = $result->fetch_all(MYSQLI_ASSOC);

    $stmt->close();
    $dbConn->close();
}
echo json_encode($fetch);
?>