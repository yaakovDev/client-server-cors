

//console.log('here we are');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  credentials: 'include' //send cookies
};

fetch("http://localhost:3000/data", requestOptions)
  .then(response => response.text())
  .then(result => console.log('data from server:'+result))
  .catch(error => console.log('error', error));
