angular.module('i18n', ['i18n.ru', 'i18n.en', 'i18n.pl', 'i18n.ua'])
.config(['$translateProvider', function ($translateProvider) {

    console.log(["$translateProvider", $translateProvider, $translateProvider.translations()]);

    // All other langs
    // $translateProvider.translations({
    //     "error_msg": "Ууууупс. Что-то произошло. Попробуйте перейти по одной из следующих ссылок:",

    //     // Login page
    //     "enter": "Вход",
    //     "enter_help": "Введите имя пользователя и пароль своей учетной записи.",
    //     "enter_comment": "Чтобы пользоваться сервисом необходимо авторизоваться в системе.",
    //     "enter_comment2": "Для создания новой учетной записи придумайте имя пользователя и пароль, учетная запись будет создана автоматически.",
    //     "user_name": "Имя пользователя",
    //     "user_password": "Пароль",
    //     "enter_cmd": "Войти",
    //     "register_cmd": "Зарегестритоваться",

    //     'SIMPLE': 'Простое значение',
    //     'COMPLEX': 'value равно {{value}}.',

    //     'MAP': 'Карта',

    //     // Панель настроек карты
    //     'AUTO_BOUND_TRACK': 'Автоматически центровать трек',
    //     'ANIMATION_DIR': 'Анимация направления',
    //     'STOP_NUMBERS': 'Нумерация остановок/стоянок'
    // });

    var lang = localStorage.getItem('language');
    if((lang === null) || (lang === "undefined") || !(lang in $translateProvider.translations())){
        lang = 'ru_RU';
        localStorage.setItem('language', lang);
    }
    $translateProvider.uses(lang);
    // $translateProvider.rememberLanguage(true);   // Not worked yet
}]);


(function(window, I18n){
'use strict';

I18n.translations = I18n.translations || {};

I18n.translations.en = {
    enter: 'Enter',
    enter_help: 'Enter the user name and password of your account.',
    enter_comment: 'To use the service to log into the system.',
    enter_comment2: 'To create a new account, make up a name and password, your account is automatically created.',
    user_name: 'User name',
    user_password: 'Password',
    enter_cmd: 'Confirm'
  };

window.console.log('i18n.en init', I18n);

})(this, I18n);


angular.module('i18n.en', ['ngTranslate'])
.config(['$translateProvider', function ($translateProvider) {

    // Simply register translation table as object hash
    $translateProvider.translations('en_EN', {
        "translate": "Ошибка описания",
        "error_msg": "Ooooops. Something happened. Try using one of the following links:",

        // Login page
        "enter": "Enter",
        "enter_help": "Enter the user name and password of your account.",
        "enter_comment": "To use the service to log into the system.",
        "enter_comment2": "To create a new account, make up a name and password, your account is automatically created.",
        "user_name": "User name",
        "user_password": "Password",
        "enter_cmd": "Confirm",
        "register_cmd": "Register",
        "enter_as": "You enter as {{ value }}",
        "Display name": "Display name",
        "Register date": "Register date",
        "Administrator": "Administrator",
        "Observed systems": "Observed systems",
        "for_recovery": "To recover your password",

        "Login": 'Login',
        'Map': 'Map',
        "Logs": "Logs",
        "Reports": "Reports",
        "Export GPS": "Export GPS",
        "Config": "Config",
        "Help": "Help",
        "User": "User",

        // Map
        "Display Settings": "Display Settings",
        "Hide track": "Hide track",
        "points_in_track": "Points in track: {{value}}",

        'AUTO_BOUND_TRACK': 'Automatic bound track',
        'ANIMATION_DIR': 'Animation direction',
        'STOP_NUMBERS': 'Numbering of stops / parks',

        // Config page
        'add_system': 'Add system'
});
}]);

(function(window, I18n){
'use strict';

I18n.translations = I18n.translations || {};

I18n.translations.pl = {
    enter: 'Entrance',
    enter_help: 'Wpisz nazwę użytkownika i hasło do swojego konta.',
    enter_comment: 'Aby skorzystać z usługi, aby zalogować się do systemu.',
    enter_comment2: 'Aby utworzyć nowe konto, uzupełnić nazwę i hasło, konto zostanie utworzone automatycznie.',
    user_name: 'Nazwa użytkownika',
    user_password: 'Hasło',
    enter_cmd: 'Wpisać'
  };

window.console.log('i18n.pl init', I18n);
})(this, I18n);

angular.module('i18n.pl', ['ngTranslate'])
.config(['$translateProvider', function ($translateProvider) {

    // Simply register translation table as object hash
    $translateProvider.translations('pl_PL', {
        "translate": "Błąd Opis.",
        "error_msg": "Uuuuups. Coś się stało. Użyj jednego z poniższych linków:",

        // Login page
        "enter": "Entrance",
        "enter_help": "Wpisz nazwę użytkownika i hasło do swojego konta.",
        "enter_comment": "Aby skorzystać z usługi, aby zalogować się do systemu.",
        "enter_comment2": "Aby utworzyć nowe konto, uzupełnić nazwę i hasło, konto zostanie utworzone automatycznie.",
        "user_name": "Nazwa użytkownika",
        "user_password": "Hasło",
        "enter_cmd": "Wpisać",
        "register_cmd": "Zaregestritovatsya",
        "enter_as": "Jesteś zalogowany jako {{ value }}",
        "Display name": "Wyświetla nazwę",
        "Register date": "Data rejestracji",
        "Administrator": "Administrator",
        "Observed systems": "Obserwacji systemów",
        "for_recovery": "Aby odzyskać hasło",

        "Login": "Zaloguj się",
        "Map": "Map",
        "Logs": "Wydarzenia",
        "Reports": "Raporty",
        "Export GPS": "Eksport GPS",
        "Config": "Ustawienia",
        "Help": "Pomoc",
        "User": "Użytkownik",

        // Map
        "Display Settings": "Ustawienia ekranu",
        "Hide track": "Ukryj utwór",
        "points_in_track": "Punkty w utworu: {{value}}",

        'AUTO_BOUND_TRACK': 'Automatycznie wyśrodkować utwór',
        'ANIMATION_DIR': 'Kierunek Animacja',
        'STOP_NUMBERS': 'Numeracja przystanków / parki',

        // Config page
        'add_system': 'Add system (translate)'
    });
}]);

(function(window, I18n){
'use strict';

I18n.translations = I18n.translations || {};

I18n.translations.ru = {
    enter: 'Вход',
    enter_help: 'Введите имя пользователя и пароль своей учетной записи.',
    enter_comment: 'Чтобы пользоваться сервисом необходимо авторизоваться в системе.',
    enter_comment2: 'Для создания новой учетной записи придумайте имя пользователя и пароль, учетная запись будет создана автоматически.',
    user_name: 'Имя пользователя',
    user_password: 'Пароль',
    enter_cmd: 'Войти'
  };

window.console.log('i18n.ru init', I18n);
})(this, I18n);


angular.module('i18n.ru', ['ngTranslate'])
.config(['$translateProvider', function ($translateProvider) {

    // Simply register translation table as object hash
    $translateProvider.translations('ru_RU', {
        "translate": "Ошибка описания",
        "error_msg": "Ууууупс. Что-то произошло. Попробуйте перейти по одной из следующих ссылок:",

        // Login page
        "enter": "Вход",
        "enter_help": "Введите имя пользователя и пароль своей учетной записи.",
        "enter_comment": "Чтобы пользоваться сервисом необходимо авторизоваться в системе.",
        "enter_comment2": "Для создания новой учетной записи придумайте имя пользователя и пароль, учетная запись будет создана автоматически.",
        "user_name": "Имя пользователя",
        "user_password": "Пароль",
        "enter_cmd": "Войти",
        "register_cmd": "Зарегестритоваться",
        "enter_as": "Вы вошли как {{ value }}",
        "Display name": "Отображаемое имя",
        "Register date": "Дата регистрации",
        "Administrator": "Администратор",
        "Observed systems": "Наблюдаемых систем",
        "for_recovery": "Для восстановления пароля",

        "Login": 'Вход',
        "Map": 'Карта',
        "Logs": "События",
        "Reports": "Отчеты",
        "Export GPS": "Экспорт GPS",
        "Config": "Настройки",
        "Help": "Помощь",
        "User": "Пользователь",

        // Карта
        "Display Settings": "Настройки отображения",
        "Hide track": "Скрыть трек",
        "points_in_track": "Точек в треке: {{value}}",

        // Панель настроек карты
        'AUTO_BOUND_TRACK': 'Автоматически центровать трек',
        'ANIMATION_DIR': 'Анимация направления движения',
        'STOP_NUMBERS': 'Нумерация остановок / стоянок',

        // Страница настроек
        'add_system': 'Добавить трекер'
    });
}]);

(function(window, I18n){
'use strict';

I18n.translations = I18n.translations || {};

I18n.translations.ua = {
    enter: 'Вхiд',
    enter_help: 'Введіть ім\'я користувача і пароль свого облікового запису.',
    enter_comment: 'Щоб користуватися сервісом необхідно авторизуватися в системі.',
    enter_comment2: 'Для створення нового облікового запису придумайте ім\'я користувача та пароль, обліковий запис буде створена автоматично.',
    user_name: 'Ім\'я користувача.',
    user_password: 'Пароль',
    enter_cmd: 'Увійти'
  };

//window.console.log('i18n.ua init', I18n);
})(this, I18n);

angular.module('i18n.ua', ['ngTranslate'])
.config(['$translateProvider', function ($translateProvider) {

    // Simply register translation table as object hash
    $translateProvider.translations('ua_UA', {
        "translate": "Помилка опису",
        "error_msg": "Ууууупс. Щось сталося. Спробуйте перейти по одній з наступних посилань:",

        // Login page
        "enter": "Вхiд",
        "enter_help": "Введіть ім'я користувача і пароль свого облікового запису.",
        "enter_comment": "Щоб користуватися сервісом необхідно авторизуватися в системі.",
        "enter_comment2": "Для створення нового облікового запису придумайте ім'я користувача та пароль, обліковий запис буде створена автоматично.",
        "user_name": "Ім'я користувача.",
        "user_password": "Пароль",
        "enter_cmd": "Увійти",
        "register_cmd": "Зарегестрітоваться.",
        "enter_as": "Ви увійшли як {{ value }}",
        "Display name": "Екранне ім'я",
        "Register date": "Дата реєстрації",
        "Administrator": "Адміністратор",
        "Observed systems": "Спостережуваних систем",
        "for_recovery": "Для відновлення паролю",

        "Login": 'Вхiд',
        'Map': 'Мапа',
        "Logs": "Події",
        "Reports": "Звіти",
        "Export GPS": "Експорт GPS",
        "Config": "Налаштування",
        "Help": "Допомога",
        "User": "Користувач",

        // Map
        "Display Settings": "Налаштування відображення",
        "Hide track": "Приховати трек",
        "points_in_track": "Точок в треку: {{value}}",

        'AUTO_BOUND_TRACK': 'Автоматично центрувати трек',
        'ANIMATION_DIR': 'Анімація напрямку руху',
        'STOP_NUMBERS': 'Нумерація зупинок / стоянок',

        // Config page
        'add_system': 'Add system (translate)'
    });
}]);

