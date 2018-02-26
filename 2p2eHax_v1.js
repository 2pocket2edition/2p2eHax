
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
 * -----=====≡≡≡≡≡ 2p2eHax ≡≡≡≡≡=====-----
 *
 * By DaPorkchop_
 * Based on AlphaHack by ArceusMatt
 * Distributed under the MIT license
 *
 * -----=====≡≡≡≡≡ 2p2eHax ≡≡≡≡≡=====-----
 */

var MainActivity = ctx;

//Get language of client side minecraft
var getLanguage = ModPE.getLanguage();

//get version of client side minecraft
var getVer = ModPE.getMinecraftVersion();

//GUI android ModPE lib;
//xml button
var Button = android.widget.Button;
//xml linearLayout
var LinearLayout = android.widget.LinearLayout;
//xml relative layout
var RelativeLayout = android.widget.RelativeLayout;
//xml popup window
var PopupWindow = android.widget.PopupWindow;
//xml scroll view
var ScrollView = android.widget.ScrollView;
//xml textview
var TextView = android.widget.TextView;
//xml checkbox
var CheckBox = android.widget.CheckBox;
//java toast
var Toast = android.widget.Toast;
//modpe android runnable
var Runnable = java.lang.Runnable;
//java view
var View = android.view.View;
//xml colorDrawable
var ColorDrawable = android.graphics.drawable.ColorDrawable;
//xml color
var Color = android.graphics.Color;
//xml gravity
var Gravity = android.view.Gravity;
//java intent
var Intent = android.content.Intent;
//java uri
var Uri = android.net.Uri;
//xml switch
var Switch = android.widget.Switch;
//xml edittext
var EditText = android.widget.EditText;
var Dialog = android.app.Dialog;
//xml webview
var WebView = android.webkit.WebView;
var Alert = android.app.AlertDialog.Builder;

//screen dimensions
var height = android.content.res.Resources.getSystem().getDisplayMetrics().heightPixels;
var width = android.content.res.Resources.getSystem().getDisplayMetrics().widthPixels;

//Defines
//define gui incase of error
var GUI;

//define menu incase of error
var menu;
//define active incase of error
var active;
var update;
var newUpdate;
//define counting variable
var num0 = 0;
//idek
var vidd = true;
//define mcpe text color variable
var viddd = "§2";
//define spam text name
var text = "§4§kI§r§c 2p2eHax §4§kI§r";
//define an auto space variable
var space = " ";
//define version
var version = "1.0.0";
var offtime = 0;
//define an empty text variable
var horseheart = "";
var newage = "";
var vid = "";
var seconds = "1000";
var numhack = 0;
//define client name for later use
var client = "§l§0<§c2p2eHax§0>§r§f ";
//define copyright sign
var copyright = "©";
//define trademark for later use
var trademark = "2p2eHax ™";
var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "2p2eHax_v1.js");
//define op perm
var perm = "*";
//define something
var notex;
var notey;
var notez;
var oreId = "";
var numhack2 = 0;
var TTick = 0;
var hide = false;
var newAction = "";
var actionHeart = "";
var newAction2 = "";
var cidm8 = "";
var aimrange = '7';

var playerDir = [0, 0, 0];
var DEG_TO_RAD = 3.141592 / 180;

var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;

var onBackground = {
    returnAddress: function() {
        /*godsofts json to js ip viewer, do not copy! this will only work in this mod!*/
        return getIp(function(info) {
            clientMessage(
                "toasters FTW" 
            )
        });
    },
    returnClient: function() {
        return getClient();
    },
    returnDevice: function() {
        return ModPE.getOS();
    },
    returnPing: function() {
        return null;
    }
}

//player check utils
var Utils = {
    Block: {
        isLiquid: function(id) {
            if (id >= 8 && id <= 11) return true;
            return false;
        }
    },
    Player: {
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
                return true;
            } else {
                return false;
                m
            }
        },
        isOnGround: function() {
            var y = getPlayerY();
            while (y > 1) y -= 1;
            if ((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
                return true;
            }
            if ((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) {
                return true;
            } else {
                return false;
            }
        },
        isCollidedHorizontally: function() {
            var x = getPlayerX();
            var z = getPlayerZ();
            var blockX = Math.round(x - 0.5);
            var blockZ = Math.round(z - 0.5);
            while (x < 1) x += 1;
            while (z < 1) z += 1;
            while (x > 1) x -= 1;
            while (z > 1) z -= 1;

            if (Math.round(x * 100) == 31) x -= 0.01;
            if (Math.round(z * 100) == 31) z -= 0.01;
            if (Math.round(x * 100) == 69) x += 0.01;
            if (Math.round(z * 100) == 69) z += 0.01;
            if (Math.round(x * 100) == 30) blockX--;
            if (Math.round(z * 100) == 30) blockZ--;
            if (Math.round(x * 100) == 70) blockX++;
            if (Math.round(z * 100) == 70) blockZ++;
            //clientMessage(blockX+";"+blockZ);
            if (getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

            if (Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

            if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
            if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
            return false;
        }
    }
};

//define on or off variables
var liquidwalk = false;
var xray = false;
var onlyday = false;
var onlynight = false;
var chestesp = false;
var noclip = false;
var yawpitch = false;
var airwalk = false;
var changeSpeed = false;
var brightness = false;
var autowalk = false;
var jetpack = false;
var nametags = false;
var hitparticles = false;

var elytraPlus = false;
var step = false;

//ParticleType.angryVillager;
var particle1 = false;
//ParticleType.bubble;
var particle2 = false;
//ParticleType.cloud;
var particle3 = false;
//ParticleType.crit;
var particle4 = false;
//ParticleType.dripLava;
var particle5 = false;
//ParticleType.dripWater;
var particle6 = false;
//ParticleType.enchantmenttable;
var particle7 = false;
//ParticleType.fallingDust;
var particle8 = false;
//ParticleType.flame;
var particle9 = false;
//ParticleType.happyVillager;
var particle10 = false;
//ParticleType.heart;
var particle11 = false;
//ParticleType.hugeexplosion;
var particle12 = false;
//ParticleType.hugeexplosionSeed;
var particle13 = false;
//ParticleType.ink;
var particle14 = false;
//ParticleType.itemBreak;
var particle15 = false;
//ParticleType.lava;
var particle16 = false;
//ParticleType.mobFlame;
var particle17 = false;
//ParticleType.note;
var particle18 = false;
//ParticleType.portal;
var particle19 = false;
//ParticleType.rainSplash;
var particle20 = false;
//ParticleType.redstone;
var particle21 = false;
//ParticleType.slime;
var particle22 = false;
//ParticleType.smoke;
var particle23 = false;
//ParticleType.snowballpoof;
var particle24 = false;
//ParticleType.spell;
var particle25 = false;
//ParticleType.splash;
var particle26 = false;
//ParticleType.suspendedTown;
var particle27 = false;
//ParticleType.terrain;
var particle28 = false;
//ParticleType.waterWake;
var particle29 = false;
//largeexplode
var particle30 = false;
//spell2
var particle31 = false;
//spell3
var particle32 = false;

//define mod menu color changes and sizes
var GUIColor = Color.TRANSPARENT;

var default1 = true;
var mcpetheme = false;

var btnPos = Gravity.RIGHT;
var activePos = Gravity.LEFT;

var GUIColor1 = Color.TRANSPARENT;
var GUIColor2 = Color.BLACK;
var GUIColor3 = Color.WHITE;
var GUIColor4 = Color.RED;
var GUIColor5 = Color.BLUE;
var GUIColor6 = Color.GRAY;
var GUIColor7 = Color.LTGRAY;
var GUIColor8 = Color.YELLOW;
var GUIColor9 = Color.CYAN;
var GUIColor10 = Color.DKGRAY;
var GUIColor11 = Color.GREEN;
var GUIColor12 = Color.MAGENTA;

var GUIName = Color.WHITE;

var GUIPos = Gravity.CENTER;

var GUIBtns = Color.BLUE;

var GUIBtns2 = Color.BLACK;
var GUIBtns3 = Color.WHITE;
var GUIBtns4 = Color.RED;
var GUIBtns5 = Color.BLUE;
var GUIBtns6 = Color.GRAY;
var GUIBtns7 = Color.LTGRAY;
var GUIBtns8 = Color.YELLOW;
var GUIBtns9 = Color.CYAN;
var GUIBtns10 = Color.DKGRAY;
var GUIBtns11 = Color.GREEN;
var GUIBtns12 = Color.MAGENTA;

var GUIStroke = Color.BLUE;

var GUIStroke1 = Color.BLUE;
var GUIStroke2 = Color.BLACK;
var GUIStroke3 = Color.WHITE;
var GUIStroke4 = Color.RED;
var GUIStroke5 = Color.BLUE;
var GUIStroke6 = Color.GRAY;
var GUIStroke7 = Color.LTGRAY;
var GUIStroke8 = Color.YELLOW;
var GUIStroke9 = Color.CYAN;
var GUIStroke10 = Color.DKGRAY;
var GUIStroke11 = Color.GREEN;
var GUIStroke12 = Color.MAGENTA;

var GUISize = "2";

var GUIText = Color.BLUE;

var GUIText2 = Color.BLACK;
var GUIText3 = Color.WHITE;
var GUIText4 = Color.RED;
var GUIText5 = Color.BLUE;
var GUIText6 = Color.GRAY;
var GUIText7 = Color.LTGRAY;
var GUIText8 = Color.YELLOW;
var GUIText9 = Color.CYAN;
var GUIText10 = Color.DKGRAY;
var GUIText11 = Color.GREEN;
var GUIText12 = Color.MAGENTA;

//fixed color changing menus making on/off buttons look weird;
var extraBtns = Color.RED;
var extraBtns2 = Color.GREEN;

var extraBtns3 = Color.BLACK;
var extraBtns4 = Color.BLUE;

//tracer draw function || variable
var AlphaHack = {};
AlphaHack.drawTracer = function(x, y, z, groundMode, particleName) {
    for (var count = 0; count <= 25; count++) {
        Level.addParticle(ParticleType.flame, x, y, z, (getPlayerX() - x) / count, groundMode ? 0 : ((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);
    }
}

//run mod message or other on world startup
function newLevel() {
    clientMessage("§c-----=====≡≡≡≡≡ 2p2eHax ≡≡≡≡≡=====-----§f§r");
    //clientMessage(client + "\n§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
    //clientMessage("§2≡≡=======»§a>§9 §a§kAlpha§r §a<§2«======≡≡§f§r\n");
}

//change mcpe color text with the remaining text
ModPE.langEdit("menu.copyright", "§4§kII §r§c2p2eHax §4§kII§r§f");
ModPE.langEdit("selectServer.edit", viddd + ModPE.getI18n("selectServer.edit"));
ModPE.langEdit("selectServer.deleteButton", "§c" + ModPE.getI18n("selectServer.deleteButton"));
ModPE.langEdit("menu.play", viddd + ModPE.getI18n("menu.play"));
ModPE.langEdit("menu.options", viddd + ModPE.getI18n("menu.options"));
ModPE.langEdit("menu.skins", viddd + ModPE.getI18n("menu.skins"));
ModPE.langEdit("menu.store", viddd + ModPE.getI18n("menu.store"));
ModPE.langEdit("menu.achievements", viddd + ModPE.getI18n("menu.achievements"));
ModPE.langEdit("menu.launcherOptions", viddd + ModPE.getI18n("menu.launcherOptions"));
ModPE.langEdit("menu.settings", viddd + ModPE.getI18n("menu.settings"));
ModPE.langEdit("menu.playdemo", viddd + ModPE.getI18n("menu.playdemo"));
ModPE.langEdit("menu.resetdemo", viddd + ModPE.getI18n("menu.resetdemo"));
ModPE.langEdit("menu.returnToGame", viddd + ModPE.getI18n("menu.returnToGame"));
ModPE.langEdit("menu.shareToLan", viddd + ModPE.getI18n("menu.shareToLan"));
ModPE.langEdit("menu.online", viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.realms", viddd + ModPE.getI18n("menu.realms"));
ModPE.langEdit("menu.playOnRealms", viddd + ModPE.getI18n("menu.playOnRealms"));
ModPE.langEdit("menu.multiplayer", viddd + ModPE.getI18n("menu.multiplayer"));
ModPE.langEdit("menu.online", viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.online", viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("pauseScreen.quit", viddd + ModPE.getI18n("pauseScreen.quit"));
ModPE.langEdit("pauseScreen.options", viddd + ModPE.getI18n("pauseScreen.options"));
ModPE.langEdit("pauseScreen.back", viddd + ModPE.getI18n("pauseScreen.back"));
ModPE.langEdit("pauseScreen.invite", viddd + ModPE.getI18n("pauseScreen.invite"));
ModPE.langEdit("pauseScreen.achievements", viddd + ModPE.getI18n("pauseScreen.achievements"));
ModPE.langEdit("deathScreen.quit", viddd + ModPE.getI18n("deathScreen.quit"));
ModPE.langEdit("deathScreen.respawn", viddd + ModPE.getI18n("deathScreen.respawn"));
ModPE.langEdit("deathScreen.message", viddd + ModPE.getI18n("deathScreen.message"));
ModPE.langEdit("chatScreen.hide", viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("pauseScreen.invite", viddd + ModPE.getI18n("pauseScreen.invite"));
ModPE.langEdit("createWorldScreen.game.settings", viddd + ModPE.getI18n("createWorldScreen.game.settings"));
ModPE.langEdit("createWorldScreen.gameMode.creative", viddd + ModPE.getI18n("createWorldScreen.gameMode.creative"));
ModPE.langEdit("createWorldScreen.gameMode.survival", viddd + ModPE.getI18n("createWorldScreen.gameMode.survival"));
ModPE.langEdit("deathScreen.message", "§c§lWasted");
ModPE.langEdit("commands.op.success", "§l" + ModPE.getI18n("commands.op.success"));
ModPE.langEdit("commands.banip.success", "§l" + ModPE.getI18n("commands.banip.success"));
ModPE.langEdit("commands.banip.success.players", "§l" + ModPE.getI18n("commands.banip.success.players"));
ModPE.langEdit("playscreen.new", viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("skins.restore.button", viddd + ModPE.getI18n("skins.restore.button"));
ModPE.langEdit("externalServerScreen.addServer", viddd + ModPE.getI18n("externalServerScreen.addServer"));
ModPE.langEdit("playscreen.quit", viddd + ModPE.getI18n("playscreen.quit"));
ModPE.langEdit("chatScreen.hide", viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("xbox.signin", viddd + ModPE.getI18n("xbox.signin"));
ModPE.langEdit("xbox.signout", viddd + ModPE.getI18n("xbox.signout"));
ModPE.langEdit("entity.generic.name", viddd + ModPE.getI18n("entity.generic.name"));
ModPE.langEdit("gui.back", viddd + ModPE.getI18n("gui.back"));
ModPE.langEdit("chestScreen.header.large", viddd + ModPE.getI18n("chestScreen.header.large"));
ModPE.langEdit("chestScreen.header.player", viddd + ModPE.getI18n("chestScreen.header.player"));
ModPE.langEdit("chestScreen.header.small", viddd + ModPE.getI18n("chestScreen.header.small"));
ModPE.langEdit("networkWorld.add_friend", viddd + ModPE.getI18n("networkWorld.add_friend"));
ModPE.langEdit("furnaceScreen.header", viddd + ModPE.getI18n("furnaceScreen.header"));
ModPE.langEdit("craftingScreen.header", viddd + ModPE.getI18n("craftingScreen.header"));
ModPE.langEdit("anvilScreen.header", viddd + ModPE.getI18n("anvilScreen.header"));
ModPE.langEdit("enchantingScreen.header", viddd + ModPE.getI18n("enchantingScreen.header"));
ModPE.langEdit("enchantingTableScreen.header", viddd + ModPE.getI18n("enchantingTableScreen.header"));
ModPE.langEdit("enchantScreen.header", viddd + ModPE.getI18n("enchantScreen.header"));
ModPE.langEdit("enchantTableScreen.header", viddd + ModPE.getI18n("enchantTableScreen.header"));
ModPE.langEdit("beaconScreen.header", viddd + ModPE.getI18n("beaconScreen.header"));
ModPE.langEdit("container.beacon", viddd + ModPE.getI18n("container.beacon"));
ModPE.langEdit("container.brewing", viddd + ModPE.getI18n("container.brewing"));
ModPE.langEdit("container.chest", viddd + ModPE.getI18n("container.chest"));
ModPE.langEdit("container.chestDouble", viddd + ModPE.getI18n("container.chestDouble"));
ModPE.langEdit("container.crafting", viddd + ModPE.getI18n("container.crafting"));
ModPE.langEdit("container.dispenser", viddd + ModPE.getI18n("container.dispenser"));
ModPE.langEdit("container.dropper", viddd + ModPE.getI18n("container.dropper"));
ModPE.langEdit("container.enchant", viddd + ModPE.getI18n("container.enchant"));
ModPE.langEdit("container.furnace", viddd + ModPE.getI18n("container.furnace"));
ModPE.langEdit("container.hopper", viddd + ModPE.getI18n("container.hopper"));
ModPE.langEdit("container.inventory", viddd + ModPE.getI18n("container.inventory"));
ModPE.langEdit("container.minecart", viddd + ModPE.getI18n("container.minecart"));
ModPE.langEdit("container.stonecutter", viddd + ModPE.getI18n("container.stonecutter"));
ModPE.langEdit("container.anvil", viddd + ModPE.getI18n("container.anvil"));
ModPE.langEdit("container.enchantingTable", viddd + ModPE.getI18n("container.enchantingTable"));
ModPE.langEdit("container.enchantmentTable", viddd + ModPE.getI18n("container.enchantmentTable"));
ModPE.langEdit("selectWorld.create", viddd + ModPE.getI18n("selectWorld.create"));
ModPE.langEdit("tile.enchanting_table.name", viddd + ModPE.getI18n("tile.enchanting_table.name"));
ModPE.langEdit("tile.anvil.name", viddd + ModPE.getI18n("tile.anvil.name"));
ModPE.langEdit("container.enderchest", viddd + ModPE.getI18n("container.enderchest"));
ModPE.langEdit("cauldronScreen.header", viddd + ModPE.getI18n("cauldronScreen.header"));
ModPE.langEdit("externalServerScreen.header", viddd + ModPE.getI18n("externalServerScreen.header"));
ModPE.langEdit("gui.achievements", viddd + ModPE.getI18n("gui.achievements"));
ModPE.langEdit("gui.done", viddd + ModPE.getI18n("gui.done"));
ModPE.langEdit("skins.picker.title", viddd + ModPE.getI18n("skins.picker.title"));
ModPE.langEdit("skins.picker.accept.button", viddd + ModPE.getI18n("skins.picker.accept.button"));
ModPE.langEdit("options.title", viddd + ModPE.getI18n("options.title"));
ModPE.langEdit("death.attack.mob", viddd + ModPE.getI18n("death.attack.mob"));
ModPE.langEdit("death.attack.fall", viddd + ModPE.getI18n("death.attack.fall"));
ModPE.langEdit("death.attack.explosion", viddd + ModPE.getI18n("death.attack.explosion"));
ModPE.langEdit("death.attack.arrow", viddd + ModPE.getI18n("death.attack.arrow"));
ModPE.langEdit("death.attack.drown", viddd + ModPE.getI18n("death.attack.drown"));
ModPE.langEdit("death.fell.accident.generic", viddd + ModPE.getI18n("death.fell.accident.generic"));
ModPE.langEdit("death.attack.outOfWorld", viddd + ModPE.getI18n("death.attack.outOfWorld"));
ModPE.langEdit("death.attack.onFire", viddd + ModPE.getI18n("death.attack.onFire"));
ModPE.langEdit("death.attack.magic", viddd + ModPE.getI18n("death.attack.magic"));
ModPE.langEdit("death.attack.inWall", viddd + ModPE.getI18n("death.attack.inWall"));
ModPE.langEdit("death.attack.lava", viddd + ModPE.getI18n("death.attack.lava"));
ModPE.langEdit("death.attack.inFire", viddd + ModPE.getI18n("death.attack.inFire"));
ModPE.langEdit("death.attack.cactus", viddd + ModPE.getI18n("death.attack.cactus"));
ModPE.langEdit("death.attack.anvil", viddd + ModPE.getI18n("death.attack.anvil"));
ModPE.langEdit("death.attack.fireball", viddd + ModPE.getI18n("death.attack.fireball"));
ModPE.langEdit("death.attack.generic", viddd + ModPE.getI18n("death.attack.generic"));
ModPE.langEdit("death.attack.lightningBolt", viddd + ModPE.getI18n("death.attack.lightningBolt"));
ModPE.langEdit("death.attack.player", viddd + ModPE.getI18n("death.attack.player"));
ModPE.langEdit("death.attack.starve", viddd + ModPE.getI18n("death.attack.starve"));
ModPE.langEdit("death.attack.thorns", viddd + ModPE.getI18n("death.attack.thorns"));
ModPE.langEdit("death.attack.wither", viddd + ModPE.getI18n("death.attack.wither"));
ModPE.langEdit("gui.version", viddd + ModPE.getI18n("gui.version"));
ModPE.langEdit("menu.version", viddd + ModPE.getI18n("menu.version"));
ModPE.langEdit("pauseScreen.currentWorld", viddd + ModPE.getI18n("pauseScreen.currentWorld"));
ModPE.langEdit("pauseScreen.ipAddress", viddd + ModPE.getI18n("pauseScreen.ipAddress"));
ModPE.langEdit("pauseSCreen.betaFeedback", viddd + ModPE.getI18n("pauseScreen.betaFeedback"));
ModPE.langEdit("death.attack.enderDragon", viddd + ModPE.getI18n("death.attack.enderDragon"));
ModPE.langEdit("selectWorld.gameMode.creative", viddd + ModPE.getI18n("selectWorld.gameMode.creative"));
ModPE.langEdit("selectWorld.gameMode.survival", viddd + ModPE.getI18n("selectWorld.gameMode.survival"));
ModPE.langEdit("options.gamertag", viddd + ModPE.getI18n("options.gamertag"));
ModPE.langEdit("playscreen.new", viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("selectWorld.createNew", viddd + ModPE.getI18n("selectWorld.createNew"));
ModPE.langEdit("addExternalServerScreen.saveButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.saveButtonLabel"));
ModPE.langEdit("addExternalServerScreen.playButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.playButtonLabel"));
ModPE.langEdit("addExternalServerScreen.removeButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.removeButtonLabel"));

//layout dip2px
function dip2px(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var _0x567c = ["\x68\x74\x74\x70\x3A\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E", "\x6E\x65\x74", "\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E", "\x47\x45\x54", "\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4D\x65\x74\x68\x6F\x64", "\x73\x65\x74\x44\x6F\x4F\x75\x74\x70\x75\x74", "\x63\x6F\x6E\x6E\x65\x63\x74", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74\x4C\x65\x6E\x67\x74\x68", "\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D", "\x42\x79\x74\x65", "\x6C\x61\x6E\x67", "\x6E\x65\x77\x49\x6E\x73\x74\x61\x6E\x63\x65", "\x41\x72\x72\x61\x79", "\x72\x65\x66\x6C\x65\x63\x74", "\x72\x65\x61\x64", "", "\x70\x61\x72\x73\x65", "\x73\x75\x63\x63\x65\x73\x73", "\x65\x71\x75\x61\x6C\x73", "\x73\x74\x61\x74\x75\x73", "\x71\x75\x65\x72\x79", "\x63\x6F\x75\x6E\x74\x72\x79", "\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65", "\x45\x72\x72\x6F\x72", "\x6C\x69\x6E\x65\x4E\x75\x6D\x62\x65\x72", "\x73\x74\x61\x72\x74"];

function getIp(_0x9781x2) {
    var _0x9781x3 = new java[_0x567c[10]].Runnable({
        run: function() {
            try {
                var _0x9781x4 = new java[_0x567c[1]].URL(_0x567c[0]);
                var _0x9781x5 = _0x9781x4[_0x567c[2]]();
                _0x9781x5[_0x567c[4]](_0x567c[3]);
                _0x9781x5[_0x567c[5]](true);
                _0x9781x5[_0x567c[6]]();
                _0x9781x5[_0x567c[7]]();
                var _0x9781x6 = _0x9781x5[_0x567c[8]]();
                var _0x9781x7 = java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE, 1024);
                var _0x9781x8 = 0;
                var _0x9781x9;
                while ((_0x9781x8 = _0x9781x6[_0x567c[14]](_0x9781x7)) != -1) {
                    _0x9781x9 = new java[_0x567c[10]].String(_0x9781x7, 0, _0x9781x8)
                };
                var _0x9781xa = JSON[_0x567c[16]](_0x9781x9 + _0x567c[15]);
                if (_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])) {
                    _0x9781x2(new Array(_0x9781xa[_0x567c[20]], _0x9781xa[_0x567c[21]], _0x9781xa[_0x567c[22]]))
                } else {
                    print(_0x567c[23]);
                    _0x9781x2(new Array(_0x567c[23], _0x567c[23], _0x567c[23]))
                }
            } catch (e) {
                clientMessage(e);
                clientMessage(e[_0x567c[24]])
            }
        }
    });
    var _0x9781xb = new java[_0x567c[10]].Thread(_0x9781x3);
    _0x9781xb[_0x567c[25]]()
}

//main icon
var bg64 = "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";
var bg64Processed = new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0), 0, android.util.Base64.decode(bg64, 0).length));

//elytra+ icon
var elytraPlusIcon = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAg9JREFUeJztmzFuwjAUhn9MFIksZapaiaGXoFM35kysbD1BT1Bu0BN04xrZOpVLdOzWTkGKgHSwrSiuAg4Efkt532LIe7afnv/YL4gMXoESPUaxA2AT2Q9LYhAMlqbtvQIkAewA2ETHXTSP0+lZE32u12f1vxSigCaDu+Lz+RwAMBo9AQBWq5eDAy8WbwCAzeZDj+fYQ1GEKMC9YFd+NpsBAJIkcTzqhaO7kpVy6n5pmgIA8jzXfg39r40ooMmQJA+m1QpQSueqLAuvga1fHE/0RNHeWPJT4rwYooAmQ55/AQDieKwdI+2q1H2rCfb7bwDAdrs14/62DvKSiAKaDHYPAGIAgFK6LUu/e9j6KXVnrhRm3HH7KC+IKKDJYPcAQJ8CUaTb4fCm1QR2DyiK3Iwrp0BQ/FOArcxspZamz+aTVsBu9+M1cOV3a1q98ln2XpuHjSjgmIO7F1Sngx+2f2j3vkUUcMzBrngc6zqgUsRhqkpyYq74PUNcG1FAk8E9DezvA1mW1exd9WMhCvB1bLuCrhJCRRRwzOHceza0e96l9wqQBLADYCMJYAfAxrsOCI2B8/3UPzr1XgGSAHYAbCQB7ADYSALYAbCRBLADYBNcJehWeF33cyvG3itAEsAOgE1we4DvU508DXaEJIAdABtJADsANpIAdgBsJAHsANgEVwn60tULz71XwEDeHu85fzFQhXg/JF3oAAAAAElFTkSuQmCC";
var elytraPlusIconProcessed = new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(elytraPlusIcon, 0), 0, android.util.Base64.decode(elytraPlusIcon, 0).length));

//step icon
var stepIcon = "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";
var stepIconProcessed = new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(stepIcon, 0), 0, android.util.Base64.decode(stepIcon, 0).length));

