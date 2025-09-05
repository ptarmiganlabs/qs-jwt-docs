# Introduction

JSON Web Tokens (JWTs) are typically used to authenticate API access. It can be used for other kinds of authentication as well, in a Qlik Sense context it can for example also be used to authenticate a web mashup's access to Sense.

::: danger Remember!
Note that JWTs (when used with Qlik Sense) contain unencrypted information about users and provide access to the Qlik Sense system.

In other words: Qlik Sense JWTs should be treated just like user IDs and password.
:::

A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.

When a server receives a JWT, it can guarantee the data in the JWT can be trusted because it's signed by the source. No middleman can modify a JWT once it's created.

It's important to note that a JWT guarantees data ownership but not encryption. The JSON data you store into a JWT can be seen by anyone that intercepts the token because it's just serialized, not encrypted.

For this reason, it's highly recommended to use HTTPS with JWTs (and HTTPS in general, by the way).

::: tip Did you know?
Not sure how to pronounce it? It's "jot" (like the word "dot" with a "j" in front).
:::

So what does this mean in a Qlik Sense context?
Let's break it down a bit:

- Qlik Sense user credentials and other metadata are embedded in the JWT. Exactly what data is embedded differs a bit between QSEoW and Qlik Sense Cloud.
- Each JWT is configured with an expiry time. It's a good security principle to keep the expiry dates short.
- Additional metadata can be included in the JWT. Example include email address, real name, group belonging, access roles etc. This information is available in Sense security rules (security rules only exist on QSEoW).
- The JWT is not encrypted, but it is cryptographically signed. This means that it's not possible to modify or tamper with the JWT once it's been created.
- JWTs can be used with both client-managed Qlik Sense (=Qlik Sense Enterprise on Windows, QSEoW) as well as Qlik Sense Cloud. The exact format vary though, so those JWTs are not interchangeable.
- Once a tool presents the JWT to a Qlik Sense API, Sense will be able to access the contents of the JWT. If the JWT is used with QSEoW the information embedded in the JWT can be used in security rules.

## JWT pros and cons

Benefits of JWTs include

- The Qlik Sense admin can control which Sense user/account is given API access and how long that access will be valid for.
- The JWT can include any metadata that will then be available in Sense security rules.
- Well-established, proven concept to provide authenticated API access.

Drawbacks of JWTs

- Once created and handed over to someone it's not possible to revoke the JWT. It will simply work until its expiry date has passed or the central certificate is changed. But that would revoke _all_ JWTs created using that certificate/key.
- The revoking issue can be solved, but this requires additional software/services outside of Qlik Sense. Sense itself does not have a built-in revokation service.
- The JWT used with Qlik Sense are not encrypted. This means they can be read by anyone able to listen on the network traffic. Using https goes a long way towards solving this problem.

## Online JWT resources

- [jwt.io](https://jwt.io) is a good starting point for anything JWT related.
- Wikipedia [article on JWTs](https://en.wikipedia.org/wiki/JSON_Web_Token).
- [Blog post](https://blog.logrocket.com/jwt-authentication-best-practices/) explaining how JWTs can be used for authentication
- qlik.dev has good articles about [using JWTs with QSEoW](https://qlik.dev/tutorials/using-qlik-sense-on-windows-repository-api-qrs-with-qlik-cli) as well as with [Qlik Sense Cloud](https://qlik.dev/tutorials/create-signed-tokens-for-jwt-authorization).
- Qlik Sense Enterprise on Windows [help pages](https://help.qlik.com/en-US/sense-admin/May2025/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/QSEoW/Administer_QSEoW/Managing_QSEoW/JWT-authentication.htm) has a good description of JWT authentication within QSEoW.
- Qlik article describing how to [set up a JWT enabled virtual proxy](https://community.qlik.com/t5/Knowledge/Qlik-Sense-How-to-set-up-JWT-authentication/ta-p/1716226) in QSEoW.

## What is qs-jwt

JWTs can be created using various online tools.

This can be fine during development and testing, but in production scenarious it's not ideal (should not be accepted - period!) to enter user credentials in some random web page.

If limited to web based JWT tools it is also difficult or impossible to automate creation of JWTs.  
While not a problem for some it may be a showstopper for others, for example if the JWTs are created with short expiry times and/or need to be automatically recreated.

> _The core idea behind qs-jwt is to simplify JWT creation and make it easier to include JWTs in CI/CD pipelines and similar scenarios._
