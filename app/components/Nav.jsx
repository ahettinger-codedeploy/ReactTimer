var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li><IndexLink to='/' activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to='/Countdown' activeClassName="active-link">Countdown</Link></li>
            <li><Link to='/Countup' activeClassName="active-link">Countup</Link></li>
            <li><Link to='/Help' activeClassName="active-link">Help</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://adamlab.tech" target="_blank">Adam Hettinger</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
