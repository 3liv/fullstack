const client = require('utilise/client')
    
if (client) !window.ripple && create()

module.exports = create

function create(opts){
  const ripple = require('rijs.core')(opts)
  require('rijs.singleton')(ripple, opts)
  require('rijs.data')(ripple, opts)
  require('rijs.css')(ripple, opts)
  require('rijs.fn')(ripple, opts)
  require('@3liv/rijs.sync')(ripple, opts)
  require('@3liv/rijs.components')(ripple, opts)

  if (!client) {
    const { dirname, resolve } = require('path')
    opts.dir = opts.dir || dirname(module.parent.filename)
    opts.serve = resolve(__dirname, 'client')
    require('rijs.sessions')(ripple, opts)
    require('rijs.resdir')(ripple, opts)
    require('rijs.serve')(ripple, opts)
    require('rijs.pages')(ripple, opts)
  }
  
  return ripple
}
