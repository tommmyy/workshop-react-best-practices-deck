# DCL components

## Missing Intl

- At least the textatation is best to keep in separate files
- The best is use React-intl or other intl library

## Usage of `let`

- `Clickable.web.js`

## Usage of `switch` without block scope

```js
// bad
switch (a) {
  case "a": 
   b = 1; 
   break; 

  case "b": 
   b = 2; 
   break; 
} 

// good
switch (a) {
  case "a":  {
   b = 1; 
   break; 
  }
  case "b":  {
   b = 2; 
   break; 
  }
} 

// best
const resolveB = a => {
  switch (a) {
    case "a":  {
      return 1;
    }
    case "b":  {
      return 2;
    }
    default: {
      return -1;
    }
  }
}
```
Why: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Block-scope_variables_within_switch_statements
Where: `Clickable.web.js`

## Nested components

```
// Consider:
import { Filter, FilterHeading } from '@vf-dcl/dcl-components;

<Filter>
  <FilterHeading />
</Filter>

// instead of
import { Filter } from '@vf-dcl/dcl-components;

<Filter>
  <Filter.Heading />
</Filter>
```

Where: `Filter.web.js`

## Naming

```js
import React from 'react';
const [a, setA] = React.useState(isOpen);

//

import { useState } from 'react';
const [a, setA] = React.useState(isOpen);
```
Where: `Overlay.web.js`

```js
const [isOpened, toggle] = useState(isOpen);

// 

const [isOpened, setIsOpened] = useState(isOpen);
```
Where: `Overlay.web.js`

