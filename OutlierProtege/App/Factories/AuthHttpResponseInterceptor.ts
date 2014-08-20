module App.Factories {
    "use strict";
    var AuthHttpResponseInterceptor = ($q, $location) => {
        return {
            response: (response) => {
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: (rejection) => {
                if (rejection.status === 401) {
                    console.log("Response Error 401", rejection);
                    $location.path('/login').search('returnUrl', $location.path());
                }
                return $q.reject(rejection);
            }
        }
    }

    AuthHttpResponseInterceptor.$inject = ['$q', '$location'];
}