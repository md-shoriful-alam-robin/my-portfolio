'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const animRing = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.1
      p.ry += (p.my - p.ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + 'px'
        ringRef.current.style.top = p.ry + 'px'
      }
      raf.current = requestAnimationFrame(animRing)
    }

    const addHover = () => {
      cursorRef.current?.classList.add('hovering')
      ringRef.current?.classList.add('hovering')
    }
    const removeHover = () => {
      cursorRef.current?.classList.remove('hovering')
      ringRef.current?.classList.remove('hovering')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })
    raf.current = requestAnimationFrame(animRing)

    // Hide on mobile
    if (window.matchMedia('(hover: none)').matches) {
      if (cursorRef.current) cursorRef.current.style.display = 'none'
      if (ringRef.current) ringRef.current.style.display = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
