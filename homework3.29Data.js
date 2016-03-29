(function (gitHubOrgs){
  'use strict';

  var ghOrgs = "/data.json";
  var userData = [];

  gitHubOrgs.gitOrgsData = function gitOrgsData (){
    $.ajax({
      type: 'GET',
      url: ghOrgs,
      dataType: 'json',
      success: function showGHOrgs(data) {
        data.forEach(function(element, i){
          userData.push ( { avatar: element.avatar_url, login: element.login} );
          gitHubOrgs.renderItem( userData[userData.length-1] );
        });
      }
  });
};
  window.gitHubOrgs = gitHubOrgs;

}) ( window.gitHubOrgs || {} );
