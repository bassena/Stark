/**
 * Created by Pensai on 3/22/14.
 */

// credit for the algorithm used in the shuffleDeck() function goes to Ronald Fisher and Frank Yates for the development of their Fisher-Yates Shuffle method.

var getById = function(id) {return document.getElementById(id);}



var betAmount; // stores the amount of money a player has bet
var cardDeck = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,101,102,103,104,105,106,107,108,109,110,111,112,113,201,202,203,204,205,206,207,208,209,210,211,212,213,301,302,303,304,305,306,307,308,309,310,311,312,313,1,2,3,4,5,6,7,8,9,10,11,12,13,101,102,103,104,105,106,107,108,109,110,111,112,113,201,202,203,204,205,206,207,208,209,210,211,212,213,301,302,303,304,305,306,307,308,309,310,311,312,313,1,2,3,4,5,6,7,8,9,10,11,12,13,101,102,103,104,105,106,107,108,109,110,111,112,113,201,202,203,204,205,206,207,208,209,210,211,212,213,301,302,303,304,305,306,307,308,309,310,311,312,313,1,2,3,4,5,6,7,8,9,10,11,12,13,101,102,103,104,105,106,107,108,109,110,111,112,113,201,202,203,204,205,206,207,208,209,210,211,212,213,301,302,303,304,305,306,307,308,309,310,311,312,313);

var nextCard = 0;
var faceDown = "./images/cardImages/faceDownCard.gif";  // value to display face down cards
var playerHand = 0; // represents the number of cards that the player currently has, is used during the doubleDown() fuction to determine if the player can double down or not
var playerTotal = 0;  // tracks the player total score
var dealerHand = 0; // represents the cards in the dealers hand -- ended up not using this. . .
var dealerTotal = 0; // tracks the dealer totals
var checkBet = /^(([5-9]\d{0,2})|([1-4]\d{3})|(50{3}))$/;

function losingMoney()
{
    $(document).ready(function(){
        $("#moneyDiv").animate(
        {
            color: "#FF0000",
            fontSize: "5em",
            marginTop: ".2em",
            
        }, 500, function() {
            $("#moneyDiv").animate(
            {
                color: "#FFFFFF",
                fontSize: "3em",
                marginTop: "0.5em",
            }, 500
                )
        });
    });
}

function winningMoney() 
{
    $(document).ready(function(){
        $("#moneyDiv").animate(
        {
            color: "#5CE62E",
            fontSize: "5em",
            marginTop: ".2em",
        }, 500, function() {
            $("#moneyDiv").animate(
            {
                color: "#FFFFFF",
                fontSize: "3em",
                marginTop: "0.5em",
            }, 500
                )
        });
    });
}


function updateMoney() // called onUnload in game.html
{ 
    var expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1);
    document.cookie = "availableMoney=" + encodeURIComponent(money) + "; expires=" + expireDate.toUTCString();
} // updateBankRoll()


function writeYouLost() 
{
    document.getElementById("result").innerHTML = "<p>You lost $" + betAmount + "!</p>";

    $( document ).ready(function() 
    {
            $( "#result" ).show({effect: "scale", scale: "content"}).delay(500);
        });

    $(document).ready(function() 
    { 
            $("#result" ).toggle({effect: "scale", scale:"content"}).delay(500);
        });

   // document.getElementById("result").innerHTML = "";
} // responsible for writting to a div that will display the results of the players actions and animate them.

function writeYouWon() 
{
    document.getElementById("result").innerHTML = "<p>You won $" + betAmount + "!</p>";

    $( document ).ready(function() {
            $( "#result" ).show({effect: "scale", scale: "content"}).delay(500);
        });

        $(document).ready(function() { 
            $("#result" ).toggle({effect: "scale", scale:"content"}).delay(500);
        });
   // document.getElementById("result").innerHTML = "";
}

function writeItsATie() 
{
    document.getElementById("result").innerHTML = "<p>It's a tie!</p>";

    $( document ).ready(function() {
            $( ".result" ).show({effect: "scale", scale: "content"}).delay(500);
        });

    $(document).ready(function() { 
            $(".result" ).toggle({effect: "scale", scale:"content"}).delay(500);
        });
   // document.getElementById("result").innerHTML = "";
}


