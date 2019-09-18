# JS pagination

Just a little method that helps create pagination links for a website.


Returns an array of page numbers between one (1) and a given end number,
returning a maximum of 10 numbers, with missing ranges replaced with elipses
(which are included in the maximum return count). A 'current page' is supplied,
and the current page number is surrounded by the two sequential numbers before
and after.

The number of numbers to return is determined by the total number of
results to expect divided by the number of results to display per page.  This
is further affected by the current page displayed. Possible outcomes of the
function could look like so:

[1, 2, 3, 4, 5, 6, 7, '...', 44, 45]        // 1-7 is the current page
[1, 2, 3, '...', 7, 8, 9, 10, 11, 12]       // 2 is the current page
[1, 2, '...', 10, 11, 12, '...', 44, 45]    // 8-39 is the current page
[1, 2, '...', 33, 34, 35, 36, 37, 38, 39]   // 33-39 is the current page

The function takes three parameters:

- total_results (Required: The total number of results to expect, the end number.)
- start_number (Required: The value/start number of the page currently displayed.)
- results_page (Optional: The number of results to show for each page. Defaults to 10.)

The function returns an array containing the range numbers that can be turned
into links..

This code is modified from this [FreeCodeCamp article](https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/). 

# Usage

To use this function, put a link tag in the HTML page where it should be used.
It should go at the bottom of the HTML page.

  ```
  <script src="pagination.js" type="text/javascript"></script>
  </body>
  </html>
  ```

For clarity sake, make a second JS file to put the code to transform the array
into links.

  ```
  <script src="pagination.js" type="text/javascript"></script>
  <script src="search.js" type="text/javascript"></script>
  </body>
  </html>
  ```
Calling the function in the search.js script is simple, just pass the
parameters in and assign it to a variable name.

  ```
  let tr = 309; // total results
  let rpp = 10; // results per page
  let pages_list = pagination(tr, cp, rpp);
  ```

# Example

A working example is included with these files. The easiest way to see it
working is start a local webserver in this directory. Here's an example with
Python 3.x

`python -m http.server`

Then point a browser to `http://localhost:8000`
