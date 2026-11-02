# Tài liệu — nền tảng

Cách Portcoast đặt thông tin lên trang giấy: báo cáo, quy trình, biểu mẫu và bộ slide. Chương này đặt
ra các quy tắc chung cho mọi loại tài liệu. Ba chương tiếp theo (`report-style.md`, `form-style.md`,
`deck-style.md`) bổ sung phần riêng của từng loại.

---

## 1. Ý tưởng: tờ bản vẽ kỹ thuật

Portcoast vốn đã có một khổ trang mà kỹ sư nào trong công ty cũng đọc mà không cần nghĩ: **tờ bản vẽ**.
Một khung, một khung tên ở góc, một bảng sửa đổi, một số tờ, một tỷ lệ. Nó hiệu quả vì đặt thông tin
kiểm soát vào một chỗ cố định và dành phần còn lại của tờ giấy cho nội dung công việc.

Tài liệu Portcoast mượn đúng kỷ luật đó thay cho một template văn phòng chung chung:

| Trên tờ bản vẽ | Trên tài liệu Portcoast |
| --- | --- |
| Khung tên | Một dải ở chân mỗi trang ghi chủ sở hữu, loại tài liệu, tên, mã, lần ban hành, ngày, tờ *n / N*. Không ghi ở đâu khác. |
| Bảng sửa đổi | Toàn bộ lịch sử ban hành ở trang kiểm soát; khung tên chỉ ghi lần ban hành hiện hành. |
| Số tờ | `Tờ 3 / 9`, chữ mono, trong khung tên. Không bao giờ là "Trang 3" căn giữa. |
| Cột ghi chú | **Cột lề**: một phần tư bên trái trang chứa số mục, trích dẫn điều khoản và ghi chú ngắn. Thân bài không bao giờ lấn vào. |
| Nét vẽ có ý nghĩa | Ba loại đường kẻ, mỗi loại một việc (mục 5). Không có đường kẻ trang trí. |

Đây là dấu hiệu nhận biết của hệ thống. Một trang Portcoast phải nhận ra được từ đầu kia căn phòng nhờ
cột lề và khung tên, chứ không phải nhờ logo hay một dải màu.

### Thay thế cho cái gì

Kiểu "template do AI làm" mà hệ thống này tránh, và cách làm thay vào:

| Tránh | Vì | Thay bằng |
| --- | --- | --- |
| Bảng header đóng khung có logo / tên / mã trên mọi trang | Lặp lại thông tin kiểm soát, chiếm 30 mm mỗi trang, trông như biểu mẫu chứ không phải tài liệu | Khung tên ở chân trang; một dòng tiêu đề chạy ở đầu trang |
| Bảng kẻ ô toàn bộ, dòng tiêu đề tô nền | Đường lưới tranh chỗ với số liệu | Bảng kiểu booktabs: ba đường kẻ ngang, không kẻ dọc, không tô nền (mục 5) |
| Khung chú thích tô màu chứa hướng dẫn | Lời dặn người soạn bị in ra cùng tài liệu | Comment Word cho người soạn; ghi chú cột lề cho người đọc |
| `[Chỗ điền trong ngoặc]` chữ nghiêng xám | In ra rồi thì không phân biệt được với nội dung thật; dấu ngoặc còn sót sau khi sửa | Kiểu ô điền: chữ xanh có gạch chân chấm (mục 6) |
| Tiêu đề căn giữa, mọi thứ căn giữa | Trục giữa yếu; không có gì thẳng hàng với gì | Mọi thứ treo theo hai mép trái: mép trang và mép cột lề |
| Tiêu đề tiếng Việt viết hoa toàn bộ (MỤC ĐÍCH) | Dấu thanh chồng nhau, mất hình dáng chữ, trang trông như đang hét | Viết hoa chữ đầu câu, cỡ lớn; chữ in hoa chỉ dùng cho nhãn 7 pt |
| Arial / Times New Roman | Phông mặc định là quyết định không ai đưa ra | Archivo và IBM Plex Mono, nhúng sẵn trong file |

---

## 2. Lưới — A4 khổ đứng

| Thông số | Giá trị | Lý do |
| --- | --- | --- |
| Khổ giấy | A4, 210 × 297 mm | Khổ giấy theo TCVN và ISO; không dùng US Letter |
| Lề hai bên | 18 mm | Đủ cho lỗ đóng gáy; hẹp hơn mặc định của Word để có chỗ cho cột lề |
| Lề trên | 19 mm, tiêu đề chạy ở 10 mm | |
| Lề dưới | 35 mm (36 mm với biểu mẫu), khung tên ở 7 mm | Khung tên nằm trong lề dưới |
| Cột | 12 cột trên 174 mm | |
| Cột lề | 3 cột = 45 mm | Số mục, mã bước, ghi chú điều khoản |
| Thân bài | 9 cột = 129 mm, khoảng 75 ký tự ở cỡ 9.5 pt | Nằm trong độ dài dòng 66–82 ký tự hệ thống đã đặt |

