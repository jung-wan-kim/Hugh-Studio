'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const projects = [
    {
      title: "OpenAI Chatbot",
      description: "OpenAI API를 사용하여 만든 챗봇",
      deployUrl: "https://nextjs-chat-ivory-chi.vercel.app/",
      imagePath: "/images/chatbot.png",
    },
    {
      title: "Carrot Market",
      description: "중고 거래 사이트",
      deployUrl: "https://carrot-market-tawny.vercel.app/",
      imagePath: "/images/carrot-market.png",
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length)
    }, 5000) // 5초마다 슬라이드 변경

    return () => clearInterval(timer)
  }, [projects.length])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', newMode ? 'true' : 'false')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* 헤더 네비게이션 */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Hugh Studio</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {isDarkMode ? '라이트 모드' : '다크 모드'}
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* 대형 슬라이더 */}
        <div className="relative h-[80vh] min-h-[600px] mb-12 overflow-hidden bg-gradient-to-r from-black via-transparent to-black">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} 미리보기`}
                  layout="fill"
                  objectFit="contain"
                  className="max-w-[95%] max-h-[95%]"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                <p className="text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              >
                <Image
                  src={project.imagePath}
                  alt={`${project.title} 미리보기`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* 자기소개 섹션 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="relative w-64 h-64 mx-auto my-4 md:m-4 overflow-hidden rounded-full">
                  <Image
                    src="/images/me.jpg"
                    alt="당신의 이름"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">자기소개</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  안녕하세요! 저는 [당신의 이름]입니다. [당신의 기술]에 전문성을 가진 열정적인 개발자입니다. 
                  혁신적인 솔루션을 만들고 코드를 통해 아이디어를 실현하는 것을 좋아합니다.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  업계에서 [X]년의 경험을 쌓으며, [프로젝트 유형]부터 [다른 프로젝트 유형]까지 다양한 프로젝트를 
                  수행했습니다. 제 목표는 [당신의 목표나 사명]입니다.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  코딩을 하지 않을 때는 [당신의 취미나 관심사]를 즐깁니다. 새로운 기술을 배우고 
                  도전적인 프로젝트를 맡는 것을 항상 열망합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 링크 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "문서", description: "Next.js 기능과 API에 대한 자세한 정보를 찾아보세요.", href: "https://nextjs.org/docs" },
              { title: "학습", description: "퀴즈가 포함된 대화형 과정으로 Next.js를 배워보세요!", href: "https://nextjs.org/learn" },
              { title: "템플릿", description: "Next.js 13 플레이그라운드를 탐험해보세요.", href: "https://vercel.com/templates?framework=next.js" },
              { title: "배포", description: "Vercel을 통해 Next.js 사이트를 즉시 공유 가능한 URL로 배포하세요.", href: "https://vercel.com/new" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {item.title}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    →
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Hugh Studio</h2>
              <p className="mt-2 text-gray-300">디지털 경험을 만들어냅니다</p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">홈</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">프로젝트</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">소개</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">연락처</a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Hugh Studio. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
