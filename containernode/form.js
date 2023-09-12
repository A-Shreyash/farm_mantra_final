const { json } = require('body-parser');
const express = require('express');
const qs = require('qs');
const axios = require('axios');

// module to handle get request on localhost:3000 and load the registration form
exports.home = (req, res) =>
{  
    res.sendFile('public/index.html', { root: '.' })
} 
exports.mod1 = (req, res) =>
{  
    res.sendFile('public/model1.html', { root: '.' })
} 
exports.model2 = (req, res) =>
{  
    res.sendFile('public/model2.html', { root: '.' })
} 

exports.model3 = (req, res) =>
{  
    res.sendFile('public/try.html', { root: '.' })
} 





// const myform = document.getElementById("my-form");
// const resultArea = document.getElementById("result-area");
// const loadingElement = document.getElementById("loading-element");
let loading = false;
exports.formprocess = async(req,res) =>
{ 
    console.log(req.body);

   const data = {
    
    N:req.body.N,
    P:req.body.P,
    K:req.body.K,
    temperature:req.body.temperature,
    humidity:req.body.humidity,
    ph: req.body.ph,
    rainfall:req.body.rainfall,

}

console.log(data);
try {
    const obj = await axios.post("https://mod1.onrender.com/label", JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const predictionResult = obj.data[0];
    console.log(predictionResult);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./css/model1.css" >
      <link rel="stylesheet" href="./css/sidebar.css">
      <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css" />
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'>
      <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
      <title>FARM MANTRA •⁠‿⁠•</title>
  
        <!-- Add your CSS and other meta tags here -->

      </head>
      <body>
      
           <div className="res">
           
          <h2 style="text-align:center" >Prediction Result:</h2>
          <p style="text-align:center";border-style: solid; border-color: white >${predictionResult}</p>
      
        
          </div>
      </body>
      </html>
    `)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred while fetching the prediction result." });
  }

}



//mod2
exports.formprocess2 = async(req,res) =>
{ 
    console.log(req.body);

   const data1 = {
    
    Crop:req.body.Crop,
    Year:req.body.Year,
    

}

console.log(data1);
try {
 const obj1 = await axios.post("https://mspmoduvicorn-api-app-host-0-0-0-0-port.onrender.com/msp" ,JSON.stringify(data1),
 {
    headers: {
    'Content-Type': 'applications/json'
    }
  
});

// ).then(res =>{
//   return res.data1
// })
const predictionResult1=obj1[0];
console.log(predictionResult1);
res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/model1.css" >
<link rel="stylesheet" href="./css/sidebar.css">
<link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css" />
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'>
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
<title>FARM MANTRA •⁠‿⁠•</title>

  <!-- Add your CSS and other meta tags here -->

</head>
<body>

     <div className="res">
    <h2>Prediction Result:</h2>
    <p>${predictionResult}</p>

  
    </div>
</body>
</html>
`)
} catch (error) {
console.error(error);
res.status(500).json({ error: "Error occurred while fetching the prediction result." });
}

}



//mod3
exports.formprocess3 = async(req,res) =>
{ 
    console.log(req.body);

   const data2 = {
    
    State_Name:req.body.State_Name,
    District_Name:req.body.District_Name,
    Crop_Year:req.body.Crop_Year,
    Season:req.body.Season,
    Crop:req.body.Crop,
    Area:req.body.Area,
    

}


console.log(data2);
try{
 const obj2 = await axios.post("https://msp-dk0m.onrender.com" ,JSON.stringify(data2),
 {
    headers: {
    'Content-Type': 'applications/json'
    }
});

const predictionResult1=obj1[0];
console.log(predictionResult1);
res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./css/model1.css" >
<link rel="stylesheet" href="./css/sidebar.css">
<link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css" />
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'>
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
<title>FARM MANTRA •⁠‿⁠•</title>

  <!-- Add your CSS and other meta tags here -->

</head>
<body>

     <div className="res">
    <h2>Prediction Result:</h2>
    <p>${predictionResult}</p>

  
    </div>
</body>
</html>
`)
} catch (error) {
console.error(error);
res.status(500).json({ error: "Error occurred while fetching the prediction result." });
}
}
