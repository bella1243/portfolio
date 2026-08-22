import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    const connectionDistance = 130
    const particleCount = 48

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.6 + 0.6,
        opacity: Math.random() * 0.35 + 0.12,
      }))
    }

    const draw = () => {
      if (document.documentElement.classList.contains('project-modal-open')) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(166, 122, 82, ${p.opacity * 0.55})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(166, 122, 82, ${0.05 * (1 - dist / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="animated-background-root fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#08080c] [.light_&]:bg-[#ece8e2]" />

      {/* Soft luminous washes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(166,122,82,0.05),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(ellipse_at_70%_85%,rgba(138,98,64,0.04),transparent_50%)] [.light_&]:bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,255,255,0.85),transparent_45%),radial-gradient(ellipse_at_85%_10%,rgba(217,174,136,0.28),transparent_40%),radial-gradient(ellipse_at_50%_100%,rgba(198,125,69,0.14),transparent_50%)]" />

      <canvas ref={canvasRef} className="absolute inset-0 opacity-22 [.light_&]:opacity-22" aria-hidden="true" />

      {/* Liquid glass orbs */}
      <motion.div
        className="absolute top-[12%] -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(166,122,82,0.08),transparent_68%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(255,255,255,0.7),rgba(217,174,136,0.22)_45%,transparent_70%)]"
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[8%] -right-28 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(138,98,64,0.07),transparent_68%)] blur-3xl [.light_&]:bg-[radial-gradient(circle,rgba(255,255,255,0.55),rgba(198,125,69,0.18)_50%,transparent_72%)]"
        animate={{ x: [0, -36, 0], y: [0, -28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-2xl [.light_&]:bg-[radial-gradient(circle,rgba(255,255,255,0.45),transparent_70%)]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle specular sheen */}
      <div
        className="absolute inset-0 opacity-[0.35] [.light_&]:opacity-50"
        style={{
          background:
            'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.04) 42%, transparent 58%)',
        }}
      />
    </div>
  )
}
