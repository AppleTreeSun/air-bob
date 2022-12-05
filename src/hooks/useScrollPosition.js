
import { useEffect, useState } from 'react';
import _ from 'lodash'


export function useScrollPosition() {

  // 记录滚动的位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window的滚动
  useEffect(() => {

    const handleScrollChange = _.throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', handleScrollChange)

    return () => {
      window.removeEventListener('scroll', handleScrollChange)
    }
  }, [])

  return {
    scrollX,
    scrollY
  }

}