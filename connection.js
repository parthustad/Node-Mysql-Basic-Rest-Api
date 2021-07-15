const express = require('express')
const mysql = require('mysql')

const config =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'basicnodemysqlapi'
})


config.connect(function(err) {
    if (err) throw err;
})

module.exports = config