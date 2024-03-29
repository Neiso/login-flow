- Create the React Native project

```bash
npx react-native@0.72.12 init improvedAuthUx
```

- Install dependencies

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack react-native-svg
yarn add --dev react-native-svg-transformer
```

- Update `metro.config.js`

```jsx
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

module.exports = mergeConfig(defaultConfig, config);
```

- Copy the assets folder

- Add theme

```jsx
const theme = {
	spacing: 8,
	primary: "#074CE7",
	info: "#086CC1",
	error: "#E01D1F",****
	black: "#000000",
	white: "#ffffff",
	grey: "#D2D0D0",
	shadow: {********
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	fontFamily: "Helvetica",
	fontLight: "Helvetica-Light",
	fontBold: "Helvetica-Bold"
}
```
- Create react-native.config.js

```jsx
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
};
```

- Connect fonts

```bash
npx react-native-asset
```
- Start the server
```bash
yarn start
```