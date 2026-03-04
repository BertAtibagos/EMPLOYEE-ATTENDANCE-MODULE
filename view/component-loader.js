import { tableComponent } from '../components/record-cards.js';
import { subjectFilterComponent } from '../components/subject-filter.js';

document.addEventListener('DOMContentLoaded', async () => {
    const attendance = document.getElementById('attndnc_logs_card');
    const subjectFilter = document.getElementById('subjectFilter');
    
    if (attendance && subjectFilter) {
        attendance.innerHTML = await tableComponent();
        subjectFilter.innerHTML = await subjectFilterComponent();
    }
});