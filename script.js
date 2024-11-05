async function getUsers() {
    let res = await fetch('http://api.test.ru/users');
    let users = await res.json();
    users.items.forEach((user) => {
        document.querySelector('.user-list').innerHTML +=
       ` <div className="card" style="width:18rem">
            <div className="card-body">
                <h5 className="card-title">${user.name}</h5>
                <p className="card-text">${user.email}</p>
            </div>
        </div>`
    })
    console.log(users);
}
async function addUser() {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    let res = await fetch('http://api.test.ru/users', {
        method: 'POST',
        body: formData
    });
    const data = await res.json();
    console.log(data);
}
getUsers();