//enchant icon
var enchantIcon = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA3NJREFUeJztm99LU2EYxzc1Ww1dSzST/UgDsTaSgfRD0wupvyCDLoIwC7qQQnYRRuRpBCUhq4tACcuLddV/UNHNaoFEg+kxDNI2vdhmmYVm2ja7cc/zBOd05th8L57zvdnH43vOeXz2fc77vOccjQMGw4aBsUpEByBaZVmQBAYhQtLmJ3sH6AkQHYBo6QkQHYBo6QkQHYBosU9AmfaQ4qrDtRt44UcG2GrB7yYk/yra+dk7gH0Ctq0EDtlNwNXE3k3OCmSVfY+s4II18mW1oHGxdwD7BBS8BKbrOoHT5hRwe+O05r6z8TXg+tqdwMddlcCuDSwHOfo77zizYu8A9gnIuwQ6mrGB+fodGxjfQbR9ahHHnH7vBH7ZEgWmts9FbW4LsJtsn8yzHNg7gH0CNEuguWEXcF1VKXBTjRkH2RBfGPBq7512AUfIMb1h3D7kkYFpOajNCHR7KymHE2b8Lt9N5b52YO8A9gnQLAGaIVu1SXWckqi96SwQSS8Dd857gF/bworHUSuHf5TBSA/X45ip2f/PMuwdwD4BmiVQvsMIfKZ3DHj03gVgawUeRs2utPmhtqeis0Pv/g+Kx5n4vKK474D/OXAgEMBfzD5THJ8VewewT4BmCayu4/LTeaABuKcfbTZ69zywWtNCt9OrPbX9mu8j8P0UriOuPvoJ3N03BOxwOIBjsZjWn6Io9g5gnwBj9hUZSWXAqaNoRasJGyHf8BvgaBSv8LQc6OygJnpVf3wDz2Vcxn1DGzeB7Q31wNT2Yw+8wPEklt7Mtz+K55U2P9k7gH0CND36ahyXlrVWtNOtK+3AvuEgsNrsMJ9U7sklPzYqpZceAk9UlQPbB9H2t/vOKh4nVYJ3ouRFZdsrib0D2CdAcxZQk3MfWrSlER9v3RnBcqCzg5rolXxv/wiw27QHuLtyHDhdilaPL+DN2FhyPZewQdLmJ3sHsE9A3s8Fogm0nMeCzcz1i23Ag0/eAgeDWBpUT/3YwFyznwSenEsCJzJ4rpn41qyuJfYOYJ+AgjwdDn/Cx1KtLryDdLnrGHA6o/xW/gxZMqdtc8DnFvGGalchglQRewewT0DBX5AIyfgOj6MGmyUjGWMx40+JJdK3L8mG7RZ7B7BPQFFfk9tqfy5C7B2gJ0B0AKKlJ0B0AKKlJ0B0AKLFPgFG/b/HmesvIyPtTxr3CTIAAAAASUVORK5CYII=";
var enchantIconProcessed = new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(enchantIcon, 0), 0, android.util.Base64.decode(enchantIcon, 0).length));

//base64 mcpe button
var buttonBg = "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";

function enableMod() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuNo = new Button(ctx);
                menuNo.setTextSize(10);
                menuNo.setText("");
                menuNo.setTextColor(Color.GREEN);
                layout.addView(menuNo);

                Debug = new PopupWindow(layout, dip2px(0), dip2px(0));

                Debug.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                Debug.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 1500);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}
enableMod();

var GUI2;
var GUI3;
var GUI4;

//dismissable or showable function
function showMenuBtn() {
    //main button
    MainActivity.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(MainActivity);
                layout.setOrientation(1);
                var menuBtn = new Button(MainActivity);
                menuBtn.setTextSize(26);
                if (hide == false) menuBtn.setBackgroundDrawable(bg64Processed);
                if (hide == true) menuBtn.setText(" ");
                menuBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        mainMenu();
                        GUI.dismiss();
                        GUI2.dismiss();
                        GUI3.dismiss();
                        GUI4.dismiss();
                    }
                }));
                layout.addView(menuBtn, 0);
                GUI = new PopupWindow(layout, dip2px(45), dip2px(45));
                if (hide == true) menuBtn.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);

                var layout = new LinearLayout(MainActivity);
                layout.setOrientation(1);
                var menuBtn2 = new Button(MainActivity);
                menuBtn2.setTextSize(26);
                if (hide == false) menuBtn2.setBackgroundDrawable(elytraPlusIconProcessed);
                if (hide == true) menuBtn2.setText(" ");
                menuBtn2.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        elytraPlus = !elytraPlus;
                        Toast.makeText(MainActivity, "Elytra+ " + (elytraPlus ? "enabled" : "disabled"), 1).show();
                    }
                }));
                layout.addView(menuBtn2, 0);
                GUI2 = new PopupWindow(layout, dip2px(45), dip2px(45));
                if (hide == true) menuBtn2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI2.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);

                var layout = new LinearLayout(MainActivity);
                layout.setOrientation(1);
                var menuBtn3 = new Button(MainActivity);
                menuBtn3.setTextSize(26);
                if (hide == false) menuBtn3.setBackgroundDrawable(stepIconProcessed);
                if (hide == true) menuBtn3.setText(" ");
                menuBtn3.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        step = !step;
                        Toast.makeText(MainActivity, "Step " + (step ? "enabled" : "disabled"), 1).show();
                    }
                }));
                layout.addView(menuBtn3, 0);
                GUI3 = new PopupWindow(layout, dip2px(45), dip2px(45));
                if (hide == true) menuBtn3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI3.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 64);

                var layout = new LinearLayout(MainActivity);
                layout.setOrientation(1);
                var menuBtn4 = new Button(MainActivity);
                menuBtn4.setTextSize(26);
                if (hide == false) menuBtn4.setBackgroundDrawable(enchantIconProcessed);
                if (hide == true) menuBtn4.setText(" ");
                menuBtn4.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        enchant_menuv2();
                        GUI.dismiss();
                        GUI2.dismiss();
                        GUI3.dismiss();
                        GUI4.dismiss();
                    }
                }));
                layout.addView(menuBtn4, 0);
                GUI4 = new PopupWindow(layout, dip2px(45), dip2px(45));
                if (hide == true) menuBtn4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI4.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 128);
            } catch (err) {
                //Toast.makeText(MainActivity, "An error occured: " + err, 1).show();
                //For some reason there's always an error here, so i'll ignore it
            }
        }
    }));
}
showMenuBtn();

//layout to show active variables

