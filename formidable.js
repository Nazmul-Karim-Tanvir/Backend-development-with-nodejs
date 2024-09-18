var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // Access the first file in the array
      var file = files.filetoupload[0]; 

      var oldpath = file.filepath; // Path of the temporary file
      var newpath = 'D:/NK TANVIR/Coding/A Full Stack Web Developer/Backend-development-with-nodejs/' + file.originalFilename; // Destination path

      // Copy the file instead of renaming
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;

        // After copying, delete the old file
        fs.unlink(oldpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
