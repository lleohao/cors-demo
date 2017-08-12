// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function () {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function () {
        alert('Woops, there was an error making the request.');
    };

    xhr.send();
}

var getWithoutCorsBtn = document.getElementById("get-without-cors");
var simplePostWithoutCorsBtn = document.getElementById('simple-post-without-cors');
var postWithoutCorsBtn = document.getElementById('post-without-cors');
var postWithCorsBtn = document.getElementById('post-with-cors');

getWithoutCorsBtn.onclick = function () {
    var url = 'http://localhost:5051/get';
    var xhr = createCORSRequest('GET', url);
    xhr.send();
}

simplePostWithoutCorsBtn.onclick = function () {
    var url = 'http://localhost:5051/post';
    var xhr = createCORSRequest('POST', url);

    xhr.send('hhh');
}

postWithoutCorsBtn.onclick = function () {
    var url = 'http://localhost:5051/post';
    var xhr = createCORSRequest('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify({
        data: 'hhh'
    }));
}

postWithCorsBtn.onclick = function () {
    var url = 'http://localhost:5051/cors/post';
    var xhr = createCORSRequest('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify({
        data: 'hhh'
    }));
}
