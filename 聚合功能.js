var txt;
/*------------------------------------------------------------*/
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星

var hua22 = "#fMap/MapHelper.img/weather/starPlanet/1#"; //星
var shs2 = "#fMap/MapHelper.img/weather/thankyou/3#";  //一個心
var ltz45 = "#fEffect/CharacterEff/1112926/0/0#";  //黃色心 小的好看
var ltz46 = "#fMap/MapHelper.img/weather/thankyou/4#";  //小的紅色的
var hua23 = "#fMap/MapHelper.img/weather/starPlanet/2#"; //粉紅天使
var nu09 = "#fUI/GuildMark.img/Mark/Etc/00009001/9#";//烏鴉省略號10  9 5 4
var nu19 = "#fUI/GuildMark.img/Mark/Etc/00009001/10#";//烏鴉省略號10  9 5 4
var nu29 = "#fUI/GuildMark.img/Mark/Etc/00009001/4#";//烏鴉省略號10  9 5 4
var nu39 = "#fUI/GuildMark.img/Mark/Etc/00009001/5#";//烏鴉省略號10  9 5 4
var nu9 = "#fEtc/EmotionEffect.img/oops/8#";//烏鴉省略號
var kk1 = "#fItem/Consume/0203.img/02030000/info/icon#";//返回村莊
var kk2 = "#fItem/Etc/0400.img/04000701/info/icon#";//角色轉職
var kk3 = "#fItem/Consume/0263.img/02634282/info/iconRaw#";//等級獎勵
var kk4 = "#fItem/Etc/0403.img/04036111/info/iconRaw#";//每日簽到
var kk5 = "#fItem/Etc/0403.img/04033038/info/iconRaw#";//線上領獎
var kk6 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";//儲值福利
var maple = "#fUI/UIWindow4.img/AdventureLogbook/Foreword/mapleLeaf#";
var kk7 = "#fUI/StarCityUI.img/GradeInfo/icon_ss/11#";
var kk8 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk9 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk10 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk11 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk12 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk13 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk14 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk15 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk16 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk17 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk18 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk19 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var kk20 = "#fItem/Consume/0202.img/02028060/info/iconRaw#";
var ef = "#fEffect/CharacterEff/1112905/0/1#"; //
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
var bb = "#fEffect/ItemEff.img/1103400/effect/default/0#";
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髏", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("紅心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白臉", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("紅燈", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/9#"),//
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("紅旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("紅心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("雲朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黃鴨", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("條件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("鉆石", "#fUI/NameTag/medal/556/w#"),
    Array("鉆石", "#fUI/NameTag/medal/556/c#"),
    Array("鉆石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("藍點", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失敗", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("藍星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("藍星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("聖誕", "#fUI/NameTag/medal/728/w#"),
    Array("聖誕", "#fUI/NameTag/medal/728/c#"),
    Array("聖誕", "#fUI/NameTag/medal/728/e#"),
    Array("紅鉆", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭頭", "#fUI/Basic.img/icon/arrow#"),
    Array("笑臉", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡臉", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#")

);

player.setDressingRoomSlot(0,102);
player.setDressingRoomSlot(1,102);
player.setDressingRoomSlot(2,6);


if(player.getPQLog("年會員")>0){
	player.customSqlUpdate("update characters set vip =1 where id =?",player.getId());
	
}
if(!player.isQuestCompleted(6500)){
	player.completeQuest(6500,0);
}
if(!player.isQuestCompleted(50722)){
	player.completeQuest(50722,0);
}
if(!player.isQuestCompleted(500763)){
	player.completeQuest(500763,0);
}
if(!player.isQuestCompleted(29900)){
	player.completeQuest(29900,0);
}
if(!player.isQuestCompleted(29901)){
	player.completeQuest(29901,0);
}
if(!player.isQuestCompleted(29902)){
	player.completeQuest(29902,0);
}
if(!player.isQuestCompleted(29903)){
	player.completeQuest(29903,0);
}
if(!player.isQuestCompleted(66728)){
	player.completeQuest(66728,0);
}
if(!player.isQuestCompleted(57400)){
	player.completeQuest(57400,0);
}
if(!player.isQuestCompleted(57452)){
	player.completeQuest(57452,0);
}
if(!player.isQuestCompleted(23220)){
	player.completeQuest(23220,0);
}
if(!player.isQuestCompleted(66518)){
	player.completeQuest(66518,0);
}if(!player.isQuestCompleted(3199)){
	player.completeQuest(3199,0);
}
if(!player.isQuestCompleted(57102)){
	player.completeQuest(57102,0);
}
if(!player.isQuestCompleted(57156)){
	player.completeQuest(57156,0);
}
if(!player.isQuestCompleted(35942)){
	player.completeQuest(35942,0);
}
//player.loseItem(2022529);
var revenue;
revenue = parseInt(getHyPay(1));


var name = player.getName();
		var isExist=false;
		var sql = "select name from fame where name = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("name") != null) {
			var sql = "update fame set fame='"+player.getFame()+"' where name= '"+player.getName()+"'"; ;
				player.customSqlUpdate(sql);
				isExist = true;
			}
		}
		if(!isExist) { //不存在這條記錄，就添加一條
			var sql = "INSERT INTO fame (name,fame) values (?,?) ";
			
			player.customSqlInsert(sql, player.getName(),player.getFame());
		}
if(player.getQuestRecordEx(100468) == 0){
	         player.updateQuestRecordEx(100468,1);
 }else{
var name = player.getName();
		var isExist=false;
		var sql = "select name from dojang_best where name = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("name") != null) {
			var sql = "update dojang_best set floor='"+player.getQuestRecordEx(100468)+"' where name= '"+player.getName()+"'"; ;
				player.customSqlUpdate(sql);
				isExist = true;
			}
		}
		if(!isExist) { //不存在這條記錄，就添加一條
			var sql = "INSERT INTO dojang_best (name,floor) values (?,?) ";
			
			player.customSqlInsert(sql, player.getName(),1);
		}
}		
if(player.getQuestRecordEx(100467) == 0){
	player.updateQuestRecordEx(100467,1);
}else{
var name = player.getName();
		var isExist=false;
		var sql = "select name from dojang where name = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("name") != null) {
			var sql = "update dojang set floor='"+player.getQuestRecordEx(100467)+"' where name= '"+player.getName()+"'"; ;
				player.customSqlUpdate(sql);
				isExist = true;
			}
		}
		if(!isExist) { //不存在這條記錄，就添加一條
			var sql = "INSERT INTO dojang (name,floor) values (?,?) ";
			
			player.customSqlInsert(sql, player.getName(),1);
		}
}
if(player.getQuestRecordEx(42001) == 0){
	player.updateQuestRecordEx(42001,1);
}else{
var name = player.getName();
		var isExist=false;
		var sql = "select name from theseed where name = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("name") != null) {
			var sql = "update theseed set stage='"+player.getQuestRecordEx(42001)+"' where name= '"+player.getName()+"'"; ;
				player.customSqlUpdate(sql);
				isExist = true;
			}
		}
		if(!isExist) { //不存在這條記錄，就添加一條
			var sql = "INSERT INTO theseed (name,stage) values (?,?) ";
			
			player.customSqlInsert(sql, player.getName(),1);
		}
}
if(player.getQuestRecordEx(100469) == 0){
	         player.updateQuestRecordEx(100469,1);
 }else{
var name = player.getName();
		var isExist=false;
		var sql = "select name from dojang_best where name = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("name") != null) {
			var sql = "update dojang_best set floor='"+player.getQuestRecordEx(100468)+"' ,time='"+player.getQuestRecordEx(100469)+"' where name= '"+player.getName()+"'"; ;
				player.customSqlUpdate(sql);
				isExist = true;
			}
		}
		if(!isExist) { //不存在這條記錄，就添加一條
			var sql = "INSERT INTO dojang_best (name,floor,time) values (?,?,?) ";
			
			player.customSqlInsert(sql, player.getName(),1,1);
		}
}

