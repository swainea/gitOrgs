(function (gitHubOrgs){
  'use strict';

  $('.loadOrgs').on('click', function handleData(){
    gitHubOrgs.gitOrgsData();
  });

  function renderItem(element){
    $(".orgList")
      .append( $('<li>') )
      .find('li:last-child')
        .text(element.login)
        .append( $('<img>') )
        .find('img')
          .attr('src', element.avatar);
  }

  gitHubOrgs.renderItem = renderItem;

  window.gitHubOrgs = gitHubOrgs;

}) ( window.gitHubOrgs || {} );
