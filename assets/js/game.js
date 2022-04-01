// fight function
var fight = function (enemy) {
  // repeat and execute as long as the enemy-robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
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
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );

        // money penalty for quitting
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // enemy taking random damage based on player's attack
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // checking enemy health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // player takes random damage based on enemy's attack
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " remaining."
    );

    // checking player health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");

      // leave loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  } // end of while loop
}; // end of fight function

// function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // alert player the game is starting
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // set logical var name
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy health
      pickedEnemyObj.health = randomNumber(40, 60);

      // call fight function with enemy-robot
      fight(pickedEnemyObj);

      // Go to shop if player isn't at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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
      playerInfo.refillHealth();
      break;
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
      break;
    case "leave":
    case "LEAVE":
      window.alert(playerInfo.name + " leaves the store.");
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

// player chooses their name
var getPlayerName = function () {
  var name = "";

  // Loop to check if name is null
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 100;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert(
        "Refilling " + playerInfo.name + "'s health by 20 for 7 dollars"
      );
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert(
        "Upgrading " + playerInfo.name + "'s attack by 6 for 7 dollars."
      );
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

// enemy declarations
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(8, 12),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(12, 16),
  },
];

// start the game when the page loads
startGame();
