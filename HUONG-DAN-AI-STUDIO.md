# Dùng Portcoast Design System trong Google AI Studio

Gói này chứa toàn bộ design system ở dạng AI đọc được: bản hướng dẫn `DESIGN.md`, token CSS/JSON, logo,
dấu Kitemark, component React tham chiếu và các mẫu trang.

## Cấu trúc

| Thư mục / file | Nội dung |
| --- | --- |
| `DESIGN.md` | Bản tóm tắt quy tắc cho AI. Đây là file quan trọng nhất. |
| `tokens/tokens.css`, `tokens/base.css` | Biến CSS (màu, chữ, khoảng cách, bo góc, bóng) và style cơ bản |
| `tokens/tokens.json` | Cùng token, dạng dữ liệu, kèm ghi chú cách dùng tiếng Việt |
| `assets/` | Logo SVG xanh và trắng, PNG 2400 px; `assets/kitemark/` dấu BSI gốc |
| `components/` | 20 component React (JSX) dùng biến CSS, props trong `index.d.ts`, cách dùng trong `<Tên>.md` |
| `docs/` | Bản thuyết minh đầy đủ: README, nền tảng tài liệu, báo cáo, biểu mẫu, slide, Kitemark |
| `examples/` | Mẫu HTML: khung tên, trang báo cáo A4, biểu mẫu, slide khẳng định – bằng chứng, Kitemark |

## Cách 1 — Chế độ Build (dựng ứng dụng)

1. Tạo ứng dụng mới trong **Build**, dán nội dung `PROMPT-KHOI-DAU.md` làm yêu cầu đầu tiên, bổ sung mô tả
   ứng dụng anh cần ở cuối.
2. Sau khi AI tạo khung dự án, mở tab **Code** và tạo các file sau, dán nội dung tương ứng từ gói này:
   `DESIGN.md`, `src/design-system/tokens.css`, `src/design-system/base.css`, `public/logo.svg`,
   `public/logo-white.svg`. Nếu cần component, chép các file trong `components/` vào
   `src/design-system/components/`.
3. Ở các yêu cầu tiếp theo, nhắc AI: "Tuân theo DESIGN.md". Build không có ô hướng dẫn cố định, nên nhắc
   lại khi AI bắt đầu lệch.

Nếu anh đẩy gói này lên một kho GitHub, có thể dùng **Import from GitHub** trong menu **Add files** để
đưa toàn bộ vào cùng lúc thay cho bước 2.

## Cách 2 — Chế độ Chat (soạn nội dung, viết code từng phần)

1. Dán toàn bộ `DESIGN.md` vào ô **System instructions**.
2. Đính kèm `tokens/tokens.css` và file trong `docs/` liên quan tới việc đang làm (ví dụ `form-style.md`
   khi thiết kế biểu mẫu).
3. Lưu prompt để dùng lại cho các lần sau.

## Lưu ý

- `tokens.css` trong gói đã có ba chỉnh sửa tương phản mới nhất: `text-muted` = slate 600,
  `text-subtle` = `#606E79`, `text-signal` = signal 700 `#A8420A`. Mọi màu chữ đều đạt ít nhất 4.5:1
  trên nền trắng, giấy và vùng lõm.
- Phông Archivo và IBM Plex Mono tải từ Google Fonts, không cần file phông.
- Dấu BSI Kitemark™ là tài sản của BSI. Chỉ dùng theo `docs/kitemark.md`, kèm số chứng chỉ KM 824632.
