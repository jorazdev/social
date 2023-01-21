import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default function useSignin() {

    const { dispatch, state } = useStore()
    const router = useRouter()

    const signinForm = reactive({
        email: '',
        password: ''
    })

    const token = computed(() => state.user.token)

    const signin = async () => {

        await dispatch('user/signinAction', signinForm)
        if(token.value){
            localStorage.setItem('token', token.value)
            await router.push({ name: 'dashboard'})
        }
    }

    return {
        signinForm,
        signin
    }
}