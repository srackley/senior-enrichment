const router = require('express').Router();
const { Students, Campuses } = require('../db/models');

module.exports = router;

// GET api/students
router.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/students
router.post('/', (req, res, next) => {
  console.log(req.body);
  Campuses.findOrCreate({
    where: {
      id: req.body.campusId,
    },
  })
    .spread((campus) => {
      const student = Students.build(req.body);
      student.setCampus(campus, { save: false });
      return student.save()
        .then((student) => {
          student = student.toJSON();
          student.campus = campus;
          return student;
        });
    })
    .then((student) => {
      res.json(student);
    })
    .catch(next);
});

// GET /api/campuses/:campusId
router.get('/:studentId', (req, res, next) => {
  Students.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students
router.put('/:studentId', (req, res, next) => {
  const { studentId } = req.params;

  Students.findById(studentId)
    .then(student => student.update(req.body))
    .then(res.end())
    .catch(next);
});

// DELETE /api/students
router.delete('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Students.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
