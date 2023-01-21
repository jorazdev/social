<template>
    <div class="sidebar">
          <menu-item v-for="menu in menus"
            :selected="selected" 
            :menu="menu" 
            @select="select($event)"/>
    </div>
</template>

<script setup>
    import useSidebar from '../../composables/sidebar';
    import MenuItem from './MenuItem.vue';

    const { menus, selected, select } = useSidebar()
</script>