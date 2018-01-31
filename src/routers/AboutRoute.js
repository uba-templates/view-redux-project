export default (store) => ({
  path: 'about',
  getComponent (nextState, cb) {
    // 代码分割三种写法
    // 方法1:require.ensure
    require.ensure([], (require) => {
      const About = require('../layout/About').default
      cb(null, About)
    }, 'about')

    // 方法2:import promise
    // import("../layout/About")
    //   .then(val => {
    //     const About = val.default
    //     cb(null, About)
    //   })
    
    // 方法3:async
    // var addComp = async () => {
    //   var result = await Promise.resolve(import("../layout/About"));
    //   // console.log(result.default);
    //   var About = result.default;
    //   cb(null, About)
    // }
    // addComp();

  },
  // getChildRoutes( nextState, cb) {
  //   require.ensure([], (require) => {
  //     const WelcomeRoute = {
  //       path: 'welcome',
  //       component: require('../components/Welcome').default
  //     }
  //     cb(null, WelcomeRoute)
  //   })
  // }
  childRoutes: [
    {
      path: 'welcome',
      // component: require('../components/Welcome').default
      getComponent (nextState, cb) {
        require.ensure([], (require)=> {
          const Welcome = require('../components/Welcome').default
          cb(null, Welcome)
        })
      },
    }
  ]
})
