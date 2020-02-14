const express = require('express') //memanggil package express
const app = express()
const logger = require('morgan') //memanggil package morgan (untuk logger)
const bodyParser = require('body-parser') //memanggil package body-parser
// const mysql = require('mysql') //memanggil package mysql

//memanggil modul route
const mainNavigation = require('./src/routes')

// //konfigurasi package mysql
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'dev_sample'
// })

// //mengecek koneksi ke database
// connection.connect((error) => {
//     if (error) console.log(error)
//     console.log('Database connected!')
// })

app.listen(8001, () => console.log('\n This server is running'))

//menggunakan package morgan
app.use(logger('dev')) 

//menggunakan package body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//menggunakan modul route
app.use('/', mainNavigation)

// //menampilkan data dari postman menggunakan morgan
// app.get('/', (request, response) => {
//     connection.query('SELECT * FROM book', (error, result) =>{
//         if (error) console.log(error)
//         response.json(result)
//     })
// })

// //menampilkan data satu persatu
// app.get('/:bookID', (request, response) => {
//     connection.query('SELECT * FROM book WHERE id = ?', bookID, (error,result) =>{
//         if (error) console.log(error)
//         response.json(result)
//     })
// })

// //mengirim data ke postman menggunakan body-parser
// app.post('/', (request, response) => {
//     const data = {
//     name : request.body.name,
//     writer : request.body.writer,
//     description : request.body.description,
//     publisher : request.body.publisher,
//     year : request.body.year,
//     stock : request.body.stock,
//     genre : request.body.genre,
//     created_at : new Date(),
//     updated_at : new Date()
//     }

//     connection.query('INSERT INTO book SET ?', data, (error, result) => {
//         if (error) console.log(error)
//         response.json(result)
//     })
// })

// //mengubah data dari postman menggunakan body-parser


//     connection.query('UPDATE INTO book SET ? WHERE id = ?', [data,bookID], (error, result) => {
//         if (error) console.log(error)
//         response.json(result)
//     })
// })

// app.delete('/:bookID', (request,response) => {
//     const bookID = request.params.bookID
//     console.log
// })