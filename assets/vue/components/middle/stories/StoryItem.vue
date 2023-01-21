<template>
    <div :style="{ background: 'url(' + user.storie + ')' }"
        class="story">
        <div class="profile-photo">
            <img :src="user.profile" alt="photo" />
        </div>
        <p class="name">{{ user.name }}</p>
    </div>
</template>
<script setup>

    defineProps({
        user: {
            type: Object
        }
    })
</script>