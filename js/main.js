$(document).ready(function () {
    /* disable all button by default */
    $("#ebtn").addClass('disabled').removeAttr("href");
    $("#addbtn").addClass('disabled').removeAttr("href");
    $("#pnext").addClass('disabled').removeAttr("href");
    $("#enext").addClass('disabled').removeAttr("href");
    $("#stusubmit").addClass('disabled').removeAttr("href");

    /* blur validation */
    $("input[type=text],input[type=date],input[type=password],input[type=number],#exampleStudentgender").blur(function () {
        if ($("#exampleFirstName").val() !== "" && $("#exampleLastName").val() !== "" && $("#exampleGuardianName").val() !== "" && $("#exampleGuardianOccupation").val() !== "" && $("#exampleStudentNumber").val() !== "" && $("#exampleGuardianNumber").val() !== "" && $("#exampleStudentDOB").val() !== "" && $("#exampleStudentBlood").val() !== "" && $("#exampleStudentgender").val() !== "") {
            $("#ebtn").removeClass('disabled').attr('href', '#education');
            $("#pnext").removeClass('disabled').attr('href', '#education');
        }
        else {
            $("#ebtn").addClass('disabled').removeAttr('href');
            $("#pnext").addClass('disabled').removeAttr('href');
        }
    });
    $("#exampleClass, #exampleShift, #exampleGroup, #exampleSection").blur(function () {
        if ($("#exampleClass").val() !== "" && $("#exampleShift").val() !== "" && $("#exampleSection").val() !== "" && $("#exampleGroup").val() !== "") {
            $("#addbtn").removeClass('disabled').attr('href', '#address');
            $("#enext").removeClass('disabled').attr('href', '#address');
        }
        else {
            $("#addbtn").addClass('disabled').removeAttr('href');
            $("#enext").addClass('disabled').removeAttr('href');
        }
    });
    $("input[type=text],input[type=date],input[type=password],input[type=number]").blur(function () {
        if ($("#exampleHouseNumber").val() !== "" && $("#exampleAreaName").val() !== "" && $("#examplePostOffice").val() !== "" && $("#exampleDistrict").val() !== "" && $("#examplePoliceStation").val() !== "" && $("#exampleVillage").val() !== "" && $("#exampleVPostOffice").val() !== "" && $("#exampleVPoliceStation").val() !== "" && $("#exampleVDistrict").val() !== "") {
            $("#stusubmit").removeClass('disabled').attr('href', '#address');
        }
        else {
            $("#stusubmit").addClass('disabled').removeAttr('href');
        }
    });

    /* blur validation ends here */

    /* code of next or previous  */
    $('#pbtn').click(function () {
        $('#eCard').hide();
        $('#addCard').hide();
        $('#pCard').show();
    });
    $('#pnext').click(function () {
        $('#eCard').show();
        $('#addCard').hide();
        $('#pCard').hide();
    });
    $('#ebtn').click(function () {
        $('#eCard').show();
        $('#addCard').hide();
        $('#pCard').hide();
    });
    $('#addbtn').click(function () {
        $('#eCard').hide();
        $('#addCard').show();
        $('#pCard').hide();
    });
    $('#enext').click(function () {
        $('#eCard').hide();
        $('#addCard').show();
        $('#pCard').hide();
    });
    $('#eback').click(function () {
        $('#eCard').hide();
        $('#addCard').hide();
        $('#pCard').show();
    });
    $('#addback').click(function () {
        $('#eCard').show();
        $('#addCard').hide();
        $('#pCard').hide();
    });

    var fname = '', lname = '', gname = '', goccup = '', sphone = '', gphone = '', sdob = '', sblood = '', sgender = '';
    var sclass = '', ssection = '', sgroup = '', sshift = '';
    var shouseNumber = '', sareaName = '', sPostOffice = '', sDistrict = '', sPoliceStation = '';
    var svillage = ''; sVPostOffice = '', sVpoliceStation = '', sVdistrict = '';
    var preAdd='', perAdd='';
    $('#stusubmit').click(function () {
        /* Personal information initialization */
        fname = $("#exampleFirstName").val();
        lname = $("#exampleLastName").val();
        gname = $("#exampleGuardianName").val();
        goccup = $("#exampleGuardianOccupation").val();
        sphone =$("#exampleStudentNumber").val();
        gphone = $("#exampleGuardianNumber").val();
        sdob = $("#exampleStudentdDOB").val();
        sblood = $("#exampleStudentdBlood").val();
        sgender = $("#exampleStudentgender").val();

        /* Educational Information Initialization */

        sclass = $("#exampleClass").val();
        ssection = $("#exampleSection").val();
        sgroup = $("#exampleGroup").val();
        sshift = $("#exampleShift").val();

        /* Present Address Initialization */
        shouseNumber = $("#exampleHouseNumber").val();
        sareaName = $("#exampleAreaName").val();
        sPostOffice = $("#examplePostOffice").val();
        sDistrict = $("#exampleDistrict").val();
        sPoliceStation =$("#examplePoliceStation").val();

        /* Permanent Address Initialization */

        svillage = $("#exampleVillage").val();
        sVPostOffice = $("#exampleVPostOffice").val();
        sVpoliceStation = $("#exampleVPoliceStation").val();
        sVdistrict = $("#exampleVDistrict").val();

        /* Present address initialization with comma */
        preAdd =  [shouseNumber,sareaName,sPostOffice,sPoliceStation,sDistrict].join(",");

        /* Permanent address initialization with comma */

        preAdd =  [svillage,sVPostOffice,sVpoliceStation,sVdistrict].join(",");

    });

});