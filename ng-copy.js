angular.module('ng-copy', [])
    .directive('copy', function ($timeout) {
        return {
            restrict: 'A',
            scope   : {
                copy: '='
            },
            link    : function (scope, element, attrs) {
                ZeroClipboard.config({swfPath: getJsDir('zeroclipboard') + '/ZeroClipboard.swf'});

                new ZeroClipboard(element, {forceEnhancedClipboard: true});

                var id       = '_' + Date.now(),
                    textarea = document.createElement('textarea');

                $(element).attr('data-clipboard-target', id);

                textarea.id            = id;
                textarea.style.display = 'none';
                document.body.appendChild(textarea);

                scope.$watch('copy', function (newVal) {
                    textarea.innerHTML = newVal;
                }, true);
            }
        }
    });


function getJsDir (src) {
    var script = null;

    if (src) {
        script = [].filter.call(document.scripts, function (v) {
            return v.src.indexOf(src) !== -1;
        })[0];
    } else {
        script = document.scripts[document.scripts.length - 1];
    }

    if (!script) return null;

    return script.src.substr(0, script.src.lastIndexOf('/'));
}


