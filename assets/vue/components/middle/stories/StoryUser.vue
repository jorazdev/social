<template>
    <div class="stories">
        <!-- <story-item :user="user"/> -->
        <story-item v-for="user in users.slice(0, 5)" 
            :user="user"/>
    </div>
</template>

<script setup>
    import StoryItem from './StoryItem.vue';
    import useUser from '../../../composables/user';

    const { users } = useUser()
</script>