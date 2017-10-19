var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
	render() {
		return (
			<div >
				<div className='home-container'>
					<h1>Github Battle: Battle your friends... or whatever</h1>
					<Link className="button" to="/battle">
						Battle
					</Link>
				</div>
			</div>
		);
	};
};

module.exports = Home;
// export default Home;