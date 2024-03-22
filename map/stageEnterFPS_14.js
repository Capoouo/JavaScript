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

        player.createMGGun();
        player.setInGameDirectionMode(true, false, false, false);
        player.setStandAloneMode(true);
        player.setInGameCurNodeEventEnd(true);
        player.setVansheeMode(true);
        npc.setDelay(100);
        for (let i = 0; i < 4; i++) {
                map.spawnMob(9309116, 237, 155);
                map.spawnMob(9309117, -3, 35);
                map.spawnMob(9309116, -304, 155);
                map.spawnMob(9309117, -3, -20);
        }

        player.showScreenAutoLetterBox("killing/first/start", 0);
        player.showFloatingUI("colossus/msg1", 7, true);
        //player.showFloatingUI("colossus/exit", 8, true);
        player.setMGGun("shotgun", "shotgun", 1, 200);
        player.setMGAmmo(99);
}
