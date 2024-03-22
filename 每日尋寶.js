

var text = "";
var questid = 200100;
var maxtimes = 5;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var qinfo = "";
var lastMapList = Array();
var maplist = Array(
        
        Array(100000200, "弓箭手村 - 邱比特公園"),
        //Array(100000201, "射手村 - 弓箭手培訓中心"),
        Array(100000202, "弓箭手村 - 寵物公園"),
        Array(100010000, "弓箭手村 - 弓箭手村北邊山丘"),
        //Array(100010001, "射手村 - 奇怪的山丘"),
        Array(100010100, "弓箭手村 - 做夢的森林小徑"),
        Array(100000001, "弓箭手村 - 瑪亞的家"),
        Array(100000002, "弓箭手村 - 傑伊的家"),
        Array(100000003, "弓箭手村 - 麗娜的家"),
        Array(102000000, "勇士之村 - 勇士之村"),
        Array(102000003, "勇士之村 - 勇士聖殿"),
        Array(102030000, "火焰之地 - 黑肥肥領土"),
        //Array(102030100, "火焰之地 - 野生豬豬的領土"),
        Array(102030200, "火焰之地 - 鐵甲豬領土"),
        Array(102030300, "火焰之地 - 燃燒的熱氣"),
        Array(102030400, "火焰之地 - 碳屑之地"),
        Array(103000000, "墮落城市 - 墮落城市"),
        Array(103000001, "墮落城市 - 墮落城市武器店"),
        Array(103000002, "墮落城市 - 墮落城市藥店"),
        Array(103000003, "墮落城市 - 秘密據點"),
        Array(103000004, "墮落城市 - 墮落城市醫院"),
        Array(103000005, "墮落城市 - 墮落城市美髮店"),
        Array(103000006, "墮落城市 - 墮落城市修理店"),
        //Array(104010000, "金銀島 - 明珠港郊外"),
        Array(100000204, "弓箭手村 - 弓箭手之殿"),
        //Array(101000004, "魔法密林 - 魔法師的殿堂"),
        Array(102000004, "勇士之村 - 戰士之殿"),
        Array(220000001, "玩具城 - 玩具城武防店"),
        Array(220000002, "玩具城 - 玩具城雜貨店"),
        Array(220000003, "玩具城 - 玩具城整形醫院"),
        Array(220000004, "玩具城 - 玩具城美髮店"),
        Array(220000005, "玩具城 - 玩具城護膚中心"),
        Array(220000006, "玩具城 - 玩具城寵物訓練場"),
        Array(220000100, "玩具城 - 玩具城售票處"),
        Array(220000110, "玩具城 - 碼頭<開往天空之城>"),
        Array(240000001, "神木村 - 村長之家"),
        Array(240000002, "神木村 - 藥水商店"),
        Array(240000003, "神木村 - 亞可之家"),
        Array(240000004, "神木村 - 依托之家"),
        Array(240000005, "神木村 - 庫摩之家"),
        Array(240000006, "神木村 - 潘姆之家")
        );

playerid = player.getId();
accepttimes = maxtimes - getEventValue("尋寶任務",false);



let date = player.getQuestRecordEx(questid,"date");
//比對時間 如果數據庫記錄的不是今天的日期 則全部刷新
if(date != getNowFormatDate()){
	player.updateQuestRecordEx(questid, "date", getNowFormatDate());
	player.updateQuestRecordEx(questid, "questN", "-1");
}

let questN = player.getQuestRecordEx(questid,"questN"); //任務地圖

