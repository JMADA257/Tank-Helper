const db = require('../config/connection');
const { Tanks, Helicopters } = require('../models');
const tankSeeds = require('./TankInfo.json')
const helictoperSeeds = require('./HelicopterInfo.json')
const cleanDB = require('./cleanDB');


