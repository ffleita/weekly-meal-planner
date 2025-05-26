import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    window.addEventListener('resize', handleResize)

    // Limpieza al desmontar
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}
