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
 * Boss: Dusk 风雨森林
 * @author Jackson
 */

let EXIT_MAP = 800000000;


let DEATH_COUNT = 5;

let BOSS_LOG = "龙虎BOSS";
let party;
let members;
let endTime;
var maps = [
321120000,
321121000,
321122000,
321123000,
321124000,
321125000,
321126000
];

 
var map_1,map_2,map_3,map_4,map_5,map_6,map_7; 

function init(attachment) {
        party = attachment;
        members = party.getLocalMembers();
      
        map_1 = event.getMap(maps[0]);
		map_2 = event.getMap(maps[1]);
		map_3 = event.getMap(maps[2]);
		map_4 = event.getMap(maps[3]);
		map_5 = event.getMap(maps[4]);
		map_6 = event.getMap(maps[5]);
		map_7 = event.getMap(maps[6]);
		spawnMobs();
        party.changeMap(maps[0], "st00");
        map_1.showTimer(10 * 60);

        event.startTimer("kick", 10 * 60 * 1000);
        endTime = new Date().getTime() + 10 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle", 4000);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function makeMob(mobid,hp,x,y,map){
	var boss = map.makeMob(mobid);
	boss.changeBaseHp(hp);
	boss.setForcedMobStat(210, 2);
	map.spawnMob(boss, x, y);
}

function spawnMobs(){
	
    map_1.reset();
	makeMob(9601016,20000000000000,-54, 241,map_1);
	makeMob(9601017,20000000000000,-54, 241,map_1);
	
	map_2.reset();
	makeMob(9601018,45000000000000,-444, 361,map_2);
	makeMob(9601019,45000000000000,-444, 361,map_2);
    
	map_3.reset();
	makeMob(9601018,58500000000000,327, 421,map_3); 
	makeMob(9601016,58500000000000,327, 421,map_3);
	makeMob(9601017,58500000000000,327, 421,map_3);
	makeMob(9601019,58500000000000,327, 421,map_3);
	 
	map_4.reset();
	makeMob(9601013,58500000000000,-25, 391,map_4);
	
	map_5.reset();
	makeMob(9601014,58500000000000,1442, 391,map_5);
	
	map_6.reset();
	makeMob(9601014,60000000000000,300, 61,map_6);
	makeMob(9601013,60000000000000,300, 61,map_6);
	
	map_7.reset();	
	makeMob(9601018,75000000000000,992, -59,map_7);
	makeMob(9601019,75000000000000,992, -59,map_7);
	makeMob(9601017,75000000000000,992, -59,map_7);
	makeMob(9601016,75000000000000,992, -59,map_7);
	makeMob(9601014,500000000000000,544, -59,map_7);
	makeMob(9601013,500000000000000,544, -59,map_7);
	makeMob(9601015,5000000000000000,544, -59,map_7);
	
}

function mobDied(mob) {
	switch (mob.getDataId()) {
		case 9601015:
		 for (let i = 0; i < members.length; i++) {
			 members[i].runScript("zchaoFinish");
			 members[i].changeMap(910000000);
		}
		break;
	}
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap)
                                members[i].changeMap(EXIT_MAP, "st00");
                        //collapse the members array so we don't accidentally warp
                        //this member again if the leader leaves later.
                        members.splice(i, 1);
                        break;
                }
        }
        if (members.length <= 0) {
                event.destroyEvent();
        }
}

function playerDisconnected(player) {
        //changeMap is false since all PQ maps force return the player to the exit
        //map on his next login anyway, and we don't want to deal with sending
        //change map packets to a disconnected client
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
        //TODO: is it true that even when a non-leader clicks Nella, the entire
        //party is booted? and that GMS forces party out when only two members
        //remain alive and online?
        switch (destination.getId()) {
                case maps[0]:
				case maps[1]:
				case maps[2]:
				case maps[3]:
				case maps[4]:
				case maps[5]:
				case maps[6]:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
        if (party.getLeader() == player.getId()) {
                kick();
        } else {
                removePlayer(player.getId(), true);
        }
}

function kick() {
        for (let i = 0; i < members.length; i++) {
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
				break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}