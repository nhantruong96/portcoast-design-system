# Portcoast Design System

Design system cho tài liệu đào tạo và tài liệu truyền đạt kỹ thuật của **Portcoast**. Bề mặt đầu tiên
là bộ slide khóa học: quản lý thông tin theo ISO 19650, kiến thức nền tảng BIM và đào tạo triển khai
Revit. Từ tháng 10/2026, hệ thống bao gồm thêm báo cáo, quy trình, biểu mẫu và bộ slide dự án.

Hệ thống được thiết kế cho tài liệu phải dùng trọn một ngày trong phòng học, rồi được học viên đọc lại
một mình như một trang sổ tay. Mọi quyết định đều xuất phát từ đó: slide dày thông tin nhưng có trật
tự, thang chữ đọc được từ cuối phòng, độ tương phản như mực trên giấy, và không có chi tiết trang trí
nào không mang thông tin.

---

## 1. Bối cảnh và nguồn

**Thương hiệu.** Portcoast. Tư vấn kỹ thuật hạ tầng cảng, bờ biển và công trình biển.

**Những gì đã được cung cấp**

| Nguồn | Là gì | Đã dùng như thế nào |
| --- | --- | --- |
| Logo Portcoast chính thức (10/2026) | Chữ PORTCOAST với hai đường sóng, một màu `#0093DD`, file raster do Portcoast cung cấp | Dựng lại thành vector `assets/logo.svg` (và `assets/logo-white.svg` cho nền tối); bản PNG trong nhóm asset *Brand*. Thay cho logo tạm trước đây `uploads/logo-1789060498014-p1ht.svg`. |
| Dấu BSI Kitemark™ (BSI, bản En-GB) | Dấu BIM Design and Construction, BIM Security và multi-scheme, bản đen và trắng | Đưa nguyên vẹn vào nhóm asset *Kitemark*. Quy tắc dùng ở `kitemark.md`. |
| Trả lời bản brief (9/2026) | Màu chủ đạo (ban đầu `#1B4DB1`, nay theo màu logo `#0093DD`), chữ grotesque trung tính kiểu Thụy Sĩ, giọng văn trang trọng của tổ chức, slide dạng sổ tay dày thông tin, chủ đề ISO 19650 / BIM / Revit | Định hướng bảng màu, kiểu chữ, mật độ slide và toàn bộ nội dung mẫu. |
| `uploads/01 Slides_BIM70001ENGX_v7(AD01)_Jul2025.pdf` | Giáo trình đào tạo ISO 19650 của bên thứ ba (BSI), 186 trang | **Không dùng làm nguồn hình ảnh.** Xem ghi chú dưới đây. |

### Ghi chú về file PDF đã tải lên

Bộ slide đã tải lên là tài liệu đào tạo có bản quyền của BSI, ghi rõ cấm sao chép. Hệ thống này không
sao chép màu, kiểu chữ, logo, hình biểu tượng, bố cục hay câu chữ nào từ đó. Thứ duy nhất được tham
khảo là *cấu trúc*: những thành phần quen thuộc của một khóa đào tạo tiêu chuẩn, vốn là thông lệ chung
chứ không thuộc thương hiệu riêng của ai. Đó là chương trình học đánh số, danh sách mục tiêu học tập,
trang ngăn học phần, trích dẫn điều khoản, đề bài hoạt động cho học viên, cột ghi chú giảng viên và số
trang khớp với sổ tay in. Mọi quyết định hình ảnh dưới đây đều là của riêng Portcoast.

### Những thiếu hụt cần bổ sung

- **Các phiên bản logo.** Logo ngang chính thức đã có trong hệ thống. Vẫn cần thêm bản xếp dọc và
  bản đơn sắc chính thức (không phải bản tự đổi màu).
- **Chưa có phông chữ bản quyền.** Xem mục 4.
- **Chưa có ảnh hay sơ đồ.** Mọi vị trí ảnh trong hệ thống là một `ImagePlaceholder` ghi rõ ảnh nào
  cần đặt vào. Không có gì được vẽ hoặc tạo ra để lấp chỗ trống.
