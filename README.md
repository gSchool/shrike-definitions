# Definitions API

> An API for developer terms, topics, and questions

[terms-api.galvanize.network](https://terms-api.galvanize.network)

# API Endpoints

## Authentication

Authentication is only required for write actions.

`POST` requests require `Authorization: Bearer github_access_token`

`GET /auth/login?redirect_url=xxx`

`GET /auth/validate` Requires `Authorization: Bearer github_access_token`

## Terms

`GET /terms`
```
[
  {
    "id": 1,
    "name": "Abstraction"
  },
  ...
]
```

`GET /terms/1`
```
{
  "id": 1,
  "name": "Abstraction"
}
```

`GET /terms/1/topics`
```
[
  {
    "id": 13,
    "name": "Design Patterns"
  },
  ...
]
```

## Topics

`GET /topics`
```
[
  {
    "id": 1,
    "name": "AJAX"
  },
  ...
]
```

`GET /topics/1`
```
{
  "id": 1,
  "name": "AJAX"
}
```

`GET /topics/1/terms`
```
[
  {
    "id": 1,
    "name": "Abstraction"
  },
  ...
]
```

# Dev Setup

- `npm install`
- `createdb definitions`
- `knex migrate:latest`
- `knex seed:run`

To support Auth, add `.env` with the keys from a Github App:

```
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx
```

The Github App will need `read:org` scope.

# Running

- `nodemon`
- `npm start`

Runs on `http://localhost:3001`


# Deployment

## Database: Heroku

Setup your local `.env` file with the `DATABASE_URL` from Heroku, then run:

```
npm run migrate:production
npm run seed:production
```

## Hosting: Now

Deployed URL: [terms-api.galvanize.network](https://terms-api.galvanize.network)

```
now
now -e DATABASE_URL=@definitions-database-url GITHUB_CLIENT_ID=@definitions-github-client GITHUB_CLIENT_SECRET=@definitions-github-secret
now alias domain terms-api.galvanize.network
```