function parsePlayerCard(card) 
{
    var card = parseInt(card);
    var cardImg;
    if (card > 0 && card <= 13)
    {
        if (card == 1)
        {
            playerTotal += 11;            
            cardImg = "./images/cardImages/h1.gif";
            return cardImg;
        } // ace of hearts
        else if (card == 11)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/hj.gif";
            return cardImg;
        } // jack of hearts
        else if (card == 12)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/hq.gif";
            return cardImg;
        } // queen of hearts
        else if (card == 13)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/hk.gif";
            return cardImg;
        } // king of hearts
        else{
            playerTotal += 10;
            cardImg = "./images/cardImages/h"+ card + ".gif";
            return cardImg;
        } // retuns a heart of 'x' where x is the card number value
    }//if (card > 0 && card <= 13)

    else if (card > 100 && card <= 113)
    {
        if (card == 101)
        {
            playerTotal += 11;
            cardImg = "./images/cardImages/c1.gif";
            return cardImg;
        } // ace of clubs

        else if (card == 111)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/cj.gif";
            return cardImg;
        } // jack of clubs
        else if (card == 112)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/cq.gif";
            return cardImg;
        } // queen of clubs
        else if (card == 113)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/ck.gif";
            return cardImg;
        } // king of clubs
        else
        {
            card = parseInt(card) - 100;
            playerTotal += card;
            cardImg = "./images/cardImages/c" + card + ".gif";
            return cardImg;
        }  // returns 'x' of clubs where x is a number value
    }//else if (card > 100 && card <= 113)

    else if (card > 200 && card <= 213)
    {
        if (card == 201)
        {
            playerTotal += 11;
            cardImg = "./images/cardImages/s1.gif";
            return cardImg;
        } // ace of spades

        else if (card == 211)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/sj.gif";
            return cardImg;
        } // jack of spades
        else if (card == 212)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/sq.gif";
            return cardImg;
        } // queen of spades
        else if (card == 213)
        {
            playerTotal += 10;
            cardImg = "./images/cardImages/sk.gif";
            return cardImg;
        } // king of spades
        else
        {
            card = parseInt(card) - 200;
            playerTotal += card;
            cardImg = "./images/cardImages/s"+ card + ".gif";
            return cardImg;
        } // x of spades where x is the card value
    } // else if (card > 200 && card <= 213)

    else if (card > 300 && card <= 313)
    {
        if (card == 301)
        {
            playerTotal += 11;
            
            cardImg = "./images/cardImages/d1.gif";
            return cardImg;
        } // ace of diamonds

        else if (card == 311)
        {
            playerTotal += 10;
            
            cardImg = "./images/cardImages/dj.gif";
            return cardImg; 
        } // Joker of Diamonds

        else if (card == 312)
        {
            playerTotal += 10;
            
            cardImg = "./images/cardImages/dq.gif";
            return cardImg;
        } // Queen of Diamonds

        else if (card == 313)
        {
            playerTotal += 10;
            
            cardImg = "./images/cardImages/dk.gif";
            return cardImg;
        } // King of Diamonds

        else
        {
            card = parseInt(card) - 300;
            playerTotal += card;
            
            cardImg = "./images/cardImages/d" + card + ".gif";
            return cardImg;
        }

    } // else if (card > 300 && card <= 313)
} // parses a card sent from givePlayerCard() and returns it with a human readable representation and begins tracking totals for the player

function parseDealerCard(card)
{
    var card = parseInt(card);
    if (card > 0 && card <= 13)
    {
        if (card == 1)
        {
            dealerTotal += 11;
            
            cardImg = "./images/cardImages/h1.gif";
            return cardImg;
        } // ace of hearts

        else if (card == 11)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/hj.gif";
            return cardImg;
        } // Jack of hearts

        else if (card == 12)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/hq.gif";
            return cardImg;
        } // queen of hearts

        else if (card == 13)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/hk.gif";
            return cardImg;
        } // king of hearts

        else {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/h" + card + ".gif";
            return cardImg;
        } // x of hearts where x is the card value

    } // if (card > 0 && card <= 13)

    else if (card > 100 && card <= 113) 
    {
        if (card == 101)
        {
            dealerTotal += 11;
            
            cardImg = "./images/cardImages/c1.gif";
            return cardImg;
        } // ace of clubs

        else if (card == 111)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/cj.gif";
            return cardImg;
        } // jack of clubs

        else if (card == 112)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/cq.gif";
            return cardImg;
        } // queen of clubs

        else if (card == 113)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/ck.gif";
            return cardImg;
        } // king of clubs

        else
        {
            card = parseInt(card) - 100;
            dealerTotal += card;
            
            cardImg = "./images/cardImages/c" + card + ".gif";
            return cardImg;
        } // x of clubs where x is the card value representation

    } // else if (card > 100 && card <= 113)

    else if (card > 200 && card <= 213)
    {
        if (card == 201)
        {
            dealerTotal += 11;
            
            cardImg = "./images/cardImages/s1.gif";
            return cardImg;
        } // ace of spades

        else if (card == 211)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/sj.gif";
            return cardImg;
        } // jack of spades

        else if (card == 212)
        {
            dealerTotal += 10;
            cardImg = document.createElement("IMG");
            cardImg.src = "./images/cardImages/sq.gif";
            return cardImg;
        } // queen of spades

        else if (card == 213)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/sk.gif";
            return cardImg;
        } // king of spades

        else
        {
            card = parseInt(card) - 200;
            dealerTotal += card;
            
            cardImg = "./images/cardImages/s" + card + ".gif";
            return cardImg;
        } // retuns a spades of 'x' where x is the card number

    } // else if (card > 200 && card <= 213)

    else if (card > 300 && card <= 313)
    {
        if (card == 301)
        {
            dealerTotal += 11;
            
            cardImg = "./images/d1.gif";
            return cardImg;
        } // ace of diamonds

        else if (card == 311)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/dj.gif";
            return cardImg;
        } // jack of diamonds

        else if (card == 312)
        {
            dealerTotal += 10;
            
            cardImg = "./images/cardImages/dq.gif";
            return cardImg;
        } // queen of diamonds

        else if (card == 313)
        {
            dealerTotal += 10;
            cardImg = "./images/cardImages/dk.gif";
            return cardImg;
        } // king of diamonds

        else
        {
            card = parseInt(card) - 300;
            dealerTotal += 10;
            cardImg = "./images/cardImages/d" + card + ".gif";
            return cardImg;
        } // x of diamonds where x is the card value representation

    }//else if (card > 300 && card <= 313)
} // parses a card sent from giveDealerCard() and returns it with a human readable representation and begins tracking totals for the dealer

