// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Untitled.mp3",
    levels: {
        start: {
            background_image: "wakeF150.gif",
            message: ["You woke up, you have work today.","Will you go to work?"],
            choices: [
                {
                    text: "Go work",
                    nextLevel: "busStop",
                },

                {
                    text: "Stay home",
                    nextLevel: "phoneCall",
                },
                
            ]
        },


        phoneCall: {
            background_image: "phone150F.gif",
            message: ["Your phone ring, your boss is calling."],
            choices: [
                {
                    text: "go to work",
                    nextLevel: "busStop",
                },
                
                {
                    text: "ignore",
                    nextLevel: "earthQuake",
                }
            ]
        },
        
        //bad endings
        earthQuake: {
            background_image: "earthQuakeF80.gif",
            message: ["!?","there's an earthquake!","you're dead."],
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        hit: {
            background_image: "endingHit.gif",
            message: ["You died."],
            choices: [
                {
                    text: "restart",
                    nextLevel: "start",
                },
                
            ]
        },
        
        insane: {
            background_image: "insane.gif",
            message: ["You went to the top of the office building.","you see the monster.","your brain can not comprehend what is happening.","you went insane as a result."],
            choices: [
                {
                    text: "restart",
                    nextLevel: "start",
                },
            ]
        },
        //related to travel to work
        seeButterFly: {
            background_image: "toWorkF150.gif",
            message: ["You come across a butterfly."],
            choices: [
                {
                    text: "touch",
                    nextLevel: "city",
                },
                
                {
                    text: "ignore",
                    nextLevel: "late",
                },
            ]
        },
        
        onTime: {
            background_image: "onTimeF150.gif",
            message: ["bus came much earlier than expected.","you arrive at work place on time."],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "fakeEQ",
                },
            ]
        },
        
        late: {
            background_image: "late.gif",
            message: ["you arrive at work place late."],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "city",
                },
            ]
        },
        
        busStop: {
            background_image: "busStopF150.gif",
            message: ["you arrive at bus stop.","bus is coming in a hour"],
            choices: [
                {
                    text: "talk to people",
                    nextLevel: "talk",
                },
                
                 {
                    text: "wait for bus",
                    nextLevel: "onTime",
                },
                
                 {
                    text: "walk to work",
                    nextLevel: "seeButterFly",
                },
            ]
        },
        
        talk: {
            background_image: "talk.gif",
            message: ["a weird guy is talking.","'there will be a catastrophe!'","you think he is crazy."],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "busStop",
                },
            ]
        },
        // city 
        city: {
            background_image: "city.png",
            message: ["this is the city.","!?"],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "cityRuin",
                },
            ]
        },
        
        cityRuin: {
            background_image: "cityRuin.png",
            message: ["the city is in ruins."],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "monster",
                },
            ]
        },
            // monster
        monster: {
            background_image: "cityMonsterF150.gif",
            message: ["a thing emerged from the depth of the ruin."],
            choices: [
                {
                    text: "continue.",
                    nextLevel: "decide", //<------------------------------------
                },
            ]
        },
        
        //in side decides
        fakeEQ: {
            background_image: "earthQuakeF80.gif",
            message: ["There is an earthQuake!","you must get out as soon as it stops."],
            choices: [
                {
                    text: "ok",
                    nextLevel: "inside",
                },
                
            ]
        },
        
        inside: {
            background_image: "esscapeF3.png",
            message: ["you must run."],
            choices: [
                {
                    text: "run to roof top.",
                    nextLevel: "insane",
                },
                
                 {
                    text: "run to F2.",
                    nextLevel: "F2",
                },
                
                 {
                    text: "run outside.",
                    nextLevel: "city",
                },
            ]
        },
        
        F2: {
            background_image: "f2Blocked.gif",
            message: ["F2 is blocked."],
            choices: [
                {
                    text: "run up",
                    nextLevel: "inside",
                },
                
                {
                    text: "run down",
                    nextLevel: "decide",
                }
            ]
        },
        
        
        //outside decides
        
         decide: {
            background_image: "decide.png",
            message: ["you look at the monster.","which way will you run?"],
            choices: [
                {
                    text: "left",
                    nextLevel: "goodEnd",
                },
                
                {
                    text: "right",
                    nextLevel: "hit",
                }
            ]
        },
        
        
        //live
        goodEnd: {
            background_image: "survive.png",
            message: ["you ran to the evacuation zone.","you have been transported out of the city.","you live to work another day."],
            choices: [
                {
                    text: "ok",
                    nextLevel: "start",
                },
                
            ]
        },
    }
};