angular.module('directives.language', ['i18n'])

.directive('chooselang', ['$translate', function($translate) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="btn-group" data-toggle="buttons-radio"><button type="button" class="btn" ng-class="{active: l.code == active}" ng-repeat="l in langs" title="{{ l.title }}" ng-click="onSet(l)">{{ l.text }}</button></div>',
        // template:   '<select ng-model="lang">'+
        //             '<option value="">Выберите язык</option>'+
        //             '<option ng-repeat="l in langs" value="{{l.lang}}">{{l.title}}</option>'+
        //             '</select>',
                    // '{{ lang }}'
        link: function(scope, element, attrs) {
            console.log('chooselang.link');
            scope.langs = [
                {code: 'ru_RU', text: 'RU', title: "Русский"},
                {code: 'en_EN', text: 'EN', title: "English"},
                {code: 'ua_UA', text: 'UA', title: "Українська"},
                {code: 'pl_PL', text: 'PL', title: "Polski"}
            ];
            // scope.active = i18n.active;
            // scope.onSet = function(l){
            //     i18n.set(l.code);
            //     location.reload();
            // };
            // console.log('language directive: link', scope, element, i18n);
            // $scope.lang = "en_EN";
            scope.active = $translate.uses();
            // scope.lang = $translate.uses();
            // scope.$watch("lang", function(lang){
            //     // $log.warn("lang=", lang);
            //     $translate.uses(lang);
            //     localStorage.setItem('language', lang);
            // });
            scope.onSet = function(lang){
                console.log("lang=", lang);
                $translate.uses(lang.code);
                localStorage.setItem('language', lang.code);
            };

        }
        //, controller: ["account", function(account){console.log("account=", account)}]
    };
}]);


// angular.module('directives.language', ['services.i18n'])

// .directive('language', ['i18n', function(i18n) {
//     return {
//         restrict: 'A',
//         replace: true,
//         template: '<div class="btn-group" data-toggle="buttons-radio"><button type="button" class="btn" ng-class="{active: l.code == active}" ng-repeat="l in langs" title="{{ l.title }}" ng-click="onSet(l)">{{ l.text }}</button></div>',
//         link: function(scope, element, attrs) {
//             scope.langs = [
//                 {code: 'ru', text: 'RU', title: "Русский"},
//                 {code: 'en', text: 'EN', title: "English"},
//                 {code: 'ua', text: 'UA', title: "Українська"},
//                 {code: 'pl', text: 'PL', title: "Polski"}
//             ];
//             scope.active = i18n.active;
//             scope.onSet = function(l){
//                 i18n.set(l.code);
//                 location.reload();
//             };
//             console.log('language directive: link', scope, element, i18n);
//         }
//         //, controller: ["account", function(account){console.log("account=", account)}]
//     };
// }]);


angular.module('directives.lists', [])

.directive('mylist', function() {
    return {
        restrict: 'E',
        //scope: {},
        transclude: false,
        //template: '<div>List:<ul><li ng-repeat="l in list">{{l}}<i class="icon-arrow-right"></i><span>{{l}}</span></li></ul></div>',
        template: '<div>List:<ul><li ng-repeat="l in list"><mylistitem></mylistitem></li></ul></div>',
        link: function(scope, element, attrs) {
            console.log('mylist directive: link', scope, element);
        }
        //, controller: ["account", function(account){console.log("account=", account)}]
    };
})

.directive('mylistitem', function() {
    return {
        restrict: 'E',
        //scope: {l:"@"},
        transclude: true,
        template: '<div>{{l}}</div>',
        link: function(scope, element, attrs) {
            console.log('mylistitem directive: link', scope, element);
        }
    };
})

.directive('mylist2', function() {
    return {
        restrict: 'E',
        scope: {},
        transclude: false,
        //template: '<div>List2:<ul><li ng-repeat="l in list">{{ l }}</li></ul></div>',
        template: '<div>List2:<ul></ul></div>',
        link: function(scope, element, attrs) {
            var ul = element[0].querySelector('ul');
            //scope.ul = ul;
            scope.list = scope.$parent.list;
            //var ul = angular.element(element);
            console.log('mylist2 directive: link', scope, element, attrs, ul);
            scope.$watch('list', function(ov, nv){
                //console.log(' == watch(list)', scope, ov, nv);
                ul.innerHTML = '';
                for(var i=0; i<scope.list.length; i++){
                    var l=scope.list[i];
                    var li = document.createElement('LI');
                    li.innerHTML = l;
                    ul.appendChild(li);
                }
            }, true);
            //console.dir(element);
            //console.dir(ul);
        }/*,
        compile: function(element, attrs) {
            console.log('mylist2 directive: compile', element, attrs);
        }
        , controller: ["$scope", function($scope) {
            console.log('mylist2 directive: controller', $scope);
            $scope._addMyData = "Hoo";
        }]*/
    };
})

.directive('contenteditable', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attr, ngModel) {
            var read;
            //console.log('===contenteditable', scope, element, attr, ngModel);
            if (!ngModel) {
                return;
            }
            ngModel.$render = function() {
                return element.text(ngModel.$viewValue);
            };
            element.bind('blur', function() {
                //console.log("blur", ngModel.$viewValue, element.html());
                if($.trim(element.text()) === '') {
                    element.text(ngModel.$viewValue);
                    //scope.$apply();
                }
                if (ngModel.$viewValue !== $.trim(element.text())) {
                    return scope.$apply(read);
                }
            });
            element.bind('keypress', function(ev) {
                //console.log("keypress", ev);
                if(ev.which === 13){
                    element.trigger('blur');
                    return false;
                }
            });
            read = function() {
                console.log("read()", scope, ngModel);
                ngModel.$setViewValue($.trim(element.text()));
                element.trigger('change');  // Вызовем стандартный метод onChange, можно повесить свой обработчик на ng-change="onChange()"
                /*
                if(scope._update){
                    scope._update();
                }
                */
                /*if(scope.onChange) {
                    scope.onChange();
                }*/
                //return ngModel.$setViewValue($.trim(element.html()));
            };
            //return read;
        }
    };
})

.directive('fileload', function() {
    return {
        restrict: 'E',
        require: '?ngModel',
        template: '<span class="btn btn-success fileinput-button">' +
                  '  <i class="icon-plus icon-white"></i>' +
                  '  <span>Из файла...</span>' +
//                  ' <input type="file" name="files[]" multiple="" ng-model="files" ng-change="onFileAdd()">' +
                  ' <input type="file">' +
                  '</span>',
        replace: true,
        link: function(scope, element, attr, ngModel) {
            scope.onFileAdd = function(){
                console.log('onFileAdd');
            };
            /*var input = document.createElement('input');
            input.setAttribute('type', 'file');
            //input.type = 'file';
            element.appendChild(input);*/
            element[0].querySelector('input').addEventListener('change', function (ev) {
                //var filename = ev.target.value;
                if((ev.target.value === null)||(ev.target.value === '')) {
                    return;
                }
                var file = ev.target.files[0];
                console.log('onChange', file);
                var reader = new FileReader();
                reader.onload = function(e) {
                    console.log(['  onload ==== before', e]);
                    var list = e.target.result.replace(/[\r\t\n]/g, ' ').replace(/ {2}/g, ' ').split(' ').filter(function(el){return (el !== '') && (el !== ' ');});
                    console.log(['  onload', e, list]);
                    scope.$apply(function(){
                        ngModel.$setViewValue(list);
                        element.trigger('change');  // Вызовем стандартный метод onChange, можно повесить свой обработчик на ng-change="onChange()"
                        ev.target.value = null;
                    });
                };
                reader.readAsBinaryString(file);

            }, false);
            /*
            element.bind('change', function(ev){
                console.log('onChange', this, ev.target);
                scope.$apply(function(){
                    scope.files = ['1', '2', '3'];
                    ngModel.$setViewValue(['1', '2', '232']);
                    element.trigger('change');  // Вызовем стандартный метод onChange, можно повесить свой обработчик на ng-change="onChange()"
                });
            });
            */

            /*
            element.querySelector('input').addEventListener('change', function(){
                console.log('onChange');
            }, false);*/
            console.log(['fileload', scope, element, attr, ngModel]);
        }
    };
})

.directive('addtracker', function() {
    return {
        restrict: 'E',
        require: '?ngModel',
        scope: {
            account: "="
        },
        template: '<div><button class="btn btn-primary" ng-click="addform=!addform;"><i class="icon-plus-sign"></i><span translate>add_system</span></button>' +
                    '<span ng-show="addform">' +
                    '   <form class="form-inline" style="display: inline-block; margin:0;" name="form" ng-submit="onAdd(newimei)">' +
                    '        <label style="display:inline">IMEI</label>' +
                    '       <input type="text" ng-model="newimei" required autofocus></input>' +
                    '        <button class="btn btn-primary login" id="login" ng-show=\'!form.$invalid\'>Добавить</button>' +
                    '       <fileload ng-model="files" ng-change="onFromFiles()"></fileload>' +
                    '    </form>' +
                    '</span></div>',
        replace: true,
        link: function(scope, element, attr, ngModel) {
        },
        controller: ["$scope", function($scope){
            $scope.addform = false;
            $scope.onAdd = function(imei){
                console.log('onAdd', imei, $scope.account, document.getElementById('config_add_file'));

                $scope.account.systemadd([imei]);
                $scope.addform = false;
            };
            $scope.onFromFiles = function(){
                console.log('multiple add', $scope.files);
                $scope.account.systemadd($scope.files);
                $scope.addform = false;
            };
        }]
    }
})

.directive('clone', function() {
    return {
        restrict: 'C',
        // template: null,
        // replace: true,
        link: function(scope, element, attr, ngModel) {
            console.log('clone component');
            element.attr('readonly', 'readonly');
            element.attr('type', 'text');
            element.attr('title', "Для копирования в буффер обмена нажмите правую кнопку и выберите 'Копировать'");
            element.bind('mousedown', function(){this.select();});
            //element.bind('mouseover', function(){this.select();});
        }
    }
})