**Chỉ hai mép trái.** Mọi thứ thẳng hàng theo mép trang (nội dung cột lề, hình toàn khổ, khung tên) hoặc
theo mép cột lề (thân bài, bảng trong thân, tiêu đề). Thụt lề thứ ba là sai.

**Toàn khổ phải có lý do.** Chỉ ba thứ được vượt qua cột lề: lưu đồ quy trình, hình cần toàn bộ chiều
rộng, và khung tên. Bảng luôn nằm trong cột thân.

---

## 3. Chữ — thang chữ in

Archivo cho văn bản, Archivo ExtraBold (800) cho chữ lớn, IBM Plex Mono cho mọi thứ máy có thể đọc lại:
mã tài liệu, số điều khoản, số lần ban hành, số tờ, tên file.

| Vai trò | Phông | Cỡ / khoảng dòng | Ghi chú |
| --- | --- | --- | --- |
| Số lớn ở bìa | Archivo ExtraBold | 44 / 43 pt | Loại tài liệu: `QT`, `BM`, `TM`. Màu cyan 600. |
| Tên tài liệu ở bìa | Archivo ExtraBold | 28 / 32 pt | Tối đa ba dòng. Viết hoa chữ đầu câu. |
| H1 + số mục | Archivo ExtraBold | 15 pt | Số `01` trong cột lề, cyan 600; tên mục ở mép cột lề; đường kẻ navy 1 pt phía trên |
| H2 + số mục | Archivo Bold · Plex Mono | 10.5 pt · 8.5 pt | `06.1` trong cột lề, chữ mono, slate 600 |
| Thân bài | Archivo | 9.5 / 13.8 pt | Mực navy 900. Không bao giờ đen tuyệt đối. |
| Chữ trong bảng | Archivo | 9 pt | Mã dùng Plex Mono 8 pt |
| Nhãn | Archivo Bold, in hoa | 6–7 pt, giãn chữ +16 | Chỗ duy nhất có chữ in hoa trong tài liệu. Slate 600. |
| Ghi chú / chú thích hình | Archivo | 7–8.5 pt | Slate 600 |
| Mã | IBM Plex Mono | 7–8.5 pt | `PCC-IMS-QT-07`, `ISO 9001:2015 · 7.5.3`, `Rev 02` |

**Phông đi cùng file.** Template nhúng sẵn Archivo (Regular, Bold, Italic, Bold Italic), Archivo
ExtraBold và IBM Plex Mono, nên tài liệu mở trên máy tính ở công trường trông giống hệt ở văn phòng. Đừng
"sửa" template bằng cách đổi sang Arial; chỉ tắt nhúng phông khi dung lượng file thật sự là vấn đề (bộ
phông nhúng thêm khoảng 0.9 MB).

Tiếng Việt dàn chữ dài hơn: chừa thêm 10–15 % chỗ so với bản nháp tiếng Anh, và kiểm tra mọi tiêu đề
xem dấu thanh có bị cắt do khoảng dòng quá chặt không.

---

## 4. Màu khi in

Bản in dùng cùng token với màn hình, nhưng mỗi màu có việc chặt chẽ hơn.

| Token | Hex | Việc trên giấy |
| --- | --- | --- |
| `--navy-900` | `#0A1F33` | Toàn bộ chữ, toàn bộ đường kẻ cấu trúc |
| `--cyan-600` | `#1284BE` | Số mục, mã bước, số loại tài liệu ở bìa. Không dùng cho việc gì khác. |
| `--cyan-700` / `--cyan-500` | `#0B6C9C` / `#1899D6` | Chữ ô điền và gạch chân chấm của nó (chỉ có trong template, không còn trong tài liệu đã ban hành) |
| `--slate-600` (`text-muted`) | `#55636F` | Nhãn, chú thích, tiêu đề chạy. Không dùng `slate-500` cho chữ: chỉ đạt 3.7–4.2:1. |
| `--slate-200` / `--slate-300` | `#DDE2E6` / `#C0C8CE` | Nét mảnh giữa các dòng / vạch chia trong khung tên |
| `--signal-500` / `--signal-100` | `#E4610F` / `#FCE9DC` | Điểm quyết định trong lưu đồ; điểm không phù hợp. Hiếm, theo quy định. |
| `--cyan-100` | `#E3F2FA` | Ô bước công việc trong lưu đồ, chỗ duy nhất trong tài liệu có vùng tô màu |

Trang phải đọc được khi in máy đen trắng văn phòng: mọi khác biệt thể hiện bằng màu cũng phải thể hiện
bằng độ đậm, vị trí hoặc nhãn.

---

