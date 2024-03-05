import {App} from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import menu from "./menu"
import form from "./form"

const components = [
    chooseArea,
    chooseIcon,
    menu,
    form
]

export default {
    install(app : App){
        components.map(item => {
            app.use(item)
        })
    }
       
}