.directive('datetime', [function(){
    return {
        restrict: 'E',
        scope: {
            datetime: "@",
            "default": "@",
            format: "@",
            seconds: "="
        },
        template: '<span class="datelabel" title="{{ title }}" ng-click="switch()">{{ value }}</span>',
        controller: ["$scope", "$filter", function($scope, $filter){
            $scope.invert = $scope["default"] || false;
            //$scope.format =
            var update = function(){
                // console.log("$scope.seconds", $scope.seconds);
                // console.log('$scope.datetime=', $scope.datetime);
                if(angular.isUndefined($scope.datetime) || $scope.datetime === ''){
                    $scope.value = "?";
                    $scope.title = "Значение неопределено";
                    return;
                }
                if($scope.invert){
                    $scope.value = $filter("datetime")($scope.datetime, $scope.seconds, $scope.format);
                    $scope.title = $filter("fromnow")($scope.datetime);
                } else {
                    $scope.value = $filter("fromnow")($scope.datetime);
                    $scope.title = $filter("datetime")($scope.datetime, $scope.seconds, $scope.format);
                }
            };
            $scope.switch = function(){
                $scope.invert = !$scope.invert;
                update();
            };
            $scope.enter = function(){
                $scope.invert = true;
                update();
            };
            $scope.leave = function(){
                $scope.invert = false;
                update();
            };
            $scope.$watch("datetime", update);
        }]
    };
}]);


console.log("*=*=*=*= I'am a spammer");


// Enable the visual refresh
google.maps.visualRefresh = true;

angular.module('directives.gmap', ['services.connect', 'ui'])

.directive('gmap', ["Connect", function(Connect) {
    console.log('gmap:directive');

    // TODO! Необходима унификация для поддержки как минимум Google Maps и Leaflet
    var path = null;
    var gmarker = null;

    var link = function(scope, element, attrs) {
        // console.log('map directive: link', scope, element, Connect);
        //element.innerHTML="<div>map</div>";

        // Временное решение для доступа к главной карте
        //window["config"] = {};
        // var config = window["config"] = {};

        var prev_config = localStorage.getItem('map.config');
        if(prev_config){
            prev_config = JSON.parse(prev_config);
        } else {
            prev_config = {
                zoom: 6,
                center: [48.370848, 32.717285],
                typeId: google.maps.MapTypeId.ROADMAP
            };
        }

        var latlng = new google.maps.LatLng(48.397, 34.644);
        var myOptions = {
            center: new google.maps.LatLng(prev_config.center[0], prev_config.center[1]),
            mapTypeId: prev_config.typeId,
            zoom: prev_config.zoom
        };
        var map = new google.maps.Map(element[0],
            myOptions);

        // config.map = map;

        var saveMapState = function() {
            localStorage.setItem('map.config', JSON.stringify({
                center: [map.getCenter().lat(), map.getCenter().lng()],
                zoom: map.getZoom(),
                typeId: map.getMapTypeId()
            }));
        };

        google.maps.event.addListener(map, 'idle', saveMapState);
        google.maps.event.addListener(map, 'maptypeid_changed', saveMapState);

        google.maps.event.addListener(map, 'zoom_changed', function(){
            // console.log('zoom_changed');
            //PathRebuild();
        });

        var lastpos = new google.maps.Marker({
          map: map,
          position: latlng,
          title: 'Rabbit',
          //icon: goldStar,
          icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            fillColor: "yellow",
            fillOpacity: 0.8,
            strokeColor: "green",
            strokeWeight: 4,
            scale: 5
          },
          animation: null // google.maps.Animation.BOUNCE
        });

        var center = new google.maps.MarkerImage(
            '/img/marker/marker-center.png?v=1',
            new google.maps.Size(32, 32),
            new google.maps.Point(0, 0),
            new google.maps.Point(15, 15)
        );

        gmarker = new google.maps.Marker({
            //position: new google.maps.LatLng(data.stops[i].p[0], data.stops[i].p[1]),
            map: map,
            title: 'Положение',
            icon: center,
            draggable: false
        });

        //config.updater.add('last_update', function(msg) {
        var updater = Connect.updater.on('last_update', function(msg) {
            //if(msg.data.skey == skey) table.insertBefore(log_line(msg.data), table.firstChild);
            console.log('MAP last_update = ', msg);
            var newpos = new google.maps.LatLng(msg.point.lat, msg.point.lon);
            lastpos.setPosition(newpos);
        });

        /*console.log('config = ', config);
        scope.$on('channel_data', function(event, more){
            //var message = Connect.message;
            console.log(['Map on change_last', more]);
        });*/
        // listen on DOM destroy (removal) event, and cancel the next UI update
        // to prevent updating time ofter the DOM element was removed.
        element.bind('$destroy', function() {
            console.log('MAP:destroy element');
            Connect.updater.remove('last_update', updater);
            //$timeout.cancel(timeoutId);
        });

        var marker_begin = new google.maps.MarkerImage(
            '/img/marker/marker-begin.png',
            new google.maps.Size(30, 20),
            new google.maps.Point(0, 0),
            new google.maps.Point(15, 19)
        );
        var marker_end = new google.maps.MarkerImage(
            '/img/marker/marker-end.png',
            new google.maps.Size(30, 20),
            new google.maps.Point(0, 0),
            new google.maps.Point(15, 19)
        );
        var begin_marker = null,
            end_marker = null;

//        if(scope.config.autobounds){
        function animateCircle() {
            var count = 0;
            offsetId = window.setInterval(function() {
                if(path === null) return;                // FIXME: Не самое элегантное решение
                if(!scope.config.animation) return;     // FIXME: Не самое элегантное решение

                count = (count + 1) % 50;

                var icons = path.get('icons');
                icons[0].offset = (count*2) + 'px';
                path.set('icons', icons);
          }, 250);
        }
        animateCircle();

        var showTrack = function(data){

            path = new google.maps.Polyline({
                path: data.track,
                strokeColor: 'blue',
                strokeOpacity: 0.5,
                strokeWeight: 5,
                // editable: true,
                icons: [{
                        icon: {
                          // path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                          strokeColor: 'blue',
                          strokeWeight: 3,
                          scale: 3
                        },
                        offset: '50px',
                        repeat: '100px'
                    }],
                map: map
            });
            // console.log("scope.autobounds=", scope.autobounds);
            if(scope.config.autobounds){
                map.fitBounds(data.bounds);
            }

            if(begin_marker){
                begin_marker.setPosition(data.track[0]);
            } else {
                begin_marker = new google.maps.Marker({
                  map: map,
                  position: data.track[0],
                  title: 'Rabbit',
                  icon: marker_begin
                });
            }

            if(end_marker){
                end_marker.setPosition(data.track[data.track.length-1]);
            } else {
                end_marker = new google.maps.Marker({
                  map: map,
                  position: data.track[data.track.length-1],
                  title: 'Rabbit',
                  icon: marker_end
                });
            }

        };

        scope.$watch("track", function(data){
            // console.log(['MAP:track change', data]);
            // $scope.hideTrack();
            if(path) {
                path.setMap(null);
                path = null;
            }
            if(data === null) return;
            showTrack(data);
        });

        scope.$watch("center", function(center){
            if(center) {
                var pos = new google.maps.LatLng(center.lat, center.lon);
                map.panTo(pos);
                gmarker.setPosition(pos);
            }
        });

    };

    return {
        restrict: 'A',
        transclude: false,
        //scope: {last_pos: '='},
        //template: '<div>List:<ul><li ng-repeat="l in list">{{l}}<i class="icon-arrow-right"></i><span>{{l}}</span></li></ul></div>',
        //template: '<div>MAP</div>',
        scope: {
            track: "=",
            config: "=",
            center: "="
        },
        link: link/*,
        controller: ["$scope", "Connect", function($scope, Connect){
            console.log("map directive:controller", $scope, Connect);
        }]*/
    };
}]);

angular.module('directives.main', [])

.directive('mapsysitem', ["$location", function($location) {
    return {
        restrict: 'E',
        scope: {
            zoom: "@",
            item: "=",
            select: "&"        // Используется чтобы навесить обработчик на выбор ng-click="select()"
         },
        replace: true,
        // transclude: true,
        templateUrl: 'templates/map/mapsysitem.tpl.html',
        link: function(scope, element, attrs) {
             // console.log('mapsysitem directive: link', scope, element, attrs, scope.item);

  // scope.onSysSelect = function(){
  //   console.log("onSysSelect(2)", s, scope);
  // };
            scope.manageSystemParams = function(skey){
                // console.log("manageSystemParams()", s, scope);
                $location.path('/config/' + skey + '/params');
            };

        }
    };
}]);

angular.module('directives.modal', []).directive('modal', ['$parse',function($parse) {
  var backdropEl;
  var body = angular.element(document.getElementsByTagName('body')[0]);
  var defaultOpts = {
    backdrop: true,
    escape: true
  };
  return {
    restrict: 'ECA',
    link: function(scope, elm, attrs) {
      var opts = angular.extend(defaultOpts, scope.$eval(attrs.uiOptions || attrs.bsOptions || attrs.options));
      var shownExpr = attrs.modal || attrs.show;
      var setClosed;

      if (attrs.close) {
        setClosed = function() {
          scope.$apply(attrs.close);
        };
      } else {
        setClosed = function() {
          scope.$apply(function() {
            $parse(shownExpr).assign(scope, false);
          });
        };
      }
      elm.addClass('modal');

      if (opts.backdrop && !backdropEl) {
        backdropEl = angular.element('<div class="modal-backdrop"></div>');
        backdropEl.css('display','none');
        body.append(backdropEl);
      }

      function setShown(shown) {
        scope.$apply(function() {
          model.assign(scope, shown);
        });
      }

      function escapeClose(evt) {
        if (evt.which === 27) { setClosed(); }
      }
      function clickClose() {
        setClosed();
      }

      function close() {
        if (opts.escape) { body.unbind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'none').removeClass('in');
          backdropEl.unbind('click', clickClose);
        }
        elm.css('display', 'none').removeClass('in');
        body.removeClass('modal-open');
      }
      function open() {
        if (opts.escape) { body.bind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'block').addClass('in');
          backdropEl.bind('click', clickClose);
        }
        elm.css('display', 'block').addClass('in');
        body.addClass('modal-open');
      }

      scope.$watch(shownExpr, function(isShown, oldShown) {
        if (isShown) {
          open();
        } else {
          close();
        }
      });
    }
  };
}]);

angular.module('directives.timeline', [])

