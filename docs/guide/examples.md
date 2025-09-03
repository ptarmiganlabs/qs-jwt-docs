# Examples

This page provides an overview of examples for using qs-jwt with both QSEoW and Qlik Sense Cloud.

## Quick Start Examples

### QSEoW Basic Example

```bash
./qs-jwt create-qseow \
  --userdir COMPANY \
  --userid john.doe \
  --username "John Doe" \
  --useremail "john.doe@company.com" \
  --audience your-audience-string \
  --cert-privatekey-file private-key.pem \
  --expires 24h
```

### QS Cloud Basic Example

```bash
./qs-jwt create-qscloud \
  --useremail "john.doe@company.com" \
  --username "John Doe" \
  --issuer "your-issuer-url" \
  --keyid "your-key-id" \
  --cert-privatekey-file private-key.pem \
  --expires 24h
```

## Detailed Examples by Platform

Choose your Qlik Sense platform for detailed examples:

### [QSEoW Examples](/guide/qseow-examples)
Complete examples for Qlik Sense Enterprise on Windows including:
- Using existing private key files
- Passing private keys as parameters  
- Creating new certificates
- Examples for macOS, Windows, and Linux

### [QS Cloud Examples](/guide/qscloud-examples)
Complete examples for Qlik Sense Cloud including:
- JWT IdP configuration
- Using existing private key files
- Passing private keys as parameters
- Creating new certificates
- Examples for macOS, Windows, and Linux

### [API Usage Examples](/guide/api-usage)
How to use the created JWTs with Qlik Sense APIs:
- QSEoW Repository Service (QRS) API calls
- Qlik Sense Cloud API authentication
- PowerShell and curl examples

## Common Patterns

### Certificate Creation
If you don't have existing certificates, qs-jwt can create them:

```bash
# Creates: privatekey.pem, publickey.pem, publickey.cer
./qs-jwt create-qseow \
  --cert-create true \
  --cert-create-expires-days 365 \
  --cert-file-prefix "qsjwt_" \
  # ... other options
```

### Environment Variables
Store sensitive information like private keys in environment variables:

```bash
# Store private key in environment variable
export PRIVATE_KEY=$(cat private-key.pem)

# Use in qs-jwt
./qs-jwt create-qseow \
  --cert-privatekey "$PRIVATE_KEY" \
  # ... other options
```

### Group Assignments
Add users to multiple groups:

```bash
./qs-jwt create-qseow \
  --groups "admin" "power-users" "department-sales" \
  # ... other options
```

## Next Steps

- [View QSEoW detailed examples](/guide/qseow-examples)
- [View QS Cloud detailed examples](/guide/qscloud-examples)  
- [Learn about API usage](/guide/api-usage)