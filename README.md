# Celestial API

A small TypeScript/Express API serving data about Messier objects. It fetches the catalog from a remote JSON feed and exposes endpoints under `/api/catalog/messier`.

## Requirements

- Node.js 18 or later

## Installation

```bash
npm install
```

## Development

Start the development server with automatic restarts:

```bash
npm run dev
```

The server reads configuration from `.env` and `.env.local` files. By default it listens on `PORT` defined in `.env` and fetches the Messier catalog from the `MESSIER_URL` defined in `.env.local`.

## Endpoints

- `GET /api/catalog/messier` – list all Messier objects
- `GET /api/catalog/messier/:id` – fetch a single object by its Messier number (e.g. `M1`)

## Testing

A simple test written in TypeScript lives in the `tests/` directory. Run all
tests with:

```bash
npm test
```

The command uses Node's built in test runner together with `ts-node` to execute
the `.ts` test files.

## License

ISC
