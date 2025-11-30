'use client'

import { useEffect, useState } from 'react'

import SectionTitle from '../../section-title'

const Dday = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  })

  const weddingDate = new Date('2026-03-07T12:00:00')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          totalDays: days,
        })
      }
    }

    // 초기 계산
    calculateTimeLeft()

    // 1초마다 갱신
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // 2026년 3월 캘린더 생성
  const generateCalendar = () => {
    const year = 2026
    const month = 2 // 3월 (0-based)
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay()) // 일요일부터 시작

    const calendar = []
    const currentDate = new Date(startDate)

    while (currentDate.getMonth() <= month) {
      const week = []
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
      }
      calendar.push(week)
    }

    return calendar
  }

  const calendar = generateCalendar()

  return (
    <section className="px-10 py-20 bg-[#f8f8f8]">
      {/* 제목 */}
      <div className="flex flex-col items-center gap-12 mb-6">
        <SectionTitle title="WEDDING DAY" />

        <div className="flex flex-col gap-2 items-center">
          <p className="text-pretty break-keep">
            2026년 3월 7일 토요일 | 오후 1시 40분
          </p>

          <p className="text-pretty font-light text-black-default">
            Saturday, March 7, 2026 | PM 1:40
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-300 mb-6" />

      {/* 캘린더 */}
      <div className="mb-6">
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
            <div
              key={day}
              className={`text-center  font-medium ${
                index === 0 ? 'text-red-400' : 'text-gray-600'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* 캘린더 그리드 */}
        <div className="grid grid-cols-7 gap-1">
          {calendar.map((week, weekIndex) =>
            week.map((date, dayIndex) => {
              const isSunday = dayIndex === 0
              const isWeddingDay = date.getDate() === 7 && date.getMonth() === 2
              const isCurrentMonth = date.getMonth() === 2
              const isToday = date.toDateString() === new Date().toDateString()

              if (isWeddingDay) {
                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`aspect-square flex items-center justify-center ${
                      isSunday
                        ? 'text-red-400'
                        : isCurrentMonth
                          ? 'text-gray-800'
                          : 'text-gray-400'
                    } ${isToday ? 'font-bold' : ''}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-[#a0b575] rounded-full text-white">
                      {date.getDate()}
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`aspect-square flex items-center justify-center ${
                    isSunday
                      ? 'text-red-400'
                      : isCurrentMonth
                        ? 'text-gray-800'
                        : 'text-gray-400'
                  } ${isToday ? 'font-bold' : ''}`}
                >
                  {date.getDate()}
                </div>
              )
            }),
          )}
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-300 mb-6" />

      {/* 카운트다운 */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-lg py-4 text-center shadow-lg flex flex-col gap-4">
            <div className="text-2xl text-gray-800">{timeLeft.days}</div>
            <div className="text-xs text-gray-500">DAYS</div>
          </div>

          <div className="bg-white rounded-lg py-4 text-center shadow-lg flex flex-col gap-4">
            <div className="text-2xl text-gray-800">{timeLeft.hours}</div>
            <div className="text-xs text-gray-500">HOURS</div>
          </div>

          <div className="bg-white rounded-lg py-4 text-center shadow-lg flex flex-col gap-4">
            <div className="text-2xl text-gray-800">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-500">MINUTES</div>
          </div>

          <div className="bg-white rounded-lg py-4 text-center shadow-lg flex flex-col gap-4">
            <div className="text-2xl text-gray-800">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-500">SECONDS</div>
          </div>
        </div>

        {/* 하단 메시지 */}
        <div className="text-center text-sm text-gray-600">
          영수♥ 현아 결혼식이{' '}
          <span className="text-wedding-green font-medium">
            {timeLeft.totalDays}
          </span>
          일 남았습니다
        </div>
      </div>
    </section>
  )
}

export default Dday
