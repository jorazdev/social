<template>
    <nav>
        <div class="container" >
            <div class="header-title">
                <h2 class="logo">FoScio NestJS(nodejs) & Vuejs 3</h2>
                <p>postegreSql</p>
            </div>
            
            <div class="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="search" placeholder="Rechercher un utilisateur..." />
            </div>
    
            <div class="create">
                <div class="profile-photo" 
                    @click="selected = !selected">
                    <img :src="photo" alt="photo" />
                </div>
                <ul class="dropdown-menu "
                    :class="{'show': selected}">
                    <li><a class="dropdown-item" href="javascript:void(0)">Profile</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0)">Inbox</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0)">Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                        <a class="dropdown-item" 
                            @click="signout"
                            href="javascript:void(0)">
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import useUser from '../composables/user';

    const router = useRouter()
    const { photo } = useUser()

    const selected = ref(false)

    const signout = async () => {
        await router.push({ name: 'login'})
        localStorage.removeItem('token')
    }

</script>

<style lang="scss">
    
    .header-title {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        h2 {
            font-size: 16px;
        }
        p{
            font-size: 12px;
            font-style: italic;
            color: #6B4DE6;
            font-weight: 600;
            letter-spacing: 3px;
        }
    }

    .profile-photo{
        cursor: pointer;
    }

    .dropdown-menu.show {
        top: 4em;
        right: 2em;
        transition: 1s;
    }
    

    .dropdown-menu{
        position: absolute;
        right: -20em;
        width: 180px;
        background: var(--color-light);
        padding: var(--card-paddding);
        transition: .5s;
        .dropdown-divider {
            border: 1px solid  var(--color-white);;
        }
        li {
            padding: 5px;
        }
    }
</style>