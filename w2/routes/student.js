const router = require('express').Router();
const Student = require('../db/models/students');

//retrieves students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

//creates new student
router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});
//finds student
router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.sendStatus(404);
    } else {
      res.json(student);
    }
  } catch (err) {
    next(err);
  }
});
//updates student
router.put('/:id', (req, res, next) => {
  Student.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(test => res.status(201).json(test[1][0]))
    .catch(next);
});
router.delete('/:id', async (req,res,next)=>{
    const student = await Student.findById(req.params.id)
    .then((student)=>{
       return student.destroy()
    })
    .then(() =>{
        res.sendStatus(204)
    })
   
})

module.exports = router;
