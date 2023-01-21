import { reactive } from "vue"
import { useRouter } from "vue-router"
export default function useLogin() {

    const router = useRouter()

    const loginForm = reactive({
        email: '',
        password: ''
    })

    const signin = () => {
        console.log(loginForm)
        router.push({ name: 'dashboard' })
    }

    return {
        loginForm,
        signin
    }
}