- **Chưa có tài liệu nhận diện thương hiệu**, hướng dẫn giọng văn hay giao diện sản phẩm sẵn có, nên
  mục 3 và mục 4 là đề xuất chứ không phải ghi nhận lại hệ thống đang dùng. Hãy đọc như một bản nháp
  đầu tiên để chỉnh sửa.

---

## 2. Phạm vi của hệ thống

Hai bề mặt.

**Bộ slide khóa học.** `slides/` chứa mười một bố cục cho một khóa học hai ngày, và
`templates/course-deck/` là điểm xuất phát mà một dự án sao chép về để dùng.

**Tài liệu** (bổ sung tháng 10/2026): báo cáo, quy trình được kiểm soát, biểu mẫu và bộ slide không
phải đào tạo. Các trang dựng trên một ý tưởng duy nhất là tờ bản vẽ kỹ thuật: khung tên ở chân mỗi
trang, cột lề 45 mm cho số mục và ghi chú điều khoản, bảng kiểu booktabs, phông chữ nhúng sẵn trong
file. Đọc theo thứ tự:

| Chương | Nội dung |
| --- | --- |
| `doc-foundations.md` | Ý tưởng, lưới A4, thang chữ in, màu khi in, đường kẻ và bảng, ô điền, các trường của khung tên, tài liệu tham khảo |
| `report-style.md` | Viết kết luận trước, trình tự trang, chín mục cố định của một quy trình IMS, lưu đồ swimlane, khối diễn giải bước |
| `form-style.md` | Nguyên tắc biểu mẫu giấy (theo GOV.UK và USWDS), cấu trúc, ô chia ký tự và ô đánh dấu, quy tắc một trang |
| `deck-style.md` | Slide khẳng định – bằng chứng, chọn biểu đồ, phép thử đọc tiêu đề, các loại slide |
| `kitemark.md` | Logo Portcoast và dấu BSI Kitemark™: dùng dấu nào, kích thước, màu, vùng trống, phạm vi được phép |

Mẫu trực quan: `TitleBlock`, `ReportPage`, `FormSheet`, `AssertionSlide`, `Kitemark` trong nhóm
Documents. Template Word triển khai các mẫu này là `PCC-IMS-QT-Template.docx` (quy trình) và
`PCC-IMS-BM-Template.docx` (biểu mẫu); bản PDF của cả hai nằm trong nhóm asset *Templates*.

Hệ thống chưa có bộ giao diện ứng dụng, website hay sản phẩm số, vì chưa có sản phẩm nào được cung
cấp. Nếu cần, hãy yêu cầu và gửi kèm nguồn.

---

## 3. Nguyên tắc nội dung

**Giọng văn: giọng của tiêu chuẩn, ấm hơn một bậc.** Nội dung đào tạo của Portcoast do một kỹ sư viết,
người đã đọc kỹ tiêu chuẩn và giờ phải giảng lại cho đồng nghiệp trong phòng học trước thứ Sáu. Văn
phong chính xác, không vội và không bao giờ chào hàng.

**Xưng hô.** Trong tài liệu, gọi người học là **học viên** ở ngôi thứ ba; khi nói trực tiếp (lời giảng,
hướng dẫn hoạt động) gọi là **anh chị**. Không dùng "chúng tôi" thay cho Portcoast: tổ chức được gọi
tên khi hành động ("Portcoast ban hành yêu cầu trao đổi thông tin"), không nhân cách hóa. Không dùng
"tôi".

**Viết hoa.** Viết hoa chữ đầu câu ở mọi nơi: tiêu đề slide, nút, tiêu đề thẻ, tiêu đề cột bảng. Không
viết hoa toàn bộ tiêu đề tiếng Việt, vì dấu thanh chồng lên nhau và hình dáng chữ biến mất. Chữ in hoa
chỉ dùng cho lớp nhãn dòng trên / nhãn nhỏ (12 px, giãn chữ +0.14em) và mã trạng thái đúng như tiêu
chuẩn in (`S3`, `A1`, `IFC4`).

**Tiêu đề là câu hỏi hoặc câu khẳng định đơn giản.** "Bao nhiêu thông tin là đủ?", không phải "Mức độ
nhu cầu thông tin: Tổng quan". Dưới mười hai từ. Không dùng dấu hai chấm trong tiêu đề, không xếp
chồng danh từ, không mở đầu bằng "Tìm hiểu về…".

