export const slideUp = {
  start: {
    translateY: "30px",
  },
  slideUp: {
    translateY: "0px",
    transition: {
      ease: "easeOut", duration: 0.3
    }
  },
  end: {
    translateY: "0px"
  }
}

export const zoomIn = {
  start: {
    scale: 0.8
  },
  zoomIn: {
    scale: 1,
    transition: {
      ease: "easeIn", duration: 0.3
    }
  },
  end: {
    scale: 0
  }
}