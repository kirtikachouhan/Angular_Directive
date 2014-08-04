/**
 * Created by bkirtika on 7/28/14.
 */
var myapp = angular.module('myapp', []);
myapp.directive('testcase', function () {
    return {
        scope: true,
        restrict: 'A',
        link: function (scope, element, attr) {
            element.on('click', function () {
                var e = angular.element(this).find('ul');
                if(e.css('display') == "none")
                {
                    e.css('display','block');
                }
                else
                {
                    e.css('display','none');
                }
            });
        }
    }
    });