'use client'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  // >>>>>>> Stashed changes

  const handleHighlightInput = () => {
    const input = inputRef.current
    if (input) {
      // Remove classes anteriores
      input.classList.remove('blink-border')
      input.classList.remove('border-[#003366]')
      input.classList.remove('border-red-500')

      // Força reflow
      void input.offsetWidth

      // Aplica a classe de piscar
      input.classList.add('blink-border', 'border-red-500')

      // ⏱️ Foca o input após 100ms (depois que a animação começou)
      setTimeout(() => {}, 100)

      // 🧼 Limpa a animação após 2 segundos
      setTimeout(() => {
        input.classList.remove('blink-border', 'border-red-500')
        input.classList.add('border-[#003366]')
      }, 2000)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 gap-20">
      {/* Seção 1 */}
      <section
        id="consultar"
        className="w-full pt-30 max-w-5xl mt-44 mb-20 text-center"
      >
        <h1 className="text-5xl text-[#003366] mb-4">
          Consulta de Placa em
          <span className="text-[#003366] font-bold"> Segundos</span>
        </h1>
        <p className="text-[#7D7D7D] text-ls">
          Descubra tudo sobre um veículo apenas pela placa!
        </p>

        {/* Input com botão alinhado */}
        <div className="relative w-[600px] mt-5 mx-auto">
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite a placa e consulte agora: ABC-1234"
            className="w-full border-2 border-[#003366] rounded-full py-3 pl-6 pr-32 text-[#7D7D7D] placeholder:text-sm transition duration-300"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#003366] text-white px-6 py-2 rounded-full hover:bg-[#011C2B] transition cursor-pointer">
            Consultar
          </button>
        </div>
      </section>

      {/* Seção 2 */}
      <section id="sobre" className="w-full max-w-5xl pt-30 text-center mt-20">
        <h1 className="text-5xl text-[#003366] mb-4">
          Quem
          <span className="text-[#003366] font-bold"> Somos?</span>
        </h1>
        <div className="flex flex-row items-center justify-between p-10">
          <p className="text-gray-600 text-2xl max-w-[600px] text-justify">
            Bem-vindo à PlacaCheck, a plataforma revolucionária para consulta de
            placas de veículos! Somos uma empresa especializada em tecnologia e
            inovação, comprometida em oferecer informações precisas e confiáveis
            sobre veículos em poucos segundos.
          </p>
          <Image
            src="/assets/vetor.png"
            width={400}
            height={400}
            alt="imagem"
            className="ml-10"
          />
        </div>

        <h1 className="text-4xl text-[#003366] mb-10 text-center">
          Te oferecemos mais de{' '}
          <span className="text-[#003366] font-bold">X</span> dados sobre a
          placa que você busca!
        </h1>

        <div className="flex flex-row gap-6">
          {[
            {
              title: 'Informações',
              text: 'Consiga informações sobre a cor, modelo, categoria e muito mais.'
            },
            {
              title: 'FIPE',
              text: 'Utilize as informações da tabela FIPE para consultar o valor de mercado do veículo.'
            },
            {
              title: 'Proprietário',
              text: 'Descubra o proprietário e verifique dados importantes, antes de concluir a transação.'
            },
            {
              title: 'Multas e Débitos',
              text: 'Multas em aberto, IPVA atrasado e taxas a pagar.'
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border-1 border-gray-100 w-60 h-[285px] rounded-xl shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-[#003366]"
            >
              <h2 className="text-2xl text-[#003366] mb-2 text-left">
                <span className="border-b-2 border-gray-400 pb-2">
                  {card.title.slice(0, 3)}
                </span>
                {card.title.slice(3)}
              </h2>
              <p className="text-gray-600 text-xl mt-10 text-left">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            document
              .getElementById('consultar')
              ?.scrollIntoView({ behavior: 'smooth' })
            setTimeout(() => {
              handleHighlightInput()
            }, 600)
          }}
          className="bg-[#003366] text-xl mt-15 text-white px-10 py-2 rounded-full hover:bg-[#011C2B] transition cursor-pointer"
        >
          Consultar
        </button>
      </section>

      {/* Seção 3 */}
      <section
        id="contato"
        className="w-full pt-30 mt-20 max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl text-[#003366] mb-10">
          Entre em <span className="font-bold">Contato</span>
        </h1>

        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden min-h-[600px]">
          <div
            className="md:w-1/2 bg-cover bg-center relative text-white text-left flex flex-col"
            style={{ backgroundImage: "url('/assets/bg_form.png')" }}
          >
            <div className="relative z-10 p-10 max-w-[400px]">
              <h2 className="text-2xl font-bold">Informações de Contato</h2>
              <p className="mb-4 text-[#C9C9C9]">
                Preencha o formulário e agurade o retorno
              </p>
              <div className="break-words">
                <p className="mt-20 text-[#C9C9C9]">📞 +55 11 99999-9999</p>
                <p></p>
              </div>
              <div className="break-words">
                <p className="mt-10 text-[#C9C9C9]">
                  📧 contato@placacheck.com{' '}
                </p>
              </div>
              <div className="break-words">
                <p className="mt-10 text-[#C9C9C9]">
                  📍 132 Dartmouth Street Boston, Massachusetts 02156 United
                  States
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-10 bg-white flex flex-col -ml-30">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Primeiro Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="ml-10">
                <label
                  htmlFor="sobrenome"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Sobrenome
                </label>
                <input
                  id="sobrenome"
                  type="text"
                  placeholder="Seu sobrenome"
                  className="w-50 border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@gmail.com"
                  className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="ml-10">
                <label
                  htmlFor="telefone"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Telefone
                </label>
                <input
                  id="telefone"
                  type="text"
                  placeholder="1199999999"
                  className="w-50 border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="md:col-span-2 mt-10">
                <label
                  htmlFor="mensagem"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  placeholder="Escreva sua mensagem..."
                  className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <div>
                <Image
                  src="/assets/flecha.png"
                  width={400}
                  height={400}
                  alt="imagem"
                  className="ml-30"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#003366] text-white py-2 px-6 rounded-lg hover:bg-[#011C2B] ml-80 transition w-50 cursor-pointer"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
