(function(){angular.module('angular-meteor').run(['$templateCache', function($templateCache) {$templateCache.put("client/parties/views/party-details.ng.html", "Here you will see and change the details of the party: <input ng-model=\"party.name\"> <input ng-model=\"party.description\"> <button ng-click=\"save()\">Save</button> <button ng-click=\"reset()\">Reset form</button> <button ui-sref=\"parties\">Cancel</button>");}]);

})();
