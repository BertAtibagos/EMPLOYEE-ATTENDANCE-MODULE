import { tableComponent } from '../components/record-cards.js';
import { subjectFilterComponent } from '../components/subject-filter.js';

const attendance = document.getElementById('attndnc_logs_card');

document.addEventListener('DOMContentLoaded', async () => {
    const subjectFilter = document.getElementById('subjectFilter');
    
    if (attendance && subjectFilter) {
        attendance.innerHTML = await tableComponent();
        subjectFilter.innerHTML = await subjectFilterComponent();

        document.getElementById('subjectSelect').addEventListener('change', async (e)=>{
            const selectedSubject = e.target.value;

            attendance.innerHTML = await tableComponent(selectedSubject);
        });
    }
});