# Portcoast Design System — bản hướng dẫn cho AI

Đây là bản tóm tắt bắt buộc tuân theo khi tạo bất kỳ giao diện, trang web, ứng dụng, tài liệu hay slide
nào cho **Portcoast Consultant Corporation** (tư vấn kỹ thuật cảng, bờ biển và công trình biển, Việt Nam).
Chi tiết đầy đủ nằm trong thư mục `docs/`; giá trị chính xác nằm trong `tokens/`. Khi bản này và `docs/`
khác nhau, theo `tokens/tokens.css` về giá trị và theo `docs/` về quy tắc.

---

## 1. Thiết lập kỹ thuật

- Nạp phông từ Google Fonts:
  `https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap`
- Nạp `tokens/tokens.css` (biến CSS) rồi `tokens/base.css` (vai trò chữ, viền, chuyển động, style phần
  tử cơ bản). Mọi màu, cỡ chữ, khoảng cách, bo góc **phải** lấy qua biến CSS, ví dụ
  `color: var(--text-body)`. Không viết mã hex trực tiếp trong component.
- Ứng dụng React: các component tham chiếu nằm trong `components/` (JSX, style inline dùng biến CSS);
  props ở `components/index.d.ts`, cách dùng ở `components/<Tên>.md`. Có thể chép nguyên vào dự án.
- Biểu tượng: **Lucide** (`lucide-react` hoặc UMD `lucide@0.544.0`), nét 1.75, chỉ nét, không tô đặc.
- Logo: `assets/logo.svg` (xanh) và `assets/logo-white.svg` (trắng, cho nền tối). Không vẽ lại logo.

## 2. Ngôn ngữ và giọng văn

- Nội dung giao diện viết **tiếng Việt**, chính xác, trang trọng vừa phải, không chào hàng.
- **Viết hoa chữ đầu câu** ở mọi nơi: tiêu đề, nút, tiêu đề cột. **Không viết hoa toàn bộ tiêu đề tiếng
  Việt.** Chữ in hoa chỉ cho nhãn nhỏ 12 px trở xuống, giãn chữ +0.14em.
- Tiêu đề là câu khẳng định hoặc câu hỏi ngắn, dưới 12 từ, không dấu hai chấm.
- Không dấu chấm than, không emoji, không câu hỏi tu từ lấp chỗ, không từ sáo rỗng ("giải pháp đột phá",
  "liền mạch", "tối ưu hóa toàn diện", "hành trình", "trao quyền").
- Không bịa số liệu. Mọi con số có nguồn đi kèm.
- Thuật ngữ ISO 19650 dùng theo TCVN, kèm tiếng Anh ở lần đầu: môi trường dữ liệu chung (CDE), vùng chứa
  thông tin (information container), bên giao thầu (appointing party), mức độ nhu cầu thông tin (LOIN).
- Số thứ tự hai chữ số: `04`, không phải `4`.

## 3. Màu

Chỉ dùng token ngữ nghĩa. Mỗi họ màu một việc:

| Vai trò | Token | Giá trị |
| --- | --- | --- |
| Chữ đậm, tiêu đề | `--text-strong` | navy 900 `#0A1F33` (không bao giờ đen tuyệt đối) |
| Thân bài | `--text-body` | slate 700 `#3B4753` |
| Chữ phụ, nhãn, chú thích | `--text-muted` | slate 600 `#55636F` |
| Chữ mờ | `--text-subtle` | `#606E79` |
| Liên kết, chữ thương hiệu | `--text-link`, `--text-brand` | blue 700 `#00699F` |
| Nhãn dòng trên, mã, trích dẫn | `--text-accent` | cyan 700 `#0B6C9C` |
| Hành động chính | `--action-primary` | blue 600 `#0093DD` (màu logo) |
| Màu nhấn (đường kẻ, focus) | `--line-accent`, `--focus-ring` | cyan 500 `#1899D6` |
| Tín hiệu (hiếm) | `--action-signal`, `--text-signal` | nền nút cam `#E4610F` / chữ cam `#A8420A` |
| Nền | `--surface-page` trắng · `--surface-paper` `#F7F4EE` · `--surface-sunken` `#EDF0F2` · `--surface-inverse` navy 900 |
| Trạng thái | phù hợp / khuyến nghị / không phù hợp: nền `--surface-success/warning/danger`, chữ `--text-success/warning/danger` |

Quy tắc:
- Cam tín hiệu chỉ cho hoạt động, cảnh báo tiến độ, điểm không phù hợp. Rất hiếm. Chữ cam luôn dùng
  `--text-signal` (`#A8420A`), không dùng `#E4610F` làm màu chữ.
- **Không gradient, không texture, không họa tiết, không làm mờ nền (blur), không hiệu ứng kính.** Nền là
  màu phẳng.
- Tối đa hai màu nền trên một màn hình. Chữ đạt tương phản tối thiểu 4.5:1.

## 4. Chữ

- **Archivo** cho mọi văn bản, **Archivo 800** cho chữ lớn, **IBM Plex Mono** cho thứ máy đọc được: mã tài
  liệu, số điều khoản, tên file, số hiệu.
- Thang: display 62 / h1 48 / h2 38 / h3 30 / h4 24 / h5 17 / body 15 (lead 17, nhỏ 13) / nhãn 12 px.
  Dùng class `.type-*` hoặc biến `--type-*`.
- Dòng thân bài 1.52, ghi chú 1.68. Độ dài dòng 66 ký tự (`--measure-body`), tối đa 82.
- Chữ số dạng bảng (`font-variant-numeric: tabular-nums`) ở bảng và số liệu.

