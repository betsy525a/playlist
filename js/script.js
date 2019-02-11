/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Tokyo Ghoul - Unravel", "Your Lie in April - Hikarunara", "FullMetal Alchemist - Again", "Assasination Classroom - Question"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images =["https://i.ytimg.com/vi/7aMOurgDB-o/maxresdefault.jpg", "https://i.ytimg.com/vi/3mOd1X1UObg/maxresdefault.jpg", "https://i.ytimg.com/vi/2uq34TeWEdQ/maxresdefault.jpg", "https://darkstarzero.files.wordpress.com/2016/01/screenshot-1_27_2016-11_06_56-pm.png"];
var artists = ["Toru Kitajima", "Goose house", "Yui", "3-nen E-gumi Utatan"];
var lengths = ["1:30", "1:30", "1:29", "1:29"];
var links = ["https://www.youtube.com/watch?v=7aMOurgDB-o&t=9s", "https://www.youtube.com/watch?v=lkdi6eK05OA&t=13s", "https://www.youtube.com/watch?v=2uq34TeWEdQ&t=1s", "https://www.youtube.com/watch?v=iug12DnMNHQ&t=1s"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        $("#songs").append("<div class='sameDiv'>" + song + "</div>" + "<br><hr>");
    });
    
    images.forEach(function(img){
        $("#images").append("<img src=" + img + ">" + "<br><hr>");
    });
    
    artists.forEach(function(name){
        $("#artists").append("<div class='sameDiv'>" + name + "</div>" + "<br><hr>");
    });
    
    lengths.forEach(function(time){
        $("#lengths").append("<div class='sameDiv'>" + time + "</div>" + "<br><hr>");
    });
    
    var count = 0;
    links.forEach(function(link){
        $("#links").append("<div class='diffDiv'>" + "<a href=" + link + "> Youtube Link: " + songs[count]+ "</a>" + "</div>" + "<br><hr>");
        count++;
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
    var newSong = $("#song").val();
    $("#song").val("");
    var newArtist = $("#artist").val();
    $("#artist").val("");
    var newLength = $("#length").val();
    $("#length").val("");
    var newImage = $("#image").val();
    $("#image").val("");
    var newLink = $("#link").val();
    $("link").val("");
    
    songs.push(newSong);
    artists.push(newArtist);
    lengths.push(newLength);
    images.push(newImage);
    links.push(newLink);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
