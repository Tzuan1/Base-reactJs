declare module "*.css" {
    const content: { [className: string]: string }
    export default content
}
declare module "*.scss" {
    const content: { [className: string]: string }
    export default content
}
declare module "*.less" {
    const content: { [className: string]: string }
    export default content
}
declare module "*.svg" {
    const value: string
    export default value
}

declare module "*.png"

declare module "*.ttf" {
    const content: any
    export default content
}
