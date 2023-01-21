<template>
    <a href="javascript:void(0)" 
        class="profile">
        <div class="profile-photo">
            <img :src="photo" alt="photo" />
        </div>
        <div class="handle">
            <h4>Loïc Farel</h4>
            <p class="text-muted">@loicfarel</p>
        </div>
    </a>
</template>

<script setup>
    import useUser from '../../composables/user';

    const { photo } = useUser()
</script>