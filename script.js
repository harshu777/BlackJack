var cardsStack = new Array(); 
var players = new Array(); 
var cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
var cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var currentPlayer = 0;

function createCardsStack() 
{
    cardsStack = new Array();
    for (var i = 0 ; i < cardNumbers.length; i++)
    {
        for(var j = 0; j < cardTypes.length; j++)
        {
            var cardValue
            if (cardNumbers[i] == "J" || cardNumbers[i] == "Q" || cardNumbers[i] == "K") {
                cardValue = 10;
            } else if (cardNumbers[i] == "A") {
                cardValue = 11;
            } else {
                cardValue = parseInt(cardNumbers[i]); 
            }
            var card = { CardNumber: cardNumbers[i], CardType: cardTypes[j], CardValue: cardValue };
            cardsStack.push(card);
        }
    }
}

function createPlayers(num) 
{
    players = new Array();
    for(var i = 1; i <= num; i++)
    {
        var hand = new Array();
        var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}

function createPlayersView()
{
    document.getElementById('players').textContent = '';  
    for(var i = 0; i < players.length; i++)
    {
        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div'); 
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i; 
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.textContent = 'Player ' + players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand); 
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player); 
    }
}

function shuffle()
{
    for (var i = 0; i < 1000; i++)
    {
        var location1 = Math.floor((Math.random() * cardsStack.length));
        var location2 = Math.floor((Math.random() * cardsStack.length));
        var tmp = cardsStack[location1];

        cardsStack[location1] = cardsStack[location2]; 
        cardsStack[location2] = tmp;
    }
}

function startNewGame()
{
    document.getElementById('btnStart').value = 'Restart'; 
    createPlayersView();
}