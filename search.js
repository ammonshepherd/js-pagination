var params = (new URL(document.location)).searchParams;
var cp = parseInt(params.get('start')); // current page
if (!cp) {
    cp = 1;
}

let tr = 309; // total results
let rpp = 10; // results per page
let pages_list = pagination(tr, cp, rpp);

let url = 'http://localhost:8000/';
const paginate = document.getElementById('paginate'); 

for (n = 0; n < pages_list.length; n++) {
    var num = pages_list[n];

    if (num == "...") {
        paginate.insertAdjacentHTML('beforeend', `<span class="page-link">${num}</span>`);
    } else {
        var start = (num - 1) * rpp;
        if (num == 1){
            start = 1;
        }
        var cpl = '';
        if (start == cp) {
            cpl = " current-page-link";

            // Previous link. 
            if (start > rpp * 5) {
                paginate.insertAdjacentHTML('afterbegin', `<span class="page-link"><a href='${url}?start=${start - rpp}'><< Prev</a></span>`)
            }
            // Next link
            if (start < tr - (rpp * 5) ) {
                paginate.insertAdjacentHTML('afterend', `<div class="page-link next-link"><a href='${url}?start=${start + rpp}'>Next >></a></div>`)
            }
        }
        paginate.insertAdjacentHTML('beforeend', `<span class="page-link${cpl}"><a href='${url}?start=${start}'>${num}</a></span>`);
    }


}


