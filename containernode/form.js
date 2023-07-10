const { json } = require('body-parser');
const express = require('express');
const qs = require('qs');
const axios = require('axios');

// module to handle get request on localhost:3000 and load the registration form
exports.home = (req, res) =>
{  
    res.sendFile('public/sidebar/sidebar.html', { root: '.' })
} 
exports.model1 = (req, res) =>
{  
    res.sendFile('public/model 1/model1.html', { root: '.' })
} 
exports.model2 = (req, res) =>
{  
    res.sendFile('public/model 2/model2.html', { root: '.' })
} 

exports.model3 = (req, res) =>
{  
    res.sendFile('public/try/try.html', { root: '.' })
} 




// module to handle post request on localhost:3000 when user submits the registration form
// form data is captured and sent back as a response
exports.formprocess = async(req, res) =>
{  
   console.log(req.body);



console.log(data);
 const obj = await axios.post("https://mlapi-yigp.onrender.com/predict" ,JSON.stringify(data),
 {
    headers: {
    'Content-Type': 'application/json'
    }
}
).then(res => {
    return res.data
})

console.log(obj)
if(obj === "predicted"){
    res.sendFile('public/predicted.html', { root: '.' });

}
else{
    res.sendFile('public/notpredicted.html', { root: '.' })
    ;

}

}