/*      

 NPC類型:	綜合NPC

 */
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var epp = "#fEffect/ItemEff/1102511/effect/ladder/0#"; //藍色天使翅膀
var ttz = "#fUI/GuildMark/Mark/Animal/00002016/15#"; //白色兔子

var slot = Array(1, 1);
var dsa = "";
var flag = 0;

var zyms = "";
zyms = "#b#h0# #r一旦整合失敗無法找回哦.請慎重!!!\r\n";

zyms += " #L2##b" + ttz + "整合#r消耗欄#k道具" + ttz + "#k#l\r\n\r\n";
zyms += " #L4##b" + ttz + "整合#r其他欄#k道具" + ttz + "#k#l\r\n\r\n";
zyms += " #L5##b" + ttz + "整合#r特殊欄#k道具" + ttz + "#k#l\r\n";
let selection=npc.askMenuS(zyms);
while(true){
	
	var avail = "";
	var item;
	for(var i = 1; i < 128; i++) {
		item=player.getInventorySlot(selection,i);
		if(item != null) {

			avail += "#L" + item.getDataId() + "# #z" + item.getDataId() + "# #i" + item.getDataId() + ":##l\r\n";
		}
	}

	let sel =npc.askMenuS( "#b請選擇需要整理的道具:\r\n#b" + avail);
	var count =player.getAmountOfItem(sel);
	if(player.canGainItem(sel,count)){
		if(sel==2430712 || sel==5360015 || sel==5210000 || sel==5044005 || sel==2430865 || sel==2650010){
			npc.say("該物品不支持一鍵整理，請手動拖動整合");
		}else{
			player.loseItem(sel);
			player.gainItem(sel,count);
			npc.say("整合成功！");
		}
		
	}else{
		npc.say("背包空間不足，不足以整合！");
	}
	
}