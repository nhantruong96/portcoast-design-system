Logo Portcoast; dùng thành phần này thay vì nhúng SVG trực tiếp, để màu và kích thước tối thiểu luôn đúng.

```jsx
<Logo size="md" />
<Logo size="sm" tone="inverse" />
```

- Không bao giờ đặt chiều rộng dưới 96 px (`size="sm"`).
- Giữ vùng trống bằng chiều cao chữ hoa ở cả bốn phía.
- `tone="inverse"` trên nền navy hoặc xanh; `tone="brand"` trên nền trắng và giấy. Không đặt logo màu thương hiệu lên nền xanh.
- `src` phải trỏ tới `assets/logo.svg` (bản trắng: `assets/logo-white.svg`) tính từ vị trí của trang, ví dụ `"../assets/logo.svg"`. Quy tắc đầy đủ ở `kitemark.md`.
