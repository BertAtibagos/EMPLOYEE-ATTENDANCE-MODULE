import { loadingComp } from './loading-comp.js';
import { attendanceLog } from '../api/attendance_log.js';

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

export async function tableComponent(subjectId = null){
    
    let loading = true;

    if(loading){
        attendance.innerHTML = loadingComp();
    }

    const res = await attendanceLog(subjectId);
    // if(res){
    //     loading = false;
    // }
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