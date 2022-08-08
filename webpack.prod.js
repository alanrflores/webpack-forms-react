//AVISO: puede escribir un archivo de paquete web mucho más simple para la producción antes 
//de separarlo porque el archivo de producción no necesita "devtool" y "devServer".

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "production",
});