var express = require('express');
var path = require('path');
var multer = require('multer');
var serveIndex = require('serve-index');

const PORT = 8000;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var fileUploadRouter = require('./routes/fileUpload')

// require('./db')

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// SET STORAGE
var storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.pdf')
    }
    })
    var upload = multer({ storage: storage })
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/uploadfile', upload.single('myFile'), (req, res) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file.path)
  });
  app.get('/')
  app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(files)
  })
  app.use(express.static(path.join(__dirname, 'uploads')));

// app.use('/fileUpload', fileUploadRouter);
app.listen(PORT, () => console.log(`The magic happens in Port: ${PORT}`));
module.exports = app;
