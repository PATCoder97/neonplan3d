# Roadmap tích hợp Neon Honeycomb Menu

Roadmap này lấy cảm hứng từ [Honeycomb Menu for Home Assistant](https://github.com/Sian-Lee-SA/honeycomb-menu): một menu nổi gồm tối đa sáu nút lục giác bao quanh vùng điều khiển trung tâm, có thể mở bằng tap, giữ lâu hoặc double tap và có XY pad tùy chọn. Phiên bản trong NeonPlan 3D sẽ được thiết kế lại thành component native, đồng bộ hoàn toàn với phong cách neon và các luồng điều khiển hiện có của dự án.

Tên làm việc: **Neon Honeycomb**.

## Quyết định về giấy phép và kiến trúc

Honeycomb Menu gốc dùng **GPLv3**, còn NeonPlan 3D dùng **MIT**. Vì vậy:

- Không sao chép, sửa trực tiếp hoặc bundle mã JavaScript/CSS từ repository gốc.
- Không thêm `honeycomb-menu.js`, `custom:button-card`, lodash hoặc Lit phiên bản khác làm dependency runtime.
- Chỉ tham khảo hành vi được mô tả công khai: bố cục sáu nút, trạng thái active, tự đóng, template và XY pad.
- Component mới phải được viết từ đầu bằng Lit, token giao diện, action dispatcher và kiểu dữ liệu sẵn có của NeonPlan 3D.
- Ghi attribution trong tài liệu vì ý tưởng tương tác đến từ dự án Honeycomb Menu, nhưng mã triển khai mới vẫn thuộc cây mã MIT của NeonPlan 3D.

Cách này cũng loại bỏ hạn chế của bản tham khảo: đang được tác giả mô tả là alpha, chủ yếu kiểm thử trên Chrome và phụ thuộc `custom:button-card`.

## Mục tiêu sản phẩm

- Menu thao tác nhanh nhìn như một phần tự nhiên của mô hình neon 3D, không giống thẻ Lovelace chèn vào.
- Hoạt động trong panel trực tiếp và `custom:neonplan3d-card`, không cần cài resource ngoài.
- Tái sử dụng toàn bộ logic service, xác nhận thao tác nguy hiểm, quyền admin và trạng thái entity hiện có.
- Dùng tốt bằng chuột, cảm ứng, bàn phím và trên tablet cấu hình thấp.
- Một component phục vụ menu thiết bị, menu trung tâm và về sau cả menu ngữ cảnh editor.
- Cho phép tùy biến có kiểu dữ liệu rõ ràng, không chạy chuỗi JavaScript tùy ý như cơ chế `HCJS` của bản tham khảo.

## Phạm vi phiên bản đầu

### Có trong phạm vi

- Menu lục giác gồm nút trung tâm và tối đa sáu nút hành động xung quanh.
- Mở từ giữ lâu thiết bị 3D; rèm và camera vẫn có thể mở bằng tap như hiện nay.
- Menu dựng tự động theo domain, supported features và trạng thái entity.
- Trạng thái active, disabled, loading, unavailable và yêu cầu xác nhận.
- Thanh/XY pad trung tâm cho giá trị liên tục như độ sáng, vị trí rèm, âm lượng và nhiệt độ.
- Định vị theo điểm chạm, tự tránh mép viewport và không che quá nhiều mô hình.
- Chế độ Neon, Blueprint, Day, Low/Tablet và `prefers-reduced-motion`.
- API action dùng lại `navigate`, `more_info`, `service` và `fire_dom_event`.

### Chưa làm ở phiên bản đầu

- Không biến Neon Honeycomb thành resource toàn cục áp dụng cho mọi Lovelace card.
- Không hỗ trợ thực thi JavaScript từ YAML hoặc eval template.
- Không nhúng card tùy ý vào từng ô lục giác.
- Không thay room panel, hộp thoại more-info hoặc các bảng cấu hình dài.

## Ngôn ngữ thiết kế Neon

### Hình thức

- Ô lục giác nền kính xanh đen, viền cyan mảnh và glow vừa phải; không dùng nền trắng của `ha-card`.
- Nút active dùng màu thực của entity nếu có, nếu không dùng `--fp3d-accent`.
- Nút trung tâm lớn hơn, hiển thị icon, trạng thái ngắn và giá trị chính như `63 %`, `Đang phát` hoặc `24 °C`.
- Sáu nút ngoài dùng icon Material Design và nhãn ngắn; nhãn đầy đủ xuất hiện khi focus/hover hoặc qua `aria-label`.
- Có một đường neo mảnh từ cụm menu đến đúng thiết bị nếu menu phải dịch khỏi điểm chạm để tránh mép màn hình.
- Animation mở theo nhịp lan từ tâm ra ngoài, 120–180 ms; chế độ reduced motion chỉ fade nhẹ.
- Chất lượng Low/Tablet bỏ blur và shadow nhiều lớp nhưng giữ viền, tương phản và trạng thái active.

### Kích thước và responsive

- Vùng chạm mỗi ô tối thiểu 48 × 48 px, mục tiêu 56 px trên tablet.
- Cụm chuẩn khoảng 240–280 px; tự thu nhỏ khi stage hẹp nhưng không giảm vùng chạm dưới mức tối thiểu.
- Trên màn hình quá hẹp hoặc khi bàn phím chiếm chỗ, chuyển thành cụm tổ ong 2 × 3 đặt giữa phía dưới thay vì tràn khỏi viewport.
- Tính vị trí theo bounds thực của `.fp3d-stage`, safe-area inset và các panel đang mở; không dùng kích thước cửa sổ toàn cục.

## Mô hình dữ liệu đề xuất

```ts
interface NeonMenuItem {
  id: string;
  label: string;
  icon: string;
  action: NeonMenuAction;
  active?: boolean;
  disabled?: boolean;
  confirm?: boolean;
  close?: boolean;
  value?: string;
  color?: string;
}

type NeonMenuAction =
  | { type: "toggle"; entity: string }
  | { type: "more_info"; entity: string }
  | { type: "service"; domain: string; service: string; data?: Record<string, unknown> }
  | { type: "navigate"; path: string }
  | { type: "fire_dom_event"; detail: Record<string, unknown> }
  | { type: "local"; command: string; value?: unknown };
```

Action dispatcher mới chỉ chuẩn hóa đường đi. Nó phải gọi lại các helper hiện có như `openMoreInfo`, `toggleEntity`, `runButton` và `hass.callService`, không nhân đôi logic xác nhận hoặc tự đoán service ở component hiển thị.

XY pad dùng cấu hình có kiểu thay vì template JavaScript:

```ts
interface NeonPadAxis {
  min: number;
  max: number;
  step: number;
  value: number;
  invert?: boolean;
  commit: "move" | "release";
  throttleMs?: number;
  action: (value: number) => NeonMenuAction;
}
```

## Ánh xạ thiết bị ban đầu

| Loại | Nút trung tâm | Tối đa sáu nút ngoài | Điều khiển liên tục |
|---|---|---|---|
| Đèn | Bật/tắt + độ sáng | Chi tiết, nhiệt màu, màu nhanh, cảnh yêu thích | Độ sáng; tùy thiết bị có thể chuyển sang nhiệt màu |
| Rèm/cửa cuốn | Trạng thái + vị trí | Mở, 75, 50, 25, đóng, dừng | Vị trí; lớp lá dùng pad thứ hai hoặc nút chuyển chế độ |
| Quạt | Bật/tắt + phần trăm | Mức 1/2/3, đảo gió, hướng, chi tiết | Percentage nếu integration hỗ trợ |
| Quạt có đèn | Trạng thái quạt | Mức quạt, đảo gió, bật đèn, màu/độ sáng đèn, chi tiết | Chuyển giữa pad quạt và pad đèn |
| Media player | Play/pause + bài đang phát | Trước, sau, tắt tiếng, nguồn, playlist, chi tiết | Âm lượng |
| Climate | Chế độ + nhiệt độ | Tắt, heat, cool, auto, quạt, chi tiết | Nhiệt độ mục tiêu |
| Khóa | Khóa/mở khóa | Chi tiết, pin, cửa liên quan | Không; mở khóa luôn yêu cầu xác nhận |
| Camera | Ảnh nhỏ/trạng thái | Live view, nhìn qua camera, ghi hình, đèn, chi tiết | Zoom/PTZ chỉ khi capability rõ ràng |
| Xe | Pin/trạng thái sạc | Khóa, điều hòa, sạc, vị trí, chi tiết | Giới hạn sạc nếu integration hỗ trợ |
| Switch/thiết bị thường | Bật/tắt | Chi tiết và các entity liên quan cùng device | Không |

Các hành động nguy hiểm như mở khóa, mở cổng/garage hoặc bắt đầu chuyển động khi mục được đánh dấu `confirm` phải giữ cơ chế xác nhận hiện tại. `unavailable` vô hiệu hóa action nhưng vẫn cho mở more-info.

## Các giai đoạn triển khai

### H0 — Kiểm kê và hợp đồng hành vi

- [ ] Liệt kê toàn bộ nhánh trong `fp3d-quick-menu`: light, cover, fan, switch, lock, camera, media và Car Pro.
- [ ] Lập test đặc tả cho service/data/confirm hiện tại trước khi thay UI.
- [ ] Tách phần tạo action khỏi Lit template thành hàm thuần `menuForEntity()`.
- [ ] Ghi rõ giấy phép và quyết định clean-room trong tài liệu phát triển.

Điều kiện hoàn thành: có ma trận parity, test bao phủ hành động hiện tại và không thay đổi giao diện runtime.

### H1 — Component và bộ máy bố trí

- [ ] Tạo `frontend/src/components/neon-honeycomb.ts` không phụ thuộc thư viện ngoài.
- [ ] Dùng CSS Grid/transform do dự án tự thiết kế để đặt tâm và sáu ô xung quanh.
- [ ] Tạo overlay host dùng chung, backdrop, focus trap, đóng bằng Escape/tap ra ngoài và khôi phục focus.
- [ ] Viết thuật toán clamp/scale theo stage, safe area và điểm neo thiết bị.
- [ ] Hỗ trợ một menu mở tại một thời điểm trong mỗi card nhưng không xung đột giữa nhiều card trên cùng dashboard.

Điều kiện hoàn thành: story/gallery hiển thị đủ 1–6 nút ở góc và mép của mọi kích thước stage.

### H2 — Giao diện Neon và khả năng truy cập

- [ ] Áp dụng token trong `frontend/src/styles.ts`, không hard-code một giao diện chỉ hợp theme Neon.
- [ ] Thêm trạng thái active/unavailable/loading và màu entity.
- [ ] Điều hướng bàn phím theo sáu hướng gần nhất, Enter/Space để chạy, Escape để đóng.
- [ ] `role="menu"`/`menuitem`, thứ tự focus hợp lý, nhãn đọc màn hình và thông báo giá trị pad.
- [ ] Kiểm tra tương phản, reduced motion và chế độ Low/Tablet.

Điều kiện hoàn thành: dùng được chỉ bằng bàn phím và không có vùng chạm nhỏ hơn 48 px.

### H3 — Thay menu nhanh thiết bị theo từng nhóm

- [ ] Tích hợp light và cover trước vì đã có ring/slider và swipe ổn định.
- [ ] Tiếp theo fan, switch, lock và camera.
- [ ] Cuối cùng media player, climate, xe và các menu Pro nhiều trạng thái.
- [ ] Giữ `fp3d-quick-menu` làm fallback trong giai đoạn chuyển đổi; thêm `menu_style: classic | honeycomb` cho thử nghiệm.
- [ ] Khi đạt parity, đặt `honeycomb` làm mặc định và chỉ xóa code classic ở một bản phát hành sau.

Điều kiện hoàn thành: cùng một entity tạo đúng service call như menu cũ, bao gồm confirm và unavailable.

### H4 — XY pad và điều khiển liên tục

- [ ] Tạo pad trung tâm bằng Pointer Events, pointer capture và `touch-action: none` chỉ trong pad.
- [ ] Hỗ trợ một trục, hai trục, bước giá trị, invert, commit khi thả và throttle khi kéo.
- [ ] Light: độ sáng; cover: vị trí; fan: percentage; media: âm lượng; climate: nhiệt độ.
- [ ] Hủy thao tác an toàn khi pointer bị mất, card disconnect hoặc entity chuyển unavailable.
- [ ] Không để gesture pad xoay camera 3D hoặc kích hoạt swipe nền.

Điều kiện hoàn thành: không gửi service quá dày, giá trị cuối luôn được commit và thao tác cảm ứng không rò sang viewer.

### H5 — Menu trung tâm và menu ngữ cảnh

- [ ] Biểu diễn bật/tắt toàn bộ đèn, mở/đóng rèm và Favorites bằng các cụm honeycomb có phân trang rõ ràng.
- [ ] Dùng lại `CustomButton` và `runButton` cho navigate, more-info, service và browser_mod.
- [ ] Thử nghiệm menu lục giác cho Duplicate, Rotate, Mirror, Fix và Delete trong editor; Delete vẫn xác nhận.
- [ ] Không ép nội dung dài hoặc form cấu hình vào ô lục giác; chuyển sang panel/hộp thoại khi cần.

Điều kiện hoàn thành: menu trung tâm không mất chức năng, không chạy nhầm action khi chuyển trang và editor vẫn dùng tốt trên cảm ứng.

### H6 — Cấu hình và API mở rộng

- [ ] Thêm lựa chọn kiểu menu trong plan settings và card visual editor; cấu hình card được quyền ghi đè plan.
- [ ] Cho phép cấu hình tối đa sáu nút phụ bằng schema action có kiểu, không eval JavaScript.
- [ ] Cung cấp một DOM event có namespace riêng để mở Neon Honeycomb từ thành phần NeonPlan khác.
- [ ] Chỉ cân nhắc API cho card Lovelace bên ngoài sau khi API nội bộ ổn định và có tài liệu bảo mật.
- [ ] Migration phải bỏ qua trường không hợp lệ và luôn có menu mặc định dùng được.

Điều kiện hoàn thành: cấu hình YAML và visual editor round-trip không mất dữ liệu; input lạ không thể thực thi mã tùy ý.

### H7 — Hiệu năng, tài liệu và rollout

- [ ] Test trên Chrome, Firefox, Safari/WebKit, Home Assistant Companion và Fire tablet.
- [ ] Đo số node DOM, thời gian mở, service-call rate và FPS khi menu phủ lên cảnh 3D.
- [ ] Thêm ảnh/gif cho mouse, touch và keyboard; cập nhật manual tiếng Anh/Đức và chuỗi tiếng Việt.
- [ ] Rollout theo ba bước: opt-in → mặc định mới có fallback → xóa classic sau ít nhất một chu kỳ ổn định.
- [ ] Ghi attribution và đường dẫn dự án truyền cảm hứng trong README/tài liệu.

Điều kiện hoàn thành: mở menu không làm viewer giật thấy rõ trên Tablet quality và không còn lỗi parity mức P0/P1.

## Kế hoạch tệp

- `frontend/src/components/neon-honeycomb.ts`: component, layout và input cơ bản.
- `frontend/src/components/neon-pad.ts`: điều khiển một/hai trục bằng Pointer Events.
- `frontend/src/neon-menu.ts`: kiểu dữ liệu, builder theo capability và action dispatcher thuần.
- `frontend/src/components/view3d.ts`: overlay host, điểm neo và tích hợp menu thiết bị/trung tâm.
- `frontend/src/components/quick-menu.ts`: nguồn hành vi cần di chuyển; fallback tạm thời rồi mới loại bỏ.
- `frontend/src/devices.ts`: capability và helper trạng thái entity.
- `frontend/src/model.ts`: cấu hình plan và `CustomButton` nếu cần mở rộng.
- `frontend/src/card-config.ts` và `frontend/src/card-editor.ts`: cấu hình/visual editor của card.
- `frontend/src/styles.ts`: token kính, viền, glow, trạng thái và reduced motion.
- `frontend/src/i18n.ts`, `frontend/lang/*.json`: tên menu, action và trợ năng.
- `frontend/src/**/*menu*.test.ts`: parity action, layout, keyboard, pointer và migration.

## Definition of Done

Một nhánh thiết bị chỉ chuyển sang Neon Honeycomb khi:

1. Có cùng hoặc nhiều hơn hành động so với menu hiện tại.
2. Service, data, entity target và yêu cầu xác nhận được test chính xác.
3. Hoạt động bằng chuột, cảm ứng và bàn phím.
4. Không tràn stage ở bốn góc, màn hình hẹp hoặc khi room panel đang mở.
5. Có giao diện đúng cho Neon, Blueprint, Day và Low/Tablet.
6. Không chạy eval, không phụ thuộc resource/card ngoài và không chứa mã GPL sao chép.
7. Không gây click xuyên xuống viewer, không xoay camera khi dùng pad và đóng sạch listener/timer.
8. Chuỗi mới có bản dịch và bundle Home Assistant được build lại.

## Mốc bắt đầu đề xuất

PR đầu tiên chỉ làm H0: tách `menuForEntity()` và khóa hành vi menu hiện tại bằng test. PR thứ hai tạo component tĩnh với dữ liệu giả và gallery responsive. PR thứ ba tích hợp light + cover sau một cờ opt-in; đây là hai nhóm đủ phức tạp để kiểm chứng ring, active state, confirm, slider/XY pad và xung đột gesture trước khi mở rộng sang các domain khác.
