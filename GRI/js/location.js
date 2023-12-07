function setDisplay(category, subcategory) {
  const categories = ["online", "steam"];
  const subcategories = ["Fps", "Rpg", "Aos", "Action", "Sports"];

  for (const cat of categories) {
    for (const subcat of subcategories) {
      const element = document.querySelector(`#${cat}${subcat}`);
      element.style.display =
        cat === category && subcat === subcategory ? "block" : "none";
    }
  }
}

// Online category functions
function oRpg() {
  setDisplay("online", "Rpg");
}

function oFps() {
  setDisplay("online", "Fps");
}

function oAos() {
  setDisplay("online", "Aos");
}

function oSports() {
  setDisplay("online", "Sports");
}

function oAction() {
  setDisplay("online", "Action");
}

// Steam category functions
function sRpg() {
  setDisplay("steam", "Rpg");
}

function sFps() {
  setDisplay("steam", "Fps");
}

function sAos() {
  setDisplay("steam", "Aos");
}

function sSports() {
  setDisplay("steam", "Sports");
}

function sAction() {
  setDisplay("steam", "Action");
}


