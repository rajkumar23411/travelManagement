const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const port = 8888;
// const dbLink = 'mongodb+srv://rajkumarkalita1717:rajkumarkalita@cluster0.bppj0.mongodb.net/Travel&Tourism?retryWrites=true&w=majority';
const dbLink = 'mongodb://0.0.0.0:27017/Travel&Tourism';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: 'My Secret Key',
        saveUninitialized: true,
        resave: false
    })
);

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})

mongoose
    .connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`listing to the server at ${port}`);
            console.log('MongoDB Connected');
        });
    })
    .catch((err) => {
        console.log('Could not connect', err);
    });

const user_Register = require('../public/js/registerSchema');
const query = require('../public/js/querySchema');
const bookingRequest = require('../public/js/packagerequestSchema')

const staticPath = path.join(__dirname, '../public');

app.set('view engine', 'ejs');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});
app.get('/package', (req, res) => {
    res.render('each_package')
})
app.get('/login', (req, res) => {
    res.render('signin_signup');
});

// ==== register form ====
app.post('/register', async(req, res) => {

    const registeredData = new user_Register({
        Username: req.body.regusername,
        Gmail: req.body.regemail,
        contactNo: req.body.regcontact,
        password: req.body.regpassword,
    });

    const mailCheck = req.body.regemail;
    const temp = await user_Register.find({ mailCheck });

    if (temp === mailCheck) {
        req.session.message = {
            type: 'danger',
            message: 'Already Registered'
        }
        console.log('true');
    } else {
        req.session.message = {
            type: 'success',
            message: ''
        }
        console.log('false');

        registeredData
            .save()
            .then(() => {
                res.status(201).render('index');
            })
            .catch((err) => {
                res.status(400).send(err);
            });
    }

});

app.post('/login', async(req, res) => {
    // other screens on further logins
});

app.post('/login/validate', async(req, res) => {
    console.log(req.body);
    const { email: Gmail, pass: password } = req.body;
    const temp = await user_Register.findOne({ Gmail, password });
    if (temp == null) {
        res.send({
            userExists: false,
            redirect: '/login',
        });
    } else {
        res.send({
            userExists: true,
            redirect: '/',
        });
    }
});

app.get('*', (req, res) => {
    res.status(400).render('404');
});

// ========query form==========
app.post('/askQuery', (req, res) => {
    const queryData = new query({
        Name: req.body.qName,
        Email: req.body.qEmail,
        Contact: req.body.qNum,
        Message: req.body.qMsg,
    });
    queryData
        .save()
        .then(() => {
            res.status(201).render('index');
        })
        .catch((err) => {
            res.status(404).send(err);
        });
});

// =============booking form=======
app.post('/booking', (req, res) => {
    const bookingData = new bookingRequest({
        Name: req.body.clientname,
        Email: req.body.clientEmail,
        ArrivalDate: req.body.arrivalDate,
        DepertureDate: req.body.depertureDate,
        Sayingdays: req.body.dayNo,
        TotalGuests: req.body.guestNo,
        ContactNo: req.body.clinetContno
    });

    bookingData.save().then(() => {
        res.status(201).render('index');
    }).catch((err) => {
        res.status(404).send(err);
    });
    console.log(res.body);
})