(function (gitHubOrgs){
  'use strict';

  $('.loadOrgs').on('click', function handleData(){
    gitHubOrgs.gitOrgsData();
  });

  function renderItem(element){
    $(".orgList")
      .append( $('<li>')
        .append( $('<img>').attr('src', element.avatar) )
        .append( $('<p>').text(element.login))
      ); 
  }

  gitHubOrgs.renderItem = renderItem;

  window.gitHubOrgs = gitHubOrgs;

}) ( window.gitHubOrgs || {} );
