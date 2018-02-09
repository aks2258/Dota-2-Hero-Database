var dotaURL = "https://api.opendota.com/api/heroStats";
var stats;
var searchResponse = "";




$.ajax({
  url: dotaURL,
  method: "GET"
})
.done(function (response) {
          stats=response;
          console.log(response);
         
          (function (response) {
          console.log(response);
          searchResponse=result;
          }); 



  for (var i = 0; i < response.length; i++) {

   if (response[i].primary_attr === "str") {
      var iconDiv = $("<div>");
      var iconImg = $("<img class='item'>").attr("src", 'https://api.opendota.com' + response[i].icon);
      iconImg.attr("data-name", response[i].localized_name);
      iconImg.attr("data-image", 'https://api.opendota.com' + response[i].img);
      iconImg.attr("data-index", i);
      iconDiv.append(iconImg);
      $("#str-div").append(iconDiv);
    }

   if (response[i].primary_attr === "agi") {
      var iconDiv = $("<div>");
      var iconImg = $("<img class='item'>").attr("src", 'https://api.opendota.com' + response[i].icon);
      iconImg.attr("data-name", response[i].localized_name);
      iconImg.attr("data-image", 'https://api.opendota.com' + response[i].img);
      iconImg.attr("data-index", i);
      iconDiv.append(iconImg);
      $("#agi-div").append(iconDiv);
    }

   if (response[i].primary_attr === "int") {
      var iconDiv = $("<div>");
      var iconImg = $("<img class='item'>").attr("src", 'https://api.opendota.com' + response[i].icon);
      iconImg.attr("data-name", response[i].localized_name);
      iconImg.attr("data-image", 'https://api.opendota.com' + response[i].img);
      iconImg.attr("data-index", i);
      iconDiv.append(iconImg);
      $("#int-div").append(iconDiv);
    }
  }

 $(document).on("click", ".item", function() { 
    var heroNameDiv = $("#name");
    $("#name").empty();
    var heroName = $(this).attr("data-name");
    heroNameDiv.append(heroName);
    $("#name").append(heroNameDiv);

   var heroImageDiv = $("#image");
    $("#image").empty();
    var heroImage = $(this).attr("data-image");
    var image = $("<img>");
    image.attr("src", heroImage);
    heroImageDiv.append(image);

        var roles = $("#roles");
        $("#roles").empty();
        var heroIndex = $(this).attr("data-index");
        var heroStats = stats[heroIndex]
        roles.append("Roles: " + heroStats.roles);
        $("#roles").append(roles);


        var baseHealth = $("#base-health");
        $("#base-health").empty();
        var heroIndex = $(this).attr("data-index");
        var heroStats = stats[heroIndex]
        baseHealth.append("Base Health: " + heroStats.base_health);
        $("#base-health").append(baseHealth);

        var baseStr = $("#base-str");
        $("#base-str").empty();
        var heroIndex = $(this).attr("data-index");
        var heroStats = stats[heroIndex]
        baseStr.append("Base Strength: " + heroStats.base_str);
        $("#base-str").append(baseStr);

        var baseAgi = $("#base-agi");
        $("#base-agi").empty();
        var heroIndex = $(this).attr("data-index");
        var heroStats = stats[heroIndex]
        baseAgi.append("Base Agility: " + heroStats.base_agi);
        $("#base-agi").append(baseAgi);

        var baseInt = $("#base-int");
        $("#base-int").empty();
        var heroIndex = $(this).attr("data-index");
        var heroStats = stats[heroIndex]
        baseInt.append("Base Intellect: " + heroStats.base_int);
        $("#base-int").append(baseInt);
    
   

   search(heroName); 
  });

  function handleAPILoaded() {
    var API = "AIzaSyDJxAZT-3prr7wcDfJdBdU_Axx1iShsAcg";
    gapi.client.setApiKey(API);
    gapi.client.load('youtube', 'v3');
  };


 function search(heroName) { //gage (passing "item, not this remember THIS is a reserved word")
    console.log("searching now"); //gage
    console.log("Q = " + heroName); //gage
    
    
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + heroName +
    " " + "dota" + "&key=AIzaSyDJxAZT-3prr7wcDfJdBdU_Axx1iShsAcg";
    //gage below here i made "dota" a string
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function (response) {
      console.log(response);
      searchResponse=response;
      var heroYoutubeDiv = $("#youtube");
      $("#youtube").empty();
      console.log("id", searchResponse);
      var heroVideo = $("<iframe>").attr("src", "https://www.youtube.com/embed/"+searchResponse.items[0].id.videoId);
      heroYoutubeDiv.append(heroVideo);
      $("#youtube").append(heroYoutubeDiv);
    });
  }

function userValidation(userRank) {
  var userRank = "https://api.opendota.com/api/players/"; 
  // add account id to end
  $.ajax({
    url: userRank,
    method: "GET"
  })
}
});