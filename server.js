const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const nama = req.body.nama;
    const alamat = req.body.alamat;

    console.log("=== DATA MASUK ===");
    console.log("Nama:", nama);
    console.log("Alamat:", alamat);

    res.send("Data berhasil dikirim!");
});

app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server jalan");
});