var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');
var Countup = require('Countup');
var Help = require('Help');
var HelpNav = require('HelpNav');
var HelpKB = require('HelpKB');
var HelpNews = require('HelpNews');
var HelpVideo = require('HelpVideo');
var HelpContact = require('HelpContact');

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/Countdown" component={Countdown} />
      <Route path="/Countup" component={Countup} />
      <Route path="/Help" component={Help}>
        <Route path="/HelpKB" component={HelpKB} />
        <Route path="/HelpNews" component={HelpNews} />
        <Route path="/HelpVideo" component={HelpVideo} />
        <Route path="/HelpContact" component={HelpContact} />
        <IndexRoute component={HelpKB} />
      </Route>
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById("app"));
