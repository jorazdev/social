<template>
    <div class="friend-requests">
        <h4>Invitations</h4>
        <div v-for="(invitation, index) in invitations" 
            :key="index" 
            class="request">
            <div class="info">
                <div class="profile-photo">
                    <img :src="invitation.profile" alt="photo" />
                </div>
                <div>
                    <h5>{{ invitation.name }}</h5>
                    <p class="text-muted">
                        {{ invitation.friend }} 
                        amis en communs
                    </p>
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary">Accepter</button>
                <button class="btn">Refuser</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import useUser from '../../../composables/user';

    const { invitations } = useUser()
</script>