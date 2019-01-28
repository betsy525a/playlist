/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Unravel", "Hikarunara", "Again", "Question"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images =["https://images-na.ssl-images-amazon.com/images/I/51BO89YT80L._SS500.jpg", "2", "3", "4"];
var artists = ["1", "2", "3", "4"];
var lengths = ["1", "2", "3", "4"];
var links = ["1", "2", "3", "4"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        $("#songs").append(song + "<br>");
    });
    
    images.forEach(function(img){
        $("#images").append("<img src=" + img + ">" + "<br>");
    });
    
    artists.forEach(function(name){
        $("#artists").append(name + "<br>");
    });
    
    lengths.forEach(function(time){
        $("#lengths").append(time + "<br>");
    });
    
    links.forEach(function(link){
        $("#links").append("<a href=" + link + "></a><br>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
