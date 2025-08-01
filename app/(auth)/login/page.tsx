'use client'

import TextField from '@mui/material/TextField'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="h-[100vh] flex flex-col items-center gap-[3rem] bg-gradient-to-b from-[#011C2B] to-white">
      <header className="h-[10vh] w-full flex items-center justify-end px-12">
        <button className="text-white px-[2rem] py-[.5rem] border-2 cursor-pointer">
          Cadastrar
        </button>
      </header>
      <form className="flex flex-col gap-[1rem] bg-white p-8 rounded shadow-md w-[40%] h-[70%] py-[2rem] px-[6rem]">
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-[2rem] font-bold text-center">
            Entre na sua conta
          </h2>
          <p className="text-[.7rem] flex-nowrap text-center">
            Maneira rápida e simples de consultar tudo sobre um veículo
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            type="email"
            slotProps={{
              input: { className: 'text-sm text-gray-800' },
              inputLabel: { className: 'text-gray-600' }
            }}
            sx={{
              '& label.Mui-focused': {
                color: '#000'
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#000'
                }
              }
            }}
          />

          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            type="password"
            slotProps={{
              input: { className: 'text-sm text-gray-800' },
              inputLabel: { className: 'text-gray-600' }
            }}
            sx={{
              '& label.Mui-focused': {
                color: '#000'
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#000'
                }
              }
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-[#011C2B] text-white p-2 py-4 rounded mt-[2rem] hover:bg-[#003366] cursor-pointer transition-colors"
        >
          Entrar
        </button>
        <Link
          className="text-center text-[.8rem] mt-4.5 text-[011C2B] hover:text-[#003366] underline"
          href="/home"
        >
          Esqueceu sua senha?
        </Link>
      </form>
      <footer className="flex flex-col items-center justify-center">
        {/* <p className="text-[.7rem] text-gray-400">
          @ 2025. Todos direitos reservados. Plate All
        </p> */}
        <Image
          src="/assets/logo.jpg"
          alt="Logo"
          width={100}
          height={100}
          className="h-full w-auto object-contain"
          priority
        />
      </footer>
    </div>
  )
}
