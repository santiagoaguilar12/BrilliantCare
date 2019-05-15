var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    User        =require("./models/user")
    


// mongoose.connect("mongodb://localhost/help_io");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
// const Firestore = require('firestore');

// var serviceAccount = require("./key.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://my-awesome-project-af874.firebaseio.com"
// });


// var db = admin.firestore();
// var sleep_yes_data = [];
// var docRef = db.collection('users').doc('Patients').collection('Anna Lovelace').doc('Graph Data').collection('Yes').doc('Sleep');
// var getDoc = docRef.get()
//     .then(doc => {
//         if (!doc.exists) {
//             console.log('No such document!');
//         } else {
//             var data = doc.data();

//             for (let i = 0; i < 10; i++) {

//                 sleep_yes_data.push(Object.entries(data)[0][1][i])


//             }
//             console.log(sleep_yes_data);


//         };

//     })
//     .catch(err => {
//         console.log('Error getting document', err);
//     });

app.use(require("express-session")(
    {
        secret:"help.io",
        resave:false,
        saveUninitialized:false
    }
));




app.get("/", function(req, res){
    res.render("login");
});

app.get("/dashboard", function(req, res){
    res.render("dashboard");
});

app.get("/user", function(req, res){
    res.send("User Info");
});

app.get("/show", function(req, res){
    res.render("show");

    // User.findById(req.params.id,function(err,foundUser){

    //     });  
});

app.get("/bio", function(req, res){
    res.render("bio");
    // User.findById(req.params.id,function(err,foundUser){
            
    //     });  
});

app.get("/med", function(req, res){
    res.render("med");
    // User.findById(req.params.id,function(err,foundUser){
           
    //     });  
});

app.get("/history", function(req, res){
    res.render("history");
    // User.findById(req.params.id,function(err,foundUser){
            
    //     });  
});

app.get("/graphs", function (req, res) {
        res.render("graphs")
});

app.get("/:id/bio", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("bio",{user:foundUser});
        });  
});

app.get("/:id/med", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("med",{user:foundUser});
        });  
});

app.get("/:id/history", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("history",{user:foundUser});
        });  
});

app.get("/:id/graphs", function(req, res){
    User.findById(req.params.id,function(err,foundUser){
            res.render("graphs",{user:foundUser});
        });  
});


// app.post("/login", passport.authenticate("local", 
//     {
//         successRedirect: "/campgrounds",
//         failureRedirect: "/login"
//     }), function(req, res){
// });


app.listen(3000, function(){
   console.log("The Help.io Server Has Started!");
});