text = "\t\t\t#e每日尋寶 - 里諾赫的黃金袋子#n\r\n\r\n";
text += "我的財富，遍布世界各地……\r\n";
text += "今日剩余尋寶次數：#r" + accepttimes + "#k 次\r\n";
text += "#r#L999#尋寶任務簡介#l#k\r\n\r\n";
if (questN != -1) {  // 判斷是否接取了任務
	if (player.isQuestCompleted(questid)) { // 判斷是否完成任務
		if (accepttimes <= 0) { // 判斷是否超過完成次數
			text += "您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
		} else {
			text += "#b#L0#接受任務#l#k\r\n";
		}
	} else {
		text += "#r#L100#確定當前地圖為藏寶地圖#l\r\n";
		text += "#r#L2#查看任務提示#l\r\n";
		text += "#r#L4#放棄任務 (無法獲得任何獎勵，且會消耗一次任務次數)#l\r\n";
	}
} else if (accepttimes > 0) {
	text += "#b#L3#接受任務#l\r\n";
} else {
	text += "  您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
}
text += "#b#L222#購買黃金羅盤#l#k";
var selected =  npc.askMenu(text);
switch(selected){
	case 999:
		text = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#e#d什麼是尋寶任務？#n#k\r\n";
		text += "\t接受尋寶任務之後，你將會獲得一個#b尋寶便簽#k，我會告訴你可能藏有寶藏的5個地圖，並且會保存在尋寶便簽中，你需要找到這個#b正確的地圖#k並打開便簽確認正確的地圖。\r\n";
		text += "#e#d什麼是黃金羅盤？#n#k\r\n";
		text += "\t使用黃金羅盤，可以幫助你直接尋找到正確的寶藏地圖。您可以通過購買獲得黃金羅盤，同時尋寶過程中有幾率獲得黃金羅盤。\r\n";
		npc.say(text);
		break;
	case 222:
		var YN = npc.askYesNo("是否要花費#r100000#k楓點購買一個黃金羅盤？");
		if(YN == 1){
			if(player.getCashShopCurrency(2) < 100000){
					npc.say("你沒有" + 100000 + " 楓點");	
			}else{
				player.gainItem(2430030,1);
				player.modifyCashShopCurrency(2,-100000);
				npc.say("購買成功!");
			}
		}else{
			npc.say("需要再來找我吧！");
		}
		break;
	case 3:
		//接受任務
		if(player.getLevel() < 160) {
			npc.say("等級不足160級，無法領取任務。");
		}else if(player.getFreeSlots(2) < 1){
			npc.say("你的消耗欄格子不足，請先整理一下吧。");
		}else{
			getRandomArray();
			var questrandid = Math.floor(Math.random() * lastMapList.length);
			mapid = lastMapList[questrandid][0] // 任務地圖ID
			player.gainItem(2430251,1);
			text = "寶箱有可能藏匿在一下幾個地圖，尋找到正確的地圖並打開寶箱！\r\n";
			var jj = 1;
			for (var key in lastMapList) {
				player.updateQuestRecordEx(questid, "map"+jj, lastMapList[key][0]);
				qinfo += "#b" + lastMapList[key][1] + "\r\n";
				text += "#b" + lastMapList[key][1] + "\r\n";
				jj++;
			}
			player.updateQuestRecordEx(questid, "questN", mapid);
			player.updateQuestRecordEx(questid, "mapsInfos", lastMapList);
			setEventValue("尋寶任務",1);
			npc.say(text);
		}
		break;
	case 4:
		//放棄任務
		var YN =npc.askYesNo("是否放棄任務？");
		if(YN == 1){
			player.updateQuestRecordEx(questid, "questN", "-1");
			player.loseItem(2430251,1);
			npc.say("放棄成功，可以重新接取任務了！");
		}else{
			npc.say("請繼續加油");
		}
		break;
	case 2:
		//查看任務提示
		var mapsInfos = player.getQuestRecordEx(questid,"mapsInfos");
		var maps = mapsInfos.split(",");
		text = "寶箱有可能藏匿在一下幾個地圖，尋找到正確的地圖並打開寶箱！\r\n";
		for(var i = 0;i<5;i++){
			text += "#b"+(i+1)+". "+maps[2*i+1]+"\r\n"
		}
		npc.say(text);
		break;
	case 100:
		//完成任務
		
		if(map.getId() == questN){
			//這里給獎勵。。。。
			player.gainItem(2436256,1);
			player.updateQuestRecordEx(questid, "questN", "-1");
			player.loseItem(2430251,1);
			npc.say("恭喜你，尋寶成功！");
		}else{
			npc.say("尋寶失敗，這不是藏匿寶藏的地圖哦!");
		}
}


function getRandomArray() {
    if (lastMapList.length >= 5)
        return true;
    var newMapId = maplist[Math.floor(Math.random() * maplist.length)];
    for (var key in lastMapList) {
        if (lastMapList[key] == newMapId) {
            getRandomArray();
            return false;
        }
    }
    lastMapList.push(newMapId);
    getRandomArray();
}

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1,flag){
	if(flag){
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+player.getAccountId()+" and event = '"+event1+"'  "; 
	}else{
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+player.getAccountId()+" and event = '"+event1+"'  AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}
	//npc.say(sql);
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	return parseInt(count);
}

function setEventValue(event1,value1){
	//var charInfo = getCharInfo();
	var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values("+player.getAccountId()+","+0+",'"+event1+"',"+value1+",now())";
	player.customSqlInsert(sql);
}




function gainItemPeriod(itemid,quantity,time){
	if(time < 1000 && time > 0){
		time = 1000*60*60*24*time;
	}
	for(var i = 0 ;i<quantity;i++){
		let newItem = player.makeItemWithId(itemid);
		if(time != 0){
			newItem.setExpiration(new Date().getTime() + time);
		}
		player.gainItem(newItem);
	}
}


//獲取當前時間，格式YYYY-MM-DD
function getNowFormatDate() {
	let date = new Date();
	let seperator1 = "";
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	let currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}