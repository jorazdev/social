<template>
    <a href="javascript:void(0)"
        @click="select"
        :class="{ 'active': selected == menu.id }"
        class="menu-item" >
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                :class="menu.class"
                viewBox="0 0 16 16">
                <path
                    :d="menu.d" />
            </svg>
            <small v-if="menu.count > 0" 
                class="notification-count"> 
                {{ menu.count }}
            </small>
        </span>
        <h3>{{ menu.label }}</h3>
    </a>
</template>
<script setup>

const props = defineProps({
    menu: {
        type: Object
    },
    selected: {
        type: Number
    }
})

const emit = defineEmits(['select'])

const select = () => {
    emit('select', props.menu)
}
</script>