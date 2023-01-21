<template>
    <div class="register">
        <card-form class="card">
            <div class="title">
                <h1>Sign Up</h1>
            </div>
            <input-form label="Email" 
                v-model="signupForm.email"/>

            <div class="col">
                <input-form label="First name" 
                    v-model="signupForm.firstName"/>
                <input-form label="Last name" 
                    v-model="signupForm.lastName"/>
            </div>
            
            <div class="col">
                <input-form type="password" 
                    label="Password" 
                    v-model="signupForm.password"/>
                <input-form type="password" 
                    label="Confirm" 
                    v-model="confirm"/>
            </div>
            
            <div class="action">
                <button class="btn btn-primary" 
                    @click="signup">
                    Register
                </button>
            </div>
            <RouterLink :to="{name: 'login'}" 
                class="link">
                Sign In
            </RouterLink>
        </card-form>
    </div>
</template>

<script setup>
    import CardForm from '../../components/forms/CardForm.vue';
    import InputForm from '../../components/forms/InputForm.vue';
    import useSignup from '../../composables/signup'

    const { signupForm, confirm, signup } = useSignup()

</script>

<style lang="scss">
    .register {
        display: flex;
        justify-content: center;
        height: 90vh;
        align-items: center;
        
        .action {
            display: flex;
            justify-content: center;
            margin-top: 3em;
            margin-bottom: 1em;
        }

        .card {
            position: relative;
            background: var(--color-white);
            padding: 2rem;
            border-radius: var(--card-border-radius);
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0 0 1rem var(--color-primary);

            .col{
                display: flex;
                justify-content: space-between;
            }
        }

        .link{
            font-size: 12px;
        }
    }

    @media screen and (max-width: 992px) {
        .register .card{
            width: 80%;
            .col{
                display: flex;
                flex-direction: column;
            }
        }
    }

</style>