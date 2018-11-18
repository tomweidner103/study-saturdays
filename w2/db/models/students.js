'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
        hooks:{
            type: Sequelize.STRING,
            beforeBulkCreate: function(){
                this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstname.slice(1)
                return this.firstName
            }
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        fullName: {
            type: Sequelize.STRING,
            get () {
                return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
            }
        },

});

module.exports = Student;