.directive('timeline', [function() {
    console.log('timeline:directive');

    var zoom_factor = 0.67;
    var svg;


    var draw_data = function(data){
        // // Пока сгенерируем фальшивые данные
        // var start = 0;
        // var data = d3.range(~~(Math.random() * 10)+2).map(function(i){
        //     var stop = start + ~~(Math.random() * 500);
        //     var point = {
        //         counter: i+1,
        //         move: (i%2) === 1,
        //         start: start,
        //         stop: stop
        //     };
        //     start = stop;
        //     return point;
        // });
        // if(data[data.length-1].stop < 2500){
        //     data[data.length-1].stop = 2500;
        // }
        // console.log("data=", data);

        var grid = d3.select(svg);

        // var chart = function(el){
        //     console.log("el=", el);
        //     // el.append("text");
        //     el.append("svg:rect")
        //     .attr("class", function(d) { return "move " + (d.move?"run":"stop"); })
        //     // .attr("class", "move")
        //     .attr("x", function(d) { return d.start; })
        //     .attr("y", "18")
        //     .attr("width", function(d) { return d.stop - d.start; })
        //     .attr("height", "12");
        // };

        var days = grid.selectAll(".move")
            .data(data);

        // days.enter().append("g").call(chart);

        // days.enter().append("svg:rect")
        //     .attr("class", function(d) { return "move " + (d.move?"run":"stop"); })
        //     // .attr("class", "move")
        //     .attr("x", function(d) { return d.start; })
        //     .attr("y", "18")
        //     .attr("width", function(d) { return d.stop - d.start; })
        //     .attr("height", "12");

        // days.transition()
        //     .duration(500)
        //     // .style("opacity", 1)
        //     .attr("x", function(d) { return d.start; })
        //     .attr("width", function(d) { return d.stop - d.start; });

        var g = days.enter().append("g")
            .attr("class", function(d) { return "move " + (d.move?"run":"stop"); })
            .on('click', function(d) {
                console.log(d3.select(this), d);
            });

        g.append("rect")
            .attr("x", function(d) { return d.start * zoom_factor; })
            .attr("y", "16")
            .attr("width", function(d) { return (d.stop - d.start) * zoom_factor; })
            .attr("height", "16");
        g.append("text")
            .attr("x", function(d) { return zoom_factor * (d.stop + d.start) / 2; })
            .attr("y", "28")
            // .attr("dx", "0")
            .attr("text-anchor", "middle")
            .text(function(d) { return (d.move?"Движение":"Стоянка") + d.counter; });

        days.select("rect").transition().duration(500)
            .attr("x", function(d) { return d.start * zoom_factor; })
            .attr("width", function(d) { return (d.stop - d.start) * zoom_factor; });

        days.select("text").transition().duration(500)
            .attr("x", function(d) { return zoom_factor * (d.stop + d.start)/2; });
            // .attr("width", function(d) { return d.stop - d.start; });

        days.exit().remove();

    };

    var draw_axes = function(){
        // svg.width = "" + ~~(2500*zoom_factor) + "px";
        d3.select(svg).attr("width", 2500*zoom_factor);

        var data = d3.range(25).map(function(i){
            return {
                i: i,
                title: i<24?("" + ((i<10)?"0":"") + i + ":00"):"23:59"
            };
        });

        var grid = d3.select(svg);  //"#timeline svg"
        var grid_days = grid.selectAll(".day")
            .data(data);

        var g = grid_days.enter()
            .append("g")
            .attr("class", "day")
            .attr("transform", function(d) { return "translate(" + (d.i * 100 * zoom_factor) + ",0)";});

        g.append("text")
            .attr("x", 50 * zoom_factor)
            .attr("y", 12)
            .attr("dx", 0)
            .attr("text-anchor", "middle")
            .text(function(d) { return d.title; });

        g.append("line")
            .style("stroke", '#000')
            .style("stroke-width", '1')
            .attr("x1", 50 * zoom_factor)
            .attr("y1", 14)
            .attr("x2", 50 * zoom_factor)
            .attr("y2", 48);

        g.append("line")
            .style("stroke", '#CCC')
            .attr("x1", 75 * zoom_factor)
            .attr("y1", 14)
            .attr("x2", 75 * zoom_factor)
            .attr("y2", 48);

        g.append("line")
            .style("stroke", '#888')
            .attr("x1", 100 * zoom_factor)
            .attr("y1", 14)
            .attr("x2", 100 * zoom_factor)
            .attr("y2", 48);

        g.append("line")
            .style("stroke", '#CCC')
            .attr("x1", 125 * zoom_factor)
            .attr("y1", 14)
            .attr("x2", 125 * zoom_factor)
            .attr("y2", 48);

        // grid_days.select('line')
        //     .attr("x1", function(d) { return zoom_factor; })
    };

    var link = function(scope, element, attrs) {
        console.log('timeline directive: link', scope, element);

        svg = element[0].querySelector('svg');
        draw_axes();

        scope.$watch("data", function(data){
            // console.log(['timeline on data', data]);
            if(data)
                draw_data(data);
        }, true);

        if(0){
            element.bind('mousewheel', function(e){
                var e = window.event || e; // old IE support
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                console.log("zoom?", delta);
                if(delta > 0){
                    zoom_factor = zoom_factor * 2;
                }else{
                    zoom_factor = zoom_factor * 0.5;
                }
                draw_axes();
                //draw_data(data);
            });
        }
    };

    return {
        restrict: 'A',
        // transclude: false,
        //scope: {last_pos: '='},
        //template: '<div>List:<ul><li ng-repeat="l in list">{{l}}<i class="icon-arrow-right"></i><span>{{l}}</span></li></ul></div>',
        scope: {
            data: "="
        },
        template: '<svg width="2500px" height="33px" class="timeline"></svg>',
        link: link
    };
}]);

angular.module('app.filters.i18n', [])

.filter('translate', ['globals', function(globals){
    return function (text, length, end) {
        console.log('i18n globals=', globals);
        return I18n.t(text);
    };
}]);

var fdigits = function(value, digits) {
    return ("00000000000" + value).slice(-digits);
};

var fsource = {
    0: {title: "-", icons: ["icon-question"]},
    1: {title: "SUDDENSTOP", icons: ["icon-stop", "icon-warning"]},
    2: {title: "STOPACC", icons: ["icon-stop", "icon-pause"]},
    3: {title: "TIMESTOPACC", icons: ["icon-time", "icon-pause"]},
    4: {title: "SLOW", icons: ["icon-stop"]},
    5: {title: "TIMEMOVE", icons: ["icon-time", "icon-play" ]},
    6: {title: "START", icons: ["icon-play"]},
    7: {title: "TIMESTOP", icons: ["icon-time", "icon-stop"]},
    8: {title: "ANGLE", icons: ["icon-share-alt"]},
    9: {title: "DELTALAT", icons: ["icon-resize-full"]},
    10: {title: "DELTALONG", icons: ["icon-resize-full"]},
    11: {title: "DELTA", icons: ["icon-resize-full"]},
};

angular.module('app.filters', []).

filter('datetime', function(){
    return function (text, seconds, format) {
        var d = new Date(parseInt(text, 10)*1000);

        if(format === 'date'){
            return '' + fdigits(d.getDate(),2) + '/' + fdigits(d.getMonth()+1, 2) + '/' + d.getFullYear()
        } else if(format === 'time'){
            if((seconds === false) || (seconds === 'false')){
                return fdigits(d.getHours(), 2) + ':' + fdigits(d.getMinutes(), 2);
            } else {
                return fdigits(d.getHours(), 2) + ':' + fdigits(d.getMinutes(), 2) + ':' + fdigits(d.getSeconds(), 2);
            }
        }

        if((seconds === false) || (seconds === 'false')){
            return '' + fdigits(d.getDate(),2) + '/' + fdigits(d.getMonth()+1, 2) + '/' + d.getFullYear() + ' ' +
                fdigits(d.getHours(), 2) + ':' + fdigits(d.getMinutes(), 2);
        } else {
            return '' + fdigits(d.getDate(),2) + '/' + fdigits(d.getMonth()+1, 2) + '/' + d.getFullYear() + ' ' +
                fdigits(d.getHours(), 2) + ':' + fdigits(d.getMinutes(), 2) + ':' + fdigits(d.getSeconds(), 2);
        }
    };
}).

filter('fromnow', function(){
    return function (text, length, end) {
        var d = new Date(parseInt(text, 10)*1000);
        return moment(parseInt(text, 10)*1000).fromNow();
    };
}).

/*
.filter('datetime', function(){
    return function (text, length, end) {
        var d = new Date(parseInt(text, 10)*1000);
        return '' + fdigits(d.getDate(),2) + '/' + fdigits(d.getMonth()+1, 2) + '/' + d.getFullYear() + ' ' +
            fdigits(d.getHours(), 2) + ':' + fdigits(d.getMinutes(), 2) + ':' + fdigits(d.getSeconds(), 2);
    };
})

.filter('fromnow', function(){
    return function (text, length, end) {
        var d = new Date(parseInt(text, 10)*1000);
        return moment(parseInt(text, 10)*1000).fromNow();
    };
})
*/

filter('yesno', function(){
    return function (state, length, end) {
        return state?"да":"нет";
    };
}).

filter('fsource', function(){
    return function (index) {
        return fsource[1 * index];
    };
});

// angular.module('resources.account', ['services.i18nNotifications']);
angular.module('resources.account', []);

