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
 * @author Jackson (content from DelphiMS r418)
 */
let mobId;
let event_name;
switch (map.getId()) {
        case 992001000:
		var event = portal.getEvent();
               if (event.getVariable("stage1") == "clear") {
                                //第一關 消滅 100只古代綠水靈  完成
                              player.changeMap("992002000") ;
                        }else{
							npc.say("你還沒通關")
						}
        case 270051100:
                mobId = 8820108;
				//hp=69500000000;
                event_name = "boss_pinkbeen_chaos";
                break;
}
