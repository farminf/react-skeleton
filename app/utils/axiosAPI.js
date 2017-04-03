var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://IPAddressOfAPiServer/api',
  /* other custom settings */
});

module.exports = axiosInstance;