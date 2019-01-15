var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
  onSearch: function (e){
    e.preventDefault();
    alert('Not yet wired up');
  },
  render: function(){
    return(
      <nav className="navbar navbar-expand-lg">
        <li className="navbar-brand">React Weather App</li>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><IndexLink to="/" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about"  className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples"  className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search Weather" aria-label="Search" />
            <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Get Weather"/>
          </form>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
