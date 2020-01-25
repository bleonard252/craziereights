var cz8 = {};

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