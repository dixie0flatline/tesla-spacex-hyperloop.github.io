$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  };

  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav--active');
  };

  function toggleSubMenu() {
    $(this).toggleClass('nav__link--plus nav__link--minus');
    $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
  };

  init()
});


$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon1"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon1"]').on('click', toggleSubMenu);
  };

  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open1');
    $('[data-element="toggle-nav1"]').toggleClass('nav--active1');
  };

  function toggleSubMenu() {
    $(this).toggleClass('nav__link--plus1 nav__link--minus1');
    $('[data-behaviour="toggle-sub-menu1"]').slideToggle('nav__sub-list--active1');
  };

  init()
});