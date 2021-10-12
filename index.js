import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { } from 'dotenv/config'

import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
const app = express();

app.use(express.json());
app.use(cors())

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true
}).then(() =>
    console.log("DataBase connected"))
    .catch(err => console.log(err));


//database schema of user
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true })

//database schema of needhelp

const needhelpSchema = new mongoose.Schema({
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    longitude: mongoose.Types.Decimal128,
    latitude: mongoose.Types.Decimal128
})

//database schema of treat

const treatSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    reason: String,
    address: String,

})

//model
const User = new mongoose.model("User", userSchema)

//model - needhelp
const Needhelp = new mongoose.model("Needhelp", needhelpSchema)

//model - treat
const Treat = new mongoose.model("Treat", treatSchema)


// Routes
app.get('/', (req, res) => {
    Treat.find()
        .then(treats => res.json(treats))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/getneedhelp', (req, res) => {
    console.log(res);
    Needhelp.find()
        .then(Needhelp => res.json(Needhelp))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete entry
app.delete('/delete/:id', (req, res) => {
    Needhelp.findByIdAndDelete(req.params.id)
        .then(needhelp => res.json(needhelp))
        .catch(err => res.status(400).json('Error:' + err));
});


const register = (req, res, next) => {
    bcryptjs.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({
                    message: "User Added Succesfully!"
                })
            })
            .catch(error => {
                res.json({
                    message: "An error occured!"
                })
            })
    })
}

app.post('/Register', register)

const login = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcryptjs.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'Hcgx)*(fn', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Succesful!',
                            token: token
                        })
                    } else {
                        res.json({
                            message: 'Incorrect Password'
                        })
                    }

                })
            } else {
                res.json({
                    message: 'No user found!'
                })
            }
        })
}

app.post('/Login', login)

const authenticate = (reeq, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'Hcgx)*(fn')

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message: 'Authentication failed!'
        })
    }
}

app.post("/Needhelp", (req, res) => {
    console.log(req.body);
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = Number(req.body.zip);
    const longitude = mongoose.Types.Decimal128(req.body.longitude);
    const latitude = mongoose.Types.Decimal128(req.body.latitude);

    const newNeedhelp = new Needhelp({
        address1,
        address2,
        city,
        state,
        zip,
        longitude,
        latitude
    });

    newNeedhelp.save()
        .then(() => res.json('Address added!'))
        .catch(err => res.status(400).json('Error: ' + err));

})

app.post("/Treat", (req, res) => {
    console.log(req.body);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const reason = req.body.reason;
    const address = req.body.address;

    const newTreat = new Treat({
        firstname,
        lastname,
        email,
        reason,
        address

    });

    newTreat.save()
        .then(() => res.json('Donor added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

app.listen(9002, () => {
    console.log("Be started at port 9002")
})

