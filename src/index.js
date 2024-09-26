import "./styles.css";
import pageLoad from './pageLoad';

pageLoad();

const tabs = document.querySelectorAll(".tab-btns");
const allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach(tab => {
      tab.classList.remove("active")});
      tab.classList.add("active");
    
      allContent.forEach(content => {
        content.classList.remove("active")
      })
      allContent[index].classList.add("active");
  })
})