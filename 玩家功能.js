var txt;
var 球 = "#fUI/UIWindow4/flagRanking/button:Backward/mouseOver/0#";
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";//藍指標
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹帶
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
txt = "\t\t\t#fs30# #v1102667##e#kMoon谷玩家功能#v1102667##fs14#\r\n";
txt +=""+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+"\r\n";
txt +="#L1#"+yun2+"#v1202193# 改屬道具製作#l #L0#"+yun2+"#v1032261# 改屬時裝製作#l#L7#"+yun2+"#v1113312# 培羅德製作#l#k\r\n#L15#"+yun2+"#v5537000# 雜物兌換#l#k";
txt +="    #L11#"+yun2+"#v4310042# 冬天硬幣#l     #L3#"+yun2+"#v4034848# 貨幣兌換#l\r\n#L5#"+yun2+"#v1712004# 開啟祕法符文#l#L4#"+yun2+"#v1713000# 開啟真實符文#l#k";
txt +="#L6#"+yun2+"#v1713002#完成卡洛斯前置#l  \r\n#L2#"+yun2+"#v4310068# 時裝強化#l    #L8#"+yun2+"#v2200001# 隨身倉庫#l#k      #L13#"+yun2+"#v1102072# 整合背包#l#k\r\n";
txt +="#L9#"+yun2+"#v4034886# 字母兌換(100)#l#L10#"+yun2+"#v4034889# 字母兌換(1000)#l#L12#"+yun2+"#v4009029# 清除道具#l\r\n";
txt +=""+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+eff+ax+"\r\n";

let selection=npc.askMenuA(txt);

        switch (selection) {
			case 0://Done
				player.runScript("製作_時裝");
                break;
            case 1://Done
				player.runScript("製作_其他");
                break;
			case 2:
                player.runScript("時裝強化");
                break;
			case 3:
                player.runScript("兌換系統");
                break;
            case 4:
                player.runScript("開啟AUT");
                break;
			case 5:
                player.runScript("開啟ARC");
                break;
			case 6:
               player.runScript("卡洛斯前置");
                break;	
			case 7:
              player.runScript("頂培製作");
                break;
			case 8:
			 player.runNpc(9030100);
        
                break;
			case 9:
              player.runScript("字母兌換累斗(100)");
                break;
		 case 10:
              player.runScript("字母兌換累斗(1000)");
                break;
				 case 11:
              player.runScript("冬天硬幣");
                break;
			case 12:
		       player.runScript("new_deleteItem");
		
                break;
				case 13:
		 player.runScript("整合背包");
                break;
			case 14:
		 player.runScript("聊天貼圖全部學習");
                break;
			case 15:
		 player.runScript("卡包製作");
                break;
				case 16:
		 player.runScript("航海裝備分解");
                break;
				case 17:
		 player.runScript("分解神秘");
                break;
				case 18:
		 npc.say("即將開放");
                break;
		
        }