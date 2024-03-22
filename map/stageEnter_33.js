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
if (event != null) {
        var time = player.getIntQuestRecordEx(42011, "time");
        var totalTime = player.getIntQuestRecordEx(42011, "totalTime");
        if (player.isGm()) {
                player.dropMessage(6, "剩余時間：" + time / 1000 + "秒");
        }
        player.screenEffect("event/start");
        player.showLobbyTimer(2, time, totalTime, 42011);
		player.updateQuestRecordEx(42001,33);
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
        map.blowWeatherEffectNotice("找到正確的路通往傳送口吧，可以使用鑰匙對傳送口的方向進行轉換哦。", 147, 15000);
        player.gainItem(2432459, 200);
        player.gainItem(2432460, 200);
        //重置地圖所有箭頭
        //00 — 04
        //|     |
        //04 — 44
        for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                        var stat = parseInt(java.lang.Math.random() * 3) + 1;
                        map.setReactorState(String(x * 10 + y), stat, 0);
                }
        }
}
