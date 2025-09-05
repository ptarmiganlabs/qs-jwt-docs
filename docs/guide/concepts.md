# qs-jwt concepts

## Command line tool

qs-jwt is a command line tool intended to be used from scripts written in Powershell, bash or similar shells.  
Or just from the command line for one-off creation of JWTs.

Given the focus on integration in various automation scenarios, all needed information is passed to qs-jwt as parameters and options.

There are thus - by design - no interactive prompts what so ever in qs-jwt.

## JWT claims

A JWT "claim" is a piece of information that's included in the JWT. Examples include email address, user name, group belongings and other metadata associated with user accounts.

Claims may sound like a strange term for this, but you can think of it as metadata presented by the calling system to Qlik Sense during the API call. The fact that the JWT is signed means Sense can trust that the JWT has not been modified since it was created.

## Modes of operation

There are a couple of things to consider when creating JWTs for Qlik Sense:

- Will the JWT be used with client-managed Qlik Sense (=Qlik Sense Enterprise on Windows, QSEoW) or with Qlik Sense cloud? These use JWTs with slightly different structure inside.
- Do you already have a certificate/private key, or do you need to create those first?

Both points above are supported and handled by qs-jwt:

qs-jwt supports creating JWTs for both QSEoW and Qlik Sense Cloud and qs-jwt can either use an existing certificate/key or create new ones.

### Certificate Handling Options

qs-jwt provides three ways to handle certificates and private keys:

1. **Use existing private key file**: You have a PEM-encoded private key file that you want to use for signing JWTs
2. **Use existing private key as parameter**: You pass the private key content directly as a command-line parameter
3. **Create new certificate and key**: qs-jwt creates a new certificate/key pair for you

### JWT Types

qs-jwt can create JWTs for two different Qlik Sense platforms:

#### QSEoW (Qlik Sense Enterprise on Windows)

- Uses `create-qseow` command
- Requires user directory and user ID
- Supports rich claims for security rules
- Used with virtual proxy configurations

#### Qlik Sense Cloud

- Uses `create-qscloud` command
- Requires issuer and key ID configuration
- Uses different claim structure than QSEoW
- Integrates with cloud identity providers

The different use cases are described in detail in the [examples section](/guide/examples).
