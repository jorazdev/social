export default {
    namespaced: true,
    state: {
        show: false,
        police: 'moyenne',
        theme: 'claire',
        fontSize: '17px',
        root: document.querySelector(":root")
    },
    mutations:{
        setShow(state, show){
            state.show = show
        },
        setPolice(state, police){
            state.police = police
        },
        setTheme(state, theme){
            state.theme = theme
        },
        setFontSize(state, fontSize){
            state.fontSize = fontSize
        }
    },
    actions:{
      
    }
}