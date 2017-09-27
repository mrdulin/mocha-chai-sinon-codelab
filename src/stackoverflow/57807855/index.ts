import axios, { AxiosRequestConfig } from 'axios';

exports.myFunction = function myFunction() {
  const data = {
    example: 'my data'
  };

  const headers = {
    'content-type': 'application/json'
  };

  const request: AxiosRequestConfig = {
    method: 'POST',
    baseURL: 'http://myawesome-site.com',
    url: '/api/path',
    headers,
    data
  };

  return exports
    .axios(request)
    .then(res => console.log('do something'))
    .catch(err => console.log('do something else'));
};

exports.axios = axios;
