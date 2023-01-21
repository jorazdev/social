<template>
    <div class="feeds">
        <post-item v-for="user in users" 
            :user="user" 
            :users="users"/>
        <div class="mt-30"></div>
    </div>
</template>

<script setup>
    import PostItem from './PostItem.vue';
    import useUser from '../../../composables/user';

    const { users } = useUser()
</script>