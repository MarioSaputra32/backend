const { Module } = require('module');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pesan_journeyran','pesan_journeyran','ba436de7d82ae622ddd94a3461e03dc42cebbed5',{
    host: 's3lws.h.filess.io',
    dialect: 'mysql',
});

module.exports = sequelize;