import React from "react"
import LogoPng from "@/assets/image/Logo.png"

export const ImageLogo = props => {
    return <img src={LogoPng} alt="logo" style={{ width: props.width }} />
}
