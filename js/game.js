// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Untitled.mp3",
    background_image: "wakeF150.gif",
    levels: {
        start: {
            message: ["You woke up, you have work today.","Will you go to work?"],
            choices: [
                {
                    text: "Go work",
                    nextLevel: "seeButterFly",
                },

                {
                    text: "Stay home",
                    nextLevel: "phoneCall",
                },
                
            ]
        },

        seeButterFly: {
            background_image: "toWorkF150.gif",
            message: ["You come across a butterfly."],
            choices: [
                {
                    text: "touch",
                    nextLevel: "earthQuake",
                },
                
                {
                    text: "ignore",
                    nextLevel: "arrive",
                },
            ]
        },

        phoneCall: {
            background_image: "phone150F.gif",
            message: ["Your phone ring, your boss is calling."],
            choices: [
                {
                    text: "go to work",
                    nextLevel: "seeButterFly",
                },
                
                {
                    text: "ignore",
                    nextLevel: "earthQuake",
                }
            ]
        },
        
        //bad ending 1
        earthQuake: {
            background_image: "earthQuakeF80.gif",
            message: ["!?","there's an earthquake!","you're dead dead."],
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        //-------
        arrive: {
            background_image: "",
            message: ["you arrive at work place",""],
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
         
        
        
        
        
        
    }
};
