# Portcoast Design System

Design system cho tài liệu đào tạo, tài liệu kỹ thuật, biểu mẫu IMS và ứng dụng của Portcoast Consultant
Corporation. Kho này là bản xuất từ design system gốc trên Claude, sắp xếp để con người và AI (Google AI
Studio, Claude, các công cụ dựng ứng dụng) dùng trực tiếp.

## Bắt đầu từ đâu

| Cần | Mở |
| --- | --- |
| Quy tắc tóm tắt cho AI | [`DESIGN.md`](DESIGN.md) |
| Dùng trong Google AI Studio | [`HUONG-DAN-AI-STUDIO.md`](HUONG-DAN-AI-STUDIO.md), prompt mở đầu [`PROMPT-KHOI-DAU.md`](PROMPT-KHOI-DAU.md) |
| Biến CSS, token | [`tokens/tokens.css`](tokens/tokens.css), [`tokens/base.css`](tokens/base.css), [`tokens/tokens.json`](tokens/tokens.json) |
| Thuyết minh đầy đủ | [`docs/`](docs/) |
| Component React tham chiếu | [`components/`](components/) |
| Mẫu trang HTML | [`examples/`](examples/) |
| Template Word quy trình và biểu mẫu IMS | [`templates/`](templates/) |
| Logo, dấu BSI Kitemark™ | [`assets/`](assets/) |

## Dùng trong một dự án web

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="tokens/base.css">
```

Sau đó dùng biến CSS (`var(--text-body)`, `var(--action-primary)`, `var(--sp-4)`…), không viết mã màu
trực tiếp.

## Lưu ý

- Kho để **riêng tư**. Dấu BSI Kitemark™ trong `assets/kitemark/` là tài sản của BSI, Portcoast chỉ được
  dùng theo chứng chỉ KM 824632 và quy tắc trong [`docs/kitemark.md`](docs/kitemark.md).
- Hai template Word trong `templates/` dựng trước đợt chỉnh tương phản tháng 11/2026; nhãn và tiêu đề
  chạy vẫn dùng `#6F7D89` thay vì `#55636F`.
- Nguồn gốc của mọi thay đổi là design system trên Claude; sửa ở đó rồi xuất lại vào kho này.