**Động từ, theo thang mục tiêu của khóa học.** Mục tiêu và hướng dẫn mở đầu bằng một trong các động
từ: nhận biết (identify), định nghĩa (define), mô tả (describe), giải thích (explain), diễn giải
(interpret), thảo luận (discuss), ghi nhận (record), xác nhận (confirm), lập sơ đồ (map). Ghi chú cho
giảng viên và học viên viết ở thể mệnh lệnh: "Mời hai học viên nêu một ví dụ…", "Ghi lại hai bên
tham gia trong dự án của anh chị".

**Thuật ngữ cố định và được trích dẫn.** Thuật ngữ được định nghĩa trong ISO 19650 dùng đúng như bản
TCVN ISO 19650 ghi, viết thường, kèm thuật ngữ tiếng Anh trong ngoặc ở lần đầu: *môi trường dữ liệu
chung (common data environment)*, *vùng chứa thông tin (information container)*, *mức độ nhu cầu thông
tin (level of information need)*, *bên giao thầu (appointing party)*, *bên nhận thầu chính (lead
appointed party)*. Định nghĩa được trích nguyên văn trong thành phần `Definition` và luôn ghi nguồn
(`ISO 19650-1:2018, 3.3.15`). Phần diễn giải lại đặt ở trường `note`, không bao giờ đặt trong định nghĩa.

**Chữ viết tắt.** Viết đầy đủ ở lần đầu, chữ viết tắt theo sau: "môi trường dữ liệu chung (CDE)", sau đó
dùng chữ viết tắt. `OIR`, `AIR`, `PIR`, `EIR`, `BEP`, `LOIN`, `MIDP` đều theo cách này, mỗi học phần một
lần, không phải mỗi bộ slide một lần.

**Số.** Học phần và slide đánh số hai chữ số: `04`, không phải `4`. Số liệu luôn có nguồn hoặc lưu ý
trong ô `note`; số liệu không rõ nguồn gốc không được đưa lên slide.

**Độ dài.** Slide dày thông tin là có chủ đích, vì slide *chính là* trang sổ tay. Nhưng mật độ phải có
trật tự: mỗi vùng một ý, mỗi slide tối đa một khung chú thích và một khung ghi chú, bảng rút gọn còn sáu
dòng kèm một dòng cho biết bảng đầy đủ có bao nhiêu dòng.

**Những gì không bao giờ viết**

- Không dùng dấu chấm than. Không dùng câu hỏi tu từ để lấp chỗ ("Nghe đơn giản phải không?").
- Không dùng từ sáo rỗng: "leverage", "unlock", "seamless", "journey", "empower", "game-changer",
  "best-in-class", và các từ tương đương trong tiếng Việt như "tối ưu hóa toàn diện", "giải pháp đột
  phá", "liền mạch", "hành trình", "trao quyền", "đẳng cấp hàng đầu".
- Không dùng emoji. Ở bất cứ đâu: slide, giao diện, nội dung commit có kèm câu chữ phát hành.
- Không bịa số liệu, không dùng số tròn thay cho số thật, không viết "nhanh hơn tới 40%".
- Không xin lỗi thay cho tiêu chuẩn, và không hứa rằng nó dễ.

**Ví dụ, đúng giọng văn**

> Quản lý thông tin là một quy trình, không phải một công nghệ.

> Mức độ nhu cầu thông tin được xác định bởi mục đích mà thông tin phục vụ. Nó được thống nhất giữa bên
> giao thầu và nhóm thực hiện trước khi bắt đầu sản xuất, và là mức tối thiểu cần để trả lời câu hỏi
> đang đặt ra.

> Ghi chú giảng viên: mời hai học viên nêu một ví dụ về thông tin đã được tạo ra trong dự án của họ mà
> không ai dùng, và một ví dụ về thông tin bị thiếu đúng lúc cần ra quyết định. Làm rõ cái giá của cả hai.

> Hoạt động 6.1. Lập sơ đồ chuỗi hợp đồng của anh chị. Nhóm ba người, chọn một dự án mà một người trong
> nhóm đang làm.

---

## 4. Nền tảng hình ảnh

### Kiểu chữ

