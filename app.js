var log = console.log;
const http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var uc = require('upper-case');

const PASSWORD = 'M3xicali56';

async function send365email(from, to, subject, html, text) {
    try {
        const transporterOptions = {
            host: 'smtp.office365.com',
            port: '587',
            auth: { user: from, pass: PASSWORD },
            secureConnection: true,
            tls: { ciphers: 'SSLv3' }
        };

        const mailTransport = nodemailer.createTransport(transporterOptions);

        await mailTransport.sendMail({
            from,
            to,
            replyTo: from,
            subject,
            html,
            text
        });
    } catch (err) {
        console.error(`send365Email: An error occurred:`, err);
    }
}

send365email("support56@abogadoericprice.com", "avelazquez@abogadoericprice.com", "Test mail", "<i>Hello World</i>", "Hello world")

// var mailOptions = {
//     from: 'no-reply@abogadoericprice.com',
//     to: "avelazquez@abogadoericprice.com",
//     subjet: 'Sending Email using Node.js',
//     text: 'That was easy'
// }

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email send: ' + info.response);
//     }
// });

/* #region file upload with forn */
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
/* #endregion */

/* #region using a module from npm */
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc.upperCase("Hello World!"));
//     res.end();
// }).listen(8080);
/* #endregion */

/* #region 404 not found (function) */
// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 page Not Found");
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);
/* #endregion */

// log(q.host);
// log(q.pathname)
// log(q.search);

// var qdata = q.query;
// log(qdata.month);

/* #region Files fs */
// http.createServer(function (req, res) {
//     // // res.write('hello World!');
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // var q = url.parse(req.url, true).query;
//     // var txt = q.year + " " + q.month;
//     // // res.write(req.url);
//     // // res.write(`The date and time are currently: ${dt.myDateTime()}`);
//     // res.end(txt);

//     fs.readFile('file.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });

//     fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Updated!');
//     });

//     fs.open('mynewfile2.txt', 'w', function (err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//     });

//     fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//     });

//     fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//         if (err) throw err;
//         console.log('Updated!');
//     });

//     fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//         if (err) throw err;
//         console.log('Replaced!');
//     });

//     // fs.unlink('mynewfile2.txt', function (err) {
//     //     if (err) throw err;
//     //     console.log('File deleted');
//     // });

//     fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//         if (err) throw err;
//         console.log('File Renamed!');
//     });

// }).listen(8080);
/* #endregion */


/* #region Another way to create the server */

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.writeHead(200, { 'content-Type': 'text/html' })

//     res.write(`The date and time are currently: ${dt.myDateTime()}`);

//     res.end();
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

/* #endregion */