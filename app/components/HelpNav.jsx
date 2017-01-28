var React = require('react');
var {Link, IndexLink} = require('react-router');

var HelpNav = React.createClass({
  render: function () {
    return (
      <nav>
        <Link to="/HelpKB">Knowledge Base</Link>
        <Link to="/HelpNews">News</Link>
        <Link to="/HelpVideo">Videos</Link>
        <Link to="/HelpContact">Contact</Link>
      </nav>
    );
  }
});

module.exports = HelpNav;