**Archivo** cho mọi thứ, **IBM Plex Mono** cho chuỗi máy đọc được. Archivo là chữ grotesque cùng dòng
với Univers: lỗ chữ khép, nét kết thúc nằm ngang, khoảng chữ mặc định chặt, và có độ đậm 800 thật sự,
giữ được dáng ở cỡ 200 px trên slide ngăn chương. Chữ mang vẻ của một tổ chức mà không giống biểu mẫu
hành chính.

> **Ghi chú thay thế.** Chưa có phông chữ bản quyền nào được cung cấp. Archivo và IBM Plex Mono là hai
> phông giấy phép mở gần nhất với định hướng dòng Helvetica đã yêu cầu, tải từ Google Fonts trong
> `components/bundle.css`. Nếu Portcoast có phông thương hiệu bản quyền (Helvetica Now, Neue Haas
> Grotesk, Univers, Suisse Int'l), gửi file web và việc thay chỉ chạm hai file (`components/bundle.css`,
> `--font-sans` / `--font-display` trong `tokens.json`). Vì phông tải từ CDN chứ không có file đóng gói,
> trình biên dịch báo không có file phông nào; điều đó là bình thường. Template Word nhúng sẵn Archivo
> và IBM Plex Mono trong file (xem `doc-foundations.md`).

- **Display** 62 px / 800 / −0.03em. Chỉ dùng cho slide bìa và slide khẳng định.
- **Tiêu đề** 48 / 38 / 30 / 24 / 17. Tiêu đề slide là H2 (38 px), giãn chữ −0.015em, tối đa 24 ký tự
  mỗi dòng.
- **Thân bài** 17 / 15 / 13 với dòng 1.52. Ghi chú 13 px dòng 1.68, thoáng hơn vì để đọc chứ không để nói.
- **Nhãn dòng trên và nhãn** 12 px / 700 / in hoa / +0.14em. Mỗi slide nội dung có đúng một nhãn dòng trên.
- **Mono** 13 px / 500. Trích dẫn điều khoản, mã vùng chứa thông tin, lớp IFC, tham số Revit, tên file.
  Không bao giờ dùng cho thân bài hoặc để nhấn mạnh.
- **Chữ số** dạng bảng (tabular) ở mọi nơi số liệu có thể thay đổi (bảng, số liệu, số trang). Số học
  phần đặt Archivo 800, cỡ 30 px trong ô số, 200 px trên slide ngăn chương.
- **Độ dài dòng** 66 ký tự cho thân bài, 38 cho câu khẳng định, tối đa 82. Tiêu đề cân dòng, thân bài
  dùng `text-wrap: pretty`.

### Màu

Bốn họ màu, mỗi họ một việc, không chồng lấn.

- **Mực navy** `--navy-900 #0A1F33` → tiêu đề, slide chương, đường kẻ 2 px phía trên mọi chân trang.
  Mực đậm nhất của hệ thống; không có gì là đen tuyệt đối.
- **Xanh thương hiệu** `--blue-600 #0093DD` (màu logo) → hành động chính, nền slide khẳng định, một
  đường nhấn cho mỗi nhóm thẻ. Hover `--blue-700`, nhấn `--blue-800`.
- **Xanh biển** `--cyan-500 #1899D6` → màu nhấn: đường kẻ 88 px dưới tiêu đề slide, nhãn dòng trên, nhãn
  trích dẫn điều khoản, nét sơ đồ, vòng focus.
- **Cam tín hiệu** `--signal-500 #E4610F` → màu cọc mốc khảo sát. Hoạt động của học viên, câu hỏi thảo
  luận, và duy nhất một ô trong chương trình học đánh dấu lớp đang ở đâu. Không dùng cho việc gì khác.
  Đây là màu ấm duy nhất trong giao diện và phải hiếm thì mới có tác dụng.
- **Giấy biểu đồ** `--paper-100 #F7F4EE` → nền tài liệu màu ấm. Nội dung sổ tay, khung ghi chú, slide
  hoạt động. Đây là chỗ duy nhất hệ thống không ngả lạnh, và là có chủ đích: ghi chú phải có cảm giác như
  giấy, đặt cạnh màu navy và xanh của phần bài giảng.
