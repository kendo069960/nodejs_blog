const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // C1: callback function
        // Course.find({}, (err, courses, next) => {
        //     if (!err) {
        //         res.json(courses)
        //     } else {
        //         // tra ve middle
        //         next(err)
        //         res.status(400).json({err: 'ERROR!!!'});
        //     }
        // })

        // C2: promise function (recommended)

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
