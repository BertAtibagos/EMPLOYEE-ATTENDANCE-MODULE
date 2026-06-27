export async function attendanceLog(subjectId, dateStart, dateEnd) {

    let res = [];

     try{
        const params = new URLSearchParams({
            type: "FETCH_ATTENDANCE_LOGS",
        });

        if (subjectId) params.append("subjectId", subjectId);
        if (dateStart) params.append("dateStart", dateStart);
        if (dateEnd) params.append("dateEnd", dateEnd);

        const req = await fetch(`controller/student.php`,{
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: params
        });

        res = await req.json();
    }catch(error){
        console.error("Failed to fetch attendance logs:", error);
    }
    
    return res;
}