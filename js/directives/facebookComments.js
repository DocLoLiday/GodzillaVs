app.directive('facebookComments', function () {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width = attrs.width || '100%';

                elem.html(createHTML(href, numposts, colorscheme, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});