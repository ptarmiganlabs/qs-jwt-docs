# Installation

qs-jwt does not need to be installed.  
It is a standalone, cross-platform executable that is just downloaded and executed.

The latest version is always available from the [download page](https://github.com/ptarmiganlabs/qs-jwt/releases).

Make sure to check for new versions (and star the [GitHub repositry](https://github.com/ptarmiganlabs/qs-jwt) and subscribe to updates!) - new features are added and security updates applied.

## Download

1. Go to the [releases page](https://github.com/ptarmiganlabs/qs-jwt/releases)
2. Download the appropriate binary for your operating system. Windows, macOS and Linux supported.

::: info macOS
Currently (August 2025) only a macOS x64 binary is available, Apple Silicon (arm64) version coming.
:::

## Platform-specific Notes

### Windows

::: warning Windows operating systems
Don't forget to unblock the downloaded qs-jwt ZIP file before unzipping it.  
Failing to unblock it may prevent proper execution of qs-jwt.exe.

To unblock: Right-click the ZIP file → Properties → Check "Unblock" → OK
:::

### macOS

The macOS executable binary is signed and notarized by Apple's standard process.  
A warning may still be shown first time the app is started. This is expected and normal.

### Linux

The Linux binary should work on most modern distributions. Make sure to make it executable:

```bash
chmod +x qs-jwt-linux
```

## Verify Installation

Once downloaded, you can verify the installation by running:

```bash
# Windows
qs-jwt.exe --version

# macOS/Linux
./qs-jwt --version
```

This should display the version number and confirm that qs-jwt is working correctly.

## Next Steps

Now that you have qs-jwt installed, you can:

- [Learn about qs-jwt concepts](/guide/concepts)
- [Explore the available commands](/guide/commands)
- [Try some examples](/guide/examples)
