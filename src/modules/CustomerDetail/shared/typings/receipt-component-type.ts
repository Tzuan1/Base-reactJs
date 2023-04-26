type ITypeReceiptHeader = {
    no: string
    date_pay: string
}

type ITypeReceiptParentName = {
    parent_name: string
}

type ITypeReceiptPriceMain = {
    price_main: number
}

type ITypeReceiptDetailText = {
    detail_text: string
    remark: string
}

type ITypeReceiptPriceDetail = {
    price_base: number
    price_tax: number
    rate_tax: number
    tax_text: string
}

type ITypeReceiptCompanyDetail = {
    company_name: string
    company_detail: string
}

export type {
    ITypeReceiptHeader,
    ITypeReceiptParentName,
    ITypeReceiptPriceMain,
    ITypeReceiptDetailText,
    ITypeReceiptPriceDetail,
    ITypeReceiptCompanyDetail
}
