# create-qscloud command

Purpose: To create a new JWT that can be used with Qlik Sense Cloud.

## Syntax

```bash
qs-jwt create-qscloud [options]
```

## Full Help

```bash
➜  demo-dir ./qs-jwt create-qscloud --help
Usage: qs-jwt create-qscloud [options]

Create a JWT for use with Qlik Sense Cloud.

Options:
  --loglevel <level>                 Logging level (choices: "error", "warning", "info", "verbose", "debug", default: "info")
  --useremail <email>                Email address that will be embedded in the JWT
  --useremail-verified <name>        Claim indicating that the creator of thw JWT has verified that the email address belongs to the
                                     user.
  --username <name>                  User name (e.g. John Smith) that will be embedded in the JWT
  --groups <groups...>               Groups associated with the user.
  --issuer <issuer>                  JWT Issuer field. Must match the issuer in the Qlik Sense Cloud JWT IdP.
  --keyid <id>                       JWT key ID. Must match the Key ID in the Qlik Sense Cloud JWT IdP.
  --expires <time>                   Time during which the JWT will be valid. Examples: 60m (60 minutes), 48h (48 hours), 365d (365
                                     days), 5y (5 years).
  --cert-privatekey-file <file>      File containing private key of certificate that will be used to sign the JWT.
  --cert-privatekey <privatekey>     Private key of certificate that will be used to sign the JWT.
  --cert-create [true|false]         Should a new certificate be created? (choices: "true", "false", default: "false")
  --cert-file-prefix <prefix>        Prefix to place before certificate file names. (default: "")
  --cert-create-expires-days <days>  Number of days the new certificate should be valid for
  -h, --help                         display help for command
```

## Required Options

- `--useremail`: The user's email address (used as primary identifier)
- `--issuer`: Must match the issuer configured in the Qlik Sense Cloud JWT IdP
- `--keyid`: Must match the Key ID configured in the Qlik Sense Cloud JWT IdP

## Key Features

### User Identity
- **Email**: Primary user identifier in Qlik Sense Cloud
- **Email Verified**: Boolean claim indicating email ownership verification
- **User Name**: Human-readable display name

### Cloud Integration
- **Issuer**: Identifies the JWT issuer, must match cloud IdP configuration
- **Key ID**: Identifies which key was used to sign the JWT
- **Groups**: User group memberships for access control

### Certificate Handling
Three options for handling certificates:
1. Use existing private key file (`--cert-privatekey-file`)
2. Pass private key as parameter (`--cert-privatekey`)
3. Create new certificate and key (`--cert-create true`)

## Cloud IdP Configuration

Before using JWTs with Qlik Sense Cloud, you need to configure a JWT Identity Provider:

1. **Create IdP**: Set up a JWT IdP in your Qlik Cloud tenant
2. **Configure Issuer**: Set the issuer value that matches your `--issuer` parameter
3. **Add Public Key**: Upload the public key corresponding to your private key
4. **Set Key ID**: Configure the Key ID that matches your `--keyid` parameter

## Examples

See the [QS Cloud Examples](/guide/qscloud-examples) page for detailed usage examples.