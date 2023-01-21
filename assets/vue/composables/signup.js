import { reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default function useSignup () {

    const { dispatch, state } = useStore()
    const router  = useRouter()

    const signupForm = reactive({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const confirm = ref('')

    const signup = async () => {
        
        if(signupForm.password != confirm.value){
            ElMessage({
                message: 'Different password',
                type: 'warning',
            })
            return
        }
        await dispatch('user/signupAction', signupForm)
        ElMessage({
            message: 'Sign up success',
            type: 'success',
        })
        router.push({ name: 'login'})
    }

    return {
        signupForm,
        confirm,
        signup
    }
}