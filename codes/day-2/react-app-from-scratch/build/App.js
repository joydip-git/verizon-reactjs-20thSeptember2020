"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  var message = 'hello world'; // const divStyle = {
  //     backgroundColor: 'blue',
  //     fontSize: 'medium'
  // };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "messageDiv",
    className: "divStyle"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: "messageSpan",
    className: "spanStyle"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      textAlign: "center"
    }
  }, message)));
};

var _default = App; //module.exports = App;
//import X from './App'
// const design = X();
//module.exports = { App };
//import obj from './App'
// const design = obj.App();

module.exports["default"] = _default;