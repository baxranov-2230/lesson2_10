var cars = [];
var summa = 0;
var id = 1;

function addCar() {
    var carName = document.getElementById("avtoName").value;
    var carColor = document.getElementById("avtoColor").value;
    var carPrice = document.getElementById("avtoPrice").value;

    if (carName != '' && carColor != '' && carPrice != '') {
        var obj = {
                i: id,
                name: carName,
                price: carPrice,
                color: carColor
            }
        ;
        cars.push(obj);
        id++;
        draw();
    } else {
        alert("Malumot to'liq emas");
    }
}

function draw() {
    var tr = '';
    summa = 0;
    for (var i = 0; i < cars.length; i++) {
        tr += "<tr>" +d
            "<td>" + (i + 1) + "</td>" +
            "<td>" + cars[i].name + "</td>" +
            "<td>" + cars[i].color + "</td>" +
            "<td>" + cars[i].price + "</td>" +
            "<td>" +
            "<button type='button' class='btn btn-danger' onclick='deleteCar(" + cars[i].i + ")'>&times;</button>" +
            "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#edit' onclick='openModal(" + cars[i].i + ")'>Update</button>" +
            "</td>" +
            "</tr>";

        summa += parseFloat(cars[i].price);
    }
    document.getElementById("tbody").innerHTML = tr;
    document.getElementById("summa").innerHTML = summa;
}

function deleteCar(id) {
    console.log(id);
    cars.forEach((item, index, array) => {
        if (item.i == id) {
            cars.splice(index, 1);
        }
    });
    if (cars.length !== 0) {
        draw();
    } else {
        var tr = "<tr><td colspan='5'><h1 class='text-center text-muted py-5'>Avtomobillar mavjud emas!</h1></td></tr>";
        document.getElementById("tbody").innerHTML = tr;
        document.getElementById("summa").innerHTML = 0;
    }
}

function openModal(id) {
    cars.forEach((item) => {
        if (item.i == id) {
            document.getElementById("upName").value = item.name;
            document.getElementById("upColor").value = item.color;
            document.getElementById("upPrice").value = item.price;
            document.getElementById("upId").value = item.i;
        }
    })
}


    function saveCar() {
        var upName = document.getElementById("upName").value;
        var upColor = document.getElementById("upColor").value;
        var upPrice = document.getElementById("upPrice").value;
        var upId = document.getElementById("upId").value;

        if(upName !='' && upColor !='' && upPrice !='' && upId !=''){
            var obj = {
                id: upId,
                color: upColor,
                price: upPrice,
                name: upName
            };
            cars.forEach((item,index)=>{
                if(item.i == upId){
                    cars.splice(index,1,obj)
                }
            });
            draw();
        }
    }