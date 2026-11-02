# Tài liệu — bộ slide

Các bố cục slide khóa học trong `slides/` dành cho đào tạo, nơi slide đồng thời là trang sổ tay. Chương
này nói về các bộ slide khác của Portcoast: báo cáo tiến độ dự án, xem xét thiết kế, đề xuất, báo cáo
quản lý. Chúng được xem trên màn hình hoặc trong cuộc họp, và được đánh giá bằng việc có ra được quyết
định hay không.

---

## 1. Tiêu đề chính là slide

Mỗi slide đưa ra **một khẳng định**, viết thành một câu đầy đủ ở vị trí tiêu đề: cấu trúc khẳng định –
bằng chứng (assertion–evidence, Michael Alley). Phần thân là bằng chứng cho khẳng định đó: biểu đồ, bản
vẽ, ảnh công trường, bảng. Không phải danh sách đề mục.

| Thay vì | Hãy viết |
| --- | --- |
| Tiến độ | Cọc đã đóng 412 / 540 tim; chậm 9 ngày do thiếu sà lan |
| Kết quả tính toán | Dầm D2 vượt 7 % ở TH2; đề xuất tăng cốt thép, không đổi tiết diện |
| Rủi ro | Hai rủi ro cần quyết định trong tháng này |
| Hỏi đáp / Cảm ơn | (không có — slide cuối là quyết định cần đưa ra) |

Quy tắc:

- Tiêu đề: một câu, căn trái, tối đa hai dòng ở cỡ 30 pt. Nếu cần ba dòng, tách slide.
- Không dùng nhãn chung chung làm tiêu đề ("Giới thiệu", "Kết luận", "Phương pháp").
- **Phép thử đọc tiêu đề (ghost deck):** chỉ đọc lần lượt các tiêu đề. Chúng phải kể được toàn bộ câu
  chuyện. Nếu chưa, sửa tiêu đề trước khi thiết kế bất cứ thứ gì.
- Khi trình bày, diễn đạt lại tiêu đề; không đọc nguyên văn slide.
- Không có slide kết "Cảm ơn / Hỏi đáp". Kết thúc bằng quyết định hoặc việc cần làm tiếp, tên và liên
  hệ của người trình bày đặt ở chân slide đó.

## 2. Bằng chứng

- **Chọn biểu đồ theo quan hệ cần thể hiện** (FT Visual Vocabulary): lệch so với mốc → cột phân kỳ; thay
  đổi theo thời gian → đường; xếp hạng → cột sắp thứ tự; thành phần trong tổng thể → cột chồng (không
  dùng biểu đồ tròn khi quá ba phần); không gian → bản vẽ hoặc bản đồ; dòng chảy → swimlane hoặc Sankey.
- **Ghi nhãn trực tiếp lên dữ liệu, không dùng chú giải.** Ghi tên mỗi chuỗi ở cuối đường. Bỏ chú giải.
- **Một màu nhấn.** Chuỗi số liệu mà tiêu đề nói tới dùng cyan 600; mọi thứ khác slate 300. Cam tín hiệu
  chỉ đánh dấu thứ bị chậm, vượt hoặc không phù hợp.
- **Mọi biểu đồ có dòng nguồn** cỡ 11 pt, slate 600, ngay dưới: dữ liệu, ngày, người lập.
- Bản vẽ và ảnh công trường cũng là bằng chứng. Cắt đúng phần tiêu đề nói tới và đánh dấu nó.

## 3. Bố cục — 16:9

Dùng khung 1280 × 720 của bộ slide khóa học (lề 72 / 56 / 44 px, 12 cột), mang theo các dấu hiệu của
hệ thống tài liệu:

- **Cột lề** bên trái: 3 trong 12 cột, chứa số mục của slide (`03`) màu cyan 600 ở trên cùng và, khi cần,
  một ghi chú 13 px slate: tương đương ghi chú bên lề của tài liệu.
- **Tiêu đề** ở mép cột lề, Archivo 700, 30 px / 1.16, navy 900, tối đa 24 từ.
- **Bằng chứng** chiếm 9 cột thân bên dưới tiêu đề.
- **Dải chân slide**, khung tên của bộ slide: mã dự án chữ mono, tên bộ slide, ngày, số slide `n / N`,
  trên đường kẻ navy 1 px. Cùng một vị trí trên mọi slide.

## 4. Các loại slide

| Loại | Khi nào | Nền |
| --- | --- | --- |
| Khẳng định + biểu đồ | Phần lớn các slide | Trắng |
| Khẳng định + bản vẽ / ảnh | Xem xét thiết kế, tiến độ công trường | Trắng, ảnh tràn hết cột thân |
| Khẳng định + bảng | So sánh phương án; tối đa sáu dòng, kiểu booktabs | Trắng |
| Quyết định | Điều cần xin: các phương án, khuyến nghị, cần gì trước khi nào | Giấy `#F7F4EE` |
| Ngăn chương | Chỉ dùng trong bộ slide trên 20 slide | Navy 900 |

## 5. Trước khi gửi

- Chạy phép thử đọc tiêu đề.
- Mọi con số trên slide khớp với báo cáo gốc; bộ slide không bao giờ đưa ra con số mà báo cáo không có.
- Xuất PDF; bản PDF là bản được chuyển tiếp.
