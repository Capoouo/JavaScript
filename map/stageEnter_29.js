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
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
        //ms.forceTrigger("aquaris29_2", parseInt(java.lang.Math.random() * 7) + 1);不知道是什麽
        var rnd = parseInt(java.lang.Math.random() * 7) + 1;
		player.updateQuestRecordEx(42001,29);
        event.setVariable("stage29_Value", String(rnd));
        map.setReactorState("aquaris29_2", rnd, 0);
        map.blowWeatherEffectNotice("請獲得7個沙晶，然後1~7個掉落在右側樹下！", 147, 15000);
}
