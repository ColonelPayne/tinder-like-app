const fs = require("fs");
const express = require("express");
// const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();
const jsonParser = express.json();

const url = "http://localhost:3000";

app.use(cors());
app.use(express.static(__dirname + "/photo"));

const profilesFile = 'profiles.json';


// получение profiles
app.get("/api/profiles", function(req, res){

  const content = fs.readFileSync(profilesFile, "utf8");
  const profiles = JSON.parse(content);

  if(profiles){
    res.send(profiles);
  }
  else{
    res.status(404).send();
  }
});

app.listen(3001, function(){
  console.log("Сервер ожидает подключения...");
});
