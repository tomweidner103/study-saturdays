const router = require('express').Router();
const Test = require('../db/models/tests');
const Student = require('../db/models/students');

//finding all tests
router.get('/', async (req, res, next) => {
  try {
    const test = await Test.findAll();
    res.json(test);
  } catch (error) {
    next(error);
  }
});

//dont forget the set student method
//other than that, i was on the right track finding student by id, and then creating a new task. set student must imprint this newly created task onto student
router.post('/student/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => {
      return Test.create(req.body).then(test => {
        return test.setStudent(student);
      });
    })
    .then(test => {
      res.status(201).json(test);
    })
    .catch(next);
});

//finding tests by subject
router.get('/subject/:subject', async (req, res, next) => {
  try {
    const test = await Test.findAll({
      where: {
        subject: req.params.subject
      }
    });
    res.json(test);
  } catch (error) {
    next(error);
  }
});
//finding passing tests
router.get('/passing', async (req, res, next) => {
  try {
    const pass = await Test.passing();
    res.json(pass);
  } catch (error) {
    next(error);
  }
});
//finding tests by student
router.get('/:id', async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    res.json(test);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  await Test.findById(req.params.id)
    .then(test => {
      return test.destroy();
    })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next(error));
});

module.exports = router;
