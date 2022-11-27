
const disposable_emails_list = require("../utils/disposable-domain-list");

const checkEmail = (email) => {
    const data = {
        isValid: false,
        domain: null,
    }
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = String(email).toLowerCase().match(emailRegex);
    const emailDomain = email.substring(email.indexOf('@') + 1);
    if (isValid) {
        data.isValid = true;
        data.domain = emailDomain;
    } else {
        data.isValid = false;
        data.domain = null;
    }
    return data;
};


exports.validateEmail = ( req, res ) => {
    const email = req.body.email;
    const data = checkEmail(email);
    const emailDomainFirstLetter = (data.domain?.charAt(0))?.toLowerCase();
    const disposableEmails = disposable_emails_list[emailDomainFirstLetter];
    const returnData = {
        email: email,
        domain: data.domain,
        isValid: data.isValid,
        isDisposable: false,
    }
    if(data.domain){
        const isValid = disposableEmails.filter(item => item == data.domain);
        if(isValid.length == 0){
            returnData.isDisposable = false;
        } else {
            returnData.isDisposable = true;
        }
    }
    return res.status(200).json(returnData);
}