'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define(
  'student',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
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
      type: Sequelize.VIRTUAL,
      get() {
        return (
          this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
        );
      }
    }
  },
  {
      //make sure it is outside the fields, but inside parentheses after db.define
    hooks: {
      beforeCreate: function(student) {
        student.firstName = `${student.firstName
          .charAt(0)
          .toUpperCase()}${student.firstName.slice(1)}`;
        student.lastName = `${student.lastName
          .charAt(0)
          .toUpperCase()}${student.lastName.slice(1)}`;
      }
    }
  }
);

Student.prototype.initials = function() {
  return `${this.firstName[0]} ${this.lastName[0]}`;
};

module.exports = Student;
