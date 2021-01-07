//jshint esversion:6
const express =require("express");
const bodyParser=require("body-parser");
const https   = require("https");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
const url="https://content.guardianapis.com/search?q=latest&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
 https.get(url,function(response){
   response.on("data",function(data){  
     var latestNews=JSON.parse(data);
     var latestNewsData=latestNews.response.results;
     res.render("index",{newsData:latestNewsData,title:"Latest"});
   });
 });
});
app.get("/national",function(req,res){
   const url="https://content.guardianapis.com/search?q=india&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
    https.get(url,function(response){
      response.on("data",function(data){
        var indiaData=JSON.parse(data);
        var indiaNewsData = indiaData.response.results;
        res.render("index",{newsData:indiaNewsData,title:"National"});
      });
    });
   });
app.get("/international",function(req,res){
 const url="https://content.guardianapis.com/search?q=international&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
 https.get(url,function(response){
   response.on("data",function(data){
     var internationalData=JSON.parse(data);
     var internationalNewsData = internationalData.response.results;
     res.render("index",{newsData:internationalNewsData,title:"International"});
   });
 });
});
app.get("/tech",function(req,res){
   const url="https://content.guardianapis.com/search?q=tech&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var techData=JSON.parse(data);
       var techNewsData = techData.response.results;
       res.render("index",{newsData:techNewsData,title:"Tech"});
     });
   });
  });
  app.get("/business",function(req,res){
   const url="https://content.guardianapis.com/search?q=business&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var businessData=JSON.parse(data);
       var businessNewsData = businessData.response.results;
       res.render("index",{newsData:businessNewsData,title:"Business"});
     });
   });
  });
  app.get("/science",function(req,res){
   const url="https://content.guardianapis.com/search?q=science&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var scienceData=JSON.parse(data);
       var scienceNewsData = scienceData.response.results;
       res.render("index",{newsData:scienceNewsData,title:"Science"});
     });
   });
  });
  app.get("/art",function(req,res){
   const url="https://content.guardianapis.com/search?q=tech&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var artData=JSON.parse(data);
       var artNewsData = artData.response.results;
       res.render("index",{newsData:artNewsData,title:"Art"});
     });
   });
  });app.get("/food",function(req,res){
   const url="https://content.guardianapis.com/search?q=food&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var foodData=JSON.parse(data);
       var foodNewsData = foodData.response.results;
       res.render("index",{newsData:foodNewsData,title:"Food"});
     });
   });
  });
  app.get("/travel",function(req,res){
   const url="https://content.guardianapis.com/search?q=travel&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var travelData=JSON.parse(data);
       var travelNewsData = travelData.response.results;
       res.render("index",{newsData:travelNewsData,title:"Travel"});
     });
   });
  });
  app.get("/sports",function(req,res){
   const url="https://content.guardianapis.com/search?q=sports&api-key=3912f236-5620-46b3-ab07-8d8f8665786a";
   https.get(url,function(response){
     response.on("data",function(data){
       var sportsData=JSON.parse(data);
       var sportsNewsData = sportsData.response.results;
       res.render("index",{newsData:sportsNewsData,title:"Sports"});
     });
   });
  });
  app.post("/",function(req,res){
     var searchResults= req.body.search;
     const url="https://content.guardianapis.com/search?api-key=3912f236-5620-46b3-ab07-8d8f8665786a&q="+searchResults;
     https.get(url,function(response){
      response.on("data",function(data){
        var searchData=JSON.parse(data);
        var searchNewsData = searchData.response.results;
        res.render("index",{newsData:searchNewsData,title:"Search Results"});
      });
    });
  });
app.listen(process.env.PORT || 3000,function(){
  console.log("Server Started in port 3000");
});
