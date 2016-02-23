$(document).ready(function() {
    $('article img').addClass("img-responsive center-block");

    hljs.initHighlightingOnLoad();

    $('.tablesorter').tablesorter({
        theme: 'bootstrap',
        headerTemplate: '{content} {icon}',
        cssIconAsc: 'fa fa-sort-asc',
        cssIconDesc: 'fa fa-sort-desc',
        cssIconNone: 'fa fa-sort'
    });
});
