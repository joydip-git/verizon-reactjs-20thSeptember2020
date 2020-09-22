"use strict";

var _App = _interopRequireDefault(require("./App"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var design = (0, _App["default"])();
var root = document.getElementById('appDesign');

_reactDom["default"].render(design, root);