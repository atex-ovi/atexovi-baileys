# Changelog

All notable changes to this project will be documented in this file.

---

## [7.5.6-rc.5] – 2025-11-16
### Stable & Verified
This release candidate has passed extensive internal testing and is currently the most stable build.

### Improvements
- Optimized default bot behavior in `index.js`
- Refined connection validation logic
- More reliable pairing sequence
- Improved consistency of message events
- Enhanced recovery during unexpected reconnects

### Fixes
- Addressed major pairing failures
- Fixed intermittent connection drops during QR scanning
- Resolved issues where events failed to dispatch under certain conditions

> [!IMPORTANT]
> This RC is stable enough for active testing and early adoption,  
but still under ongoing refinement.

---

## [7.5.6-rc.4]  
## [7.5.6-rc.3]  
## [7.5.6-rc.2]  
## [7.5.6-rc.1]  
## [7.5.6-rc]

> [!CAUTION]
> **Not Recommended**
> 
> These early RC builds were initial attempts to resolve pairing-related issues and contain several severe problems.

Known issues:
- Persistent pairing failures  
- Frequent disconnections  
- Unreliable event handling  
- Random QR pairing failures  

Users should avoid these versions and upgrade directly to **7.5.6-rc.5**.

---

## [7.5.6] – Latest (Not Recommended)
> [!CAUTION]
> **Critical Issues**
> 
> This version contains several major issues:
> - Pairing frequently fails or times out  
> - Random connection loss  
> - Events may not dispatch reliably  
> - Potential freeze during initial handshake  

Users are strongly advised **not** to use this version.  
Install the latest RC instead:

```bash
npm i atexovi-baileys@7.5.6-rc.5
```
