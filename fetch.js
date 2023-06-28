// fetch api
fetch('https://api.github.com/users/vinsonf/repos')
.then( data => {
    console.log(data);
});

// http request
// const request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/users/vinsonf/repos');
// request.onreadystatechange = function() {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(JSON.parse(request.responseText));
//     }
// }
// request.send();

function fetch2(url) {
    const promise = new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/vinsonf/repos');
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            resolve(JSON.parse(request.responseText));
        }
    }
    request.send();
});
return promise;
}