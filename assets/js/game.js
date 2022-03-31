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

// function to start a new game
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // alert player the game is starting
      window.alert("Welcome to Robot Gladiators!");

      // set logical var name
      var pickedEnemyName = enemyNames[i];

      // reset enemy health
      enemyHealth = 50;

      // call fight function with enemy-robot
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // play again
  endGame();
};

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        " ."
    );
  }

  // if player is dead, player loses.
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// start the game when the page loads
startGame();

// Wrap the game logic in a startGame() function

// When the player is defeated or there are no more enemies, call an endGame() function

/* The endGame() function

  - Alerts the player's total stats
  - Asks the player if they'd want to play again
  - if yes, calls startGame() to restart the game
*/

/* After the player skips or defeats and enemy (and there are still robots to fight) then:

  - Asks the player if they'd like to shop
  - If not, continue as normal
  - If so, call the shop() function
  - The shop() function asks the player if they'd like to refill health, upgrade attack, or leave the shop
  - If refill, subtract money from player and increase health
  - If upgrade, subtract money and increase attack
  - If leave, alert goodbye and exit the function
  - If any other invalid option, call shop() again
*/
