import AppleLogo from './AppleLogo.svg'
import GoogleLogo from './GoogleLogo.svg'
import EyeOpened from './EyeOpened.svg'
import EyeClosed from './EyeClosed.svg'
import ChevrontLeft from './chevron-left.svg'
import AppLogo from './AppLogo.svg'


const AppleIcon = () => <AppleLogo />
const GoogleIcon = () => <GoogleLogo />
const EyeOpenedIcon = ({ color }: { color: string }) => <EyeOpened color={color} />
const EyeClosedIcon = ({ color }: { color: string }) => <EyeClosed color={color} />
const BackIcon = () => <ChevrontLeft />
const AppIcon = () => <AppLogo />

export {
  AppleIcon,
  GoogleIcon,
  EyeOpenedIcon,
  EyeClosedIcon,
  BackIcon,
  AppIcon,
}