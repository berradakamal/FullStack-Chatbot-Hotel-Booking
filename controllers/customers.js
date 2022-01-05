const Customers = require('../models/customer');
const isEmail = require('validator/lib/isEmail');
const Booking = require('../models/bookings');

exports.AddCustomer = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    /* -------------------------------------------------------------------------- */
    /*                              VALIDATION FIELDS                             */
    /* -------------------------------------------------------------------------- */

    if (!isEmail(email)) return res.json({ success: false, msg: "Veuillez entrer une adresse email valide" })
    if (!firstName) return res.json({ success: false, msg: "Prénom manquant" })
    if (!lastName) return res.json({ success: false, msg: "Nom de famille manquant" })

    /* -------------------------------------------------------------------------- */
    /*                              CHECK IF USER EXIST                           */
    /* -------------------------------------------------------------------------- */

    const customer = await Customers.findOne({ email })

    if (customer) {
        return res.json({ success: true, user: customer })
    }
    const newCustomer = Customers({ firstName, lastName, email })
    await newCustomer.save()
        .then(response => {
            return res.json({ success: true, user: response })
        })
        .catch(err => {
            console.log(err)
            return res.json({ success: false, });
        })
}


exports.saveBooking = async (req, res) => {
    const newBooking = Booking(req.body);
    await newBooking.save().then(() => {
        return res.json({ success: true })
    }).catch(err => {
        console.log(err);
        return res.json({ success: false })
    })
}