<template>
    <form action="#" class="create-post">
        <div class="profile-photo">
        <img :src="photo" alt="photo" />
        </div>
        <input type="text" placeholder="Que pensez-vous ?" />
        <input type="submit" value="Publier" class="btn btn-primary" />
    </form>
</template>

<script setup>
    import useUser from '../../composables/user';

    const { photo } = useUser()
</script>