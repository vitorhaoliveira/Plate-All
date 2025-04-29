'use client'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-[#011C2B] text-white text-center py-4">
      <div className="flex justify-center items-center mx-auto flex-col">
        <Image
          src="/assets/logo2.jpg"
          alt="Logo"
          width={150}
          height={1}
          className="h-full w-auto object-contain"
          priority
        />

        <p className="-mt-5 text-sm ">
          Consulta de placas rápida, fácil e confiável.
        </p>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div className="w-300 h-1 border-b-1 border-white "></div>
      </div>
    </footer>
  )
}

export default Footer
