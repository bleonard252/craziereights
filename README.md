# Crazier Eights
A slightly crazier version of the classic card game, Crazy Eights. It uses Matrix and works like this:
1. A dealer enters the game. The dealer sets up the game and presses Create, generating the room and making the link.
2. The host shares the link and their friends join the game. (The dealer's device is not used to play. You need another device or browser window.) Everyone who joins is a guest.
3. When everyone has joined, the dealer can press Start to start the game.
4. The players and cards are automatically shuffled and dealt securely to the players (via DMs?) from the dealer's device. The first player on the list that isn't the dealer goes first.
5. On a player's turn, two events are sent: "xyz.blogold.crazier.playcard" with the card played as `{"card": "...cardcode..."}` (the dealer will confirm the card) or "xyz.blogold.crazier.drawcard" with `{}` (the dealer will DM a card), then "xyz.blogold.crazier.nextplayer" with `{}` which tells the next player in line to play. "xyz.blogold.crazier.oneleft" (`{}`) is sent when the player presses the "One left!" button (you can take a guess of when that's useful).