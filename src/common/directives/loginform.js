angular.module('directives.loginform', ['i18n', 'http-auth-interceptor', 'resources.account'])

.directive('loginform', ['$timeout', 'authService', '$http', 'SERVER', 'Account', function($timeout, authService, $http, SERVER, Account){
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        // templateUrl: 'templates/login/loginform.tpl.html',
        template: '' +

'   <div class="modal fade loginform" data-backdrop="static" data-keyboard="false">'+
'       <div class="modal-dialog">'+
'           <div class="modal-content">'+
'               <div class="modal-header">'+
'                   <a href="#/register" target="_blank" class="close" type="button">{{\'register_cmd\' | translate}} &gt;&gt;&gt;</a>'+
'                   <h4 class="modal-title" translate>enter</h4>'+
'               </div>'+
'               <form name="form"  ng-submit="onLogin(user.name, user.password)"  style="width: auto">'+
'                   <div class="modal-body">'+
'                      <chooselang></chooselang>'+
'                       <div translate>enter_help</div>'+
'                       <div class="wide" translate>enter_comment</div>'+
'                           <div class="input-prepend input-group">'+
'                               <span class="add-on input-group-addon">'+
'                                   <i class="icon-user"></i>'+
'                               </span>'+
'                               <input class="form-control" type="text" placeholder="{{\'user_name\' | translate}}", ng-model="user.name" required autofocus focus-me="true" />'+
'                          </div><br />'+
'                           <div class="input-prepend input-group">'+
'                               <span class="add-on input-group-addon">'+
'                                   <i class="icon-key"></i>'+
'                               </span>'+
'                               <input class="form-control" type="password" placeholder="{{\'user_password\' | translate}}" ng-model="user.password" required />'+
'                           </div><br />'+
'                  </div>'+
'                   <div class="modal-footer">'+
'                       <span class="alert alert-danger" ng-show="error" style="margin: -10px; float: left"><i class="icon-warning-sign icon-large"></i> {{\'error_auth\' | translate}}</span>' +
'                       <button class="btn btn-primary login" ng-disabled="form.$invalid" translate>enter_cmd</button>'+
'                       <!--button class="btn login ng-click="onRegister(user.name, user.password)" ng-disabled="form.$invalid" translate>register_cmd</button-->'+
'                   </div>'+
'               </form>'+
'        </div><!-- /.modal-content -->'+
'    </div><!-- /.modal-dialog -->'+
'</div>',

        link: function(scope, elem, attrs){
            scope.$on('event:auth-loginRequired', function() {
                console.log('event:auth-loginRequired', elem);
                var options = {};
                elem.modal(options);
                // $timeout(function(){
                //     elem.find('input[autofocus]').focus();
                //     // console.log('select=', elem, );
                // }, 1000);
                // login.slideDown('slow', function() {
                    // main.hide();
                // });
            });

            scope.$on('event:auth-loginConfirmed', function() {
                console.log('event:auth-loginConfirmed', elem);
                elem.modal('hide');
                // main.show();
                // login.slideUp();
            });

            scope.error = false;
            scope.onLogin = function(name, password){
                console.log('onLogin', name, password, authService);
                Account.login(name, password).then(function(){
                    console.log("loged in");
                    scope.error = false;
                    authService.loginConfirmed();
                }, function(){
                    scope.error = true;
                });
            }
        }
    };
}]);
