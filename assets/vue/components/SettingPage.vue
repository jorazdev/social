<template>
    <transition name="fade">
        <div v-if="show" 
            class="setting">
            <div class="card">
                <div class="close-card">
                    <svg @click="showSetting" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        width="30" 
                        height="30">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
    
                <div>
                    <h2>Paramètres</h2>
                    <p class="text-muted">
                        Modifier la taille de la police et le thème.
                    </p>
                </div>
                <div>
                    <h4>Police</h4>
                    <div class="group">
                        <div v-for="(police, index) in polices" 
                            :key="index">
                            <input @change="changeFontSize" 
                                v-model="policeBody" 
                                type="radio" 
                                :value="police.id"
                                name="police" 
                                :id="police.id" />
                            <label :for="police.id">{{ police.name }}</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Thème</h4>
                    <div class="group">
                        <div v-for="(theme, index) in themes" 
                            :key="index">
                            <input @change="changeBackground" 
                                v-model="themeBody" 
                                type="radio" 
                                name="theme"
                                :value="theme.id" 
                                :id="theme.id" />
                            <label :for="theme.id">{{ theme.name }}</label>
                        </div>
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Dark</span>
                        <el-slider @change="changeOpacity" 
                            v-model="opacityColor.dark" />
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">Light</span>
                        <el-slider @change="changeOpacity" 
                            v-model="opacityColor.light" />
                    </div>
                    <div class="slider-demo-block">
                        <span class="demonstration">White</span>
                        <el-slider @change="changeOpacity" 
                            v-model="opacityColor.white" />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    import useSetting from '../composables/setting';
    import { onMounted } from 'vue';

    onMounted(() => {
        Object.assign(opacityColor, themes.value[0].color)
    })

    const { show, polices, themes, policeBody, themeBody, opacityColor,
        showSetting, changeFontSize, changeBackground, changeOpacity } = useSetting()
</script>

<style lang="scss">
    .setting .card {
        width: 30vw;
    }

    @media screen and (max-width: 992px) {
        .setting .card {
            width: 90%;
        }
    }

</style>