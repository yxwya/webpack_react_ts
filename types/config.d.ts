declare module "*.css";
declare module '*.scss';
declare module "*.png";
declare module '*.svg'
{
    // export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
    const cssUrl:{[key:string]:string};
    export default cssUrl;
}