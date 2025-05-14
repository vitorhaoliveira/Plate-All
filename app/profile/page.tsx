'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-24">
      <h1 className="text-4xl font-bold text-[#003366] mb-8">Meu Perfil</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-8">
        {/* Foto de perfil */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/avatar.png"
            alt="Foto de Perfil"
            width={120}
            height={120}
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        {/* Informações do usuário */}
        <div className="w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-gray-700 font-medium mb-1 block">
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </form>

          {/* Botão de editar/salvar */}
          <div className="mt-6 text-right">
            <button
              type="button"
              className="bg-[#003366] text-white px-6 py-2 rounded-full hover:bg-[#011C2B] transition cursor-pointer"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
