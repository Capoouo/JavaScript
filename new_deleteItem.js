

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";

while(true){
	start();
}


function start() {
     
        text = head + "#e- 請選擇要回收的道具類型 -(注意:背包沒東西別亂點，造成物品數據丟失)#n\r\n";
        text += "#L1#裝備欄#l\r\n#L2#消耗欄#l\r\n#L4#其它欄#l\r\n#L3#裝飾欄#l\r\n#L5#特殊欄#l\r\n";
			text += "\r\n#r#e以下功能為填入想要的數字刪除第1個物品~第XX個物品,請慎重使用。\r\n";
			text += "#L6#裝備欄#l #L7#消耗欄#l #L9#其它欄#l #L8#裝飾欄#l #L10#特殊欄#l #L11#時裝欄#l\r\n";
		
        var selection = npc.askMenu(text);
    
        inventoryType = parseInt(selection);
		if(inventoryType<6){
			var text = head + "#e- 請選擇要回收的道具 -#n\r\n\r\n#r";
			var item = null;
			 
			for(var i =1;i<=128;i++){
				item = player.getInventorySlot(inventoryType,i); 
				if(item==null){
					continue;
				} 
				 text += "#L" + i + "# #v" + item.getDataId() + "#";
				 if (i % 5 == 0) {
					text += "\r\n";
			   }
			} 
			var deleteSlot = npc.askMenu(text);
		 
			var item = player.getInventorySlot(parseInt(inventoryType),parseInt(deleteSlot));
			if(item==null){
				
					sendOk("沒有需要刪除的物品");
					return;
				} 
			text = head + "#e確定要回收#r#v" + item.getDataId() + "##z" + item.getDataId() + "# " + 1 + "個 #k嗎？";
			var askyn = npc.askYesNo(text);
			if(askyn==1){
				if(parseInt(deleteSlot) >127){
					npc.say("最後一格的裝備不能回收");
				}else{
					player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
					npc.say(head + "回收成功，祝你遊戲愉快~");
				}
				
			}
    	}else if (inventoryType == 6){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}else if (inventoryType == 7){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(2, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(2, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}else if (inventoryType == 9){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(4, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(4, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}else if (inventoryType == 8){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(3, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(3, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}else if (inventoryType == 10){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(5, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(5, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}else if (inventoryType == 11){
			var aaa = 999 ;
			var text = "";
			text = "請輸入你要刪除1 ~ 多少欄位" ;
			var number = npc.askNumber(text, 1, 1, aaa);
			
			
			var text;
var beDeletedArr = new Array();
var text = "";

var item;
var newItemList = Array();
for(var i = 1; i <= number; i++) {
	item = player.getInventorySlot(6, i);
	if(item != null) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	  
		for(var key in beDeletedArr) {
			player.loseInvSlot(6, beDeletedArr[key]);
		}
		text = "回收成功";
		npc.say(text);
	}
			 
		}	
      
}
