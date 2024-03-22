

var item = 5152053; //所需物品

let res;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenuA("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}
let selection = npc.askMenuA("你現在正在使用#b變更髮型#k的服務。\r\n髮型代碼查詢請到[#rDiscord語音群#k]查看提供的教學\r\n使用該服務將收取#r楓幣50萬#k的手續費\r\n#b#L0#變更髮型(輸入代碼)\r\n");
if(selection==0){
		let number = npc.askNumber("\r\n請填寫髮型代碼\r\n#r[請先檢查當前遊戲版本是否有此髮型]","20000",0 ,99999);
        if(number==28617){
            npc.say("\r\n該造型受到限制!");

        }else{
            faces = [number];
            res = npc.askAvatar("#b無法顯示外觀代表沒有此代碼，#r請勿按確定#b以免造成人物發生不可預期的錯誤！", faces, item, isAngel, isBeta);
            selection = res[0];
            let buy = res[1];

            if (player.hasMeso(500000)) {
                player.loseMesos(500000);
                if(!isAngel){
                    player.setHair(faces);

                }else{
                    player.setSubHair(faces);
                    

                }
                npc.sayNext("\r\n變更完成!享受你的新造型吧!\r\n如果造型沒發生變化，請切換頻道!");
                
            }else {
                npc.sayNext("\r\n很抱歉，你的金額不足以支付此次變更費用!");
            }
        }   
}
