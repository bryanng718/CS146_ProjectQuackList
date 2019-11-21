audioPlayer();
function audioPlayer()
{
    var currentSong = 0; 
    $("#audioPlayer")[0].src = $("#playlist li a")[0];  //Load first song into player
    $("#playlist li a").click(function(e){              
        e.preventDefault();                             //Prevents opening new tab when clicking on a song in the list
        $("#audioPlayer")[0].src = this;                //Loads clicked-on song into player
        $("#audioPlayer")[0].play();                    //Plays the song when clicked (as opposed to having to press the play button)
        $("#playlist li").removeClass("current-song");  //Remove styling form song that was playing
        currentSong = $(this).parent().index();         //Find index of clicked on song
        $(this).parent().addClass("current-song");        //Add styling to clicked on song
    });

    //Event listener for when the song ends
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;                                                      //Increments currentSong by 1
        if(currentSong == $("#playlist li a").length)                       //If its the last song in the list go to the beginning
            currentSong = 0;
        $("#playlist li").removeClass("current-song");                      //Get rid of styling on ended song
        $("#playlist li:eq("+currentSong+")").addClass("current-song");     //Add styling to new song
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;    //Load new song into audio player
        $("#audioPlayer")[0].play();                                        //Play new song
    });
}
