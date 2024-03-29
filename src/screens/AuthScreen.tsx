import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppIcon, AppleIcon, BackIcon, EyeClosedIcon, EyeOpenedIcon, GoogleIcon } from '../../assets/icons'
import theme from '../theme'
import { useAuthScreen } from './AuthScreen.hook'

const AuthScreen = () => {

  const {
    email,
    password,
    errors,
    onSignin,
  } = useAuthScreen()

  return (
    <View style={style.container}>

      <View style={style.backButtonContainer}>
        <BackIcon />
        <Text style={style.backText}>Back</Text>
      </View>

      <View style={style.appLogoContainer}>
        <AppIcon />
      </View>

      <View style={style.formContainer}>
        <Text style={style.label}>Email</Text>
        <TextInput
          placeholder='Email'
          value={email.value}
          onChangeText={(text) => email.setEmail(text)}
          onBlur={email.onEmailBlur}
          style={[style.input, errors.email ? style.errorInput : {}]}
          placeholderTextColor={theme.grey}
          autoCapitalize='none'
        />
        {errors.email && <Text style={style.errors}>{errors.email}</Text>}

        <View style={style.spacer} />

        <Text style={style.label}>Password</Text>
        <View style={[style.input, style.passwordInputContainer, errors.password ? style.errorInput : {}]}>
          <TextInput
            value={password.value}
            onChangeText={(text) => password.setPassword(text)}
            style={style.passwordInput}
            placeholder='Password'
            placeholderTextColor={theme.grey}
            secureTextEntry={password.isPasswordHidden}
            onBlur={password.onPasswordBlur}
          />

          {password.isPasswordHidden
            ? <Pressable onPress={() => password.setPasswordHidden(false)}>
              <EyeClosedIcon color={errors.password ? theme.error : theme.black} />
            </Pressable>
            : <Pressable onPress={() => password.setPasswordHidden(true)}>
              <EyeOpenedIcon color={errors.password ? theme.error : theme.black} />
            </Pressable>
          }
        </View>
        {errors.password && <Text style={style.errors}>{errors.password}</Text>}

      </View>

      <Pressable>
        <Text style={style.forgotPassword}>Forgot password</Text>
      </Pressable>

      <TouchableOpacity style={style.loginButton} onPress={onSignin}>
        <Text style={style.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={style.orContainer}>
        <View style={style.line} />
        <Text>Or</Text>
        <View style={style.line} />
      </View>

      <View style={style.authProviderContainer}>
        <TouchableOpacity style={[style.authProviderButton, style.authProviderAppleButton]}>
          <AppleIcon />
          <Text style={[style.authProviderText, style.authProviderAppleText]}>Log in with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.authProviderButton, style.authProviderGoogleButton]}>
          <GoogleIcon />
          <Text style={[style.authProviderText, style.authProviderGoogleText]} >Log in with Google</Text>
        </TouchableOpacity>
      </View>

      <Pressable style={style.signupContainer}>
        <Text style={style.signupText}>Don't have an account ? <Text style={style.signupTextBlue}>Sign up</Text></Text>
      </Pressable>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing
  },
  backText: {
    fontFamily: theme.fontFamily,
    fontSize: 18
  },
  appLogoContainer: {
    marginTop: theme.spacing * 5,
    alignSelf: 'center'
  },
  formContainer: {
    marginTop: '20%',
  },
  input: {
    paddingHorizontal: theme.spacing * 2,
    paddingVertical: theme.spacing * 2,
    borderColor: theme.grey,
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: theme.spacing * 1,
    fontFamily: theme.fontFamily,
  },
  errorInput: {
    borderColor: theme.error
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  passwordInput: {
    width: "90%"
  },
  forgotPassword: {
    color: theme.info,
    fontFamily: theme.fontFamily,
    marginVertical: theme.spacing,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'
  },
  loginButton: {
    backgroundColor: theme.primary,
    borderRadius: 4,
    marginVertical: theme.spacing * 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing * 2
  },
  loginButtonText: {
    fontFamily: theme.fontFamily,
    fontSize: 16,
    color: theme.white
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5%'
  },
  line: {
    height: 1,
    width: "40%",
    backgroundColor: theme.grey
  },
  authProviderContainer: {
    marginTop: '10%',
    gap: theme.spacing * 2
  },
  authProviderButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  authProviderAppleButton: {
    backgroundColor: theme.black,
  },
  authProviderGoogleButton: {
    backgroundColor: theme.white,
    ...theme.shadow
  },
  authProviderText: {
    fontSize: 16,
    fontFamily: theme.fontFamily
  },
  authProviderAppleText: {
    color: theme.white
  },
  authProviderGoogleText: {
    color: theme.black
  },
  label: {
    fontFamily: theme.fontFamily,
    color: theme.dark80,
    fontSize: 16
  },
  spacer: {
    marginVertical: theme.spacing
  },
  signupContainer: {
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center'
  },
  signupText: {
    color: theme.black,
    fontFamily: theme.fontBold
  },
  signupTextBlue: {
    color: theme.primary,
    fontFamily: theme.fontBold
  },
  errors: {
    color: theme.error,
    fontFamily: theme.fontFamily
  }
})

export default AuthScreen