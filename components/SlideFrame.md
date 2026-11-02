Khung slide; mọi slide bắt đầu từ đây để lề và nền giống hệt nhau trong toàn bộ bộ slide.

```jsx
<SlideFrame ground="white">
  <SlideHeader module="04" moduleTitle="BIM and collaborative working" title="What changes when teams share information?" />
  {/* body */}
  <SlideFooter page="18" />
</SlideFrame>
```

- Cố định 1280x720. Không bao giờ đổi kích thước khung; muốn co giãn thì dùng `fit`.
- Chỉ dùng `pad={false}` cho ảnh tràn lề hoặc bố cục chia đôi có một nửa chạy ra sát mép.
- Không quá hai slide navy hoặc xanh liền nhau; chúng đánh dấu chỗ chuyển, không chứa nội dung.
