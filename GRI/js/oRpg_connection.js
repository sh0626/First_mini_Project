
const gsRow = document.querySelector(".gs-row");

const endPoint = 9;


function goNext(n) {
  let mainDiv = document.querySelector(".main-div");
  let html = "";
  console.log(rpg_info.length);
  for (n = 0; n <= rpg_info.length; n++) {
    if (n === endPoint) {
      return;
    } else {
      html +=
      "<div class='detail-div'>" +
        "<div class='info'>" +
          "<div class='title'><div class='oAcName'>" + rpg_info[n].name + "</div>" +
          "<img class='imgsss' src='/img/games_online/rpg/" + n + ".jpg'>" +
        "</div>" +
        "<div class='details'><div class='oAcMade'>제작사&nbsp&nbsp&nbsp " + rpg_info[n].made +
        "</div>" +
        "<div class='oAcYear'>출시일 &nbsp&nbsp&nbsp" + rpg_info[n].year + 
        "</div>" +
        "<div class='oAcGenre'>장르 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + rpg_info[n].genre + 
        "</div>" +
        "<div class='oAcAge'>등급 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + rpg_info[n].age + 
        "</div>" +
        "<div class='oAcLink'>공식홈페이지 <a href='" + rpg_info[n].link + "'>" + rpg_info[n].link +"</a>" + 
        "</div>" + 
      "</div>" +
        "</div>" +
        "<div class='oAcDesc'>소개<br>" + rpg_info[n].desc + "</div>" +
      "</div>";
    }
    mainDiv.innerHTML = html;
  }
}

window.onload = function () {
  let n = 0;
  goNext(n);
};

