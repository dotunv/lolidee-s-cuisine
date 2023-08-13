const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click"
, () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
))

/*menu tab*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
    menuSection.querySelector(target).classList.add("active");


}
});