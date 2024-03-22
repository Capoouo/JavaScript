/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 *
 * @author Jackson
 */

var event = npc.getEvent();
if (event != null) 
{
if(player.getQuestRecordEx(42001) == 0){
player.updateQuestRecordEx(42001,1);
}
if(player.getQuestRecordEx(42002) == 0){
player.updateQuestRecordEx(42002,1);
}
	var mapID = map.getId();
        var time = player.getIntQuestRecordEx(42011, "time");
        var totalTime = player.getIntQuestRecordEx(42011, "totalTime");
		 var stage = parseInt(mapID % 10000 / 100);
        if (player.isGm()) {
                player.dropMessage(6, "剩余時間：" + time / 1000 + "秒");
        }
        player.screenEffect("event/start");
        player.showLobbyTimer(2, time, totalTime, 42011);
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
		player.updateQuestRecordEx(42001,1);
        map.blowWeatherEffectNotice("請獵殺怪物和累積5千萬以上的傷害！", 147, 15000);

}

