const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const validateProfileInput = require('../../validation/profile')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


const Profile = require('../../models/Profile')

router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }))

module.exports = router