function shuffleDeck() 
{
    var length = cardDeck.length;
    var i;

    while (length)
    {
        i = Math.floor(Math.random() * length--);
        temp = cardDeck[length];
        cardDeck[length] = cardDeck[i];
        cardDeck[i] = temp;
    } // while
}  // shuffles the deck using Fisher-Yates algorithm

function givePlayerCard() 
{
    nextCard++;
    playerHand++;
    return parsePlayerCard(cardDeck[nextCard -1]);
} // gives a card to the player, called by hitThePlayer() and returns to hitThePlayer() with proper values representing a card

function giveDealerCard() 
{
    nextCard++;
    if(nextCard -1 == 0) {
        faceDownDealerCard = parseDealerCard(cardDeck[nextCard - 1]);
        return faceDown;
    } // if
    else
        return parseDealerCard(cardDeck[nextCard - 1]);
} // gives a card to the dealer, called by stand() and returns to stand() with proper values representing a card

function initializeGame() 
{
    money = document.getElementById("moneyDiv").innerHTML;
	if (parseInt((document.getElementById("moneyDiv").innerHTML)) <= 0)
	{
		alert("It looks like you are out of money, skidaddle!");
        clearFieldsAndVariables();
	}
	else
	{
    	clearFieldsAndVariables(); // clears the text fields and resets variables to their original pre-game started state.
    	shuffleDeck(); // shuffles the deck

   	 	betAmount = parseInt(document.getElementById("txtBet").value);
    	if (betAmount >= 5 && !(betAmount > money)) {
        	document.getElementById("btnDeal").disabled = true;
        	document.getElementById("btnHit").disabled = false;
        	document.getElementById("btnStand").disabled = false;
        	document.getElementById("txtBet").disabled = true;
			document.getElementById("btnDoubleDown").disabled = false;

        	document.getElementById("dealerCard1").src = giveDealerCard();
        	document.getElementById("dealerCard2").src = giveDealerCard();
                dealerHand = 2;
        	document.getElementById("playerCard1").src = givePlayerCard();
        	document.getElementById("playerCard2").src = givePlayerCard();
                playerHand = 2;
    	} // checks player funds against input bet amount
    		else {
        		alert("You must bet at least 5 dollars");
    		} // else
	} // else 
} // initializes the game environment

var playerCardNum = 3;

function hitThePlayer() 
{

    document.getElementById("playerCard" + playerCardNum).src = givePlayerCard();
    ++playerCardNum;
    checkGameState();
    if (playerCardNum > 5)
    {
        stand();
    } // checks to ensure that the player is not drawing more cards than allowed (5), if the player hits the max without busting the turn is then given to the dealer who fills out his hand and attempts to beat the players hand
    
	
} // hitThePlayer()



