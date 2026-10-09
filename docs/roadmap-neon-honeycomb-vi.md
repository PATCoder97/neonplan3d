# Roadmap chuyển đổi sang Neon Honeycomb Menu

Roadmap này lấy cảm hứng từ [Honeycomb Menu for Home Assistant](https://github.com/Sian-Lee-SA/honeycomb-menu): một menu nổi gồm tối đa sáu nút lục giác bao quanh vùng điều khiển trung tâm, có thể mở bằng tap, giữ lâu hoặc double tap và có XY pad tùy chọn.

Trong NeonPlan 3D, **Neon Honeycomb** là một component native được viết mới, dùng dữ liệu và luồng điều khiển hiện có của dự án. Việc chuyển đổi phải diễn ra theo từng nhóm thiết bị, luôn giữ menu cũ làm fallback cho đến khi nhóm đó đạt parity và ổn định qua ít nhất một chu kỳ phát hành.

Mục tiêu hình ảnh chính thức là: **giữ cơ chế bố trí và nhịp chuyển động đặc trưng của Honeycomb Menu, nhưng thể hiện hoàn toàn bằng ngôn ngữ NeonPlan**. Không cam kết sao chép từng pixel; phần được nghiệm thu là hình học, thứ tự chuyển động, cảm giác mở/đóng và phản hồi tương tác.

## Quyết định kiến trúc và giấy phép

Honeycomb Menu gốc khai báo **GPLv3**, còn NeonPlan 3D dùng **MIT**. Vì vậy:

- Không sao chép, chỉnh sửa hoặc bundle mã JavaScript/CSS từ repository gốc.
- Không thêm `honeycomb-menu.js`, `custom:button-card`, lodash hoặc một bản Lit khác làm dependency runtime.
- Chỉ tham khảo ý tưởng tương tác công khai: sáu vị trí xung quanh tâm, trạng thái active, tự đóng, phân lớp hành động và XY pad.
- Component mới được viết từ đầu bằng Lit, token giao diện, helper Home Assistant và kiểu dữ liệu sẵn có của NeonPlan 3D.
- Ghi attribution trong tài liệu vì ý tưởng tương tác đến từ Honeycomb Menu; mã triển khai mới vẫn nằm trong cây mã MIT của NeonPlan 3D.
- Không mang cơ chế template JavaScript/`HCJS` sang NeonPlan 3D.

Cách làm này đồng thời tránh các giới hạn của bản tham khảo: alpha, chủ yếu được thử trên Chrome và phụ thuộc `custom:button-card`.

## Chiến lược chuyển đổi

Không thay toàn bộ `fp3d-quick-menu` trong một lần. Mỗi nhóm thiết bị đi qua bốn trạng thái:

1. **Classic only**: chỉ dùng menu hiện tại.
2. **Honeycomb opt-in**: bật bằng `menu_style: honeycomb`, có thể quay lại `classic` ngay.
3. **Honeycomb mặc định**: menu mới là mặc định nhưng classic vẫn còn làm fallback.
4. **Honeycomb only**: chỉ xóa classic sau ít nhất một chu kỳ phát hành ổn định, không còn lỗi parity P0/P1 và có đường rollback bằng Git.

`menu_style` có hai tầng:

- Plan setting cung cấp mặc định: `classic | honeycomb`.
- Card config được quyền ghi đè plan setting.

Trong giai đoạn phát triển, giá trị thiếu hoặc không hợp lệ luôn quay về `classic`. Chỉ đổi mặc định sang `honeycomb` sau khi light và cover đã đạt Definition of Done.

## Phạm vi theo mốc phát hành

### MVP chuyển đổi

- Overlay, backdrop, focus management, định vị theo stage và tránh mép.
- Nút trung tâm và tối đa sáu nút hành động mỗi trang.
- Phân trang/submenu có quy tắc rõ ràng khi một thiết bị có hơn sáu hành động.
- Light và cover, bao gồm màu/nhiệt màu, position và tilt hiện có.
- Pad một trục cho brightness và cover position.
- Trạng thái active, disabled, busy, unavailable và confirm.
- Chuột, cảm ứng, bàn phím, reduced motion và Low/Tablet.
- Cờ `menu_style` và fallback về classic.

### Sau MVP

- Nhóm 1: switch, fan, lock và camera.
- Nhóm 2: media player, climate và Car Pro.
- Nhóm 3: menu trung tâm, Favorites và custom buttons.
- Nhóm 4: thử nghiệm menu ngữ cảnh editor.
- API mở menu từ component NeonPlan khác chỉ làm sau khi API nội bộ ổn định.

### Chưa nằm trong kế hoạch chuyển đổi

- Không biến Neon Honeycomb thành resource toàn cục cho mọi Lovelace card.
- Không chạy JavaScript, `eval` hoặc chuỗi template từ YAML.
- Không nhúng Lovelace card tùy ý vào ô lục giác.
- Không thay room panel, more-info hoặc form cấu hình dài.
- Không tự suy đoán service nguy hiểm nếu capability chưa rõ ràng.

## Baseline phải giữ

H0 phải lập ma trận từ hành vi runtime thật, không chỉ từ các hàm đang tồn tại trong source.

| Nhóm | Đường mở hiện tại | Hành vi cần khóa bằng test |
|---|---|---|
| Light | Hold; tap bật/tắt | Bật/tắt, 8 màu nhanh hoặc 6 mức Kelvin, brightness; `confirm` hiện chỉ chặn power |
| Cover | Tap hoặc hold | Mở, 75/50/25, đóng, dừng, position, tilt; các chuyển động có thể cần confirm |
| Switch | Hold; tap bật/tắt | `homeassistant.toggle`, trạng thái và confirm theo placement |
| Fan | Hold | Hiện dùng nhánh toggle chung; percentage, preset và oscillate là tính năng mới |
| Lock | Hold | Lock/unlock qua service lock; hiện confirm phụ thuộc placement, chưa phải mọi unlock đều confirm |
| Camera | Tap hoặc hold | Snapshot, live details, camera look-through và khóa tính năng Pro |
| Media | Có renderer trong quick menu nhưng chưa được mở từ đường hold hiện tại | Previous, next, play/pause, volume, source và media preset |
| Climate | Không có quick menu; mở more-info | Các mode và target temperature là tính năng mới |
| Car Pro | Hold trên entity thuộc parking/car | Lock, climate và charging có thể nhắm tới các entity khác entity neo |

Các thay đổi chính sách phải được ghi riêng, không gọi là parity. Ví dụ: “mọi thao tác unlock luôn phải xác nhận” là một thay đổi an toàn có chủ đích so với hành vi hiện tại.

## Ngôn ngữ thiết kế Neon

### Hình thức

- Ô lục giác nền kính xanh đen, viền cyan mảnh và glow vừa phải; không dùng nền trắng của `ha-card`.
- Nút active dùng màu entity đã được chuẩn hóa an toàn; nếu không có thì dùng `--fp3d-accent`.
- Nút trung tâm lớn hơn, hiển thị icon, trạng thái ngắn và giá trị chính như `63 %`, `Đang phát` hoặc `24 °C`.
- Sáu nút ngoài dùng icon Material Design và nhãn ngắn; nhãn đầy đủ nằm trong `aria-label` và tooltip khi hover/focus.
- Khi menu bị dịch khỏi điểm chạm để tránh mép, hiển thị đường neo mảnh về vị trí thiết bị.
- Mỗi ô chuyển động trong 120–180 ms; các ô ngoài xuất hiện lệch nhịp để tổng chuỗi mở không quá 450 ms.
- Low/Tablet bỏ blur và shadow nhiều lớp nhưng giữ viền, tương phản và trạng thái.

### Kích thước và responsive

- Vùng chạm mỗi ô tối thiểu 48 × 48 px, mục tiêu 56 px trên tablet.
- Cụm chuẩn khoảng 240–280 px; chỉ scale khi vẫn giữ được vùng chạm tối thiểu.
- Khi stage không đủ chỗ, chuyển sang bố cục tổ ong 2 × 3 ở giữa cạnh dưới.
- Nếu vẫn không đủ chỗ do bàn phím hoặc panel, dùng bottom sheet gọn thay vì thu nhỏ dưới 48 px.
- Tính vị trí theo bounds thực của `.fp3d-stage`, safe-area inset và panel đang mở; không dựa vào kích thước cửa sổ toàn cục.

## Mục tiêu visual-motion parity

“Giống Honeycomb” trong roadmap này có nghĩa là giống các đặc trưng quan sát được từ demo công khai, không phải sao chép code hoặc CSS:

- Một tâm điều khiển cố định và tối đa sáu ô nằm trên sáu hướng cách nhau 60°.
- Các ô ngoài tạo thành một vòng liền mạch, cùng bán kính và cùng hướng lục giác.
- Khi mở, tâm/pad xuất hiện trước; các ô ngoài bung lần lượt theo thứ tự vị trí với stagger đều.
- Mỗi ô vừa fade vừa đi từ gần tâm ra vị trí cuối, kèm scale nhẹ; không bay từ ngoài viewport vào.
- Khi đóng, chuỗi chạy ngược hoặc co đồng thời về tâm tùy nguyên nhân đóng, nhưng không biến mất đột ngột.
- Hover/focus làm sáng viền và glow; press co nhẹ rồi hồi; active giữ trạng thái rõ ràng sau animation.
- XY pad giữ núm điều khiển trong vùng trung tâm, phản hồi trực tiếp theo pointer và trả về trạng thái ổn định khi kết thúc gesture.
- Backdrop, anchor line, responsive fallback và màu sắc là phần thiết kế riêng của NeonPlan, không cần giống bản tham khảo.

### Thông số motion mặc định

Các giá trị dưới đây là token của NeonPlan và có thể tinh chỉnh từ fixture mà không đổi logic:

| Thuộc tính | Mặc định | Giới hạn nghiệm thu |
|---|---:|---:|
| Thời gian chuyển động mỗi ô | 160 ms | 120–180 ms |
| Stagger giữa hai ô | 45 ms | 35–60 ms |
| Scale bắt đầu | 0.72 | 0.68–0.80 |
| Quãng dịch từ tâm | 18 px | 12–24 px |
| Press scale | 0.92 | 0.90–0.95 |
| Tổng thời gian mở sáu ô | khoảng 385 ms | không quá 450 ms |

- Easing mở dùng một đường cong ease-out có overshoot rất nhẹ; đóng nhanh hơn và không overshoot.
- Thứ tự mặc định bắt đầu ở ô trên cùng rồi đi theo chiều kim đồng hồ; page mới giữ cùng thứ tự để không gây mất phương hướng.
- `prefers-reduced-motion` bỏ translate/scale/stagger, chỉ fade tối đa 100 ms.
- Low/Tablet giữ translate/scale/stagger nhưng bỏ blur động và glow nhiều lớp.

### Cách nghiệm thu hình ảnh

- Trước H2, lưu ảnh/video tham chiếu từ README/demo công khai, kèm viewport và tốc độ phát; không lấy source/CSS của dự án gốc làm tài liệu triển khai.
- Dev fixture phải có chế độ pause tại các mốc `0%`, `25%`, `50%`, `75%`, `100%` để so hình học và thứ tự animation.
- Chụp golden frames ở desktop, tablet và narrow stage cho 1, 3 và 6 nút; sai số vị trí tâm mỗi ô tối đa 2 px tại viewport chuẩn.
- Kiểm tra timing bằng event/timestamp, dung sai mỗi bước ±20 ms; screenshot chỉ kiểm tra hình học, không dùng để chứng minh timing.
- Màu, font, glow và backdrop được so với token NeonPlan, không so pixel với theme của Honeycomb Menu gốc.
- Nghiệm thu cảm nhận cuối bằng video đặt cạnh demo tham chiếu ở cùng tốc độ; nếu nhịp bung/co khác rõ ràng thì chưa đạt dù screenshot tĩnh đúng.

## Mô hình dữ liệu

Mô hình runtime phải biểu diễn được target, trạng thái đang chạy và phân trang. Schema lưu trong plan/card chỉ chứa dữ liệu tuần tự hóa được.

```ts
type NeonServiceTarget = {
  entity_id?: string | string[];
  device_id?: string | string[];
  area_id?: string | string[];
};

type NeonMenuAction =
  | { type: "toggle"; entity: string }
  | { type: "more_info"; entity: string }
  | {
      type: "service";
      domain: string;
      service: string;
      target?: NeonServiceTarget;
      data?: Record<string, unknown>;
    }
  | { type: "navigate"; path: string }
  | { type: "fire_dom_event"; detail: Record<string, unknown> }
  | { type: "page"; page: string }
  | { type: "local"; command: NeonLocalCommand; value?: unknown };

type NeonLocalCommand =
  | "close"
  | "camera_look"
  | "cycle_light_mode"
  | "cycle_fan_light";

interface NeonMenuItem {
  id: string;
  label: string;
  icon: string;
  action: NeonMenuAction;
  active?: boolean;
  disabled?: boolean;
  busy?: boolean;
  confirm?: boolean;
  close?: boolean;
  value?: string;
  color?: string;
}

interface NeonMenuPage {
  id: string;
  title?: string;
  center: NeonMenuItem;
  items: NeonMenuItem[]; // tối đa 6
  pad?: NeonPadConfig;
}

interface NeonMenuModel {
  id: string;
  entity: string;
  initialPage: string;
  pages: NeonMenuPage[];
}
```

Không dùng callback trong schema YAML/card. Pad lưu một action template có `valueKey`; builder runtime mới chuyển nó thành lệnh thực thi.

```ts
interface NeonPadAxisConfig {
  min: number;
  max: number;
  step: number;
  value: number;
  invert?: boolean;
  commit: "move" | "release";
  throttleMs?: number;
  action: Extract<NeonMenuAction, { type: "service" }>;
  valueKey: string; // ví dụ brightness_pct, position, volume_level
}

interface NeonPadConfig {
  x?: NeonPadAxisConfig;
  y?: NeonPadAxisConfig;
}
```

`menuForEntity()` là hàm thuần tạo `NeonMenuModel`. Dispatcher là nơi duy nhất thực thi action và phải dùng lại `openMoreInfo`, `toggleEntity`, `runButton` hoặc `hass.callService`. Component hiển thị không tự đoán service và không tự triển khai lại confirm.

## Quy tắc sáu nút và parity

- Mỗi page có đúng một nút trung tâm và tối đa sáu nút ngoài.
- Hành động thiết yếu luôn ở page đầu: power/play, stop nếu đang chuyển động, details và điều khiển an toàn quan trọng.
- Light có page điều khiển chính và page palette nếu cần; không cắt từ 8 màu xuống 6 một cách âm thầm.
- Cover giữ đủ open/75/50/25/close/stop; tilt nằm ở pad hoặc page tilt riêng tùy capability.
- Media source/preset dùng page picker có phân trang, không nhồi danh sách dài vào vòng chính.
- Camera/PTZ và fan/climate chỉ hiện capability đã xác nhận từ entity state/supported features.
- Chuyển page không gọi action thiết bị và không làm mất focus.

## Accessibility và tương tác

- Overlay dùng `role="dialog"` với accessible name; không gán `role="menu"` cho toàn component vì bên trong có slider/pad và nội dung trạng thái.
- Vòng sáu nút có thể dùng roving tabindex; phím mũi tên chọn nút gần nhất theo hình học.
- Enter/Space chạy nút, Escape đóng, Tab không thoát khỏi dialog khi đang mở.
- Khi đóng, focus quay lại thiết bị hoặc nút đã mở menu nếu phần tử đó còn tồn tại.
- Backdrop đóng menu; event trong menu không click xuyên xuống viewer.
- Pad dùng Pointer Events, pointer capture và `touch-action: none` chỉ trên vùng pad.
- `pointercancel`, mất capture, card disconnect hoặc entity chuyển unavailable phải hủy gesture sạch sẽ.
- Screen reader nhận được giá trị pad qua control semantic hoặc thông báo có throttle; không phát thông báo ở mọi pixel di chuyển.

## Các giai đoạn triển khai

### H0 — Khóa baseline và quyết định sản phẩm

- [ ] Lập ma trận runtime theo bảng baseline ở trên, gồm cả nhánh reachable và code chưa reachable.
- [ ] Viết test đặc tả service, data, target, confirm, unavailable và close behavior hiện tại.
- [ ] Chốt thay đổi chính sách: unlock luôn confirm, cover nào cần confirm và action nào đóng menu.
- [ ] Chốt quy tắc page/submenu cho light palette, cover tilt và media source.
- [ ] Lưu bộ ảnh/video hành vi công khai dùng làm visual-motion reference; ghi viewport, tốc độ phát và mốc thời gian.
- [ ] Ghi quyết định clean-room và attribution trong tài liệu phát triển.

Điều kiện hoàn thành: baseline có test, khác biệt giữa parity và tính năng mới được ghi rõ, runtime chưa đổi giao diện.

### H1 — Model, builder và dispatcher thuần

- [ ] Tạo `frontend/src/neon-menu.ts` chứa type, validation, `menuForEntity()` và dispatcher.
- [ ] Hỗ trợ target khác entity neo, cần thiết cho Car Pro và entity liên quan cùng device.
- [ ] Chuẩn hóa confirm, busy, unavailable, page và close behavior.
- [ ] Giới hạn `local.command` bằng union; input lạ bị bỏ qua an toàn.
- [ ] Viết unit test cho builder và action dispatcher, không cần DOM.

Điều kiện hoàn thành: model tạo đúng lệnh cho light và cover, đồng thời biểu diễn được media/Car mà không phá giới hạn sáu nút.

### H2 — Component và bộ máy bố trí

- [ ] Tạo `frontend/src/components/neon-honeycomb.ts` không phụ thuộc thư viện ngoài.
- [ ] Tạo overlay host dùng chung trong `view3d.ts`, nhưng state thuộc từng instance card.
- [ ] Implement backdrop, anchor line, clamp theo stage, safe area và bottom fallback.
- [ ] Đưa bán kính vòng, góc bắt đầu, kích thước ô và khoảng cách 60° thành geometry token có test.
- [ ] Một card chỉ mở một menu; nhiều card trên cùng dashboard không dùng singleton toàn cục.
- [ ] Tạo dev fixture/gallery riêng cho component với 1–6 nút, nhiều page, bốn góc stage và chế độ pause animation theo phần trăm.

Điều kiện hoàn thành: fixture hiển thị đúng ở bốn góc, cạnh, stage hẹp và khi panel mở; sai số tâm ô không quá 2 px tại viewport chuẩn; chưa gọi service thật.

### H3 — Visual-motion parity và accessibility

- [ ] Dùng token trong `frontend/src/styles.ts`; hỗ trợ Neon, Blueprint, Day và Low/Tablet.
- [ ] Thêm active, disabled, busy, unavailable và màu entity đã chuẩn hóa.
- [ ] Implement chuỗi mở tâm trước, sáu ô stagger theo chiều kim đồng hồ và chuỗi đóng tương ứng.
- [ ] Đưa duration, stagger, scale, translate, press scale và easing thành motion token.
- [ ] Thêm golden frames và timing assertions theo mục tiêu visual-motion parity.
- [ ] Implement focus trap, Escape, restore focus, roving tabindex và phím mũi tên.
- [ ] Thêm reduced motion, nhãn screen reader và tương phản trạng thái.
- [ ] Tách hàm layout/focus hình học thành hàm thuần để unit test.

Điều kiện hoàn thành: nhịp mở/đóng đạt bảng motion trong dung sai, dùng được chỉ bằng bàn phím, không có vùng chạm dưới 48 px và không click xuyên viewer.

### H4 — Pad và cách ly gesture

- [ ] Tạo `frontend/src/components/neon-pad.ts` bằng Pointer Events và pointer capture.
- [ ] Hỗ trợ một trục trước; hai trục chỉ bật khi có use case đã test.
- [ ] Hỗ trợ step, invert, commit khi thả và throttle khi kéo.
- [ ] Luôn gửi commit cuối; hủy an toàn khi mất pointer/card/entity.
- [ ] Chặn pad làm xoay camera, swipe thiết bị hoặc kích hoạt backdrop.

Điều kiện hoàn thành: service-call rate có giới hạn, giá trị cuối không mất và gesture không rò sang viewer.

### H5 — MVP light và cover opt-in

- [ ] Tích hợp light, gồm power, brightness, màu và nhiệt màu qua page palette.
- [ ] Tích hợp cover, gồm open/positions/close/stop, position pad và tilt.
- [ ] Thêm `menu_style: classic | honeycomb` vào plan settings và card config; card ghi đè plan.
- [ ] Cập nhật `model.ts`, `schema.py`, card editor, plan settings, migration/default và localization.
- [ ] Khi builder hoặc config lỗi, ghi log an toàn và quay về classic.

Điều kiện hoàn thành: light/cover gọi đúng service/data/target/confirm như baseline, YAML và visual editor round-trip không mất dữ liệu.

### H6 — Switch, fan, lock và camera

- [ ] Chuyển switch trước vì gần với nhánh toggle hiện tại.
- [ ] Fan bổ sung percentage/preset/oscillate theo capability, không gọi service không hỗ trợ.
- [ ] Lock áp dụng chính sách unlock luôn confirm đã chốt ở H0.
- [ ] Camera giữ snapshot, live details và look-through; recording/light/PTZ chỉ thêm khi capability rõ ràng.
- [ ] Mỗi nhóm được bật mặc định độc lập sau khi đạt parity.

Điều kiện hoàn thành: không mất hành vi hiện tại; các tính năng mở rộng có test riêng và unavailable vẫn cho mở more-info.

### H7 — Media, climate và Car Pro

- [ ] Nối media vào đường mở menu thực tế; phân trang source/preset và throttle volume.
- [ ] Thêm climate modes, fan mode và target temperature theo capability.
- [ ] Chuyển Car Pro với action target nhiều entity; unlock, climate và charging giữ đúng policy.
- [ ] Không ép source list, playlist hoặc dữ liệu xe dài vào sáu ô chính.

Điều kiện hoàn thành: target khác entity neo được test, chuyển page không chạy nhầm action và danh sách dài vẫn thao tác được trên mobile.

### H8 — Menu trung tâm và editor context

- [ ] Biểu diễn all lights, covers, Favorites và custom buttons bằng page rõ ràng.
- [ ] Dùng lại `CustomButton` và `runButton` cho navigate, more-info, service và browser_mod.
- [ ] Giữ xác nhận hai bước cho thao tác toàn nhà hoặc thay bằng confirm policy tương đương đã test.
- [ ] Thử nghiệm Duplicate, Rotate, Mirror, Fix và Delete trong editor; Delete luôn xác nhận.
- [ ] Form và nội dung dài tiếp tục mở panel/dialog riêng.

Điều kiện hoàn thành: central menu không mất chức năng và editor vẫn dùng được trên cảm ứng.

### H9 — Cấu hình mở rộng, hiệu năng và rollout cuối

- [ ] Cho phép tối đa sáu nút phụ mỗi page bằng schema action có kiểu, không eval.
- [ ] Cung cấp DOM event có namespace riêng cho component NeonPlan khác sau khi API nội bộ ổn định.
- [ ] Test Chrome, Firefox, Safari/WebKit, Home Assistant Companion và Fire tablet.
- [ ] Đo node DOM, thời gian mở, service-call rate và FPS trên Tablet quality.
- [ ] Cập nhật manual tiếng Anh/Đức, chuỗi tiếng Việt và ảnh/gif mouse/touch/keyboard.
- [ ] Đổi mặc định sang honeycomb; chỉ xóa classic ở release sau nếu không còn lỗi parity P0/P1.

Điều kiện hoàn thành: không giật thấy rõ trên Tablet quality, input lạ không thực thi mã và có release rollback rõ ràng.

## Kế hoạch tệp

- `frontend/src/neon-menu.ts`: model, builder, validation và dispatcher thuần.
- `frontend/src/neon-menu.test.ts`: parity action, target, confirm, page và invalid input.
- `frontend/src/components/neon-honeycomb.ts`: dialog, vòng nút, page và input cơ bản.
- `frontend/src/components/neon-pad.ts`: điều khiển một/hai trục bằng Pointer Events.
- `frontend/src/components/view3d.ts`: overlay host, anchor, card-local state và tích hợp menu.
- `frontend/src/components/quick-menu.ts`: baseline/fallback tạm thời; chỉ xóa sau rollout.
- `frontend/src/devices.ts`: capability và helper trạng thái entity.
- `frontend/src/model.ts`: plan setting và schema action dùng trong source.
- `custom_components/neonplan3d/schema.py`: validation/default cho plan setting và custom action.
- `frontend/src/card-config.ts`, `frontend/src/card-editor.ts`: card override và visual editor.
- `frontend/src/styles.ts`: token kính, viền, glow, trạng thái và reduced motion.
- `frontend/src/i18n.ts`, `frontend/lang/*.json`: tên menu, action, page và accessibility.
- Dev fixture/gallery: kiểm tra layout/responsive bằng browser, tách khỏi unit test Node.
- `custom_components/neonplan3d/frontend/`: bundle được build lại sau khi source và bản dịch thay đổi.

## Chiến lược test

- Unit test Node: builder, capability mapping, service/data/target, confirm policy, pagination, clamp/layout math và migration.
- Component/browser test hoặc dev fixture: focus trap, keyboard, pointer capture, backdrop, Shadow DOM và responsive.
- Visual regression: golden frames tại năm mốc animation, kiểm tra hình học và trạng thái cho 1/3/6 nút.
- Motion timing: đo timestamp bắt đầu/kết thúc của từng ô, thứ tự stagger, tổng thời gian và reduced-motion branch.
- Manual matrix: mouse, touch, keyboard; panel và card; bốn góc; narrow stage; Low/Tablet; reduced motion.
- Không coi screenshot/gallery là bằng chứng service parity.
- Không coi một frame tĩnh giống nhau là bằng chứng motion parity; phải kiểm tra cả timing và video cạnh nhau.
- Không coi unit test action là bằng chứng gesture thật trên Companion/Safari.

## Definition of Done cho từng nhóm thiết bị

Một nhóm chỉ chuyển sang Honeycomb mặc định khi:

1. Có cùng hoặc nhiều hơn hành động reachable so với menu hiện tại; hành động dư được đưa vào page/submenu, không bị cắt âm thầm.
2. Service, data, target entity và confirm policy được test chính xác.
3. Hoạt động bằng chuột, cảm ứng và bàn phím.
4. Không tràn stage ở bốn góc, màn hình hẹp, safe area hoặc khi room panel đang mở.
5. Có giao diện đúng cho Neon, Blueprint, Day và Low/Tablet.
6. Không eval, không phụ thuộc resource/card ngoài và không chứa mã GPL sao chép.
7. Không click xuyên viewer, không xoay camera khi dùng pad và đóng sạch listener/timer/pointer capture.
8. Unavailable vô hiệu hóa action điều khiển nhưng vẫn cho mở more-info.
9. Chuỗi mới có bản dịch và bundle Home Assistant được build lại.
10. Classic vẫn có thể được chọn cho tới release dọn dẹp cuối.
11. Hình học sáu hướng, thứ tự stagger, open/close timing và phản hồi press đạt tiêu chí visual-motion parity; màu sắc vẫn theo token NeonPlan.

## Ba PR đầu tiên

1. **PR 1 — H0:** lập ma trận parity, thêm test baseline và tài liệu clean-room; không đổi UI runtime.
2. **PR 2 — H1:** thêm model/builder/dispatcher thuần cùng test target, confirm và pagination; classic vẫn render như cũ.
3. **PR 3 — H2/H3 fixture:** thêm component tĩnh, overlay/layout, visual-motion parity, accessibility và dev fixture responsive; chưa thay menu thiết bị thật.

PR tiếp theo mới làm pad, rồi tích hợp light + cover sau cờ opt-in. Cách chia này tạo điểm rollback nhỏ, tránh trộn thay đổi UI, service semantics, gesture và migration vào cùng một PR.
