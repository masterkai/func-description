class Carousel {
  constructor(carousel, imgContainer, leftBtn, rightBtn, images, thumbs, circles, timeout = 2000) {
    this.carousel = carousel
    this.imgContainer = imgContainer
    this.leftBtn = leftBtn
    this.rightBtn = rightBtn
    this.images = images
    this.thumbs = thumbs
    this.timeout = timeout
    this.sliderSize = this.carousel.clientWidth
    this.index = 0
    this.resizeTimer = null
    this.circles = circles
    // this.pagination = document.querySelectorAll('.pagination .circle')
    this.interval = setInterval(() => {
      this.run()
      // console.log(this.currentIndex());
    }, this.timeout)
    this.resetSize()
    this.windowResize()
    this.controller()
    this.thumb()
    // this.createCircle()
    // this.addActiveCircle()
    this.initialActiveCircle()
  }
  currentIndex() {
    // console.log(this.index);
    return this.index
  }

  thumb() {
    const that = this
    this.thumbs.forEach((item, i) => {
      item.addEventListener('click', () => {
        that.index = i
        this.changeImage()
        this.resetInterval()
      })
    })
  }

  controller() {
    const that = this
    this.rightBtn.addEventListener('click', () => {
      that.index++
      this.changeImage()
      this.resetInterval()
      this.addActiveCircle(this.index)
    })
    this.leftBtn.addEventListener('click', () => {
      that.index--
      this.changeImage()
      this.resetInterval()
      this.addActiveCircle(this.index)
    })

  }

  initialActiveCircle(){
    if(this.circles){
      this.circles[0].classList.add('active')
    }
  }

  addActiveCircle(index) {

    this.circles.forEach(item => item.classList.remove('active'))
    this.circles[index].classList.add('active')
  }

  windowResize() {
    const that = this
    window.addEventListener('resize', function (event) {
      if (that.resizeTimer) clearTimeout(that.resizeTimer);
      that.resizeTimer = setTimeout(() => {
        that.resetSize()
      }, 500)
    })
  }

  resetSize() {
    this.index = 0
    this.changeImage()
    this.sliderSize = this.carousel.clientWidth
    if (window.innerWidth <= 500) {
      this.images.forEach(image => image.style.width = '100%')
    } else {
      this.images.forEach(image => image.style.width = `${this.carousel.clientWidth}`)
    }
  }

  run() {
    this.index++
    this.changeImage()
    this.addActiveCircle(this.index)
  }

  resetInterval() {
    // console.log('interval has been reset!!');
    clearInterval(this.interval)
    this.interval = setInterval(() => this.run(), this.timeout)
  }

  changeImage() {
    if (this.index > this.images.length - 1) {
      this.index = 0
    } else if (this.index < 0) {
      this.index = this.images.length - 1
    }
    this.imgContainer.style.transform = `translateX(${-this.index * this.sliderSize}px)`
  }
}

class Thumbs {
  constructor(carousel, thumbsContainer, prevBtn, nextBtn, thumbs) {
    this.carousel = carousel
    this.thumbsContainer = thumbsContainer
    this.prevBtn = prevBtn
    this.nextBtn = nextBtn
    this.thumbs = thumbs
    this.thumbSize = undefined
    this.thumbIndex = 0
    this.resizeTimer = null
    this.resetSize()
    this.windowResize()
    this.controller()
  }

  resetSize() {
    this.thumbs.forEach(thumb => thumb.style.width = `${(this.carousel.clientWidth / 5) - 16}px`)
    this.thumbIndex = 0
    this.thumbSize = carousel.clientWidth
    this.changeThumb()
  }

  changeThumb() {
    if (this.thumbs.length <= 5) {
      this.thumbIndex = 0
    } else {
      if (this.thumbIndex > (this.thumbs.length / (this.thumbs.length / 2)) - 1) {
        this.thumbIndex = 0
      } else if (this.thumbIndex < 0) {
        this.thumbIndex = (this.thumbs.length / (this.thumbs.length / 2)) - 1
      }
    }
    this.thumbsContainer.style.transform = `translateX(${-this.thumbIndex * this.thumbSize}px)`
  }

  controller(){
    const that = this
    this.nextBtn.addEventListener('click', () => {
      that.thumbIndex++
      that.changeThumb()
    })
    this.prevBtn.addEventListener('click', () => {
      that.thumbIndex--
      that.changeThumb()
    })
  }

  windowResize() {
    const that = this
    window.addEventListener('resize', function (event) {
      if (that.resizeTimer) clearTimeout(that.resizeTimer);
      that.resizeTimer = setTimeout(() => {
        that.resetSize()
      }, 500)
    })
  }

}

class Circle {
  constructor() {

  }
}