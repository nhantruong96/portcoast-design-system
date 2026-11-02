# Trang brochure

Cách dựng một trang hồ sơ năng lực hoặc brochure theo e-brochure Phan Vũ.

## Khung trang

- Khổ A4 dọc. Lề trái 0 cho dải tiêu đề (dải chạm mép trang), lề còn lại `sp-12`.
- Đầu trang: một `SectionBand` (tiêu đề tiếng Việt + dòng tiếng Anh). Trang chứng nhận có thể dùng thanh đầu trang ngang toàn khổ nền `blue-700`, chữ trắng in hoa căn phải: "CHỨNG NHẬN / CERTIFICATIONS".
- Chân trang: `BrochureFooter` toàn khổ, tên công ty giãn chữ, đổi bên theo trang chẵn/lẻ.

## Trang dự án

- Bốn đến năm `ProjectSheet` xếp dọc, ảnh xen kẽ phải/trái, khoảng cách `sp-10`.
- Mỗi dự án đúng ba dòng: Khách hàng / Client, Hạng mục / Scope of work, Khối lượng / Quantity.
- Khối lượng cọc ghi bằng mét dài (`md`), có dấu chấm ngăn hàng nghìn.

## Trang chứng nhận

- Lưới 3 cột ảnh chứng chỉ, mỗi ảnh viền `line-hairline`, không bóng.
- Dưới mỗi ảnh một dòng chữ mono ghi số hiệu chứng chỉ hoặc tiêu chuẩn (`ISO 9001:2015`, `JIS A 5373:2010`).

## Bìa sau và mạng lưới văn phòng

- Bản đồ nền `surface-paper` với đất liền `land-300`; lãnh thổ Việt Nam tô `blue-600`.
- Văn phòng chính đánh dấu chấm `signal-500` và nhãn đỏ `text-signal` in hoa; chi nhánh chấm nhỏ cùng màu, nhãn chàm `text-strong`.
- Khối hình tròn `sky-500` lớn tràn mép trên phải; mảng sóng `blue-800` và `sky-500` ở đáy mang địa chỉ văn phòng, chữ trắng chỉ trên `blue-800` (7.2:1), chữ `on-sky` trên `sky-500`.