## 5. Bố cục, bề mặt, chuyển động

- Lưới 4 px (`--sp-*`). Lề trong thẻ 20 px, thẻ thoáng 32 px.
- **Viền tạo cấu trúc, không dùng bóng đổ.** Thẻ mặc định: viền 1 px `--line-hairline` trên nền trắng, bo
  6 px. Bóng chỉ cho thứ thật sự nổi (popover, modal).
- Bo góc gần vuông: 2 px tag, 4 px nút, 6 px thẻ, 10–12 px chỉ cho lớp nổi. Viên thuốc chỉ cho `Badge`.
- Ba loại đường kẻ: nét mảnh 1 px giữa dòng; navy 2 px trên chân trang và dưới tiêu đề bảng; cyan 3 px
  dài 88 px dưới tiêu đề lớn.
- Mọi thứ căn trái theo một hoặc hai mép. Không căn giữa tiêu đề và đoạn văn.
- Chuyển động phẳng, ngắn: `cubic-bezier(.2,0,0,1)`, 120 ms hover, 180 ms hiện nội dung, 260 ms mở khung.
  Không nảy, không phóng to, không parallax. Hover chỉ đậm màu nền thêm một bậc.
- Focus: viền trắng 2 px + cyan 2 px (`--ring-focus`), không bao giờ bỏ.

## 6. Thành phần có sẵn (`components/`)

`Button` (một nút `primary` mỗi màn hình), `IconButton` (bắt buộc `label`), `Badge` (trạng thái, 1–2 từ),
`Tag` (phân loại, mã dùng `mono`), `Card`, `Callout` (vạch trái 4 px; `activity` là chỗ duy nhất có cam),
`ClauseRef` (trích dẫn tiêu chuẩn), `NumberTile`, `Checklist`, `Definition`, `StatBlock` (mọi số có
`note` nguồn), `PullQuote`, `DataTable` (không kẻ dọc), `Icon`, `Logo`, `ImagePlaceholder` (thay cho ảnh
chưa có, không dùng ảnh minh họa giả), `SlideFrame`, `SlideHeader`, `SlideFooter`, `NotesPanel`.

Chưa có thành phần biểu mẫu trên màn hình. Khi cần, dựng theo các nguyên tắc trong
`docs/form-style.md`: một cột; nhãn đặt trên ô, không đặt trong ô; không dùng dấu sao, trường tự chọn
ghi "(không bắt buộc)"; gợi ý một dòng ngắn; độ rộng ô theo độ dài câu trả lời.

## 7. Bảng và dữ liệu

- Bảng kiểu **booktabs**: đường kẻ trên, đường dưới tiêu đề, đường cuối; nét mảnh giữa các dòng; **không
  kẻ dọc, không tô nền tiêu đề**. Tiêu đề cột là nhãn in hoa nhỏ. Số căn phải, mã chữ mono.
- Biểu đồ: chọn theo quan hệ cần thể hiện (thời gian → đường; xếp hạng → cột sắp thứ tự; thành phần →
  cột chồng, không dùng biểu đồ tròn quá ba phần). Một chuỗi nhấn màu cyan 600, còn lại slate 300. Ghi
  nhãn ở cuối đường, không chú giải. Dòng nguồn dưới mỗi biểu đồ.

## 8. Tài liệu và slide

- Tài liệu in (báo cáo, quy trình, biểu mẫu): xem `docs/doc-foundations.md`, `docs/report-style.md`,
  `docs/form-style.md` và mẫu trong `examples/`. Ý tưởng chính: **tờ bản vẽ kỹ thuật**. Khung tên ở chân
  mỗi trang, cột lề 45 mm bên trái cho số mục và ghi chú điều khoản, bảng booktabs.
- Slide dự án: xem `docs/deck-style.md` và `examples/AssertionSlide.html`. **Tiêu đề là một câu khẳng
  định**, phần thân là bằng chứng (biểu đồ, bản vẽ, bảng). Không có slide "Cảm ơn".
- Slide đào tạo: xem `docs/slides-khoa-hoc.md` (khung 1280×720, lề 72 / 56 / 44 px).

## 9. Logo và BSI Kitemark™

- Logo Portcoast một màu `#0093DD` hoặc trắng; vùng trống bằng chiều cao chữ; rộng tối thiểu 96 px.
- Dấu BSI Kitemark™ (`assets/kitemark/`) **chỉ** dùng trên nội dung về năng lực BIM. Luôn kèm số chứng
  chỉ `KM 824632` ngay dưới (Tahoma); chỉ màu đen hoặc trắng; cao tối thiểu 64 px trên màn hình; không
  ghép chung khối với logo Portcoast; không đặt trên nội dung quy trình ISO 9001/14001/45001 hay hồ sơ cá
  nhân. Quy tắc đầy đủ: `docs/kitemark.md`. Dấu multi-scheme cần BSI xác nhận trước khi dùng lần đầu.

## 10. Kiểm tra trước khi giao

- Không có mã hex nào ngoài `tokens/`. Không gradient, không bóng đổ trên thẻ thường, không emoji.
- Tiêu đề tiếng Việt không viết hoa toàn bộ; dấu thanh không bị cắt.
- Tương phản chữ ≥ 4.5:1; focus hiển thị rõ; biểu tượng đứng cạnh nhãn.
- Mọi số liệu có nguồn; mọi ảnh thiếu dùng `ImagePlaceholder`.
