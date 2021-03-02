$(function () {
  const tabState = {
    lastTab: 0
  }

  $('.features').each(function () {
    let $tabList = $(this).find('.features__items'),
      $tabAnchors = $tabList.find('.item'),
      $tabPanels = $(this).find('.watch .feature');

    $tabAnchors.each(function (currentTab, obj) {
      $(obj).on('click', function (e) {
        e.preventDefault();
        // console.log($tabPanels.eq(currentTab));
        $tabPanels.eq(tabState.lastTab).css({display: 'none',visibility:'hidden',animationName:'none'});
        $tabPanels.eq(currentTab).css({display: 'block',visibility:'visible',animationName:'fadeIn'});
        tabState.lastTab = currentTab;

        // Add active class to the tab which was clicked!!
        let $this = $(obj);
        // console.log($this.attr('href'));
        if ($this.hasClass('active')) {
          return;
        }

        $tabAnchors.removeClass('active');
        $this.addClass('active');

      });
    });


    $tabAnchors.eq(0).trigger('click');
  });
});