function mainMenu() {
    MainActivity.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayout = new LinearLayout(MainActivity);
                var menuScroll = new ScrollView(MainActivity);
                var menuLayout1 = new LinearLayout(MainActivity);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);

                var title = new TextView(MainActivity);
                title.setTextSize(20);
                title.setText(" 2p2eHax v1 (" + version + ")");
                title.setGravity(Gravity.CENTER);
                title.setTextColor(GUIName);
                menuLayout.addView(title);

                var exit = new Button(MainActivity);
                exit.setText("Exit 2p2eHax");
                exit.setTextColor(Color.RED);
                exit.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        menu.dismiss();
                        showMenuBtn();
                        Toast.makeText(MainActivity, "Closed successfully", 1).show();
                    }
                }));
                menuLayout.addView(exit);

                var line0 = new android.widget.LinearLayout(MainActivity);
                line0.setOrientation(0);

                menuLayout.addView(line0);

                function misc_menu() {
                    MainActivity.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var miscLayout = new LinearLayout(MainActivity);
                                var miscScroll = new ScrollView(MainActivity);
                                var miscLayout1 = new LinearLayout(MainActivity);
                                miscLayout.setOrientation(1);
                                miscLayout1.setOrientation(1);
                                miscScroll.addView(miscLayout);
                                miscLayout1.addView(miscScroll);

                                var exit = new Button(MainActivity);
                                exit.setText("Exit");
                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        misc.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                miscLayout.addView(exit);

                                var credits = new Button(MainActivity);
                                credits.setText("Credits");
                                credits.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        misc.dismiss();
                                        credit_menu();
                                    }
                                });
                                miscLayout.addView(credits);

                                function credit_menu() {
                                    MainActivity.runOnUiThread(new Runnable({
                                        run: function() {
                                            try {
                                                var creditLayout = new LinearLayout(MainActivity);
                                                var creditScroll = new ScrollView(MainActivity);
                                                var creditLayout1 = new LinearLayout(MainActivity);
                                                creditLayout.setOrientation(1);
                                                creditLayout1.setOrientation(1);
                                                creditScroll.addView(creditLayout);
                                                creditLayout1.addView(creditScroll);

                                                var exit = new Button(MainActivity);
                                                exit.setText("Exit");
                                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(v) {
                                                        credit.dismiss();
                                                        showMenuBtn();
                                                    }
                                                });
                                                creditLayout.addView(exit);

                                                var credit1 = new TextView(MainActivity);
                                                credit1.setTextSize(20);
                                                credit1.setText("Godsoft029 for providing JS support & some of his scripts.");
                                                credit1.setTextColor(Color.GREEN);
                                                creditLayout.addView(credit1);

                                                var credit2 = new TextView(MainActivity);
                                                credit2.setTextSize(20);
                                                credit2.setText("Peacestorm / vertex for some of their scripts & ideas.");
                                                credit2.setTextColor(Color.BLUE);
                                                creditLayout.addView(credit2);

                                                var credit3 = new TextView(MainActivity);
                                                credit3.setTextSize(20);
                                                credit3.setText("AJ170 for ideas & adding 'clear inventory'.");
                                                credit3.setTextColor(Color.YELLOW);
                                                creditLayout.addView(credit3);

                                                var credit4 = new TextView(MainActivity);
                                                credit4.setTextSize(20);
                                                credit4.setText("APRIC0CKS for ideas & adding 'glide'.");
                                                credit4.setTextColor(Color.WHITE);
                                                creditLayout.addView(credit4);

                                                var credit5 = new TextView(MainActivity);
                                                credit5.setTextSize(20);
                                                credit5.setText("Johnmacrocraft for korean translate & adding 'block protect'.");
                                                credit5.setTextColor(Color.RED);
                                                creditLayout.addView(credit5);

                                                credit = new PopupWindow(creditLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 1, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                                credit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#000000")));
                                                var bg = new android.graphics.drawable.GradientDrawable();
                                                bg.setColor(Color.TRANSPARENT);
                                                bg.setStroke(10, GUIStroke);
                                                creditLayout1.setBackgroundDrawable(bg);
                                                creditLayout1.setPadding(20, 0, 20, 0);
                                                credit.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                                            } catch (error) {
                                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                                            }
                                        }
                                    }));
                                }

                                var pass = new Button(MainActivity);
                                pass.setText("Brute force (Numbers)");
                                pass.setTextColor(Color.RED);
                                if (hackk == true) pass.setTextColor(Color.GREEN);
                                pass.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        hackk ? hackk = false : hackk = true;
                                        pass.setText("Brute force (Numbers)");
                                        if (hackk == true) {
                                            pass.setTextColor(Color.GREEN);
                                            hackk = true;
                                        }
                                        if (hackk == false) {
                                            pass.setTextColor(Color.RED);

                                            hackk = false;
                                        }
                                    }
                                });
                                miscLayout.addView(pass);

                                var pass2 = new Button(MainActivity);
                                pass2.setText("SQL Inject (Numbers)");
                                pass2.setTextColor(Color.RED);
                                if (hackk2 == true) pass2.setTextColor(Color.GREEN);
                                pass2.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        hackk2 ? hackk2 = false : hackk2 = true;
                                        pass2.setText("SQL Inject (Numbers)");
                                        if (hackk2 == true) {
                                            pass2.setTextColor(Color.GREEN);
                                            hackk2 = true;
                                        }
                                        if (hackk2 == false) {
                                            pass2.setTextColor(Color.RED);

                                            hackk2 = false;
                                        }
                                    }
                                });
                                miscLayout.addView(pass2);

                                var ht1 = new Button(MainActivity);
                                ht1.setText("How to bypass ban");
                                ht1.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to bypass a /ban");
                                        alert.setMessage("OP ban you with /ban\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change your username\n/ban only bans your username.\n-ArceusMatt");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht1);

                                var ht2 = new Button(MainActivity);
                                ht2.setText("How to bypass ip ban");
                                ht2.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to bypass a /ban-ip");
                                        alert.setMessage("OP ip ban you with /ban-ip\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change IP with a VPN\n/ban-ip only bans your public ip address");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht2);

                                var ht3 = new Button(MainActivity);
                                ht3.setText("How to bypass CID/devban");
                                ht3.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to bypass a /devban");
                                        alert.setMessage("You can get out of a cid ban in 3 ways.\n#1 get Unbanned\n#2 server resets\n#3 Go in your file storage and go to Games > com.mojang > minecraftpe > clientId.txt and change the id to any number\nWhen an OP uses /devban on you it bans your device(MCPE Client ID) in the server and puts your ID in a type of saving system that doesn't allow you to join, /devban is a command the server has if they download a plugin\n-Arceus_matt");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht3);

                                var ht4 = new Button(MainActivity);
                                ht4.setText("How to bypass Alias");
                                ht4.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to bypass /alias");
                                        alert.setMessage("Eventually you'll get banned by username,\nYou can hide your username from alias\n#1 Change IP\n#2 server resets\n#3 no longer targeted\nWhen an OP uses /alias on you it shows your usernames by IP in the server, /alias is a command the server has if they download a plugin\n-Arceus_matt");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht4);

                                var ht5 = new Button(MainActivity);
                                ht5.setText("How to delete pg chests");
                                ht5.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to delete pg chests");
                                        alert.setMessage("To delete chests that are locked with /pg command\nPlace water on the block the chest is placed on,\nThen the chest will disappear along with the items inside of the chest.\nThere is no possible way to take the items.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht5);

                                var ht6 = new Button(MainActivity);
                                ht6.setText("How to clear players items");
                                ht6.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to clear players items");
                                        alert.setMessage("To clear the inventory of a player you'll need AlphaHack\ngo on the server with the players username\nOpen AlphaHack and select 'clear inventory'\nThen when you log off all the items will drop or disappear.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht6);

                                var ht7 = new Button(MainActivity);
                                ht7.setText("How to get into claim land");
                                ht7.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        var alert = new android.app.AlertDialog.Builder(MainActivity);
                                        /*alert.setTitle(""); */

                                        var scroll = new android.widget.ScrollView(MainActivity);
                                        var layout = new android.widget.LinearLayout(MainActivity);
                                        layout.setOrientation(1);

                                        alert.setTitle("How to get into claim land");
                                        alert.setMessage("If you're using AH V2 Open the single player menu\nOnce it's opened turn on grief, pick ID 0\nFace the way you want inside the land then turn it off\nPut blocks behind you then go inside the land and relog.\nOnce you join you should be inside the claimed house/base/land.-ArceusMatt\n(This may get patched soon last checked was 12/10/2016)");

                                        alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                                misc.dismiss();
                                            }
                                        });

                                        alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
                                            onClick: function(viewarg) {

                                                dialog.dismiss();
                                            }
                                        });
                                        var dialog = alert.create();
                                        dialog.show();
                                    }
                                });
                                miscLayout.addView(ht7);

                                var cidban = new Button(MainActivity);
                                cidban.setText("CID/dev pardon");
                                cidban.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        for (var hk = 0; hk < 4; hk++) {
                                            if (hk == 3) devpardon();
                                        }
                                        Toast.makeText(MainActivity, "You will crash & be unbanned!", 1).show();
                                    }
                                }));
                                miscLayout.addView(cidban);

                                var sit = new Button(MainActivity);
                                sit.setText("Image lookup");
                                sit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        web3();
                                        //print("Loading web page");
                                    }
                                });
                                miscLayout.addView(sit);

                                function web3() {
                                    var urls2 = new Intent(MainActivity);
                                    urls2.setAction(Intent.ACTION_VIEW);
                                    urls2.setData(Uri.parse("http://www.tineye.com"));
                                    MainActivity.startActivity(urls2);
                                }

                                var sid = new Button(MainActivity);
                                sid.setText("View website code");
                                sid.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        misc.dismiss();
                                        scc();
                                    }
                                });
                                miscLayout.addView(sid);

                                var aniview = new Button(MainActivity);
                                aniview.setText("Watch anime on MCPE");
                                aniview.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        misc.dismiss();
                                        animeView();
                                        Toast.makeText(MainActivity, "Please avoid ads & adjust your zoom", 1).show();
                                    }
                                });
                                miscLayout.addView(aniview);

                                function animeView() {
                                    MainActivity.runOnUiThread(new Runnable({
                                        run: function() {
                                            try {
                                                var animeLayout = new LinearLayout(MainActivity);

                                                var animeScroll = new ScrollView(MainActivity);

                                                var animeLayout1 = new LinearLayout(MainActivity);
                                                animeLayout.setOrientation(1);
                                                animeLayout1.setOrientation(1);

                                                animeScroll.addView(animeLayout);
                                                animeLayout1.addView(animeScroll);

                                                var exit = new Button(MainActivity);
                                                exit.setText("Exit");
                                                exit.setTextColor(Color.RED);
                                                exit.setOnClickListener(new View.OnClickListener({
                                                    onClick: function(viewarg) {

                                                        anime.dismiss();

                                                        showMenuBtn();
                                                    }
                                                }));
                                                animeLayout.addView(exit);

                                                var webs = new android.webkit.WebView(MainActivity);
                                                var webset = webs.getSettings();
                                                webset.setJavaScriptEnabled(true);
                                                webs.setWebChromeClient(new android.webkit.WebChromeClient());
                                                webs.setWebViewClient(new android.webkit.WebViewClient());
                                                /*webset.setUserAgentString(userAgent);*/
                                                webset.setSupportZoom(true);
                                                webset.setBuiltInZoomControls(true);
                                                webset.setDisplayZoomControls(false);
                                                webs.loadUrl('https://watch-anime.net');
                                                animeLayout.addView(webs);

                                                anime = new PopupWindow(animeLayout1, dip2px(500), dip2px(500));

                                                anime = new PopupWindow(animeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 1.4, MainActivity.getWindowManager().getDefaultDisplay().getHeight() / 1.3);
                                                var bg = new android.graphics.drawable.GradientDrawable();
                                                bg.setColor(Color.TRANSPARENT);
                                                bg.setStroke(10, GUIStroke);
                                                animeLayout1.setBackgroundDrawable(bg);
                                                animeLayout1.setPadding(20, 0, 20, 0);
                                                anime.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                                                anime.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
                                            } catch (error) {
                                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                                            }
                                        }
                                    }));
                                }

                                var ip0 = new Button(ctx);
                                ip0.setText("IP lookup");
                                ip0.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        misc.dismiss();
                                        iplu();
                                    }
                                }));
                                miscLayout.addView(ip0);

                                var ip1 = new Button(ctx);
                                ip1.setText("Players list");
                                ip1.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        misc.dismiss();
                                        pip();
                                    }
                                }));
                                miscLayout.addView(ip1);

                                var getCid = new Button(MainActivity);
                                getCid.setText("What's my CID?");
                                getCid.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        onBackground.returnClient();
                                    }
                                }));
                                miscLayout.addView(getCid);

                                var yrip = new android.widget.Button(ctx);
                                yrip.setText("What's my IP?");
                                yrip.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        onBackground.returnAddress();
                                        clientMessage("§cDo Not Share! for your safety.");
                                    }
                                }));
                                miscLayout.addView(yrip);

                                var dejs = new android.widget.Button(ctx);
                                dejs.setText("Decrypt JavaScript");
                                dejs.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        djs()
                                    }
                                }));
                                miscLayout.addView(dejs);

                                function djs() {
                                    ctx.runOnUiThread(new java.lang.Runnable({
                                        run: function() {
                                            var webs = new android.webkit.WebView(ctx);
                                            var webset = webs.getSettings();
                                            webset.setJavaScriptEnabled(true);
                                            webs.setWebChromeClient(new android.webkit.WebChromeClient());
                                            webs.setWebViewClient(new android.webkit.WebViewClient());
                                            webs.loadUrl('http://alexstar.ru/tools/jsunpack/');
                                            /*Site URL*/
                                            new android.app.AlertDialog.Builder(ctx).setView(webs).show();
                                        }
                                    }));
                                }

                                misc = new PopupWindow(miscLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                if (default1 == true) misc.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                if (default1 == false) misc.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                var bg = new android.graphics.drawable.GradientDrawable();
                                bg.setColor(Color.TRANSPARENT);
                                bg.setStroke(10, GUIStroke);
                                miscLayout1.setBackgroundDrawable(bg);
                                miscLayout1.setPadding(20, 0, 20, 0);
                                misc.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                            }
                        }
                    }));
                }

                var cheats = new Button(MainActivity);
                cheats.setText("Hacks");
                cheats.setTextColor(GUIText);
                var buttonBg = new android.graphics.drawable.GradientDrawable();
                if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
                if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
                buttonBg.setStroke(4, GUIStroke);
                buttonBg.setCornerRadius(10);
                cheats.setBackgroundDrawable(buttonBg);
                cheats.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        cheat_menu();
                        menu.dismiss();
                    }
                });
                menuLayout.addView(cheats);

                function cheat_menu() {
                    MainActivity.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var cheatLayout = new LinearLayout(MainActivity);
                                var cheatScroll = new ScrollView(MainActivity);
                                var cheatLayout1 = new LinearLayout(MainActivity);
                                cheatLayout.setOrientation(1);
                                cheatLayout1.setOrientation(1);
                                cheatScroll.addView(cheatLayout);
                                cheatLayout1.addView(cheatScroll);

                                var exit = new Button(MainActivity);
                                exit.setText("Exit");
                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        cheat.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                cheatLayout.addView(exit);

                                function infoView() {
                                    MainActivity.runOnUiThread(new Runnable({
                                        run: function() {
                                            try {
                                                var infoLayout = new LinearLayout(MainActivity);

                                                var infoScroll = new ScrollView(MainActivity);

                                                var infoLayout1 = new LinearLayout(MainActivity);
                                                infoLayout.setOrientation(1);
                                                infoLayout1.setOrientation(1);

                                                infoScroll.addView(infoLayout);
                                                infoLayout1.addView(infoScroll);

                                                var exit = new Button(MainActivity);
                                                exit.setText("Exit");
                                                exit.setTextColor(Color.RED);
                                                exit.setOnClickListener(new View.OnClickListener({
                                                    onClick: function(viewarg) {

                                                        info.dismiss();

                                                        showMenuBtn();
                                                    }
                                                }));
                                                infoLayout.addView(exit);

                                                var refresh = new Button(MainActivity);
                                                refresh.setText("Refresh");
                                                refresh.setOnClickListener(new View.OnClickListener({
                                                    onClick: function(viewarg) {
                                                        info.dismiss();
                                                        for (var t = 0; t < 5; t++) {
                                                            if (t == 1) infoView();
                                                        }
                                                    }
                                                }));
                                                infoLayout.addView(refresh);

                                                var username = new TextView(MainActivity);
                                                username.setTextSize(15);
                                                username.setText("Username: " + Player.getName(Player.getEntity()));
                                                username.setTextColor(Color.WHITE);
                                                infoLayout.addView(username);

                                                var dimension = new TextView(MainActivity);
                                                dimension.setTextSize(15);
                                                dimension.setText("Dimension: " + Player.getDimension());
                                                dimension.setTextColor(Color.WHITE);
                                                infoLayout.addView(dimension);

                                                var world = new TextView(MainActivity);
                                                world.setTextSize(15);
                                                world.setText("World: " + Level.getWorldName());
                                                world.setTextColor(Color.WHITE);
                                                infoLayout.addView(world);

                                                var biome = new TextView(MainActivity);
                                                biome.setTextSize(15);
                                                biome.setText("Biome: " + Level.getBiomeName());
                                                biome.setTextColor(Color.WHITE);
                                                infoLayout.addView(biome);

                                                Level.getRainLevel();
                                                var rain = new TextView(MainActivity);
                                                rain.setTextSize(15);
                                                rain.setText("Weather: " + Math.round(Level.getRainLevel()));
                                                rain.setTextColor(Color.WHITE);
                                                infoLayout.addView(rain);

                                                var time = new TextView(MainActivity);
                                                time.setTextSize(15);
                                                time.setText("Time: " + Level.getTime());
                                                time.setTextColor(Color.WHITE);
                                                infoLayout.addView(time);

                                                var difficulty = new TextView(MainActivity);
                                                difficulty.setTextSize(15);
                                                difficulty.setText("Difficulty: " + Level.getDifficulty());
                                                difficulty.setTextColor(Color.WHITE);
                                                infoLayout.addView(difficulty);

                                                var maxHearts = new TextView(MainActivity);
                                                maxHearts.setTextSize(15);
                                                maxHearts.setText("Max hearts: " + Entity.getMaxHealth(getPlayerEnt()));
                                                maxHearts.setTextColor(Color.WHITE);
                                                infoLayout.addView(maxHearts);

                                                var renderType = new TextView(MainActivity);
                                                renderType.setTextSize(15);
                                                renderType.setText("Render type: " + Entity.getRenderType(getPlayerEnt()));
                                                renderType.setTextColor(Color.WHITE);
                                                infoLayout.addView(renderType);

                                                var gameType = new TextView(MainActivity);
                                                gameType.setTextSize(15);
                                                gameType.setText("Game mode: " + Level.getGameMode());
                                                gameType.setTextColor(Color.WHITE);
                                                infoLayout.addView(gameType);

                                                var lang = new TextView(MainActivity);
                                                lang.setTextSize(15);
                                                lang.setText("Language: " + ModPE.getLanguage());
                                                lang.setTextColor(Color.WHITE);
                                                infoLayout.addView(lang);

                                                var vere = new TextView(MainActivity);
                                                vere.setTextSize(15);
                                                vere.setText("Version: " + ModPE.getMinecraftVersion());
                                                vere.setTextColor(Color.WHITE);
                                                infoLayout.addView(vere);

                                                var skin = new TextView(MainActivity);
                                                skin.setTextSize(15);
                                                skin.setText("Mob skin: " + Entity.getMobSkin(getPlayerEnt()));
                                                skin.setTextColor(Color.WHITE);
                                                infoLayout.addView(skin);

                                                info = new PopupWindow(infoLayout1, dip2px(500), dip2px(500));

                                                info = new PopupWindow(infoLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / 2, MainActivity.getWindowManager().getDefaultDisplay().getHeight() / 1);
                                                var bg = new android.graphics.drawable.GradientDrawable();
                                                bg.setColor(Color.TRANSPARENT);
                                                bg.setStroke(10, GUIStroke);
                                                infoLayout1.setBackgroundDrawable(bg);
                                                infoLayout1.setPadding(20, 0, 20, 0);
                                                info.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                                                info.showAtLocation(MainActivity.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
                                            } catch (error) {
                                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                                            }
                                        }
                                    }));
                                }

                                var button6 = new Button(MainActivity);
                                button6.setText("Glide");
                                button6.setTextColor(Color.RED);
                                if (glide == true) button6.setTextColor(Color.GREEN);
                                button6.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        glide ? glide = false : glide = true;
                                        button6.setText("Glide");
                                        if (glide == true) {
                                            button6.setTextColor(Color.GREEN);
                                            glide = true;
                                        }
                                        if (glide == false) {
                                            button6.setTextColor(Color.RED);

                                            glide = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(button6);

                                var button11 = new Button(MainActivity);
                                button11.setText("Storage ESP");
                                button11.setTextColor(Color.RED);
                                if (chestesp == true) button11.setTextColor(Color.GREEN);
                                button11.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        chestesp ? chestesp = false : chestesp = true;
                                        button11.setText("Storage ESP");
                                        if (chestesp == true) {
                                            button11.setTextColor(Color.GREEN);
                                            chestesp = true;
                                        }
                                        if (chestesp == false) {
                                            button11.setTextColor(Color.RED);

                                            chestesp = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(button11);

                                var button12 = new Button(MainActivity);
                                button12.setText("Auto spam");
                                button12.setTextColor(Color.RED);
                                if (autospam2 == true) button12.setTextColor(Color.GREEN);
                                button12.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        autospam2 ? autospam2 = false : autospam2 = true;
                                        button12.setText("Auto spam");
                                        if (autospam2 == true) {
                                            button12.setTextColor(Color.GREEN);
                                            spa();
                                            autospam2 = true;
                                        }
                                        if (autospam2 == false) {
                                            button12.setTextColor(Color.RED);
                                            autospam = false;
                                            autospam2 = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(button12);

                                /*var oreTrace = new Button(MainActivity);
                                oreTrace.setText("Ore ESP");
                                oreTrace.setTextColor(Color.RED);
                                if(oreEsp2==true)oreTrace.setTextColor(Color.GREEN);
                                            oreTrace.setOnClickListener(new View.OnClickListener({
                                                onClick: function(viewarg){
                                             oreEsp2?oreEsp2=false:oreEsp2=true;
                                oreTrace.setText("Ore ESP");
                                if(oreEsp2 == true){
                                oreTrace.setTextColor(Color.GREEN);
                                clientMessage(client + "Ore ESP on");
                                oreDialog();
                                oreEsp2 = true;
                                }
                                if(oreEsp2 == false){
                                oreTrace.setTextColor(Color.RED);
                                clientMessage(client + "Ore ESP off");
                                oreEsp = false;
                                oreEsp2 = false;
                                }
                                                }
                                            }));
                                            cheatLayout.addView(oreTrace);
                                			
                                var playerTracer = new Button(MainActivity);
                                playerTracer.setText("Player ESP");
                                playerTracer.setTextColor(Color.RED);
                                if(playeresp==true)playerTracer.setTextColor(Color.GREEN);
                                            playerTracer.setOnClickListener(new View.OnClickListener({
                                                onClick: function(viewarg){
                                             playeresp?playeresp=false:playeresp=true;
                                playerTracer.setText("Player ESP");
                                if(playeresp == true){
                                playerTracer.setTextColor(Color.GREEN);
                                clientMessage(client + "Player esp on");

                                playeresp = true;
                                }
                                if(playeresp == false){
                                playerTracer.setTextColor(Color.RED);
                                clientMessage(client + "Player esp off");

                                playeresp = false;
                                }
                                                }
                                            }));
                                            cheatLayout.addView(playerTracer);*/

                                var autow = new Button(MainActivity);
                                autow.setText("Auto walk");
                                autow.setTextColor(Color.RED);
                                if (autowalk == true) autow.setTextColor(Color.GREEN);
                                autow.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        autowalk ? autowalk = false : autowalk = true;
                                        autow.setText("Auto walk");
                                        if (autowalk == true) {
                                            autow.setTextColor(Color.GREEN);
                                            clientMessage(client + "Auto walk on");

                                            autowalk = true;
                                        }
                                        if (autowalk == false) {
                                            autow.setTextColor(Color.RED);
                                            clientMessage(client + "Auto walk off");

                                            autowalk = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(autow);

                                var twek = new Button(MainActivity);
                                twek.setText("Twerk");
                                twek.setTextColor(Color.RED);
                                if (twerk == true) twek.setTextColor(Color.GREEN);
                                twek.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        twerk ? twerk = false : twerk = true;
                                        twek.setText("Twerk");
                                        if (twerk == true) {
                                            twek.setTextColor(Color.GREEN);
                                            clientMessage(client + "Auto twerk on");

                                            twerk = true;
                                        }
                                        if (twerk == false) {
                                            twek.setTextColor(Color.RED);
                                            clientMessage(client + "Auto twerk off");

                                            twerk = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(twek);

                                var butfuon2 = new Button(MainActivity);
                                butfuon2.setText("Bunny hop");
                                butfuon2.setTextColor(Color.RED);
                                if (bhop == true) butfuon2.setTextColor(Color.GREEN);
                                butfuon2.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        bhop ? bhop = false : bhop = true;
                                        butfuon2.setText("Bunny hop");
                                        if (bhop == true) {
                                            butfuon2.setTextColor(Color.GREEN);
                                            clientMessage(client + "Bunny hop on");
                                            bhop = true;
                                        }
                                        if (bhop == false) {
                                            butfuon2.setTextColor(Color.RED);
                                            clientMessage(client + "Bunny hop off");
                                            bhop = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon2);

                                var butfuon3 = new Button(MainActivity);
                                butfuon3.setText("Alpha Text");
                                butfuon3.setTextColor(Color.RED);
                                if (alphatext == true) butfuon3.setTextColor(Color.GREEN);
                                butfuon3.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        alphatext ? alphatext = false : alphatext = true;
                                        butfuon3.setText("Alpha Text");
                                        if (alphatext == true) {
                                            butfuon3.setTextColor(Color.GREEN);
                                            alphatext = true;
                                        }
                                        if (alphatext == false) {
                                            butfuon3.setTextColor(Color.RED);
                                            clientMessage(client + "AlphaText off");
                                            alphatext = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon3);

                                var butfuon4 = new Button(MainActivity);
                                butfuon4.setText("Binary text");
                                butfuon4.setTextColor(Color.RED);
                                if (binarytext == true) butfuon4.setTextColor(Color.GREEN);
                                butfuon4.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        binarytext ? binarytext = false : binarytext = true;
                                        butfuon4.setText("Binary text");
                                        if (binarytext == true) {
                                            butfuon4.setTextColor(Color.GREEN);
                                            clientMessage(client + "Binary text on");
                                            binarytext = true;
                                        }
                                        if (binarytext == false) {
                                            butfuon4.setTextColor(Color.RED);
                                            clientMessage(client + "Binary text off");
                                            binarytext = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon4);

                                var butfuon5 = new Button(MainActivity);
                                butfuon5.setText("Zalgo text");
                                butfuon5.setTextColor(Color.RED);
                                if (zalgotext == true) butfuon5.setTextColor(Color.GREEN);
                                butfuon5.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        zalgotext ? zalgotext = false : zalgotext = true;
                                        butfuon5.setText("Zalgo text");
                                        if (zalgotext == true) {
                                            butfuon5.setTextColor(Color.GREEN);
                                            clientMessage(client + "Zalgo text on");
                                            zalgotext = true;
                                        }
                                        if (zalgotext == false) {
                                            butfuon5.setTextColor(Color.RED);
                                            clientMessage(client + "Zalgo text off");
                                            zalgotext = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon5);

                                var butfuon6 = new Button(MainActivity);
                                butfuon6.setText("Strike text");
                                butfuon6.setTextColor(Color.RED);
                                if (striketext == true) butfuon6.setTextColor(Color.GREEN);
                                butfuon6.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        striketext ? striketext = false : striketext = true;
                                        butfuon6.setText("Strike text");
                                        if (striketext == true) {
                                            butfuon6.setTextColor(Color.GREEN);
                                            clientMessage(client + "Strike text on");
                                            striketext = true;
                                        }
                                        if (striketext == false) {
                                            butfuon6.setTextColor(Color.RED);
                                            clientMessage(client + "Strike text off");
                                            striketext = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon6);



                                var butfuon8 = new Button(MainActivity);
                                butfuon8.setText("Prevent same message");
                                butfuon8.setTextColor(Color.RED);
                                if (preventsame == true) butfuon8.setTextColor(Color.GREEN);
                                butfuon8.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        preventsame ? preventsame = false : preventsame = true;
                                        butfuon8.setText("Prevent same message");
                                        if (preventsame == true) {
                                            butfuon8.setTextColor(Color.GREEN);
                                            clientMessage(client + "Prevent same message on,\nyou can now bypass ChatDefender");
                                            preventsame = true;
                                        }
                                        if (preventsame == false) {
                                            butfuon8.setTextColor(Color.RED);
                                            clientMessage(client + "Prevent same message off");
                                            preventsame = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(butfuon8);


                                var cc = new Button(MainActivity);
                                cc.setText("Clear your chat");
                                cc.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");

                                        clientMessage(" " + "\n" + " ");
                                    }
                                }));
                                cheatLayout.addView(cc);

                                var walkonice = new Button(MainActivity);
                                walkonice.setText("Ice walk");
                                walkonice.setTextColor(Color.RED);
                                if (icewalk == true) walkonice.setTextColor(Color.GREEN);
                                walkonice.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        icewalk ? icewalk = false : icewalk = true;
                                        walkonice.setText("Ice walk");
                                        if (icewalk == true) {
                                            walkonice.setTextColor(Color.GREEN);
                                            clientMessage(client + "You may get detected as flying becareful!")
                                            icewalk = true;
                                        }
                                        if (icewalk == false) {
                                            walkonice.setTextColor(Color.RED);
                                            clientMessage(client + "Ice walk is off")
                                            icewalk = false;
                                        }
                                    }
                                }));
                                cheatLayout.addView(walkonice);

                                var stap1 = new Button(MainActivity);
                                stap1.setText("Send to all");
                                stap1.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        sendEtc();
                                        cheat.dismiss();

                                    }
                                }));
                                cheatLayout.addView(stap1);

                                var df = new Button(MainActivity);
                                df.setText("Disable up/down movement: " + (nofly ? "on" : "off"));
                                df.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        nofly ? nofly = false : nofly = true;
                                        df.setText("Disable up/down movement: " + (nofly ? "on" : "off"));
                                        if (nofly == true) {
                                            clientMessage(client + "§7No up/down movement is on");
                                            Player.setCanFly(false);

                                            nofly = true;
                                        }
                                        if (nofly == false) {
                                            clientMessage(client + "§7No up/down movement is off");
                                            Player.setCanFly(true);

                                            nofly = false;
                                        }
                                    }
                                });
                                cheatLayout.addView(df);

                                var f = new Button(MainActivity);
                                f.setText("Flight: " + (fch ? "on" : "off"));
                                f.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        fch ? fch = false : fch = true;
                                        f.setText("Flight: " + (fch ? "on" : "off"));
                                        if (fch == true) {
                                            Player.setCanFly(1);
                                            clientMessage(client + "§7Flight is on");
                                        }
                                        if (fch == false) {
                                            clientMessage(client + "§7Flight is off");
                                            Player.setCanFly(0);
                                        }
                                    }
                                }));
                                cheatLayout.addView(f);

                                var exit2 = new Button(MainActivity);
                                exit2.setText("Exit");
                                exit2.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        cheat.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                cheatLayout.addView(exit2);

                                cheat = new PopupWindow(cheatLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                if (default1 == true) cheat.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                if (default1 == false) cheat.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                var bg = new android.graphics.drawable.GradientDrawable();
                                bg.setColor(Color.TRANSPARENT);
                                bg.setStroke(10, GUIStroke);
                                cheatLayout1.setBackgroundDrawable(bg);
                                cheatLayout1.setPadding(20, 0, 20, 0);
                                cheat.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                            }
                        }
                    }));
                }

                var enchant = new Button(MainActivity);
                enchant.setText("Enchant menu");
                enchant.setTextColor(GUIText);
                var buttonBg = new android.graphics.drawable.GradientDrawable();
                if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
                if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
                buttonBg.setStroke(4, GUIStroke);
                buttonBg.setCornerRadius(10);
                enchant.setBackgroundDrawable(buttonBg);
                if (mcpetheme == true) enchant.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0), 0, android.util.Base64.decode(buttonBg, 0).length)));
                enchant.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        enchant_menu();
                        menu.dismiss();
                    }
                });
                menuLayout.addView(enchant);

                function enchant_menu() {
                    MainActivity.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var enchantLayout = new LinearLayout(MainActivity);
                                var enchantScroll = new ScrollView(MainActivity);
                                var enchantLayout1 = new LinearLayout(MainActivity);
                                enchantLayout.setOrientation(1);
                                enchantLayout1.setOrientation(1);
                                enchantScroll.addView(enchantLayout);
                                enchantLayout1.addView(enchantScroll);

                                var exit = new Button(MainActivity);
                                exit.setText("Exit");
                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        enchant.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                enchantLayout.addView(exit);

                                var ena = new Button(MainActivity);
                                ena.setText("Aqua Affinity");
                                ena.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en1();
                                    }
                                }));
                                enchantLayout.addView(ena);

                                function en1() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add1();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add1() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, ll);
                                }

                                var enb = new Button(MainActivity);
                                enb.setText("Bane Of Athropods");
                                enb.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en2();
                                    }
                                }));
                                enchantLayout.addView(enb);

                                function en2() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add2();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add2() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, ll);
                                }

                                var enc = new Button(MainActivity);
                                enc.setText("Blast Protection");
                                enc.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en3();
                                    }
                                }));
                                enchantLayout.addView(enc);

                                function en3() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add3();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add3() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, ll);
                                }

                                var enf = new Button(MainActivity);
                                enf.setText("Depth Strider");
                                enf.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en5();
                                    }
                                }));
                                enchantLayout.addView(enf);

                                function en5() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add5();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add5() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, ll);
                                }

                                var ene = new Button(MainActivity);
                                ene.setText("Efficiency");
                                ene.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en6();
                                    }
                                }));
                                enchantLayout.addView(ene);

                                function en6() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add6();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add6() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, ll);
                                }

                                var eng = new Button(MainActivity);
                                eng.setText("Feather Falling");
                                eng.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en7();
                                    }
                                }));
                                enchantLayout.addView(eng);

                                function en7() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add7();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add7() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, ll);
                                }

                                var enh = new Button(MainActivity);
                                enh.setText("Fire Aspect");
                                enh.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en8();
                                    }
                                }));
                                enchantLayout.addView(enh);

                                function en8() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add8();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add8() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, ll);
                                }

                                var eni = new Button(MainActivity);
                                eni.setText("Fire Protection");
                                eni.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en9();
                                    }
                                }));
                                enchantLayout.addView(eni);

                                function en9() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add9();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add9() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, ll);
                                }

                                var enj = new Button(MainActivity);
                                enj.setText("Flame");
                                enj.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en10();
                                    }
                                }));
                                enchantLayout.addView(enj);

                                function en10() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add10();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add10() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, ll);
                                }

                                var enk = new Button(MainActivity);
                                enk.setText("Fortune");
                                enk.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en11();
                                    }
                                }));
                                enchantLayout.addView(enk);

                                function en11() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add11();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add11() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, ll);
                                }

                                var enl = new Button(MainActivity);
                                enl.setText("Infinity");
                                enl.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en12();
                                    }
                                }));
                                enchantLayout.addView(enl);

                                function en12() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add12();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add12() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, ll);
                                }

                                var enm = new Button(MainActivity);
                                enm.setText("Knockback");
                                enm.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en13();
                                    }
                                }));
                                enchantLayout.addView(enm);

                                function en13() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add13();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add13() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, ll);
                                }

                                var enn = new Button(MainActivity);
                                enn.setText("Looting");
                                enn.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en14();
                                    }
                                }));
                                enchantLayout.addView(enn);

                                function en14() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add14();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add14() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, ll);
                                }

                                var eno = new Button(MainActivity);
                                eno.setText("Luck of the sea");
                                eno.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en15();
                                    }
                                }));
                                enchantLayout.addView(eno);

                                function en15() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add15();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add15() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, ll);
                                }

                                var enp = new Button(MainActivity);
                                enp.setText("Lure");
                                enp.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en16();
                                    }
                                }));
                                enchantLayout.addView(enp);

                                function en16() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add16();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add16() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, ll);
                                }

                                var enq = new Button(MainActivity);
                                enq.setText("Power");
                                enq.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en17();
                                    }
                                }));
                                enchantLayout.addView(enq);

                                function en17() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add17();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add17() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, ll);
                                }

                                var enr = new Button(MainActivity);
                                enr.setText("Projectile protection");
                                enr.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en18();
                                    }
                                }));
                                enchantLayout.addView(enr);

                                function en18() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add18();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add18() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, ll);
                                }

                                var ens = new Button(MainActivity);
                                ens.setText("Protection");
                                ens.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en19();
                                    }
                                }));
                                enchantLayout.addView(ens);

                                function en19() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add19();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add19() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, ll);
                                }

                                var ent = new Button(MainActivity);
                                ent.setText("Punch");
                                ent.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en20();
                                    }
                                }));
                                enchantLayout.addView(ent);

                                function en20() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add20();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add20() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, ll);
                                }

                                var enu = new Button(MainActivity);
                                enu.setText("Respiration");
                                enu.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en21();
                                    }
                                }));
                                enchantLayout.addView(enu);

                                function en21() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add21();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add21() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, ll);
                                }

                                var env = new Button(MainActivity);
                                env.setText("Sharpness");
                                env.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en22();
                                    }
                                }));
                                enchantLayout.addView(env);

                                function en22() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add22();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add22() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, ll);
                                }

                                var enw = new Button(MainActivity);
                                enw.setText("Silk touch");
                                enw.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en23();
                                    }
                                }));
                                enchantLayout.addView(enw);

                                function en23() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add23();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add23() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, ll);
                                }

                                var enx = new Button(MainActivity);
                                enx.setText("Smite");
                                enx.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en24();
                                    }
                                }));
                                enchantLayout.addView(enx);

                                function en24() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add24();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add24() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, ll);
                                }

                                var eny = new Button(MainActivity);
                                eny.setText("Thorns");
                                eny.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en25();
                                    }
                                }));
                                enchantLayout.addView(eny);

                                function en25() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add25();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add25() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, ll);
                                }

                                var enz = new Button(MainActivity);
                                enz.setText("Unbreaking");
                                enz.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        en26();
                                    }
                                }));
                                enchantLayout.addView(enz);

                                function en26() {
                                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                                        run: function() {
                                            try {
                                                GetText = new android.widget.PopupWindow();
                                                var Layer = new android.widget.LinearLayout(MainActivity);
                                                var lvl = new android.widget.EditText(MainActivity);
                                                var Dialog = new android.app.Dialog(MainActivity);
                                                var Exit = new android.widget.Button(MainActivity);

                                                Dialog.setTitle("Enter Level");
                                                Dialog.setContentView(Layer);

                                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                                Dialog.show();
                                                Layer.addView(lvl);
                                                Layer.addView(Exit);

                                                lvl.setText("");
                                                lvl.setHint("Level");
                                                Exit.setText("Done");

                                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                                    onClick: function(view) {
                                                        ll = lvl.getText();
                                                        Dialog.dismiss();
                                                        add26();
                                                        showMenuBtn();
                                                    }
                                                });

                                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                                            } catch (e) {
                                                print("The Enchant Dialog Is Malfunctioning:" + e);
                                            }
                                        }
                                    });
                                }

                                function add26() {
                                    Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, ll);
                                }

                                //Enchantment.AQUA_AFFINITY;
                                //Enchantment.BANE_OF_ARTHROPODS;
                                //Enchantment.BLAST_PROTECTION;
                                //Enchantment.DEPTH_STRIDER;
                                //Enchantment.EFFICIENCY;
                                //Enchantment.FEATHER_FALLING;
                                //Enchantment.FIRE_ASPECT;
                                //Enchantment.FIRE_PROTECTION;
                                //Enchantment.FLAME;
                                //Enchantment.FORTUNE;
                                //Enchantment.INFINITY;
                                //Enchantment.KNOCKBACK;
                                //Enchantment.LOOTING;
                                //Enchantment.LUCK_OF_THE_SEA;
                                //Enchantment.LURE;
                                //Enchantment.POWER;
                                //Enchantment.PROJECTILE_PROTECTION;
                                //Enchantment.PROTECTION;
                                //Enchantment.PUNCH;
                                //Enchantment.RESPIRATION;
                                //Enchantment.SHARPNESS;
                                //Enchantment.SILK_TOUCH;
                                //Enchantment.SMITE;
                                //Enchantment.THORNS;
                                //Enchantment.UNBREAKING;

                                enchant = new PopupWindow(enchantLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                if (default1 == true) enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                if (default1 == false) enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                var bg = new android.graphics.drawable.GradientDrawable();
                                bg.setColor(Color.TRANSPARENT);
                                bg.setStroke(10, GUIStroke);
                                enchantLayout1.setBackgroundDrawable(bg);
                                enchantLayout1.setPadding(20, 0, 20, 0);
                                enchant.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                            }
                        }
                    }));
                }

                var time = new Button(MainActivity);
                time.setText("Time menu");
                time.setTextColor(GUIText);
                var buttonBg = new android.graphics.drawable.GradientDrawable();
                if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
                if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
                buttonBg.setStroke(4, GUIStroke);
                buttonBg.setCornerRadius(10);
                time.setBackgroundDrawable(buttonBg);
                if (getLanguage == "de_DE") time.setText("Zeit menu");
                if (mcpetheme == true) time.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0), 0, android.util.Base64.decode(buttonBg, 0).length)));
                time.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        time_menu();
                        menu.dismiss();
                    }
                });
                menuLayout.addView(time);

                function time_menu() {
                    MainActivity.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var timeLayout = new LinearLayout(MainActivity);
                                var timeScroll = new ScrollView(MainActivity);
                                var timeLayout1 = new LinearLayout(MainActivity);
                                timeLayout.setOrientation(1);
                                timeLayout1.setOrientation(1);
                                timeScroll.addView(timeLayout);
                                timeLayout1.addView(timeScroll);

                                var exit = new Button(MainActivity);
                                exit.setText("Exit");
                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        time.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                timeLayout.addView(exit);

                                var aa = new Button(MainActivity);
                                aa.setText("Only day: " + (onlyday ? "on" : "off"));
                                aa.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        onlyday ? onlyday = false : onlyday = true;
                                        aa.setText("Only day: " + (onlyday ? "on" : "off"));
                                        if (onlyday == true) {
                                            clientMessage(client + "§7Only day is on");
                                            clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                            onlyday = true;
                                        }
                                        if (onlyday == false) {
                                            clientMessage(client + "§7Only day is off");
                                            clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                            onlyday = false;
                                        }
                                    }
                                }));
                                timeLayout.addView(aa);

                                var aa2 = new Button(MainActivity);
                                aa2.setText("Only night: " + (onlynight ? "on" : "off"));
                                aa2.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        onlynight ? onlynight = false : onlynight = true;
                                        aa2.setText("Only night: " + (onlynight ? "on" : "off"));
                                        if (onlynight == true) {
                                            clientMessage(client + "§7Only night is on");
                                            clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                            onlynight = true;
                                        }
                                        if (onlynight == false) {
                                            clientMessage(client + "§7Only night is off");
                                            clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                            onlynight = false;
                                        }
                                    }
                                }));
                                timeLayout.addView(aa2);

                                var a1 = new Button(MainActivity);
                                a1.setText("Time: 6:00am");
                                a1.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(0);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a1);

                                var a2 = new Button(MainActivity);
                                a2.setText("Time: 7:00am");
                                a2.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(1000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a2);

                                var a3 = new Button(MainActivity);
                                a3.setText("Time: 8:00am");
                                a3.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(2000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a3);

                                var a4 = new Button(MainActivity);
                                a4.setText("Time: 9:00am");
                                a4.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(3000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a4);

                                var a5 = new Button(MainActivity);
                                a5.setText("Time: 10:00am");
                                a5.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(4000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a5);

                                var a6 = new Button(MainActivity);
                                a6.setText("Time: 11:00am");
                                a6.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(5000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a6);

                                var a7 = new Button(MainActivity);
                                a7.setText("Time: 12:00pm");
                                a7.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(6000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a7);

                                var a8 = new Button(MainActivity);
                                a8.setText("Time: 1:00pm");
                                a8.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(7000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a8);

                                var a9 = new Button(MainActivity);
                                a9.setText("Time: 2:00pm");
                                a9.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(8000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a9);

                                var a10 = new Button(MainActivity);
                                a10.setText("Time: 3:00pm");
                                a10.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(9000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a10);

                                var a11 = new Button(MainActivity);
                                a11.setText("Time: 4:00pm");
                                a11.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(10000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a11);

                                var a12 = new Button(MainActivity);
                                a12.setText("Time: 5:00pm");
                                a12.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(11000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a12);

                                var a13 = new Button(MainActivity);
                                a13.setText("Time: 6:00pm");
                                a13.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(12000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a13);

                                var a14 = new Button(MainActivity);
                                a14.setText("Time: 7:00pm");
                                a14.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(13000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a14);

                                var a15 = new Button(MainActivity);
                                a15.setText("Time: 8:00pm");
                                a15.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(14000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a15);

                                var a16 = new Button(MainActivity);
                                a16.setText("Time: 9:00pm");
                                a16.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(15000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a16);

                                var a17 = new Button(MainActivity);
                                a17.setText("Time: 10:00pm");
                                a17.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(16000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a17);

                                var a18 = new Button(MainActivity);
                                a18.setText("Time: 11:00pm");
                                a18.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(17000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a18);

                                var a19 = new Button(MainActivity);
                                a19.setText("Time: 12:00am");

                                a19.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(18000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a19);

                                var a20 = new Button(MainActivity);
                                a20.setText("Time: 1:00am");
                                a20.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(19000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a20);

                                var a21 = new Button(MainActivity);
                                a21.setText("Time: 2:00am");
                                a21.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(20000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a21);

                                var a22 = new Button(MainActivity);
                                a22.setText("Time: 3:00am");
                                a22.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(21000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a22);

                                var a23 = new Button(MainActivity);
                                a23.setText("Time: 4:00am");
                                a23.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(22000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a23);

                                var a24 = new Button(MainActivity);
                                a24.setText("Time: 5:00am");
                                a24.setOnClickListener(new View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setTime(23000);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                timeLayout.addView(a24);

                                time = new PopupWindow(timeLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                if (default1 == true) time.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                if (default1 == false) time.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                var bg = new android.graphics.drawable.GradientDrawable();
                                bg.setColor(Color.TRANSPARENT);
                                bg.setStroke(10, GUIStroke);
                                timeLayout1.setBackgroundDrawable(bg);
                                timeLayout1.setPadding(20, 0, 20, 0);
                                time.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                            }
                        }
                    }));
                }

                var weather = new Button(MainActivity);
                weather.setText("Weather menu");
                weather.setTextColor(GUIText);
                var buttonBg = new android.graphics.drawable.GradientDrawable();
                if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
                if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
                buttonBg.setStroke(4, GUIStroke);
                buttonBg.setCornerRadius(10);
                weather.setBackgroundDrawable(buttonBg);
                if (getLanguage == "de_DE") weather.setText("Wetter menu");
                if (mcpetheme == true) weather.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0), 0, android.util.Base64.decode(buttonBg, 0).length)));
                weather.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        weather_menu();
                        menu.dismiss();
                    }
                });
                menuLayout.addView(weather);

                function weather_menu() {
                    MainActivity.runOnUiThread(new Runnable({
                        run: function() {
                            try {
                                var weatherLayout = new LinearLayout(MainActivity);
                                var weatherScroll = new ScrollView(MainActivity);
                                var weatherLayout1 = new LinearLayout(MainActivity);
                                weatherLayout.setOrientation(1);
                                weatherLayout1.setOrientation(1);
                                weatherScroll.addView(weatherLayout);
                                weatherLayout1.addView(weatherScroll);

                                var exit = new Button(MainActivity);
                                exit.setText("Exit");
                                exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(v) {
                                        weather.dismiss();
                                        showMenuBtn();
                                    }
                                });
                                weatherLayout.addView(exit);

                                var button3 = new Button(MainActivity);
                                button3.setText("Rain");
                                button3.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setRainLevel(1);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                weatherLayout.addView(button3);

                                var button4 = new Button(MainActivity);
                                button4.setText("Lightning");
                                button4.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setLightningLevel(1);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                weatherLayout.addView(button4);

                                var button2 = new Button(MainActivity);
                                button2.setText("Clear weather");
                                button2.setOnClickListener(new android.view.View.OnClickListener({
                                    onClick: function(viewarg) {
                                        Level.setRainLevel(0);
                                        Level.setLightningLevel(0);
                                        clientMessage(client + "§7Remember that this is client-only, and doesn't save or affect other players.");
                                    }
                                }));
                                weatherLayout.addView(button2);

                                weather = new PopupWindow(weatherLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                                if (default1 == true) weather.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                if (default1 == false) weather.setBackgroundDrawable(new ColorDrawable(GUIColor));
                                var bg = new android.graphics.drawable.GradientDrawable();
                                bg.setColor(Color.TRANSPARENT);
                                bg.setStroke(10, GUIStroke);
                                weatherLayout1.setBackgroundDrawable(bg);
                                weatherLayout1.setPadding(20, 0, 20, 0);
                                weather.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
                            } catch (error) {
                                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
                            }
                        }
                    }));
                }

                menu = new PopupWindow(menuLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                if (default1 == true) menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
                if (mcpetheme == true) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#94857f")));
                if (default1 == false) menu.setBackgroundDrawable(new ColorDrawable(GUIColor));
                var bg = new android.graphics.drawable.GradientDrawable();
                bg.setColor(Color.TRANSPARENT);
                bg.setStroke(10, GUIStroke);
                menuLayout1.setBackgroundDrawable(bg);
                menuLayout1.setPadding(20, 0, 20, 0);
                menu.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            } catch (error) {
                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
        }
    }));
}