// angular.module('resources.account').factory('Account', ['SERVER', '$http', 'i18nNotifications', '$q', '$timeout', function (SERVER, $http, i18nNotifications, $q, $timeout) {
angular.module('resources.account').factory('Account', ['SERVER', '$http', '$q', '$timeout', 'Connect', '$rootScope', function (SERVER, $http, $q, $timeout, Connect, $rootScope) {

  var Account = {
    'name': 'noname-noface-nonumber',
    'access_token': null,
    'withCredentials': SERVER.api_withCredentials,
    'account': null,
    'hint': null,
    'isAuthenticated': false
  };

  if(!SERVER.api_withCredentials) {
    Account.access_token = localStorage.getItem('access_token');
    if(Account.access_token){
      $http.defaults.headers.common["Authorization"] = Account.access_token;
    } else {
      delete $http.defaults.headers.common["Authorization"];
    }
  }

  if(Account.access_token || SERVER.api_withCredentials){
    //$http.defaults.headers.common["Authorization"] = Account.access_token;
    $http({
      method: 'GET',
      url: SERVER.api + "/account"
    }).success(function(data){
      console.log('login data=', data);

      if(data.account) {
        Account.account = data.account;
        Account.access_token = data.access_token;
        Account.isAuthenticated = true;
      }
    });
  } else {
    //i18nNotifications.pushSticky('login.error.notAuthenticated', 'error', {}, {rejection: 'aaa'});
  }

  //console.log('-- resources.account.Account access_token=', Account.access_token, i18nNotifications, $q);

  Account.logout = function(){
    console.log('Account.logout');
    Account.access_token = null;
    Account.account = null;
    Account.isAuthenticated = false;

    if(SERVER.api_withCredentials) {
      $http({
        method: "POST",
        url: SERVER.api + "/logout"
      }).success(function(data){});
    } else {
      localStorage.removeItem('access_token');
      if($http.defaults.headers.common["Authorization"]){
        delete $http.defaults.headers.common["Authorization"];
      }
    }

  };

  Account.login = function(username, password){
    console.log('Account.login', username, password);
    $http({
      method: "POST",
      url: SERVER.api + "/login",
      params: {username: username, password: password}
    }).success(function(data){
      console.log('login data=', data, $http.defaults.headers);

      if(!SERVER.api_withCredentials) {
        localStorage.setItem('access_token', data.access_token);
        $http.defaults.headers.common["Authorization"] = access_token;
      }

      Account.access_token = data.access_token;
      Account.account = data.account;
      Account.isAuthenticated = true;
      if(data.result === "created") {
        // i18nNotifications.pushSticky('login.newUser', 'warning', {name: data.account.username});
        console.warn("TODO: Add notification here");
        //$scope.label = "Создана новая учетная запись. Вход через 3 секунды.";
        //setTimeout(function(){location.reload();}, 3000);
      } else {
        //$scope.label = "Вход в учетную запись...";
        //setTimeout(function(){location.reload();}, 1000);
      }

      //$rootScope.account = data;
    });
  };

  Account.systemadd = function(imeis){
    $http({
      method: 'POST',
      //withCredentials: SERVER.api_withCredentials,
      url: SERVER.api + "/account/systems",
      data: {cmd: 'add', imeis: imeis}
    }).success(function(data){
      console.log('return data=', data);
      var systems = data.systems;
      if(systems.length === 1) {
        if(data.systems[0].result === "already"){
          alert('Вы уже наблюдаете за этой системой.');
          return;
        }
        if(data.systems[0].result === "notfound"){
          alert('Система на найдена. Возможные причины: \n1. Система еще не выходила на связь.\n2. Проверте правильность ввода IMEI.');
          return;
        }
      }
      for(var i=0; i<systems.length; i++) {
        var item = systems[i];
        if(item.result === "added") {
          Account.account.skeys.push(item.system.key);
          Account.account.systems[item.system.key] = angular.copy(item.system);
        }
      }
      //$scope.addform = false;
      //alert('Система ни разу не выходила на связь. Но она все равно была добавлена в список наблюдения.');
    });
  };

  Account.systemsort = function(){
    $http({
      method: 'POST',
      //withCredentials: SERVER.api_withCredentials,
      url: SERVER.api + "/account/systems",
      data: {cmd: 'sort', skeys: Account.account.skeys}
    }).success(function(data){
      console.log('return data=', data);
    });
  };

  Account.systemdel = function(skey){
    $http({
      method: 'DELETE',
      //withCredentials: SERVER.api_withCredentials,
      url: SERVER.api + "/account/systems/" + encodeURIComponent(skey)
    }).success(function(data){
      console.log('return data=', data);
      var i = Account.account.skeys.indexOf(skey);
      Account.account.skeys.splice(i, 1);
      delete Account.account.systems[skey];
    });
  };


  Account.update = function(param){
    //console.log('Account.update', param);
    $http({
      method: 'PATCH',
      url: SERVER.api + "/account",
      data: JSON.stringify(param)
    }).success(function(data){
      console.log('return data=', data);
    });
  };

  //$scope.access_token = access_token;
  var updater = Connect.updater.on('update_dynamic', function(msg) {
      console.log('==Update dynamic', msg);
      if(msg.skey in Account.account.systems){
        if(!Account.account.systems[msg.skey].dynamic){
          Account.account.systems[msg.skey].dynamic = {};
        }
        angular.extend(Account.account.systems[msg.skey].dynamic, msg.dynamic);
      }
      $rootScope.$apply();
      //var newpos = new google.maps.LatLng(msg.point.lat, msg.point.lon);
      //lastpos.setPosition(newpos);
  });

  return Account;
}]);

angular.module('resources.geogps', [])

.factory('GeoGPS', ['SERVER', '$http', '$q', function (SERVER, $http, $q) {
    var GeoGPS = {},
        skey = null,    // Ключ системы с которой идет работа
        // path = null,
        days = {};      // Дни, в которые было движение

    // var days = {};

    var parse_onebin = function(packet){
        // 0xFF,                   # D0: Заголовок (должен быть == 0xFF)
        // 0xF4,                   # D1: Идентификатор пакета (должен быть == 0xF4)
        // 32,                     # D2: Длина пакета в байтах, включая HEADER, ID и LENGTH (32)
        if((packet[0] == 0xFF) && (packet[1] == 0xF4) && (packet[2] == 32)){
            // dt,                     # D3: Дата+время
            var dt = packet[3] + packet[4]*256 + packet[5]*256*256 + packet[6]*256*256*256;
            // latitude,               # D4: Широта 1/10000 минут
            var lat = (packet[7] + packet[8]*256 + packet[9]*256*256 + packet[10]*256*256*256) / 600000.0;
            // longitude,              # D5: Долгота 1/10000 минут
            var lon = (packet[11] + packet[12]*256 + packet[13]*256*256 + packet[14]*256*256*256) / 600000.0;
            // speed,                  # D6: Скорость 1/100 узла
            var speed = ((packet[15] + packet[16]*256) * 1.852) / 100;
            // int(round(course/2)),   # D7: Направление/2 = 0..179
            var course = packet[17]*2;
            // sats,                   # D8: Кол-во спутников 3..12
            var sats = packet[18];
            // vout,                   # D9: Напряжение внешнего питания 1/100 B
            var vout = (packet[19] + packet[20]*256) / 100;
            // vin,                    # D10: Напряжение внутреннего аккумулятора 1/100 B
            var vin = (packet[21] + packet[22]*256) / 100;
            // fsource,                # D11: Тип точки   Причина фиксации точки
            var fsource = packet[23];
            // 0,                      # D12: Флаги
            var flags = packet[24] + packet[25]*256;
            // 0,                      # D13: Резерв
            var reserve1 = packet[26] + packet[27]*256 + packet[28]*256*256 + packet[29]*256*256*256;
            // 0,                      # D14: Резерв
            var reserve2 = packet[30];
            // 0                       # D15: Локальная CRC (пока не используется)
            var lcrc = packet[31];
            return {
                "dt": dt,
                "lat": lat,
                "lon": lon,
                "speed": speed,
                "course": course,
                "sats": sats,
                "vout": vout,
                "vin": vin,
                "fsource": fsource,
                "flags": flags,
                "reserve1": reserve1,
                "reserve2": reserve2,
                "lcrc": lcrc
            };
        } else {
            return null;
        }
    };

    var bingpsparse = function(array){
        // console.log('parse');
        var track = [];
        var points = [];
        var bounds = null;
        var min_hour = 1e15;
        var max_hour = 0;
        var hours = {};
        for(var i=0; i<array.length; i+=32){
            point = parse_onebin(array.subarray(i, i+32));
            // console.log('point=', point);
            if(point){
                var gpoint = new google.maps.LatLng(point.lat, point.lon);
                track.push(gpoint);
                points.push(point);
                if(bounds === null){
                    bounds = new google.maps.LatLngBounds(gpoint, gpoint);
                } else {
                    bounds.extend(gpoint);
                }

                var hour = ~~(point.dt / 60);
                if(hour < min_hour) min_hour = hour;
                if(hour > max_hour) max_hour = hour;
                hours[hour] = (hours[hour] || 0) + 1;
            }
        }
        return {
            track: track,
            bounds: bounds,
            points: points,
            min_hour: min_hour,
            max_hour: max_hour,
            hours: hours
        };
    };

    GeoGPS.select = function(newskey){
        skey = newskey;
    };

    GeoGPS.getHours = function(hourfrom, hourto){
        var defer = $q.defer();
        console.log(['GeoGPS.getHours', skey, hourfrom, hourto, defer]);
        $http({
            method: 'GET',
            cache: false,
            withCredentials: SERVER.api_withCredentials,
            url: SERVER.api + "/geo/hours/" + encodeURIComponent(skey) + "/" + encodeURIComponent(hourfrom) + "/" + encodeURIComponent(hourto) + '?rand=' + (Math.random()*1e18)
        }).success(function(data){
            // console.log('hours data=', data);
            days = {};
            if(!data || (data.hours.length === 0)){
                // callback([]);
            } else {
                // callback(data.hours);
                for(var i=0, l=data.hours.length; i<l; i++){
                    var hour = data.hours[i];
                    var date = new Date(hour * 3600 * 1000);
                    date.setHours(0); date.setMinutes(0); date.setSeconds(0); date.setMilliseconds(0);
                    var dayhour = date.getTime()/1000/3600; // Первый час суток
                    var dateepoch = +(new Date(date.toDateString() + " GMT")) / 1000 / 3600 / 24;
                    if(dateepoch in days){
                        days[dateepoch] += 1;
                        // console.log("set", days);
                    } else {
                        days[dateepoch] = 1;
                        // console.log("grow", days);
                    }
                    // console.log("hour", hour, "->", date.toDateString(), dayhour, dateepoch);
                }
            }
            defer.resolve();
        });
        return defer.promise;
    };

    GeoGPS.checkDay = function(day){
        return day in days;
    };

    GeoGPS.getTrack = function(hourfrom, hourto){
        var defer = $q.defer();
        console.log("getTrack", skey, hourfrom, hourto);

        // GeoGPS.hideTrack();
        $http({
            method: 'GET',
            cache: false,
            withCredentials: SERVER.api_withCredentials,
            responseType: 'arraybuffer',
            url: SERVER.api +
                '/geo/get/' +
                encodeURIComponent(skey) + '/' + encodeURIComponent(hourfrom) + '/' + encodeURIComponent(hourto)
        }).success(function(data){
            console.log('GeoGPS.getTrack.success');
            var uInt8Array = new Uint8Array(data);
            defer.resolve(bingpsparse(uInt8Array));
        });
        return defer.promise;
    };

    // GeoGPS.hideTrack = function(){
    //     if(path) {
    //         path.setMap(null);
    //         path = null;
    //     }
    // };

    return GeoGPS;
}]);

angular.module('resources.logs', ['services.connect'])

.factory('Logs', ['SERVER', '$http', 'Connect', '$rootScope', function (SERVER, $http, Connect, $rootScope) {

    console.log('-- resources.logs.Logs', SERVER, Connect);
    var Logs = {
        'logs': []
    };

    var updater = Connect.updater.on('add_log', function(msg) {
        //if(msg.data.skey == skey) table.insertBefore(log_line(msg.data), table.firstChild);
        Logs.logs.unshift(msg.log);
        console.log(['Logs add_log message:', msg, Logs]);
        $rootScope.$apply();
        //var newpos = new google.maps.LatLng(msg.point.lat, msg.point.lon);
        //lastpos.setPosition(newpos);
    });


    Logs.get = function(skey, akey, callback){
        console.log('Logs.get');
        $http({
            method: 'GET',
            //withCredentials: SERVER.api_withCredentials,
            url: SERVER.api + "/logs/" + encodeURIComponent(skey)
        }).success(function(data){
            console.log('data=', data);
            Logs.logs = data.logs;

            if(data.logs.length === 0){
                callback(0);
            } else {
                callback(-1);
            }
        });
    };

    return Logs;

}]);


angular.module('resources.params', ['services.connect', 'ngResource'])

