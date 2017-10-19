const router = require('express').Router();

const { Campuses, Students } = require('../db/models');

module.exports = router;

// GET api/campuses
router.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId
router.get('/:campusId', (req, res, next) => {
  Campuses.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// GET /api/campuses/:campusId/students
router.get('/:campusId/students', (req, res, next) => {
  const { campusId } = req.params;

  Students.findAll({ where: { campusId } })
    .then(students => res.json(students))
    .catch(next);
});

// POST /api/campuses
router.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses
router.put('/:campusId', (req, res, next) => {
  const { campusId } = req.params;

  Campuses.findById(campusId)
    .then(campus => campus.update(req.body))
    .then(res.end())
    .catch(next);
});

// DELETE /api/campuses
router.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campuses.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