/********************************/

function attackHook(attacker, victim) {
    if (getage) clientMessage(client + "age: " + Entity.getAnimalAge(victim));
    if (hitBehind) {
        var x = Entity.getX(victim) - getPlayerX();
        var y = Entity.getY(victim) - getPlayerY();
        var z = Entity.getZ(victim) - getPlayerZ();
        Entity.setPosition(Player.getEntity(), x - 1, y + 3, z - 1);
        Entity.setPosition(Player.getEntity(), x + 1, y + 3, z + 1);
    }
    if (hitparticles) {
        var x = Entity.getX(victim) - getPlayerX();
        var y = Entity.getY(victim) - getPlayerY();
        var z = Entity.getZ(victim) - getPlayerZ();
        if (particle1) Level.addParticle(ParticleType.angryVillager, x, y, z, 0, 0, 0, 5);
        if (particle2) Level.addParticle(ParticleType.bubble, x, y, z, 0, 0, 0, 150);
        if (particle3) Level.addParticle(ParticleType.cloud, x, y, z, 0, 0, 0, 150);
        if (particle4) Level.addParticle(ParticleType.crit, x, y, z, 0, 0, 0, 50);
        if (particle5) Level.addParticle(ParticleType.dripLava, x, y, z, 0, 0, 0, 150);
        if (particle6) Level.addParticle(ParticleType.dripWater, x, y, z, 0, 0, 0, 150);
        if (particle7) Level.addParticle(ParticleType.enchantmenttable, x, y, z, 0, 0, 0, 150);
        if (particle8) Level.addParticle(ParticleType.fallingDust, x, y, z, 0, 0, 0, 150);
        if (particle9) Level.addParticle(ParticleType.flame, x, y, z, 0, 0, 0, 150);
        if (particle10) Level.addParticle(ParticleType.happyVillager, x, y, z, 0, 0, 0, 50);
        if (particle11) Level.addParticle(ParticleType.heart, x, y, z, 0, 0, 0, 5);
        if (particle12) Level.addParticle(ParticleType.hugeexplosion, x, y, z, 0, 0, 0, 150);
        if (particle13) Level.addParticle(ParticleType.hugeexplosionSeed, x, y, z, 0, 0, 0, 10);
        if (particle14) Level.addParticle(ParticleType.ink, x, y, z, 0, 0, 0, 150);
        if (particle15) Level.addParticle(ParticleType.itemBreak, x, y, z, 0, 0, 0, 150);
        if (particle16) Level.addParticle(ParticleType.lava, x, y, z, 0, 0, 0, 150);
        if (particle17) Level.addParticle(ParticleType.mobFlame, x, y, z, 0, 0, 0, 150);
        if (particle18) Level.addParticle(ParticleType.note, x, y, z, 0, 0, 0, 150);
        if (particle19) Level.addParticle(ParticleType.portal, x, y, z, 0, 0, 0, 150);
        if (particle20) Level.addParticle(ParticleType.rainSplash, x, y, z, 0, 0, 0, 150);
        if (particle21) Level.addParticle(ParticleType.redstone, x, y, z, 0, 0, 0, 10);
        if (particle22) Level.addParticle(ParticleType.slime, x, y, z, 0, 0, 0, 150);
        if (particle23) Level.addParticle(ParticleType.smoke, x, y, z, 0, 0, 0, 150);
        if (particle24) Level.addParticle(ParticleType.snowballpoof, x, y, z, 0, 0, 0, 150);
        if (particle25) Level.addParticle(ParticleType.spell, x, y, z, 0, 0, 0, 150);
        if (particle26) Level.addParticle(ParticleType.splash, x, y, z, 0, 0, 0, 150);
        if (particle27) Level.addParticle(ParticleType.suspendedTown, x, y, z, 0, 0, 0, 150);
        if (particle28) Level.addParticle(ParticleType.terrain, x, y, z, 0, 0, 0, 150);
        if (particle29) Level.addParticle(ParticleType.waterWake, x, y, z, 0, 0, 0, 150);
        if (particle30) Level.addParticle(ParticleType.largeexplode, x, y, z, 0, 0, 0, 150);
        if (particle31) Level.addParticle(ParticleType.spell2, x, y, z, 0, 0, 0, 150);
        if (particle32) Level.addParticle(ParticleType.spell3, x, y, z, 0, 0, 0, 150);
    }
    if (hitmorph) Entity.setRenderType(Player.getEntity(), Entity.getRenderType(victim));
    if (hitrmef) Entity.removeAllEffects(victim);
}

