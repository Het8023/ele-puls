import {App} from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import menu from "./menu"

const components = [
    chooseArea,
    chooseIcon,
    menu
]

export default {
    install(app : App){
        components.map(item => {
            app.use(item)
        })
    }
       
}