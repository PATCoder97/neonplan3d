# Asset provenance

NeonPlan 3D dùng giấy phép MIT theo [LICENSE](../LICENSE). Danh sách này tách rõ asset nằm trong repository khỏi ảnh thương mại chỉ dùng để đối chiếu.

| Phạm vi | Nguồn | Quyền sử dụng |
|---|---|---|
| Toàn bộ model nội thất built-in và symbol 2D | Hình học/đường SVG thủ tục trong `frontend/src`; do dự án tự viết | MIT cùng repository; không dùng mesh hoặc texture từ pack thương mại. |
| `custom_components/neonplan3d/brand/icon*.png` | Biểu tượng dự án NeonPlan 3D trong lịch sử repository gốc | Phân phối theo MIT và thông báo bản quyền được giữ trong `LICENSE`. |
| `frontend/assets/solar-pro.jpg` và bản build tương ứng | Ảnh chụp giao diện do script/demo của chính dự án tạo | MIT cùng repository. |
| `docs/images/*` | Ảnh chụp giao diện NeonPlan 3D do maintainers tạo từ preview cục bộ | MIT cùng repository; không chứa ảnh gallery thương mại. |
| Font Bricolage Grotesque và Figtree | Gói `@fontsource-variable/*` khai báo trong `frontend/package.json` | SIL Open Font License 1.1 theo metadata của gói npm; bundle giữ thông tin giấy phép dependency. |
| Ảnh gallery tại `mastershort.de` | Chỉ xem tạm để nhận diện loại đồ vật; URL ghi trong `furniture-gallery-audit-vi.md` | Không sao chép vào repository, không trace/đo tỷ lệ, không coi là asset MIT. |

Hiện repository không chứa `.glb`, `.gltf`, `.obj`, `.mtl` hoặc texture nội thất bên thứ ba. Khi thêm asset nhị phân mới, contributor phải ghi tên tác giả, URL nguồn, giấy phép, thay đổi đã thực hiện và nơi asset được dùng trước khi merge.
