const querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');

function start(response) {
    console.log('Request handler "start" was called!');

    const body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(body);
        response.end();
}

function upload(response, request) {
    console.log('Request handler "upload" was called!');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('You have sent the text: '+ 
    querystring.parse(postData).text);
    response.end();
}

function show(response) {
    console.log('Request handler "show" was called!');
    response.writeHead(200, {'Content-Type': 'img/png'});
    fs.createReadStream('/tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;