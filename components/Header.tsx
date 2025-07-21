'use client'
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Header() {
  return (
    <header className="bg-hero w-[95%] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] my-8 mx-auto rounded-4xl">
      <nav className="w-full h-20 flex items-center justify-around">
        {/* Logo à esquerda */}
        <div className="h-full flex items-center">
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

        <ul className="flex space-x-15 mr-30 text-gray-700 text-1xl font-medium">
          <li>
            <Link
              href="/#consultar"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Consultar
            </Link>
          </li>
          <li>
            <Link
              href="/#sobre"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/#contato"
              className="text-[#003366] border-b-2 border-transparent hover:border-[#011C2B] transition-all duration-400"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Ícone de perfil */}
        <div className="relative inline-block group">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* Hover do perfil */}
          <div className="absolute hidden bg-white border border-gray-200 rounded left-[-170px] -mt-5 shadow-lg w-48 group-hover:block">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#003366]"
                >
                  Minhas Consultas
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#003366]"
                >
                  Perfil
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#003366]"
                >
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
