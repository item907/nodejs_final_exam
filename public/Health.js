const h_table = document.querySelector('#h-table');
const form = document.querySelector('#add-health-form');

function renderHealth(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('health-id', doc.id);
    td1.textContent = doc.data().h_date;
    td2.textContent = doc.data().name;
    td3.textContent = doc.data().phone;
    td4.textContent = doc.data().status;
    td5.textContent = doc.data().status0;
    td6.textContent = doc.data().status1;
    td7.textContent = doc.data().status2;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('health-id');
        console.log(id);
        db.collection('Health').doc(id).delete();
    });

    h_table.appendChild(tr);
}

db.collection("Health").get().then(data => {
    data.docs.forEach(doc => {
        // 若是自行至firebase新增資料,日期欄位為毫秒,需要另外轉換
        // let time = doc.data().h_date["seconds"]
        // const time_to_date = new Date(time * 1000).toISOString().split('T')[0];
        // console.log(time_to_date);
        renderHealth(doc);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Health').add({
        h_date: form.h_date.value,
        name: form.name.value,
        phone: form.phone.value,
        status : form.status.value,
        status0 : form.status0.value,
        status1 : form.status1.value,
        status2 : form.status2.value
    });
    form.h_date.value = '';
    form.name.value = '';
    form.phone.value = '';
    form.status.value = '';
    form.status.value0 = '';
    form.status.value1 = '';
    form.status.value2 = '';
})