function checkGameState() 
{
    if (playerTotal > 21)
    {
        // display's the youLostDiv to inform the player in a flashy way they've lost.
        writeYouLost();
        losingMoney();
        // updates information about players money, on the page, and then updates the cookies
        money -= parseInt(betAmount);
        document.getElementById("moneyDiv").innerHTML = parseInt(money);
		updateMoney();

        // pretty self explanitory, resets everything to its original state so a new game can be initiated
		clearFieldsAndVariables();

    } // checks if busted
	
    if (playerTotal == 21)
    {
        // display's the div on the game page which will become shown from its initial hidden state, grown, then shrunk and hidden again
        writeYouWon();
        winningMoney();
        // updates the bank roll
        money = (parseInt(money) + parseInt(betAmount));
        document.getElementById("moneyDiv").innerHTML = parseInt(money);
		updateMoney();

        // clears fields
		clearFieldsAndVariables();

    } // checks if player has won

	if (playerHand > 2)
    {
		document.getElementById("btnDoubleDown").disabled = true;
	} // checks the player hand, if greater than 2 it disables the double down option that the player

    else if (hasDoubledDown && playerHand >= 3)
	{
		alert("Sorry, you can only double down if you have exactly 2 cards.");
	} // This code is only staying here in the rare case that the double down button doesn't get disabled. This way the game can still maintain proper flow
} // checkGameState()

var dealerCardNum = 3;

function stand() 
{
    while(dealerTotal < playerTotal && dealerTotal != 21)
    {
        document.getElementById("dealerCard"+ dealerCardNum).value = giveDealerCard();
    } // checks if the dealers total is less than the players total and not a bust, proceeds to draw a card to compete with the player

    if (dealerTotal > 21)
    {
        
        writeYouWon();   // displays the you won text when the player wins
        winningMoney();  
        money = (parseInt(money) + parseInt(betAmount)); // This should be done with money += parseInt(betAmount) however doing so results in an append rather than a calculation
        document.getElementById("moneyDiv").innerHTML = parseInt(money);
		//updatemoney();

		clearFieldsAndVariables();

    } // checks if the dealer total is a bust alerts the player that they've won

    else if (dealerTotal == playerTotal)
    {
        // tells the player it is a tie
        writeItsATie();
		clearFieldsAndVariables();
    } // checks if the game is a tie

    else if (dealerTotal > playerTotal && !(dealerTotal > 21))
    {
        // informs the player they've lost
        writeYouLost();
        losingMoney();
        // updates bank roll on the page and in the cookies
        money -= parseInt(betAmount);
        document.getElementById("moneyDiv").innerHTML = parseInt(money);
		updateMoney();

		clearFieldsAndVariables();
    } // checks if the dealer has a hand greater than the players hand, yet has not busted, if so alerts the player that they've lost
} // stand()

var hasDoubledDown = false;

function doubleDown() 
{
        document.getElementById("btnDoubleDown").disabled = true;
        document.getElementById("btnHit").disabled = true;
        document.getElementById("playerCard" + playerCardNum).src = givePlayerCard();
        ++playerHand;
        betAmount += betAmount;
	    document.getElementById("txtBet").value = parseInt(betAmount);
        hasDoubledDown = true;
        checkGameState();
} // doubleDown()

function clearFieldsAndVariables() 
{
    for(var i = 1; i <= 5; ++i)
    {
        document.getElementById("dealerCard" + i).src = "";
        document.getElementById("playerCard" + i).src = "";
    } // loop to clear the fields which have cards from the previous round in them

    document.getElementById("btnDeal").disabled = false;
    document.getElementById("btnHit").disabled = true;
    document.getElementById("btnStand").disabled = true;
    document.getElementById("txtBet").disabled = false;
    document.getElementById("btnDoubleDown").disabled = true;

    dealerCardNum = 3;
    playerCardNum = 3;
    playerHand = 0;
    dealerHand = 0;
    nextCard = 0;
    playerTotal = 0;
    dealerTotal = 0;
    // resets values which pertain to proper flow of the game to their defaults.
}  // clearFieldsAndVariables()

function drawGamePage()
{
    // handles Player info div 'folding' in
    $( document ).ready(function() {
    $( ".playerInfo" ).hide();
    });
        $( document ).ready(function() {
    $( ".playerInfo" ).show( "fold", {horizFirst: true}, 1000 );
    });

    // fades in the text box to place your bet
    $( document ).ready(function() {
    $( "#txtBet" ).hide();
        });
    $( document ).ready(function() {
    $( "#txtBet" ).delay(1000).fadeIn(1000);
    });

    // fades in the game table with divs to display cards
    $( document ).ready(function() {
    $( "#gameTable" ).hide();
        });
    $( document ).ready(function() {
    $( "#gameTable" ).delay(2000).fadeIn(1000);
    });

    // fades in the game controls
    $( document ).ready(function() {
    $( "#gameControls" ).hide();
        });
    $( document ).ready(function() {
    $( "#gameControls" ).delay(3000).fadeIn(1000);
    });
} // basic animations to draw in elements on the game page 