.factory('Params', ['SERVER', '$resource', 'Connect', function (SERVER, $resource, Connect) {

    console.log('-- resources.params.Params', SERVER, Connect, SERVER.api.replace(/:\d/, '\\$&'));

    var Params = $resource(SERVER.api.replace(/:\d/, '\\$&') + "/params/:skey/:controller",
    {
        skey: "@skey",
        controller: "@controller",
        apikey: "4f679234645"
    },
    {
        set: {
            method: "POST",
            params: {
                controller: "set"
            }
        }
    });

    //return $resource(SERVER.api.replace(/:\d.*\//, ':port/') + "api/params/:skey/:controller",
    //return $resource('http://localhost\\:8183/' + "api/params/:skey/:controller",
    return Params;
}]);

if(0){
    var Params = {
        'params': []
    };

    /*
    // Подпишемся на события изменения параметров
    var updater = Connect.updater.on('add_log', function(msg) {
        //if(msg.data.skey == skey) table.insertBefore(log_line(msg.data), table.firstChild);
        Logs.logs.push(msg.log);
        console.log(['Logs add_log message:', msg, Logs]);
        $rootScope.$apply();
        //var newpos = new google.maps.LatLng(msg.point.lat, msg.point.lon);
        //lastpos.setPosition(newpos);
    });*/


    Params.get = function(skey, akey, callback){
        console.log('Params.get');
        $http.get(SERVER.api + "api/params/get/" + encodeURIComponent(skey) +
            "&akey=" + encodeURIComponent(akey)
        ).success(function(data){
            console.log('data=', data);
            /*Logs.logs = data.logs;

            if(data.logs.length === 0){
                callback(0);
            } else {
                callback(-1);
            }*/
            /*
            if(data.result === "created") {
            //i18nNotifications.pushSticky('login.newUser', 'warning', {name: data.account.name});
            //$scope.label = "Создана новая учетная запись. Вход через 3 секунды.";
            //setTimeout(function(){location.reload();}, 3000);
            } else {
            //$scope.label = "Вход в учетную запись...";
            //setTimeout(function(){location.reload();}, 1000);
            }
            */

            //$rootScope.account = data;
        });
    };

    return Params;
}

angular.module('resources.system', [])

.factory('System', ['SERVER', '$http', function (SERVER, $http) {
    var System = {};

    System.change_desc = function(skey, desc){
        console.log(['System.change_desc', skey, desc]);
        $http({
            method: 'PATCH',
            withCredentials: SERVER.api_withCredentials,
            url: SERVER.api + "/system/" + encodeURIComponent(skey),
            data: JSON.stringify({desc: desc})
        }).success(function(data){
          console.log('login data=', data);
        });

        /*
        $http({
            method: 'GET',
            withCredentials: SERVER.api_withCredentials,
            url: SERVER.api + "/system/changedesc/" + encodeURIComponent(skey) +
          "?desc=" + encodeURIComponent(desc)
        }).success(function(data){
          console.log('login data=', data);
        });
        */

    };

    return System;
}]);

angular.module('services.connect', [])

.factory('Connect', ["$rootScope", 'SERVER', function($rootScope, SERVER) {
    var shared = {};
    shared.updater = {};
    shared.updater.queue = {};

    shared.updater.on = function(msg, foo){
        shared.updater.queue[msg] = shared.updater.queue[msg] || [];
        shared.updater.queue[msg].push(foo);
        console.log(["shared.updater.on(", msg, foo, shared.updater.queue]);
        return foo;
    };

    shared.updater.process = function(msg){
        var i;
        if(shared.updater.queue[msg.message]){
            for(i in shared.updater.queue[msg.message]){
                shared.updater.queue[msg.message][i](msg);
            }
        }
        if(shared.updater.queue['*']){
            for(i in shared.updater.queue['*']){
                shared.updater.queue['*'][i](msg);
            }
        }
        console.log(["shared.updater.process(", msg, shared.updater.queue]);
    };

    shared.updater.remove = function(msg, updater){
        var index = shared.updater.queue[msg].indexOf(updater);
        shared.updater.queue[msg].splice(index, 1);
        console.log(["===> TODO!!!! Not implemented.", updater, shared.updater.queue, index]);
    };

    console.log("===> Connect:init");


    //var ws_server = "ws://gpsapi04.navi.cc:8888/socket";
    //var ws_server = "http://gpsapi04.navi.cc:8888/socket";
    //baseUrl: ((location.hostname === 'localhost') || (location.hostname === 'bigbrother')) ? 'http://localhost:8183/' : 'http://api.newgps.navi.cc/'

    //var ws_server = "http://localhost:8888/socket";
    var ws_server = SERVER.channel;

    var connect = function(timeout){
        if(timeout>60) { timeout = 60; }
        console.log('connecting to ' + ws_server + '...');

        //new SockJS(ws_server)
        //var ws = $rootScope.ws = new WebSocket(ws_server);
        var ws = $rootScope.ws = new SockJS(ws_server);
        ws.onopen = function () {
            console.log('WebSocket connected');
            //$('#main').append('<div>Opened</div>');
            //ws.send("First msg");
        };
        ws.onmessage = function(event) {
            var msg = JSON.parse(event.data);
            console.log('onmessage:', msg);
            //msg.map(function f(m){ shared.updater.process(m); });
            shared.updater.process(msg);
            //shared.send(event.data);
            //$rootScope.$broadcast('channel_data', event.data);
            //$rootScope.$broadcast('change_last');
            //$('#main').append('<div>' + event.data + '</div>');
        };
        ws.onclose = function(event) {
            console.log('WebSocket disconnected');
            setTimeout(function(){
                connect(timeout*2);
            }, timeout*1000);
        };
    };
    connect(1);

    shared.message = '';

    shared.send = function(msg) {
        this.message = msg;
        //this.broadcastItem();
        $rootScope.$broadcast('channel_data', 'aaa');
    };

    /*sharedService.broadcastItem = function() {
        $rootScope.$broadcast('channel_data');
    };*/

    return shared;
}]);


angular.module('services.httpRequestTracker', []);
angular.module('services.httpRequestTracker').factory('httpRequestTracker', ['$http', function($http){

  var httpRequestTracker = {};
  httpRequestTracker.hasPendingRequests = function() {
    return $http.pendingRequests.length > 0;
  };

  return httpRequestTracker;
}]);
// angular.module('services.i18n', [])

// .factory('i18n', ['$location', '$route', function($location, $route) {
//     var i18n = {
//         active: localStorage.getItem('language')
//     };

//     if(!i18n.active) {
//         i18n.active = 'ru';
//     }

//     //console.log('i18 default:', i18n.active);
//     //document.write('<script type="text/javascript" src="js/templates-en.js" id="templates"></script>');

//     i18n.set = function(code){
//         //console.log('i18n onSet', code, $location, $route);
//         localStorage.setItem('language', code);
//         i18n.active = code;
//         I18n.defaultLocale = i18n.active;
//         //$rootScope.$apply();
//         //$location.path($location.$$path);
//         //$route.reload();
//         //location.reload();
//     };

//     I18n.defaultLocale = i18n.active;

//     return i18n;
// }]);

// angular.module('services.i18nNotifications', ['services.notifications', 'services.localizedMessages']);
// angular.module('services.i18nNotifications').factory('i18nNotifications', ['localizedMessages', 'notifications', function (localizedMessages, notifications) {

//   var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
//      return angular.extend({
//        message: localizedMessages.get(msgKey, interpolateParams),
//        type: type
//      }, otherProperties);
//   };

//   var I18nNotifications = {
//     pushSticky:function (msgKey, type, interpolateParams, otherProperties) {
//       console.log('pushSticky', msgKey, type, interpolateParams, otherProperties);
//       return notifications.pushSticky(prepareNotification(msgKey, type, interpolateParams, otherProperties));
//     },
//     pushForCurrentRoute:function (msgKey, type, interpolateParams, otherProperties) {
//       return notifications.pushForCurrentRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
//     },
//     pushForNextRoute:function (msgKey, type, interpolateParams, otherProperties) {
//       return notifications.pushForNextRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
//     },
//     getCurrent:function () {
//       return notifications.getCurrent();
//     },
//     remove:function (notification) {
//       return notifications.remove(notification);
//     }
//   };

//   return I18nNotifications;
// }]);
// angular.module('services.localizedMessages', [])
// .factory('localizedMessages', ['$interpolate', 'I18N.MESSAGES', function ($interpolate, i18nmessages) {

//   var handleNotFound = function (msg, msgKey) {
//     return msg || '?' + msgKey + '?';
//   };

//   return {
//     get : function (msgKey, interpolateParams) {
//       var msg =  i18nmessages[msgKey];
//       if (msg) {
//         return $interpolate(msg)(interpolateParams);
//       } else {
//         return handleNotFound(msg, msgKey);
//       }
//     }
//   };
// }]);

angular.module('services.notifications', []).factory('notifications', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

  var notifications = {
    'STICKY' : [],
    'ROUTE_CURRENT' : [],
    'ROUTE_NEXT' : []
  };
  var notificationsService = {};

  var addNotification = function (notificationsArray, notificationObj) {
    if (!angular.isObject(notificationObj)) {
      throw new Error("Only object can be added to the notification service");
    }
    notificationsArray.push(notificationObj);
    $timeout(function(){
      //console.log('notification time');
      //$rootScope.$apply(function(){
      notificationsService.remove(notificationObj);
      //});
    }, 10000);
    return notificationObj;
  };

  $rootScope.$on('$routeChangeSuccess', function () {
    notifications.ROUTE_CURRENT.length = 0;

    notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
    notifications.ROUTE_NEXT.length = 0;
  });

  notificationsService.getCurrent = function(){
    return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
  };

  notificationsService.pushSticky = function(notification) {
    return addNotification(notifications.STICKY, notification);
  };

  notificationsService.pushForCurrentRoute = function(notification) {
    return addNotification(notifications.ROUTE_CURRENT, notification);
  };

  notificationsService.pushForNextRoute = function(notification) {
    return addNotification(notifications.ROUTE_NEXT, notification);
  };

  notificationsService.remove = function(notification){
    angular.forEach(notifications, function (notificationsByType) {
      var idx = notificationsByType.indexOf(notification);
      if (idx>-1){
        notificationsByType.splice(idx,1);
      }
    });
  };

  notificationsService.removeAll = function(){
    angular.forEach(notifications, function (notificationsByType) {
      notificationsByType.length = 0;
    });
  };

  return notificationsService;
}]);
angular.module('app', [
  'resources.account',
  'app.filters',
  'app.filters.i18n',
  'error',
  'login',
  'map',
  'logs',
  'gps',
  'reports',
  'config',
  'help',
  'i18n',
  '$strap',
  // 'services.i18n',
  // 'services.i18nNotifications',
  'services.httpRequestTracker'
  // 'templates'
]);


var DEVELOP = ((location.hostname === 'localhost') || (location.hostname === 'bigbrother'));
var API_VERSION = "1.0";

