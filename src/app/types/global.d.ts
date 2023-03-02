declare module '*.scss' {
    const classNames: Record<string, string>
    export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import { type SVGProps, type VFC } from 'react'
    const SVG: VFC<SVGProps<SVGSVGElement>>
    export default SVG
}

declare const IS_DEV: boolean
declare const API: string

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T
