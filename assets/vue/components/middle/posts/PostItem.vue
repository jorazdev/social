<template>
    <div class="feed">
        <post-head :user="user"/>
        <div class="photo">
            <img :src="user.post" alt="photo" />
        </div>
    
        <interaction-button/>
    
        <div class="liked-by">
            <span v-for="like in users.slice(0, 3)" 
                :key="like.name">
                <img :src="like.profile" alt="" />
            </span>
            <p>
                aimée par <b>Loic Farel</b> et 
                <b> {{ user.other }} autres</b>
            </p>
        </div>
        <div class="caption">
            <p>
                <b>{{ user.name }}</b> {{ user.legende }}.
            </p>
        </div>
        <div class="comments text-muted">
            {{ user.commentaire }} commentaires...
        </div>
    </div>
</template>

<script setup>
    import InteractionButton from './InteractionButton.vue';
    import PostHead from './PostHead.vue';

    defineProps({
        user: {
            type: Object
        },
        users: {
            type: Array
        }
    })
</script>