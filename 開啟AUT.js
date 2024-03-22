let hurt = npc.askYesNo("滿260等可花費五億楓幣即可開啟AUT是否開啟");
	if (hurt==1) {
		if (player.getPQLog("真實符文"+ hurt) > 0) {
		npc.say("你已經開啟");
		}else if (player.getLevel() < 260) {
			npc.say("你的等級不足260");
	}else{
		if(player.hasMeso(500000000) == 1) {
				      player.completeQuest(1484,0);//消除任務
                    player.completeQuest(38101,0);//飯店阿爾克斯
                    player.completeQuest(38102,0);//飯店阿爾克斯
                    player.completeQuest(38103,0);//飯店阿爾克斯
                    player.completeQuest(38104,0);//飯店阿爾克斯
                    player.completeQuest(38105,0);//飯店阿爾克斯
                    player.completeQuest(38106,0);//飯店阿爾克斯
                    player.completeQuest(38107,0);//飯店阿爾克斯
                    player.completeQuest(38108,0);//飯店阿爾克斯
                    player.completeQuest(38109,0);//飯店阿爾克斯
                    player.completeQuest(38110,0);//飯店阿爾克斯
                    player.completeQuest(38111,0);//飯店阿爾克斯
                    player.completeQuest(38112,0);//飯店阿爾克斯
                    player.completeQuest(38113,0);//飯店阿爾克斯
                    player.completeQuest(38114,0);//飯店阿爾克斯
                    player.completeQuest(38115,0);//飯店阿爾克斯
                    player.completeQuest(38116,0);//飯店阿爾克斯
                    player.completeQuest(38117,0);//飯店阿爾克斯
                    player.completeQuest(38118,0);//飯店阿爾克斯
                    player.completeQuest(38119,0);//飯店阿爾克斯
                    player.completeQuest(38120,0);//飯店阿爾克斯
                    player.completeQuest(38121,0);//飯店阿爾克斯
                    player.completeQuest(38122,0);//飯店阿爾克斯
                    player.completeQuest(39801,0);//賽爾尼溫
                    player.completeQuest(39802,0);//賽爾尼溫
                    player.completeQuest(39803,0);//賽爾尼溫
                    player.completeQuest(39804,0);//賽爾尼溫
                    player.completeQuest(39805,0);//賽爾尼溫
                    player.completeQuest(39806,0);//賽爾尼溫
                    player.completeQuest(39807,0);//賽爾尼溫
                    player.completeQuest(39808,0);//賽爾尼溫
                    player.completeQuest(39809,0);//賽爾尼溫
                    player.completeQuest(39810,0);//賽爾尼溫
                    player.completeQuest(39811,0);//賽爾尼溫
                    player.completeQuest(39812,0);//賽爾尼溫
                    player.completeQuest(39813,0);//賽爾尼溫
                    player.completeQuest(39814,0);//賽爾尼溫
                    player.completeQuest(39815,0);//賽爾尼溫
                    player.completeQuest(39816,0);//賽爾尼溫
                    player.completeQuest(39817,0);//賽爾尼溫
                    player.completeQuest(39818,0);//賽爾尼溫
				player.loseMesos(500000000);
				player.addPQLog("真實符文"+1);	
				npc.say("#r真實符文已開啟");				
			 }
			 else {
				 npc.say("您的楓幣不足");
			 }
	}
	}	

