const form = document.querySelector("#form");

function updateTable() {

    let setpasswords = JSON.parse(localStorage.getItem("password"));

    let str="";
    setpasswords.forEach(val => {
     str = `
    <tr>
       <th>${val.username}</th>
       <th><input class="text-center border-0" type="password" value="${val.password}"     readonly /><i class="fa-regular fa-copy paste"></i></th>
       <th><i class="fa-solid fa-trash fa-bounce delete"></i></th>
    </tr> 
   `
    });

    table.innerHTML += str;

    let deletebtn = document.querySelectorAll(".delete");
    deletebtn.forEach((e)=>{
        e.addEventListener("click",()=>{
            e.parentElement.parentElement.remove()
        })
    })

    let pastebtn = document.querySelectorAll(".paste");
    pastebtn.forEach((e)=>{
        e.addEventListener("click",()=>{
          let parentdiv =  e.parentElement;
          let passwordvalue = parentdiv.querySelector("input").value;
          navigator.clipboard.writeText(passwordvalue);
        })
    })

}

updateTable()


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let passwords = localStorage.getItem("password");

    if (passwords == null) {
        let json = []
        json.push({ username: username.value, password: pass.value })
        alert("password saved")
        localStorage.setItem("password", JSON.stringify(json));
        updateTable()
    } else {
        let json = JSON.parse(localStorage.getItem("password"));
        json.push({ username: username.value, password: pass.value })
        localStorage.setItem("password", JSON.stringify(json))
        updateTable()
    }
    form.reset()
})