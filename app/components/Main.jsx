var React = require("react");
var Nav = require("Nav");

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="container-fluid container__weather">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
