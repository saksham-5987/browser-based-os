// 🌤️ Footer Left
const cloudIcon = document.querySelector('#cloud-icon');
const windowsIcon = document.querySelector('#windows-icon');
const searchBar = document.querySelector('#search-bar');
const youtubeIcon = document.querySelector('#youtube-icon');
const vscodeIcon = document.querySelector('#vscode-icon');
const explorerIcon = document.querySelector('#explorer-icon');
const chromeIcon = document.querySelector('#chrome-icon');
const teamsIcon = document.querySelector('#teams-icon');
const batteryIcon = document.querySelector('#battery-icon');
const wifiIcon = document.querySelector('#wifi-icon');
const volumeIcon = document.querySelector('#volume-icon');
const clock = document.querySelector('#clock');
const systemPopup = document.querySelector('#system-popup');
const body=document.querySelector("#body");
const right_tray=document.querySelector("#right-tray");
const system_tray=document.querySelector("#system-tray")
const main = document.querySelector('.main');
const  right_click_main=document.querySelector(".right-click-main");
function goFullscreen() {
    document.documentElement.requestFullscreen();
  }
  main.addEventListener('contextmenu',(e)=>
 {  
    e.preventDefault();
    right_tray.classList.remove("displayclassright")
    const  right_click_main=document.querySelector(".right-click-main");
    right_click_main.classList.add("displayclass")
    main.appendChild(right_click_main);
    right_click_main.style.left = `${e.clientX}px`;
right_click_main.style.top = `${e.clientY}px`;

})
main.addEventListener('click',()=>
{
    right_click_main.classList.remove("displayclass","displayclassright")
    right_tray.classList.remove("displayclassright")
})
system_tray.addEventListener('click',(e)=>
{     
     e.stopPropagation();  
      right_tray.classList.add("displayclassright");
      right_tray.style.right="10px";
      right_tray.style.bottom="70px";

})
window.addEventListener('keypress',(e)=>
{
    console.log(e);
console.log("you clicked a key")
}
)