- **Màu trung tính** dải xám ngả lạnh cho thân bài, nét mảnh và vùng lõm.
- **Trạng thái** xanh lá, hổ phách, đỏ cho phù hợp / khuyến nghị / không phù hợp. Mỗi trạng thái dùng nền
  sắc `100` với chữ `700`, không bao giờ dùng sắc `500` làm chữ trên nền trắng.

Bốn nền slide được phép và chỉ bốn: trắng (nội dung), giấy (sổ tay, hoạt động), navy (bìa, ngăn
chương), xanh (khẳng định). Không bao giờ có quá hai màu nền trên một slide.

### Nền và hình ảnh

**Không gradient. Không texture. Không họa tiết. Không hình trang trí.** Nền là màu phẳng. Hệ thống không
có phong cách minh họa vì chưa được cung cấp, và cũng không tự tạo ra.

Ảnh, khi có, phải là **tư liệu dự án thật**: bến cảng, công trình nạo vét, tàu khảo sát, thiết bị quan
trắc hiện trường, xử lý tông lạnh và mang tính tư liệu, không lọc ấm, không chỉnh màu nặng, không duotone.
Trong khi chờ ảnh thật, mọi vị trí ảnh là một `ImagePlaceholder` ghi rõ ảnh cần có. Sơ đồ dựng từ `Card`,
`NumberTile` và `Icon` trên nền phẳng, không vẽ SVG riêng.

### Bố cục

- Khung slide **1280×720**, lề **72 px** hai bên, **56 px** trên, **44 px** dưới, lưới 12 cột với khoảng
  cách cột 32 px. Không đổi kích thước khung; muốn co giãn thì dùng `SlideFrame fit`.
- Thành phần cố định: khối tiêu đề ở trên, đường kẻ chân trang ở dưới. Cả hai ở đúng một vị trí trên mọi
  slide nội dung, để giảng viên nói "trang 72" là mọi người tìm thấy ngay.
- Bố cục nội dung chủ đạo là **thân bài + cột phải 330 px**: bài giảng bên trái, ghi chú cho giảng viên
  hoặc học viên bên phải. Đây là hình dạng giúp một slide đồng thời là một trang sổ tay.
- Khoảng cách theo **lưới 4 px**, từ `--sp-05` (2 px) đến `--sp-32` (128 px). Lề trong thẻ 20 px, thẻ
  thoáng 32 px.

### Bề mặt, viền, góc

- **Góc gần vuông.** 2 px cho nhãn và tag, 4 px cho nút, 6 px cho thẻ, 10–12 px chỉ cho thứ thật sự nổi
  lên trên trang. Hình viên thuốc chỉ dành cho `Badge`.
- **Viền tạo cấu trúc, bóng đổ thì không.** Thẻ mặc định là nét mảnh 1 px `--slate-200` trên nền trắng.
  Bóng đổ chỉ xuất hiện trên thứ thật sự nổi trên trang: lớp phủ, slide trong chế độ xem bộ slide.
- Ba độ dày đường kẻ, mỗi loại một việc: **nét mảnh 1 px** giữa các dòng và trong thẻ, **2 px navy** phía
  trên chân trang và dưới tiêu đề bảng, **3 px xanh biển** làm đường kẻ 88 px dưới tiêu đề slide hoặc mép
  trên của thẻ được nhấn. Vạch trái 4 px là dấu hiệu riêng của `Callout`.
- Không bóng đổ trong, trừ `--shadow-inset` cho vùng lõm khi nhấn. Không dùng thẻ chỉ có viền trái màu,
  ngoài `Callout`, nơi vạch trái là toàn bộ bản sắc của thành phần.

### Độ trong suốt và làm mờ

Gần như không bao giờ. Độ trong suốt chỉ dùng ở hai chỗ: `--line-inverse` (trắng 22%) cho đường kẻ trên
nền navy, và nền của nút biểu tượng `inverse` (trắng 10/20/28%). **Không làm mờ nền ở bất cứ đâu**: không
khung mờ, không hiệu ứng kính. Chữ luôn nằm trên màu đặc nên không cần gradient che; nếu nhãn phải đặt
trên ảnh, đặt nó trong một mảng nền đặc thay vì phủ gradient lên ảnh.

### Chuyển động

