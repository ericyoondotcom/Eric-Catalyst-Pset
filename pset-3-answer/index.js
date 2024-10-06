fetch("https://yalies.io/api/people", {
    method: "POST",
    body: JSON.stringify({
        "filters": {
            "college": "Trumbull",
            "year": 2028
        }
    }),
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjgwOTQxMTksInN1YiI6ImVteTgifQ.BQz5Ks1EBF6cMOd-5LMViNv0VCtEOYoWB3E50jusJe8"
    }
}).then(response => response.json()).then(data => {
    const ul = document.getElementById("students");
    data.forEach(person => {
        const li = document.createElement("li");
        li.innerText = `${person.first_name} ${person.last_name}`;
        ul.appendChild(li);
    });
});
