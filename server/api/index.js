const router = require('express').Router();

module.exports = router;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});
