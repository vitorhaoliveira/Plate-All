'use client'

import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
  return (
    <footer className="bg-[#011C2B] text-white text-center py-4">
      {/* Logo e Slogan */}
      <div className="flex justify-center items-center mx-auto flex-col gap-3">
        <Image
          src="/assets/logo2.jpg"
          alt="Logo"
          width={100}
          height={1}
          className="h-full w-auto object-contain"
          priority
        />
        <p className="-mt-3 text-xs">
          Consulta de placas rápida, fácil e confiável.
        </p>
      </div>

      {/* Linha dividindo */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-[1200px] border-b border-white mx-auto"></div>
      </div>

      {/* Topicos lado a lado */}
      <div className="mt-5 w-full max-w-[1230px] mx-auto flex flex-col md:flex-row items-start justify-between gap-16 px-4 text-left">
        <div className="flex flex-row gap-12">
          {/* Fale Conosco */}
          <div>
            <h1 className="text-sm font-bold mb-1">Fale Conosco</h1>
            <div className="flex items-center gap-2 text-sm mt-3">
              <i className="fa fa-volume-control-phone text-gray-400" />
              <span className="text-gray-400">+55 11 93251-548</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <i className="fa fa-envelope-o text-gray-400" />
              <span className="text-gray-400">plateall@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <i className="fa fa-map-marker text-gray-400" />
              <span className="text-gray-400">
                Internacional Shopping, Itapegica
              </span>
            </div>
          </div>

          {/*Site */}
          <div>
            <h1 className="text-sm font-bold mb-1">Site</h1>
            <div className="flex items-center gap-2 text-sm mt-3">
              <a href="">
                <span className="text-gray-400 ">Consultar</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <a href="">
                <span className="text-gray-400">Sobre Nós</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <a href="">
                <span className="text-gray-400 ">Contato</span>
              </a>
            </div>
          </div>

          {/*Legal*/}
          <div>
            <h1 className="text-sm font-bold mb-1">Legal</h1>
            <div className="flex items-center gap-2 text-sm mt-3">
              <a href="">
                <span className="text-gray-400 ">Política</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <a href="">
                <span className="text-gray-400 ">Termos e Serviços</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <a href="">
                <span className="text-gray-400 ">Termos de Uso</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <a href="">
                <span className="text-gray-400 ">Política de Reembolso</span>
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="bg-[#131313] p-8 border-1-black rounded-md">
          <div className="flex justify-center items-center">
            <h1 className="text-lg font-bold mb-1">
              Nos Siga na Redes Sociais
            </h1>
          </div>

          <div className="bg-[#555555] mt-5 w-70 flex justify-center items-center gap-5 border-1-black rounded-md">
            <div className="flex justify-center items-center gap-2">
              <i className="fa fa-facebook-square text-blue-500" />
              <span className="text-sm">Facebook</span>
            </div>

            <div className="flex justify-center items-center gap-2 py-2.5">
              <i className="fa fa-instagram text-pink-300" />
              <span className="text-sm">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
