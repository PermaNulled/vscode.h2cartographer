const doc = require("./Items/Item");
const vscode = require("vscode");

var Func = [
    new doc.documentationItem(
        "characterDatumFromIndex",
        "characterDatumFromIndex($0)",
        "Gets datum for character with provided index.",
        "int characterDatumFromIndex(index)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "objectGetWithType",
        "objectGetWithType($1,$2)",
        "Gets the datum of the object datum and type provided.",
        "int objectGetWithType(objectDatum,objectType)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "resetPlayerEquipment",
        "resetPlayerEquipment($0)",
        "Resets the specified player's equipment (removes all weapons from player)",
        "void resetPlayerEquipment(unit_datum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getGameLifeCylce",
        "getGameLifeCylce()",
        "Get's the game's current lifecycle possible returns are life_cycle_none,life_cycle_pre_game,life_cycle_start_game,life_cycle_in_game,life_cycle_post_game,life_cycle_joining,life_cycle_matchmaking. ",
        "int getGameLifeCycle()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "leaveSession",
        "leaveSession()",
        "Forces the player to leave the current session they're in.",
        "void leaveSession()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getDistanceFromPlayer",
        "getPlayerDistanceFromPlayer($1,$2)",
        "Returns a float value of the distance from one player to another, expects PlayerIndex (Not PeerIndex or Datum)",
        "float getPlayerDistanceFromPlayer(int playerIndex, int playerIndex2)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerGrenades",
        "setPlayerGrenades($1,$2,$3,$4)",
        "Sets the specified players grenades, expects playerIndex, grenade type (Global enum exists), grenade count and true/false for reset of equipment.",
        "void setPlayerGrenades(int playerIndex, BYTE type, BYTE count, bool resetEquipment)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "destroyObject",
        "destroyObject($0)",
        "Destroys/deletes the object of the given datum.",
        "void destroyObject(int datum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "updatePlayerScore",
        "updatePlayerScore($0)",
        "Adds 1 to the player's current score in slayer based variants.",
        "void updatePlayerScore(int PlayerDatumIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "objectValidateType",
        "objectValidateType($0)",
        "Validates that an object is the type specified.",
        "bool objectValidateType(int objectDatum,int type)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "spawnObjectAtPlayer",
        "spawnObjectAtPlayer($1,$2)",
        "Spawns an object at the position of the player specified using the specified object datum.",
        "void spawnObjectAtPlayer(int player_datum, int object_datum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "objectValidateDatum",
        "objectValidateDatum($1,$2)",
        "Validates that an object datum is the base datum specified returns true if the object is validated.",
        "bool objectValidateDatum(int objectBaseDatum,int objectDynamicDatum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getMapType",
        "getMapType()",
        "Gets the current map type that's loaded compare with scnr_type.MainMenu or scnr_type.Multiplayer.",
        "int getMapType()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "addDebugText",
        "addDebugText($0)",
        "Adds debug text to the in-game console, press F2 to view it.",
        "void addDebugText(string Msg)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "givePlayerWeapon",
        "givePlayerWeapon($0,$1,$2)",
        "Gives the player the weapon datum specificed see (Weapon enum in globals), last argument removes current equipment before giving player weapon.",
        "void givePlayerWeapon(int playerIndex,int weaponDatum,bool bResetEquipment)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "playSound",
        "playSound($0,$1)",
        "Plays a sound on the local client, sounds are required to be encoded in a specific format refer to script docs on github. The sleep parameter will wait X amount of time in seconds before playing the sound.",
        "void playSound(string path,int Sleep)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "disableSound",
        "disableSound($0)",
        "Disables the specified Sound see Sound enum in globals for a list of sounds.",
        "void disableSound(int soundDatum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerCount",
        "getPlayerCount()",
        "Gets the current player count in the game.",
        "int getPlayerCount()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerNameFromIndex",
        "getPlayerNameFromIndex($1)",
        "Gets the specified players name using their playerIndex.",
        "string getPlayerNameFromIndex(int playerIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "localPeerIsSessionHost",
        "localPeerIsSessionHost()",
        "Checks if the local player is the session host and returns true if they are.",
        "bool localPeerIsSessionHost()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getLocalPeerIndex",
        "getLocalPeerIndex()",
        "Gets the local players peerIndex, not to be confused with DatumIndex or playerIndex.",
        "int getLocalPeerIndex()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sendTeamChange",
        "sendTeamChange($0,$1)",
        "Sends a team change request to the specified peerIndex.",
        "void sendTeamChange(int peerIndex,int teamIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setLocalTeam",
        "setLocalTeam($0,$1)",
        "Sets the local team for the specified peerIndex.\n",
        "void setLocalTeam(int peerIndex,int teamIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getLocalTeam",
        "getLocalTeam($0)",
        "Get's the local player's current team.",
        "int getLocalTeam()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerXUID",
        "getPlayerXUID($0)",
        "Gets the player's XUID using their index..\n",
        "long long getPlayerXUID(int playerIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerTeamFromXUID",
        "getPlayerTeamFromXUID($0)",
        "Gets the player's team from their XUID.",
        "int getPlayerTeamFromXUID(long long XUID)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setUnitSpeedPatch",
        "setUnitSpeedPatch(${1|true,false|})",
        "Turns on or off a patch which prevents the game from updating unit speed.",
        "void setUnitSpeedPatch(bool bEnabled)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setUnitSpeed",
        "setUnitSpeed($0,$1)",
        "Sets the specified playerIndex's speed.",
        "void setUnitSpeed(int playerIndex, float speed)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "toggleWeaponPickup",
        "toggleWeaponPickup()",
        "Toggles whether or not to allow players to pickup weapons off the ground. (Only impacts local client)",
        "void toggleWeaponPickup()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setWeaponPickup",
        "setWeaponPickup($0)",
        "Sets whether or not players are allowed to pickup weapons from the ground. (Only impacts local client)",
        "void setWeaponPickup(bool bEnabled)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setIndicatorVisibility",
        "setIndicatorVisibility($0)",
        "Sets whether or not to display the indicators above player's heads. (Only impacts local client)",
        "void setIndicatorVisiblity(bool bEnabled)",
        vscode.CompletionItemKind.Method),
    //#endregion Interface
    //#region Text
    new doc.documentationItem(
        "setPlayerBiped",
        "setPlayerBiped($0,$1)",
        "Sets player's biped (client only)\nSee Biped enum in globals.",
        "void setPlayerBiped(int playerIndex, int bipedIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "isObjectBiped",
        "isObjectBiped($0)",
        "Checks if the specified datum is a Biped.\nReturn: true if the object is biped.",
        "bool isObjectBiped(int objectDatum)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sqRandom",
        "sqRandom($0,$1)",
        "Generates a random number given a minimum and maximum.",
        "int sqRandom(int min,int max)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "playerIsActive",
        "playerIsActive($0)",
        "Checks if the specified player is active in the game.",
        "bool playerIsActive(int playerIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPeerIndex",
        "getPeerIndex($0)",
        "Gets a peer index from playerIndex.",
        "int getPeerIndex(int playerIndex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerTeam",
        "getPlayerTeam($0)",
        "Gets the specified player's team based on playerIndex.",
        "int getPlayerTeam(int playerIndex)",
        vscode.CompletionItemKind.Method),
]

module.exports = {
    Func
}