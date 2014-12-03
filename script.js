(function() {

    function showSubMenuFromTop() {
        $('.avp-header').addClass('is-open-from-top');
        $('.header-overlay').addClass('is-visibled');
    }

    function showSubMenu() {
        if ($(this).hasClass('is-current') && !$(this).parents('.avp-header').hasClass('is-open-from-top') && !$(this).parents('.avp-header').hasClass('is-open-from-left') && $(window).width() >= 1440) {
            return;
        }

        if ($(this).hasClass('is-selected')) {
            hideSubMenu();
            return;
        }

        $('.avp-header').addClass('is-open-from-left');
        $('.header-overlay').addClass('is-visibled');
        $('.header-left-col').addClass('is-visibled');
        $('.header-left-menu-item.is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
    }

    function hideSubMenu() {
        $('.avp-header').removeClass('is-open-from-left');
        $('.header-overlay').removeClass('is-visibled');
        $('.header-left-col').removeClass('is-visibled');
        $('.header-left-menu-item.is-selected').removeClass('is-selected');
    }

    function hideSubMenuFromTop() {
        $('.avp-header').removeClass('is-open-from-top');
        $('.header-overlay').removeClass('is-visibled');
        $('.header-left-col').removeClass('is-visibled');
        $('.header-left-menu-item.is-selected').removeClass('is-selected');
    }

    $(document).ready(function () {
        $('.header-top-menu').on('click', showSubMenuFromTop);
        $('.header-left-menu-item').on('click', showSubMenu);
        $('.header-overlay').on('click', hideSubMenu);
        $('.header-left-button').on('click', hideSubMenuFromTop);
    });

})();