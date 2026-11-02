# ProjectSheet

Một dự án tham chiếu như trong brochure: tên dự án in hoa, bảng song ngữ kẻ ngang (khách hàng, hạng mục, khối lượng) và ảnh bo hai góc chéo.

```jsx
<ProjectSheet name="Duyen Hai 2 Thermal Power" rows={[
  { label: 'Khách hàng', labelEn: 'Client', value: 'China Railway No.1' },
  { label: 'Hạng mục', labelEn: 'Scope of work', value: 'Cung cấp & ép cọc D500 - D1000' },
  { label: 'Khối lượng', labelEn: 'Quantity', value: '350.000 md' } ]} image={url} />
```

- Xếp chồng nhiều dự án, `imageSide` xen kẽ phải/trái.
- Người dùng cung cấp ảnh thật; chưa có ảnh thì truyền `ImagePlaceholder`.
- Số liệu lấy đúng hồ sơ năng lực; dấu chấm ngăn hàng nghìn kiểu Việt Nam.
