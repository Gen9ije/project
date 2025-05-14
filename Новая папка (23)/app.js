let but = document.getElementById('but1')
let pic = document.getElementById('pic')
let users = [];

but.addEventListener(`click`, () => {
    createUser()
    // console.log(pic.files[0]);
    // let url = URL.createObjectURL(pic.files[0]);
    // console.log(url);
    // sessionStorage.setItem(`iccUrl` , url);
    // let img = document.createElement('img');
    // img.src = sessionStorage.getItem(`picUrl` , );
    // document.body.appendChild(img);
})

function createUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    let url = URL.createObjectURL(pic.files[0])
    
    if (!firstName || !lastName || !email) {
        alert("Please fill all fields.");
        return;
    }

    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        url: url
    };
    
    users.push(newUser);
    console.log(users);
    
   
}

function renderUsers() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const genderFilter = document.getElementById("genderFilter").value;
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    
    const filteredUsers = users.filter(user => 
        (user.first_name.toLowerCase().includes(searchTerm) ||
         user.last_name.toLowerCase().includes(searchTerm)) &&
        (genderFilter ? user.gender === genderFilter : true)
    );
    
    filteredUsers.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        
        const avatar = document.createElement("img");
        avatar.src = user.url
        
        const userInfo = document.createElement("div");
        userInfo.innerHTML = `<strong>${user.first_name} ${user.last_name}</strong><br>
                             ${user.email}<br>
                             Gender: ${user.gender}`;
        
        userCard.appendChild(avatar);
        userCard.appendChild(userInfo);
        userList.appendChild(userCard);
    });
}
document.getElementById("clear-btn").addEventListener("click", function () {
    document.querySelectorAll("input, select").forEach(el => {
        if (el.type !== "file") el.value = "";
    });
});


document.getElementById("genderFilter").addEventListener("change", renderUsers);





