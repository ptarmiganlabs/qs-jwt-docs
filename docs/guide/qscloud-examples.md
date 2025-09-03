# QS Cloud Examples

This page shows detailed examples for creating JWTs for Qlik Sense Cloud.

## Prerequisites

Before using JWTs with Qlik Sense Cloud, you need:
1. A JWT Identity Provider configured in your Qlik Cloud tenant
2. A certificate/private key pair (or let qs-jwt create one)
3. The issuer and key ID values from your JWT IdP configuration

::: tip JWT IdP Configuration
These days (May 2023) JWTs are enabled on all Qlik Cloud tenants by default. In the past this feature was enabled for tenants only on a case-by-case basis - that is no longer the case though.
:::

## Mode 1: Using Existing Private Key File

The concept is identical to using QSEoW, but adapted for QS Cloud requirements.

### Running qs-jwt on macOS

This example will:
- Create a JWT for Qlik Sense Cloud (the `create-qscloud` command)
- The JWT will expire in 365 days
- The private key in file `privatekey.pem` will be used to sign the JWT
- Set claims for useremail and username to `anna@grusgrus.com` and `Anna Anderson`, respectively
- Set claim for verified email address to `true`
- The issuer option must match ditto specified in the Qlik Sense JWT IdP (Identify Provider)
- The keyid option must match ditto specified in the Qlik Sense JWT IdP
- Two groups are defined for this user: `group1` and `group 2`

Command (assuming the qs-jwt binary is available in the current directory):

```bash
./qs-jwt create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-privatekey-file ./privatekey.pem \
  --groups group1 "group 2"
```

![qs-jwt running on macOS, using existing key file](/img/qs-jwt-qscloud-macos-1.png)

### Running qs-jwt on Windows Server

This example uses a private key that was created using openssl.  
No groups are included in the JWT in this example.

Remember: Don't forget to unblock the downloaded qs-jwt ZIP file before unzipping it. Failing to unblock it may prevent proper execution of qs-jwt.exe.

```powershell
qs-jwt.exe create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-privatekey-file ./privatekey.pem
```

![qs-jwt running on Windows Server 2016, using existing key file](/img/qs-jwt-qscloud-winsrv2016-1.png)

## Mode 2: Using Existing Private Key as Parameter

Same concept as for QSEoW, but adapted for QS Cloud.

### Running qs-jwt on macOS

This example will:
- Set the environment variable `QSJWTPRIVKEY` to the contents of the private key in `privatekey.pem` file
- Create a JWT for Qlik Sense Cloud (the `create-qscloud` command)
- The JWT will expire in 365 days
- The private key in environment variable `QSJWTPRIVKEY` will be used to sign the JWT
- Set claims for useremail and username to `anna@grusgrus.com` and `Anna Anderson`, respectively
- Set claim for verified email address to `true`
- The issuer option must match ditto specified in the Qlik Sense JWT IdP (Identify Provider)
- The keyid option must match ditto specified in the Qlik Sense JWT IdP
- Two groups are defined for this user: `group1` and `group 2`

Commands:

```bash
export QSJWTPRIVKEY=$(cat ./privatekey.pem)
```

```bash
./qs-jwt create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-privatekey "$QSJWTPRIVKEY" \
  --groups group1 "group 2"
```

![qs-jwt running on macOS, using existing private key as parameter](/img/qs-jwt-qscloud-macos-2.png)

### Running qs-jwt on Windows Server

This example uses a private key that was created using openssl.  
Here PowerShell is used to run qs-jwt, with the private key stored in an environment variable.

Remember: Don't forget to unblock the downloaded qs-jwt ZIP file before unzipping it. Failing to unblock it may prevent proper execution of qs-jwt.exe.

```powershell
$QSJWTPRIVKEY = Get-Content .\privatekey.pem -Raw
```

```powershell
.\qs-jwt.exe create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-privatekey "$QSJWTPRIVKEY" \
  --groups group1 "group 2"
```

![qs-jwt running on Windows Server 2016, using existing private key as parameter](/img/qs-jwt-qscloud-winsrv2016-2.png)

## Mode 3: Create New Certificate and Key Pair

If you **do not** have a certificate with associated private key (PEM encoded) qs-jwt can create these for you.  
You will get a complete public-private key pair + certificate based on the private key, rather than just the private key (which is what qs-jwt uses).

The created certificate and keys will be stored on disk as `privatekey.pem`, `publickey.pem` and `publickey.cer`.  
An optional prefix can be added to the file names, this is done by using the `--cert-file-prefix` option.

### Running qs-jwt on macOS

This example will:
- Create a JWT for Qlik Sense Cloud (the `create-qscloud` command)
- The JWT will expire in 365 days
- A new private/public key pair will be created, as well as a new certificate based on that private key
- The created files will be prefixed with `qsjwt_`
- The created certificate will expire in 400 days
- The newly created private key will be used to sign the JWT
- Set claims for useremail and username to `anna@grusgrus.com` and `Anna Anderson`, respectively
- Set claim for verified email address to `true`
- The issuer option must match ditto specified in the Qlik Sense JWT IdP (Identify Provider)
- The keyid option must match ditto specified in the Qlik Sense JWT IdP
- Two groups are defined for this user: `group1` and `group 2`

Command:

```bash
./qs-jwt create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-create true \
  --cert-create-expires-days 400 \
  --cert-file-prefix "qsjwt_" \
  --groups group1 "group 2"
```

![qs-jwt running on macOS, creating new cert and key](/img/qs-jwt-qscloud-macos-3.png)

### Running qs-jwt on Windows Server

Here cmd.exe is used to run qs-jwt, PowerShell works equally well.

Remember: Don't forget to unblock the downloaded qs-jwt ZIP file before unzipping it. Failing to unblock it may prevent proper execution of qs-jwt.exe.

```powershell
.\qs-jwt.exe create-qscloud \
  --username "Anna Anderson" \
  --useremail "anna@grusgrus.com" \
  --useremail-verified true \
  --issuer "<your-tenant>.eu.qlikcloud.com" \
  --keyid "<your-key-id>" \
  --expires 365d \
  --cert-create true \
  --cert-create-expires-days 400 \
  --cert-file-prefix "qsjwt_" \
  --groups group1 "group 2"
```

![qs-jwt running on Windows Server 2016, creating new cert and key](/img/qs-jwt-qscloud-winsrv2016-3.png)

## Next Steps

- [Learn how to use JWTs with QS Cloud APIs](/guide/api-usage#qlik-sense-cloud)
- [See QSEoW examples](/guide/qseow-examples)
- [Understand JWT configuration in Qlik Cloud](/guide/concepts)