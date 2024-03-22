/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心
var 星星 = "#fUI/UIWindow4/pointShop/100658/iconShop#";
var 球 = "#fUI/UIWindow4/flagRanking/button:Backward/mouseOver/0#";
var isopenvip = false;
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
var icon ="#fEffect/CharacterEff/1112902/0/0#"; 
var xxx1 = "#fUI/ChatBalloon/pet/16/ne#"; //星系
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化會員
var xxx = "#fUI/ChatBalloon/pet/16/nw#"; //星系
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";//藍指標
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹帶
var ef = "#fEffect/CharacterEff/1112905/0/1#"; //
var xg = "#fEffect/CharacterEff/1102355/3/0#";
var aa = "#fUI/UIWindow4.img/dailyGift/mvpLv/7#";
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星

txt = "\t\t#fs20# #v1102667##e#kMoon谷排行榜#v1102667##fs12#\r\n";
txt += ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+"\r\n";
txt += tz13+"\t\t #L0#"+yun2+"#v2022496# 等級排行榜#l\t\t   "+tz13+"\r\n";
txt += tz13+"\t\t #L6#"+yun2+"#v2028351# 公會排行榜#l\t\t   "+tz13+"\r\n";
txt += tz13+"\t\t #L7#"+yun2+"#v2430457# 好人排行榜#l\t\t   "+tz13+"\r\n";
txt += tz13+"\t\t #L9#"+yun2+"#v1702838 # 壞人排行榜#l\t\t   "+tz13+"\r\n";
txt += tz13+"\t\t #L8#"+yun2+"#v2434325# 武陵排行榜#l\t\t   "+tz13+"\r\n";
txt += tz13+"\t\t #L10#"+yun2+"#v1113115# TheSeed排行榜#l\t\t"+tz13+"\r\n";
txt +="\r\n"+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+"\r\n";
let selection=npc.askMenu(txt);
if(selection == 0) {
	//等級排行
	var sql = "select name,level,gender from characters where gm<=0 order by level desc, exp desc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 個人等級排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t\t#e等級#n\t\t  #e玩家昵稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += "";
		}
		text += result.get("level")+"\t\t\t\t" ;

		text += result.get("name")+"\t";
		text += "\r\n";		
	}
	npc.askMenu(text);

}else if(selection == 4) {
	//財富排行
	var sql = "select name,meso,gender from inventoryequipment where gm<=0 order by meso desc, exp desc limit 1500;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 個人財富排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e金幣#n\t\t\t  #e玩家昵稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += "";
		}
		text +=(result.get("meso") / 100000000) + "億\t";
		text += result.get("name")+"\t";		
		text += "\r\n";
	}
	npc.say(text);

} else if(selection == 2) {
	//財富排行
	var sql = "select name,paihangbang from hypay where accname<>10   order by paihangbang desc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 儲值總排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e儲值金額#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		var name =result.get("name").toString();
		for(var j = 18 - name.length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + parseInt(result.get("paihangbang"));
		text += "\r\n";
	}
	npc.say(text);

}else if(selection == 6) {
	//公會排行
	var sql = "select GP,name from guilds where guildid<>11 order by GP desc limit 1500;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 公會GP排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t\tGP#n\t\t  #e公會名稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("GP").length; j > 0; j--) {
			text += "";
		}
		text += result.get("GP")+"\t\t" ;

		text += result.get("name")+"\t";
		text += "\r\n";	
	}
	npc.say(text);

}else if(selection == 7) {
	//名聲排行
	var sql = "select fame,name from fame where name<>100 order by fame desc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 好人名聲排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t\t名聲#n\t\t  #e玩家昵稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("fame").length; j > 0; j--) {
			text += "";
		}
		text += result.get("fame")+"\t\t\t\t" ;

		text += result.get("name")+"\t";
		text += "\r\n";		
	}
	npc.say(text);

}else if(selection == 8) {
	//名聲排行
	var sql = "select floor,name,time from dojang_best where name<>100 order by floor desc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 武陵排行榜 ★#k#n\r\n\r\n";
	text += "  #e名次#n\t\t 層數#n\t 使用時間#n\t #e    玩家#n\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("floor").length; j > 0; j--) {
			text += "";
		}
		text += result.get("floor")+"\t\t" ;
        text += result.get("time")+"\t\t" ;
		text += result.get("name")+"\t";
		text += "\r\n";		
	}
	npc.say(text);

}else if(selection == 9) {
	//名聲排行
	var sql = "select fame,name from fame where name<>100 order by fame asc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 壞人名聲排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t\t名聲#n\t\t  #e玩家昵稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("fame").length; j > 0; j--) {
			text += "";
		}
		text += result.get("fame")+"\t\t\t\t" ;

		text += result.get("name")+"\t";
		text += "\r\n";		
	}
	npc.say(text);

}else if(selection == 10) {
	//名聲排行
	var sql = "select stage,name from theseed where name<>100 order by stage desc limit 20;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ TheSeed排行榜 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t\t層數#n\t\t  #e玩家昵稱#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t"+rank+"\t\t\t" ;
		// 填充名字空格

		for(var j = 18 - result.get("stage").length; j > 0; j--) {
			text += "";
		}
		text += result.get("stage")+"\t\t\t\t" ;

		text += result.get("name")+"\t";
		text += "\r\n";		
	}
	npc.say(text);

}