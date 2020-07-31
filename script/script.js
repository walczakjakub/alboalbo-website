// click on squad memeber to see info
let squadInfo = document.getElementById("squad-info");
let squadImgBox = document.getElementsByClassName("squad-img-box");

for (let i=0; i<5; i++) {
  let squadNumber = i;  
  squadImgBox[i].addEventListener("click", showSquadInfo);

  function showSquadInfo() {
    squadInfo.style.display = "block"; 
    let infoName = document.getElementById("squad-info-name");
    let infoBio = document.getElementById("squad-info-bio");
    infoName.innerHTML = squadInfoContent[i].name;
    infoBio.innerHTML = squadInfoContent[i].bio;
  };

  // window.addEventListener("click", hideSquadInfo);

  // function  hideSquadInfo() {
  //   squadInfo.style.display = "none";
  // };

};