txt = "#fn宋體##e#fs20##g#v2023578#帳號ID: #r"+player.getAccountId()+"#g#v4000814#楓點: #r" + player.getPoint()  +"#r #g點#v2430573#樂豆: #r"+player.getCash()+"#r#g 點#fs15#\r\n";;
txt += ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+"";
txt += "\r\n\t\t#g#e#L0# #v4310011# 返回自由#l   #g#L3##v5044000# 移動功能#l  #g#L12##v4032096# 公會傳送#l\r\n";
txt += "\r\n\t\t#g#e#L1# #v5050000# 轉職系統#l   #g#L2##v4033915# 獎勵中心#l  #g#L4##v4033403# 副本專區#l\r\n";
txt += "\r\n\t\t#g#e#L5# #v4033079# 玩家功能#l   #g#L6##v4000038# 榜上有名#l  #g#L7##v4036518# 儲值中心#l\r\n";
txt += "\r\n\t\t#g#e#L9# #v4032698# 楓點商店#l   #g#L8##v4009250# 外貌協會#l  #g#L13##v4310266# 強化中心#l\r\n";
let selection=npc.askMenuA(txt,9000070 );

        switch (selection) {
            case 0://Done
				player.runScript("回自由",9000070);
                break;
			case 1:
                player.runScript("快速轉職",9000070);
                break;
			case 2:
                player.runScript("獎勵系統",9000070);
                break;
			case 3:
                player.runScript("wncsong1",9000070);
                break;
            case 4:
                player.runScript("副本專區",9000070);
                break;
            case 5:
                player.runScript("玩家功能",9000070);
                break;
			case 6:
                player.runScript("排行榜",9000070);
                break;
			case 7:
                player.runScript("儲值中心",9000070);
                break;
			case 8:
                player.runScript("改變外觀",9000070);
                break;
			case 9:
                player.runScript("楓點商店",9000070);
                break;
			case 10://Done
                player.runScript("組隊副本",9000070);
                break;
			case 11:
                player.runScript("排行榜",9400191);
                break;
			case 12:
                player.runScript("公會傳送");
                break;
			case 13:
                player.runScript("強化中心",2400007);
                break;
			case 14:
                player.runScript("道具製作",1022004);
                break;
			case 15:
                player.runScript("強者之路");
                break;
			case 16:
                player.runScript("萬能商店");
                break;
			case 17:
                player.runScript("選擇臉型",9400702);
                break;
			case 18:
                player.runScript("選擇髮型",9400702);
                break;
			case 19:
                player.runScript("日常副本");
                break;
			case 21:
                player.runScript("五轉");
                break;	
			case 22:
				player.runScript("skin_henesys1",9062716);
				break;
        }
function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + player.getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payused");
        } else if (type == 3) {
            var pay = result.get("payreward");
        }else if (type == 4) {
            var pay = result.get("leiji");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + player.getAccountName()  + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return parseInt(pay);
}
function addHyPay(price) {

	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";

	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}