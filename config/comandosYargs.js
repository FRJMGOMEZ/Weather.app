const argv = require('yargs')

.options({direccion:{
          demand:true,
          alias:'d',
          descripcion:'Ciudad'}})
.help()
.argv





























module.exports={argv};
