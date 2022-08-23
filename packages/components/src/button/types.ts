/*
 * @Autor: 李建鹏
 * @Date: 2022-08-22 22:23:40
 * @LastEditTime: 2022-08-22 23:25:21
 * @Description: 
 */

/**
 * $ ExtractPropTypes
 * # 提一下的是 ExtractPropTypes 的另一个问题，这个工具类型提取出来的其实是用于 setup 函数的 props 而不是外界传入的 props， 这实际上对于类型的使用造成了一些阻碍。
 * # 在 prop 没有 required 的情况下需要使用 Partial<ExtractPropTypes<typeof xxxProps>> 才能给出实际外部的 props 的类型
 * 
 * # import type 表示只导入类型；ExtractPropTypes是vue3中内置的类型声明,它的作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用
 */

import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']
export const ButtonSize = ['large', 'normal', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>










