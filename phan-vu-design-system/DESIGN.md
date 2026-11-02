Hệ thống thiết kế cho tài liệu, hồ sơ năng lực, brochure, trang web và slide của **Tập đoàn Phan Vũ** (Phan Vu Investment Corporation), nhà thầu cọc nền móng và bê tông đúc sẵn lắp ghép. Cấu trúc (token ngữ nghĩa, thang chữ, lưới 4 px, bộ component) kế thừa từ Portcoast Design System; màu, hình thoi, dải tiêu đề và cách trình bày dự án lấy từ e-brochure Phan Vũ.

## Thiết lập

- Nạp `tokens.css` rồi `components/bundle.css` (bundle.css nạp phông Be Vietnam Pro và IBM Plex Mono từ Google Fonts, thêm vai trò chữ `--type-*`, viền `--border-*`, vòng focus `--ring-focus`, chuyển động).
- Mọi màu, cỡ chữ, khoảng cách, bo góc lấy qua biến CSS: `color: var(--text-body)`. Không viết mã hex trong component.
- Component React ở `window.PhanVu` (React 18); props trong `components/index.d.ts`.

## Giọng văn

- Tiếng Việt trước, tiếng Anh sau khi tài liệu song ngữ: "Khách hàng / Client", "Hạng mục / Scope of work", "Khối lượng / Quantity".
- Trang trọng, cụ thể, không chào hàng. Câu khẳng định có số liệu thay cho tính từ: "585.000 md cọc D350–D600 cho Hòa Phát Dung Quất", không "dự án quy mô lớn".
- Khẩu hiệu chính thức viết đúng như logo: "Uy tín - Sáng tạo - Hợp tác - Hiệu quả".
- Viết hoa chữ đầu câu ở tiêu đề, nút, cột bảng. **Ngoại lệ duy nhất**: tiêu đề dải mục (`SectionBand`, kiểu `type-band`) và tên dự án (`ProjectSheet`, kiểu `type-project`) in hoa như brochure. Nhãn nhỏ ≤ 12 px in hoa, giãn +0.14em.
- Số theo kiểu Việt Nam: dấu chấm ngăn hàng nghìn (`350.000 md`), đơn vị viết thường (`md`, `m³`, `tấn`). Mã cọc, mác bê tông, tên tiêu chuẩn dùng chữ mono: `PHC-D600-A`, `JIS A 5373:2010`.
- Không dấu chấm than, không emoji, không bịa số. Mọi con số có nguồn (`StatBlock note`).

## Màu

Năm màu nhận diện, mỗi màu một việc:

| Vai trò | Token | Giá trị | Nguồn |
| --- | --- | --- | --- |
| Chàm logo: khối nhận diện, chữ thương hiệu, nút phụ | `indigo-700`, `text-brand`, `action-secondary` | `#393C86` | logo PHAN VŨ GROUP |
| Xanh dương: hành động chính, dải tiêu đề mục | `blue-600`, `action-primary`, `surface-band` | `#0773BB` | dải "DỰ ÁN CÔNG NGHIỆP NẶNG" |
| Xanh trời: khối hình lớn, đường kẻ nhấn | `sky-500`, `line-accent` | `#20A9DF` | hình tròn bìa sau |
| Xám thép: thanh chân trang | `steel-500`, `surface-footer` | `#8596B0` | chân trang brochure |
| Đỏ đánh dấu: chấm vị trí, mốc quan trọng | `signal-500` | `#ED2025` | chấm "HEAD OFFICE" |

- Chữ: tiêu đề `text-strong` (chàm 900), thân bài `text-body`, phụ `text-muted`, liên kết `text-link`. Không dùng đen tuyệt đối.
- Nền: `surface-page` trắng; `surface-paper` (giấy ngà `#F8F9F3` của trang bản đồ) cho trang phụ; `surface-inverse` chàm đậm cho bìa. Tối đa hai màu nền trên một trang.
- Xanh trời `sky-500` không mang chữ trắng (2.7:1): chữ trên khối xanh trời dùng `on-sky`. Thanh xám thép mang chữ `on-steel`, không mang chữ trắng như bản in gốc (3.0:1).
- Đỏ `signal-500` chỉ làm chấm, mốc; nút đỏ dùng `action-signal` (`signal-600`, chữ trắng 5.9:1); chữ đỏ dùng `text-signal`.
- Trạng thái đạt / lưu ý / không đạt: nền `surface-success|warning|danger`, chữ `text-success|warning|danger`, luôn kèm chữ hoặc biểu tượng.
- Không gradient, không kính mờ, không bóng chữ. Nền phẳng.

## Chữ

