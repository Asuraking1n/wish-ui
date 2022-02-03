const preLoad = document.querySelector("#loading");
const sideBar  = document.querySelector(".sidebar") 
const Input_validate = document.querySelector(".ip-validate") 
const val = document.querySelector(".val") 
const preLoader=()=> {
    setTimeout(()=>{
        preLoad.style.display = 'none'
    },1000)
    
}
const sideshow = () =>{
    sideBar.classList.toggle('active')
}
const inputValidate=()=>{
    data = Input_validate.value
    console.log(data)
    if(data.length < 6 ){
        val.innerHTML = "*Less "
    }else{
        val.innerHTML = ""
    }
}