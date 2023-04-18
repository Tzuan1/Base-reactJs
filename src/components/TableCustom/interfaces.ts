import { CSSProperties } from "react"

export interface ITypeCustomHeadCell {
    headerName: any
    style?: CSSProperties
    tooltip?: React.ReactNode
}

export interface ITypeCustomFooter {
    name: string
    style?: CSSProperties
    colspan?: number
}

export interface ITypeTableCustom {
    id?: string
    title?: string
    columns: ITypeCustomHeadCell[]
    rows: any
    footer?: ITypeCustomFooter[]
    onDownload?: (e: any) => void
    numberIndex?: number
    showDetailTable?: (...arg: any) => void
    reset?: number
    totalPage?: number
    totalItem?: number
    perPage?: number
    handleChangePage?: (e: any) => void
    actionRow?: (index: number) => void
    currentPage?: number
    paginationPosition?: "left" | "center" | "right"
    onPin?: (id: number | string, status: boolean) => void
}
