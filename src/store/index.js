
import { createStore } from 'vuex'
export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
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
            }
        }
    }
})
