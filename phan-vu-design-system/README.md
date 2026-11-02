# Phan Vu Design System

Design system cho hồ sơ năng lực, brochure, tài liệu, trang web và slide của Tập đoàn Phan Vũ (Phan Vu Investment
Corporation). Cấu trúc kế thừa từ Portcoast Design System; nhận diện (màu, hình thoi, dải tiêu đề, bảng dự án) lấy
từ e-brochure Phan Vũ: https://www.phanvu.vn/thu-vien/e-brochure.

| Cần | Mở |
| --- | --- |
| Quy tắc thiết kế (brand book) | [`DESIGN.md`](DESIGN.md) |
| Dựng trang brochure | [`docs/brochure.md`](docs/brochure.md) |
| Biến CSS, token | [`tokens/tokens.css`](tokens/tokens.css), [`tokens/base.css`](tokens/base.css), [`tokens/tokens.json`](tokens/tokens.json) |
| Component React | [`components/`](components/), props ở [`components/index.d.ts`](components/index.d.ts) |
| Bản đóng gói (UMD, `window.PhanVu`) | [`dist/phanvu.bundle.js`](dist/phanvu.bundle.js) |
| Logo, trang brochure tham chiếu | [`assets/`](assets/) |

## Dùng trong một trang web

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="tokens/base.css"> <!-- nạp Be Vietnam Pro + IBM Plex Mono -->
```

Dùng biến CSS (`var(--text-body)`, `var(--action-primary)`, `var(--sp-4)`…), không viết mã màu trực tiếp.

## Dựng lại bundle

```bash
bun scripts/build.mjs
```

## Lưu ý

- Logo trong `assets/` là PNG 300×60 lấy từ phanvu.vn; cần bản vector và bản trắng chính thức cho in ấn.
- `assets/brochure/` chỉ là trang tham chiếu, không chèn vào sản phẩm.
- Bản trên Claude: https://claude.ai/artifact/Ek5DTjD1ETCvBazb3GTFr4