function killing() {
    var mobs = Entity.getAll();
    for (var a = 0; a < mobs.length; a++) {
        var mobX = Entity.getX(mobs[a]) - getPlayerX();
        var mobY = Entity.getY(mobs[a]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[a]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[a] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[a]) == 10) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 11) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 12) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 13) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 14) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 15) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 16) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 17) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 18) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 19) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 20) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 21) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 22) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 23) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 24) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 25) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 26) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 27) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 32) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 33) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 34) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 35) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 36) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 37) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 38) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 39) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 40) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 41) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 42) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 43) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 44) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 45) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 46) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 47) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 48) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 49) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 50) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 51) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 52) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 28) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 54) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 55) {
                Entity.setHealth(mobs[a], 0);
            }
            if (Entity.getEntityTypeId(mobs[a]) == 53) {
                Entity.setHealth(mobs[a], 0);
            }

        }
    }
}

function killingf() {
    var mobs = Entity.getAll();
    var immobile = true;
    if (killfaura == false) immobile = false;
    for (var b = 0; b < mobs.length; b++) {
        var uuid = mobs[b];
        var mobX = Entity.getX(mobs[b]) - getPlayerX();
        var mobY = Entity.getY(mobs[b]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[b]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[b] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[b]) == 10) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 11) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 12) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 13) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 14) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 15) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 16) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 17) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 18) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 19) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 20) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 21) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 22) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 23) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 24) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 25) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 26) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 27) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 32) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 33) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 34) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 35) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 36) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 37) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 38) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 39) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 40) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 41) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 42) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 43) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 44) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 45) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 46) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 47) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 48) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 49) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 50) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 51) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 52) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 28) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 54) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 55) {
                Entity.setImmobile(uuid, immobile);
            }
            if (Entity.getEntityTypeId(mobs[b]) == 53) {
                Entity.setImmobile(uuid, immobile);
            }
        }
    }
}

function killingd() {
    var mobs = Entity.getAll();
    for (var c = 0; c < mobs.length; c++) {
        var mobX = Entity.getX(mobs[c]) - getPlayerX();
        var mobY = Entity.getY(mobs[c]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[c]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[c] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[c]) == 10) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 11) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 12) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 13) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 14) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 15) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 16) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 17) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 18) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 19) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 20) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 21) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 22) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 23) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 24) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 25) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 26) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 27) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 32) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 33) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 34) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 35) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 36) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 37) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 38) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 39) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 40) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 41) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 42) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 43) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 44) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 45) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 46) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 47) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 48) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 49) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 50) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 51) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 52) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 28) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 54) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 55) {
                Entity.setFireTicks(mobs[c], 5);
            }
            if (Entity.getEntityTypeId(mobs[c]) == 53) {
                Entity.setFireTicks(mobs[c], 5);
            }

        }
    }
}

