<h1 align="center">atexovi-baileys</h1>
<p align="center">

  <a href="https://www.npmjs.com/package/atexovi-baileys" target="_blank">
    <img src="https://img.shields.io/npm/v/atexovi-baileys?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=white" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/atexovi-baileys" target="_blank">
  <img src="https://img.shields.io/npm/dt/atexovi-baileys?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=white" alt="npm total downloads">
</a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js version">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-%3E%3D5.8-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript version">
  </a>
  <a href="https://github.com/atex-ovi/baileys/blob/main/LICENSE.md" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat&logo=balance-scale&logoColor=black" alt="License MIT">
  </a>

  <br>

  <a href="https://saweria.co/atexovi" target="_blank">
    <img src="https://img.shields.io/badge/Saweria-FFA726?style=flat&logo=ko-fi&logoColor=white" alt="Saweria">
  </a>
  <a href="https://t.me/atexovi" target="_blank">
    <img src="https://img.shields.io/badge/Telegram-29A9EB?style=flat&logo=telegram&logoColor=white" alt="Telegram">
  </a>
  <a href="https://facebook.com/atex.ovi" target="_blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=flat&logo=facebook&logoColor=white" alt="Facebook">
  </a>
  <a href="https://whatsapp.com/channel/0029VbCMQ6x30LKO5q0GaC0n" target="_blank">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
  <a href="https://github.com/atex-ovi" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub">
  </a>

</p>

<br><br>

