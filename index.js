const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: function(req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10000000 },
//   fileFilter: function(req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).single('myFile');

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

app.get('/', (req, res) => {
  res.status(200).send({message: 'Work'});
})

// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).send({ message: err });
//     } else {
//       if (req.file == undefined) {
//         res.status(400).send({ message: 'No file selected' });
//       } else {
//         res.send({
//           message: 'File uploaded successfully',
//           file: `uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
