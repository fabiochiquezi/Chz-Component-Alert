<br />
<p align="center">
    <img src="https://www.chiquezi.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo%2Flogo.c442afade084ba1adfa95e1aecfc83d0.svg&w=384&q=75" width="125">
</p>

# 🤙 Alert

Simple VanillaUI Component.

## 🚀 Getting Started

```
const alert = useAlert()

<!-- Methods -->
alert.open(background: string,message: string,delay?: number)
alert.success(message: string, delay?: number)
alert.error(message: string, delay?: number)
alert.close()

<!-- Customize -->
const options = {
  id?: string,
  className?: string,
  animationRemove?: string,
  animationAdd?: string,
  animationDuration?: number
  colorError?: string,
  colorSuccess?: string
}****
const alert = useAlert(options)
```

### 📡 Installing

Component:

```
yarn add @fabiochiquezi/alert

import { usePopSave } from '@fabiochiquezi/alert'
@import "@fabiochiquezi/alert/styles.css"
```

Project:

```
git clone https://github.com/fabiochiquezi/Chz-Component-Alert.git
cd Chz-Component-Alert
yarn install
yarn dev
```

## ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
