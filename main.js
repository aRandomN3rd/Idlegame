var gameData = {
    Shib: 0,
    ShibPerClick: 1,
    ShibPerClickCost: 10,
    ShibPickCost: 25,
    ShibPerPick: 5
  }
  
  function mineShib() {
    gameData.Shib += gameData.ShibPerClick
    document.getElementById("ShibMined").innerHTML = gameData.Shib + " Shib Mined"
  }
  function buyPick() {
    if (gameData.Shib >= gameData.ShibPerPickCost) {
      gameData.Shib -= gameData.ShibPerPickCost
      gameData.ShibPerPick += 5
      gamedata.ShibPerPickCost *=2
      document.getElementById("pickUpgrade").innerHTML = "Purchase Pickaxe (Currently Own " + gameData.ShibPerPick +  ") Cost: " + gameData.ShibPickCost + " Shib"
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
