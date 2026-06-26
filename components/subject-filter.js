import { subjects } from "../api/subjects.js";

export async function subjectFilterComponent(){

    const res = await subjects();

    return(
        `<div class="col-md-4">
            <label class="form-label">Subject</label>
            <select class="form-select" id="subjectSelect">
                ${res.map(subj => `<option value="${subj.subj_id}">${subj.subj_desc}</option>`)}
            </select>
        </div>`
    );

}