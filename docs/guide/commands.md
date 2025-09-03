# Commands

Run `qs-jwt --help` to get a list of available commands and options

```bash
➜  demo-dir ./qs-jwt --help
Usage: qs-jwt [options] [command]

This is a tool that creates JWTs (JSON Web Tokens) that can be used with Qlik Sense Enterprise on Windows (client-managed) as well as Qlik Sense Cloud (SaaS).
The JWTs can be used when accessing Sense APIs from third party applications and services.
JWTs are usually preferred over certificates as JWTs embed a specific user, which means access control can be applied when JWTs are used.

Options:
  -V, --version             output the version number
  -h, --help                display help for command

Commands:
  create-qseow [options]    Create a JWT for use with client-managed Qlik Sense (a.k.a Qlik Sense Enterprise on Windows).
  create-qscloud [options]  Create a JWT for use with Qlik Sense Cloud.
  help [command]            display help for command
➜  demo-dir➜  demo-dir
```

qs-jwt provides two main commands for creating JWTs:

## create-qseow

Create a JWT for use with client-managed Qlik Sense (Qlik Sense Enterprise on Windows).

[View detailed documentation →](/guide/create-qseow)

**Key features:**
- User directory and user ID specification
- Support for groups and user metadata
- Audience field for virtual proxy matching
- Security rule integration

## create-qscloud  

Create a JWT for use with Qlik Sense Cloud.

[View detailed documentation →](/guide/create-qscloud)

**Key features:**
- Issuer and Key ID configuration
- Email verification claims
- Cloud identity provider integration
- Different claim structure optimized for cloud use

## Common Options

Both commands share several common options:

- `--loglevel`: Control logging verbosity
- `--expires`: Set JWT expiration time
- `--cert-privatekey-file`: Use existing private key file
- `--cert-privatekey`: Pass private key as parameter
- `--cert-create`: Create new certificate and key pair
- `--groups`: Specify user groups

## Getting Help

For detailed help on any command, use:

```bash
qs-jwt <command> --help
```

For example:
```bash
qs-jwt create-qseow --help
qs-jwt create-qscloud --help
```