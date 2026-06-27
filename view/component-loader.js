import { tableComponent } from '../components/record-cards.js';
import { subjectFilterComponent } from '../components/subject-filter.js';
import { dateFilterComponent } from '../components/date-filter.js';
import { buttonComponent } from '../components/button.js';

const attendance = document.getElementById('attndnc_logs_card');

document.addEventListener('DOMContentLoaded', async () => {
    const subjectFilter = document.getElementById('subjectFilter');
    
    if (attendance && subjectFilter) {
        subjectFilter.innerHTML = await subjectFilterComponent();
        subjectFilter.innerHTML += await dateFilterComponent();
        subjectFilter.innerHTML += await buttonComponent("Search");
        attendance.innerHTML = await tableComponent();

        document.getElementById('searchButton').addEventListener('click', async (e)=>{
            const selectedSubject = document.getElementById('subjectSelect').value
            const dateFilterStart = document.getElementById('dateFilterStart').value;
            const dateFilterEnd = document.getElementById('dateFilterEnd').value;

            if(dateFilterStart && dateFilterEnd){
                 attendance.innerHTML = await tableComponent(selectedSubject, dateFilterStart, dateFilterEnd);
            }
        });
    }
});