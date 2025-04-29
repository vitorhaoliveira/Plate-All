'use client'
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo à esquerda */}
        <div className="h-full flex items-center mt-[-10px]">
          <Link href="/">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Links do meio */}
        <ul className="flex space-x-50 text-gray-700 text-lg font-medium">
          <li>
            <Link
              href="/consultar"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Consultar
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Ícone de perfil */}
        <div className="relative inline-block group">
          <button className="p-2 bg-gray-200 rounded-full focus:outline-none">
            <i className="fa fa-user-circle text-2xl text-gray-700"></i>
          </button>

          {/* Hover do perfil */}
          <div className="absolute hidden bg-white border border-gray-200 rounded left-[-170px] shadow-lg w-48 group-hover:block">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Minhas Consultas
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Perfil
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
