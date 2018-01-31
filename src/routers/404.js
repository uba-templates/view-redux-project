export default () => ({
    path: '404',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const PageNotFound = require('../layout/PageNotFound').default
        cb(null, PageNotFound)
      })
    }
  })
  