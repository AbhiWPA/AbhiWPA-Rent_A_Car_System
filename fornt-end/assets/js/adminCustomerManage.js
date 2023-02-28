let baseUrl = "http://localhost:8080/Car_Rental_System_war_exploded/";

loadAllCustomers();

let no =0;
function loadAllCustomers() {
    $("#tblCustomer").empty();
    $.ajax({
        url: baseUrl+"customer",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let cus of resp.data) {
                var row = '<tr><td>' + no+1 + '</td><td>' + cus.id + '</td><td>' + cus.name + '</td><td>' + cus.mail + '</td><td>' + cus.address + '</td><td>' + cus.contact + '</td><td>' + cus.nic + '</td></tr>';;
                $("#adminCustomerTable").append(row);
            }
            // bindRowClickEvents();
            // setTextFieldValues("","","","");
            // $("#txtCustomerID").focus();
        }
    });

}