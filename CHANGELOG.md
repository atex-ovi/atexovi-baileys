# Changelog

All notable changes to this project will be documented in this file.

---

## [7.5.6-rc.6] – 2026-03-09
### Critical Fix Release
This release candidate addresses the most reported issues by the community, specifically focusing on connection stability and encryption errors.

### Fixes
- **Fixed "Connection closed. Reconnecting…" loop** – Resolved the infinite reconnection issue that plagued previous versions
- **Fixed Bad MAC encryption errors** – Addressed crypto mismatch causing session failures
- **Fixed double declaration in generics.js** – Resolved SyntaxError: Identifier 'fetchLatestBaileysVersion' has already been declared
- **Fixed event stream memory leak** – Optimized event handling to prevent memory exhaustion
- **Enhanced newsletter UID handling** – Improved newsletter functionality stability
- **Improved pairing code reliability** – More consistent pairing experience
- **Fixed various .d.ts type definition conflicts** – Cleaned up TypeScript declaration files

### Improvements
- Optimized connection validation logic
- Enhanced auto-recovery mechanisms
- Better error handling for crypto operations
- Streamlined build process

> [!IMPORTANT]
> This RC is highly recommended for all users experiencing connection issues.  
> Tested and verified working in production environments.

---

## [7.5.6-rc.5] – 2025-11-16
### Stable & Verified
This release candidate has passed extensive internal testing and is currently the most stable build.

### Improvements
- Optimized internal default behaviors for overall bot performance
- Refined connection validation logic for smoother startup
- More reliable and predictable pairing sequence
- Improved consistency across various message event triggers
- Enhanced auto-recovery during unexpected reconnects

### Fixes
- Addressed major pairing failures
- Fixed intermittent connection drops during QR scanning
- Resolved issues where events failed to dispatch under certain conditions

> [!IMPORTANT]
> This RC is stable enough for active testing and early adoption,  
but still under ongoing refinement.

---

## [7.5.6-rc.4] – 2025-11-10
### Internal Testing Release
Limited internal release with experimental fixes.

---

## [7.5.6-rc.3] – 2025-11-05
### Internal Testing Release
Initial testing of pairing improvements.

---

## [7.5.6-rc.2] – 2025-10-28
### Internal Testing Release
Further refinements to connection handling.

---

## [7.5.6-rc.1] – 2025-10-20
### Internal Testing Release
First release candidate addressing pairing issues.

---

## [7.5.6-rc] – 2025-10-15
### Initial Release Candidate

> [!CAUTION]
> **Not Recommended**
> 
> These early RC builds were initial attempts to resolve pairing-related issues and contain several severe problems.

Known issues:
- Persistent pairing failures  
- Frequent disconnections  
- Unreliable event handling  
- Random QR pairing failures  

Users should avoid these versions and upgrade directly to **7.5.6-rc.6**.

---

## [7.5.6] – 2025-10-01
### Latest Stable (Not Recommended)

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
npm i atexovi-baileys@7.5.6-rc.6
```
