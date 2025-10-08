# atexovi-baileys

![Atex Ovi Logo](https://raw.githubusercontent.com/atex-ovi/bailogo/main/balileys-logo.jpg)

Library WhatsApp berbasis **[atexovi-baileys](https://www.npmjs.com/package/atexovi-baileys)**.  
Library ini mendukung berbagai jenis tombol interaktif dan template pesan.

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

## Dokumentasi Kode Tombol

Berikut contoh ringkas penggunaan setiap jenis tombol pada **atexovi-baileys**.

### 1. List Button

```js
await sock.sendMessage(from, {
  text: 'Pilih menu:',
  interactiveButtons: [
    {
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: 'Menu Utama',
        sections: [
          {
            title: 'Pilihan Fitur',
            rows: [
              { title: 'Call Button', description: 'Contoh call button', id: 'call' },
              { title: 'URL Button', description: 'Contoh url button', id: 'url' },
              { title: 'Quick Reply Button', description: 'Contoh quick reply button', id: 'quick' },
              { title: 'Copy Button', description: 'Contoh copy button', id: 'copy' },
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

## Template Bot Lengkap

Sebagai contoh implementasi lengkap, Anda bisa melihat template bot interaktif [disini](https://github.com/atex-ovi/atexovi-wabase-button).

---

## Pengembangan Lanjutan

Untuk pengembangan lebih lanjut, Anda bisa mengikuti [**WhiskeySockets Baileys**](https://github.com/WhiskeySockets/Baileys) yang resmi.

---

## Disclaimer

WhatsApp adalah merek dagang dari WhatsApp Inc.  
Library ini menggunakan [**atexovi-baileys**](https://www.npmjs.com/package/atexovi-baileys), library open-source dan tidak resmi.


Gunakan library ini dengan tanggung jawab sendiri dan hindari spam atau penyalahgunaan.

---

## Donasi

Dukung pengembangan library ini melalui [Saweria](https://saweria.co/atexovi)

---

## Special Thanks

* [WhatsApp API](https://www.whatsapp.com) - teknologi resmi WhatsApp untuk integrasi pesan.
* [adiwajshing (Baileys)](https://github.com/adiwajshing) - pengembang library Baileys untuk WhatsApp API.
* [WhiskeySockets Baileys](https://github.com/WhiskeySockets/Baileys) - kontribusi tambahan pada Baileys.

---

## Lisensi

ISC
c