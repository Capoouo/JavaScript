status = -1;
var itemList = Array(
	//物品ID  物品數量   獲得概率數字越大概率越大
	
Array(1022218, 1,50), //火花
Array(1012452, 1,50), 
Array(1032146, 1,50), //火花
Array(1032184, 1,50), 
Array(1052731, 1,50), //火花
Array(1052769, 1,50),
Array(1052767, 1,50),
Array(1052770, 1,50),
Array(1052768, 1,50),
Array(1082589, 1,50),
Array(1082590, 1,50),
Array(1072842, 1,50),
Array(1072841, 1,50),
Array(1072939, 1,50),
Array(1072940, 1,50),
Array(1072938, 1,50),
Array(1102734, 1,50),
Array(1102732, 1,50),
Array(1102733, 1,50),
Array(1102738, 1,50),
Array(1113003, 1,50),
Array(1113021, 1,50),
Array(1112908, 1,50),
Array(1702496, 1,50),
Array(1702472, 1,50),
Array(1702495, 1,50),
Array(1073031, 1,50),
Array(1702618, 1,50),
Array(1702563, 1,50),
Array(1003843, 1,50),
Array(1003765, 1,50),
Array(1003782, 1,50),
Array(5625000, 10,50),
Array(5743003, 10,50),
Array(5062020, 10,50)
);

var chance = Math.floor(Math.random() * 100);
var finalitem = Array();
for(var i = 0; i < itemList.length; i++) {
	if(itemList[i][2] >= chance) {
		finalitem.push(itemList[i]);
	}
}

if(finalitem.length != 0) {
	var item;
	var random = new java.util.Random();
	var finalchance = random.nextInt(finalitem.length);
	var itemId = finalitem[finalchance][0];
	var item = player.gainGachaponItem("尋寶禮物盒",itemId, finalitem[finalchance][1],  1);
	if(item != -1) {

		player.loseItem(npc.getItemId(), 1);
		npc.broadcastPlayerNotice(0x13,"玩家:" + player.getName() + "從 『每日尋寶』 獲得" + player.makeItemWithId(itemId).getItemName() + ",大家恭喜他。");
	} else {
		npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
	}
} else {
	player.loseItem(npc.getItemId(), 1);
	npc.say("今天的運氣可真差，什麼都沒有拿到。");
}