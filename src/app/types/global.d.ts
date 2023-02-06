declare module '*.scss' {
    const classNames: { [className: string]: string };
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import {SVGProps, VFC} from "react";
    const SVG: VFC<SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const IS_DEV: boolean;
