---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "QS-JWT"
  # text: "Documentation"
  tagline: Easily create Qlik Sense JWTs
  # image:
  #   src: https://img.shields.io/badge/Source---
  #   alt: QS-JWT
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View Examples
      link: /guide/examples
    - theme: alt
      text: GitHub
      link: https://github.com/ptarmiganlabs/qs-jwt

features:
  - title: Cross Platform
    details: Works seamlessly on Windows, Linux, and macOS with native binaries for each platform.
    icon: 🖥️
  - title: Dual Platform Support
    details: Create JWTs for both Qlik Sense Enterprise on Windows (QSEoW) and Qlik Sense Cloud.
    icon: ☁️
  - title: Flexible Certificate Handling
    details: Use existing private keys and certificates, or let qs-jwt create new ones for you.
    icon: 🔐
  - title: Command Line Interface
    details: Perfect for automation, CI/CD pipelines, and scripting scenarios.
    icon: ⚡
  - title: Rich JWT Claims
    details: Support for user metadata, groups, email verification, and custom claims.
    icon: 📋
  - title: Security Focused
    details: Virus scanned releases, signed binaries, and comprehensive security documentation.
    icon: 🛡️
---

## About

A cross platform, command line tool for creating JWTs (=JSON Web Tokens) that can be used to authenticate with Qlik Sense.

qs-jwt nicely complements the more operationally focused open source tools in the [Butler family](https://github.com/ptarmiganlabs). Those tools focus on things such as real-time monitoring of client-managed Qlik Sense environments, flexible and powerful alerts/notifications when reloads fail, automatically creating sheet thumbnails and much more.

## Open Source

qs-jwt is open source software released under the MIT License. You can find the source code on [GitHub](https://github.com/ptarmiganlabs/qs-jwt).

## Sponsored by Ptarmigan Labs

qs-jwt is sponsored by Ptarmigan Labs, a Swedish consulting company specialising in advanced Qlik Sense development. More info at [ptarmiganlabs.com](https://ptarmiganlabs.com) where you can also [sign up for the newsletter](https://ptarmiganlabs.com/#/portal/signup) that will give all Qlik related updates straight to your inbox.
