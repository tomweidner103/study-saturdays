'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./students');

const Test = db.define('test', {
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    grade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Test.passing = function(){
    return Test.findAll({
        where: {
            grade: {
                $gte: 70
            }
        }
    })
}
Test.findBySubject = function(id){
    return Test.findAll({
        where: {
            subject: id
        }
    })
}
Test.belongsTo(Student)
module.exports = Test;
