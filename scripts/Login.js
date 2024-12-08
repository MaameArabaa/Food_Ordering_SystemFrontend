const form = document.querySelector("form")
const BACKEND_URL = "https://food-ordering-systembackend.onrender.com"

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fullname = document.querySelector(".fullname").value
    let password = document.querySelector(".password").value
    console.log(`Fullname: ${fullname} || password: ${password}`)
    axios.post(`${BACKEND_URL}/login`,{fullname,password}).then(reponse=>{
        if(reponse.data.message === "User login Successful"){
            alert(reponse.data.message)
            window.location.href = "allegies.html"
        }
    }).catch(err=>{
        console.log(err)
    })
})