import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppIcon, AppleIcon, BackIcon, GoogleIcon } from '../../assets/icons'
import theme from '../theme'

const AuthScreen = () => {
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
        <TextInput
          placeholder='Email'
          style={style.input}
          placeholderTextColor={theme.grey}
        />

        <TextInput
          placeholder='Password'
          style={style.input}
          placeholderTextColor={theme.grey}
        />
      </View>

      <Pressable>
        <Text style={style.forgotPassword}>Forgot password</Text>
      </Pressable>

      <TouchableOpacity style={style.loginButton}>
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
    gap: theme.spacing
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
  }
})

export default AuthScreen