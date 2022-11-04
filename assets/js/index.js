const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true },
    mobile: { smooth: true },
  })
  
  scroll.on('scroll', () => {
    if (document.querySelector('#color.is-inview')) {
      document.body.style.background = 'rgb(163, 210, 251)'
      document.body.style.background = 'rgb(65, 65, 165)'
    } else {
      document.body.style.background = 'rgb(65, 65, 165)'
      document.body.style.background = 'rgb(163, 210, 251)'
  }
  })
  