Phẳng và ngắn. `cubic-bezier(.2,0,0,1)` cho mọi chuyển động; 120 ms cho hover và focus, 180 ms cho hiện
nội dung và chuyển tab, 260 ms cho dựng slide hoặc mở khung. **Không nảy, không lò xo, không vượt đà,
không parallax, không chiếm quyền cuộn trang.** Chuyển slide là cắt thẳng hoặc mờ chéo 180 ms.

### Trạng thái tương tác

- **Hover** làm màu nền đậm thêm một bậc (`--blue-600` → `--blue-700`); nút dạng ghost và outline có thêm
  nền sắc nhạt. Không nâng lên, không đổi bóng, không phóng to.
- **Nhấn** đậm thêm hai bậc. **Không co lại**: nút của một tổ chức không bị bóp méo.
- **Focus** là một vòng duy nhất dùng giống nhau ở mọi nơi: viền trắng 2 px cộng viền xanh biển 2 px
  (`--ring-focus`), và biến thể đảo màu trên nền navy. Không bao giờ bỏ đi, không đổi màu theo thành phần.
- **Vô hiệu hóa** là `--slate-200` trên `--slate-400`, con trỏ `not-allowed`, không dùng mẹo giảm độ mờ.

---

## 5. Biểu tượng

**Lucide**, nét 1.75, luôn dùng qua thành phần `Icon`.

> **Ghi chú thay thế.** Chưa có bộ biểu tượng nào được cung cấp, và hình biểu tượng trong file PDF là tác
> phẩm của bên thứ ba nên cố ý không sao chép. Lucide là bộ thay thế: bộ biểu tượng nét 24 px giấy phép
> mở, nét kết thúc ngang và độ dày đồng đều, đứng cạnh Archivo rất hợp. Bộ này tải từ CDN
> (`unpkg.com/lucide@0.544.0`) chứ không đóng gói kèm, vì không có file biểu tượng cục bộ nào để sao chép.
> Nếu Portcoast có bộ biểu tượng riêng, đặt file SVG vào `assets/icons/` và sửa
> `components/src/media/Icon.jsx` để đọc từ đó.

Quy tắc:

- **Chỉ nét, không tô đặc.** Nét 1.75 ở cỡ 16–24 px, 1.5 ở cỡ 32 px trở lên.
- Biểu tượng kế thừa `currentColor`. Chỉ mang màu thương hiệu khi chữ bên cạnh cũng mang màu đó.
- **Biểu tượng không bao giờ là nội dung duy nhất của một phần tử.** Nó đứng cạnh một nhãn, hoặc là trang
  trí và được ẩn khỏi công nghệ hỗ trợ. Vì vậy `IconButton` bắt buộc có `label`.
- Cỡ: 13–14 px trong badge và tag, 17 px trong danh sách, 19–22 px trong khung chú thích và thẻ quy trình,
  26 px trong ô giữ chỗ ảnh. Không lớn hơn: biểu tượng lớn là việc của sơ đồ.
- **Không bao giờ dùng emoji.** Không dùng ký tự unicode thay biểu tượng (không dùng `→`, `✓`, `●` thay
  hình vẽ), ngoại trừ `×` trong `Tag` có thể xóa, nơi nó là ký tự chữ chứ không phải biểu tượng. Lưu đồ
  trong tài liệu in là ngoại lệ có quy định riêng (xem `report-style.md`).
- **Không dùng phông biểu tượng.** Không sprite sheet. Không vẽ SVG thủ công trong mã nguồn slide hay
  thành phần: nếu Lucide thiếu biểu tượng nào, hãy đề nghị bổ sung thay vì tự vẽ.

Các biểu tượng hay dùng trong tài liệu khóa học: `layers`, `workflow`, `users`, `file-check`,
`book-marked`, `book-open-text`, `clipboard-list`, `database`, `shield-check`, `git-compare`,
`package-check`, `messages-square`, `pencil-line`, `target`, `triangle-alert`.

---

## 6. Mục lục

### Thư mục gốc

