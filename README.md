# TypeScript OAuth2.0 Server

[![JSR](https://jsr.io/badges/@malang-dev/oauth2-server)](https://jsr.io/@malang-dev/oauth2-server)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/malang-dev/ts-oauth2-server?style=flat-square)](https://github.com/malang-dev/ts-oauth2-server/releases/latest)
[![GitHub Workflow Status]( https://img.shields.io/github/actions/workflow/status/malang-dev/ts-oauth2-server/build-and-test.yml?branch=main&style=flat-square)](https://github.com/malang-dev/ts-oauth2-server)

`@malang-dev/oauth2-server` is a standards compliant implementation of an OAuth 2.0 authorization server written in TypeScript. Forked from [@jmondi/oauth2-server](https://github.com/malang-dev/ts-oauth2-server)

Requires `node >= 18`. [Read the docs](https://tsoauth2server.com/)

The following RFCs are implemented:

- [RFC6749 "OAuth 2.0"](https://tools.ietf.org/html/rfc6749)
- [RFC6750 "The OAuth 2.0 Authorization Framework: Bearer Token Usage"](https://tools.ietf.org/html/rfc6750)
- [RFC7009 "OAuth 2.0 Token Revocation"](https://tools.ietf.org/html/rfc7009)
- [RFC7519 "JSON Web Token (JWT)"](https://tools.ietf.org/html/rfc7519)
- [RFC7636 "Proof Key for Code Exchange by OAuth Public Clients"](https://tools.ietf.org/html/rfc7636)
- [RFC8693 "OAuth 2.0 Token Exchange"](https://datatracker.ietf.org/doc/html/rfc8693)

Out of the box it supports the following grants:

- [Authorization code grant](https://tsoauth2server.com/docs/grants/authorization_code)
- [Client credentials grant](https://tsoauth2server.com/docs/grants/client_credentials)
- [Refresh grant](https://tsoauth2server.com/docs/grants/refresh_token)
- [Implicit grant](https://tsoauth2server.com/docs/grants/implicit) // not recommended 
- [Resource owner password credentials grant](https://tsoauth2server.com/docs/grants/password) // not recommended

Framework support:

The included adapters are just helper functions, any framework should be supported. Take a look at the adapter implementations to learn how you can create custom adapters for your favorite tool!

- [VanillaJS](https://tsoauth2server.com/docs/adapters/vanilla)
- [Express](https://tsoauth2server.com/docs/adapters/express)
- [Fastify](https://tsoauth2server.com/docs/adapters/fastify). 

Example implementations:

- [Simple](./example)
- [Advanced](https://github.com/malang-dev/ts-oauth2-server-example)