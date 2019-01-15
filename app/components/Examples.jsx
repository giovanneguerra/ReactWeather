var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ul className="list-group">
        <li className="list-group-item"><Link to='/?location=Leeds'>Leeds, UK</Link></li>
        <li  className="list-group-item"><Link to='/?location=Tokyo'>Tokyo, Japan</Link></li>
      </ul>
    </div>
  )
};

module.exports = Examples;
