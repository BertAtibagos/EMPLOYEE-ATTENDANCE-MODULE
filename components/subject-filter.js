export async function subjectFilterComponent(){

    try{
        const req = await fetch(`controller/server.php`,{
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams({
                type: "GET_SUBJECT_LIST"
            })
        });

        const res = await req.json();

        const options = res.map(subj => 
            `<option value="${subj.subj_id}">${subj.subj_desc}</option>`
        ).join('');

        return(
            `<div class="col-md-4">
                <label class="form-label">Subject</label>
                <select class="form-select" id="subjectSelect">
                    ${options}
                </select>
            </div>`
        );

    }catch(error){
        console.error("Failed to fetch subject list:", error);
    }
}