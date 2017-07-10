
(function() {
  'use strict';

  angular.module('app', ['irontec.simpleChat']);

  angular.module('app').controller('Shell', Shell);



  function Shell() {

    var vm = this;

    vm.messages = [];

    vm.username = 'Visitante';

    vm.sendMessage = function(message, username) {

      vm.messages.push({
        'username': username,
        'content': message
      })


      var result = null;
      $.ajax({
        url: "http://localhost:1880/newChatMessage?message="+message+"&username="+username,
        dataType: 'jsonp',
        async: false,
        success: function (json) {
          result = json;
          console.log("success!");
            vm.messages.push({
              'username': "amiGO!",
              'content': json.output.text[0]
            });

          vm.toggle;vm.toggle;
        },
        error: function (error) {
          alert( "Error: "+error );
        }

      });
      alert(result);
    };

  }

})();
