const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuerry = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuerry = courseQuerry.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([courseQuerry, Course.countDocumentsDeleted()])
            // lay kq ra bang destructuring
            .then(([courses, deletedCoursesCount]) =>
                res.render('me/stored-courses', {
                    deletedCoursesCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
