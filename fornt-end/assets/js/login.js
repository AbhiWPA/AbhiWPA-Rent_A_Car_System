let baseUrl = "http://localhost:8080/Car_Rental_System_war_exploded/";

var approvedNameList = [];
var approvedPswdList = [];
var approvedCusList = [];
loadAllCustomers();

function loadAllCustomers() {
    $.ajax({
        url: baseUrl+"approvedCustomer",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let AppCus of resp.data) {

                approvedCusList.push(AppCus);
                approvedNameList.push(AppCus.name);
                approvedPswdList.push(AppCus.pswd);



            }
        }

    });


}

function customerLogin() {
    for (let i = 0; i < approvedCusList.length ; i++) {


        let typedName = $("#txtLoginName").val();
        let typedPswd = $("#txtLoginPassword").val();

        let dbName = approvedNameList[i];
        let dbPwsd = approvedPswdList[i];

        if (typedName === dbName && typedPswd === dbPwsd) {

            window.location.href = "../pages/customerDashboard.html";

        }

    }

}

$("#btnCustomerLogin").click(function () {
    customerLogin();

    setCustomerName();
    console.log("customerList "+approvedCusList);
    console.log("NameList "+approvedNameList);
    console.log("PswdList "+approvedPswdList);
});

function setCustomerName() {
    let n2 = $("#txtLoginName").val();
    console.log(n2)
    $("#lblCustomerName").val(n2);
}

