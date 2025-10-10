# atexovi-baileys
**Atex Ovi modified Baileys WhatsApp API**

<p align="center">

  <!-- 🔹 BARIS 1 -->
  <a href="https://www.npmjs.com/package/atexovi-baileys" target="_blank">
    <img src="https://img.shields.io/npm/v/atexovi-baileys?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=white" alt="npm version">
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js version">
  </a>
  <a href="[https://github.com/atex-ovi/atexovi-wabase-button/blob/main/LICENSE](https://github.com/atex-ovi/wabase-button?tab=MIT-1-ov-file#readme)" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat&logo=balance-scale&logoColor=black" alt="License MIT">
  </a>
  <a href="https://github.com/atex-ovi/atexovi-wabase-button/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Stars">
  </a>
  <a href="https://github.com/atex-ovi/atexovi-wabase-button/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Forks">
  </a>

  <br>

  <!-- 🔹 BARIS 2 -->
  <a href="https://github.com/atex-ovi/baileys/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/atex-ovi/baileys?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Issues">
  </a>
  <a href="https://github.com/atex-ovi/baileys/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/atex-ovi/baileys?style=flat&logo=git&labelColor=181717&color=white" alt="Last Commit">
  </a>
  <a href="https://github.com/atex-ovi/wabase-button/releases" target="_blank">
    <img src="https://img.shields.io/github/v/release/atex-ovi/wabase-button?style=flat&logo=whatsapp&logoColor=white&label=wabase-button&color=brightgreen" alt="Bot Version">
  </a>
  <a href="https://saweria.co/atexovi" target="_blank">
    <img src="https://img.shields.io/badge/Donate-Saweria-FFA726?style=flat&logo=ko-fi&logoColor=white" alt="Saweria Donate">
  </a>
  <a href="https://facebook.com/atex.ovi" target="_blank">
    <img src="https://img.shields.io/badge/Follow-Facebook-1877F2?style=flat&logo=facebook&logoColor=white" alt="Facebook Follow">
  </a>

</p>

<br><br>

![Atex Ovi Logo](https://raw.githubusercontent.com/atex-ovi/bailogo/main/baileys-logo.jpg)

WhatsApp library based on **[atexovi-baileys](https://www.npmjs.com/package/atexovi-baileys)**.  
This library supports various interactive buttons and message templates.

---

## Features
- Compatible with **WhatsApp Multi-Device (MD)** API
- Uses **libsignal from Meta** for encryption
- Custom patches & bug fixes for improved connection stability
- Optimized **message handling** and **media decoding**
- Supports:
  - **List Button Menus** (Single Select)
  - **Quick Reply Buttons**
  - **CTA URL Buttons**
  - **CTA Call Buttons**
  - **Copy Buttons**
  - **Combination of buttons & menus**
- Lightweight and easy to integrate with existing bots

---

## Demo / Screenshots

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
This project is powered by **[atexovi-baileys](https://www.npmjs.com/package/atexovi-baileys)** – install via npm:

```bash
npm install atexovi-baileys
```
---

## Button Code Documentation

Here is a brief example of using each type of button in **atexovi-baileys**.

### 1. List Button

```js
await sock.sendMessage(from, {
  text: 'Select a menu:',
  interactiveButtons: [
    {
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: 'Main Menu',
        sections: [
          {
            title: 'Feature Options',
            rows: [
              { title: 'Call Button', description: 'Call button example', id: 'call' },
              { title: 'URL Button', description: 'URL button example', id: 'url' },
              { title: 'Quick Reply Button', description: 'Quick reply button example', id: 'quick' },
              { title: 'Copy Button', description: 'Copy button example', id: 'copy' },
            ],
          },
        ],
      }),
    },
  ],
});
```

### 2. Call Button

```js
import { handleCallButton } from './features/callButton.js';
await handleCallButton(sock, from);
```

### 3. URL Button

```js
import { handleUrlButton } from './features/urlButton.js';
await handleUrlButton(sock, from);
```

### 4. Quick Reply Button

```js
import { handleQuickReplyButton } from './features/quickReplyButton.js';
await handleQuickReplyButton(sock, from);
```

### 5. Copy Button

```js
import { handleCopyButton } from './features/copyButton.js';
await handleCopyButton(sock, from);
```

## Full Bot Template

For a complete interactive bot implementation, see the template [here](https://github.com/atex-ovi/atexovi-wabase-button).

---

## Further Development

For advanced development, follow the official [**WhiskeySockets Baileys**](https://github.com/WhiskeySockets/Baileys).

---

## Disclaimer

WhatsApp is a trademark of WhatsApp Inc.
This project uses atexovi-baileys, an open-source unofficial library.
Use this library responsibly. The developer is not responsible for any misuse, spam, or damage caused by this bot. Always follow WhatsApp’s terms of service.

---

## Donations

Support the library development via [Saweria](https://saweria.co/atexovi)

---

## Special Thanks

- **[Adhiraj Singh (@adiwajshing)](https://github.com/adiwajshing)** – Creator of the original [Baileys WhatsApp API](https://github.com/adiwajshing/baileys), an open-source library enabling interaction with WhatsApp Web via WebSocket.

- **[WhatsApp Inc.](https://www.whatsapp.com)** – Official messaging platform providing APIs for integration and automation.

- **[WhiskeySockets](https://github.com/WhiskeySockets/Baileys)** – Maintainers of the latest Baileys version, adding enhancements and features to support WhatsApp Multi-Device (MD).

---

## Released

<a href="https://github.com/atex-ovi/wabase-button" target="_blank">
  <img src="https://img.shields.io/github/v/release/atex-ovi/wabase-button?style=flat&logo=whatsapp&logoColor=white&label=wabase-button&color=brightgreen" alt="wabase-button">
</a>

---

## License

This project is licensed under the [MIT License](LICENSE).
