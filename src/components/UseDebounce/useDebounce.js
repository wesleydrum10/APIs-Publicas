import { useRef } from 'react'

export default function useDebounce(func, delay) {
  
  const timeoutRef = useRef(null)

  function debounceFn(...params) {
    
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(()=> {
      func(...params)
    }, delay)
  }

  return debounceFn
}