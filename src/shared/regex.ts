/* eslint-disable */
export const regex = {
    full_name_vn: new RegExp(
        /^[A-Za-zảáàạãăắằặẵâấầẫậĐđèéẹẽêếềệễìíịĩóòọõôốồỗộơớờợỡùuúụũưứừựữýỳỵỹẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠÈÉẸẼÊẾỀỆỄÍÌỊĨÓÒÕỌÔỒỐỖỘƠỚỜỠỢÙÚỤŨƯỪỮỰÝỲỸỴ]+(\s[A-Za-zảáàạãăắằặẵâấầẫậĐđèéẹẽêếềệễìíịĩóòọõôốồỗộơớờợỡùúụũưứừựữýỳỵỹẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠÈÉẸẼÊẾỀỆỄÍÌỊĨÓÒÕỌÔỒỐỖỘƠỚỜỠỢÙÚỤŨƯỪỮỰÝỲỸỴ]+)*$/
    ),
    user_name: new RegExp(
        /^(?=.{1,}$)(?!.*[_.]{2})[a-zA-Z0-9ｧ-ﾝﾞﾟ]+([_.][a-zA-Z0-9ｧ-ﾝﾞﾟ]+)?$/
    ),
    // /^(?=.{1,}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])|([ｧ-ﾝﾞﾟ])$/
    // new RegExp(/^[a-zA-Z0-9ｧ-ﾝﾞﾟ]{1,}$/)
    phone_number: new RegExp(/^[0-9]+$/),
    password: new RegExp(/^([0-9ｧ-ﾝﾞﾟ]){1,}$/),
    email: new RegExp(/^([a-zA-Z0-9_.]+)[@]([a-z]+)[.]([a-z]+)(.[a-z]+)?$/),
    urlHttps: new RegExp(
        /^(?=.{1,1023}$)(https:|http:)([a-zA-Z0-9\[\]"{}=!:,%&?@+'_./-]+)([.][a-zA-Z0-9\[\]"{}=!:,%&?@+'_./-]+)$/
    ),
    name: new RegExp(/^([a-zA-Z]+){1,100}$/),
    // landline_phone: new RegExp(
    //     /^(?=.{14}$)([(])[0-9]{2}([)])([-])[0-9]{4}[-][0-9]{4}(?<![-])$/
    // ), // XXX-XXXX-XXXX
    // mobile_phone: new RegExp(
    //     /^(?=.{13}$)(?!.*[ ]{2})(?!.*[-]{2})([0-9]){3}[-]([0-9]){4}[-]([0-9]){4}(?<![-])$/
    // ), // XXX-XXXX-XXXX
    // zip_code: new RegExp(
    //     /^(?=.{8}$)(?!.*[-]{2})([-]?)([0-9]){3}[-]([0-9]){4}(?<![-])$/
    // ),
    // money: new RegExp(/^(?=.{1,14}$)\d+((,)*(\d+)*([円]*))*$/),
    length100: new RegExp(/^(.{1,100}$)$/),
    length255: new RegExp(/^(.{1,255}$)$/),
    length1023: new RegExp(/^(.{1,1023}$)$/),
    space_top_or_end: new RegExp(/(?! ).*[^ ]/),
    space_full: new RegExp(/\s/),
    only_space: new RegExp(/^\s+$/i),
    // string_remove_space_of_start: new RegExp(/^\s+|\s+$/g),
    string_remove_space_of_start: new RegExp(/^\s*(\w.*)$/),
    // emoji: new RegExp(
    //     /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/  // regex emoji include special characters
    // )
    emoji: new RegExp(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])/ // regex emoji not include special characters
    ),
    newline: new RegExp(/\n|\r\n/)
}
