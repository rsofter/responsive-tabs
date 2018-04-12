var baseUrl = location.href.substring(0, location.href.lastIndexOf("/"));

$(document).ready(function () {
    // load content for the first tab
    var firstTabElement = $('.input:checked');
    loadTabContent(firstTabElement);
    // attach change events on tabs
    $('.input').click(function () {
        var tabElement = $(this);
        // prevent repeated content loading
        if (!tabElement.hasClass('loaded')) {
            loadTabContent(tabElement);
        }
    });
});


/**
 * Loading content for active Tab Element
 * 
 * @param {any} tabElement 
 */
function loadTabContent(tabElement) {
    var tabId = tabElement.attr('id');
    $.ajax({
        url: baseUrl + '/data/' + tabId + '.txt',
        dataType: "html",
        success: function (data) {
            $(".panel[data-tabid='" + tabId + "']").html(data);
            // mark tab as loaded to prevent repeated content loading
            tabElement.addClass('loaded');
        }
    });
}