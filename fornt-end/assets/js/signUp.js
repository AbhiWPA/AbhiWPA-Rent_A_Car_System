
let baseUrl = "http://localhost:8080/Car_Rental_System_war_exploded/";

var lastId;
check();


function check(){
    console.log("in method");
    $.ajax({
        url: baseUrl+'customer',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const idList = [0];
            for (let cus of resp.data) {
                idList.push(cus.id);
            }
            lastId = idList.slice(-1);
            console.log("last id generated"+lastId);
        }
    });
}



$("#btnSignIn").click(function(){
    saveCustomer();
});

function saveCustomer(){
    let cusId = parseInt(lastId)+1;
    let name = $("#txtCustomerName").val();
    let pswd = $("#txtCustomerPassword").val();
    let mail = $("#txtCustomerMail").val();
    let contact = $("#txtCustomerContact").val();
    let nic = $("#NIC").val();
    let licence = $("#licence").val();

    var customer = {
        id : cusId,
        name : name,
        pswd : pswd,
        mail : mail,
        contact : contact,
        nic : nic,
        licence : licence
    }

    console.log(customer);

    $.ajax({
        url: baseUrl+'customer',
        method: 'post',
        contentType:"application/json",
        data:JSON.stringify(customer),
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

// --------------------------Driver-------------------
let lastDriverId;
let dr = "D00";
driverIdGen();

function driverIdGen(){
    console.log("in method");
    $.ajax({
        url: baseUrl+'driver',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const driverIds = [0];
            for (let driver of resp.data) {
                driverIds.push(driver.id);
            }
            lastDriverId = driverIds.slice(-1);
            console.log("last id generated"+lastId);
        }
    });
}

$("#btnDriverSignUp").click(function () {
    saveDriver();
});

function saveDriver() {
    let driverId = dr+parseInt(lastDriverId)+1;
    let driverName = $("#txtDriverName").val();
    let driverMail = $("#txtDriverMail").val();
    let driverPswd = $("#txtDriverPassword").val();
    let driverContact = $("#txtDriverContact").val();
    let driverAddress = $("#txtDriverAddress").val();
    let driverAge = $("#txtDriverAge").val();
    let driverNic = $("#driverNIC").val();
    let driverLicence = $("#driverLicenceDetails").val();

    var driver = {
        id : driverId,
        name : driverName,
        mail : driverMail,
        pswd : driverPswd,
        contact : driverContact,
        address : driverAddress,
        age : driverAge,
        nic : driverNic,
        licence : driverLicence
    }

    console.log(customer);

    $.ajax({
        url: baseUrl+'customer',
        method: 'post',
        contentType:"application/json",
        data:JSON.stringify(driver),
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