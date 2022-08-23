# shenzhen-ui
vite+pnpm+vue3+ts组件库测试

#### .npmrc 为什么要配置shamefully-hoist。
```

如果某些工具仅在根目录的node_modules时才有效，可以将其设置为true来提升那些不在根目录的node_modules，就是将你安装的依赖包的依赖包的依赖包的...都放到同一级别（扁平化）。说白了就是不设置为true有些包就有可能会出问题。

```

#### pnpm-workspace.yaml文件
```
将我们项目下的packages目录和examples目录关联起来了，当然如果你想关联更多目录你只需要往里面添加即可。根据上面的目录结构很显然你在根目录下新packages和examples文件夹，packages文件夹存放我们开发的包，examples用来调试我们的组件
examples文件夹就是接下来我们要使用vite搭建一个基本的Vue3脚手架项目的地方

```