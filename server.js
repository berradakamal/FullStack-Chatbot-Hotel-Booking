const app = require('express')()
const cors = require('cors');

const bodyParser = require('body-parser');

require('./lib/ConnectDB')()
/* -------------------------------------------------------------------------- */
/*                                 BODY PARSER                                */
/* -------------------------------------------------------------------------- */

app.use(bodyParser.json())

/* -------------------------------------------------------------------------- */
/*                                    CORS                                    */
/* -------------------------------------------------------------------------- */

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.use(cors(corsOptions))

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

app.use('/api', require('./routes/api'));

/* -------------------------------------------------------------------------- */
/*                                START SERVER                                */
/* -------------------------------------------------------------------------- */

app.listen('8080', () => {

    console.log('Server is running on port 8080')
})