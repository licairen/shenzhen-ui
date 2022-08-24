/*
 * @Autor: 李建鹏
 * @Date: 2022-08-18 23:40:32
 * @LastEditTime: 2022-08-24 10:25:28
 * @Description: 
 */
import type {App,Plugin} from "vue"

import button from './button.vue'

type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button