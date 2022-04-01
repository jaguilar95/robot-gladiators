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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // enemy taking random damage based on player's attack
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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

    // player takes random damage based on enemy's attack
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
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
      enemyHealth = randomNumber(40, 60);

      // call fight function with enemy-robot
      fight(pickedEnemyName);

      // Go to shop if player isn't at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // Ask if the player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        // If yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
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

var shop = function () {
  // Ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // Using switch() to carry out shop options
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerMoney >= 7) {
        window.alert(
          "Refilling " + playerName + "'s health by 20 for 7 dollars."
        );
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert(playerName + " doesn't have enough money!");
      }
      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
        window.alert(
          "Upgrading " + playerName + "'s attack by 6 for 7 dollars."
        );
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert(playerName + " doesn't have enough money!");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert(playerName + " leaves the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again in case of invalid response
      shop();
      break;
  }
};

// Creating random numbers within a min/max parameter range
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
};

// start the game when the page loads
startGame();

/* 

  Use the Math object to add randomness to the game
  Convert player and enemy data to custom objects

*/
