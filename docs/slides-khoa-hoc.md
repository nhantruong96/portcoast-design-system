# Bộ slide khóa học — ISO 19650 / BIM

Mười một bố cục cho một khóa đào tạo hai ngày của Portcoast. Mỗi bố cục là một file JSX xuất ra một
thành phần; mỗi bố cục có một thẻ `.html` tương ứng để xem ở đúng kích thước 1280x720.

`index.html` là bộ slide bấm xem thử: dùng phím mũi tên hoặc nút ở góc trên bên phải, thanh ở dưới cùng
nhảy tới bất kỳ bố cục nào.

| Bố cục | File | Nền | Dùng khi |
| --- | --- | --- | --- |
| Bìa | `TitleSlide.jsx` | navy | Mở đầu khóa học. Không có chân trang. |
| Chương trình | `AgendaSlide.jsx` | trắng | Chương trình trong ngày, tối đa chín ô. |
| Mục tiêu học tập | `ObjectivesSlide.jsx` | trắng | Mục tiêu kèm ghi chú cho học viên. |
| Ngăn chương | `SectionDividerSlide.jsx` | navy | Đánh dấu ranh giới học phần. |
| Nội dung kèm ghi chú | `ContentNotesSlide.jsx` | trắng | Bố cục chủ lực. Thân bài cộng cột ghi chú giảng viên. |
| Định nghĩa | `DefinitionSlide.jsx` | giấy | Hai hoặc ba thuật ngữ kèm nguồn. |
| Quy trình | `ProcessSlide.jsx` | trắng | Quy trình nhiều giai đoạn dạng lưới thẻ. |
| Hoạt động học viên | `ActivitySlide.jsx` | giấy | Đề bài hoạt động và kết quả cần mang về. |
| Bảng tra cứu | `TableSlide.jsx` | trắng | Mã, vai trò, lịch biểu. |
| Khẳng định | `StatementSlide.jsx` | xanh | Một câu, một slide. |
| Tổng kết ngày | `SummarySlide.jsx` | trắng | Tóm tắt và chuẩn bị cho ngày hôm sau. |

## Quy tắc chung cho cả bộ slide

- Mọi slide nội dung: `SlideHeader` ở trên, `SlideFooter` ở dưới, số trang khớp với sổ tay học viên.
- Tần suất nền giảm dần theo thứ tự trắng → giấy → navy → xanh. Không bao giờ hai slide navy liền nhau,
  trừ slide bìa nối tiếp một slide ngăn chương.
- Màu cam tín hiệu chỉ xuất hiện trên slide hoạt động và trên đúng một ô chương trình đánh dấu lớp đang
  ở đâu.
- Chữ thân bài không nhỏ hơn 15 px ở khung 1280x720 (22 px ở 1920x1080).
