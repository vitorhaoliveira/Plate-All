import React, { useEffect, useRef, useState } from 'react'

export function FAQItem({
  question,
  answer
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div className="w-full border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
      >
        <span className="font-medium text-lg text-start">{question}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>

      <div
        style={{
          height,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
          textAlign: 'start',
          marginLeft: '2rem'
        }}
      >
        <div
          ref={contentRef}
          className="pl-4 pb-4 text-gray-700 text-sm inline-block"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQList() {
  const faqs = [
    {
      question: 'Como funciona o sistema de agendamento?',
      answer:
        'Nosso sistema permite que você escolha um horário disponível e confirme em poucos cliques.'
    },
    {
      question: 'Posso cancelar uma reserva?',
      answer:
        'Sim, você pode cancelar até 24 horas antes do horário agendado diretamente na plataforma.'
    },
    {
      question: 'Posso cancelar uma reserva?',
      answer:
        'Sim, você pode cancelar até 24 horas antes do horário agendado diretamente na plataforma.'
    },
    {
      question: 'Posso cancelar uma reserva?',
      answer:
        'Sim, você pode cancelar até 24 horas antes do horário agendado diretamente na plataforma.'
    },
    {
      question: 'Posso cancelar uma reserva?',
      answer:
        'Sim, você pode cancelar até 24 horas antes do horário agendado diretamente na plataforma.'
    },
    {
      question: 'É necessário criar uma conta?',
      answer:
        'Sim, é necessário ter uma conta para acompanhar e gerenciar seus agendamentos.'
    }
  ]

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
      {faqs.map((faq, idx) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
