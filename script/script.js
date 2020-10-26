// click on squad memeber to see info
let squadInfo = document.getElementById("squad-info");
let squadInfoOverlay = document.getElementById("squad-info-overlay");
let squadInfoClose = document.getElementById("squad-info-close");
let squadImgBox = document.getElementsByClassName("squad-img-box");

if (squadInfo.style.display === "") {
  for (let i=0; i<5; i++) {  
    let squadNumber = i;  
    squadImgBox[i].addEventListener("click", showSquadInfo);

    function showSquadInfo() {
      squadInfo.style.display = "block"; 
      squadInfoOverlay.style.display = "block"; 
      let infoName = document.getElementById("squad-info-name");
      let infoBio = document.getElementById("squad-info-bio");
      infoName.innerHTML = squadInfoContent[i].name;
      infoBio.innerHTML = squadInfoContent[i].bio;
    };
  };
}; 

squadInfoOverlay.addEventListener("click", hideSquadInfo);
squadInfoClose.addEventListener("click", hideSquadInfo);

function  hideSquadInfo() {
  if (squadInfo.style.display !== "") {
    squadInfo.style.display = "none"; 
    squadInfoOverlay.style.display = "none";  
  };
};

//BACK TO TOP BUTTON
const backToStartButton = document.querySelector("#back-to-start-button");

window.addEventListener("scroll", showBtsButton);

function showBtsButton() {
  if (window.pageYOffset >300) {
    backToStartButton.style.display = "block";
  }
  else {
    backToStartButton.style.display = "none";
  };
};

backToStartButton.addEventListener("click", backToStart);

function backToStart() {
  window.scrollTo(0, 0);
};

