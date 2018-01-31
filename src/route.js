import IndexLayout from './layout.js'
import { HomeRoute, AboutRoute, PageNotFound, RedirectRoute } from './routers/index'


// const createRoutes = (store) => ({
//     path: '/',
//     component: IndexLayout,
//     indexRoute: HomeRoute,
//     childRoutes: [
//         AboutRoute(store),
//         PageNotFound(),
//         RedirectRoute
//     ]
// })


const createRoutes = () => ({
    path: '/',
    component: IndexLayout,
    indexRoute: HomeRoute,
    childRoutes: [
        AboutRoute(),
        PageNotFound(),
        RedirectRoute
    ]
})

// const createRoutes = () => ({
//     childRoutes: [
//         {
//             path: '/',
//             component: IndexLayout,
//             indexRoute: HomeRoute,
//             childRoutes: [
//                 AboutRoute(),
//                 PageNotFound(),
//                 RedirectRoute
//             ]
//         }
//     ]
// })

export default createRoutes