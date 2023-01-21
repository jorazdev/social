import useAxios from "../composables/axios";

export default function useUserApi(){

    const { post } = useAxios()

    const signup= async(param) => {
        return await post('/api/user/signup', param)
    }

    const signin = async(param) => {
        return await post('/api/user/signin', param)
    }

    return {
        signup,
        signin
    }
}