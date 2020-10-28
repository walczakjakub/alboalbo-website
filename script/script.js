// click on squad memeber to see info
const squadInfo = document.getElementById("squad-info");
const squadInfoOverlay = document.getElementById("squad-info-overlay");
const squadInfoClose = document.getElementById("squad-info-close");
const squadImgBox = document.getElementsByClassName("squad-img-box");
const squadInfoSocials = document.querySelector("#squad-info-socials");

if (squadInfo.style.display === "") {
  for (let i = 0; i < 5; i++) {  
    squadImgBox[i].addEventListener("click", showSquadInfo);

    function showSquadInfo() {
      squadInfo.style.display = "block"; 
      squadInfoOverlay.style.display = "block"; 
      let infoName = document.getElementById("squad-info-name");
      let infoBio = document.getElementById("squad-info-bio");
      infoName.innerHTML = squadInfoContent[i].name;
      infoBio.innerHTML = squadInfoContent[i].bio;

      // squad info socials
      let squadInfoObject = squadInfoContent[i];
      for (let j = 2; j < Object.keys(squadInfoObject).length; j++) {
        let squadInfoObjectKeys = Object.keys(squadInfoObject);
        let squadInfoSocialsA = document.createElement("a");
        squadInfoSocialsA.href = squadInfoObject[squadInfoObjectKeys[j]];
        squadInfoSocialsA.target = "_blank"
        let squadInfoSocialsLi = document.createElement("li");
        squadInfoSocialsA.appendChild(squadInfoSocialsLi);
        squadInfoSocialsLi.classList.add("squad-info-socials-li");
        squadInfoSocialsLi.innerHTML = squadInfoObjectKeys[j];
        squadInfoSocials.appendChild(squadInfoSocialsA);
      };
    };
  };
}; 

squadInfoOverlay.addEventListener("click", hideSquadInfo);
squadInfoClose.addEventListener("click", hideSquadInfo);

function  hideSquadInfo() {
  if (squadInfo.style.display !== "") {
    squadInfo.style.display = "none"; 
    squadInfoOverlay.style.display = "none";  
    //DELETING SOCIALS LIs
    while (squadInfoSocials.firstChild) {
      squadInfoSocials.removeChild(squadInfoSocials.lastChild);
    };
  };
};

// for (let i=0; i<5; i++) {
//   let squadInfoObject = squadInfoContent[i];

// };


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

