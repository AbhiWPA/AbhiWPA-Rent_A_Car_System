let baseUrl = "http://localhost:8080/Car_Rental_System_war_exploded/";

let vehicles = [];
loadVehicles();

function loadVehicles() {
    $.ajax({
        url: baseUrl+"vehicle",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let v of resp.data) {
                vehicles.push(v);

                var row = '<li><div class="featured-car-card" style="background-color: #1c1c1f!important;"><figure class="card-banner" ><img src="../assets/img/cars/alto.jpg" alt="Suzuki Alto" loading="lazy" width="440" height="300" class="w-100"></figure><div class="card-content" style="background-color: #1c1c1f;"><div class="card-title-wrapper" ><h3 class="h3 card-title"><a href="#">'+v.brand + " " + v.model +'</a></h3><data class="year" value="2021">2021</data></div><ul class="card-list"><li class="card-list-item" style="background-color: #1c1c1f;"><ion-icon name="people-outline"></ion-icon><span class="card-item-text">'+ v.passengers + "Peoples" +'</span></li><li class="card-list-item"><ion-icon name="flash-outline"></ion-icon><span class="card-item-text">'+ v.fuel +'</span></li><li class="card-list-item"><ion-icon name="speedometer-outline"></ion-icon><span class="card-item-text">'+ v.mileage +'</span></li><li class="card-list-item"><ion-icon name="hardware-chip-outline"></ion-icon><span class="card-item-text">'+ v.color +'</span></li></ul><div class="card-price-wrapper"><p class="card-price"><strong>'+ v.dailyRate +'</strong> / Per Day</p><button class="btn fav-btn" aria-label="Add to favourite list"><ion-icon name="heart-outline"></ion-icon></button></div></div></div></li>';
                $("#availableCars").append(row);

                var option = '<option style="color: black;" class="text-black" >'+ v.registerNumber +'</option>';
                $("#cmb").append(option);
            }
            console.log(vehicles);
        }

    });
}