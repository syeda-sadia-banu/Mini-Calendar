const monthEl=document.querySelector(".month");
const dayEl=document.querySelector(".day");
const dateEl=document.querySelector(".date")
const yearEl=document.querySelector(".year")

const month=new Date().getMonth();
monthEl.innerText=new Date().toLocaleString("en",{
    month:"long"
});


dateEl.innerText=new Date().getDate();
yearEl.innerText=new Date().getFullYear();

const day=new Date().getDay();

dayEl.innerText=new Date().toLocaleString("en",{
    weekday:"long"
});