# Button

Nút hành động của hệ thống; mỗi màn hình chỉ một nút `primary`.

```jsx
<Button iconRight="arrow-right">Tải hồ sơ năng lực</Button>
<Button variant="secondary">Liên hệ</Button>
```

- `primary` nền `action-primary` (xanh dương brochure), `secondary` nền chàm logo `action-secondary`, `outline` và `ghost` cho hành động phụ, `inverse` trắng trên nền chàm.
- `signal` (đỏ `action-signal`) chỉ cho cảnh báo hiện trường hoặc hành động không thể hoàn tác.
- Nhãn viết hoa chữ đầu câu, là động từ: "Tải hồ sơ", không "OK".
- Người dùng cung cấp: `children` (nhãn), `onClick`, tùy chọn `iconLeft`/`iconRight` (tên Lucide).
