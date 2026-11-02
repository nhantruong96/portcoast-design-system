# Tài liệu — biểu mẫu

Biểu mẫu Portcoast được điền tay ở công trường cũng nhiều như điền trên máy tính, và được chuyên gia
đánh giá đọc lại sau nhiều tháng. Nó được thiết kế cho cả hai: các ô điền in sẵn, đồng thời gõ được
trực tiếp trong Word.

Điểm xuất phát là hướng dẫn biểu mẫu số của GOV.UK và U.S. Web Design System. Phần lớn áp dụng được cho
giấy; chương này nói cách áp dụng.

---

## 1. Nguyên tắc

1. **Chỉ hỏi những gì quy trình cần.** Mỗi trường ứng với một hồ sơ ở mục 08 của quy trình gốc, hoặc một
   quyết định trong lưu đồ của nó. Trường nào không ai đọc thì xóa.
2. **Câu hỏi xếp một cột.** Các trường xếp từ trên xuống trong cột thân. Hai trường chỉ chung một hàng khi
   được đọc cùng nhau (tên dự án và mã dự án; ngày và số phiếu).
3. **Độ rộng ô cho biết độ dài câu trả lời.** Mã dự án có ô ngắn, tên dự án có ô dài, ngày có tám ô chia
   ký tự. Ô dài cho câu trả lời ngắn sẽ dẫn đến trả lời sai.
4. **Nhãn đặt trên ô, không đặt trong ô.** Nhãn in hoa 6 pt, rồi đến khoảng điền. Trên giấy, nhãn nằm
   trong dòng sẽ bị viết đè; trên màn hình, nó biến mất khi bắt đầu gõ.
5. **Không dùng dấu sao.** Mọi trường trên biểu mẫu Portcoast đều bắt buộc, trừ khi nhãn kết thúc bằng
   "(không bắt buộc)".
6. **Gợi ý chỉ một dòng ngắn, không dấu chấm cuối,** đặt dưới nhãn; trên template dùng kiểu ô điền
   cyan, trên biểu mẫu đã ban hành dùng slate 600. Hướng dẫn dài hơn đặt trong cột lề cạnh phần đó.
7. **Câu hỏi trả lời được bằng một dấu tích.** Danh mục kiểm tra viết sao cho mỗi dòng nhận được *Đạt /
   Không / N/A*. "Bản vẽ có đủ khung tên theo PCC-IMS-QT-07" là được; "Nhận xét về bản vẽ" thì không.
8. **Câu trả lời "không" phải có chỗ đi tiếp.** Mỗi lựa chọn *Không* chỉ tới phần ghi lý do.

## 2. Cấu trúc

```
┌ cột lề (45 mm)┬ thân (129 mm) ──────────────────────────────────────────┐
│ BM            │ BIỂU MẪU · BAN HÀNH KÈM THEO PCC-IMS-QT-07              │
│ 02            │ Phiếu xem xét tài liệu                                  │
│               │ Câu mục đích                                            │
│               │ SỐ PHIẾU [_ _ _ _-_ _ _]      NGÀY LẬP [_ _/_ _/_ _ _ _]│
├───────────────┼─────────────────────────────────────────────────────────┤
│ A             │ TÊN DỰ ÁN                                               │
│ Thông tin     │ ___________________________________________________     │
│ chung         │ BỘ PHẬN __________________     MÃ DỰ ÁN __________      │
├───────────────┼─────────────────────────────────────────────────────────┤
│ B             │ Nº  NỘI DUNG KIỂM TRA          CĂN CỨ   ĐẠT KHÔNG N/A   │
│ gợi ý …       │ 01  …                          …         ☐   ☐    ☐     │
├───────────────┼─────────────────────────────────────────────────────────┤
│ C Kết luận    │ ☐ Chấp thuận  ☐ Có điều kiện  ☐ Không chấp thuận        │
│ D Xác nhận    │ chữ ký · chữ ký · chữ ký                                │
└───────────────┴─────────────────────────────────────────────────────────┘
  khung tên
```

- **Các phần đánh chữ cái** (`A`, `B`, `C`, `D`), Archivo ExtraBold 18 pt cyan 600 trong cột lề, tên phần
  và một dòng hướng dẫn ngay dưới chữ cái. Mỗi phần mở đầu bằng đường kẻ navy 1 pt toàn khổ.
- **Ô điền tay** là một đường đáy slate 400 0.75 pt dưới nhãn, cao 8 mm, đủ cho chữ viết tay cao 4 mm.
- **Ô chia ký tự** (mỗi ký tự một ô) cho mọi thứ có định dạng cố định: ngày, số phiếu, mã. Ô rộng
  4.5 mm, hở phía trên; ký tự phân cách (`/`, `-`) in sẵn giữa các nhóm.
- **Ô đánh dấu** là checkbox thật của Word (content control), bấm được trên màn hình và in ra thành ô
  vuông trống. Tiêu đề cột ở trên, ô căn giữa bên dưới.
- **Chữ ký** đặt trong các cột bằng nhau: nhãn vai trò, khoảng ký 12 mm, một đường kẻ, "Ký, ghi rõ họ
  tên", rồi ô chia ký tự cho ngày.

## 3. Một trang

Biểu mẫu dài sang trang thứ hai thì trang thứ hai sẽ bị thất lạc. Gói trong một mặt A4; nếu không được,
tách biểu mẫu hoặc chuyển phần nội dung tham khảo sang quy trình gốc. Khung tên ghi `Tờ 1 / 1`.

## 4. Mã

`PCC-IMS-BM-nn`, lần ban hành hai chữ số. Khung tên của biểu mẫu ghi quy trình gốc ở dòng nhãn ("Ban
hành kèm theo PCC-IMS-QT-07"). Số phiếu (`Số phiếu`) là từng lần sử dụng; mã là template. Giữ hai thứ
khác nhau rõ ràng về hình thức (ô chia ký tự so với chữ mono).
