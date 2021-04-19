import { ref } from 'vue'

export const useScrollbar = tagsItem => {
  const scrollContainer = ref(null)

  const handleScroll = e => {
    const eventDelta = e.wheelDelta || -e.deltaY
    scrollContainer.value.wrap.scrollLeft -= eventDelta / 4
  }

  const moveToTarget = currentTag => {
    const containerWidth = scrollContainer.value.scrollbar.offsetWidth
    const scrollWrapper = scrollContainer.value.wrap
    const tagList = tagsItem.value

    let firstTag = null
    let lastTag = null

    if (tagList.length > 0) {
      firstTag = tagList[0]
      lastTag = tagList[tagList.length - 1]
    }
    if (firstTag === currentTag) {
      scrollWrapper.scrollLeft = 0
    } else if (lastTag === currentTag) {
      scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth
    } else {
      const el = currentTag.$el.nextElementSibling
      scrollWrapper.scrollLeft =
        el.offsetLeft + el.offsetWidth > containerWidth
          ? el.offsetLeft - el.offsetWidth
          : 0
    }
  }

  return {
    scrollContainer,
    handleScroll,
    moveToTarget,
  }
}
