# Roadmap thư viện nội thất tích hợp sẵn

Tài liệu này định hướng mở rộng NeonPlan 3D bằng các mẫu nội thất được tích hợp trực tiếp vào mã nguồn. Mục tiêu là phủ đủ 16 nhóm công năng đang được giới thiệu tại [trang Packs của NeonPlan 3D](https://mastershort.de/en/neonplan3d/?lang=en#packs), nhưng toàn bộ tên gọi, hình học, biểu tượng và mã nguồn mới phải được tự thiết kế độc lập.

## Mục tiêu

- Dùng được ngay sau khi cài integration, kể cả khi Home Assistant không có Internet.
- Không cần mua, nhập hoặc xác thực tệp `.fp3dpack` cho thư viện tích hợp sẵn.
- Ưu tiên kích thước, thiết bị và cách bố trí thường gặp trong nhà ở Việt Nam.
- Giữ nguyên khả năng mở bản vẽ hiện có và tiếp tục hỗ trợ pack của bên thứ ba.
- Có đủ tên tiếng Việt và tiếng Anh, ký hiệu 2D, mô hình 3D, tìm kiếm và liên kết entity Home Assistant khi phù hợp.

## Cách dùng hình ảnh tham khảo và ranh giới bản quyền

Mã nguồn lõi dùng giấy phép MIT không đồng nghĩa với các pack bán riêng cũng mang giấy phép MIT. Tuy vậy, các ảnh tổng quan và gallery sản phẩm được công khai trên website chính thức là nguồn tham khảo hữu ích để nhận diện:

- Loại thiết bị nào đang thiếu hoặc đang gộp quá chung trong thư viện hiện tại.
- Đặc điểm công năng dễ nhận biết, ví dụ quạt trần thường và quạt trần có đèn là hai mẫu khác nhau.
- Dáng tổng quát, vị trí lắp, số bộ phận chính và trạng thái nào nên thể hiện trong Home Assistant.
- Các biến thể nên có trong cùng một họ sản phẩm.

Được phép xem ảnh công khai và vẽ một mô hình low-poly mới theo cùng **loại đồ vật/công năng**. Không đưa chính ảnh đó vào repository, không trace đường nét, không đo để sao chép tỷ lệ chính xác, không sao chép nguyên màu sắc/chi tiết nhận diện, không trích xuất mesh, ID hoặc tệp `.fp3dpack`. Mẫu mới cần có tỷ lệ và chi tiết do dự án tự thiết kế, ưu tiên thực tế nhà Việt Nam và phong cách hình học hiện có của fork.

Nói ngắn gọn: ảnh của họ được dùng để trả lời “cần có những đồ vật gì và phải nhìn ra công dụng gì”, không dùng để tạo bản sao 1:1 của sản phẩm trả phí.

## Hiện trạng ngày 08/10/2026

- Thư viện tích hợp hiện có **101 mục** trong 10 nhóm giao diện, gồm nhiều đồ dùng đặc trưng tại Việt Nam như bàn thờ, xe máy, bồn nước, võng, tủ giày, giàn phơi, quạt trần có đèn, quạt treo tường, robot cắt cỏ và cụm hạ tầng mạng/an toàn.
- Có 9 gói bố trí nhanh cho phòng: hai kiểu bếp, phòng tắm, phòng ngủ, phòng khách, phòng ăn, văn phòng, phòng trẻ em và sảnh.
- Trình chỉnh sửa đã có tìm kiếm song ngữ, nhóm thu gọn, xem trước, đổi kích thước, xoay, lật, đặt lên sàn/tường/trần/bề mặt và liên kết entity.
- Định dạng pack nhập ngoài đã hỗ trợ khối hộp, trụ, khối vát, đèn, màn hình, bề mặt đặt đồ, phương tiện và lỗ cầu thang.
- Sáu tính năng Pro có mã triển khai trong frontend đã được bật sẵn ở fork này; chúng không phải phạm vi cần làm lại của roadmap.

Trang chính thức đang công bố gói đầy đủ gồm 474 mẫu/phương tiện thuộc 16 nhóm. Các con số dưới đây chỉ là mốc tham khảo để đo độ phủ, không phải danh sách cần sao chép.

| Nhóm tham khảo | Số mẫu công bố | Hiện trạng gần nhất | Ưu tiên |
|---|---:|---|---:|
| Phòng khách | 69 | Đã có bộ cơ bản | P0 |
| Nhà bếp | 66 | Đã có bộ cơ bản và hai bố trí nhanh | P0 |
| Phòng ngủ | 41 | Đã có bộ cơ bản | P0 |
| Phòng tắm | 37 | Đã có bộ cơ bản | P0 |
| Smart Home & công nghệ | 30 | Có một số thiết bị và liên kết entity | P0 |
| Tiện ích & kỹ thuật tòa nhà | 18 | Có điện, nước và điều hòa cơ bản | P0 |
| Kiến trúc & hoàn thiện | 17 | Có một phần trong công cụ xây dựng | P1 |
| Sân vườn & hiên | 33 | Có bộ ngoài trời cơ bản | P1 |
| Cầu thang & lan can | 12 | Có cầu thang thẳng và chiếu nghỉ | P1 |
| Garage & xưởng | 17 | Chưa có nhóm riêng | P1 |
| Phương tiện | 15 | Có xe máy và chỗ đỗ xe | P1 |
| Văn phòng & gaming | 25 | Có bộ văn phòng cơ bản | P2 |
| Phòng trẻ em | 18 | Có giường/cũi và bố trí nhanh | P2 |
| Thú cưng | 24 | Chưa có nhóm riêng | P2 |
| Fitness | 17 | Chưa có nhóm riêng | P2 |
| Home Cinema & Hi-Fi | 35 | Có TV và loa thông minh cơ bản | P2 |

## Quy trình đối chiếu ảnh công khai

Mỗi trang sản phẩm có thể có nhiều ảnh tổng quan, không chỉ ảnh đại diện tại mục Packs. Trước khi thiết kế một nhóm, thực hiện tuần tự:

1. Mở trang sản phẩm chính thức và xem toàn bộ ảnh gallery ở độ phân giải gốc.
2. Lập bảng kiểm kê bằng tên mô tả trung tính: loại đồ vật, vị trí lắp, bộ phận chính và khả năng tương tác; lưu URL nguồn và ngày đối chiếu.
3. So với catalog hiện tại và đánh dấu một trong ba trạng thái: `đã phù hợp`, `cần sửa hình`, `cần thêm mới`.
4. Với mục `cần sửa hình`, giữ nguyên ID cũ để bản vẽ hiện tại tự nhận hình mới.
5. Với mục `cần thêm mới`, tạo ID riêng và xác định rõ khác biệt công năng, không tạo biến thể chỉ để tăng số lượng.
6. Vẽ lại bằng primitive/hình học riêng; kiểm tra cạnh ảnh tham khảo để chắc chắn nhận ra đúng loại đồ vật nhưng không phải bản sao chi tiết.
7. Kiểm tra cả 2D, 3D, chế độ Day/Neon và trạng thái entity trước khi đánh dấu hoàn thành.

Bảng kiểm kê làm việc nên có các cột: `nhóm`, `nguồn ảnh`, `tên mô tả`, `ID hiện tại`, `trạng thái`, `ID dự kiến`, `đặc điểm cần giữ`, `điểm phải thiết kế khác`, `entity/capability` và `tiến độ`.

### Đợt đối chiếu đầu tiên: Smart Home & Tech

Ảnh gallery công khai của [Smart Home & Tech](https://mastershort.de/product/neonplan3d-smart-home-tech/) cho thấy rõ cả quạt trần thường và quạt trần có đèn ở [trang tổng quan 3/3](https://mastershort.de/wp-content/uploads/2026/10/neonplan3d-smarthome-r2-overview-3.jpg). Đây là ví dụ đầu tiên để kiểm chứng quy trình:

| Mục | Hiện trạng | Hành động trong fork |
|---|---|---|
| Quạt trần | Đã có `fan_ceiling` | Đã giữ ID và hoạt ảnh, vẽ lại theo dáng nhận diện trong ảnh 3/3: 5 cánh bản thẳng màu tối, motor tròn thấp, ty ngắn và bát áp trần rộng; vẫn có biến thể 3/4 cánh. |
| Quạt trần có đèn | Đã thêm `fan_ceiling_light` | Dùng cùng họ hình học 5 cánh với chụp đèn đa giác màu vàng dưới tâm, rotor động và hai entity quạt/đèn độc lập. |
| Quạt treo tường | Đã thêm `fan_wall` | Đã có ký hiệu 2D, thân và lồng quạt 3D gắn tường, chiều cao lắp đặt tùy chỉnh, rotor động và liên kết fan entity. |
| Robot hút bụi có dock | Đã nâng cấp `robot_vacuum` | Đã vẽ trạm sạc/xả rác dạng tháp theo dáng nhận diện ở [ảnh tổng quan 1/3](https://mastershort.de/wp-content/uploads/2026/10/neonplan3d-smarthome-r2-overview.jpg), giữ robot chuyển động và các trạng thái dọn dẹp, quay về dock, đã dock và lỗi. Bản vẽ dùng kích thước mặc định cũ được tự nâng cấp; kích thước tùy chỉnh được giữ nguyên. |
| Robot cắt cỏ có garage | Đã thêm `robot_mower` | Đã vẽ garage thấp mái nghiêng và robot đỗ hướng ra ngoài theo dáng nhận diện ở ảnh 1/3; hỗ trợ entity `lawn_mower`, tự tìm ngoài khu vực phòng và hiển thị dải trạng thái khi cắt cỏ/quay về. |
| Tủ mạng/NAS/access point trần | Đã thêm `network_cabinet`, `nas_server`, `access_point` | Mỗi mẫu có hình 2D/3D riêng, đúng kiểu đặt sàn/gắn trần, tự tìm entity theo khu vực và hiển thị dải trạng thái cyan khi trực tuyến. |
| Thermostat, báo khói, còi có đèn | Đã thêm `wall_thermostat`, `smoke_detector`, `siren_alarm` | Thermostat gắn tường theo climate entity; báo khói gắn trần dùng `device_class: smoke`; còi gắn tường hỗ trợ `siren`/`alarm_control_panel` và chớp đỏ khi cảnh báo. |

`fan_ceiling_light` cần hai vai trò entity độc lập: fan entity điều khiển chuyển động cánh và light entity điều khiển độ sáng/màu của đèn. Nếu chỉ cấu hình một vai trò thì phần còn lại vẫn hiển thị ở trạng thái tắt, không làm mất cả mô hình. Đây cũng là mẫu thử cho catalog có nhiều capability trên cùng một vật thể.

## Kiến trúc cần làm trước

Không tiếp tục thêm hàng trăm nhánh vào các `switch` lớn. Trước đợt nội dung đầu tiên, cần chuyển thư viện tích hợp sang catalog khai báo tập trung:

```text
frontend/src/furniture/
├── catalog.ts             # ID ổn định, nhóm, tên, kích thước, đặc tính
├── groups/                # dữ liệu theo 16 nhóm
├── geometry/              # chi tiết hình học dùng lại
├── renderers/             # bộ dựng mẫu theo họ sản phẩm
└── symbols/               # ký hiệu 2D theo họ sản phẩm
```

Một mục catalog tối thiểu cần có `id`, nhóm, tên `vi`/`en`, kích thước mặc định, kiểu gắn, từ khóa tìm kiếm, renderer, ký hiệu 2D và các khả năng như `electric`, `fan`, `light`, `screen`, `surface`, `vehicle` hoặc `hole`. Catalog phải cho phép nhiều vai trò entity trên một mẫu kết hợp, trước mắt là fan + light. Các ID đang tồn tại phải giữ nguyên; lớp catalog mới chỉ thay nguồn metadata và điều phối renderer.

Các biến thể cùng họ, ví dụ sofa 2/3 chỗ, tủ bếp 40/60/80 cm hoặc bàn 4/6 ghế, nên dùng một renderer tham số hóa. Cách này tạo độ phủ lớn mà không làm tăng mạnh kích thước bundle và số draw call.

## Các giai đoạn triển khai

### Giai đoạn 0 — Chốt nền và kiểm kê

Mục tiêu: biến hiện trạng thành đường cơ sở có thể đo được.

- [x] Sinh báo cáo tự động từ `FURNITURE_TYPES`, `FURNITURE_GROUPS` và `FURNITURE_SIZE` để phát hiện ID trùng, thiếu tên hoặc thiếu kích thước (`cd frontend && npm run catalog`).
- [x] Lập bảng ánh xạ các mục hiện tại vào 16 nhóm đích; catalog kiểm kê hiện khóa 108 type, 101 mục thư viện, 7 mục nội bộ và trường hợp `worktop` đang nằm trong hai nhóm. Mỗi mục chỉ được tính một lần trong `REFERENCE_PACK_ITEMS`.
- [ ] Duyệt toàn bộ ảnh gallery công khai của 16 trang sản phẩm, không chỉ ảnh đại diện ở trang Packs; lập bảng `đã phù hợp / cần sửa hình / cần thêm mới` kèm URL và ngày xem.
- [ ] Chọn khoảng 10 mẫu hiện có cần sửa hình trước; `fan_ceiling` là mẫu thí điểm và phải giữ nguyên ID.
- [ ] Chụp bộ ảnh chuẩn ở góc nhìn 2D, 3D và chế độ Day/Neon để so sánh hồi quy.
- [ ] Ghi nguồn và giấy phép cho mọi asset ngoài mã thủ tục, nếu sau này có dùng texture hoặc mesh.

Điều kiện hoàn thành: catalog hiện tại có báo cáo kiểm kê tái tạo được trong CI và không thay đổi bản vẽ cũ.

### Giai đoạn 1 — Catalog tích hợp và công cụ kiểm thử (`v1.19.0`)

Mục tiêu: có nền tảng đủ gọn để thêm nhiều mẫu theo lô.

- [ ] Tách metadata khỏi `frontend/src/model.ts`; giữ export tương thích để chưa phải sửa toàn bộ nơi dùng.
- [ ] Tách renderer trong `frontend/src/viewer/furniture.ts` thành các họ tái sử dụng.
- [ ] Chuyển `frontend/src/components/furniture2d.ts` sang registry ký hiệu 2D.
- [x] Cho nhóm thư viện, tìm kiếm và tên hiển thị đọc trực tiếp từ catalog; các export cũ vẫn được giữ để tương thích.
- [x] Thêm validator bắt buộc ID ổn định, kích thước hợp lệ, tên `vi`/`en`, renderer và symbol; CI chạy `npm run catalog` ở mỗi push/PR.
- [ ] Thêm trang gallery phát triển để render toàn bộ catalog trong một lần.

Điều kiện hoàn thành: 92 mục cũ hiển thị tương đương, typecheck/test/build qua và gallery không có mẫu mất hình.

### Giai đoạn 2 — Nhà ở Việt Nam thiết yếu (`v1.20.x`)

Mục tiêu: hoàn thiện bốn nhóm được dùng nhiều nhất trước, khoảng 100–120 mẫu/biến thể mới.

- [ ] Phòng khách: sofa góc trái/phải, ghế đôn, bàn trà, kệ TV, tủ trang trí, vách lam, tủ thờ và bàn thờ nhiều cỡ.
- [ ] Nhà bếp: module tủ 40/60/80 cm, tủ góc, bếp từ/bếp gas, chậu đơn/đôi, máy hút mùi, tủ lạnh nhiều kiểu và bàn đảo.
- [ ] Phòng ngủ: giường đơn/đôi, giường tầng, tủ áo cánh mở/cửa lùa, bàn trang điểm, nôi và tủ đầu giường.
- [ ] Phòng tắm/giặt: lavabo bàn/treo, bồn cầu, khu tắm kính, bình nóng lạnh, máy giặt cửa trên/cửa trước và giàn phơi.
- [ ] Đèn và làm mát: sửa hình `fan_ceiling`, thêm `fan_ceiling_light`, quạt treo tường và các kiểu đèn phổ biến; quạt có đèn phải điều khiển riêng phần quạt và phần sáng.
  - Đã hoàn thành `fan_ceiling`, biến thể 3/4/5 cánh, `fan_ceiling_light` với entity quạt/đèn riêng và `fan_wall`; còn các kiểu đèn mới.
- [ ] Mở rộng gói bố trí nhanh theo diện tích phòng nhỏ, vừa và lớn; không tự ghi đè đồ đã đặt.

Điều kiện hoàn thành: có thể dựng hoàn chỉnh một căn hộ Việt Nam thông dụng mà không cần pack ngoài.

### Giai đoạn 3 — Smart Home và hệ kỹ thuật (`v1.21.x`)

Mục tiêu: đồ vật không chỉ đẹp mà còn phản ánh đúng trạng thái Home Assistant.

- [ ] Smart Home: công tắc, ổ cắm, cảm biến, chuông cửa, khóa, rèm, camera, loa, robot hút bụi có dock, robot cắt cỏ có garage và màn hình điều khiển.
  - Đã hoàn thành robot hút bụi với trạm sạc dạng tháp và robot cắt cỏ có garage với entity `lawn_mower`; còn các thiết bị điều khiển/cảm biến chưa có.
- [x] Hạ tầng mạng và an toàn theo ảnh kiểm kê: tủ mạng, NAS, access point trần, thermostat, báo khói và còi có đèn chớp.
- [ ] Kỹ thuật: tủ điện, UPS, modem/router, bơm, bồn nước, bình nước nóng, điều hòa, quạt thông gió và thiết bị năng lượng.
- [ ] Chuẩn hóa ánh xạ entity theo domain/device class và trạng thái `on`, `open`, `occupied`, `playing`, công suất hoặc mức pin.
- [ ] Thêm badge trong thư viện để phân biệt mẫu có đèn, màn hình, chuyển động hoặc liên kết công suất.

Điều kiện hoàn thành: mỗi thiết bị tương tác có trạng thái dự phòng khi entity thiếu/unavailable và có test logic tương ứng.

### Giai đoạn 4 — Kết cấu và không gian ngoài nhà (`v1.22.x`)

Mục tiêu: phủ các hạng mục khó quan sát nhưng quan trọng với mô hình nhà hoàn chỉnh.

- [ ] Kiến trúc & hoàn thiện: cột, dầm trang trí, lam, vách ngăn, bục, rèm, thảm và các module ốp.
- [ ] Sân vườn & hiên: bàn ghế ngoài trời, chậu cây, bếp nướng, xích đu, võng, mái che nhẹ, hàng rào và cổng.
- [ ] Cầu thang & lan can: thẳng, chữ L, chữ U, xoắn, lan can kính/sắt và tự tạo khoảng mở tầng.
- [ ] Garage & xưởng: bàn nguội, tủ dụng cụ, giá kho, máy nén, thang, thùng đồ và khu sạc.
- [ ] Phương tiện: xe đạp, xe máy/scooter, sedan, hatchback, SUV, bán tải và xe van; hỗ trợ trạng thái có mặt, khóa và sạc.

Điều kiện hoàn thành: các mẫu gắn tường/trần/bề mặt đúng cao độ, cầu thang cắt sàn đúng và phương tiện không làm giảm rõ rệt FPS.

### Giai đoạn 5 — Các phòng chuyên dụng (`v1.23.x`)

Mục tiêu: hoàn tất độ phủ cả 16 nhóm.

- [ ] Văn phòng & gaming: bàn chữ L, ghế công thái học, tủ hồ sơ, nhiều màn hình, case máy tính và phụ kiện.
- [ ] Trẻ em: bàn học, giá đồ chơi, tủ thấp, thảm chơi, giường theo lứa tuổi và đèn ngủ.
- [ ] Thú cưng: giường, nhà, lồng, khay vệ sinh, bát ăn, trụ mèo và bể cá.
- [ ] Fitness: máy chạy, xe đạp, ghế tập, tạ, thảm yoga và giàn tập.
- [ ] Cinema & Hi-Fi: TV/máy chiếu, màn chiếu, loa thanh, loa đứng, loa surround, ampli, subwoofer và ghế rạp.

Điều kiện hoàn thành: tất cả 16 nhóm có nội dung hữu dụng; TV, máy chiếu và màn hình hỗ trợ Live Screens; thiết bị âm thanh liên kết media player.

### Giai đoạn 6 — Hoàn thiện và phát hành ổn định (`v1.24.0`)

- [ ] Đối chiếu độ phủ chức năng với mốc 474 mẫu/phương tiện công khai; không ép đủ số lượng bằng các biến thể vô nghĩa.
- [ ] Thêm bộ lọc theo phòng, kiểu gắn, khả năng tương tác và phong cách; giữ tìm kiếm không dấu tiếng Việt.
- [ ] Lazy-build hoặc chia cache hình học để thời gian mở editor và dung lượng bundle không tăng tuyến tính theo số mẫu.
- [ ] Kiểm thử trên desktop, tablet, điện thoại và chất lượng Low/Tablet/High.
- [ ] Cập nhật manual, ảnh minh họa, changelog và quy trình đóng góp mẫu mới.

Điều kiện hoàn thành: thư viện đầy đủ vẫn tải nhanh trên tablet, bản vẽ cũ không lỗi và mọi mẫu đều vượt qua Definition of Done bên dưới.

## Definition of Done cho từng mẫu

Một mẫu chỉ được tính là hoàn thành khi có đủ:

1. ID kỹ thuật ổn định, không phụ thuộc tên thương mại.
2. Tên tiếng Việt, tiếng Anh và từ khóa tìm kiếm không dấu.
3. Kích thước thực tế hợp lý và hỗ trợ resize/mirror khi có ý nghĩa.
4. Hình học 3D nhìn rõ ở cả Neon, Blueprint và Day.
5. Ký hiệu 2D nhận biết được khi thu nhỏ.
6. Kiểu gắn và cao độ đúng: sàn, bề mặt, tường hoặc trần.
7. Có dòng đối chiếu ảnh với trạng thái rõ ràng; mẫu sửa hình giữ ID cũ, mẫu mới có lý do công năng cụ thể.
8. Hành vi Home Assistant và trạng thái unavailable an toàn nếu mẫu có tương tác; mẫu kết hợp kiểm tra riêng từng entity role.
9. Test metadata, ảnh gallery kiểm tra trực quan và không phát sinh lỗi typecheck/build.
10. Không dùng hình học hoặc asset không rõ giấy phép, không đưa ảnh tham khảo thương mại vào bundle/repository.

## Thứ tự làm trong mỗi pull request

Mỗi PR chỉ nên chứa một họ sản phẩm khoảng 8–20 mẫu: catalog và bản dịch → renderer 3D → symbol 2D → entity behavior → test/gallery → build bundle Home Assistant. Cách chia này giúp review hình học, đo hiệu năng và hoàn tác độc lập. Sau mỗi giai đoạn mới tăng minor version; các lô nội dung và sửa lỗi trong cùng giai đoạn tăng patch version.

## Các tệp dự kiến tác động

- `frontend/src/model.ts`: lớp tương thích cho type, nhóm và kích thước cũ.
- `frontend/src/furniture/`: catalog, renderer và symbol mới.
- `frontend/src/viewer/furniture.ts`: bộ dựng hình học dùng chung và cầu nối renderer.
- `frontend/src/components/furniture2d.ts`: cầu nối ký hiệu 2D.
- `frontend/src/components/editor.ts`: thư viện, bộ lọc, gallery và xem trước.
- `frontend/src/devices.ts`: ánh xạ entity và trạng thái động.
- `frontend/src/packages.ts`: tiếp tục tương thích với pack nhập ngoài, không trộn ID built-in với `pack:*`.
- `frontend/lang/*.json` và `custom_components/neonplan3d/frontend/lang/*.json`: tên và giao diện song ngữ.
- `frontend/src/**/*.test.ts`: validator catalog, hình học, tương thích bản vẽ và entity.

## Mốc bắt đầu đề xuất

PR đầu tiên nên thực hiện **Giai đoạn 0 + khung catalog của Giai đoạn 1**, đồng thời tạo bảng kiểm kê từ ảnh gallery chính thức. PR thứ hai dùng cặp `fan_ceiling` và `fan_ceiling_light` để kiểm chứng trọn đường đi: sửa mẫu cũ không hỏng bản vẽ, thêm mẫu mới, ký hiệu 2D, hoạt ảnh rotor, ánh sáng và hai entity độc lập. Khi hai PR này ổn định mới triển khai từng họ sản phẩm của Giai đoạn 2.
