/** The Crazier Eights root function object. */
var cz8 = {};

/** The decks within the game. The dealer will use these to shuffle and deal cards. */
cz8.decks = {};
cz8.decks.uno = [
    "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R+2", "RR", "RS",
    "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R+2", "RR", "RS",
    "Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y+2", "YR", "YS",
    "Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y+2", "YR", "YS",
    "G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G+2", "GR", "GS",
    "G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G+2", "GR", "GS",
    "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B+2", "BR", "BS",
    "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B+2", "BR", "BS",
    "W", "W+4",
    "W", "W+4",
];
Object.defineProperty(cz8.decks.uno, "displayname", {writable: false, value: "Standard deck"})
/**
 * Parses a card for display.
 * @param {string} card The card code to interpret.
 */
cz8.parseCard = function parseCard(card) {
    let color = "wild";
    if (card.substr(0,1) == "R") color = "red";
    if (card.substr(0,1) == "Y") color = "yellow";
    if (card.substr(0,1) == "G") color = "green";
    if (card.substr(0,1) == "B") color = "blue";
    let value = 0;
    if (card.substr(1).match(/^[0-9]$/)) value = Number.parseInt(card.substr(1));
    let action = "";
    if (card.substr(1) == "+2") action = "+2";
    if (card.substr(1) == "+4") action = "+4";
    if (card.substr(1) == "R") action = "reverse";
    if (card.substr(1) == "S") action = "skip";
    return {color, value, action}
};

cz8.host = {};
/** Called when the dealer presses the Continue button. */
cz8.host.start_playerlist = function start_playerlist() {
    $()
};

/** Changes the page.
 * @param {"host-start"} to The page to switch to.
 */
cz8.page = function page(to) {
    $("main:not(.d-none)").addClass('d-none');
    $("main[type='"+to+"']").removeClass('d-none');
}

$(document).ready(() => {
    if (!window.URLSearchParams) { $("[type='host-start'] .mt-3").append(`<div class="alert alert-danger" style="margin-top: 72px;" role="alert">ERROR: You're not running a new enough browser. Crazier Eights is developed against modern browsers. Older versions of these browsers, and Internet Explorer, are not supported. To make this message disappear, and to make links work, you'll need to use a browser like Firefox. You will have to use the Join button and trim your link to join a game.</div>`); 
        var url = {} }
    else var url = new URLSearchParams(location.search);
    window.cz8local = {url};
    if (url['room']) {
        window.cz8local.room = url['room']
        window.cz8local.homeserver = window.cz8local.room.replace(/^.*\:/,""); //get the homeserver, needed to initialize the SDK
        window.cz8local.client = matrixcs.createClient(window.cz8local.homeserver || "https://matrix.org"); //this will be re-initialized later (if you're the dealer), maybe?
        window.cz8local.client.registerGuest()
            .then((user) => {
                window.cz8local.user = user;
                console.log(user);
            })
        //TODO: switch pages
    } else {
        cz8.page("host-start");
    }
})