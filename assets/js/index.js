const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    inertia: 0.8,
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
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
  