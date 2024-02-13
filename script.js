// Text Adventure Game
const start = `Welcome to the Rot. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "The rot consumes.";

const q1 = `A national emergency alert just went out, warning individuals of an all consuming rot covering the earth, do you...
1. Begin training to join an elite force, focused on taking out the rot named the Rot Elimination Program, or R.E.P for short.
OR
2. Give up, the rot consumes all, you stand no chance.
OR
3. Give into the rot, become one with the rot, let it take over your body and soul.
${enter}`;

const gameOver1 = `You fool, you've left yourself to be consumed by the rot. ${gameOver}`;

const q2 = `You begin your training with the government with decent results, you feel stronger, but not strong enough. After a couple of weeks they begin to offer up an alternate course, the Cell Integration Program.
1. Sounds dangerous, continue your regular training.
OR
2. Thats exactly what you feel like you've been missing, its what you need to reach your true potential.
${enter}`;

const gameOver2 = `You continued to train for months but die in the battlefield in a complete landslide loss. Nobody left to remember you. ${gameOver}`;

const q3 = `They strap you into a chair, taking measurements of every aspect of your body. After 4 hours the process begins, the cells of rot shoot through your bloodstream, you can see the orange glow in your forearms, it feels like snakes trying to swim through your tiny veins, this lasts for what feels like forever. They continue to pump more and more cells until you can't feel a single part of your body. ...
1. Call off the operation, you can't endure the pain anymore.
OR
2. Grit your teeth and endure as long as you can.
${enter}`;

const gameOver3 = `The rot senses the weakness in you, instantly taking over your body and killing you. ${gameOver}`;

const q4 = `You've done it, supposedly you have the highest aptitude for rot cells out of anyone they've conducted the surgery on. You feel overwhelming power coursing through you. But at the back of your mind you feel a slight itching for control, domination. "Congrats soldier, you are now a Rot Reaper." ...
1. Give into the urge for more power.
OR
2. Get a new feeling for your new abilities before heading to the battlefront.
${enter}`;

const gameOver4 = `The rot respects your desire for power, but you become less human than rot. Eventually losing conscious, who knows horrors you committed after that. ${gameOver}`;

const q5 = `After a few more months of becoming acclimated with your new body you head out to battle with your fellow reapers. After hours of warfare versus the rot's swarms the hivemind finally shows itself. ...
1. Run straight for the hivemind, ignoring it's pawns.
OR
2. Slowly keep fighting the swarms and try to push your way up a bit at a time
${enter}`;

const gameOver5 = `The fight never ends. Despite your incredible powers, even you run out of energy eventually. ${gameOver}`;

const q6 = `You run past the swarms, causing many of your fellow reapers to get eliminated on the path behind you. Sacrifices must be made. You approach the hivemind and stare it down. Its beyond large, bigger than any manmade structure or mountain you've ever seen.
1.Jump atop it, sticking your sword in its rotten flesh, running along its spine dealing devastating damage.
OR
2. Ask the rot for more power.`

const win = `You body becomes unrecognizable. You look more rot than man, but that's exactly what you need. After an hour of fighting you spot a glowing section on the underside of the hivemind. You dig your hands into its flesh and rip out what looks like its core, the mind starts to dissolve, returning to nothing. Your body begins turning to ash. Without the rot's presence your existence is no longer possible. However, you have saved everyone, you are the hero, albeit one who traded their humanity for victory.`;

const gameOver6 = `Success! The giant hivemind seems to split in half you fall to your knees from exhaustion. The fight is finally over. Until you look up and see something emerging from the fleshy mass. That was only the first step. Before you can even blink you seem to be flying, you can see your own body. Oh. You're heads been cut off.`

const alt = "You are the one the rot has been searching for, what it needs to take control. This is your calling, you feel your conscious spread across the rot, a feeling of power you've never felt before. Good, this is your true calling."

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional Statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 1){
  userInput = prompt(q2);

  // 2nd Conditional Statement
  if (userInput == 2){
    userInput = prompt(q3);

    // 3rd Conditional Statement
    if (userInput == 2){
      userInput = prompt(q4);

      // 4th Conditional Statement
      if (userInput == 2){
        userInput = prompt(q5);

        if (userInput == 1){
            userInput = prompt(q6);

            if (userInput == 2){
            alert(win);
            } else {
            alert(gameOver6);
            }

        }else {
            alert(gameOver5)
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }
    
  } else {
    alert(gameOver2);
  }
  
} else if (userInput == 3){
    alert(alt)
} else {
    alert(gameOver1);
}