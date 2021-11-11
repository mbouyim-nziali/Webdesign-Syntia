function Main() {
    /**
     * @type {{company: string, sender: string, developer: string, phone: string}[]}
     */
    let list = [];

    let renderList = function(customList) {
        let table = document.querySelector('table tbody');

        // clear table rows
        table.innerHTML = '';

        // fill table rows
        const rows = customList ? customList : list;
        rows.forEach(function(item) {
            table.innerHTML += '<tr>'
                + '<td>' + item.company + '</td>'
                + '<td>' + item.sender + '</td>'
                + '<td>' + item.developer + '</td>'
                + '<td>' + item.phone + '</td>'
                + '</tr>';
        });
    };

   
    let addEntryToList = function(entry) {
        // TODO: company's name must be unique. Check for duplicate in list and abort operation with alert

       for (let index = 0; index < list.length; index++) {
           const tmp = list[index];
           if (tmp.company === entry.company){
                alert("company's name must be unique.");
                // document.getElementById("info").classList.remove("hide");
                return false;
            }
         // TODO: developer   's name must be unique. Check for duplicate in list and abort operation with alert  
            if (tmp.developer === entry.developer){
                alert("developer's name must be unique.");
                // document.getElementById("info").classList.remove('hide');
                return false;
            }  
            // TODO: phone's value must be unique. Check for duplicate in list and abort operation with alert  

            if (tmp.phone === entry.phone){
                alert("phone's name must be unique.");
                // document.getElementById("info").classList.remove('hide');
                return false;
            }    
        }     
        list.push(entry);
        
    };

    let myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", e => {
        e.preventDefault();
        searchInList();
        
    });
    
   

    let searchInList = function(key) {
        /**
         * TODO: search in list fields (company, sender, developer, phone)
         * and save matches in the variable 'mapList'
         */
        let mapList = [];

        key = document.getElementById("key").value.toLowerCase();

        list.forEach(function(entry) {
            if (entry.company.toLowerCase().includes(key)
                || entry.sender.toLowerCase().includes(key)
                || entry.developer.toLowerCase().includes(key)
                || entry.phone.toLowerCase().includes(key)) {
                mapList.push(entry);
            }
        });
    
        renderList(mapList); 
        // return mapList;

    };


    let td = document.getElementsByTagName("td");
    for (let index = 0; index < td.length; index++) {
        td[index].addEventListener("click", items(index))
    }
    function items(index) {
        return function () {
            console.log(index);
            sortTable(index);
        }
        
    }

    function sortTable(index) {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[index];
            y = rows[i + 1].getElementsByTagName("TD")[index];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
    }
 
    
    


    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    form.addEventListener("reset", (e) => {
        console.log(e);
    });

    let onFormSubmit = function() {
        
        let company = document.getElementById("company").value;
        let sender = document.getElementById("sender").value;
        let developer = document.getElementById("developer").value;
        let phone = document.getElementById("phone").value;

        // Value of 'company' contains 5 up to 20 characters

        if (company === '' || company == null) {
            alert("Company can't be blank");
            // document.getElementById("info").classList.remove('hide');
            return false;
        } else if (company.length < 5 || company.length > 20) {
            alert("company muss be contains 5 up to 20 characters.");
            // document.getElementById("info").classList.remove("hide");
            return false;
        } 
        
        // Value of 'sender' contains up to 11 characters.

        if (sender === "" || sender == null) {
            alert("sender can't be blank");
            // document.getElementById("info").classList.remove("hide"); 
            return false;
        } else if (sender.length > 11){
            alert("sender may have no more than 11 characters");
            // document.getElementById("info").classList.remove("hide");
            return false;
        }

        // Value of 'developer' contains 5 up to 25 characters.

        if (developer === "" || developer == null) {
            alert("developer can't be blank");
            return false;
        } else if (developer.length < 5 || developer.length > 25) {
            alert("developer muss be contains 5 up to 25 characters. ");
            // document.getElementById("info").classList.remove("hide");
            return false;
        }

        // Value of 'phone' is numeric and prefixed by 237.

        if (isNaN(phone) || !phone.match(/(\+237|237)/)) {
            alert("phone muss be a number and prefixed by 237");
            // document.getElementById("info").classList.remove("hide");
            return false;
        }

        addEntryToList({
            company: company,
            sender: sender,
            developer: developer,
            phone: phone
        });

        renderList();
    };

    

    this.build = function() {
        renderList();
    };

    return this;
}

new Main().build();