angular.module('app').constant('SERVER', {
  api: (DEVELOP ? 'http://api.localhost/' : 'http://api.newgps.navi.cc/') + API_VERSION,
  api_withCredentials: true,    // Должен быть установлен для использования withCredentials, в противном случае используется авторизация через Header:
  //api_port: DEVELOP ? '8183' : '',
  point: DEVELOP ? 'http://localhost:8181/' : 'http://point.newgps.navi.cc/',
  channel: DEVELOP ? 'http://localhost:8888/socket' : 'http://channel.newgps.navi.cc:8888/socket'
});

angular.module('app').constant('globals', {
  locale: 'ru'
});

//TODO: move those messages to a separate module
// angular.module('app').constant('I18N.MESSAGES', {
//   'errors.route.changeError':'Route change error',
//   'crud.user.save.success':"A user with id '{{id}}' was saved successfully.",
//   'crud.user.remove.success':"A user with id '{{id}}' was removed successfully.",
//   'crud.user.save.error':"Something went wrong when saving a user...",
//   'login.error.notAuthorized':"Необходима авторизация чтобы пользоваться сервисом.",
//   'login.error.notAuthenticated':"Необходима авторизация чтобы пользоваться сервисом.",
//   'login.newUser':'Создана новая учетная запись {{name}}.'
// });

angular.module('app').config(['$routeProvider', '$locationProvider', '$httpProvider', 'SERVER', function ($routeProvider, $locationProvider, $httpProvider, SERVER) {
  console.log(['! App CONFIG !', $httpProvider, SERVER]);
  $httpProvider.defaults.withCredentials = SERVER.api_withCredentials;

  if(!$httpProvider.defaults.headers.patch) {
    $httpProvider.defaults.headers.patch = {};
  }
  $httpProvider.defaults.headers.patch["Content-Type"] = 'application/json; charset=utf-8';

  //$locationProvider.html5Mode(true);
  //$routeProvider.otherwise({redirectTo:'/login'});
  //$routeProvider.otherwise({redirectTo:'/error'});
}]);

angular.module('app').run(['$http', 'SERVER', function($http, SERVER){
  console.log(['! App RUN ! ', $http.defaults, SERVER]);
}]);

// angular.module('app').controller('AppCtrl', ['$scope', '$location', 'i18nNotifications', 'localizedMessages', 'i18n', function($scope, location, i18nNotifications, localizedMessages, i18n) {
angular.module('app').controller('AppCtrl', ['$scope', '$location', function($scope, location) {
//angular.module('app').controller('AppCtrl', ['$scope', function($scope) {
  // console.log('app:AppCtrl', i18n);
  // $scope.i18n = i18n;

  // $scope.notifications = i18nNotifications;
  $scope.location = location;

  // $scope.removeNotification = function (notification) {
  //   i18nNotifications.remove(notification);
  // };

  // $scope.$on('$routeChangeError', function(event, current, previous, rejection){
  //   i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
  // });
}]);

//angular.module('app').controller('HeaderCtrl', ['$scope', '$location', '$route', 'notifications', 'httpRequestTracker', function ($scope, $location, $route, notifications, httpRequestTracker) {
angular.module('app').controller('HeaderCtrl', ['$scope', '$location', '$route', 'Account', 'httpRequestTracker', function ($scope, $location, $route, Account, httpRequestTracker) {
  $scope.location = $location;
  $scope.account = Account;

  $scope.home = function () {
    /*if ($scope.currentUser.isAuthenticated()) {
      $location.path('/map');
    } else {*/
      $location.path('/login');
    //}
  };

  $scope.isNavbarActive = function (navBarPath) {
    //console.log('isNavbarActive(', navBarPath, $location, '123');
    //return navBarPath === $location.path();
    return $location.path().match(navBarPath);
  };

  $scope.hasPendingRequests = function () {
    return httpRequestTracker.hasPendingRequests();
  };

  /*$scope.collapse = function() {
    $(".collapse").collapse('toggle');
  };*/
  $scope.$on('$routeChangeSuccess', function (scope, next, current) {
    $(".collapse").collapse('hide');
  });
  /*$(".collapse").collapse({toggle: false});*/

}]);

angular.module('config', ['resources.account', 'resources.system', 'ui', 'config.system.params', 'directives.lists'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/config', {
    templateUrl:'templates/config/config.tpl.html',
    controller:'ConfigViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }],
      system: ['System', function (System) {
        return  System;
      }]
    }
  });
}])

.controller('ConfigViewCtrl', ['$scope', '$location', 'account', 'system', function ($scope, $location, account, system) {
  console.log(["ConfigViewCtrl:", system]);

  $scope.account = account;

  $scope.deleteenable = false;
  //$scope.addform = false;
  /*$scope.onAdd = function(imei){
    console.log('onAdd', imei, account, document.getElementById('config_add_file'));

    account.systemadd([imei]);
    $scope.addform = false;
  };*/

  $scope.onFromFiles = function(){
    console.log('multiple add', $scope.files);
    account.systemadd($scope.files);
    $scope.addform = false;
  };

  $scope.onChange = function(el){
    console.log('onChange', el, $scope.account.account.systems[el].desc);
    system.change_desc(el, $scope.account.account.systems[el].desc);
  };

  $scope.onoff = function(el){
    $scope.account.account.systems[el].off = !$scope.account.account.systems[el].off;
    console.log('onoff', el);
  };

  $scope.sortableOptions = {
    stop: function(e, ui) {
      // console.log("Update", e, account.account.skeys);
      account.systemsort();
    },
    handle: ".msp",
    revert: true,
    scrollSpeed: 5,
    cursor: 'crosshair',
    placeholder: 'ui-sortable-placeholder2',
    axis: 'y'
  };

  $scope.del = function(el){
    //delete el;
    console.log('del', el);
    account.systemdel(el);
    //$scope.account.systems[]
  };
  // var sortableEle = $('ul.config_sys_list').sortable({
  //   handle: ".msp",
  //   revert: true,
  //   scrollSpeed: 5,
  //   cursor: 'crosshair',
  //   placeholder: 'ui-sortable-placeholder2',
  //   end: $scope.onSort
  // }).on('update', function(ev){
  //   console.log('on update', ev);
  // });

  /*$scope.$watch('account', function(){
    console.log('$watch:account');
  }, true);*/

  $scope.manageSystem = function (skey) {
    $location.path('/config/' + skey);
  };

  $scope.manageSystemData = function (skey) {
    $location.path('/config/' + skey + '/data');
  };

  $scope.manageSystemParams = function (skey) {
    $location.path('/config/' + skey + '/params');
  };
  //$("[rel=tooltip]").tooltip();
}]);

angular.module('config.system.data', ['resources.account'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/config/:skey/data', {
    templateUrl:'templates/config/data/data.tpl.html',
    controller:'ConfigDataCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });
}])

.controller('ConfigDataCtrl', ['$scope', '$location', 'account', function ($scope, $location, account) {
  $scope.account = account;
}]);

angular.module('config.system.params.master', ['resources.account', 'resources.params', 'app.filters'])

.config(['$routeProvider', function ($routeProvider) {
  var skey = ['$route', function($route){
    console.log(['=== route', route]);
    return $route.current.params.skey;
  }];
  console.log(['=== skey', skey]);
  $routeProvider.when('/config/:skey/params/master', {
    templateUrl:'templates/config/params/master.tpl.html',
    controller:'ConfigParamsMasterCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }],
      params:['Params', '$route', function (Params, $route) {
        return Params.get({skey:$route.current.params.skey});
      }]
    }
  });
}])

.controller('ConfigParamsMasterCtrl', ['$scope', '$route', '$routeParams', 'account', 'params', '$location', function ($scope, $route, $routeParams, account, params, $location) {
  console.log('ConfigParamsCtrl', $scope, $route, $routeParams, account, params);
  $scope.account = account;
  $scope.skey = $routeParams['skey'];
  $scope.params = params;

  $scope.steps = ['one', 'two', 'three', 'four'];
  $scope.step = 0;

  $scope.isCurrentStep = function(step) {
    return $scope.step === step;
  };

  $scope.setCurrentStep = function(step) {
    $scope.step = step;
  };

  $scope.setNextStep = function(step) {
    $scope.step += 1;
  };

  $scope.getCurrentStep = function() {
    return $scope.steps[$scope.step];
  };

  $scope.confirm = function() {
    $location.path("/config/" + $scope.skey + "/params");
  };

  // Defaults
  $scope.config = {
    in1: "off"
  };

  $("[rel=tooltip]").tooltip();
}]);


angular.module('config.system.params', ['resources.account', 'resources.params', 'app.filters', 'config.system.params.master'])

.config(['$routeProvider', function ($routeProvider) {
  var skey = ['$route', function($route){
    console.log(['=== route', route]);
    return $route.current.params.skey;
  }];
  console.log(['=== skey', skey]);
  $routeProvider.when('/config/:skey/params', {
    templateUrl:'templates/config/params/params.tpl.html',
    controller:'ConfigParamsCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }],
      params:['Params', '$route', function (Params, $route) {
        return Params.get({skey:$route.current.params.skey});
      }],
      system: ['System', function (System) {
        return  System;
      }]
    }
  });
}])

.controller('ConfigParamsCtrl', ['$scope', '$route', '$routeParams', 'account', 'params', 'system', function ($scope, $route, $routeParams, account, params, system) {
  console.log('ConfigParamsCtrl', $scope, $route, $routeParams, account, params);
  $scope.account = account;
  $scope.skey = $routeParams['skey'];
  $scope.params = params;
  $scope.filtered = true;
  //$scope.system = account.account.systems[$scope.skey];
  /*
  $scope.params = [];
  for(var i=0; i<100; i++) {
    $scope.params.push({
      'index': i,
      'name': 'name.' + i,
      'desc': 'Описание ' + i,
      'type': 'INT16',
      'value': i % 10,
      'default': i % 10,
      'queue': null,
      'filter': (i%10) === 1
    });
  }*/
  $scope.isFiltered = function(item) {
    if(!$scope.filtered) {
      return true;
    }
    return item.filter;
  };

  $scope.onChange = function(el){
    // console.log('onChange', el);
    // console.log('onChange', el, $scope.account.account.systems[el].desc);
    system.change_desc(el, $scope.account.account.systems[el].desc);
  };

  $("[rel=tooltip]").tooltip();
}])

.filter('isFiltered', function(){
  return function(value, status){
    console.log('isFiltered:', value, status);
    if(!status) {
      return value;
    }
    var out = [];
    for(var i=0; i<value.length; i++){
      if(value[i].filter) {
        out.push(value[i]);
      }
    }
    return out;
  };
});

angular.module('error', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl:'templates/error/error.tpl.html',
    controller:'ErrorCtrl'
  });

}])

.controller('ErrorCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route) {
  console.log('ErrorCtrl', $location, $route);
  //$route.current.$route.template = "<div>Loaded</div>";
}]);

