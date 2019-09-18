/**
 * pagination()
 *
 * Returns an array of page numbers between one (1) and a given end number,
 * returning a maximum of 10 numbers, with missing ranges replaced with elipses
 * (which are included in the maximum return count). A 'current page' is
 * supplied, and the current page number is surrounded by the two sequential
 * numbers before and after.
 *
 * The total number of numbers to return is determined by the total number
 * of results to expect divided by the number of results to display per page.
 * This is further affected by the current page displayed. Possible outcomes of
 * the function could look like so:
 *
 * [1, 2, 3, 4, 5, 6, 7, '...', 44, 45]        // 1-7 is the current page
 * [1, 2, 3, '...', 7, 8, 9, 10, 11, 12]       // 2 is the current page
 * [1, 2, '...', 10, 11, 12, '...', 44, 45]    // 8-39 is the current page
 * [1, 2, '...', 33, 34, 35, 36, 37, 38, 39]   // 33-39 is the current page
 *
 * @param {number} total_results (Required: The total number of results to
 *    expect, the end number.)
 *
 * @param {number} start_number (Required: The value/start number of the page 
 *    currently displayed.)
 *
 * @param {number} results_page (Optional: The number of results to show for
 *    each page. Defaults to 10.)
 *
 * @return {array} (An array containing the range numbers.)
 *
 * @throws {TypeError} (If any parameter is not a finite number.)
 * @throws {Error} (If any parameter is not a positive number.)
 *
 * modified from: https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
 */
function pagination(total_results, start_number, results_page = 10) {
    // Test that the first 3 arguments are finite numbers.
    // Using Array.prototype.every() and Number.isFinite().
    const allNumbers = [total_results, results_page, start_number].every(Number.isFinite);

    // Throw an error if any of the first 3 arguments is not a finite number.
    if (!allNumbers) {
        throw new TypeError('pagination() expects only finite numbers as arguments.');
    }

    // Ensure the step is always a positive number.
    if (total_results <= 0) {
        throw new Error('total_results must be a number greater than 0.');
    }
    if (results_page <= 0) {
        throw new Error('results_page must be a number greater than 0.');
    }
    if (start_number < 0) {
        throw new Error('start_number must be a number greater than or equal to 0.');
    }

    // Determine the length of the array to be returned, which is the total
    // results divided by the number of results per page.
    const length = Math.ceil(Math.abs(total_results / results_page));

    // 10 pages or less, just return the array
    if (length <= 10 ) {
        // Fill up a new array with the range numbers
        // using Array.from() with a mapping function.
        let full_array = Array.from(Array(length), (x, index) => index + 1);
        return full_array
    }
  
    let current_page = (start_number / results_page) + 1;
    if (start_number == 1){
        current_page = 1;
    }

    let pages = new Array();
    for (i = 1; i <= length; i++) {
        // If the current page is 7 or less, show pages 1-7, then ellipses, then
        // the last two pages
        if ( (current_page < 7 ) && (i < 7) ) {
            pages.push(i);
            continue;
        }

        if ( (i == 8) && (current_page < 6) ) {
            pages.push('...');
            continue;
        }


        // if the current page is within six places of the last page, show the
        // last six pages.
        if ( (current_page > length - 5) && (i > length - 5) ) {
            pages.push(i);
            continue;
        }

        if ( (i == length - 6) && (current_page > length - 4) ) {
            pages.push('...');
            continue;
        }


        // Show the first two pages, the current page surrounded by a page and
        // ellispses, then the last two pages
        if (i < 3) {
            pages.push(i);
        } else if (i == current_page - 1) {
            pages.push('...');
            pages.push(i);
        } else if (i == current_page) {
            pages.push(i);
            continue;
        } else if ( (i == current_page + 1) && (current_page < length - 3) ) {
            pages.push(i);
            pages.push('...');
        }

        if ( (i == length - 1) || (i == length) ) {
            pages.push(i);
        }

    }

    return pages;
}


