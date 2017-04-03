var React = require('react');
var ServiceHelper = require('../utils/ServiceHelper')


var HomeContainer = React.createClass({
	getInitialState: function () {
		return {
		  isLoading: true, 
		}
	},
	componentDidMount: function() {
	    ServiceHelper.getsomething()
	    	.then(function(result){
	    		this.setState({
	    			isLoading : false,
	    		})
	    	}.bind(this))
	},
	render: function() {
		return (
			<h1> Skeleton Project </h1>
		);
	}
});

module.exports = HomeContainer;
