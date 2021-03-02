$(function () {
  const windowWidth = $(window).width()
  const controller = new ScrollMagic.Controller({
    addIndicators: false
  })
  $('.sports-functions .slide').each(function () {
    const featuresId = '#' + $(this).attr('id')
    const featuresFirstId = '#' + $('.sports-functions #slideContainer>.slide:first-child').attr('id')
    const features = gsap.timeline({
      repeat: 0
    })

    features.to('.slide .slide-right', 1, {display: 'none', opacity: 0, ease: 'Power4.inOut'}, 1)
      .to(`${featuresId} .slide-right`, 10, {display: 'block', opacity: 1, ease: 'Power4.inOut'}, 1)

    const featuresScene = new ScrollMagic.Scene({
      triggerHook: 0.1,
      triggerElement: featuresId,
      offset: -$(featuresId).height() / 12,
      duration: $(featuresId).height() / 4
    })
      .setTween(features)
      // .addIndicators({
      //   indent: 0,
      // })
      .addTo(controller)
  })

  $('.recovery-conditions .slide').each(function () {
    const featuresId = '#' + $(this).attr('id')
    const featuresFirstId = '#' + $('.recovery-conditions #slideContainer2>.slide:first-child').attr('id')
    const features = gsap.timeline({
      repeat: 0
    })

    features.to('.slide .slide2-left', 1, {display: 'none', opacity: 0, ease: 'Power4.inOut'}, 1)
      .to(`${featuresId} .slide2-left`, 10, {display: 'block', opacity: 1, ease: 'Power4.inOut'}, 1)

    const featuresScene = new ScrollMagic.Scene({
      triggerHook: 0.1,
      triggerElement: featuresId,
      offset: -$(featuresId).height() / 12,
      duration: $(featuresId).height() / 4
    })
      .setTween(features)
      // .addIndicators({
      //   indent: 0,
      // })
      .addTo(controller)
  })

  const leaveFeaturesInfo = gsap.timeline({
    repeat: 0
  })
  const leaveFeaturesInfo2 = gsap.timeline({
    repeat: 0
  })

  leaveFeaturesInfo.to('.slide .slide-right, .slide .slide-left ', 1, {
    top: '-100vh'
  })

  const leaveFeaturesInfoScene = new ScrollMagic.Scene({
    triggerElement: '#sleep',
    duration: $('#sleep').height() * 2.2
  })
    .setTween(leaveFeaturesInfo)
    // .addIndicators({
    //   name: 'leaveFeaturesInfoScene',
    //   indent: 40,
    // })
    .triggerHook('onLeave')
    .addTo(controller)

  leaveFeaturesInfo2.to('.slide .slide2-left, .slide .slide-right ', 1, {
    top: '-100vh'
  })

  const leaveFeaturesInfo2Scene = new ScrollMagic.Scene({
    triggerElement: '#Recovery-state',
    duration: $('#Recovery-state').height() * 2.2
  })
    .setTween(leaveFeaturesInfo2)
    // .addIndicators({
    //   name: 'leaveFeaturesInfoScene',
    //   indent: 40,
    // })
    .triggerHook('onLeave')
    .addTo(controller)

})