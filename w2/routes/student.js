const router = require('express').Router();
const Student = require('../db/models/students');

//retrieves students
router.get('/', async (req, res, next) => {
  const students = await Student.findAll();
  res.json(students);
});

//creates new student
router.post('/', async (req,res,next) => {
    const student = await Student.create(req.body)
    res.json(student)
})
//finds student
router.get('/:id', async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    if(!student){
        return res.sendStatus(404)
    }else{
        res.json(student)
    }
});
//updates student
router.put('/:id', async (req,res,next) => {
    const student = await Student.findById(req.params.id)
    student.firstName = req.body.firstName
    student.save()
    .then(()=>{
        res.sendStatus(201)
    })
})


module.exports = router;