function namedem() {
    var mobs = Entity.getAll();
    var players = Server.getAllPlayers();
    var names = Server.getAllPlayerNames();
    for (var n = 0; n < mobs.length; n++) {
        var mobX = Entity.getX(mobs[n]) - getPlayerX();
        var mobY = Entity.getY(mobs[n]) - getPlayerY();
        var mobZ = Entity.getZ(mobs[n]) - getPlayerZ();
        if (mobX * mobX + mobY * mobY + mobZ * mobZ <= 20 * 20 && mobs[n] != getPlayerEnt()) {
            if (Entity.getEntityTypeId(mobs[n]) == 10) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Chicken " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 11) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Cow " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 12) {
                if (Entity.getNameTag(mobs[n]) != "") {
                    Entity.setNameTag(mobs[n], " " + Entity.getNameTag(mobs[n]) + " " + Entity.getHealth(mobs[n]) + " / " + Entity.getMaxHealth(mobs[n]));
                }
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Pig " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 13) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Sheep " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 14) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Wolf " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 15) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Villager " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 16) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Mushroom cow " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 17) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Squid " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 18) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Rabbit " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 19) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Bat " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 20) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Iron golem " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 21) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Snow golem " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 22) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Ocelot " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 23) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Horse " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 24) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Donkey " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 25) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Mule " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 26) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Skeleton horse " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 27) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Zombie horse " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 32) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Zombie " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 33) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Creeper " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 34) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Skeleton " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 35) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Spider " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 36) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Zombie pigman " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 37) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Slime " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 38) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Enderman " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 39) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Silver fish " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 40) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Cave spider " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 41) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Ghast " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 42) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Magma cube " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 43) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Blaze " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 44) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Zombie villager " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 45) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Witch " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 46) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Stray " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 47) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Husk " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 48) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Wither skeleton " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 49) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Guardian " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 50) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Elder guardian " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 51) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " NPC " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 52) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Wither " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 28) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Polar bear " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 54) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Shulker " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 55) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Endermite " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }
            if (Entity.getEntityTypeId(mobs[n]) == 53) {
                if (Entity.getNameTag(mobs[n]) == "") {
                    Entity.setNameTag(mobs[n], " Ender dragon " + Entity.getHealth(mobs[n]) + "/" + Entity.getMaxHealth(mobs[n]));
                }
            }

        }
    }
    /*for (var p = 0; p < players.length; p++) {
        var mobX2 = Entity.getX(players[p]) - getPlayerX();
        var mobY2 = Entity.getY(players[p]) - getPlayerY();
        var mobZ2 = Entity.getZ(players[p]) - getPlayerZ();
        if (mobX2 * mobX2 + mobY2 * mobY2 + mobZ2 * mobZ2 <= 20 * 20 && players[p] != getPlayerEnt()) {
if(Entity.getEntityTypeId(players[p]) == 63){
	if(Entity.getNameTag(players[p])!="undefined"){
                Entity.setNameTag(players[p], ""+Entity.getNameTag(players[p])+" "+Entity.getHealth(players[p])+"/"+Entity.getMaxHealth(players[p]));
	}
	}
	  }
	}*/
}

function destroyBlock(x, y, z, side) {
    if (block == true) preventDefault();
}

function startDestroyBlock(x, y, z, side) {
    if (block == true) preventDefault()
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {

    if (tapspam) {
        Server.sendChat(text);
    }

    if (taptp) {
        Entity.setPosition(Player.getEntity(), x, y + 3, z);
    }
    if (tapid) clientMessage(client + "Block ID: " + blockId + "\nTapped with: " + itemId + "\n" + " X: " + x + " Y: " + y + " Z: " + z + "\nFriction: " + Block.getFriction(blockId));
}

function modTick() {
    if (onlynight) Level.setTime(15000);

    if (onlyday) Level.setTime(0);

    if (glide) {
        if (Entity.getVelY(Player.getEntity()) <= 0) {
            setVelY(Player.getEntity(), -0.05)
        }
    }
    if (icewalk) {
        if (Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) != "0") {
            Level.setTile(getPlayerX() + 1, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() + 2, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() + 3, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() + 4, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() - 1, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() - 2, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() - 3, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX() - 4, getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() + 1, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() + 2, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() + 3, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() + 4, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() - 1, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() - 2, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() - 3, 79, 0);
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ() - 4, 79, 0);
        }
    }
    if (elytraPlus) {
        //if (Player.getArmorSlot(1) == 443)	{
        var player = getPlayerEnt();
        var xVel = 0.75 * Math.cos((getYaw() + 90) * DEG_TO_RAD) * Math.cos(0);
        var yVel = 0.75 * Math.sin(getPitch() * DEG_TO_RAD * -1);
        var zVel = 0.75 * Math.sin((getYaw() + 90) * DEG_TO_RAD) * Math.cos(0);
        setVelX(player, xVel);
        setVelY(player, yVel);
        setVelZ(player, zVel);
        //}
    }
    if (step && Utils.Player.isCollidedHorizontally()) {//qwertzuiop
        Entity.setPositionRelative(getPlayerEnt(), 0, 1.08, 0);
    }
    if (autowalk) {
        toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
        setVelX(getPlayerEnt(), 0.22 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.22 * playerDir[2]);
    }
    if (bhop) {
        if (Entity.getVelX(Player.getEntity()) > 0.1) {
            if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
                Entity.setVelY(Player.getEntity(), 0.5);
            }
        }
        if (Entity.getVelX(Player.getEntity()) < -0.1) {
            if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
                Entity.setVelY(Player.getEntity(), 0.5);
            }
        }
        if (Entity.getVelZ(Player.getEntity()) > 0.1) {
            if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
                Entity.setVelY(Player.getEntity(), 0.5);
            }
        }
        if (Entity.getVelZ(Player.getEntity()) < -0.1) {
            if (getTile(Player.getX(), Player.getY() - 2, Player.getZ()) > 0) {
                Entity.setVelY(Player.getEntity(), 0.5);
            }
        }
    }
}

function toDirectionalVector(dir, a, b) {
    dir[0] = Math["cos"](a) * Math["cos"](b);
    dir[1] = Math["sin"](b);
    dir[2] = Math["sin"](a) * Math["cos"](b);
}

function scc() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                scc = new android.widget.PopupWindow();
                var Layer5 = new android.widget.LinearLayout(MainActivity);
                var sc1 = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter website");
                Dialog.setContentView(Layer5);

                Layer5.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer5.addView(sc1);
                Layer5.addView(Exit);

                sc1.setText("");
                sc1.setHint("https://example.com");
                Exit.setText("View code");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        sc2 = sc1.getText();
                        Dialog.dismiss();
                        sc3();
                        print("Loading web page");
                        showMenuBtn();
                    }
                });

                scc.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                scc.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                scc.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The scc Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function sc3() {
    MainActivity.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var webs = new android.webkit.WebView(MainActivity);
            var webset = webs.getSettings();
            webset.setJavaScriptEnabled(true);
            webs.setWebChromeClient(new android.webkit.WebChromeClient());
            webs.setWebViewClient(new android.webkit.WebViewClient());
            webs.loadUrl('view-source:' + sc2);
            /*Site URL*/
            new android.app.AlertDialog.Builder(MainActivity).setView(webs).show();
        }
    }));
}

function iplu() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                iplu = new android.widget.PopupWindow();
                var Layer4 = new android.widget.LinearLayout(ctx);
                var ip1 = new android.widget.EditText(ctx);
                var Dialog = new android.app.Dialog(ctx);
                var Exit = new Button(ctx);

                Dialog.setTitle("Enter IP to trace");
                Dialog.setContentView(Layer4);

                Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer4.addView(ip1);
                Layer4.addView(Exit);

                ip1.setText("");
                ip1.setHint("IP address, domain, blank for your IP");
                Exit.setText("Trace");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        ip = ip1.getText();
                        Dialog.dismiss();
                        ip2();
                        print("Loading web page");
                        showMenuBtn();
                    }
                });

                iplu.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                iplu.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                iplu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The IPLU Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function ip2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var webs = new android.webkit.WebView(ctx);
            var webset = webs.getSettings();
            webset.setJavaScriptEnabled(true);
            webs.setWebChromeClient(new android.webkit.WebChromeClient());
            webs.setWebViewClient(new android.webkit.WebViewClient());
            webs.loadUrl('http://ip-api.com/json/' + ip);
            /*Site URL*/
            new android.app.AlertDialog.Builder(ctx).setView(webs).show();
        }
    }));
}

function pip() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                pip = new android.widget.PopupWindow();
                var Layer4 = new android.widget.LinearLayout(ctx);
                var ddip = new android.widget.EditText(ctx);
                var ddip2 = new android.widget.EditText(ctx);
                var Dialog = new android.app.Dialog(ctx);
                var Exit = new Button(ctx);

                Dialog.setTitle("Enter server");
                Dialog.setContentView(Layer4);

                Layer4.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer4.addView(ddip);
                Layer4.addView(ddip2);
                Layer4.addView(Exit);

                ddip.setText("");
                ddip.setHint("IP");
                ddip2.setText("");
                ddip2.setHint("Port");
                Exit.setText("View players");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        ply = ddip.getText();
                        poy = ddip2.getText();
                        Dialog.dismiss();
                        goto();
                        Toast.makeText(ctx, "AlphaHack: Loading web page", 1).show();
                        showMenuBtn();
                    }
                });

                pip.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                pip.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                pip.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The IP Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function goto() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var webs = new android.webkit.WebView(ctx);
            var webset = webs.getSettings();
            webset.setJavaScriptEnabled(true);
            webs.setWebChromeClient(new android.webkit.WebChromeClient());
            webs.setWebViewClient(new android.webkit.WebViewClient());
            webs.loadUrl('http://mcapi.ca/query/' + ply + ':' + poy + '/list');
            /*Site URL*/
            new android.app.AlertDialog.Builder(ctx).setView(webs).show();
        }
    }));
}

function spa2() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                new10 = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var m1 = new android.widget.EditText(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var select3 = new android.widget.EditText(MainActivity);
                var select4 = new Button(MainActivity);
                var end1 = new Button(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);

                Dialog.setTitle("Enter text & select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(m1);
                m1.setText("2p2eHax!");

                var doubleBtnS = new android.widget.LinearLayout(MainActivity);
                doubleBtnS.setOrientation(0);

                doubleBtnS.addView(select3);
                select3.setText("");
                select3.setHint("Seconds");

                doubleBtnS.addView(end1);

                end1.setText("Start spam");
                end1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        sec = select3.getText();
                        text = m1.getText();
                        seconds = sec;
                        antispam = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                Layer.addView(doubleBtnS);

                Layer.addView(select1);

                Layer.addView(select2);

                Layer.addView(select4);

                select1.setText("LBSG");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        text = m1.getText();
                        seconds = "2000";
                        antispam = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select2.setText("Mineplex");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        text = m1.getText();
                        seconds = "3000";
                        antispam = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select4.setText("Leet.cc");
                select4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        text = m1.getText();
                        var seconds = "2500";
                        antispam = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                new10.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new10.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new10.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("Bypass error: " + e);
            }
        }
    });
}

function spa() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                spa = new android.widget.PopupWindow();
                var Layer6 = new android.widget.LinearLayout(MainActivity);
                var mm = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter text for spam");
                Dialog.setContentView(Layer6);

                Layer6.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer6.addView(mm);
                Layer6.addView(Exit);

                mm.setText("2p2eHax!");
                Exit.setText("Spam");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        text = mm.getText();
                        Dialog.dismiss();
                        if (autospam2 == true) autospam = true;
                    }
                });

                spa.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                spa.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                spa.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("Spam dialog error:" + e);
            }
        }
    });
}

function dig1() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                digg = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var ddf = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);

                Dialog.setTitle("Select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(select1);
                Layer.addView(select2);

                select1.setText("1 Block");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clientMessage(client + "§7Face a block to see!");
                        autodestroy = true;
                        if (Level.getGameMode() == "2") vidd = true;
                        if (Level.getGameMode() == "1") vidd = false;
                        if (Level.getGameMode() == "0") vidd = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select2.setText("More than 1 Block");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clientMessage(client + "§7Face a block to see!");
                        extraj = true;
                        if (Level.getGameMode() == "2") vidd = true;
                        if (Level.getGameMode() == "1") vidd = false;
                        if (Level.getGameMode() == "0") vidd = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                digg.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                digg.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                digg.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("Error :" + e);
            }
        }
    });
}

function oreDialog() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                orey = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var select3 = new Button(MainActivity);
                var select4 = new Button(MainActivity);
                var select5 = new Button(MainActivity);
                var select6 = new Button(MainActivity);
                var select7 = new Button(MainActivity);
                var select8 = new Button(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);

                Dialog.setTitle("Select ore");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                var doubleBtn1 = new android.widget.LinearLayout(MainActivity);
                doubleBtn1.setOrientation(0);

                doubleBtn1.addView(select1);

                doubleBtn1.addView(select2);

                select1.setText("Coal ore");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "16";
                        var oreId = "16";
                        Dialog.dismiss();
                    }
                }));

                select2.setText("Iron ore");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "15";
                        var oreId = "15";
                        Dialog.dismiss();
                    }
                }));

                Layer.addView(doubleBtn1);

                var doubleBtn2 = new android.widget.LinearLayout(MainActivity);
                doubleBtn2.setOrientation(0);

                doubleBtn2.addView(select3);

                doubleBtn2.addView(select4);

                select3.setText("Gold ore");
                select3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "14";
                        var oreId = "14";
                        Dialog.dismiss();
                    }
                }));

                select4.setText("Diamond ore");
                select4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "56";
                        var oreId = "56";
                        Dialog.dismiss();
                    }
                }));

                Layer.addView(doubleBtn2);

                var doubleBtn3 = new android.widget.LinearLayout(MainActivity);
                doubleBtn3.setOrientation(0);

                doubleBtn3.addView(select5);

                doubleBtn3.addView(select6);

                select5.setText("Redstone ore");
                select5.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "73";
                        var oreId = "73";
                        Dialog.dismiss();
                    }
                }));

                select6.setText("Lapis ore");
                select6.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "21";
                        var oreId = "21";
                        Dialog.dismiss();
                    }
                }));

                Layer.addView(doubleBtn3);

                var doubleBtn4 = new android.widget.LinearLayout(MainActivity);
                doubleBtn4.setOrientation(0);

                doubleBtn4.addView(select7);

                doubleBtn4.addView(select8);

                select7.setText("Emerald ore");
                select7.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "129";
                        var oreId = "129";
                        Dialog.dismiss();
                    }
                }));

                select8.setText("Quartz ore");
                select8.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        oreEsp = true;
                        oreId = "153";
                        var oreId = "153";
                        Dialog.dismiss();
                    }
                }));

                Layer.addView(doubleBtn4);

                orey.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                orey.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                orey.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("Ore error: " + e);
            }
        }
    });
}

function new9() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                new9 = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);

                Dialog.setTitle("Select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(select1);

                Layer.addView(select2);

                select1.setText("Use nether block");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        useNether = true;
                        if (useNether) {
                            Level.setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 2, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 2, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 3, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 3, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY(), getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY(), getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 1, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() + 1, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() + 1, getPlayerZ() - 3, 90, 0);

                            Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY(), getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY(), getPlayerZ() - 3, 90, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 2, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() + 2, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() + 2, getPlayerZ() - 3, 90, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 3, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() + 3, getPlayerZ() - 3, 90, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() + 3, getPlayerZ() - 3, 90, 0);
                        }
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select2.setText("Use fire block");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        useFire = true;
                        if (useFire) {
                            Level.setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() - 1, getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX() + 2, getPlayerY() + 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 1, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 2, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 2, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 3, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 3, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 1, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 1, getPlayerY() + 4, getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() + 2, getPlayerY(), getPlayerZ() - 3, 49, 0);
                            Level.setTile(getPlayerX() - 2, getPlayerY(), getPlayerZ() - 3, 49, 0);

                            Level.setTile(getPlayerX(), getPlayerY() + 1, getPlayerZ() - 3, 51, 0);
                        }
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                new9.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new9.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new9.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("error: " + e);
            }
        }
    });
}

function new3() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                new3 = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var select3 = new Button(MainActivity);
                var select4 = new Button(MainActivity);
                var Exit = new Button(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);

                Dialog.setTitle("Select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(select1);

                Layer.addView(select2);

                Layer.addView(select3);

                Layer.addView(select4);

                Layer.addView(Exit);

                select1.setText("Lightning");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        lightning = true;
                        if (primedtnt == true) primedtnt = false;
                        if (arrow == true) arrow = false;
                        if (exporb == true) exporb = false;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select2.setText("Primed tnt");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        primedtnt = true;
                        if (lightning == true) lightning = false;
                        if (arrow == true) arrow = false;
                        if (exporb == true) exporb = false;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select3.setText("Arrow");
                select3.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        arrow = true;
                        if (lightning == true) lightning = false;
                        if (primedtnt == true) primedtnt = false;
                        if (exporb == true) exporb = false;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select4.setText("Exp orb");
                select4.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        exporb = true;
                        if (lightning == true) lightning = false;
                        if (primedtnt == true) primedtnt = false;
                        if (arrow == true) arrow = false;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                Exit.setText("Off");
                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        exporb = false;
                        lightning = false;
                        arrow = false;
                        primedtnt = false;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                new3.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new3.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new3.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("ent spawn Dialog error:" + e);
            }
        }
    });
}

function new2() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                new2 = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var select3 = new Button(MainActivity);
                var ddf = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(select1);
                Layer.addView(select2);
                //Layer.addView(select3);
                Layer.addView(ddf);
                Layer.addView(Exit);

                select1.setText("Use lava?");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clientMessage(client + "§7Face a block to see!");
                        vid = 11;
                        grief = true;
                    }
                }));

                select2.setText("Use water?");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        clientMessage(client + "§7Face a block to see!");
                        vid = 8;
                        grief = true;
                    }
                }));

                ddf.setText("");
                ddf.setHint("Pick item ID");


                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {

                        vid = ddf.getText();
                        grief = true;
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                new2.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new2.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new2.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("Error :" + e);
            }
        }
    });
}

