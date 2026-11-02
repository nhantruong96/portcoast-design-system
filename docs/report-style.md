# Tài liệu — báo cáo và quy trình

Báo cáo (báo cáo kỹ thuật, thuyết minh tính toán, báo cáo nghiên cứu, báo cáo đánh giá) và quy trình
được kiểm soát dùng chung một hệ trang: phần nền tảng trong `doc-foundations.md`. Khác nhau ở thứ tự
thông tin, và người đọc cần bao nhiêu thông tin trước khi có thể hành động.

---

## 1. Kết luận trước

Báo cáo Portcoast nêu kết luận ngay ở trang đầu tiên sau bìa. Bên giao thầu, kỹ sư công trường và
chuyên gia đánh giá mỗi người chỉ đọc một trang; trang đó phải đủ.

| Tài liệu | Trang nội dung đầu tiên | Sau đó |
| --- | --- | --- |
| Báo cáo kỹ thuật / nghiên cứu | **Tóm tắt**: câu hỏi, câu trả lời, các điều kiện kèm câu trả lời, quyết định cần đưa ra | Cơ sở, phương pháp, kết quả, thảo luận, phụ lục |
| Thuyết minh tính toán | **Bảng kết quả**: từng cấu kiện, kiểm tra quyết định, hệ số sử dụng, đạt / không đạt | Cơ sở thiết kế, tải trọng, mô hình, các kiểm tra |
| Báo cáo đánh giá / kiểm tra | **Bảng phát hiện**: phát hiện, điều khoản, mức độ (phù hợp / khuyến nghị / không phù hợp), người chịu trách nhiệm, hạn xử lý | Phạm vi, bằng chứng, chi tiết từng phát hiện |
| Quy trình | **Trang kiểm soát**: lịch sử ban hành, nơi nhận | Chín mục cố định bên dưới |

Viết phần tóm tắt sau cùng và giữ trong một trang. Nếu cần hai trang, báo cáo đang có hai kết luận: hãy
nói rõ kết luận nào quan trọng.

## 2. Trình tự trang

1. **Bìa.** Số loại tài liệu trong cột lề (`QT`, `TM`, `BC`), tên tài liệu, một câu mục đích, sau đó là
   hàng thông tin tài liệu và khối phê duyệt. Không dùng ảnh, trừ khi đó là ảnh của chính công trình.
2. **Trang kiểm soát.** Lịch sử ban hành (mọi lần ban hành, lần mới nhất ở cuối), danh sách nơi nhận, và
   (chỉ trong template) một ghi chú "cách đọc tài liệu này" trong cột lề.
3. **Nội dung**, các mục đánh số `01` – `nn`, mỗi mục mở đầu bằng đường kẻ mục và số mục.
4. **Phụ lục**, đánh chữ `A`, `B`, … trong cột lề, trình bày giống các mục.

## 3. Quy trình — chín mục cố định

Mọi quy trình IMS giữ cùng chín mục, để người đã đọc một quy trình thì đọc được tất cả. Mục nào không áp
dụng ghi "Không áp dụng", không xóa.

| # | Mục | Nội dung |
| --- | --- | --- |
| 01 | Mục đích | Hai hoặc ba câu: kết quả mà quy trình bảo đảm |
| 02 | Phạm vi áp dụng | Áp dụng cho ai, cho việc gì; không áp dụng cho gì |
| 03 | Tài liệu viện dẫn | Bảng booktabs: mã (chữ mono), tên, điều khoản |
| 04 | Thuật ngữ và chữ viết tắt | Thuật ngữ in đậm, giải thích, nguồn nếu trích dẫn |
| 05 | Trách nhiệm | Vị trí, trách nhiệm |
| 06 | Nội dung quy trình | 06.1 lưu đồ swimlane, toàn khổ; 06.2 mỗi bước một khối diễn giải |
| 07 | Theo dõi và kiểm soát | Chỉ số; rủi ro và biện pháp kiểm soát |
| 08 | Hồ sơ lưu | Hồ sơ, mã biểu mẫu, nơi lưu trên CDE, thời hạn lưu, người lưu |
| 09 | Biểu mẫu kèm theo | Mã và tên mọi biểu mẫu mà quy trình ban hành |

### Lưu đồ (06.1)

Một bảng **swimlane**, mỗi vị trí một làn, vì câu hỏi một quy trình phải trả lời nhiều nhất là "ai làm
bước này". Quy tắc:

- Mỗi vị trí một làn, ghi tên ở đầu làn; đường chia làn nét đứt slate 300.
- Mã bước `B1`, `B2` … chữ mono ở cột ngoài cùng bên trái; hồ sơ và biểu mẫu ở cột ngoài cùng bên phải.
- Bước công việc: ô nền cyan 100, viền cyan 500 1 pt. Điểm quyết định: ô nền signal 100, viền signal 500,
  viết dưới dạng câu hỏi. Bắt đầu và kết thúc: nền navy đặc, chữ trắng.
- Mũi tên là ký tự, không vẽ đường: `↓` trong cùng làn, `↘` / `←` khi sang làn khác, điều kiện rẽ nhánh
  viết cạnh mũi tên, chữ nghiêng 6.5 pt.
- Nếu lưu đồ cần hơn bốn làn hoặc hơn mười bước, đó là hai quy trình.

### Khối diễn giải bước (06.2)

Mã bước cỡ lớn trong cột lề (`B1`, Archivo ExtraBold, cyan 600), tên làn ngay dưới; trong cột thân là
tên bước, mô tả viết thành các thao tác ("Kiểm tra…", "Gửi…"), rồi một hàng gồm ba trường:
**Đầu vào · Thời hạn · Đầu ra**. Không đóng khung. Mã bước là điểm neo.

## 4. Cách viết

- Tên mục là câu khẳng định đơn giản, viết hoa chữ đầu câu: "Hồ sơ lưu", không phải "HỒ SƠ LƯU".
- Chỉ đánh số đoạn văn khi tài liệu sẽ được trích dẫn theo đoạn (hợp đồng, chỉ dẫn kỹ thuật). Còn lại,
  đánh số mục là đủ.
- Một hình, một thông điệp: chú thích nói hình cho thấy điều gì, không nói hình là gì ("Mô men đạt cực
  đại tại đài cọc ở TH2", không phải "Biểu đồ mô men uốn").
- Mọi hình và mọi con số lấy từ nguồn nào đều ghi nguồn ở dòng chú thích.
- Trích dẫn điều khoản đặt trong cột lề, chữ mono: `ISO 9001:2015 · 7.5.3`, cạnh đoạn văn đáp ứng điều
  khoản đó. Chuyên gia đánh giá đọc cột lề trước.

## 5. Tiêu đề chạy

Bên trái: mã tài liệu, chữ mono. Bên phải: tên mục hiện tại, tự động (trường `STYLEREF` theo
Heading 1). Cỡ 6.5 pt, slate 600, không đường kẻ. Trang bìa không có tiêu đề chạy.
