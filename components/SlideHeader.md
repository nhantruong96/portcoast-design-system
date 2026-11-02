Khối tiêu đề slide; mọi slide nội dung đều có, để tiêu đề luôn nằm cùng một vị trí trong toàn bộ bộ slide.

```jsx
<SlideHeader module="12" moduleTitle="Level of information need"
  title="How much information is enough?"
  right={<ClauseRef standard="ISO 19650-1:2018" clause="Clause 11.2" />} />
```

- Tiêu đề là câu hỏi hoặc câu khẳng định đơn giản, viết hoa chữ đầu câu, dưới 12 từ.
- Luôn truyền cùng `ground` với `SlideFrame`.
- Dùng `rule={false}` trên slide ngăn chương, nơi con số lớn làm thay việc của đường kẻ.
