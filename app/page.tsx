'use client'

import { FAQList } from '@/components/FaqItem'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useRef } from 'react'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleHighlightInput = () => {
    const input = inputRef.current
    if (input) {
      input.classList.remove('blink-border')
      input.classList.remove('border-[#003366]')
      input.classList.remove('border-red-500')

      void input.offsetWidth

      input.classList.add('blink-border', 'border-red-500')

      setTimeout(() => {}, 100)

      setTimeout(() => {
        input.classList.remove('blink-border', 'border-red-500')
        input.classList.add('border-[#003366]')
      }, 2000)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <Header />
      <section
        id="consultar"
        className="w-full pt-20 max-w-5xl mb-20 text-center"
      >
        <h1 className="text-[6rem] text-[#003366] mb-4 leading-22">
          Consulta de Placa em
          <span className="text-[#003366] font-bold"> Segundos</span>
        </h1>
        <p className="text-[#7D7D7D] text-ls">
          Descubra tudo sobre um veículo apenas pela placa!
        </p>

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

      <section
        id="sobre"
        className="w-full max-w-5xl pt-30 text-center mt-20 flex flex-col items-center justify-center"
      >
        <div>
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
                className="bg-white border-1 border-gray-100 w-60 h-[285px] rounded-xl shadow-sm p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
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
          className="bg-[#003366] text-xl mt-15 text-white px-10 py-2 rounded-full hover:bg-[#011C2B] transition cursor-pointer w-[20%]"
        >
          Consultar
        </button>
      </section>

      <section
        id="faq"
        className="container w-full mt-20 mb-20 text-center flex flex-col items-center"
      >
        <h1 className="text-4xl text-[#003366] mb-10 text-center">
          Perguntas frequentes
        </h1>
        <div className="w-[70%]">
          <FAQList />
        </div>
      </section>
      <Footer />
    </div>
  )
}
