<template>
    <div class="message">
        <div class="profile-photo">
            <img :src="user.profile" alt="photo" />
            <div v-if="user.actif" class="active"></div>
        </div>
        <div class="message-body">
            <h5>{{ user.name }}</h5>
            <p class="text-bold">{{ user.message }}</p>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        user: {
            type: Object
        }
    })
</script>