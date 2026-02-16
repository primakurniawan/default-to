# default-value-to

A tiny TypeScript utility to safely transform `undefined` or `null` values into predictable defaults — designed to simplify unit testing and improve branch coverage.

---

## Why This Package?

When mapping API data into strongly typed objects, source data often returns:

- `string | undefined`
- `number | undefined`

To make values safe, we usually write:

```ts
obj?.prop ?? ""
```

or

```ts
obj?.count ?? 0
```

However, in unit tests, using optional chaining (`?.`) creates additional branches that must be covered.

For example:

```ts
obj?.prop ?? ""
```

To achieve full coverage, you must mock:

- `obj` undefined
- `obj` defined but `prop` undefined
- `obj.prop` defined

That increases unnecessary test complexity.

---

## The Solution

`default-value-to` centralizes that nullish handling into a single utility:

```ts
defaultTo(obj?.prop, "")
```

Now your unit tests only need to test:

- value defined
- value undefined

No deep object mocking required.

---

## Installation

```bash
npm install default-value-to
```

---

## Usage

```ts
import { defaultTo } from "default-value-to";

type User = {
  name?: string;
  age?: number;
};

const user = undefined;

const name = defaultTo(user?.name, "");
const age = defaultTo(user?.age, 0);
```

### Resulting Types

```ts
name: string
age: number
```

Never `undefined`.

---

## API

### `defaultTo<T>(value: T, defaultValue: NonNullable<T>): NonNullable<T>`

Returns:

- `value` if not `null` or `undefined`
- `defaultValue` otherwise

---

## Example: Mapping API Data

Before:

```ts
const mapped = {
  name: apiUser?.name ?? "",
  age: apiUser?.age ?? 0
};
```

After:

```ts
const mapped = {
  name: defaultTo(apiUser?.name, ""),
  age: defaultTo(apiUser?.age, 0)
};
```

Cleaner.  
More readable.  
Less test boilerplate.

---

## Designed For

- React projects
- TypeScript projects
- Clean unit test coverage
- API data transformation layers

---

## License

MIT