![Atex Ovi Logo](https://raw.githubusercontent.com/atex-ovi/bailogo/main/baileys-logo.jpg)

Custom implementation of the official [Baileys WhatsApp Web API](https://github.com/WhiskeySockets/Baileys), optimized and patched for personal projects and private bot frameworks.

---

## Table of Contents

- [Demo / Screenshot](#demo--screenshot)
- [Features & Supported UI Types](#features--supported-ui-types)
- [Installation](#installation)
- [Module Import and Export](#module-import-and-export)
  - [ESM (ECMAScript Module)](#1-esm-ecmascript-module)
  - [CJS (CommonJS)](#2-cjs-commonjs)
- [Example Usage (Interactive Message Button)](#example-usage-interactive-message-button)
- [Disclaimer](#disclaimer)
- [Documentation](#documentation)
- [Requirements](#requirements)
- [Donation](#donation)
- [License](#license)

---

## Demo / Screenshot
<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/list-button.jpg" width="150"></td>
    <td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/url-button.jpg" width="150"></td>
    <td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/call-button.jpg" width="150"></td>
    <td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/quick-reply-button.jpg" width="150"></td>
    <td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/copy-button.jpg" width="150"></td>
  </tr>
</table>

---

## Features & Supported UI Types

Atexovi-Baileys supports a variety of interactive WhatsApp message types and core features optimized for multi-device bots:

| Feature / UI Type          | Description                                    |
|----------------------------|------------------------------------------------|
| **List Button Menus**      | Single select menus for users to choose one option. |
| **Quick Reply Buttons**    | Simple tap buttons for quick responses.      |
| **CTA URL Buttons**        | Opens external links in browser.             |
| **CTA Call Buttons**       | Directly initiate a call to a phone number.  |
| **Copy Buttons**           | Copies a pre-defined text or URL to clipboard. |
| **Button Combinations**    | Mix multiple button types in a single message. |
| **Multi-Device Support**   | Works seamlessly with WhatsApp Multi-Device API. |
| **Encrypted Messaging**    | Uses libsignal from Meta for secure communication. |
| **Optimized Media Handling** | Efficient media downloading and decoding.  |
| **Custom Patches & Fixes** | Improved connection stability and bug fixes. |

> ⚠️ Note: All other APIs and core features follow [Baileys official](https://github.com/WhiskeySockets/Baileys)

---

## Installation

> ⚠️ Important Notice  
> The current latest version (v7.5.6) is **not recommended** due to occasional connection losses and pairing issues with WhatsApp.  
> For a stable and tested experience, please install the release candidate version:

```bash
npm install atexovi-baileys@7.5.6-rc.5
```

---

## Module Import and Export

### 1. ESM (ECMAScript Module)
If your `package.json` uses `"type": "module"`:

**Import:**
```javascript
import { sendMessage, someFunction } from 'atexovi-baileys';
```
**Export:**

```javascript
export function someFunction() {
  // your code here
}
```

---

### 2. CJS (CommonJS)
If you are using CommonJS (no `"type"` or `"type": "commonjs"` in your `package.json`):

**Import:**
```javascript
const { sendMessage, someFunction } = require('atexovi-baileys');
```

**Export:**
```javascript
module.exports = {
  // your code here
};
```


---


## Example Usage (Interactive Message Button)

### 💡 Note: All interactive button examples in this README use ESM syntax, so you can just do:
```javascript
import { sendMessage } from 'atexovi-baileys';
```

### 1. List Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'Choose an option from the list:',
  title: 'List Menu',
  subtitle: 'Select one',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: 'Select Option',
        sections: [
          {
            title: 'Main Options',
            highlight_label: 'Recommended',
            rows: [
              { header: 'Header 1', title: 'Option 1', description: 'Description 1', id: 'id1' },
              { header: 'Header 2', title: 'Option 2', description: 'Description 2', id: 'id2' }
            ]
          }
        ]
      })
    }
  ]
});
```

</details>

### 2. Call Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'Need help? Call us!',
  title: 'Support',
  subtitle: 'We are available',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'cta_call',
      buttonParamsJson: JSON.stringify({
        display_text: 'Call Now',
        phone_number: '+6281234567890'
      })
    }
  ]
});
```

</details>

### 3. URL Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'Check out our GitHub page!',
  title: 'GitHub',
  subtitle: 'Atex Ovi Repository',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'Visit GitHub',
        url: 'https://github.com/atex-ovi',
        merchant_url: 'https://github.com/atex-ovi'
      })
    }
  ]
});
```
</details>

### 4. Quick Reply Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'Choose quickly!',
  title: 'Quick Reply',
  subtitle: 'Tap one button',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'quick_reply',
      buttonParamsJson: JSON.stringify({
        display_text: 'Click Me!',
        id: 'quick_id'
      })
    }
  ]
});
```

</details>

### 5. Copy Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'Copy this link:',
  title: 'Copy Example',
  subtitle: 'Click the button to copy',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'cta_copy',
      buttonParamsJson: JSON.stringify({
        display_text: 'Copy Link',
        copy_code: 'https://github.com/atex-ovi'
      })
    }
  ]
});
```

</details>

### 6. Combination All Button
<details>
  <summary>Show Example</summary>

```javascript
await sock.sendMessage(jid, {
  text: 'This is an interactive message!',
  title: 'Hello!',
  subtitle: 'Subtitle here',
  footer: 'Sent by Atex Ovi',
  interactiveButtons: [
    {
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: 'Choose an Option',
        sections: [
          {
            title: 'Main Options',
            highlight_label: 'Recommended',
            rows: [
              { header: 'Header 1', title: 'Option 1', description: 'Description 1', id: 'id1' },
              { header: 'Header 2', title: 'Option 2', description: 'Description 2', id: 'id2' }
            ]
          }
        ]
      })
    },

    {
      name: 'cta_call',
      buttonParamsJson: JSON.stringify({
        display_text: 'Call Me',
        phone_number: '+6281234567890'
      })
    },

    {
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({
        display_text: 'Visit GitHub',
        url: 'https://github.com/atex-ovi',
        merchant_url: 'https://github.com/atex-ovi'
      })
    },

    {
      name: 'quick_reply',
      buttonParamsJson: JSON.stringify({
        display_text: 'Click Me!',
        id: 'quick_id'
      })
    },
    
    {
      name: 'cta_copy',
      buttonParamsJson: JSON.stringify({
        display_text: 'Copy Link',
        copy_code: 'https://github.com/atex-ovi'
      })
    }
  ]
});
```
</details>

---

## Disclaimer
- This is a **modified version** of the official [Baileys WhatsApp Web API](https://github.com/WhiskeySockets/Baileys) for personal projects and private bot frameworks.  
- Please **respect WhatsApp's terms of service**.  
- All core APIs and features remain based on Baileys official; this modification **does not bypass or alter WhatsApp restrictions**.  
- Use responsibly and at your own risk.

---

## Documentation
For full documentation, please refer to [Baileys official GitHub](https://github.com/WhiskeySockets/Baileys)

---

## Requirements
- **🟢 Node.js >= 20**
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js version">
- Supports multi-device WhatsApp
- Dependencies installed via `npm install`

---

## Donation
[![Saweria](https://img.shields.io/badge/Saweria-FFA726?style=flat&logo=ko-fi&logoColor=white)](https://saweria.co/atexovi)

---

## License
[MIT](./LICENSE.md)
