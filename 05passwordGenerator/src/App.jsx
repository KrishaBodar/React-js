import { useState, useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
      (numberAllowed ? '0123456789' : '') +
      (charAllowed ? '!@#$%^&*()_+-=[]{}|;:,.<>?/' : '');
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]); 

  return (
    <>
      <h1 className='text-4xl font-bold text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <div className='py-4'>
          <label className='block mb-2 text-sm font-medium'>Length</label>
          <input
            type='number'
            min='4'
            max='32'
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='py-4'>
          <label className='block mb-2 text-sm font-medium'>Include Numbers</label>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
        </div>
        <div className='py-4'>
          <label className='block mb-2 text-sm font-medium'>Include Special Characters</label>
          <input
            type='checkbox'
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
        </div>
        <div className='py-4'>
          <button
            onClick={PasswordGenerator}
            className='w-full p-2 bg-orange-500 text-white rounded'
          >
            Generate Password
          </button>
        </div>
        <div className='py-4'>
          <label className='block mb-2 text-sm font-medium'>Generated Password</label>
          <input
            type='text'
            value={Password}
            readOnly
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <button
          className='w-full p-2 pb-4 bg-orange-500 text-white rounded mt-4 hover:bg-orange-600 transition-colors duration-300'
          disabled={!Password}
          title='Copy Password'
          aria-label='Copy Password'
          type='button'
          aria-disabled={!Password}
          data-testid='copy-button'
          style={{ cursor: Password ? 'pointer' : 'not-allowed' }}
          onClick={() => {
            if (Password) {
              navigator.clipboard.writeText(Password);
              alert('Password copied to clipboard!');
            }
          }}
        >
          Copy Password
        </button>
      </div>
    </>
  )
}

export default App
