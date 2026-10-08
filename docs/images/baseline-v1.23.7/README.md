# Visual baseline v1.23.7

Bộ ảnh hồi quy tạo ngày 09/10/2026 bằng `frontend/screenshot.mjs`, viewport 1280×800:

- `editor.png`: mặt bằng 2D trong editor.
- `view-house.png`: toàn nhà ở chế độ Neon.
- `view-day-house.png`: cùng cảnh ở chế độ Day.

Lệnh tái tạo (cần Chrome/Chromium):

```bash
SHOTS=editor,view-house,view-day-house npm --prefix frontend run screenshot -- ../docs/images/baseline-v1.23.7
```

Preview cục bộ tham chiếu hai tài nguyên pack riêng không nằm trong repository nên console có thể báo hai HTTP 404. Ba ảnh baseline vẫn phải hiển thị đầy đủ kết cấu, nội thất built-in, ánh sáng và UI; lỗi renderer/typecheck khác vẫn làm script thất bại.
