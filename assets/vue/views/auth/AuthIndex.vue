<template>
    <div class="login">
        <card-form class="card">
            <div class="signin">
                <h1>Sign In</h1>
            </div>
            <input-form label="Email" 
                v-model="signinForm.email"/>
            <input-form type="password"
                @keyup.enter="signin" 
                label="Password" 
                v-model="signinForm.password"/>
            <div class="action">
                <button class="btn btn-primary" 
                    @click="signin">
                    Login
                </button>
            </div>
            <RouterLink :to="{name: 'signup'}" 
                class="link">
                Sign Up
            </RouterLink>
            
        </card-form>
        <p class="contact">Email: jorazdev@gmail.com <br/> Tél: +261 32 97 740 62</p>
    </div>
</template>

<script setup>
    import useSignin from '../../composables/signin';
    import CardForm from '../../components/forms/CardForm.vue';
    import InputForm from '../../components/forms/InputForm.vue';


    const { signinForm, signin } = useSignin()

</script> 

<style lang="scss">
    .login {
        display: flex;
        justify-content: center;
        height: 80vh;
        align-items: center;
        
        .action {
            display: flex;
            justify-content: center;
            margin-top: 3em;
            margin-bottom: 1em;
        }

        .card {
            background: var(--color-white);
            padding: 2rem;
            border-radius: var(--card-border-radius);
            width: 25%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0 0 1rem var(--color-primary);
        }
        .link{
            font-size: 12px;
        }

        .contact{
            margin-top: 44em;
            margin-left: -14em;
            font-size: 12px;
            font-weight: 600;
        }
    }

    @media screen and (max-width: 992px) {

        .login .card{
            width: 80%;
            display: flex;
            
        }
    }
</style>