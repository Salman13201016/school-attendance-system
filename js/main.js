$(document).ready(function () {
    /* disable all button by default */
    $("#ebtn").addClass('disabled').removeAttr("href");
    $("#addbtn").addClass('disabled').removeAttr("href");
    $("#pnext").addClass('disabled').removeAttr("href");
    $("#enext").addClass('disabled').removeAttr("href");
    $("#stusubmit").addClass('disabled').removeAttr("href");

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

    /* blur validation */

    $("input[type=text],input[type=date],input[type=password],input[type=number],#exampleStudentgender").blur(function () {
        if ($("#exampleFirstName").val() !== "" && $("#exampleLastName").val() !== "" && $("#exampleGuardianName").val() !== "" && $("#exampleStudentNumber").val() !== "" && $("#exampleGuardianNumber").val() !== "" && $("#exampleStudentDOB").val() !== "" && $("#exampleStudentBlood").val() !== "" && $("#exampleStudentgender").val() !== "") {
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
});