import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";

export default function useSetting() {

    const { state, commit } = useStore()

    const show = computed(() => state.setting.show )
    const police = computed(() => state.setting.police )
    const theme = computed(() => state.setting.theme )
    const fontSize = computed(() => state.setting.fontSize )
    const root = computed(() => state.setting.root )

    const policeBody = ref(police.value)
    const themeBody = ref(theme.value)

    const polices = ref([
        {
          name: "Pétite",
          id: "petite",
          fontSize: "13px"
        },
        {
          name: "Moyenne",
          id: "moyenne",
          fontSize: "17px"
        },
        {
          name: "Grande",
          id: "grande",
          fontSize: "18px"
        },
      ])

     const themes = ref([
        {
          name: "Claire",
          id: "claire",
          color: { 
            dark: 17, 
            light:  95, 
            white: 100 
            }
        },
        {
          name: "Sombre",
          id: "sombre",
          color: { 
            dark: 95, 
            light:  20, 
            white: 10 
            }
        },
      ])

    
    const opacityColor = reactive({})

    const showSetting = () => {
        if (show.value) {
            commit('setting/setShow', false)
          } else {
            commit('setting/setShow', true)
          }
    }

    const changeFontSize = () => {
        const police = polices.value.find(item => item.id == policeBody.value)

        commit('setting/setFontSize', police.fontSize)
        commit('setting/setPolice', policeBody.value)
        document.querySelector("html").style.fontSize = police.fontSize;
      }

    const changeBackground = () => {
        const theme = themes.value.find(item => item.id == themeBody.value)
        
        Object.assign(opacityColor, theme.color)
        setBackground(theme.color)
    }

    const setBackground = (color) => {
        root.value.style.setProperty("--dark-color-lightness", color.dark+"%")
        root.value.style.setProperty("--light-color-lightness", color.light+"%")
        root.value.style.setProperty("--white-color-lightness", color.white+"%")
    }

    const changeOpacity = () => {
        setBackground(opacityColor)
    }
   
    return {
        show,
        polices,
        themes,
        policeBody,
        themeBody,
        fontSize,
        opacityColor,
        showSetting,
        changeFontSize,
        changeBackground,
        changeOpacity
    }
}