angular.module('gps', ['resources.account', 'resources.params', 'resources.geogps', 'app.filters', 'config.system.params.master'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/gps', {
    templateUrl:'templates/gps/gps.tpl.html',
    controller:'GPSViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });
  $routeProvider.when('/gps/:skey', {
    templateUrl:'templates/gps/gps.tpl.html',
    controller:'GPSViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }],
      system: ['System', function (System) {
        return  System;
      }]
    }
  });

}])

.controller('GPSViewCtrl', ['$scope', '$route', '$routeParams', '$location', 'account', 'GeoGPS', function ($scope, $route, $routeParams, $location, account, GeoGPS) {
  var startskey = $scope.skey = $routeParams['skey'];
  console.log('gps select: ', $scope.skey);

  $scope.account = account;
  $scope.track = null;

  $scope.$watch('skey', function(skey){
    if($scope.skey !== startskey) {
      //console.log('reload', $scope.skey, skey);
      $location.path('/gps/' + $scope.skey);
      //reload();
    }
  });

  $scope.gpsdata = [{lat: 1.0, lon: 1.0}];

  var date = new Date();
  var tz = (new Date()).getTimezoneOffset()/60;
  var hourfrom = Math.floor(date.valueOf() / 1000 / 3600 / 24) * 24 + tz;

  if($scope.skey && $scope.skey != ''){
    GeoGPS.select($scope.skey);
    GeoGPS.getTrack(hourfrom, hourfrom+23)
        .then(function(data){
            console.log(["getTrack: ", data]);
            $scope.track = data;
            /*$scope.track = data;
            $scope.points = data.track.length;
            fake_timeline();*/
        });

    $scope.mapconfig = {
        autobounds: true,   // Автоматическая центровка трека при загрузке
        animation: false,   // Анимация направления трека
        numbers: true       // Нумерация стоянок/остановок
    };

    $scope.onMouseOver = function(g) {
      $scope.center = g;
      //console.log('onmouseover', g);
    };
  }
  /*$scope.onSelect = function(){
    console.log('onSelect', $scope.system, $scope.skey);
    //$location.path(s);
    //$location.path('/gps/' + $scope.system);
  }*/
}]);

angular.module('help', ['resources.account'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/help', {
    templateUrl:'templates/help/help.tpl.html',
    controller:'HelpViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });
}])

.controller('HelpViewCtrl', ['$scope', '$location', 'account', function ($scope, $location, account) {
  $scope.account = account;
}]);

angular.module('login', ['resources.account', 'app.filters', 'directives.modal', 'i18n', 'directives.language'])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.when('/login', {
    // templateUrl:'login.tpl.html',
    templateUrl:'templates/login/login.tpl.html',
    controller:'LoginViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });

  $routeProvider.when('/test-login', {
    //templateUrl:'templates/en/login.tpl.html',
    template: '<div>Loading...</div>',
    controller:'TestLoginViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        return Account;
      }]
    }
  });

  $routeProvider.otherwise({ redirectTo: '/error' });

}])

.controller('TestLoginViewCtrl', ['$scope', '$location', '$route', function ($scope, $location, $route) {
  console.log('TestLoginViewCtrl', $location, $route);
  $route.current.$route.template = "<div>Loaded</div>";
}])

.controller('LoginViewCtrl', ['$scope', '$location', 'account', '$templateCache', function ($scope, $location, account, $templateCache) {
  $scope.account = account;
  $scope.test = "Hello, it's test.";
  $scope.showLoginForm = true;
  $scope.user = {};

  console.log('$templateCache=', $templateCache.get('templates/ru/login.tpl.html'));

  $scope.showLogin = function(msg) {
    $scope.authError = msg;
    $scope.showLoginForm = true;
  };

  $scope.cancelLogin = function() {
    //AuthenticationService.cancelLogin();
    $scope.showLoginForm = false;
  };

  $scope.hideLogin = function() {
    $scope.showLoginForm = false;
  };

  $scope.onLogout = function(){
      account.logout();
      $scope.user = {};
  };
  $scope.onLogin = function(user, pass){
    $scope.loginform = false;
    console.log('Login:', $scope, user, pass);

    if((user === "")||(!user)) {
      return;
    }
    account.login(user, pass);

    return false;
  };

  $scope.onChange = function(model) {
    console.log('onChange', model);
  };

  /*
  $scope.$watch(function(){
      if($scope.account.account) {
        return $scope.account.account.name;
      } else {
        return null;
      }
    }, function(el, old){
      if(!$scope.account.account) {
        return;
      }
      console.log('bind fire', el, $scope.account.account.name, old);
    }
  );
  */
  $scope.$watch('account.account.name', function(newValue, oldValue){
    console.log(['bind fire', newValue, oldValue]);
    if(newValue && oldValue) {
      $scope.account.update({"$set": {name: newValue}});
    }
  });

  //console.log('LoginViewCtrl controller', $scope, $location, account, i18n);
}]);



angular.module('logs', ['resources.account', 'resources.logs'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/logs', {
    templateUrl:'templates/logs/logs.tpl.html',
    controller:'LogsViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }],
      logs:['Logs', function(Logs){
        return Logs;
      }]
    }
  });
}])

.controller('LogsViewCtrl', ['$scope', '$location', 'account', 'logs', function ($scope, $location, account, logs) {
  $scope.account = account;
  $scope.skey = "";
  $scope.logs = logs;
  $scope.comment = "Данные еще не получены";
  //$scope.skey = account.account.skeys[0];
  $scope.onSelect = function(){
    console.log('selected');
  };

  var reload = function(){
    if((!$scope.skey) || ($scope.skey === "")) {
      return;
    }
    $scope.logs.logs = [];
    $scope.comment = "Данные загружаются...";
    console.log(['change skey', $scope.skey, $scope.account]);
    $scope.logs.get($scope.skey, $scope.account.akey, function(res){
      if(res === 0) {
        $scope.comment = "Нет событий.";
      } else {
        $scope.comment = "Неизвестно";
      }
    });
  };

  $scope.onReload = function(){
    reload();
  };

  $scope.$watch('skey', function(skey){
    reload();

    /*
    var logs = [];
    for(var i=0; i<100; i++) {
      logs.push({
        "dt": 0,
        "text": "Hello"
      });
    }
    $scope.logs.logs = logs;
    */
  });
  $("[rel=tooltip]").tooltip();
}]);

angular.module('map', ['resources.account', 'directives.gmap', 'directives.main', 'directives.timeline', 'resources.geogps', 'i18n', 'directives.language'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/map', {
        templateUrl:'templates/map/map.tpl.html',
        controller:'MapCtrl',
        resolve:{
            account:['Account', function (Account) {
                //TODO: need to know the current user here
                return Account;
            }]
        }
    });
}])

.controller('MapCtrl', ['$scope', '$location', 'account', 'GeoGPS', '$log', function ($scope, $location, account, GeoGPS, $log) {
    $scope.account = account;
    $scope.track = null;

    var datepicker = $('#datepicker').datepicker({
        beforeShowDay: function(date) {
            var hour = date.valueOf()/1000/3600,
                day = hour/24;
            // console.log("beforeShowDay", day, (hour%2 === 0)?'enabled':'disabled');
            return GeoGPS.checkDay(day)?'enabled':'disabled';
        }
    }).on('changeDate', function(ev){
        var date = ev.date;
        var tz = (new Date()).getTimezoneOffset()/60;
        var hourfrom = date.valueOf() / 1000 / 3600 + tz;
        // console.log(["datepicker: on changeDate", ev, date]);
        // $log.warn("datepicker:changeDate. Bad path point inn the $scope.path array ");
        // $log.error("datepicker:changeDate. Bad path point inn the $scope.path array ");
        $log.info("datepicker:changeDate.", $scope);
        $scope.$apply(function(){   // Без этого не будет индикации процесса загрузки

            GeoGPS.getTrack(hourfrom, hourfrom+23)  // +23? не 24?
                .then(function(data){
                    console.log(["getTrack: ", data]);
                    $scope.track = data;
                    $scope.points = data.track.length;
                    fake_timeline();
                });
        });
    });

    var fake_timeline = function(){
        // Пока сгенерируем фальшивые данные
        var start = 0;
        var data = d3.range(~~(Math.random() * 10)+2).map(function(i){
            var stop = start + ~~(Math.random() * 500);
            var point = {
                counter: i+1,
                move: (i%2) === 1,
                start: start,
                stop: stop
            };
            start = stop;
            return point;
        });
        if(data[data.length-1].stop < 2500){
            data[data.length-1].stop = 2500;
        }
        // console.log("data=", data);
        $scope.timeline = data;
    }


    $scope.onSysSelect = function(skey){
        // loadTrack(skey);

        GeoGPS.select(skey);
        GeoGPS.getHours(0, 1000000)
            .then(function(){
                // Недокументированный метод. Метод update изменяет текущий месяц
                $('#datepicker').datepicker("fill");
            });
    };

    $scope.hideTrack = function(){
        // console.log("Hide track");
        // //GeoGPS.hideTrack();
        // if(path) {
        //     path.setMap(null);
        //     path = null;
        // }
        $scope.track = null;
        $scope.timeline = [];
    };

    $scope.zoomlist = 0;
    $scope.doZoomList = function(){
        // console.log("doZoomList");
        $scope.zoomlist += 1;
        if($scope.zoomlist >= 3) $scope.zoomlist = 0;
    };

    $scope.mapconfig = {
        autobounds: true,   // Автоматическая центровка трека при загрузке
        animation: false,   // Анимация направления трека
        numbers: true       // Нумерация стоянок/остановок
    };

    $scope.showconfig = false;
    // $scope.toggleShowConfig = function(){
    //     $scope.showconfig = !$scope.showconfig;
    //     console.log($scope.showconfig);
    // };
}])

.directive("configMapItem", function(){
    return{
        restrict: 'EA',
        scope: {
            item: "=",
            iconOn: "@",
            iconOff: "@"
         },
        replace: true,
        transclude: true,
        template: '<li ng-click="toggleValue()"><span></span><span ng-transclude></span></li>',
        link: function(scope, element, attrs) {
            var icon = element[0].querySelector('span');
            scope.toggleValue = function(){
                console.log("toggle", scope.item, scope);
                scope.item = !scope.item;
            };
            scope.$watch("item", function(item){
                icon.className = "icon-" + (item?scope.iconOn:scope.iconOff) + " icon-large";
                if(item){
                    element.addClass("on");
                    element.removeClass("off");
                } else {
                    element.addClass("off");
                    element.removeClass("on");
                }
                // element[0].class =
            });
        }
    };
});


angular.module('reports', ['resources.account'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/reports', {
    templateUrl:'templates/reports/reports.tpl.html',
    controller:'ReportsViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });
}])

.controller('ReportsViewCtrl', ['$scope', '$location', 'account', function ($scope, $location, account) {
  $scope.account = account;
}]);