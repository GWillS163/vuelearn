import {createStore} from 'vuex'

export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        tagsList:[
            {
                path: '/',
                label: '首页',
                name: 'home',
                icon: 's-home'
            }
        ],
        menu: [],
    },
    mutations: {
        updateIsCollapse(state, payload) {
            console.log(payload);
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, payload) {
            // judge
            if (payload.name === 'home') {
                state.currentMenu = null
            } else {
                state.currentMenu = payload
                let result = state.tagsList.findIndex(item => item.name === payload.name)
                result === -1 ? state.tagsList.push(payload) : ''
            }
        },
        closeTag(state, payload) {
            let result = state.tagsList.findIndex(item => item.name === payload.name)
            state.tagsList.splice(result, 1)
        },
        setMenu(state, payload) {
            state.menu = payload
            localStorage.setItem('menu', JSON.stringify(payload))
        },
        // 每次刷新页面，从本地获取menu
        addMenu(state, router) {
            if (!localStorage.getItem("menu")) {
                return
            }
            let menu = JSON.parse(localStorage.getItem("menu"))
            state.menu = menu

            const menuArray = []

            menu.forEach(item => {

                let url = `../views/${item.url}.vue`
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}.vue`)
                        // use require to import
                        // item.component = (resolve) => require([url], resolve)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}.vue`)
                        // use require to import
                        // item.component = (resolve) => require([url], resolve)
                    menuArray.push(item)
                }
            })

            menuArray.forEach(item => {
                router.addRoute('home1', item)
            })
        },
        cleanMenu() {

            localStorage.removeItem("menu");

        }

    }
})
