const BrandService = function () {
    const backendUri = 'https://api.cloud.gcp.prod.sleeksys.com';

    this.findAll = function () {
        return new Promise(function (resolve, reject) {
            new HttpUtils().getJSON(
                backendUri + '/consumer-mind/brands',
                function (response) {
                    if (response !== null) {
                        // successful
                        resolve(response);
                    } else {
                        // fail
                        reject();
                    }
                }
            )
        });
    };

    this.findReviewsByBrand = function (brandId) {
        // TODO: implements the method analog zu findAll() using the link below.
        const url = backendUri + 'https://api.cloud.gcp.prod.sleeksys.com/consumer-mind/reviews/brand/' + brandId + '/comments';
        return new Promise(function (resolve, reject) {
            new HttpUtils().getJSON(
                url, function (response) {
                    if (response !== null) {
                        // successful
                        resolve(response);
                    } else {
                        // fail
                        reject();
                    }

                }
            )

        })
    };
};

const BrandRender = function () {
    const brands = [];
    const reviews = [];

    let renderTableBrands = function (list) {
        let table = document.querySelector('table#table-brands tbody');        
        // clear table rows
        table.innerHTML = '';

        // fill table rows
        list.forEach(function (item) {
            /** TODO: print brand properties in cells.
             * Check the console output at line 68 to match the properties of a Brand.
             */
            /** TODO: the brand ID must be clickable. On click load brand comments
             *  (using the brand id) and display the results in the related table.
             */

            table.innerHTML += '<tr>'
                + '<td>' + item.id + '</td>'
                + '<td>' + item.name + '</td>'
                + '<td>' + item.nameShort + '</td>'
                + '<td>' + item.evaluationCategory + '</td>'
                + '<td>' + item.country + '</td>'
                + '<td>' + item.city + '</td>'
                + '<td>' + item.address + '</td>'
                + '<td>' + item.website + '</td>'
                + '<td>' + item.facebook + '</td>'
                + '</tr>';
                brands.push(item);
        });
        
        
    };


    let renderTableComments = function (list) {
        let table = document.querySelector('table#table-comments tbody');
        
        // clear table rows
        table.innerHTML = '';
    };

    let onSearchFormSubmit = function (e) {
        const map_brands = [];
        const data = new FormData(e.target);
        const entries = Object.fromEntries(data);
        brands.forEach(function(entry){
            if (entry.name.includes(entries.key)
                ||entry.nameShort.includes(entries.key)
                ||entry.nameShort.includes(entries.key)
                ||entry.city.includes(entries.key)
                ||entry.address.includes(entries.key)){
                map_brands.push(entry); 
            }
        });
        renderTableBrands(map_brands);
        // console.log(map_brands);
        // TODO: search in list fields
    };


    let getBrands = function () {
        new BrandService()
            .findAll()
            .then(
                function (brands) {  // request succeed
                    // TODO: update variable brands
                    renderTableBrands(brands);  
                },

                function () {    // request failed
                    // TODO: update variable brands
                    alert("could not load the brands");
                    // TODO: could not load brands. Show error message in Alert box
                },
            );
    };

    let getBrandReviewComments = function (brandId) {
        new BrandService()
            .findReviewsByBrand()
            .then(
                function (reviews) {  // request succeed
                    // TODO: update variable reviews
                    renderTableComments(reviews);
                    console.log(reviews);

                },
                function () {    // request failed
                    // TODO: update variable reviews
                    // TODO: could not load reviews. Show error message
                },
            );
    };

    this.build = function () {
        getBrands();

        document.getElementById('formSearch').onsubmit = function (e) {
            e.preventDefault();
            onSearchFormSubmit(e);
        };

        document.getElementById("id_brand").addEventListener('click', e =>{
            e.preventDefault();
            renderTableComments();
        });

    };
}

new BrandRender().build();