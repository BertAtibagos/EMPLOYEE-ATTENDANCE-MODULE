import { tableComponent } from './index-component.js';

document.addEventListener('DOMContentLoaded', async () => {
    const attendance = document.getElementById('attndnc_logs_card');
    
    if (attendance) {
        attendance.innerHTML = await tableComponent();
    }
});