- **Be Vietnam Pro** (Google Fonts) cho mọi văn bản: sans hình học, đủ dấu tiếng Việt, gần với chữ không chân trong brochure. **IBM Plex Mono** cho mã, tiêu chuẩn, số hiệu.
- Thang: `type-display` 62 / `type-h1` 48 / `type-h2` 38 / `type-h3` 30 / `type-h4` 24 / `type-h5` 17 / `type-body` 15 (`type-body-lg` 17, `type-body-sm` 13) / `type-label` 12.
- Brochure: `type-band` 28 đậm in hoa + `type-band-sub` 20 thường in hoa (dòng tiếng Anh); `type-project` 17 đậm in hoa; `type-footer` 13 giãn chữ.
- Dòng thân bài 1.52, độ dài 66 ký tự (`measure-body`). Số trong bảng dùng `tabular-nums`.

## Hình và bố cục

- **Hình thoi** (hình vuông xoay 45°, góc `radius-diamond`) là họa tiết nhận diện: cụm ba hình ở mũi dải tiêu đề (một viền trắng, một đặc xanh dương, một đặc xanh trời). Chỉ dùng trong `SectionBand` và cover; không rải khắp trang.
- **Dải tiêu đề mục** xuất phát từ mép trái trang, mũi nhọn bên phải, rộng khoảng 60% trang.
- **Ảnh công trình** bo hai góc chéo nhau bằng `radius-photo` (20 px), hai góc kia vuông; xen kẽ trái/phải theo từng dự án. Ảnh thật, công trường thật; chưa có ảnh thì dùng `ImagePlaceholder` ghi rõ ảnh cần đặt.
- **Bảng dự án** kẻ ngang `line-default`, không kẻ dọc, không tô nền: nhãn song ngữ bên trái (`text-muted`), giá trị bên phải (`text-strong`).
- Khối hình lớn (hình tròn xanh trời, mảng chàm) chỉ ở bìa và trang chuyển mục, tràn khỏi mép trang.
- Lưới 4 px (`sp-*`). Lề trong thẻ `sp-5`, thẻ thoáng `sp-8`. Căn trái.
- Viền tạo cấu trúc, không bóng đổ: thẻ viền 1 px `line-hairline`, bo `radius-md`. Bóng (`shadow-*`, sắc chàm) chỉ cho lớp nổi.
- Bo góc gần vuông: `radius-xs` tag, `radius-sm` nút, `radius-md` thẻ; `radius-pill` chỉ cho `Badge`.
- Đường kẻ: nét mảnh 1 px giữa dòng; chàm 2 px (`rule-heavy`) trên chân trang và dưới tiêu đề bảng; xanh trời 3 px dài 88 px (`rule-accent`) dưới tiêu đề lớn.
- Focus: 2 px trắng + 2 px `focus-ring` (xanh dương, 5.0:1), không bao giờ bỏ.
- Chuyển động phẳng, ngắn: `cubic-bezier(.2,0,0,1)`, 120 ms hover, 180 ms hiện nội dung. Hover chỉ đậm nền một bậc.

## Biểu tượng

- **Lucide** (`lucide@0.544.0`, qua component `Icon`), nét 1.75, chỉ nét, không tô đặc. Màu kế thừa chữ.
- Bộ hay dùng: `building-2`, `factory`, `hard-hat`, `ruler`, `map-pin`, `file-check`, `truck`, `anchor`. Biểu tượng luôn đi cùng nhãn chữ.
- Không emoji. Biểu tượng tòa nhà màu vàng cam trên bản đồ brochure là hình in, không thuộc bộ biểu tượng hệ thống.

## Logo

- Dùng file `assets/Logos/phanvu-group-logo.png` qua component `Logo`: dấu hình vuông, chữ PHAN VŨ GROUP và khẩu hiệu, chàm `#393C86` trên nền trong suốt.
- Rộng tối thiểu 96 px, tối đa 300 px (bản gốc PNG 300×60). Vùng trống quanh logo bằng chiều cao chữ PHAN VŨ.
- Trên nền chàm hoặc xanh dương dùng `tone="inverse"`. Bộ lọc trắng làm đầy dấu hình vuông (mất nét cung bên trong); khi có bản logo trắng chính thức, thay `src`.
- Không vẽ lại, không đổi màu khác, không đặt trên ảnh rối.

## Component

Cơ bản: `Button`, `IconButton`, `Badge`, `Tag`, `Card`. Nội dung: `Callout`, `ClauseRef`, `NumberTile`, `Checklist`, `Definition`, `StatBlock`, `PullQuote`, `DataTable`. Hình ảnh: `Icon`, `Logo`, `ImagePlaceholder`. Brochure: `SectionBand`, `ProjectSheet`, `BrochureFooter`. Trình chiếu: `SlideFrame`, `SlideHeader`, `SlideFooter`, `NotesPanel`.

## Kiểm tra trước khi giao

- Không mã hex ngoài token. Không gradient, không bóng trên thẻ thường, không emoji.
- Chữ đạt 4.5:1 trên nền của nó; chữ trên xanh trời và xám thép dùng `on-sky`, `on-steel`.
- Tiêu đề không in hoa toàn bộ, trừ dải mục và tên dự án.
- Mọi số liệu có nguồn; mọi ảnh thiếu dùng `ImagePlaceholder`.
