Bảng tra cứu: đường kẻ navy 2 px dưới dòng tiêu đề, nét mảnh giữa các dòng, không kẻ dọc.

```jsx
<DataTable caption="Information container status codes"
  columns={[{ key: 'code', header: 'Code', mono: true, width: '90px' }, { key: 'name', header: 'Status' }]}
  rows={[{ code: 'S0', name: 'Work in progress' }, { code: 'S3', name: 'Shared for review and comment' }]} />
```

- Không bao giờ kẻ dọc. Các cột tách nhau bằng khoảng trống.
- Chỉ dùng `zebra` khi trên tám dòng; dùng `dense` trên slide.
- Trên slide, hiển thị tối đa sáu dòng và ghi chú bảng đầy đủ có bao nhiêu dòng.
