const preLoad = document.querySelector("#loading");
const sideBar  = document.querySelector(".sidebar") 
const preLoader=()=> {
    setTimeout(()=>{
        preLoad.style.display = 'none'
    },2000)
    
}
const sideshow = () =>{
    sideBar.classList.toggle('active')
}