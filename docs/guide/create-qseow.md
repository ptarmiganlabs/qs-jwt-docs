# create-qseow command

Purpose: To create a new JWT that can be used with client-managed Qlik Sense.

## Syntax

```bash
qs-jwt create-qseow [options]
```

## Full Help

```bash
➜  demo-dir ./qs-jwt create-qseow --help
Usage: qs-jwt create-qseow [options]

Create a JWT for use with client-managed Qlik Sense (a.k.a Qlik Sense Enterprise on Windows).

Options:
  --loglevel <level>                 Logging level (choices: "error", "warning", "info", "verbose", "debug", default: "info")
  --userdir <directory>              user directory (e.g. MYDIRNAME) that will be embedded in the JWT
  --userid <userid>                  user ID (e.g. johnsmith) that will be embedded in the JWT
  --username <name>                  User name (e.g. John Smith) that will be embedded in the JWT
  --useremail <email>                Email address that will be embedded in the JWT
  --groups <groups...>               Groups associated with the user dir/ID.
  --expires <time>                   Time during which the JWT will be valid. Examples: 60m (60 minutes), 48h (48 hours), 365d (365
                                     days), 5y (5 years)
  --audience <audience>              JWT audience field. Audience in JWT must match the audience defined in the QSEoW virtual proxy
                                     being used
  --cert-privatekey-file <file>      File containing private key of certificate that will be used to sign the JWT
  --cert-privatekey <privatekey>     Private key of certificate that will be used to sign the JWT.
  --cert-create [true|false]         Should a new certificate be created? (choices: "true", "false", default: "false")
  --cert-file-prefix <prefix>        Prefix to place before certificate file names (default: "")
  --cert-create-expires-days <days>  Number of days the new certificate should be valid for
  -h, --help                         display help for command
```

## Required Options

- `--userdir`: The user directory in Qlik Sense where the user belongs
- `--userid`: The user ID within that directory
- `--username`: The user's name
- `--useremail`: The user's email address
- `--expires`: The expiration time for the JWT. Examples: 60m (60 minutes), 48h (48 hours), 365d (365 days), 5y (5 years)
- `--audience`: Must match the audience configured in the QSEoW virtual proxy

## Key Features

### User Identity

- **User Directory**: Specifies which user directory the user belongs to
- **User ID**: The unique identifier for the user within that directory
- **User Name**: Human-readable display name
- **Email**: User's email address

### Groups and Security

- **Groups**: Specify which groups the user belongs to
- **Security Rules**: All claims are available in QSEoW security rules as `user.environment.<claim>`

### Certificate Handling

Three options for handling certificates:

1. Use existing private key file (`--cert-privatekey-file`)
2. Pass private key as parameter (`--cert-privatekey`)
3. Create new certificate and key (`--cert-create true`)

## Examples

See the [QSEoW Examples](/guide/qseow-examples) page for detailed usage examples.
