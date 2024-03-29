import { useState } from "react"
import Toast from "react-native-toast-message"

const DEFAULT_ERROR = {
  email: '',
  password: ''
}
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const useAuthScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordHidden, setPasswordHidden] = useState(true)
  const [errors, setErrors] = useState(DEFAULT_ERROR)

  const onEmailBlur = () => {
    if (!email) return setErrors({ ...errors, email: 'Please enter a valid email address (user@domain.com)' })
    if (!EMAIL_REGEX.test(email)) return setErrors({ ...errors, email: 'Please enter a valid email address (user@domain.com)' })
    else setErrors({ ...errors, email: '' })
  }

  const onPasswordBlur = () => {
    if (!password) return setErrors({ ...errors, password: 'Please enter your password' })
    else setErrors({ ...errors, password: '' })
  }

  const onSignin = () => {
    if (!email) return setErrors({ ...errors, email: 'Please enter a valid email address (user@domain.com)' })
    if (!password) return setErrors({ ...errors, password: 'Please enter your password' })
    else setErrors(DEFAULT_ERROR)

    try {
      const res = { errorCode: 12 } // Making request

      throw new Error('no internet')
      if (res.errorCode === 12) setErrors({ ...errors, password: 'Password incorrect' })

    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: 'Please check your internet connection.'
      })
    }

  }

  return {
    email: {
      value: email,
      setEmail,
      onEmailBlur,
    },
    password: {
      value: password,
      setPassword,
      isPasswordHidden,
      setPasswordHidden,
      onPasswordBlur,
    },
    errors,
    onSignin
  }
}

export { useAuthScreen }