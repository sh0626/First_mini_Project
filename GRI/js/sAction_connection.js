const gsRow = document.querySelector(".gs-row");

const endPoint = 9;

function goNext(n) {
  let mainDiv = document.querySelector(".main-div");
  let html = "";
  console.log(action_info.length);
  for (n = 0; n <= action_info.length; n++) {
    if (n === endPoint) {
      return;
    } else {
      html +=
        "<div class='detail-div'>" +
        "<div class='info'>" +
        "<div class='title'><div class='oAcName'>" + action_info[n].name + "</div>" +
        "<img src='/img/games_steam/action/" + n + ".jpg'></div>" +
        "<div class='details'><div class='oAcMade'>제작사&nbsp&nbsp&nbsp " + action_info[n].made + "</div>" +
        "<div class='oAcYear'>출시일 &nbsp&nbsp&nbsp" + action_info[n].year + "</div>" +
        "<div class='oAcGenre'>장르 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + action_info[n].genre + "</div>" +
        "<div class='oAcAge'>등급 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + action_info[n].age + "</div>" +
        "<div class='oAcLink'>공식홈페이지 <a href='" + action_info[n].link + "'>" + action_info[n].link +"</a></div></div>" +
        "</div>" +
        "<div class='oAcDesc'>소개<br>" + action_info[n].desc + "</div>" +
        "</div>";
    }
    mainDiv.innerHTML = html;
  }
}

window.onload = function () {
  let n = 0;
  goNext(n);
};
