
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
    console.log("save customer");
    let cusId = parseInt(lastId)+1;
    let name = $("#txtCustomerName").val();
    let pswd = $("#txtCustomerPassword").val();
    let mail = $("#txtCustomerMail").val();
    let address = $("#txtCustomerAddress").val();
    let contact = $("#txtCustomerContact").val();
    let nic = $("#NIC").val();
    let licence = $("#licence").val();

    alert(pswd);

    var customer = {
        id : cusId,
        name : name,
        pswd : pswd,
        mail : mail,
        address : address,
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

