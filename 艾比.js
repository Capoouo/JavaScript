/*
	超巨大多人椅子随机宝箱
*/

var status;

var filter = Array(
2434601
)

var reward = Array(
Array(2048831,1,1,100),
Array(2616217,1,1,100),
Array(2616216,1,1,100),
Array(2615052,1,1,100),
Array(2615051,1,1,100),
Array(2613069,1,1,100),

Array(2613068,1,1,100),
Array(2612081,1,1,100),
Array(2612080,1,1,100),
Array(2048825,1,1,100),
Array(2048826,1,1,100),

Array(2613068,1,1,100),
Array(2612081,1,1,100),
Array(2612080,1,1,100),
Array(2048825,1,1,100),
Array(2048826,1,1,100),

Array(2613070,1,1,100),
Array(2048830,1,1,100),
Array(2616219,1,1,100),
Array(2616218,1,1,100),
Array(2615055,1,1,100),

Array(2615054,1,1,100),
Array(2612083,1,1,100),
Array(2612082,1,1,100),
Array(2613071,1,1,100),

Array(2613062,1,1,300),
Array(2613063,1,1,300),
Array(2612074,1,1,300),
Array(2612075,1,1,300),
Array(2616073,1,1,300),

Array(2616072,1,1,300),
Array(2615041,1,1,300),
Array(2615042,1,1,300),
Array(2048819,1,1,300),
Array(2048820,1,1,300),

Array(2048816,1,1,600),
Array(2048815,1,1,600),
Array(2615030,1,1,600),
Array(2615029,1,1,600),
Array(2613048,1,1,600),

Array(2613049,1,1,600),
Array(2612055,1,1,600),
Array(2612056,1,1,600),
Array(2616059,1,1,600),
Array(2616060,1,1,600),

Array(2472000,1,1,1000),

Array(2613012,1,1,2100),
Array(2613013,1,1,2100),
Array(2612019,1,1,2100),
Array(2612020,1,1,2100),
Array(2048812,1,1,2100),

Array(2048813,1,1,2100),
Array(2616000,1,1,2100),
Array(2616001,1,1,2100),
Array(2615006,1,1,2100),
Array(2615005,1,1,2100),

Array(2049045,1,1,3000),
Array(2590028,1,1,3000),
Array(2470007,1,1,3000),

Array(2048306,1,1,4000),
Array(2049615,1,1,4000),
Array(2590026,1,1,4000),
Array(2590027,1,1,4000),
Array(2049046,1,1,4000),


Array(2049501,1,1,4000),
Array(2049500,1,1,4000),
Array(2049506,1,1,4000),
Array(2048228,1,1,4000),
Array(2048226,1,1,4000),

Array(2048212,1,1,4000),
Array(2590025,1,1,4000),

Array(2631487,1,1,10000),





);
var hasList = Array();
var needItem = 5060029;
var needItemNum = 1;

var text = "#b請選擇你要洗潛能的萌獸卡(目前只能洗滿等傳說的萌獸)\r\n";
StartEquip();
function StartEquip()
{
var yes = npc.askMenu("你要對抽艾比米修斯箱子嗎?\r\n#L0# 開始使用 ( #r按住空白鍵可以連續使用#k )#l");
if(yes == 0){
		if(player.hasItem(needItem,needItemNum) && getFreeSlots(1)){
		var nowlist=new Array();
		var nowran = Math.floor(Math.random() * 500);
		for(var a=0;a<reward.length;a++)
		{
			if(nowran<reward[a][3])
			{
				nowlist.push(reward[a]);
			}
		}
		if(nowlist.length>0)
		{
			var index = Math.floor(Math.random() * nowlist.length);
			var quantity = Math.floor(Math.random() * nowlist[index][2] + nowlist[index][1]);
			
			player.loseItem(needItem,needItemNum); 
				player.gainItem(nowlist[index][0], 1);	
	StartEquip()
	}
	
}else{
	npc.say("空間不足，或你沒有#v"+needItem+"# x "+needItemNum+"")
}
}
}

function getFreeSlots(size){
	if(player.getFreeSlots(1)<size||player.getFreeSlots(2)<size||player.getFreeSlots(3)<size||player.getFreeSlots(4)<size||player.getFreeSlots(5)<size || player.getFreeSlots(6)<size){
		return false;
	}else{
		return true;
	}
}