## 5. Đường kẻ và bảng

Ba độ dày, mỗi loại một việc:

| Đường kẻ | Độ dày | Việc |
| --- | --- | --- |
| Đường kẻ mục | 1 pt navy | Phía trên mỗi H1, toàn khổ; trên và dưới mỗi bảng; phía trên khung tên |
| Đường kẻ tiêu đề bảng | 0.5 pt navy | Dưới dòng tiêu đề của bảng |
| Nét mảnh | 0.5 pt slate 200 | Giữa các dòng của bảng; bên trong khung tên |

**Bảng kiểu booktabs.** Một đường kẻ trên, một đường dưới dòng tiêu đề, một đường dưới cùng, nét mảnh
giữa các dòng nếu dòng dài. Không kẻ dọc. Không tô nền dòng tiêu đề. Tiêu đề cột là nhãn in hoa 6–7 pt,
không phải chữ đậm. Số căn phải, mã dùng chữ mono, chữ căn trái. Bảng nào cần kẻ dọc mới đọc được là
bảng có quá nhiều cột: hãy tách ra.

Ngoại lệ duy nhất là **khung tên**, giữ các vạch chia dọc mảnh vì nó là tập hợp các trường thông tin,
không phải một bảng.

---

## 6. Ô điền và hướng dẫn

Template nói với hai người. Hãy tách họ ra.

- **Người soạn** (người điền template) nhận **comment Word**, gắn vào đúng chỗ cần giải thích. Comment
  không bao giờ được in và bị xóa khi ban hành.
- **Người đọc** tài liệu đã ban hành nhận **ghi chú cột lề**: trích dẫn điều khoản và một dòng bối cảnh,
  chữ slate 7 pt, đặt cạnh đoạn văn liên quan.
- **Ô điền** dùng chữ cyan 700 có gạch chân chấm cyan 500, viết dưới dạng một ví dụ thật ("Kiểm soát
  thông tin dạng văn bản"), không bao giờ là lời dặn trong ngoặc ("[Tên quy trình]"). Một ví dụ cho thấy
  cùng lúc độ dài, giọng văn và hình thức. Điền xong, người soạn xóa định dạng (Ctrl + Space) và màu xanh
  biến mất. Tài liệu đã ban hành mà còn sót chữ xanh là chưa hoàn thành.

---

## 7. Khung tên — các trường

Theo logic của ISO 7200 (các trường dữ liệu trong khung tên và đầu tài liệu): mỗi trường có tên cố định,
vị trí cố định và định dạng cố định.

| Trường | Định dạng | Ví dụ |
| --- | --- | --- |
| Chủ sở hữu | Logo Portcoast | — |
| Loại + tên tài liệu | Nhãn + Archivo Bold 7.5 pt | `QUY TRÌNH` / Kiểm soát thông tin dạng văn bản |
| Mã | Plex Mono | `PCC-IMS-QT-07` |
| Lần ban hành | Plex Mono, hai chữ số | `02` |
| Ngày hiệu lực | dd/mm/yyyy | `15/10/2026` |
| Tờ | Plex Mono, *n / N*, tự động | `3 / 9` |

Dưới khung tên là một dòng 5.5 pt: tên hệ thống quản lý bên trái, câu "bản in không được kiểm soát" bên
phải. Lề dưới không chứa gì khác.

---

## 8. Tài liệu tham khảo

Các quy tắc trên lấy lập trường từ những nguồn sau; hãy đọc khi gặp trường hợp chương này chưa nói tới.

- ISO 7200:2004, *Technical product documentation — Data fields in title blocks and document headers*:
  mô hình cho các trường kiểm soát cố định, có tên.
- Josef Müller-Brockmann, *Grid Systems in Graphic Design*: lưới module, thẳng hàng theo ít mép.
- Edward Tufte, *Beautiful Evidence* và phong cách tài liệu Tufte: ghi chú bên lề rộng thay cho chú thích
  cuối trang hay khung hộp.
- GOV.UK Design System, *Question pages* và *Help text*: mỗi lần một câu hỏi, gợi ý ngắn, không dấu sao.
  Áp dụng cho biểu mẫu giấy trong `form-style.md`.
- U.S. Web Design System, *Form*: biểu mẫu một cột, nhóm trường liên quan, ghi "không bắt buộc" bằng chữ.
- Michael Alley, *The Craft of Scientific Presentations*: slide khẳng định – bằng chứng. Áp dụng trong
  `deck-style.md`.
- Financial Times, *Visual Vocabulary*: chọn biểu đồ theo quan hệ cần thể hiện (độ lệch, tương quan, xếp
  hạng, phân bố, thay đổi theo thời gian, thành phần trong tổng thể, độ lớn, không gian, dòng chảy).
- Booktabs (Simon Fear, LaTeX): bảng ba đường kẻ.