function named() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var ntd = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter difficulty");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(ntd);
                Layer8.addView(Exit);

                ntd.setText("");
                ntd.setHint("0 = peaceful, 1 = normal, 2 = medium, 3 = hard");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        nametd = ntd.getText();
                        Dialog.dismiss();
                        setdiff();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The setdiff Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setdiff() {
    Level.setDifficulty(nametd);
}

function nameMe() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var nt = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter nickname");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(nt);
                Layer8.addView(Exit);

                nt.setText("");
                nt.setHint("New nickname");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        nametgg = nt.getText();
                        Dialog.dismiss();
                        setName();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The setName Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setName() {
    Entity.setNameTag(Player.getEntity(), nametgg);
}

function block1() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var bd = new android.widget.EditText(MainActivity);
                var bn = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Set block light");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(bn);
                Layer8.addView(bd);
                Layer8.addView(Exit);

                bd.setText("");
                bd.setHint("Block ID");
                bn.setText("");
                bn.setHint("New light level");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        idm = bd.getText();
                        levelm = bn.getText();
                        Dialog.dismiss();
                        setLight();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The block L Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setLight() {
    Block.setLightLevel(idm, levelm);
}

function block2() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var bi = new android.widget.EditText(MainActivity);
                var br = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Set block resistance");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(bi);
                Layer8.addView(br);
                Layer8.addView(Exit);

                bi.setText("");
                bi.setHint("Block ID");
                br.setText("");
                br.setHint("Explosion resistance");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        idb = bi.getText();
                        resis = br.getText();
                        Dialog.dismiss();
                        setResis();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The block R Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setResis() {
    Block.setExplosionResistance(idb, resis);
}

function newhealth() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var enh = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter new hearts");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(enh);
                Layer8.addView(Exit);

                enh.setText("");
                enh.setHint("Half heart number here");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        newheart = enh.getText();
                        Dialog.dismiss();
                        sethealth();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The set health Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function sethealth() {
    Entity.setMaxHealth(getPlayerEnt(), newheart);
}

function horsehealth1() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer10 = new android.widget.LinearLayout(MainActivity);
                var eha = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter new hearts");
                Dialog.setContentView(Layer10);

                Layer10.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer10.addView(eha);
                Layer10.addView(Exit);

                eha.setText("");
                eha.setHint("Hearts number here");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        horseheart = eha.getText();
                        Dialog.dismiss();
                        clientMessage(client + "Tap mob to change health.");
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The set health Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function new4() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                new3 = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var select1 = new Button(MainActivity);
                var select2 = new Button(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Select");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();

                Layer.addView(select1);
                Layer.addView(select2);
                //Layer.addView(Exit);

                select1.setText("Child");
                select1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        newage = "-2000";
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                select2.setText("Adult");
                select2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        newage = "0";
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                }));

                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {

                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                new3.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new3.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                new3.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The new Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function XGive() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var XP = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter XP Amount");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(XP);
                Layer.addView(Exit);

                XP.setText("");
                XP.setHint("EXP");
                Exit.setText("GET exp");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        L = XP.getText();
                        Dialog.dismiss();
                        XG();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The XP Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function XG() {
    Server.getPort();
    Player.setLevel(Math.round(L));
}

function Give() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var ID = new android.widget.EditText(MainActivity);
                var Amount = new android.widget.EditText(MainActivity);
                var Damage = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter ID,Amt,Dmg");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(ID);
                Layer.addView(Amount);
                Layer.addView(Damage);
                Layer.addView(Exit);

                ID.setText("");
                ID.setHint("Item ID");
                Amount.setText("");
                Amount.setHint("Item Amount");
                Damage.setText("");
                Damage.setHint("Item Damage");
                Exit.setText("Give items");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        I = ID.getText();
                        A = Amount.getText();
                        D = Damage.getText();
                        Dialog.dismiss();
                        give2();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The Give Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function give2() {
    Player.addItemInventory(I, A, D);
}

function newn() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                newn = new android.widget.PopupWindow();
                var Layerb5 = new android.widget.LinearLayout(MainActivity);
                var nNuke = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter nuke amount");
                Dialog.setContentView(Layerb5);

                Layerb5.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layerb5.addView(nNuke);
                Layerb5.addView(Exit);

                nNuke.setText("");
                nNuke.setHint("Amount");
                Exit.setText("Nuke");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        lenuke = nNuke.getText();
                        Dialog.dismiss();
                        setNuke();
                        showMenuBtn();
                    }
                });

                newn.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                newn.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                newn.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The newn Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setNuke() {
    explode(getPlayerX(), getPlayerY(), getPlayerZ(), lenuke);
}

function newspeed() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer8 = new android.widget.LinearLayout(MainActivity);
                var vspee = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter custom speed");
                Dialog.setContentView(Layer8);

                Layer8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer8.addView(vspee);
                Layer8.addView(Exit);

                vspee.setText("");
                vspee.setHint("numbers here");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        nspee = vspee.getText();
                        Dialog.dismiss();
                        setspeed();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The set speed Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setspeed() {
    ModPE.setGameSpeed(nspee);
}

function Tsele() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var X = new android.widget.EditText(MainActivity);
                var Y = new android.widget.EditText(MainActivity);
                var Z = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Type coords to teleport");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(X);
                Layer.addView(Y);
                Layer.addView(Z);
                Layer.addView(Exit);

                X.setText("");
                X.setHint("X");
                Y.setText("");
                Y.setHint("Y");
                Z.setText("");
                Z.setHint("Z");
                Exit.setText("Teleport");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        px = X.getText();
                        py = Y.getText();
                        pz = Z.getText();
                        Dialog.dismiss();
                        setTp();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The Teleport Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setTp() {
    Entity.setPosition(Player.getEntity(), px, py, pz);
}

function setDialogW() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var w = new android.widget.EditText(MainActivity);
                var w2 = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Set Weather");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(w);
                Layer.addView(w2);
                Layer.addView(Exit);

                w.setText("");
                w.setHint("rain/snow = 1");
                w2.setText("");
                w2.setHint("lightning = 1");
                Exit.setText("Set weather");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        v = w.getText();
                        v2 = w2.getText();
                        Dialog.dismiss();
                        setWeather();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The WS Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function setWeather() {
    Level.setRainLevel(v);
    Level.setLightningLevel(v2);
}

function atact() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                atact = new android.widget.PopupWindow();
                var Layerb4 = new android.widget.LinearLayout(MainActivity);
                var editAtk = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new android.widget.Button(MainActivity);

                Dialog.setTitle("When attacking send...");
                Dialog.setContentView(Layerb4);

                Layerb4.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layerb4.addView(editAtk);
                Layerb4.addView(Exit);

                editAtk.setText("");
                editAtk.setHint("Command or message");
                Exit.setText("Set action");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        newAction = editAtk.getText();
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                atact.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                atact.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                atact.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The atact Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function atact2() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                atact = new android.widget.PopupWindow();
                var Layerz8 = new android.widget.LinearLayout(MainActivity);
                var editAtk = new android.widget.EditText(MainActivity);
                var editAtk2 = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new android.widget.Button(MainActivity);

                Dialog.setTitle("When dying send...");
                Dialog.setContentView(Layerz8);

                Layerz8.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layerz8.addView(editAtk);
                Layerz8.addView(editAtk2);
                Layerz8.addView(Exit);

                editAtk.setText("");
                editAtk.setHint("Command or message");
                editAtk2.setText("");
                editAtk2.setHint("Amount of hearts");
                Exit.setText("Set action");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        newAction2 = editAtk.getText();
                        actionHeart = editAtk2.getText();
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                atact.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                atact.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                atact.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The atact Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function signEditor() {
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(ctx);
                var xy = new android.widget.EditText(ctx);
                var xy2 = new android.widget.EditText(ctx);
                var Dialog = new android.app.Dialog(ctx);
                var Exit = new android.widget.Button(ctx);

                Dialog.setTitle("Enter sign line & text");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(xy);
                Layer.addView(xy2);
                Layer.addView(Exit);

                xy.setText("");
                xy.setHint("Sign line: (0-3)");
                xy2.setText("");
                xy2.setHint("New sign text");
                Exit.setText("done");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        text4 = xy.getText();
                        line4 = xy2.getText();
                        newSignText();
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The signer Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function newSignText() {
    Level.setSignText(notex, notey, notez, text4, line4);
}

function fov() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var LayerFov = new android.widget.LinearLayout(MainActivity);
                var fin = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var reset = new Button(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Enter new fov");
                Dialog.setContentView(LayerFov);

                LayerFov.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                LayerFov.addView(fin);
                LayerFov.addView(reset);
                LayerFov.addView(Exit);

                fin.setText("");
                fin.setHint("Fov number");
                reset.setText("reset fov");
                Exit.setText("done");

                reset.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        ModPE.resetFov();
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        typedFov = fin.getText();
                        Dialog.dismiss();
                        startFov();
                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The set fov Dialog:" + e);
            }
        }
    });
}

function startFov() {
    ModPE.setFov(typedFov);
}

function sendEtc() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                sendEtc = new android.widget.PopupWindow();
                var Layerz89 = new android.widget.LinearLayout(MainActivity);
                var datMsg = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new android.widget.Button(MainActivity);

                Dialog.setTitle("Send to all");
                Dialog.setContentView(Layerz89);

                Layerz89.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layerz89.addView(datMsg);
                Layerz89.addView(Exit);

                datMsg.setText("");
                datMsg.setHint("Type your message...");
                Exit.setText("Send");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        urMsg = datMsg.getText();
                        sendToAll();
                        Dialog.dismiss();
                        showMenuBtn();
                    }
                });

                sendEtc.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                sendEtc.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                sendEtc.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The sendEtc Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function sendToAll() {
    /*if i use sendToAll(urMsg) instead of sendToAll(); it freezes the device then crashes launcher.. -.-*/
    var albet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    for (var sheep = 0; sheep < 35; sheep++) {
        Server.sendChat("./tell " + albet[sheep] + " " + urMsg);
    }
}

function rangeset() {
    MainActivity.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                GetText = new android.widget.PopupWindow();
                var Layer = new android.widget.LinearLayout(MainActivity);
                var rang = new android.widget.EditText(MainActivity);
                var Dialog = new android.app.Dialog(MainActivity);
                var Exit = new Button(MainActivity);

                Dialog.setTitle("Aimaura range");
                Dialog.setContentView(Layer);

                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                Dialog.show();
                Layer.addView(rang);
                Layer.addView(Exit);

                rang.setText("");
                rang.setHint("Range...");
                Exit.setText("Save");

                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(view) {
                        aimrange = rang.getText();
                        Dialog.dismiss();

                        showMenuBtn();
                    }
                });

                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
            } catch (e) {
                print("The range Dialog Is Malfunctioning:" + e);
            }
        }
    });
}

function heightset() {
}

function save() {
    var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
    var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/AlphaHackPE/homes/";
    java.io.File(path).mkdirs();
    file.createNewFile();
    var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
    var string = "";
    write.append(xhome.toString());
    write.append("," + yhome.toString());
    write.append("," + zhome.toString());
    write.close();

}

function load() {
    var line, string = "";
    var file = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/AlphaHackPE/homes/", "home " + Level.getWorldDir() + ".txt/");
    var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/AlphaHackPE/homes/";
    if (!file.exists()) {
        clientMessage(client + "The home doesn't exist");
        java.io.File(path).mkdirs();
    } else {
        var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
        while ((line = readfile.readLine()) != null) {
            var t1 = line + java.lang.System.getProperty("line.seperator");
            string += t1.substring(0, t1.length - 4);
            var t2 = line;
            if ((line = readfile.readLine()) != null) string += "\n";
            line = t2;
        }
        xhome = parseInt(string.split(",")[0]);
        yhome = parseInt(string.split(",")[1]);
        zhome = parseInt(string.split(",")[2]);
        Entity.setPosition(Player.getEntity(), xhome, yhome, zhome);
    }
}

function leaveGame() {
    ModPE.setGameSpeed(20);
    var liquidwalk = false;
    var xray = false;
    var ttot = false;
    var antivoid = false;
    var armor = false;
    var coords = false;
    var glide = false;
    var tapspam = false;
    var tapdestroy = false;
    var block = false;
    var taptp = false;
    var sign = false;
    var autodestroy = false;
    var autospam = false;
    var autodestroy2 = false;
    var autospam2 = false;
    var onlyday = false;
    var onlynight = false;
    var chestesp = false;
    var tapnuke = false;
    var autonuke = false;
    var antispam = false;
    var antispam2 = false;
    var playeresp = false;
    var tapid = false;
    var noclip = false;
    var extraj = false;
    var getvel = false;
    var yawpitch = false;
    var airwalk = false;
    var changeSpeed = false;
}

function twerking() {
    TTick++
    if (TTick == 0) Entity.setSneaking(getPlayerEnt(), true);
    if (TTick == 2) Entity.setSneaking(getPlayerEnt(), false);
    if (TTick == 4) Entity.setSneaking(getPlayerEnt(), true);
    if (TTick == 6) Entity.setSneaking(getPlayerEnt(), false);
    if (TTick == 8) Entity.setSneaking(getPlayerEnt(), true);
    if (TTick == 10) Entity.setSneaking(getPlayerEnt(), false);

    if (TTick == 11) TTick = 0;
}

function getNearestEntity(maxrange) {
    var players = Server.getAllPlayers();
    var small = maxrange;
    var ent = null;
    if (players != null) {
        for (var i = 0; i < players.length; i++) {
            var x = Entity.getX(players[i]) - getPlayerX();
            var y = Entity.getY(players[i]) - getPlayerY();
            var z = Entity.getZ(players[i]) - getPlayerZ();
            var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
            if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
                small = dist;
                ent = players[i];
            }
        }
        return ent;
    }
}

function getNearestEntity2(maxrange) {
    var mobs = Entity.getAll();
    var small = maxrange;
    var ent = null;
    if (mobs != null) {
        for (var i = 0; i < mobs.length; i++) {
            var x = Entity.getX(mobs[i]) - getPlayerX();
            var y = Entity.getY(mobs[i]) - getPlayerY();
            var z = Entity.getZ(mobs[i]) - getPlayerZ();
            var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
            if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
                small = dist;
                ent = mobs[i];
            }
        }
        return ent;
    }
}

function crosshairAimAt(ent, pos) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && pos instanceof Array) {

            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63)
            y += 0.5;
        var a = 0.5 + Entity.getX(ent);
        var b = Entity.getY(ent);
        var c = 0.5 + Entity.getZ(ent);
        var len = Math.sqrt(x * x + y * y + z * z);
        var y = y / len;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch);
        }
    }
}

function fastEat() {
    var foodArray = new Array("260", "282", "297", "319", "320", "322", "335", "349", "350", "354", "357", "360", "363", "364", "365", "366", "367", "382", "391", "392", "400", "411", "412", "423", "424");
    Player.getCarriedItem();
    for (var i = 0; i < foodArray.length; i++) {
        if (Player.getCarriedItem() == foodArray[i]) {
            ModPE.setGameSpeed(100);
        }
        if (Player.getCarriedItem() != foodArray[i]) {
            ModPE.setGameSpeed(20);
        }
    }
}

function bright() {
    var i = 0;
    i++
    Block.setLightLevel(i, 1000);
    ModPE.resetImages();
}

function xrayRepeat() {
    Block.setLightLevel(14, 1000);
    Block.setLightLevel(15, 1000);
    Block.setLightLevel(16, 1000);
    Block.setLightLevel(21, 1000);
    Block.setLightLevel(22, 1000);
    Block.setLightLevel(49, 1000);
    Block.setLightLevel(52, 1000);
    Block.setLightLevel(54, 1000);
    Block.setLightLevel(56, 1000);
    Block.setLightLevel(57, 1000);
    Block.setLightLevel(61, 1000);
    Block.setLightLevel(63, 1000);
    Block.setLightLevel(73, 1000);
    Block.setLightLevel(129, 1000);
    Block.setLightLevel(130, 1000);
    Block.setLightLevel(133, 1000);
    Block.setLightLevel(152, 1000);
    Block.setLightLevel(153, 1000);
    Block.setLightLevel(154, 1000);
    Block.setLightLevel(232, 1000);
    Block.setRenderLayer(1, 1);
    Block.setRenderLayer(2, 1);
    Block.setRenderLayer(3, 1);
    Block.setRenderLayer(12, 1);
    Block.setRenderLayer(24, 1);
    Block.setRenderLayer(78, 1);
    ModPE.resetImages();
}

function spawnIfLowHealth() {
    var i = 0;
    Entity.getHealth(getPlayerEnt());
    if (Entity.getHealth(getPlayerEnt()) == actionHeart) {
        i++
        if (i == "1") {
            Server.sendChat(newAction2);
        }
    }
}

function changeSpeedOnBlock() {
    var x = getPlayerX();
    var y = getPlayerY();
    var z = getPlayerZ();
    var myArray = new Array("30", "79", "88", "174");
    for (var i = 0; i < myArray.length; i++) {
        /*is*/
        if (getTile(x, y - 1, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y - 2, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x + 1, y, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y, z + 1) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x - 1, y, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y, z - 1) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x + 1, y - 1, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y - 1, z + 1) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x - 1, y - 1, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y - 1, z - 1) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x + 1, y - 2, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y - 2, z + 1) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x - 1, y - 2, z) == myArray[i]) ModPE.setGameSpeed(100);
        if (getTile(x, y - 2, z - 1) == myArray[i]) ModPE.setGameSpeed(100);
        /*not*/
        if (getTile(x, y - 1, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y - 2, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x + 1, y, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y, z + 1) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x - 1, y, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y, z - 1) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x + 1, y - 1, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y - 1, z + 1) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x - 1, y - 1, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y - 1, z - 1) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x + 1, y - 2, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y - 2, z + 1) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x - 1, y - 2, z) != myArray[i]) ModPE.setGameSpeed(20);
        if (getTile(x, y - 2, z - 1) != myArray[i]) ModPE.setGameSpeed(20);
    }
    /*other*/
    Block.setFriction(79, 0.6000000238418579);
    Block.setFriction(174, 0.6000000238418579);
    Block.setFriction(88, 0.6000000238418579);
    Block.setShape(30, null, null, null, null, null, null);
}

function onlyFriction() {
    var x = getPlayerX();
    var y = getPlayerY();
    var z = getPlayerZ();
    Block.setFriction(79, 0.6000000238418579);
    Block.setFriction(174, 0.6000000238418579);
    Block.setFriction(88, 0.6000000238418579);
    for (var i = 0; i < 100; i++) {
        Block.setFriction(i, 2); /**2 is very fast, looking into an easy speed later on.*/
    }
}

