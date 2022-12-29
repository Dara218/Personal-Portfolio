"use strict";

$(document).ready(function () {
  var date = new Date();
  var year = date.getFullYear();
  $('#date').text(year);
  var body = $('body');
  var centerContainer1 = $('.center-container1').offset().top;
  var centerContainer2 = $('.center-container2').offset().top;
  var centerContainer3 = $('.center-container3').offset().top;
  $(this).on('scroll', function () {
    var a = $('#projects');
    var input = $('.contact-me input');
    var leftPanel = $('.left-panel ul a');
    var rightPanel = $('.right-panel a');
    var aLink = $('.center-container3 p a');

    if (scrollY >= centerContainer1) {
      leftPanel.hide();
      rightPanel.hide();
    } else {
      leftPanel.show();
      rightPanel.show();
    }

    if (scrollY >= centerContainer3 - 50) {
      body.addClass('changeColor');
      input.addClass('changeColorText');
      aLink.addClass('changeColorTextLink');
      leftPanel.show().addClass('changeColorText');
      rightPanel.show().addClass('changeColorText');
    } else {
      body.removeClass('changeColor');
      input.removeClass('changeColorText');
      aLink.removeClass('changeColorTextLink');
      leftPanel.removeClass('changeColorText');
      rightPanel.removeClass('changeColorText');
    }
  });
  var hamburgerBtn = $('.fa-bars');
  hamburgerBtn.on('click', function () {
    var hamburgerMenu = $('.hamburger-menu');
    hamburgerMenu.slideToggle('active');
  });
  var projects = [{
    id: 1,
    name: 'Project Name1',
    photo: 'https://picsum.photos/350/200/?random=1'
  }, {
    id: 2,
    name: 'Project Name2',
    photo: 'https://picsum.photos/350/200/?random=2'
  }, {
    id: 3,
    name: 'Project Name3',
    photo: 'https://picsum.photos/350/200/?random=3'
  }, {
    id: 4,
    name: 'Project Name4',
    photo: 'https://picsum.photos/350/200/?random=4'
  }, {
    id: 5,
    name: 'Project Name5',
    photo: 'https://picsum.photos/350/200/?random=5'
  }];
  var projectWrapper = $('.project-wrapper');
  var eachProductsMap = projects.map(function (eachMap) {
    return "<div class=\"project-item\">\n        <img src=\"".concat(eachMap.photo, "\" alt=\"project 1\">\n        <div class=\"project-details\">\n            <div class=\"project-title\">").concat(eachMap.name, "</div>\n            <span>\n            <i class=\"fa-brands fa-github\"></i>\n            <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n            </span>\n        </div>\n    </div>");
  });

  function loadProjects() {
    projectsSlice1 = eachProductsMap.slice(0, 3);
    projectWrapper.html(projectsSlice1);
  }

  loadProjects();
  var loadMoreBtn = $('.fa-arrow-down');
  var currentProjectCount = 3;
  loadMoreBtn.on('click', function () {
    currentProjectCount++;
    loadMore(currentProjectCount);

    if (currentProjectCount === projects.length) {
      $(this).slideUp();
    } else {
      $(this).slideDown();
    }
  });

  function loadMore(currentProjectCount) {
    projectsSlice1 = eachProductsMap.slice(0, currentProjectCount);
    projectWrapper.html(projectsSlice1);
    console.log(currentProjectCount);
  }

  var aboutBtn = $('#about');
  var projectsBtn = $('#projects');
  var contactBtn = $('#contact');
  aboutBtn.on('click', function () {
    window.scrollTo(0, centerContainer2);
  });
  projectsBtn.on('click', function () {
    window.scrollTo(0, centerContainer3);
  });
  contactBtn.on('click', function () {
    window.scrollTo(0, $(document).height());
  });
  var aboutBtnBurger = $('#aboutBurger');
  var projectsBtnBurger = $('#projectsBurger');
  var contactBtnBurger = $('#contactBurger');
  aboutBtnBurger.on('click', function () {
    window.scrollTo(0, centerContainer2);
  });
  projectsBtnBurger.on('click', function () {
    window.scrollTo(0, centerContainer3);
  });
  contactBtnBurger.on('click', function () {
    window.scrollTo(0, $(document).height());
  });
});