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
	              /*  map.clearMobs();
	                map.resetReactors();
  for (var i = 0; i < 110; i++) {
        var mob = map.makeMob(9309017);
        var mob2 = map.makeMob(9309018);
        var mob3 = map.makeMob(9309019);
        map.spawnMob(mob2, -1208, -25);
        map.spawnMob(mob3, -445, -25);
        map.spawnMob(mob, -768, 395);
    }*/
        player.screenEffect("event/start");
		player.updateQuestRecordEx(42001,37);
        player.showLobbyTimer(2, time, totalTime, 42011);
        player.updateQuestRecordEx(42011, "start", String(java.lang.System.currentTimeMillis()));
        map.blowWeatherEffectNotice("三種怪物各消滅100只吧！", 147, 15000);
        map.setFastSpawn(true);
}
