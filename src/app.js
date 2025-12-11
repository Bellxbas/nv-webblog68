const express = require('express');
const bodyParser = require('body-parser'); // สำหรับอ่านข้อมูล POST/PUT
const app = express();

// ใช้งาน body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ตัวอย่าง GET
app.get('/status', (req, res) => {
    res.send('Hello nodejs server');
});

app.get('/hello/:person', (req, res) => {
    console.log('hello - ' + req.params.person);
    res.send('say hello with ' + req.params.person);
});

// GET user by ID
app.get('/user/:userId', (req, res) => {
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId);
});

// GET all users
app.get('/users', (req, res) => {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
});

// POST - สร้างผู้ใช้งาน
app.post('/user', (req, res) => {
    const userData = req.body;
    res.send('สร้างผู้ใช้งาน: ' + JSON.stringify(userData));
});

// PUT - แก้ไขผู้ใช้งาน
app.put('/user/:userId', (req, res) => {
    const userData = req.body;
    res.send('แก้ไขผู้ใช้งาน ID ' + req.params.userId + ': ' + JSON.stringify(userData));
});

// DELETE - ลบผู้ใช้งาน
app.delete('/user/:userId', (req, res) => {
    res.send('ลบผู้ใช้งาน ID ' + req.params.userId);
});

let port = 8082;
app.listen(port, () => {
    console.log('Server running on port ' + port);
});
