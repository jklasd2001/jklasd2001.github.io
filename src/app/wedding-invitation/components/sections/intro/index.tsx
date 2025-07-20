'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { generateRandomNumber } from '../../../utils/math'

interface Petal {
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
  sway: number
  swaySpeed: number
  opacity: number
  color: string
}

const IntroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(null)
  const petalsRef = useRef<Petal[]>([])
  const isShow = true

  // 꽃잎 색상 배열 (하얀색 계열)
  const petalColors = [
    '#FFFFFF', // 순백
    '#FEFEFE', // 거의 흰색
    '#FDFDFD', // 아주 연한 회색
    '#FCFCFC', // 연한 회색
    '#FAFAFA', // 미색
  ]

  // 꽃잎 그리기 함수
  const drawPetal = (ctx: CanvasRenderingContext2D, petal: Petal) => {
    ctx.save()
    ctx.translate(petal.x, petal.y)
    ctx.rotate((petal.rotation * Math.PI) / 180)
    ctx.globalAlpha = petal.opacity

    // 벚꽃잎 모양 그리기 (자연스러운 곡선)
    ctx.beginPath()
    ctx.fillStyle = petal.color

    // 벚꽃잎의 자연스러운 모양 (하트 모양의 변형)
    const width = petal.size
    const height = petal.size * 0.8

    ctx.moveTo(0, -height * 0.3)
    ctx.bezierCurveTo(
      -width * 0.5,
      -height * 0.8,
      -width * 0.8,
      -height * 0.2,
      -width * 0.3,
      0,
    )
    ctx.bezierCurveTo(
      -width * 0.8,
      height * 0.2,
      -width * 0.5,
      height * 0.8,
      0,
      height * 0.3,
    )
    ctx.bezierCurveTo(
      width * 0.5,
      height * 0.8,
      width * 0.8,
      height * 0.2,
      width * 0.3,
      0,
    )
    ctx.bezierCurveTo(
      width * 0.8,
      -height * 0.2,
      width * 0.5,
      -height * 0.8,
      0,
      -height * 0.3,
    )

    ctx.fill()

    // 꽃잎 중앙에 작은 원 추가 (벚꽃의 암술/수술 표현)
    ctx.beginPath()
    ctx.fillStyle = '#FFF8F8'
    ctx.arc(0, 0, petal.size * 0.15, 0, 2 * Math.PI)
    ctx.fill()

    ctx.restore()
  }

  // 꽃잎 초기화
  const initializePetals = () => {
    if (typeof window === 'undefined') return

    const newPetals = Array.from({ length: 45 }).map(() => {
      // 화면을 3개 구역으로 나누어 균등하게 분포
      const section = Math.floor(Math.random() * 3)
      const sectionWidth = window.innerWidth / 3
      const x = generateRandomNumber(
        section * sectionWidth,
        (section + 1) * sectionWidth,
      )

      return {
        x: x,
        y: generateRandomNumber(-50, window.innerHeight + 50), // 화면 전체에 분포
        size: generateRandomNumber(6, 14), // 더 작고 자연스러운 크기
        speed: generateRandomNumber(0.2, 0.6, { fixed: 1 }), // 속도를 조금 높임
        rotation: generateRandomNumber(0, 360),
        rotationSpeed: generateRandomNumber(-0.3, 0.3, { fixed: 1 }), // 회전 속도 더 감소
        sway: generateRandomNumber(0, 30), // 좌우 흔들림 크기 대폭 감소
        swaySpeed: generateRandomNumber(0.1, 0.3, { fixed: 1 }), // 흔들림 속도 더 감소
        opacity: generateRandomNumber(0.4, 0.8, { fixed: 2 }), // 투명도 조정
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
      }
    })
    petalsRef.current = newPetals
  }

  // 애니메이션 함수
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas || !isShow || typeof window === 'undefined') return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 캔버스 크기 설정
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // 캔버스 클리어
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 꽃잎 업데이트 및 그리기
    petalsRef.current = petalsRef.current.map((petal) => {
      // 새로운 위치 계산
      const newY = petal.y + petal.speed

      // 바람에 살랑이는 듯한 자연스러운 움직임
      const time = Date.now() * 0.001
      const windEffect =
        Math.sin(time * petal.swaySpeed + petal.x * 0.005) *
        Math.cos(time * 0.3 + petal.y * 0.01) *
        petal.sway *
        0.08

      const newX = petal.x + windEffect
      const newRotation = petal.rotation + petal.rotationSpeed

      // 화면 밖으로 나간 꽃잎은 위에서 다시 시작
      if (newY > canvas.height + 50) {
        // 재생성 시에도 균등한 분포 유지
        const section = Math.floor(Math.random() * 3)
        const sectionWidth = canvas.width / 3
        const newX = generateRandomNumber(
          section * sectionWidth,
          (section + 1) * sectionWidth,
        )

        return {
          ...petal,
          x: newX,
          y: generateRandomNumber(-100, -20), // 위쪽에서 재생성
          rotation: generateRandomNumber(0, 360),
        }
      }

      return {
        ...petal,
        x: newX,
        y: newY,
        rotation: newRotation,
      }
    })

    // 꽃잎들 그리기
    petalsRef.current.forEach((petal) => drawPetal(ctx, petal))

    animationRef.current = requestAnimationFrame(animate)
  }

  // 초기화 및 애니메이션 시작
  useEffect(() => {
    if (typeof window === 'undefined') return

    initializePetals()
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // 윈도우 리사이즈 처리
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="flex flex-col relative h-screen">
      <Image
        src="/images/martinique.jpg"
        alt="intro"
        fill={true}
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 z-20">
        <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
      </div>

      <div className="">
        <p className="absolute top-[5rem] flex flex-col w-full z-10 text-4xl text-center text-white font-sometimes-times">
          Young Su & Hyun Ah
        </p>

        <div className="absolute bottom-[5rem] flex flex-col w-full z-10 text-base text-center gap-2 text-white">
          <span>2026년 3월 7일 토요일 오후 1시 30분</span>

          <span>부산 아시아드 시티 웨딩홀</span>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
