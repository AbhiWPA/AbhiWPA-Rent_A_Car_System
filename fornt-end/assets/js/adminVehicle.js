let baseUrl = "http://localhost:8080/Car_Rental_System_war_exploded/";

let lastVehicleId;
vehicleIdGen();
loadAllVehicles();

function vehicleIdGen(){
    console.log("in method");
    $.ajax({
        url: baseUrl+'vehicle',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const vehicleIds = [0];
            for (let vehicle of resp.data) {
                vehicleIds.push(vehicle.id);
            }
            lastVehicleId = vehicleIds.slice(-1);
            console.log("last id generated"+lastVehicleId);
        }
    });
}

$("#btnSaveVehicle").click(function () {
    saveVehicle();
});

function saveVehicle() {
    let vehicleId = parseInt(lastVehicleId)+1;
    let brand = $("#txtVehicleBrand").val();
    let model = $("#txtVehicleModel").val();
    let fuel = $("#cmbFuelType").val();
    let mileage = $("#txtMileage").val();
    let passengers = $("#txtPassengers").val();
    let monthlyRate = $("#txtMonthlyRate").val();
    let DailyRate = $("#txtDailyRate").val();
    let freeMileage = $("#txtFreeMileage").val();
    let extraPrice = $("#txtExtraPrice").val();
    let registerNo = $("#txtRegistrationNumber").val();
    let lastServiceMileage = $("#txtServiceMilage").val();
    let color = $("#txtColor").val();
    let image = $("#carPicture").val();

    var Vehicle = {
        id : vehicleId,
        brand : brand,
        model : model,
        fuel : fuel,
        mileage : mileage,
        passengers : passengers,
        monthlyRate : monthlyRate,
        dailyRate : DailyRate,
        freeMileage : freeMileage,
        extraPrice : extraPrice,
        registerNumber : registerNo,
        lastServiceMileage : lastServiceMileage,
        color : color,
        image : image
    }

    console.log(Vehicle);

    $.ajax({
        url: baseUrl+'vehicle',
        method: 'post',
        contentType:"application/json",
        data:JSON.stringify(Vehicle),
        dataType:"json",
        success: function (res) {
            alert(res.message);
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });
}

function loadAllVehicles() {
    $("#carsDiv").empty();

    var car = '<div class="card" style="max-width: 1000px; max-height: 250px; background: linear-gradient(rgba(245,98,41,0.8), rgba(252,167,34,0.7)); margin-bottom: 10px;"></div>';
}