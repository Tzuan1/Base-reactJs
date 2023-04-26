type ITypeInvoiceData = {}

type ITypeInvoiceHeader = {
    name_parent: string
    name_student: string
    branch_name: string
    address: string
    hi: string
    tel: string
    reg_code: string
    sys_code: string
}

type ITypeInvoiceContent = {
    text_main: string
}

type ITypeInvoicePayment = {
    price_sum: number
    how_pay: string
}

type ITypeInvoiceTableItem = {
    invoice_sub_no: number
    invoice_main_no: string
    no: number
    name: string
    detail: string
    rm1: string
    rm2: string
    price: number
    c_date: number
}

type ITypeInvoiceCostInfo = {
    text_main: string
    text_sub_c: string
    adjt_1: string
    adjt_2: string
    adjt_3: string
    adjt_4: string
    adjt_5: string
    adjt_6: string
    adjp_1: number
    adjp_2: number
    adjp_3: number
    adjp_4: number
    adjp_5: number
    adjp_6: number
}

type ITypeInvoiceAdditionalInfo = {
    pay_a_title: string
    pat_atext: string
    pay_b_title: string
    pay_b_text_1: string
    pay_b_text_2: string
}

type ITypeInvoiceFooterInfo = {
    text_sub_a: string
    text_sub_b: string
}

export type {
    ITypeInvoiceData,
    ITypeInvoiceHeader,
    ITypeInvoiceContent,
    ITypeInvoicePayment,
    ITypeInvoiceTableItem,
    ITypeInvoiceCostInfo,
    ITypeInvoiceAdditionalInfo,
    ITypeInvoiceFooterInfo
}
