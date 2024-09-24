# Directus WebHook (Flow) Authentication Operations

This bundle contains 2 operations aimed at helping provide explicit authentication to Directus Flows using the WebHook trigger.

## 1. Check Authentication Operation

This operation allows you to check for a certain level of authentication:
- Admin Only 
- Users and Admins
- Public (just remove the operation instead of picking this!)

This operation will return `true` if authenticated or throw an error otherwise.

![Check Auth Config](https://raw.githubusercontent.com/br41nslug/directus-extension-webhook-authentication/main/examples/check_auth_config.png)
![Check Auth Operation](https://raw.githubusercontent.com/br41nslug/directus-extension-webhook-authentication/main/examples/check_auth_op.png)

## 2. Check Permissions Operation

This operation allows you to check for the read permissions of a selected collection.
This operation will return `true` if the user has the correct permissions or throw an error otherwise.

![Check Perms Config](https://raw.githubusercontent.com/br41nslug/directus-extension-webhook-authentication/main/examples/check_perms_config.png)
![Check Perms Operation](https://raw.githubusercontent.com/br41nslug/directus-extension-webhook-authentication/main/examples/check_perms_op.png)
