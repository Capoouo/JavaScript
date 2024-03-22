
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

txt = "\t\t#fs20# #v1102667##e#kMoon谷儲值中心#v1102667##fs12#\r\n";
txt += ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+"\r\n";
txt += tz13+  "\t\t #L4#"+yun2+"#v3800749# 餘額轉樂豆#l\t\t\t"+tz13+"\r\n";
txt += tz13+ "\t\t #L0#"+yun2+"#v5252002# 首儲獎勵#l\t\t\t "+tz13+"\r\n";
txt += tz13+  "\t\t #L1#"+yun2+"#v2430573# 累計儲值#l\t\t\t"+tz13+"\r\n";
txt += tz13+  "\t\t #L2#"+yun2+"#v5121060# 超值月卡#l\t\t\t"+tz13+"\r\n";
txt += tz13+  "\t\t #L3#"+yun2+"#v4034848# 樂豆商店#l\t\t\t"+tz13+"\r\n";
txt += tz13+  "\t\t #L5#"+yun2+"#v2439640# 常駐禮包#l\t\t\t"+tz13+"\r\n";
txt += tz13+  "\t\t #L6#"+yun2+"#v1122249# 超值大禮包#l\t\t\t"+tz13+"\r\n";
txt +="\r\n"+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+ef+ax+"\r\n";
let selection=npc.askMenu(txt);
            var text = head + "請選擇你要的服務\r\n#b";
             switch (selection) {
            case 0://Done
				npc.say("#fs20#\t#r請私訊GM領取!!");
                break;
			case 1:
                player.runScript("累計儲值",9400702);
                break;
			case 2:
                player.runScript("月卡會員",9400731);
                break;
			case 3:
                player.runScript("樂豆商店",9400731);
                break;
			 case 4://金額樂豆點
               var revenue0 = getHyPay(1);
                if (getHyPay(1) < 1) {
				    npc.say("#r#e抱歉 ！您的餘額數目 [0] 不能進行贊助 ");
                } else {
                    player.modifyCashShopCurrency(1,revenue0);
                    npc.say("#d#e恭喜您\r\n\r\n以兌換樂豆點數量：#r" + revenue0  + "#k#n\r\n ");
                    addHyPay(revenue0);
				}
                break;
			case 5:
                player.runScript("常駐禮包",9400731);
                break;
			case 6:
                player.runScript("古代石板禮包",9400731);
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

	var sql = "update hypay set pay=pay-? where accname=?";

	var result = player.customSqlUpdate(sql, price, player.getAccountName());

}