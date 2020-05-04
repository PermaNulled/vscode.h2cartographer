const doc = require("./Items/Item");
const vscode = require("vscode");

var Func = [
    //#region Game
    new doc.documentationItem(
        "setTime",
        "setTime($0)",
        "Sets time in game.",
        "void setTime(hour, min[, day])",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getTime",
        "getTime()",
        "Gets current game time.",
        "table hour,min,day} getTime()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getMaxSlots",
        "getMaxSlots()",
        "Gets the number of server slots.",
        "int getMaxSlots()",
        vscode.CompletionItemKind.Method),
    //#endregion Game
    //#region Event
    new doc.documentationItem(
        "addEvent",
        "addEvent($0)",
        "Registers new event.",
        "void addEvent(string eventName)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "removeEvent",
        "removeEvent($0)",
        "Remove existing event.",
        "void removeEvent(string eventName)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "callEvent",
        "callEvent($1,$0)",
        "Calling already created event.",
        "void callEvent(string eventName, args...)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "addEventHandler",
        "addEventHandler($1,$0)",
        "Add a handler to the specified event.",
        "void addEventHandler(string eventName, function handler)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "cancelEvent",
        "cancelEvent()",
        "Cancel current event.",
        "void cancelEvent()",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "eventValue",
        "eventValue($0)",
        "Changes event value.",
        "void eventValue(int value)",
        vscode.CompletionItemKind.Method),
    //#endregion Event
    //#region Timer
    new doc.documentationItem(
        "setTimer",
        "setTimer($1,$2,$0)",
        "Create a new timer.",
        "int setTimer(function handler, int interval, int executeTimes)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "killTimer",
        "killTimer($0)",
        "Kills existing timer.",
        "void killTimer(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setTimerInterval",
        "setTimerInterval($1,$0)",
        "Change current interval of the timer. Interval is time to wait, until next timer call.",
        "void setTimerInterval(int id, int interval)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getTimerInterval",
        "getTimerInterval($0)",
        "Gets timer interval. Interval is time to wait, until next timer call.",
        "int getTimerInterval(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setTimerExecuteTimes",
        "setTimerExecuteTimes($1,$0)",
        "Change the number of timer execution times. Which exactly mean, how many times timer will be called.",
        "void setTimerExecuteTimes(int id, int times)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getTimerExecuteTimes",
        "getTimerExecuteTimes($0)",
        "Get current timer execution times. Execution times is a number of timer calls, that will be executed.",
        "int getTimerExecuteTimes(int id)",
        vscode.CompletionItemKind.Method),
    //#endregion Timer
    //#region Cryptography
    new doc.documentationItem(
        "md5",
        "md5($0)",
        "Calculates the Md5 hash of the specified text. Hash lenght is 32 hex chars.",
        "string md5(string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sha1",
        "sha1($0)",
        "Calculates the Sha1 hash of the specified text. Hash lenght is 40 hex chars.",
        "string sha1(string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sha256",
        "sha256($0)",
        "Calculates the Sha256 hash of the specified text. Hash lenght is 64 hex chars.",
        "string sha256(string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sha384",
        "sha384($0)",
        "Calculates the Sha384 hash of the specified text. Hash lenght is 96 hex chars.",
        "string sha384(string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sha512",
        "sha512($0)",
        "Calculates the Sha512 hash of the specified text. Hash lenght is 128 hex chars.",
        "string sha512(string text)",
        vscode.CompletionItemKind.Method),
    //#endregion Cryptography
    //#region Utility
    new doc.documentationItem(
        "rgbToHex",
        "rgbToHex($1:255$2:255$0:255})",
        "Calculates the hex representation of the specified color in r, g, b model.",
        "string rgbToHex(int r, int g, int b)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "hexToRgb",
        "hexToRgb($0)",
        "Calculates the r, g, b color model of the specified hex representation.",
        "table r, g, b} hexToRgb(string hex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "sscanf",
        "sscanf($1,$0)",
        "Method splits the specified text, interprets it according to format and stores the results into array.",
        "array sscanf(string format, string text)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getTickCount",
        "getTickCount()",
        "Gets the CPU time of the actual machine in milliseconds.",
        "int getTickCount()",
        vscode.CompletionItemKind.Method),
    //#endregion Utility
    //#region Math
    new doc.documentationItem(
        "getDistance3d",
        "getDistance3d($1,$2,$3,$4,$5,$0)",
        "Method returning the distance between quoted values.",
        "float getDistance3d(float x1, float y1, float z1, float x2, float y2, float z2)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getDistance2d",
        "getDistance2d($1,$2,$3,$0)",
        "Method returning the distance between quoted values.",
        "float getDistance2d(float x1, float y1, float x2, float y2)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getVectorAngle",
        "getVectorAngle($1,$2,$3,$0)",
        "Method calculates the angle based on the positions of the two objects.",
        "float getVectorAngle(float x1, float y1, float x2, float y2)",
        vscode.CompletionItemKind.Method),
    //#endregion Math
    //#region Player
    new doc.documentationItem(
        "isPlayerUnconscious",
        "isPlayerUnconscious($0)",
        "Check if player is in unconscious state.",
        "bool isPlayerUnconscious(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "isPlayerDead",
        "isPlayerDead($0)",
        "Gets true if the player is dead and false if he is alive.",
        "bool isPlayerDead(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerAniId",
        "getPlayerAniId($0)",
        "Gets the animation id.",
        "int getPlayerAniId(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerArmor",
        "getPlayerArmor($0)",
        "Gets the armor of the player.",
        "int getPlayerArmor(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerHelmet",
        "getPlayerHelmet($0)",
        "Gets the Helmet of the player.",
        "int getPlayerHelmet(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerShield",
        "getPlayerShield($0)",
        "Gets the Shield of the player.",
        "int getPlayerShield(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerMeleeWeapon",
        "getPlayerMeleeWeapon($0)",
        "Gets the Melee Weapon of the player.",
        "int getPlayerMeleeWeapon(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerRangedWeapon",
        "getPlayerRangedWeapon($0)",
        "Gets the Ranged Weapon of the player.",
        "int getPlayerRangedWeapon(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "equipArmor",
        "equipArmor($1,$0)",
        "Change/equips player armor.",
        "bool equipArmor(int id, int instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "unequipArmor",
        "unequipArmor($0)",
        "Unequips armor on local player or npc.",
        "void unequipArmor(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "equipMeleeWeapon",
        "equipMeleeWeapon($1,$0)",
        "Change/equips melee weapon on local player or npc.",
        "bool equipMeleeWeapon(int id, int instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "unequipMeleeWeapon",
        "unequipMeleeWeapon($0)",
        "Unequips melee weapon on local player or npc.",
        "void unequipMeleeWeapon(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "equipRangedWeapon",
        "equipRangedWeapon($1,$0)",
        "Change/equips ranged weapon on local player or npc.",
        "bool equipRangedWeapon(int id, int instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "unequipRangedWeapon",
        "unequipRangedWeapon($0)",
        "Unequips ranged weapon on local player or npc.",
        "void unequipRangedWeapon(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "equipHelmet",
        "equipHelmet($1,$0)",
        "Change/equips helmet on local player or npc.",
        "bool equipHelmet(int id, int instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "unequipHelmet",
        "unequipHelmet($0)",
        "Unequips helmet on local player or npc.",
        "void unequipHelmet(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "equipShield",
        "equipShield($1,$0)",
        "Equips shield on local player or npc.",
        "bool equipShield(int id, int instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "unequipShield",
        "unequipShield($0)",
        "Unequips shield on local player or npc.",
        "void unequipShield(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerPing",
        "getPlayerPing($0)",
        "is used to get the current player ping.",
        "int getPlayerPing(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerName",
        "setPlayerName($1,$0)",
        "Changes the nickname of the player.",
        "void setPlayerName(int id, string name)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerName",
        "getPlayerName($0)",
        "Gets the nickname of the player.",
        "string getPlayerName(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerColor",
        "setPlayerColor($1,$2:255$3:255$0:255})",
        "Changes the color, the name of the specified player is displayed in.",
        "void setPlayerColor(int id, int r, int g, int b)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerColor",
        "getPlayerColor($0)",
        "Return the table with nickname colors.",
        "table r, g, b} getPlayerColor(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerPosition",
        "setPlayerPosition($1,$2,$3,$0)",
        "Sets the given player's absolute position to the given coordinates.",
        "void setPlayerPosition(int id, float x, float y, float z)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerPosition",
        "getPlayerPosition($0)",
        "Gets the given player's absolute position.",
        "table x, y, z} getPlayerPosition(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerAngle",
        "setPlayerAngle($1,$0)",
        "Change player angle.",
        "void setPlayerAngle(int id, float angle)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerAngle",
        "getPlayerAngle($0)",
        "Gets the angle of the player.",
        "float getPlayerAngle(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerScale",
        "setPlayerScale($1,$2,$0)",
        "Sets new scale for player.",
        "void setPlayerScale(float x, float y, float z)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerScale",
        "getPlayerScale($0)",
        "Gets the x-, y- and z-scale of the player.",
        "{table x, y, z} getPlayerScale(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerInstance",
        "getPlayerInstance($0)",
        "Gets the instance of the player, for example \"PC_HERO\" for humans, or \"GOBBO_GREEN\" for green goblins.",
        "string getPlayerInstance(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerInstance",
        "setPlayerInstance($1,$0)",
        "Sets new instance of the player, for example \"PC_HERO\" for humans, or \"GOBBO_GREEN\" for green goblins.",
        "void setPlayerInstance(int pid, string instance)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerVisual",
        "setPlayerVisual($1,$2,$3,$4,$0)",
        "Sets the given player's visual.",
        "void setPlayerVisual(int pid, string bodyModel, int bodyTxt, string headModel, int headTxt)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerVisual",
        "getPlayerVisual($0)",
        "Gets the given player's visual.",
        "table bodyModel, bodyTxt, headModel, headTxt} getPlayerVisual(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerFatness",
        "setPlayerFatness($1,$0:1.0})",
        "Change player fatness.",
        "void setPlayerFatness(int pid, float fatness)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerFatness",
        "getPlayerFatness($0)",
        "Gets the fatness of the player.",
        "float getPlayerFatness(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerHealth",
        "getPlayerHealth($0)",
        "Gets player's health.",
        "int getPlayerHealth(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerHealth",
        "setPlayerHealth($1, $0)",
        "Sets new health for player.",
        "void setPlayerHealth(int pid, int health)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerMaxHealth",
        "getPlayerMaxHealth($0)",
        "Gets player's Max health.",
        "int getPlayerMaxHealth(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerMaxHealth",
        "setPlayerMaxHealth($1, $0)",
        "Sets new Max Health to player.",
        "void setPlayerMaxHealth(int pid, int health)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerMana",
        "getPlayerMana($0)",
        "Gets the hero or npc mana points.",
        "int getPlayerMana(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerMana",
        "setPlayerMana($1, $0)",
        "Sets the hero or npc mana points.",
        "void setPlayerMana(int id, int mana)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerMaxMana",
        "getPlayerMaxMana($0)",
        "Gets the hero or npc max mana points.",
        "int getPlayerMaxMana(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerMaxMana",
        "setPlayerMaxMana($1, $0)",
        "Sets the hero or npc max mana points.",
        "void setPlayerMaxMana(int id, int mana)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerWeaponMode",
        "getPlayerWeaponMode($0)",
        "Gets the weapon mode of the player.",
        "int getPlayerWeaponMode(int pid)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerWeaponMode",
        "setPlayerWeaponMode($1,$0)",
        "Sets player's weapon mode.",
        "void setPlayerWeaponMode(int pid, int weaponMode)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerStrength",
        "getPlayerStrength($0)",
        "Gets player's strength.",
        "int getPlayerStrength(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerStrength",
        "setPlayerStrength($1, $0)",
        "Sets new strength to player.",
        "void setPlayerStrength(int pid, int str)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerDexterity",
        "getPlayerDexterity($0)",
        "Gets player's dexterity.",
        "int getPlayerDexterity(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerDexterity",
        "setPlayerDexterity($1, $0)",
        "Sets new dexterity to player.",
        "void setPlayerDexterity(int pid, int dex)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "getPlayerSkillWeapon",
        "getPlayerSkillWeapon($0)",
        "Gets player's weapon skill.",
        "int getPlayerSkillWeapon(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerSkillWeapon",
        "setPlayerSkillWeapon($1, $2, $0)",
        "Sets new weapon skill to player.",
        "void setPlayerSkillWeapon(int id, int skill_id, int value)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "setPlayerWeaponMode",
        "setPlayerWeaponMode($1, $0)",
        "Sets new weapon skill to player.",
        "void setPlayerWeaponMode(int id, int wm);",
        vscode.CompletionItemKind.Method),
    //#endregion Player
    new doc.documentationItem(
        "queue",
        "queue()",
        "Queue is a collection, with pattern first in first out.",
        "queue()",
        vscode.CompletionItemKind.Class),
    new doc.documentationItem(
        "Items.id",
        "Items.id($0)",
        "Gets item id by it's instance. Items must be registered in items.xml file, in order to be able to, for example: give item for specifc player.",
        "Items.id(string name)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "Items.name",
        "Items.name($0)",
        "Gets item name (instance) by it's id. Items must be registered in items.xml file, in order to be able to, for example: give item for specifc player.",
        "Items.name(int id)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "Mds.id",
        "Mds.id($0)",
        "Gets mds id by it's file name. Mds must be registered in mds.xml file, in order to be able to, for example: apply overlay for specifc player.",
        "Mds.id(string name)",
        vscode.CompletionItemKind.Method),
    new doc.documentationItem(
        "Mds.name",
        "Mds.name($0)",
        "Gets mds file name by it's id. Mds must be registered in mds.xml file, in order to be able to, for example: apply overlay for specifc player.",
        "Mds.name(int id)",
        vscode.CompletionItemKind.Method),
]

module.exports = {
    Func,
}