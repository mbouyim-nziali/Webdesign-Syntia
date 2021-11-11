const HttpUtils = function() {
    const xhr = new XMLHttpRequest();

    const run = function(method, url, callback) {
        xhr.open(mapHttpMethod(method), url, true);
        xhr.onload = function() {
            const status = xhr.status;
            if (status === 200) {
                callback(xhr.response);
            } else {
                callback(xhr.response, status);
            }
        };
        xhr.send();
    };

    const mapHttpMethod = function(method) {
        const allowed = ['GET', 'POST'];
        if (allowed.includes(method.toUpperCase())) {
            return method.toUpperCase();
        }
        return 'GET';
    };

    this.getJSON = function(url, callback) {
        run('GET', url, function(response) {
            try {
                const json = JSON.parse(response);
                callback(json);
            } catch (error) {
                callback(null);
                console.debug('JSON Parser failed.', response);
                console.error(error);
            }
        });
    };
};