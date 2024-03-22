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
 * Admits players into Ludi party quest.
 *
 * @author Jackson
 */

let minPlayers = 1;
let maxPlayers = 1;
let minLevel = 50;
let maxLevel = 300;
let maxenter = 1;
let PQLog = "BOSS";

let sel = npc.askMenu("#e<月亮道館>\r\n#r注意 : 此副本為Moon谷畢業副本，難度極高。\r\n#b#n\r\n\r\n#v4310260#<創世精華> x 1\r\n#v4310218#<妖怪硬幣> x 10\r\n#v2633616#<AUT自選> x 20\r\n #r每天最多進入1次\r\n#b#L1#我想進入月亮道館。#l");//#L2#我想尋找組隊。#l\r\n#L4#我想領取#t1022073#。#l#l\r\n
switch (sel) {
        case 1:
                 if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "範圍,\r\n那麽請讓你的組隊長和我對話吧!");
                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!");
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你隊員的等級要在" + minLevel + "~" + maxLevel + "範圍!請確認!");
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像你有隊員在其他地方，請把隊員都召集到這里！");
                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你隊員#r#e" + player.getName() + "#n#k今日次數已經達到上限了。");
                } else if (npc.makeEvent("LHBOSS", true, party) == null) {
                        npc.say("裡面已經有人了，請稍等..");
                }
                break;
        case 2:
                npc.say("請向周圍的朋友們請求組隊。使用尋找組隊(快捷鍵O)功能，可以在任何時間任何地點尋找組隊。敬請參考。");
                break;
        case 3:
                npc.say("#e<組隊任務：次元裂縫>#n\r\n#b#m220000000##k出現了次元裂縫！為了阻止入侵的怪物，我們迫切需要冒險家們自發的幫助。請和可以信賴的同伴一起，拯救#m220000000#！.必須消滅怪物，解決各種難關，戰勝#r#o9300012##k。\r\n  - #e等級#n：50級以上#r(推薦等級 50～69 )#k \r\n  - #e限制時間#n：20分鐘\r\n  - #e參加人數#n：3～6人\r\n  - #e獲得物品#n：#i1022073:# #t1022073# #b(每幫助5次時獲得)#k                         各種消耗、其他、裝備物品");
                break;
        case 4:
                npc.say("你每幫助我5次，我就會給你1個#i1022073:##b#t1022073##k。你只要再幫我#b5次#k，就可以獲得#b#t1022073##k了。");
                break;
        case 5:
                let pqtry = maxenter - player.getPQLog(PQLog);
                npc.say("今天剩余挑戰次數是#r" + pqtry + "次#k.");
                break;
}
