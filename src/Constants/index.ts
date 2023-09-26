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


export const pageStyles = {
  wrapper: 'wrapper',
  jobWrapper: 'sm:w-full',
  title: 'mt-10 mb-8',
  divider: 'divider',
  feed_child1: 'flex-between',
  feed_child1_searchIcon: "text-lg cursor-pointer",
  feed_child2: 'my-5 flex flex-wrap justify-center sm:justify-between'
}