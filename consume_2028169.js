let txt=npc.askText("168請輸入帳號ID\r\n#b","", 5, 20);
  if(getEventCount("168推文undefined")){
setEventCount("168推文undefined", 0, 0,txt);
 npc.say("以發放成功");
   }else{
setEventCount("168推文undefined", 0, 0,txt);
 npc.say("以發放成功");
   }
      function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, txt, eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, txt, player.getWorld(), eventName, 0, 2);
		return 0;
	}

}
   function setEventCount(eventName, type, value,txt) {

	var sql = "update accounts_event set type=?,value=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, txt, eventName);

}