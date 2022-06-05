var gameData = {
  Shib: 0,
  Cavalier: 0,
  ShibPerClick: 1,
  ShibPerClickCost: 10,
  CavPickCost: 25,
  CavPerPick: 5,
  CavPerClick: 1,
  UpgradeCost: 1000
}
function getUpgrade() {
  if (gameData.Shib >= gameData.UpgradeCost) {
  gameData.Shib -= gameData.UpgradeCost
  document.getElementById("buycav").style.display = "inline-block"
  document.getElementById("cavaliersMined").style.display = "inline-block"
  document.getElementById("upgrade").style.display = "none"
  document.getElementById("ShibMined").innerHTML = gameData.shib + " Shib Mined"
}
}
function mineShib() {
  gameData.Shib += gameData.ShibPerClick
  document.getElementById("ShibMined").innerHTML = gameData.Shib + " Shib Mined"
}
function buyCav() {
  gameData.Cavalier += gameData.CavPerClick
  document.getElementById("cavaliersMined").innerHTML = gameData.Cavalier + " Cavaliers Mined"
}
function buyPick() {
  if (gameData.Cavalier >= gameData.CavPickCost) {
    gameData.Cavalier -= gameData.CavPickCost
    gameData.CavPerPick += 5
    gameData.CavPickCost *=2
    document.getElementById("pickUpgrade").innerHTML = "Purchase Pickaxe (Currently Own " + ((gameData.CavPerPick + 4) / 5) +  ") Cost: " + gameData.CavPickCost + " Cavaliers"
    document.getElementById("cavaliersMined").innerHTML = gameData.Cavalier + " Cavaliers Mined";
  }
}

function buyCursor() {
  if (gameData.Shib >= gameData.ShibPerClickCost) {
    gameData.Shib -= gameData.ShibPerClickCost
    gameData.ShibPerClick += 1
    gameData.ShibPerClickCost *= 2
    document.getElementById("ShibMined").innerHTML = gameData.Shib + " Shib Mined"
    document.getElementById("CursorUpgrade").innerHTML = "Purchase Cursor (Currently Own " + gameData.ShibPerClick + ") Cost: " + gameData.ShibPerClickCost + " Shib"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineShib() //reuse with dif var and function for incremental upgradess 1000 is in ms
}, 1000)