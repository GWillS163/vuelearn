import {createStore} from 'vuex'
import router from "@/router";

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
            const menu = JSON.parse(localStorage.getItem("menu"))
            state.menu = menu

            const menuArr = []
            menu.forEach(item => {
                if (item.children) {
                    // 有子菜单 递归 生成子菜单
                    item.children = item.children.map(item => {
                        let url = `../views/${item.url}.vue`
                        item.component = () => import(url)
                        return item
                    })
                    menuArr.push(...item.children)
                }else {
                    let url = `../views/${item.url}.vue`
                    item.component = () => import(url)
                    menuArr.push(item)
                }
            })
            menuArr.forEach(item => {
               router.addRoute("home1", item)
            })

        }
    }
})
