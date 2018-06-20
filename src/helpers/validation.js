export const EMAIL_EMPTY_ERROR_MESSAGE = "We will need your email!";
export const EMAIL_INVALID_ERROR_MESSAGE = "Looks like you are giving us an invalid email!";
export const PASSWORD_EMPTY_ERROR_MESSAGE =  "You should set a password!";

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
//creating phone number length
export function validatePhoneNumberLength(phone) {
    var len = 14;
    if(phone.length !== len ) {
        return false;
    }else {
        return true;
    }
}

export function isChinesePhoneNumber(phone) {
    var international_code = phone[0] + phone[1] + phone[2];
    if( international_code !== "+86" )
    {
        return false;
    }else {
        return true;
    }
}