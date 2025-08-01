'use client'

import React, { useState } from 'react'

export default function SignUpPage() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault()

    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem.')
      return
    }

    // Simulação de cadastro
    alert(`Cadastro feito com sucesso para ${nome}!`)
    // Aqui você poderia enviar os dados para sua API/backend
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <form
        onSubmit={handleCadastro}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px'
        }}
      >
        <h2>Cadastre-se</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={e => setConfirmarSenha(e.target.value)}
          required
        />
        {erro && <span style={{ color: 'red' }}>{erro}</span>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
