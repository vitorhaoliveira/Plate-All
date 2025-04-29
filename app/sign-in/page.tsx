'use client'

import React, { useState } from 'react'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'admin@teste.com' && senha === '123456') {
      alert('Login bem-sucedido!')
      // Aqui você pode redirecionar, por exemplo com `router.push('/dashboard')`
    } else {
      setErro('Email ou senha incorretos.')
    }
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px'
        }}
      >
        <h2>Login</h2>
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
        {erro && <span style={{ color: 'red' }}>{erro}</span>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default SignInPage
