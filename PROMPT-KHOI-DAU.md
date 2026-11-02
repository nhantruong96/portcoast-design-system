Dựng ứng dụng theo Portcoast Design System. Quy tắc bắt buộc:

- Phông: Archivo (văn bản, 400–800) và IBM Plex Mono (mã, số hiệu) từ Google Fonts.
- Mọi màu, cỡ chữ, khoảng cách lấy từ biến CSS trong `src/design-system/tokens.css`; không viết mã hex trong component.
- Màu: chữ đậm navy `#0A1F33` (`--text-strong`), thân bài `#3B4753` (`--text-body`), chữ phụ `#55636F` (`--text-muted`); hành động chính xanh `#0093DD` (`--action-primary`); màu nhấn cyan `#1899D6`; nền trắng, nền giấy `#F7F4EE`, nền lõm `#EDF0F2`, nền tối navy `#0A1F33`. Cam chỉ dùng cho cảnh báo và hoạt động, rất hiếm: nền nút `#E4610F`, chữ cam `#A8420A` (`--text-signal`).
- Không gradient, không texture, không blur, không emoji. Thẻ dùng viền 1 px `#DDE2E6`, bo 6 px, không bóng đổ. Nút bo 4 px, hover chỉ đậm màu nền, không phóng to.
- Bảng kiểu booktabs: chỉ kẻ ngang, không kẻ dọc, không tô nền dòng tiêu đề; tiêu đề cột là nhãn in hoa 12 px giãn chữ.
- Biểu tượng Lucide nét 1.75, luôn kèm nhãn chữ.
- Nội dung tiếng Việt, viết hoa chữ đầu câu, không viết hoa toàn bộ tiêu đề, không dấu chấm than, không từ sáo rỗng. Số liệu luôn ghi nguồn; ảnh chưa có thì để khung giữ chỗ có ghi chú, không dùng ảnh minh họa giả.
- Logo ở `public/logo.svg` (nền sáng) và `public/logo-white.svg` (nền tối), rộng tối thiểu 96 px, không đổi màu.
- Căn trái, lưới khoảng cách 4 px, chuyển động 120–260 ms `cubic-bezier(.2,0,0,1)`, vòng focus cyan rõ ràng.

Quy tắc đầy đủ ở `DESIGN.md`; khi có xung đột, theo `DESIGN.md`.

Ứng dụng cần dựng:
[mô tả ứng dụng ở đây]
