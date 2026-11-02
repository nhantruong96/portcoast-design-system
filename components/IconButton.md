Nút chỉ có biểu tượng, dùng cho điều hướng bộ slide và thanh công cụ; bắt buộc có `label`.

```jsx
<IconButton icon="chevron-right" label="Next slide" variant="outline" />
<IconButton icon="printer" label="Print workbook" />
```

- Dùng `variant="inverse"` trên khung điều khiển slide nền navy.
- `sm` (30 px) chỉ cho thanh công cụ dày đặc; mặc định là `md` (38 px). Không bao giờ nhỏ hơn 30 px.
- Không dùng IconButton cho thao tác chính mà học viên phải tìm thấy; thao tác đó cần một `Button` có nhãn.
