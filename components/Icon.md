Hiển thị một biểu tượng Lucide trong ô kích thước cố định, tô màu theo `currentColor`; dùng cho mọi biểu tượng trong hệ thống, không bao giờ tự vẽ SVG.

```jsx
<Icon name="file-check" size={20} label="Approved" />
<span style={{ color: 'var(--text-signal)' }}><Icon name="users" size={24} /></span>
```

- `strokeWidth` 1.75 ở cỡ 16–24 px, 1.5 ở cỡ 32 px trở lên.
- Biểu tượng trang trí: bỏ `label` để được ẩn khỏi công nghệ hỗ trợ.
- Biểu tượng mang nghĩa nhờ nhãn bên cạnh, không tự mang nghĩa. Không bao giờ dùng biểu tượng làm nội dung duy nhất của một phần tử trên slide.
