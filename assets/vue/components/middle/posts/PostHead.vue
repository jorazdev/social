<template>
    <div class="head">
        <div class="user">
            <div class="profile-photo">
                <img :src="user.profile" alt="photo" />
            </div>

            <div class="ingo">
                <h3>{{ user.name }}</h3>
                <small>{{ user.times }}</small>
            </div>
        </div>
        <span class="edit">
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-three-dots"
                viewBox="0 0 16 16">
                <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
        </span>
    </div>
</template>

<script setup>

    defineProps({
        user: {
            type: Object
        }
    })
</script>