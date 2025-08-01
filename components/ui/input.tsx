/* eslint-disable no-unused-vars */
import React from 'react'

type FloatingLabelInputProps = {
  id: string
  label: string
  type?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  label,
  id,
  type = 'text',
  value,
  onChange
}: FloatingLabelInputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        required
        className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  )
}
