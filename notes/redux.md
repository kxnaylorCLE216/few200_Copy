# Setting up Redux

## NPM Packages

| Package | Purpose | Command |
|---------|---------|---------|
| @ngrx/store | The Store Service | `npm i @ngrx/store` |
| @ngrx/store-devtools | Developer Tools in Browser | `npm i @ngrx/store-devtools` |
| @ngrx/effects | Effects Processing | `npm i @ngrx/effects` |
| @ngrx/entity | Entity Storage | `npm i @ngrx/entity` |

The documentation for @NGRX is at [https://ngrx.io](https://ngrx.io).

(there are other special purpose packages like `@ngrx/router-store` and `@ngrx/component-state` that are beyond the scope of this course. Worth looking at.)

## Creating the Application State

### Root State

Create a folder in your `/src/app` called `reducers`. In that, create an `index.ts`.

Create a TypeScript interface that describes your state:

```typescript
export interface AppState {

}

```

Export a map of reducer functions called `reducers`:

```typescript
export const reducers = {};
```

It is a good idea to have the reducers by *typed* as an `ActionReducerMap<T>` to catch omissions/typos.

```typescript
export const reducers:ActionReducerMap<AppState> = {};
```

### Hook up the StoreModule in AppModule's Imports

```typescript
@NgModule({
  declarations: [
   // ...
  ],
  imports: [
    // ...
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The `StoreDevToolsModule.instrument()` goes *after* the StoreModule.

## Creating Component / Feature Reducers

For each broad area of cohesive functionality, create another reducer that describes the state and contains a reducer function that will attend to actions that impact that portion of the application state.

For each reducer (a TypeScript module responsible for a portion of application state), create a new file in your the `src/app/reducers` folder.

Generally, we create two different types of reducers. One keeps track of lists of things (Appointments, Songs, Cars), and those are **Entity Set Reducers**, and others (**Scalar Value Reducers**) that are just for holding scalar (single) values. Like `current: 42` for a counter.

You *can* mix them together, but usually it's best to keep them mostly separate. Entity Set Reducers sometimes have scalar values, but Scalar Value Reducers probably should never hold sets of entities.

> **Entity** is a programming term to mean an object that is tracked by an Id of some type, usually in lists of things. This is where "EntityFramework" in .NET gets its name.

### Scalar Value Reducers

Look like this:

```typescript
import { Action } from "@ngrx/store";

// Describe it for TypeScript
export interface CounterState {
  current: number;
}

// What the "state" of this will be when the application starts
const initialState: CounterState = {
  current: 0
}

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return state;
}

```

Reducer functions must be *pure functions* - the output has to be dependent on the input. No API calls, nothing like that. (We do that in Effects)

### Entity Set Reducers

TODO: More on this when we create some.

## Defining Actions

## Defining Selector Functions

## Effects
