var axiosAPI = require('./axiosAPI');

var helpers = { 
	getSomething: function(){
		return axiosAPI.get('/something')
				.catch(function (err) {console.warn('Error in getSomething: ', err)})
	}
}

module.exports = helpers;