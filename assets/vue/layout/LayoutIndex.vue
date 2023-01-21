<template>
    <nav-bar/>
    <main>
        <div class="container">
            <div class="left">
                <profile-user/>
                <side-bar/>
            </div>

            <div class="middle">
                <story-user/>
                <create-post/>
                <content-app/>
            </div>

            <div class="right">
                <message-user/>
                <invitation-user/>
            </div>

            <setting-page/>
        </div>
    </main>
    
</template>

<script setup>
    import ContentApp from '../components/ContentApp.vue';
    import NavBar from '../components/NavBar.vue';
    import ProfileUser from '../components/left/ProfileUser.vue';
    import SideBar from '../components/left/SideBar.vue';
    import StoryUser from '../components/middle/stories/StoryUser.vue';
    import CreatePost from '../components/middle/CreatePost.vue';
    import MessageUser from '../components/right/messages/MessageUser.vue';
    import InvitationUser from '../components/right/Invitations/InvitationUser.vue';
    import SettingPage from '../components/SettingPage.vue';
</script>