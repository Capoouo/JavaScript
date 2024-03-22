var aisu = Array(
	1004422,
1004423,
1004424,
1004425,
1004426,
1005823,
1005952,
1052882,
1052887,
1052888,
1052889,
1052890,
1073030,
1073032,
1073033,
1073034,
1073035,
1073554,
1073616,
1082636,
1082637,
1082638,
1082639,
1082640,
1082754,
1082759,
1102775,
1102794,
1102795,
1102796,
1102797,
1103352,
1103418,
1152174,
1152176,
1152177,
1152178,
1152179,
1152209,
1152211,
1212115,
1213017,
1214017,
1222109,
1232109,
1242116,
1242120,
1252093,
1262017,
1272016,
1282016,
1292017,
1302333,
1312199,
1322250,
1332274,
1362135,
1372222,
1382259,
1402251,
1403017,
1412177,
1422184,
1432214,
1442268,
1452252,
1462239,
1472261,
1482216,
1492231,
1522138,
1532144,
1542108,
1552110,
1582017,
1592019,
1342101
);

var selectedItem = 1;
var selectedCost = 1;
var text;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var shenmiCount = 0;
var aisuCount = 0;
var temiCount=0;
var text = "";
text = "\t\t#e- 以下是準備分解的裝備,請核對仔細 \r\n PS ：為了防止誤操作，只識別背包前32格的裝備哦 -#n\r\n\r\n#b";
var item;
var newItemList = Array();
for(var i = 1; i <= 32; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) {
		//埃蘇計算個數
		for(var j = 0; j < aisu.length; j++) {
			if(aisu[j] == item.getDataId()) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
				aisuCount++;
			}
		}

		//計算特米
		
	}
}

for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e分解操作不可逆，請確認是否要分解以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	if(player.getFreeSlots(2) < 2 || player.getFreeSlots(2) < 2) {
		npc.say("請清理背包");
	} else {
		for(var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		}
		var huohua = 0;
		var jinse = 0;

		//計算埃蘇
		for(var i = 0; i < aisuCount; i++) {
			var maple = Math.floor(Math.random() * 100);
			if(maple >= 40) {
				if(maple % 2 == 1) {
					huohua++;
				} else {
					jinse++;
				}
			}

		}
		if(huohua>0){
			
			player.gainItem(2048723, huohua); //火花
		}
		if(jinse>0){
			player.gainItem(4310266, jinse); //星火
		}
		text = "分解成功，獲得了#v2048723# X " + huohua + "和#v4310266#X " + jinse +" 個 ";
		npc.say(text);
	}
}