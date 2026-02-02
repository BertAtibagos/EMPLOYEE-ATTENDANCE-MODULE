function loadingComp(){
    return(
        `<tr class="loading-spinner hide">
            <td colspan="4">
                <div class="text-center">
                    <div class="spinner-border " role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </td>
        </tr>`
    );
}

const attendance = document.getElementById('attndnc_logs_card');

function groupByDate(logs) {
    return logs.reduce((groups, log) => {
        const date = log.log_date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(log);
        return groups;
    }, {});
}


export async function tableComponent(){
    
    let loading = true;
    let res = [];

    if(loading){
        attendance.innerHTML = loadingComp();
    }

    try{
        const req = await fetch(`controller/index-controller.php`,{
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams({
                type: "FETCH_ATTENDANCE_LOGS"
            })
        });

        res = await req.json();
    }catch(error){
        console.error("Failed to fetch attendance logs:", error);
    }finally{
        loading = false;
    }

    const groupedLogs = groupByDate(res);

    return(
       Object.entries(groupedLogs).map(([date, logs]) => (
            `<div class="card p-3 mb-4"> 
                <h5 class="mb-3">${date}</h5>
                <table class="table table-bordered table-striped" id="attendanceTable">
                    <thead class="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${logs.map((data, index) => (
                            `<tr>
                                <td>${data.id}</td>
                                <td>${data.first_login}</td>
                                <td>${data.last_login}</td>
                            </tr>`
                        )).join('')}
                    </tbody>
                </table>
            </div>`
        )).join('')
    );
}