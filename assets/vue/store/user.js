import useUserApi from "../api/user"

const { signup, signin } = useUserApi()

export default {
    namespaced: true,
    state: {
        users: [],
        user: {},
        token: {}
    },
    mutations:{
        setUsers(state, users){
            state.users = users
        },
        setUser(state, user){
            Object.assign(state.user, user)
        },
        setToken(state, token){
            state.token = token
        }
    },
    actions:{
        async signupAction(context, param){
            const res = await signup(param)
            context.commit('setUser', res.data.user)
        },
        async signinAction(context, param){
            const res = await signin(param)
            context.commit('setToken', res.data.token)
        }
    }
}