const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pesan_journeyran', 'pesan_journeyran', 'ba436de7d82ae622ddd94a3461e03dc42cebbed5', {
    host: 's3lws.h.filess.io',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
        max: 5, // Maksimal koneksi aktif
        min: 0, // Minimal koneksi aktif
        acquire: 30000, // Waktu maksimal (dalam ms) untuk memperoleh koneksi sebelum timeout
        idle: 10000, // Waktu koneksi idle sebelum dilepaskan (dalam ms)
    },
});

module.exports = sequelize;
