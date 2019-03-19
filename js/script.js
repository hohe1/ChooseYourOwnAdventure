/* global $ */

var past = [game.levels.start]; // <---add ;eve; name each time choice button clicked.


$(document).ready(function() {
    var firstLevel = game.levels.start;
    renderLevel(firstLevel);




    // When user clicks a choice, go to the next level
    $("body").on("click", "#choices button", function() {
        
        var nextLevel = $(this).attr("data-next-level");
        $("#wrapper").animateCss("fadeOut", function() {
            renderLevel(game.levels[nextLevel]); //<----- not array is [] notation
            
            console.log("below is the normal thing passed in when choice is clicked");
            console.log(game.levels[nextLevel]);
            
            $("#wrapper").removeClass("fadeOut");
            $("#wrapper").addClass("fadeIn");
            
            past.push(game.levels[nextLevel]); // <--- actually pushing level
            //past.push(game.levels.);
            console.log(past);
        
            
        });
    });
    
    //go back in time
    $("#back").click(()=>{
        let lastLevel = past[past.length-2]//past[past.length-2];
        console.log("below is the 'lastLevel' variable pass in when go back in time")
        console.log(lastLevel)
        //console.log("past.length: "+past.length)

        // $("#wrapper").animateCss("fadeOut", function() {
             renderLevel(lastLevel); //<----- not array is [] notation
             //$("#wrapper").removeClass("fadeOut");
            // $("#wrapper").addClass("fadeIn");
            
            past.splice(past.length-1,1);
            //past.splice(past.length-2,1);
            console.log(past);
     //});
    });
    
});//<-- closing of doc ready do not touch

function renderLevel(level) {
    $("#choices").empty();

    setMusic(level);
    setImage(level);
    $("#prompt").text(level.message[0]);
        
    if(level.message.length !== 0){
        let i = 1;
        
        function time(){
            setTimeout(function() {
                $("#prompt").text(level.message[i]); 
                i ++;
                
                if (i < level.message.length){  //wait before the function is executed again
                    time()
                }else{
                    callback(); //
                }
            }, 1500)
        }
        
        time();
    }
    // this line below need to be execute after the if loop is over.
    
    function callback(){
        $("#choices").empty();
    

        var choices = level.choices;
        if (choices) {
            for (var i = 0; i < choices.length; i++) {
                var choice = choices[i];
                $("#choices").append("<button class='btn btn-outline-secondary' data-next-level='" + choice.nextLevel + "'>" + choice.text + "</button>");
            }
        }
    }
}

// stuff like music and img are set here

var currentMusic = "";

function setMusic(level) {
    var music = level.music || game.music || "";

    if (currentMusic !== music) {
        currentMusic = music;
        $("#music").attr("src", "./music/" + currentMusic);
    }
}

function setImage(level) {
    var image = level.background_image || game.background_image || "";
    $("#background-image").css("background-image", "url(./img/" + image + ")");

}

$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            if (typeof callback === 'function') callback();
        });

        return this;
    },
});
