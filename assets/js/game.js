// alert player the game is starting
window.alert("Welcome to Robot Gladiators!");
// player chooses their name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// viewing player name and stats
// console.log(playerName, playerAttack, playerHealth);

// enemy declarations
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or quit
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter either 'FIGHT' or 'SKIP' to choose."
    );

    // if player skips
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirming player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), then leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        // money penalty for quitting
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // enemy taking damage
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // checking enemy health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // player takes damage
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " remaining."
    );

    // checking player health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");

      // leave loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function

// fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

for (var i = 0; i < enemyNames.length; i++) {
  // set logical var name
  var pickedEnemyName = enemyNames[i];

  // reset enemy health
  enemyHealth = 50;

  // call fight function with enemy-robot
  fight(pickedEnemyName);
}
