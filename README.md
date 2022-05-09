# rupiah-formatter
A number to currency (in rupiah) formatter.

## Getting Started

`npm install --save rupiah-formatter`

import the library :
```javascript
/* how to import and use it */
const rupiahFormatter = require('rupiah-formatter');
```

use a number to currency formatter method :
```javascript
const formatted = rupiahFormatter.formatToString(10000); // Rp10.000,00
```

use a rupiah format to number method :
```javascript
const nominal = rupiahFormatter.formatToNumber('Rp10.000,00'); //100000
```
