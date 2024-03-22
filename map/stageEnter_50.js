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
        var rData = player.getQuestRecordEx(42011, "time");
        var tData = player.getQuestRecordEx(42011, "totalTime");
        var startData = player.getQuestRecordEx(42011, "start");
        if (rData == null || tData == null || startData == null) {
                rData = "600000";
                tData = "600000";
                startData = String(java.lang.System.currentTimeMillis());
                player.updateQuestRecordEx(42011, "time", rData);
                player.updateQuestRecordEx(42011, "totalTime", tData);
                player.updateQuestRecordEx(42011, "start", startData);
        }
        var time = parseInt(rData);
        var totalTime = parseInt(tData);
        if (player.isGm()) {
                player.dropMessage(6, "剩余時間：" + time / 1000 + "秒");
        }
        player.screenEffect("event/start");
        player.showLobbyTimer(2, time, totalTime, 42011);
		player.updateQuestRecordEx(42001,50);
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
        map.blowWeatherEffectNotice("你如果將桃樂絲消滅，就真的勝利了，這將是一場激烈的戰鬥，加油！", 147, 15000);
        if (!"1".equals(event.getVariable("Boss_S50"))) {
                //召喚Boss
                event.setVariable("Boss_S50", "1");
                let boss = map.makeMob(9309207);
                boss.changeBaseHp(boss.getHp());
                map.spawnMob(boss, 19, 185);
        }
}
