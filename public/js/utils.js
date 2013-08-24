var thaisa = {};

(function ($) {

thaisa.initCurrentOfficers = function () {
    var officersPerRow = 3;
    var chunkedOfficersArr = _divideArr(people.currentOfficers, officersPerRow);
    $.each(chunkedOfficersArr, function (index, officersArr) {
        var $officersRow = $("<div class='row-fluid officers-row'>");
        $.each(officersArr, function (index, officer) {
            $officersRow.append(_currentOfficerContent(officer, officersPerRow));
        });
        $(".current-officers-content").append($officersRow);
    });
};

var _currentOfficerContent = function (officer, span) {
    var spanClass = "span" + 12/span;

    var $officer = $("" +
    "<div class='" + spanClass + " officer'>" +
        "<div class='officer-picture'></div>" +
        "<div class='officer-content'>" +
            "<div class='text officer-name'>" + officer.name + "</div>" +
            "<div class='text officer-position'>" + officer.position + "</div>" +
            "<div class='text officer-subtitle'>" + officer.major + " " + officer.year + "</div>" +
            "<div class='text officer-description'>" + officer.description + "</div>" +
        "</div>" +
    "</div>");

    $officer.find(".officer-picture").css("background-image", "url('" + officer.picture + "')");
    return $officer;
};

// var _initPastOfficersMenu = function(years) {
//     var $pastMenu = $("<div class='year-menu'>");
//     $.each(years, function (index, year) {
//         $pastMenu.append(_pastMenuElement(year));
//     });
//     $(".year-menu-container").html($pastMenu);

//     $(".top-link").click(function() {
//         thaisa.scrollTo($(".menu-bar"));
//     })
// };

thaisa.scrollTo = function($element, speed) {
    var speed = speed || 400;
    $("html, body").animate({
        scrollTop: $element.offset().top
    }, speed);
};

// var _pastMenuElement = function(year) {
//     var $menuElement = $("<div class='year-link'>" + year + "</div>");
//     $menuElement.click(function () {
//         thaisa.scrollTo($("[data-year='" + year + "']"));
//     });
//     return $menuElement;
// };

thaisa.initPastOfficers = function() {
    var years = [];
    $.each(people.pastOfficers, function (index, yearData) {
        $(".past-officers-content").append(_pastYearHeader(yearData.year))
            .append(_pastYearContent(yearData));
        years.push(yearData.year);
    });
    _initPastOfficersMenu(years);
};

var _pastYearContent = function (yearData) {
    var pastPrimaryOfficer = yearData.officers.shift();
    console.log(pastPrimaryOfficer);
    var leftHTML = _pastLeftContent(pastPrimaryOfficer);
    var rightHTML = _pastRightContent(yearData);
    var $leftContent = $(leftHTML);
    var $rightContent = $(rightHTML);
    $leftContent.find(".past-primary-picture").css("background-image", "url('" + pastPrimaryOfficer.picture + "')");

    var $content = $("<div>").addClass("row past-year-container")
        .append($leftContent)
        .append($rightContent)

    return $content;
};

var _pastYearHeader = function(year) {
    var $header = $("" +
    "<div class='year-header' data-year='" + year + "'>" + year +
        "<span class='top-link'>(top)</span>" +
    "</div>");
    return $header;
};

var _pastLeftContent = function(pastPrimaryOfficer) {
    return "" +
    "<div class='span3 past-left-container'>" +
        "<div class='left-content'>" +
            "<div class='past-primary-picture'></div>" +
            "<div class='past-primary-name'>" + pastPrimaryOfficer.name + "</div>" +
            "<div class='past-primary-position'>" + pastPrimaryOfficer.position + "</div>" +
        "</div>" +
    "</div>";
};

var _pastRightContent = function (yearData) {
    var rightHTML = "<div class='span9 past-right-container'>";
    $.each(_divideArr(yearData.officers, 3), function(index, pastRow) {
        rightHTML += "<div class='row-fluid past-officers-row'>";
        $.each(pastRow, function(index, officer) {
            rightHTML += "" +
            "<div class='past-officer span4'>" +
                "<div class='past-officer-name'>" + officer.name + "</div>" +
                "<div class='past-officer-position'>" + officer.position + "</div>" +
            "</div>";
        });
        rightHTML += "</div>";
    });
    return rightHTML + "</div>";
};

var _divideArr = function (arr, chunkLength) {
    var i, j;
    var result = [];
    for (i = 0, j = arr.length; i < j; i += chunkLength) {
        result.push(arr.slice(i, i + chunkLength));
    }
    return result;
};

})(jQuery);
