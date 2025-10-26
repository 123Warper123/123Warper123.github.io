document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider')
    const slides = slider.querySelectorAll('.slide')
    const activeSlides = 'slide--active'
    const slideCount = slides.length
    const controlButtons = slider.querySelectorAll('.button-radio')
    const prevButton = slider.querySelector('.button-prev')
    const nextButton = slider.querySelector('.button-next')
    const activeButton = 'active'
    const inactiveButton = 'aria-disabled'
    const currentButton = 'aria-current'

    let currentSlide = 0
    let slidesToShow = 3

    function updateSlider() {
        slides.forEach(slide => {
            slide.classList.remove(activeSlides)
        })

        for (let i = 0; i < slidesToShow; i++) {
            const slideIndex = currentSlide + i
            if (slideIndex < slideCount) {
                slides[slideIndex].classList.add(activeSlides)
            }
        }

        controlButtons.forEach((button, index) => {
            const isMobile = window.innerWidth <= 768

            if (isMobile) {
                if (index === currentSlide) {
                    button.classList.add(activeButton)
                    button.setAttribute(currentButton, true)
                } else {
                    button.classList.remove(activeButton)
                    button.removeAttribute(currentButton)
                }
            } else {
                const groupIndex = Math.floor(index / 3)
                const currentGroup = Math.floor(currentSlide / 3)

                if (groupIndex === currentGroup) {
                    button.classList.add(activeButton)
                    button.setAttribute(currentButton, true)
                } else {
                    button.classList.remove(activeButton)
                    button.removeAttribute(currentButton)
                }
            }
        })

        const isMobile = window.innerWidth <= 768
        if (isMobile) {
            prevButton.setAttribute(inactiveButton, currentSlide === 0)
            nextButton.setAttribute(inactiveButton, currentSlide >= slideCount - 1)
        } else {
            prevButton.setAttribute(inactiveButton, currentSlide === 0)
            nextButton.setAttribute(inactiveButton, currentSlide >= slideCount - slidesToShow)
        }
    }

    controlButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const isMobile = window.innerWidth <= 768

            if (isMobile) {
                currentSlide = index
            } else {
                currentSlide = index * 3
                if (currentSlide > slideCount - slidesToShow) {
                    currentSlide = slideCount - slidesToShow
                }
            }
            updateSlider()
        })
    })

    prevButton.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768

        if (isMobile) {
            if (currentSlide > 0) {
                currentSlide--
            }
        } else {
            if (currentSlide >= slidesToShow) {
                currentSlide -= slidesToShow
            } else {
                currentSlide = 0
            }
        }
        updateSlider()
    })

    nextButton.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768

        if (isMobile) {
            if (currentSlide < slideCount - 1) {
                currentSlide++
            }
        } else {
            if (currentSlide < slideCount - slidesToShow) {
                currentSlide += slidesToShow
            }
        }
        updateSlider()
    })

    slider.addEventListener('keydown', function (event) {
        const isMobile = window.innerWidth <= 768

        if (event.key === 'ArrowLeft') {
            if (isMobile && currentSlide > 0) {
                currentSlide--
                updateSlider()
            } else if (!isMobile && currentSlide >= slidesToShow) {
                currentSlide -= slidesToShow
                updateSlider()
            }
        } else if (event.key === 'ArrowRight') {
            if (isMobile && currentSlide < slideCount - 1) {
                currentSlide++
                updateSlider()
            } else if (!isMobile && currentSlide < slideCount - slidesToShow) {
                currentSlide += slidesToShow
                updateSlider()
            }
        }
    })

    function checkScreenSize() {
        const isMobile = window.innerWidth <= 768

        if (isMobile) {
            slidesToShow = 1
            controlButtons.forEach(btn => {
                btn.style.display = 'block'
            })
        } else {
            slidesToShow = 3
            controlButtons.forEach((btn, index) => {
                btn.style.display = index < 3 ? 'block' : 'none'
            })
        }

        currentSlide = 0
        updateSlider()
    }

    window.addEventListener('resize', checkScreenSize)
    checkScreenSize()

    updateSlider()
})