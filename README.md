# Day 3 — Backend Practice API

This is a beginner backend practice project built with Node.js and Express. Its purpose is to learn how an API receives JSON requests and uses routes for create, read, update, and delete operations. Postman was used to try the endpoints and inspect their responses. This mini-project is for learning, not production use.

## Requirements

- Node.js 18+ and npm
- Git to clone the repository
- Postman (optional) for manual API testing

## Run locally

```bash
git clone <repository-url>
cd <repository-folder>
npm install
npm start
```

Run the commands in the folder containing `package.json`. `npm install` installs Express, which is already listed as a project dependency. The server starts at `http://localhost:3000`.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/create` | Add a user |
| `GET` | `/` | Get all users |
| `PUT` | `/update/:id` | Update a user's `name` and `age` |
| `DELETE` | `/delete/:id` | Delete a user |

Use Postman with the URLs above. For `POST` and `PUT`, select **Body → raw → JSON**. Example body for `POST /create`:

```json
{"id":"1","name":"Rahul","age":20}
```

Postman was used to help build and manually test this API. User data is stored in memory and resets when the server restarts. There is no database, input validation, authentication, or automated test suite.
