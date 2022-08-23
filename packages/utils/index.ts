/*
 * @Autor: 李才人
 * @Date: 2022-08-18 22:41:44
 * @LastEditTime: 2022-08-22 22:50:29
 * @Description: 注册组件
 */

import type { App, Plugin } from "vue"
type SFCWithInstall<T> = T & Plugin
export default <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}