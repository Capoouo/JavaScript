
var boss1 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/1/Icon/normal/0#"; //炎魔
var boss2 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/3/Icon/normal/0#"; //希菈
var boss4 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/2/Icon/normal/0#"; //龍王
var boss3 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/4/Icon/normal/0#"; //比艾樂
var boss5 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/5/Icon/normal/0#"; //斑斑
var boss6 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/8/Icon/normal/0#"; //凡雷恩
var boss7 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/9/Icon/normal/0#"; //阿卡伊農
var boss8 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/10/Icon/normal/0#"; //梅格耐斯
var boss9 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/11/Icon/normal/0#"; //皮卡丘
var boss10 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/12/Icon/normal/0#"; //女皇
var boss11 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/6/Icon/normal/0#"; //血腥女王
var boss12 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/7/Icon/normal/0#"; //貝倫
var boss13 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/13/Icon/normal/0#"; //史烏
var boss14 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/15/Icon/normal/0#"; //戴米安
var boss15 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/16/Icon/normal/0#"; //培羅德
var boss16 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/17/Icon/normal/0#"; //森蘭完
var boss17 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/18/Icon/normal/0#"; //農機
var boss18 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/19/Icon/normal/0#"; //露西妲
var boss19 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/21/Icon/normal/0#"; //卡翁
var boss20 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/22/Icon/normal/0#"; //拉圖斯
var boss21 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/23/Icon/normal/0#"; //威爾
var boss22 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/24/Icon/normal/0#"; //真西菈
var boss23 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/25/Icon/normal/0#"; //黑魔法師
var boss24 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/26/Icon/normal/0#"; //戴斯克
var boss25 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/27/Icon/normal/0#"; //頓凱爾
var boss26 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/28/Icon/normal/0#"; //賽連
var boss27 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/30/Icon/normal/0#"; //卡洛斯
var boss28 = "#fUI/UIWindow2.img/UserList/Main/Boss/BossList/29/Icon/normal/0#"; //天使綠水玲
var bosslist=new Array(
	Array("Papulatus_Normal",2,boss20+"拉圖斯<普通>"),
	Array("Papulatus_Hard",2,boss20+"拉圖斯<困難>"),
	Array("Zakum_Normal",2,boss1+"普通殘暴炎魔"),
	Array("Zakum_Chaos",2,boss1+"混沌殘暴炎魔"),
	Array("Hontale",2,boss4+"暗黑龍王"),
	Array("Hontale_Chaos",2,boss4+"混沌暗黑龍王"),
	Array("PinkBeen",2,boss9+"皮卡啾"),
	Array("PinkBeen_Chaos",2,boss9+"混沌皮卡啾"),
	Array("VonLeon_Normal",2,boss6+"凡雷恩<普通>"),
	Array("VonLeon_Hard",2,boss6+"凡雷恩<困難>"),
	Array("Hillah",2,boss2+"希拉"),
	Array("Hillah_Hard",2,boss2+"希拉<困難>"),
	Array("Shinas",2,boss10+"西格諾斯"),
	Array("Caoong",2,boss19+"卡翁"),
	Array("Akayrum",2,boss7+"阿卡伊農"),
	Array("普通模式<贝伦>",2,boss12+"普通模式<貝倫>"),
	Array("进阶模式<贝伦>",2,boss12+"困難模式<貝倫>"),
	Array("普通模式<半半>",2,boss5+"普通模式<斑斑>"),
	Array("进阶模式<半半>",2,boss5+"困難模式<斑斑>"),
	Array("Pierre",2,boss3+"普通模式<比艾樂>"),
	Array("Pierre_CHAOS",2,boss3+"困難模式<比艾樂>"),
	Array("普通模式<血腥女王>",2,boss11+"普通模式<血腥皇后>"),
	Array("进阶模式<血腥女王>",2,boss11+"困難模式<血腥皇后>"),
	Array("GiantBoss",1,boss15+"培羅德"),
	Array("Siwu",1,boss13+"史烏"),
	Array("Siwu_Chaos",1,boss13+"史烏<困難>"),
	Array("浓姬",1,boss17+"濃姬"),
	Array("Ranmaru_Crazy",2,boss16+"森蘭丸"),
	Array("Magnus",1,boss8+"梅格耐斯<普通>"),
	Array("Magnus_Hard",1,boss8+"梅格耐斯<困難>"),
	Array("Demian",1,boss14+"戴米安<普通>"),
	Array("Demian_Hard",1,boss14+"戴米安<困難>"),
	Array("Will",1,boss21+"威爾<普通>"),
	Array("Will_Hard",1,boss21+"威爾<困難>"),
	Array("JinHillah_Hard",1,boss22+"覺醒希拉"),
	Array("Dunkel",1,boss25+"頓凱爾"),
	Array("Dusk",1,boss24+"戴斯克"),
	Array("BlackMage_Hard",1,boss23+"黑魔法師"),
	Array("Seren",1,boss26+"賽蓮"),
	Array("Kalos_Chaos",1,boss27+"卡洛斯")
)
var text = "";
var pqname;
for(var i = 0;i<bosslist.length;i++){
	pqname  = "";
	if(undefined ==bosslist[i][2]){
		pqname = bosslist[i][0]; 
	}else{
		pqname = bosslist[i][2]; 
	}
	if(bosslist[i][1]-player.getPQLog(bosslist[i][0])==0){
		text +="    "+nbspStrAdd(pqname,25)+"      #g"+player.getPQLog(bosslist[i][0])+"/"+bosslist[i][1]+"#k\r\n";
	}else{
		text +="    "+nbspStrAdd(pqname,25)+"      #r"+player.getPQLog(bosslist[i][0])+"/"+bosslist[i][1]+"#k\r\n";
	}
	
}
npc.say(text)




function nbspStrAdd(str,len){
	var str = str+"";
	var nbspStr = "";
	if(chkstrlen(str)<len){
		for(var i=0;i<len-chkstrlen(str);i++){
			nbspStr += " ";
		}
	}
	
	return str+nbspStr;
}
function chkstrlen(str){
　var strlen = 0;
　for(var i = 0;i < str.length; i++){
　	if(str.charCodeAt(i) > 255) //如果是漢字，則字符串長度加2
　　	strlen += 2;
　　else
　　　　strlen++;
　}
　return strlen;
}