| Đường dẫn | Là gì |
| --- | --- |
| `styles.css` | Stylesheet duy nhất mà nơi sử dụng liên kết tới. Chỉ có các dòng `@import`. |
| `README.md` | Tài liệu này. |
| `assets/notes/SKILL.from-standalone.md` | Phần đầu agent-skill, dùng trong Claude Code. |
| `thumbnail.html` | Ô giới thiệu của hệ thống ở trang chủ. |
| `archived/tokens/` | `fonts` · `colors` · `typography` · `spacing` · `border` · `elevation` · `motion` · `base` |
| `guidelines/` | 24 thẻ mẫu nền tảng (Thương hiệu, Màu, Chữ, Khoảng cách, Bề mặt, Chuyển động) |
| `assets/logo.svg` · `assets/logo-white.svg` | Logo Portcoast chính thức, vector, bản xanh thương hiệu và bản trắng. |
| `components/` | 20 thành phần giao diện chia bốn nhóm (bên dưới) và các mẫu tài liệu |
| `slides/` | Mười một bố cục slide khóa học cùng một bộ slide bấm xem thử; xem `slides/README.md` |
| `templates/course-deck/` | Bộ slide khởi đầu để dự án sao chép về |
| `tokens.json` | Toàn bộ token màu, kiểu chữ, khoảng cách, bo góc, bóng đổ và thang chữ, mỗi token có ghi chú cách dùng |
| `tokens.css` | Token dưới dạng CSS custom property và class kiểu chữ, sinh ra từ `tokens.json` |
| `components/bundle.css` | Những giá trị `tokens.json` không chứa được (vai trò chữ ghép, viền, vòng focus, chuyển động, khoảng cách theo ngữ nghĩa), lệnh import Google Fonts và style cơ bản cho phần tử |
| `components/bundle.js` | Bundle thành phần đã biên dịch, định nghĩa `window.PortcoastDesignSystem_a9d778` |
| `components/<Name>/` | `README.md`, `<Name>.d.ts` và `preview.html` của từng thành phần; toàn bộ props trong `components/index.d.ts` |
| `archived/` | Các file được để riêng khi hệ thống chuyển sang cấu trúc này: stylesheet gốc, bốn thẻ họ thành phần và hai trang logo |
| `doc-foundations.md` · `report-style.md` · `form-style.md` · `deck-style.md` | Nguyên tắc tài liệu: báo cáo, quy trình, biểu mẫu, bộ slide |
| `kitemark.md` | Logo Portcoast và dấu BSI Kitemark™: cách dùng, theo hướng dẫn BSI Mark of Trust 2025 |
| `components/TitleBlock` · `ReportPage` · `FormSheet` · `AssertionSlide` · `Kitemark` | Mẫu tài liệu (bản xem trước tĩnh, không xuất trong bundle) |

### Thành phần

**`components/src/core/`** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`

**`components/src/content/`** — `Callout`, `ClauseRef`, `NumberTile`, `Checklist`, `Definition`,
`StatBlock`, `PullQuote`, `DataTable`

**`components/src/media/`** — `Icon`, `Logo`, `ImagePlaceholder`

**`components/src/slides/`** — `SlideFrame`, `SlideHeader`, `SlideFooter`, `NotesPanel`

Mỗi thành phần có `components/src/<group>/<Name>.jsx`, `<Name>.d.ts` (hợp đồng props) và `README.md`
(là gì, khi nào dùng, và các quy tắc đi kèm), cùng một `preview.html` `@dsCard` thể hiện các trạng thái
của thành phần.

### Bổ sung có chủ đích

Không có nguồn nào định sẵn danh mục thành phần, nên bộ trên được soạn cho đúng bề mặt mà brief yêu cầu:
một bộ slide đào tạo dày thông tin. Hai thành phần cần nói rõ:

- **`Icon`**: lớp bọc quanh Lucide, để không slide hay thành phần nào nhúng SVG trực tiếp.
- **`ImagePlaceholder`**: một chỗ giữ có nhãn, để ảnh còn thiếu hiện rõ là chỗ cần lấp thay vì bị che
  bằng trang trí.

Các thành phần biểu mẫu trên màn hình (`Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Tabs`,
`Dialog`, `Toast`, `Tooltip`) **cố ý không có**: chưa có ứng dụng nào được cung cấp. Biểu mẫu giấy và
biểu mẫu Word đã có `form-style.md` và mẫu `FormSheet`. Khi có sản phẩm cần đến, hãy yêu cầu và chúng sẽ
được dựng theo sản phẩm đó thay vì đoán trước.
