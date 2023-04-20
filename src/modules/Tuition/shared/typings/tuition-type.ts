type IInitialTuitionReducer = {
    isLoading: boolean
    listInvoice: []
    listReceipt: []
    listDownloadInvoice: []
    listDownloadReceipt: []
}

type ITypeDropdownItemData = {
    label: string
    key: string
    value: number
    disabled?: boolean
}

type ITypeParamsSelectCustom = {
    options: any[]
    valueInit?: any
    valueSelect?: any
    suffixIcon?: any
    defaultValue?: any
    fieldNames?: any
    dropdownClassName?: any
    dropdownStyle?: any
    className?: any
    onChange?: (...args: any) => void
    placeholder?: string
}

type ITypeParamsGetInvoice = {
    limit?: number
    pageIndex?: number
}

type ITypeParamsDownloadInvoice = {
    invoice_main_no: number
}

type ITypeParamsResponseDownloadInvoice = {
    inoice_main_no: number
    seito_no: number
    month_no: number
    name_parent: string
    name_student: string
    valid_flg: number
    c_date: string
    disp_date: string
    hi: string
    address: string
    branch_name: string
    tel: string
    how_pay: string
    reg_code: string
    sys_code: string
    text_main: string
    price_sum: number
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
    text_sub_a: string
    text_sub_b: string
    text_sub_c: string
    pay_a_title: string
    pat_atext: string
    pay_b_title: string
    pay_b_text_1: string
    pay_b_text_2: string
}

type ITypeParamsGetReceipt = {
    limit?: number
    pageIndex?: number
}

type ITypeParamsDownloadReceipt = {
    receipt_no: number
}

type ITypeParamsResponseDownloadReceipt = {
    receipt_no: number
    no: number
    seito_no: number
    date_pay: string
    parent_name: string
    price_main: number
    detail_text: string
    company_name: string
    company_detail: string
    c_date: string
    disp_date: string
    valid_flg: number
    remark: string
    tax_text: string
    price_tax: number
    price_base: number
    rate_tax: number
}

type ITypeColumn = {
    title: string
    dataIndex: string
    key: string
    align?: string | any
    render?: any
}

type ITypePagination = {
    total: number
    pageCurrent: number
    pageSize?: number
}

type ITypeListInvoiceItem = {
    date: string
    hi: string
    key: number
}

type ITypeListReceiptItem = {
    price_main: string
    date: string
    hi: string
    key: number
}

export type {
    IInitialTuitionReducer,
    ITypeDropdownItemData,
    ITypeParamsGetInvoice,
    ITypeParamsGetReceipt,
    ITypeParamsDownloadInvoice,
    ITypeParamsResponseDownloadInvoice,
    ITypeParamsDownloadReceipt,
    ITypeParamsResponseDownloadReceipt,
    ITypeColumn,
    ITypePagination,
    ITypeListInvoiceItem,
    ITypeListReceiptItem,
    ITypeParamsSelectCustom
}
