import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
declare const Button: SFCWithInstall<{
    setup(__props: any, { expose }: {
        expose: any;
    }): {
        a: import("vue").Ref<string>;
        ref: typeof import("vue").ref;
    };
}>;
export default Button;
