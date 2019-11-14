var opt_1 = new Array("Milk", "Meat", "Vegetables");
var opt_2 = new Array("PickUp", "Minivan", "4x4");
var opt_3 = new Array("Cellphones", "Tablets", "Laptops");

var Food_1= new Array("Leyde", "Sula", "Pascual");
var Food_2 = new Array("Angus", "Western", "TheCow");
var Food_3 = new Array("K-rrot", "Greeny", "Cabbagge");
var Car_1 = new Array("Ford", "Honda", "Chevrolet");
var Car_2 = new Array("CHERY", "Chevrolet", "FAW");
var Car_3 = new Array("Land Rover", "Mitsubichi", "Jeep");
var Dev_1 = new Array("Samsung", "Huawei", "Xiomi");
var Dev_2 = new Array("Iphone", "Toshiba", "Samsung");
var Dev_3 = new Array("ASUS", "DELL", "Lenovo");


function changeProduct() {
    var selection;
    selection = document.DataSelect.Categories[document.DataSelect.Categories.selectedIndex].value;
    if (selection != 0) {
        var mis_opts = eval("opt_" + selection);
        var num_opts = mis_opts.length;
        document.DataSelect.Product.length = num_opts;
        for (i = 0; i < num_opts; i++) {
            document.DataSelect.Product.options[i].value = mis_opts[i];
            document.DataSelect.Product.options[i].text = mis_opts[i];
        }

    } else {
        document.DataSelect.Product.length = 1;
        document.DataSelect.Product.options[0].value = "-";
        document.DataSelect.Product.options[0].text = "-";
    }
    document.DataSelect.Product.options[0].selected = true;
    
}


function changeBrand() {
    var selecProd;
    var selection = document.DataSelect.Categories[document.DataSelect.Categories.selectedIndex].value;
    selecProd = document.DataSelect.Product[document.DataSelect.Product.selectedIndex].value;
            if (selecProd != 0 ) {
                var mis_opts = eval("Food_" + selecProd);
                var num_opts = mis_opts.length;
                document.DataSelect.Brand.length = num_opts;
                for (i = 0; i < num_opts; i++) {
                    document.DataSelect.Brand.options[i].value = mis_opts[i];
                    document.DataSelect.Brand.options[i].text = mis_opts[i];
                }
            } else {
                document.DataSelect.Brand.length = 1;
                document.DataSelect.Brand.options[0].value = "-";
                document.DataSelect.Brand.options[0].text = "-";
            }
    document.DataSelect.Brand.options[0].selected = true;
    
    
}
new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.

    data:
        [
            { Branch: 'Text1', value: 0 },
            { Branch: 'Text2', value: 0 },
            { Branch: 'Text3', value: 0 },
        ],
    // The name of the data record attribute that contains x-values.
    xkey: 'Branch',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
function changeGraph(mango){
switch (mango) {
    case 0:
        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.

            data:
                [
                    { Branch: 'Text1', value: 0 },
                    { Branch: 'Text2', value: 0 },
                    { Branch: 'Text3', value: 0 },
                ],
            // The name of the data record attribute that contains x-values.
            xkey: 'Branch',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
        });
        break;
    case 1:
        new Morris.Bar({
            element: 'myfirstchart',
            data:
                [
                    { Branch: 'Meat', value: 19 },
                    { Branch: 'Milk', value: 21 },
                    { Branch: 'Vegetables', value: 11 },
                ],
            xkey: 'Branch',
            ykeys: ['value'],
            labels: ['Value']
        });
        break;
    case 2:
        new Morris.Bar({
            element: 'myfirstchart',
            data:
                [
                    { Branch: 'PikUp', value: 5 },
                    { Branch: 'Minivan', value: 10 },
                    { Branch: '4x4', value: 13 },
                ],
            xkey: 'Branch',
            ykeys: ['value'],
            labels: ['Value']
        });
        break;
    case 3:
        new Morris.Bar({
            element: 'myfirstchart',
            data:
                [
                    { year: 'Cellphones', value: 20 },
                    { year: 'Tablets', value: 10 },
                    { year: 'Laptops', value: 5 },
                ],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        });
        break;
}

}