function keepSlot() {
    Player.setSelectedSlotId(Player.getSelectedSlotId());
    Player.getCarriedItem();
    Player.setSelectedSlotId(Player.getCarriedItem());
}

function replaceAll(search, replacement, str) {
    var target = str;
    return target.replace(new RegExp(search, 'g'), replacement);
};
/*Thanks to godsoft029 !*/
function toAlphaSpeak(text) {
    var end = text.toUpperCase();
    var normal = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var alpha = new Array("α", "в", "c", "∂", "є", "ƒ", "g", "н", "ι", "נ", "к", "ℓ", "м", "η", "σ", "ρ", "q", "я", "ѕ", "т", "υ", "ν", "ω", "χ", "у", "z");
    for (i = 0; i < normal.length; i++) {
        end = replaceAll(normal[i], alpha[i], end);
    }
    return end;
}

function toBinarySpeak(text) {
    var end = text.toUpperCase();
    var normal = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var binary = new Array("01100001", "01100010", "01100011", "01100100", "01100101", "01100110", "01100111", "01101000", "01101001", "01101010", "01101011", "01101100", "01101101", "01101110", "01101111", "01110000", "01110001", "01110010", "01110011", "01110100", "01110101", "01110110", "01110111", "01111000", "01111001", "01111010");
    for (i = 0; i < normal.length; i++) {
        end = replaceAll(normal[i], binary[i], end);
    }
    return end;
}

function toZalgoSpeak(text) {
    var end = text.toUpperCase();
    var normal = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var zalgo = new Array("á̡̢", "b́͏҉", "c̷̨͘", "d̨", "e̢͘͡", "f̕͘", "g̶̡", "h́̏ͭ̄̚", "i̹̞̱͍̪̙̠̳̰", "j̧͢͞", "k҉", "ļ҉͜", "m̸̢", "n͈̯̱̝̲̯̬̘̭̫̗̭͈͍ͭ̔͐ͫ́̎̀̉̐ͫ̿̚", "ó҉", "p͆̌̂̿̊̌", "q̢͛ͪ̆ͦ̓̏ͮ", "r͝͠", "s̨", "t͠҉̸", "u͏͝", "v͏҉̨", "w̶̡͜", "x̟̗̘̗̅ͣ̐̅", "y͔͇̠", "Z̦͙̯̯͚̱͓̩̬͕̖̰̭͎̐̄̒ͤ͑̎̐̊̓ͥͬ̈́͌͂͊͟");
    for (i = 0; i < normal.length; i++) {
        end = replaceAll(normal[i], zalgo[i], end);
    }
    return end;
}

function toStrikeSpeak(text) {
    var end = text.toUpperCase();
    var normal = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    var strike = new Array("a̶", "b̶", "c̶", "d̶", "e̶", "f̶", "g̶", "h̶", "i̶", "j̶", "k̶", "l̶", "m̶", "n̶", "o̶", "p̶", "q̶", "r̶", "s̶", "t̶", "u̶", "v̶", "w̶", "x̶", "y̶", "z̶");
    for (i = 0; i < normal.length; i++) {
        end = replaceAll(normal[i], strike[i], end);
    }
    return end;
}

function toSwearSpeak(text) {
    var end = text.toUpperCase();
    var normal = new Array("BITCH", "FUCK"); //TODO
    var swear = new Array("B¡tch", "Fuck"); //TODO
    for (i = 0; i < normal.length; i++) {
        end = replaceAll(normal[i], swear[i], end);
    }
    return end;
}

function chatHook(str) {
    if (str.charAt(0) != "." && str.charAt(0) != "/") {
        if (alphatext) {
            preventDefault();
            com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
            Server.sendChat(" " + toAlphaSpeak(str));
        }
        if (binarytext) {
            preventDefault();
            com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
            Server.sendChat(" " + toBinarySpeak(str));
        }
        if (zalgotext) {
            preventDefault();
            com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
            Server.sendChat(" " + toZalgoSpeak(str));
        }
        if (striketext) {
            preventDefault();
            com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
            Server.sendChat(" " + toStrikeSpeak(str));
        }
        if (preventsame) {
            preventDefault();
            var alphabet1 = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
            var alphabet2 = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
            for (i = 0; i < alphabet1.length; i++) {
                Server.sendChat("" + alphabet1[i] + " " + i + " " + str + " " + i + " " + alphabet1[i]);
            }
        }
    }
}

function rptask3() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (antispam) {
                        offtime++
                        Server.sendChat(offtime + " " + text + " " + offtime);
                        Server.getPort();
                        if (Server.getPort() == "0") clientMessage(offtime + " " + text + " " + offtime);
                    }
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask3())
                }
            }), seconds)
        }
    }))
}
rptask3()

function rptask2() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (chestesp) {
                        var x = getPlayerX();
                        var y = getPlayerY();
                        var z = getPlayerZ();
                        var newX;
                        var newY;
                        var newZ;
                        for (var blockX = -chestTracersRange; blockX <= chestTracersRange; blockX++) {
                            for (var blockY = -chestTracersRange; blockY <= chestTracersRange; blockY++) {
                                for (var blockZ = -chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
                                    newX = x + blockX;
                                    newY = y + blockY;
                                    newZ = z + blockZ;
                                    if (getTile(newX, newY, newZ) == 54 || getTile(newX, newY, newZ) == 23) {
                                        AlphaHack.drawTracer(newX, newY, newZ, chestTracersGroundMode == "on" ? true : false, chestTracersParticle);
                                    }
                                }
                            }
                        }
                    }
                    /*
		    *TODO Fix these :/
		    *
		    if(oreEsp){
                var x = getPlayerX();
 		var y = getPlayerY();
 		var z = getPlayerZ();
 		var newX;
 		var newY;
 		var newZ;
 		for(var blockX = - oreTracersRange; blockX <= oreTracersRange; blockX++) {
 			for(var blockY = - oreTracersRange; blockY <= oreTracersRange; blockY++) {
 				for(var blockZ = - oreTracersRange; blockZ <= oreTracersRange; blockZ++) {
 					newX = x + blockX;
  					newY = y + blockY;
  					newZ = z + blockZ;
  					if(getTile(newX, newY, newZ) == oreId) {
  						AlphaHack.drawTracer(newX, newY, newZ, oreTracersGroundMode=="on"?true:false, oreTracersParticle);
  					}
  				}
  			}
 		}
                    }
                    if(playeresp){
                var x = getPlayerX();
 		var y = getPlayerY();
 		var z = getPlayerZ();
 		var newX;
 		var newY;
 		var newZ;
 		for(var blockX = - playerTracersRange; blockX <= playerTracersRange; blockX++) {
 			for(var blockY = - playerTracersRange; blockY <= playerTracersRange; blockY++) {
 				for(var blockZ = - playerTracersRange; blockZ <= playerTracersRange; blockZ++) {
 					newX = x + blockX;
  					newY = y + blockY;
  					newZ = z + blockZ;
					var mobs = Server.getAllPlayers();
                                        for (var e = 0; e < mobs.length; e++) {
                                        var newX = Entity.getX(mobs[e]) - getPlayerX();
                                        var newY = Entity.getY(mobs[e]) - getPlayerY();
                                        var newZ = Entity.getZ(mobs[e]) - getPlayerZ();
                                        if(Entity.getRenderType(mobs[e]) == 27 || Entity.getEntityTypeId(mobs[e]) == 63){
						AlphaHack.drawTracer(newX, newY, newZ, playerTracersGroundMode=="on"?true:false, playerTracersParticle);
                                        }
                                }
  			}
 		}
	}
                    }*/
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask2())
                }
            }), 2000)
        }
    }))
}
rptask2()

function enchant_menuv2() {
    MainActivity.runOnUiThread(new Runnable({
        run: function() {
            try {
                var enchantLayout = new LinearLayout(MainActivity);
                var enchantScroll = new ScrollView(MainActivity);
                var enchantLayout1 = new LinearLayout(MainActivity);
                enchantLayout.setOrientation(1);
                enchantLayout1.setOrientation(1);
                enchantScroll.addView(enchantLayout);
                enchantLayout1.addView(enchantScroll);

                var exit = new Button(MainActivity);
                exit.setText("Exit");
                exit.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        enchant.dismiss();
                        showMenuBtn();
                    }
                });
                enchantLayout.addView(exit);

                var ena = new Button(MainActivity);
                ena.setText("Aqua Affinity");
                ena.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en1();
                    }
                }));
                enchantLayout.addView(ena);

                function en1() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add1();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add1() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, ll);
                }

                var enb = new Button(MainActivity);
                enb.setText("Bane Of Athropods");
                enb.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en2();
                    }
                }));
                enchantLayout.addView(enb);

                function en2() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add2();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add2() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, ll);
                }

                var enc = new Button(MainActivity);
                enc.setText("Blast Protection");
                enc.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en3();
                    }
                }));
                enchantLayout.addView(enc);

                function en3() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add3();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add3() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, ll);
                }

                var enf = new Button(MainActivity);
                enf.setText("Depth Strider");
                enf.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en5();
                    }
                }));
                enchantLayout.addView(enf);

                function en5() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add5();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add5() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, ll);
                }

                var ene = new Button(MainActivity);
                ene.setText("Efficiency");
                ene.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en6();
                    }
                }));
                enchantLayout.addView(ene);

                function en6() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add6();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add6() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, ll);
                }

                var eng = new Button(MainActivity);
                eng.setText("Feather Falling");
                eng.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en7();
                    }
                }));
                enchantLayout.addView(eng);

                function en7() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add7();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add7() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, ll);
                }

                var enh = new Button(MainActivity);
                enh.setText("Fire Aspect");
                enh.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en8();
                    }
                }));
                enchantLayout.addView(enh);

                function en8() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add8();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add8() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, ll);
                }

                var eni = new Button(MainActivity);
                eni.setText("Fire Protection");
                eni.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en9();
                    }
                }));
                enchantLayout.addView(eni);

                function en9() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add9();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add9() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, ll);
                }

                var enj = new Button(MainActivity);
                enj.setText("Flame");
                enj.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en10();
                    }
                }));
                enchantLayout.addView(enj);

                function en10() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add10();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add10() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, ll);
                }

                var enk = new Button(MainActivity);
                enk.setText("Fortune");
                enk.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en11();
                    }
                }));
                enchantLayout.addView(enk);

                function en11() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add11();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add11() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, ll);
                }

                var enl = new Button(MainActivity);
                enl.setText("Infinity");
                enl.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en12();
                    }
                }));
                enchantLayout.addView(enl);

                function en12() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add12();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add12() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, ll);
                }

                var enm = new Button(MainActivity);
                enm.setText("Knockback");
                enm.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en13();
                    }
                }));
                enchantLayout.addView(enm);

                function en13() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add13();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add13() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, ll);
                }

                var enn = new Button(MainActivity);
                enn.setText("Looting");
                enn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en14();
                    }
                }));
                enchantLayout.addView(enn);

                function en14() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add14();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add14() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, ll);
                }

                var eno = new Button(MainActivity);
                eno.setText("Luck of the sea");
                eno.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en15();
                    }
                }));
                enchantLayout.addView(eno);

                function en15() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add15();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add15() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, ll);
                }

                var enp = new Button(MainActivity);
                enp.setText("Lure");
                enp.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en16();
                    }
                }));
                enchantLayout.addView(enp);

                function en16() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add16();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add16() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, ll);
                }

                var enq = new Button(MainActivity);
                enq.setText("Power");
                enq.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en17();
                    }
                }));
                enchantLayout.addView(enq);

                function en17() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add17();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add17() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, ll);
                }

                var enr = new Button(MainActivity);
                enr.setText("Projectile protection");
                enr.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en18();
                    }
                }));
                enchantLayout.addView(enr);

                function en18() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add18();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add18() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, ll);
                }

                var ens = new Button(MainActivity);
                ens.setText("Protection");
                ens.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en19();
                    }
                }));
                enchantLayout.addView(ens);

                function en19() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add19();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add19() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, ll);
                }

                var ent = new Button(MainActivity);
                ent.setText("Punch");
                ent.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en20();
                    }
                }));
                enchantLayout.addView(ent);

                function en20() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add20();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add20() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, ll);
                }

                var enu = new Button(MainActivity);
                enu.setText("Respiration");
                enu.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en21();
                    }
                }));
                enchantLayout.addView(enu);

                function en21() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add21();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add21() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, ll);
                }

                var env = new Button(MainActivity);
                env.setText("Sharpness");
                env.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en22();
                    }
                }));
                enchantLayout.addView(env);

                function en22() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add22();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add22() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, ll);
                }

                var enw = new Button(MainActivity);
                enw.setText("Silk touch");
                enw.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en23();
                    }
                }));
                enchantLayout.addView(enw);

                function en23() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add23();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add23() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, ll);
                }

                var enx = new Button(MainActivity);
                enx.setText("Smite");
                enx.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en24();
                    }
                }));
                enchantLayout.addView(enx);

                function en24() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add24();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add24() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, ll);
                }

                var eny = new Button(MainActivity);
                eny.setText("Thorns");
                eny.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en25();
                    }
                }));
                enchantLayout.addView(eny);

                function en25() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add25();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add25() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, ll);
                }

                var enz = new Button(MainActivity);
                enz.setText("Unbreaking");
                enz.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        en26();
                    }
                }));
                enchantLayout.addView(enz);

                function en26() {
                    MainActivity.runOnUiThread(new java.lang.Runnable() {
                        run: function() {
                            try {
                                GetText = new android.widget.PopupWindow();
                                var Layer = new android.widget.LinearLayout(MainActivity);
                                var lvl = new android.widget.EditText(MainActivity);
                                var Dialog = new android.app.Dialog(MainActivity);
                                var Exit = new android.widget.Button(MainActivity);

                                Dialog.setTitle("Enter Level");
                                Dialog.setContentView(Layer);

                                Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
                                Dialog.show();
                                Layer.addView(lvl);
                                Layer.addView(Exit);

                                lvl.setText("");
                                lvl.setHint("Level");
                                Exit.setText("Done");

                                Exit.setOnClickListener(new android.view.View.OnClickListener() {
                                    onClick: function(view) {
                                        ll = lvl.getText();
                                        Dialog.dismiss();
                                        add26();
                                        showMenuBtn();
                                    }
                                });

                                GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                                GetText.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
                            } catch (e) {
                                print("The Enchant Dialog Is Malfunctioning:" + e);
                            }
                        }
                    });
                }

                function add26() {
                    Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, ll);
                }

                //Enchantment.AQUA_AFFINITY;
                //Enchantment.BANE_OF_ARTHROPODS;
                //Enchantment.BLAST_PROTECTION;
                //Enchantment.DEPTH_STRIDER;
                //Enchantment.EFFICIENCY;
                //Enchantment.FEATHER_FALLING;
                //Enchantment.FIRE_ASPECT;
                //Enchantment.FIRE_PROTECTION;
                //Enchantment.FLAME;
                //Enchantment.FORTUNE;
                //Enchantment.INFINITY;
                //Enchantment.KNOCKBACK;
                //Enchantment.LOOTING;
                //Enchantment.LUCK_OF_THE_SEA;
                //Enchantment.LURE;
                //Enchantment.POWER;
                //Enchantment.PROJECTILE_PROTECTION;
                //Enchantment.PROTECTION;
                //Enchantment.PUNCH;
                //Enchantment.RESPIRATION;
                //Enchantment.SHARPNESS;
                //Enchantment.SILK_TOUCH;
                //Enchantment.SMITE;
                //Enchantment.THORNS;
                //Enchantment.UNBREAKING;

                enchant = new PopupWindow(enchantLayout1, MainActivity.getWindowManager().getDefaultDisplay().getWidth() / GUISize, MainActivity.getWindowManager().getDefaultDisplay().getHeight());
                if (default1 == true) enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
                if (default1 == false) enchant.setBackgroundDrawable(new ColorDrawable(GUIColor));
                var bg = new android.graphics.drawable.GradientDrawable();
                bg.setColor(Color.TRANSPARENT);
                bg.setStroke(10, GUIStroke);
                enchantLayout1.setBackgroundDrawable(bg);
                enchantLayout1.setPadding(20, 0, 20, 0);
                enchant.showAtLocation(MainActivity.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
            } catch (error) {
                Toast.makeText(MainActivity, "Error! : " + error, 1).show();
            }
        }
    }));
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (Debug == null || Debug.isShowing() == false) {
                        net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
                        net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);
                        enableMod();
                        showMenuBtn();
                    }
                    if (autospam) {
                        Server.sendChat("" + text + "");
                    }
                    if (hackk) {
                        numhack++
                        Server.sendChat("./login " + numhack);
                        clientMessage("./login " + numhack);
                    }
                    if (hackk2) {
                        numhack2++
                        Server.sendChat("./login " + numhack2 + "' or '" + numhack2 + "' = '" + numhack2);
                        clientMessage("./login " + numhack2 + "' or '" + numhack2 + "' = '" + numhack2);
                    }
                    if (autodestroy) {
                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vidd);
                    }
                    if (extraj) {
                        Level.destroyBlock(Player.getPointedBlockX() + 1, Player.getPointedBlockY(), Player.getPointedBlockZ() + 1, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() + 2, Player.getPointedBlockY(), Player.getPointedBlockZ() + 2, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() + 3, Player.getPointedBlockY(), Player.getPointedBlockZ() + 3, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() + 4, Player.getPointedBlockY(), Player.getPointedBlockZ() + 4, vidd);

                        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), vidd);

                        Level.destroyBlock(Player.getPointedBlockX() - 1, Player.getPointedBlockY(), Player.getPointedBlockZ() - 1, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() - 2, Player.getPointedBlockY(), Player.getPointedBlockZ() - 2, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() - 3, Player.getPointedBlockY(), Player.getPointedBlockZ() - 3, vidd);
                        Level.destroyBlock(Player.getPointedBlockX() - 4, Player.getPointedBlockY(), Player.getPointedBlockZ() - 4, vidd);
                    }
                    if (aimbot) {
                        var ent = getNearestEntity(aimrange);
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (aimbot2) {
                        /*TODO Moving aim aura*/
                        var ent = getNearestEntity(aimrange);
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (twerk) twerking();
                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 1000 / 70)
        }
    }))
}
rptask()
