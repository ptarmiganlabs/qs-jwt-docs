# Logging

qs-jwt provides configurable logging to help with troubleshooting and monitoring JWT creation.

## Logging Levels

Possible qs-jwt logging levels are `error`, `warning`, `info`, `verbose`, `debug`.

Default logging level is `info`.

### Setting Log Level

Use the `--loglevel` option with any command:

```bash
# Basic info logging (default)
./qs-jwt create-qseow --loglevel info [other options...]

# Verbose logging for more details
./qs-jwt create-qseow --loglevel verbose [other options...]

# Debug logging for troubleshooting
./qs-jwt create-qseow --loglevel debug [other options...]

# Error logging only
./qs-jwt create-qseow --loglevel error [other options...]
```

## Log Level Details

### error
Only critical errors that prevent JWT creation are logged.

**Use when:**
- Running in production with minimal logging
- Only need to know about failures

### warning
Errors and warnings about potential issues are logged.

**Use when:**
- You want to be notified of potential problems
- Running automated scripts

### info (default)
General information about the JWT creation process.

**Use when:**
- Normal operation
- You want to see what qs-jwt is doing
- Basic troubleshooting

**Example output:**
```
[INFO] Creating JWT for QSEoW
[INFO] User: anna@GRUSGRUS
[INFO] Groups: group1, group2
[INFO] Expires: 2024-09-03T06:24:00.000Z
[INFO] JWT created successfully
```

### verbose
Detailed information about each step of the process.

**Use when:**
- Debugging configuration issues
- Understanding the JWT creation process
- Verifying certificate handling

**Example output:**
```
[INFO] Creating JWT for QSEoW
[VERBOSE] Reading private key from file: privatekey.pem
[VERBOSE] Private key loaded successfully
[VERBOSE] Setting JWT payload claims
[VERBOSE] - userId: anna
[VERBOSE] - userDirectory: GRUSGRUS
[VERBOSE] - name: Anna Anderson
[VERBOSE] - email: anna@grusgrus.com
[VERBOSE] - groups: ["group1", "group2"]
[VERBOSE] - audience: hdJh34wkK
[VERBOSE] - expiration: 365 days from now
[VERBOSE] Signing JWT with private key
[INFO] JWT created successfully
```

### debug
Very detailed logging including internal operations and data structures.

**Use when:**
- Developing or debugging qs-jwt
- Investigating complex issues
- Contributing to the project

**Note:** Debug logging may include sensitive information. Use with caution.

## Best Practices

### Production Environments
- Use `error` or `warning` level in production
- Monitor logs for certificate expiration warnings
- Set up alerting for error-level events

### Development and Testing
- Use `info` or `verbose` level during development
- Use `debug` level when troubleshooting specific issues
- Review logs to understand JWT creation process

### Automation and CI/CD
- Use `warning` level in automated scripts
- Capture and review logs for failed builds
- Consider log retention policies for compliance

### Security Considerations
- Be aware that higher log levels may include sensitive information
- Secure log files and transmission
- Consider log rotation and retention policies
- Never log private keys or JWT contents in production

## Troubleshooting with Logs

### Common Issues and Log Messages

#### Certificate/Key Issues
```
[ERROR] Failed to read private key file: permission denied
[ERROR] Invalid private key format
[WARNING] Certificate will expire in 30 days
```

#### Configuration Issues
```
[ERROR] Missing required parameter: --userdir
[WARNING] Group name contains special characters: "group with spaces"
```

#### JWT Creation Issues
```
[ERROR] Failed to sign JWT: invalid key
[DEBUG] JWT payload: {"userId":"test","exp":1234567890}
```

### Debugging Steps

1. **Start with verbose logging** to see the full process
2. **Check for WARNING messages** that might indicate configuration issues
3. **Review ERROR messages** for specific failure reasons
4. **Use debug logging** for complex certificate or signing issues

## Log Output Formats

qs-jwt logs are written to stdout/stderr with a simple format:

```
[LEVEL] Message text
```

### Redirecting Logs

Redirect logs to files for analysis:

```bash
# Redirect all output to file
./qs-jwt create-qseow --loglevel verbose [options...] > qs-jwt.log 2>&1

# Redirect only errors to file
./qs-jwt create-qseow [options...] 2> qs-jwt-errors.log

# Use with system logging
./qs-jwt create-qseow [options...] | logger -t qs-jwt
```

## Integration with Monitoring Systems

### Structured Logging
For integration with log aggregation systems, consider parsing qs-jwt output:

```bash
# Example: Extract errors for monitoring
./qs-jwt create-qseow [options...] 2>&1 | grep '\[ERROR\]' | while read line; do
  echo "$(date): $line" >> /var/log/qs-jwt-errors.log
done
```

### Exit Codes
qs-jwt returns appropriate exit codes that can be monitored:
- `0`: Success
- `1`: General error
- `2`: Invalid parameters

Use exit codes in scripts:
```bash
if ! ./qs-jwt create-qseow [options...]; then
  echo "JWT creation failed with exit code $?"
  # Handle error
fi
```