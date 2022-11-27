
# Disposable Email checker API

This API checks if the email is a a disposable email or not.

## Routes
`/api/validate-email`

### Example Request:
`
{
  "email": "test@tempmail.co"
}
`

### Example Response if email is disposable email:
`
{
   email: "test@tempmail.co",
   domain: "tempmail.co",
   isValid: true,
   isDisposable: true
}
`
### Information
**email**: returns entered email.

**domain** : returns domain name of the email if email is valid else returns `null`.

**isValid** : returns `true` if the email format is correct else returns `false`.

**isDisposable** : returns `true` if the email is disposable email else returns `false`.

