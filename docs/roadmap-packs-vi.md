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

- Thư viện tích hợp hiện có **249 mục** trong 10 nhóm giao diện, gồm nhiều đồ dùng đặc trưng tại Việt Nam như bàn thờ, xe máy, bồn nước, võng, tủ giày, giàn phơi, quạt trần có đèn, quạt treo tường, robot cắt cỏ, cụm hạ tầng mạng/an toàn, cụm thiết bị kỹ thuật, bộ điều khiển/cảm biến nhà thông minh, chín kiểu đèn, sáu lô phòng khách, ba lô phòng ngủ và ba lô phòng tắm theo gallery công khai.
- Có 21 gói bố trí nhanh cho phòng, gồm ba mức nhỏ/vừa/lớn cho bếp, phòng tắm, phòng ngủ và phòng khách; gói mới bỏ qua vị trí đã có đồ thay vì xếp chồng.
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
| Robot cắt cỏ có garage | Đã thêm `robot_mower` | Đã vẽ garage thấp với mái phẳng rộng, robot sáng màu đỗ hướng ra ngoài và dải trạng thái mảnh theo dáng nhận diện ở ảnh 1/3; hỗ trợ entity `lawn_mower`, tự tìm ngoài khu vực phòng và đổi trạng thái khi cắt cỏ/quay về. |
| Tủ mạng/NAS/access point trần | Đã thêm `network_cabinet`, `nas_server`, `access_point` | Mỗi mẫu có hình 2D/3D riêng, đúng kiểu đặt sàn/gắn trần, tự tìm entity theo khu vực và hiển thị dải trạng thái cyan khi trực tuyến. |
| Thermostat, báo khói, còi có đèn | Đã thêm `wall_thermostat`, `smoke_detector`, `siren_alarm` | Thermostat gắn tường theo climate entity; báo khói gắn trần dùng `device_class: smoke`; còi gắn tường hỗ trợ `siren`/`alarm_control_panel` và chớp đỏ khi cảnh báo. |
| Màn hình điều khiển, tủ điện, bơm nhiệt, bình tích nước và máy tạo ẩm | Đã thêm `smart_display`, `electrical_panel`, `heat_pump_outdoor`, `hot_water_tank`, `humidifier` | Giữ các đặc điểm nhận diện công năng từ gallery nhưng dựng lại low-poly độc lập; mỗi mẫu có symbol 2D, trạng thái động và bộ lọc entity phù hợp. |
| UPS, modem/router và quạt thông gió | Đã thêm `ups_unit`, `modem_router`, `ventilation_fan` | Bổ sung theo nhóm kỹ thuật của roadmap để hoàn chỉnh cụm vận hành: UPS dạng tháp, router có anten/đèn mạng và quạt gắn tường có lưới bảo vệ. |
| Công tắc, ổ cắm, cảm biến và chuông cửa | Đã thêm 8 mẫu | `wall_switch`, `wall_outlet`, `smart_plug`, cảm biến chuyển động/cửa/rò nước/nhiệt-ẩm và `video_doorbell` có hình 2D/3D riêng, cao độ lắp phù hợp, tự lọc entity theo domain/device class và chỉ thị trạng thái an toàn khi entity unavailable. |

`fan_ceiling_light` cần hai vai trò entity độc lập: fan entity điều khiển chuyển động cánh và light entity điều khiển độ sáng/màu của đèn. Nếu chỉ cấu hình một vai trò thì phần còn lại vẫn hiển thị ở trạng thái tắt, không làm mất cả mô hình. Đây cũng là mẫu thử cho catalog có nhiều capability trên cùng một vật thể.

### Đợt đối chiếu: Phòng khách

Đã xem [trang sản phẩm Living Room](https://mastershort.de/product/neonplan3d-living-room/) và các ảnh overview công khai ngày 08/10/2026. Danh sách công khai xác nhận nhu cầu tách sofa theo số chỗ, hướng góc, ghế đôn, kệ TV thấp và tủ kính; hình học trong fork vẫn được dựng mới bằng primitive và tỷ lệ riêng.

| Họ công năng | Hiện trạng trước đợt | Hành động trong fork |
|---|---|---|
| Sofa thẳng | Một ID `sofa` đổi kích thước tự do | Thêm `sofa_2`, `sofa_3`, `sofa_4` với số đệm cố định; giữ `sofa` tương thích. |
| Sofa góc | Một ID `sofa_l` thiên trái | Thêm `sofa_corner_left` và `sofa_corner_right` có footprint đối xứng; giữ `sofa_l` tương thích. |
| Ghế đôn | `stool` dạng ghế có chân | Thêm `ottoman` dạng pouf bọc nệm thấp, không thay `stool`. |
| Kệ và tủ phòng khách | `tv_board` gắn liền TV, `sideboard` kín | Thêm `tv_console` không có TV và `display_cabinet` hai cánh kính. |
| Bàn trà và bàn phụ | Một `coffee_table` chữ nhật | Thêm bàn trà tròn, bàn trà kính, bộ bàn lồng và bàn phụ tròn; giữ ID cũ để tương thích. |
| Kệ sách và kệ module | Một `shelf` đứng | Thêm kệ sách ngang rộng, kệ ô 2×2/4×2 và kệ treo tường đúng cao độ. |
| Bàn–tủ thờ Việt Nam | Có `altar` và `altar_wall` | Thêm bàn thờ chân thoáng và tủ thờ có ngăn theo kích thước nhà Việt; đây là nội dung độc lập của fork, không phải mẫu đối chiếu từ pack thương mại. |
| Sofa và ghế phong cách | Chỉ có sofa/ghế bành tổng quát | Thêm Chesterfield, sofa không tay, sofa chaise, sofa chữ U, ghế club, ghế wingback và ghế bập bênh bằng hình học độc lập. |
| Kệ và bàn sát tường | Chưa có kệ ô lớn, kệ ngăn phòng hay bàn console | Thêm kệ ô 4×4, kệ ngăn phòng 5 khoang và bàn console hẹp có ngăn kéo. |
| Ghế thư giãn và ghế ăn | Thiếu chaise longue, recliner, bean bag và ghế ăn hiện đại | Thêm sáu mẫu có silhouette riêng: chaise longue, cocktail chair, recliner kèm đôn, bean bag, ghế bọc nệm và ghế shell. |
| Lowboard và highboard | Chỉ có `tv_console`/`sideboard` đổi cỡ tự do | Thêm lowboard cố định 120/160/200 cm dùng renderer chung và highboard ba khoang; các lowboard là bề mặt đặt đồ. |
| Sofa nhung và sofa module | Thiếu biến thể bọc nhung và bộ sofa ghép nhiều khối | Thêm sofa nhung ba chỗ và sofa module năm khối với silhouette 2D/3D riêng. |
| Bàn và ghế ăn cố định | Chỉ có bàn/ghế dài đổi cỡ tự do | Thêm bàn ăn 120/160/200 cm, bàn gỗ nguyên khối 220 cm và băng ghế ăn 160 cm; các bàn dùng một renderer tham số hóa và đều là bề mặt đặt đồ. |
| TV, lò sưởi và tủ ngăn kéo | TV chỉ có dạng gắn tường hoặc liền kệ | Thêm TV chân đứng có Live Screen/media entity, lò sưởi củi và tủ ba ngăn kéo bằng hình học low-poly độc lập. |
| Điểm nhấn phòng khách | Thiếu vách media, piano và đồ trang trí có silhouette riêng | Thêm vách media có Live Screen, piano đứng kèm ghế, bình pampas, monstera lớn, thảm tròn và lò sưởi điện; tách toàn bộ lô vào module `living.ts` riêng cho 2D/3D. |

### Đợt đối chiếu: Phòng ngủ

Đã xem [trang sản phẩm Bedroom](https://mastershort.de/product/neonplan3d-bedroom/) ngày 08/10/2026. Đợt đầu ưu tiên các kích thước nệm và số cánh tủ có ý nghĩa khi bố trí mặt bằng; hình học được dựng mới và tham số hóa trong module Bedroom riêng.

| Họ công năng | Hiện trạng trước đợt | Hành động trong fork |
|---|---|---|
| Giường kích thước cố định | `bed_single`, `bed_double` và `bed` đổi cỡ tự do | Thêm giường 90/140/160/180/200 × 200 cm để footprint trong bản vẽ giữ đúng kích thước đã chọn. |
| Kiểu khung giường | Chỉ có một khung giường tổng quát | Thêm giường bọc nệm 180, box-spring 180 và futon 160 với đầu giường/độ cao riêng. |
| Tủ áo cánh mở | `wardrobe` đổi cỡ tự do | Thêm tủ áo 2 và 3 cánh; test khóa số đường chia cánh tăng đúng theo biến thể. |
| Tủ áo mở rộng | Thiếu tủ lớn, tủ gương và module góc | Thêm tủ 4/6 cánh, tủ có cánh gương và tủ áo góc chữ L bằng renderer tham số hóa. |
| Tủ đầu giường và tủ ngăn kéo | Chỉ có `nightstand`/`dresser` tổng quát | Thêm tủ đầu giường có ngăn, loại mỏng, loại treo đúng cao độ cùng tủ 3/6/5 ngăn có số hàng/cột cố định. |
| Tủ mở, cửa lùa và phụ kiện | Thiếu tủ walk-in, giá treo, gương đứng và bàn thay tã | Thêm tủ áo cửa lùa, tủ walk-in chữ L, giá treo, gương đứng, ghế cuối giường, bàn thay tã và góc đọc sách. |
| Nội thất phòng ngủ có đèn | Chưa có trạng thái đèn tích hợp | Thêm giường ambient, tủ áo có đèn, đồng hồ bình minh và bàn trang điểm có đèn gương; mỗi mẫu có vùng trạng thái riêng và bộ lọc tên entity. |

### Đợt đối chiếu: Phòng tắm

Đã xem [trang sản phẩm Bathroom](https://mastershort.de/product/neonplan3d-bathroom/) và toàn bộ gallery công khai ngày 08/10/2026. Danh sách công khai có 37 mục; hình học trong fork tiếp tục được dựng mới bằng primitive và tỷ lệ thực dụng riêng.

| Họ công năng | Hiện trạng trước đợt | Hành động trong fork |
|---|---|---|
| Lavabo và tủ dưới | Chỉ có một `washbasin` đổi kích thước tự do | Thêm vanity cố định 60/80/100 cm, lavabo đôi 120 cm và lavabo chân đứng; số chậu cùng số khoang tủ được tham số hóa. |
| Bồn tắm | Chỉ có một `bathtub` tổng quát | Thêm bồn xây âm chữ nhật và bồn góc có footprint riêng, giữ ID cũ tương thích. |
| Khu tắm kính | Chỉ có `shower` và vách kính rời | Thêm buồng góc 90 × 90, buồng hốc 120 × 90 và walk-in 140 × 90 với cách bố trí vách riêng. |
| Thiết bị vệ sinh và lưu trữ | Chỉ có một `wc`, chưa có bidet hoặc tủ chuyên dụng | Thêm bồn cầu két liền, bồn cầu treo, bidet, tủ cao và tủ lửng phòng tắm. |
| Gương, khăn và phụ kiện | Chưa có gương sáng hoặc giá khăn nhận diện riêng | Thêm gương tròn/80 cm có vùng trạng thái đèn, kệ tường và giá khăn kèm khăn. |
| Wellness và giặt | Thiếu sauna, whirlpool và cụm lưu trữ đồ giặt | Thêm sauna, bồn sục, tủ máy giặt, giỏ đồ, kệ thang khăn và tủ giặt có giỏ. |
| Thiết bị phòng tắm thông minh | Chỉ có thiết bị kỹ thuật dùng chung | Thêm tủ gương sáng, sưởi khăn điện, quạt phòng tắm, máy giặt dưới lavabo, sen mưa LED và gương LED có đồng hồ; mỗi mẫu có vùng trạng thái riêng. |

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
- [x] Lập bảng ánh xạ các mục hiện tại vào 16 nhóm đích; catalog kiểm kê hiện khóa 256 type, 249 mục thư viện, 7 mục nội bộ và trường hợp `worktop` đang nằm trong hai nhóm. Mỗi mục chỉ được tính một lần trong `REFERENCE_PACK_ITEMS`.
- [ ] Duyệt toàn bộ ảnh gallery công khai của 16 trang sản phẩm, không chỉ ảnh đại diện ở trang Packs; lập bảng `đã phù hợp / cần sửa hình / cần thêm mới` kèm URL và ngày xem.
- [ ] Chọn khoảng 10 mẫu hiện có cần sửa hình trước; `fan_ceiling` là mẫu thí điểm và phải giữ nguyên ID.
- [ ] Chụp bộ ảnh chuẩn ở góc nhìn 2D, 3D và chế độ Day/Neon để so sánh hồi quy.
- [ ] Ghi nguồn và giấy phép cho mọi asset ngoài mã thủ tục, nếu sau này có dùng texture hoặc mesh.

Điều kiện hoàn thành: catalog hiện tại có báo cáo kiểm kê tái tạo được trong CI và không thay đổi bản vẽ cũ.

### Giai đoạn 1 — Catalog tích hợp và công cụ kiểm thử (`v1.19.0`)

Mục tiêu: có nền tảng đủ gọn để thêm nhiều mẫu theo lô.

- [x] Tách metadata khỏi `frontend/src/model.ts`; giữ export tương thích để chưa phải sửa toàn bộ nơi dùng.
  - Type, nhóm thư viện, kích thước mặc định và capability tĩnh hiện nằm trong `frontend/src/furniture/metadata.ts`; catalog đọc trực tiếp module thuần này, còn `model.ts` re-export cùng tham chiếu để API cũ không đổi.
- [x] Tách renderer trong `frontend/src/viewer/furniture.ts` thành các họ tái sử dụng.
  - Toàn bộ 114 model 3D built-in không phải đèn đã chuyển sang registry theo các họ everyday, kitchen/bath, architecture/outdoor, climate, smart-home, energy, utility và miscellaneous; `furniture.ts` chỉ còn cầu nối dựng hình, màn hình động và pack.
- [x] Chuyển `frontend/src/components/furniture2d.ts` sang registry ký hiệu 2D.
  - Toàn bộ 127 symbol built-in hiện có đã chuyển sang registry theo họ và dùng chung primitive SVG; `furniture2d.ts` chỉ còn lookup cùng fallback cho pack nhập ngoài.
- [x] Cho nhóm thư viện, tìm kiếm và tên hiển thị đọc trực tiếp từ catalog; các export cũ vẫn được giữ để tương thích.
- [x] Thêm validator bắt buộc ID ổn định, kích thước hợp lệ, tên `vi`/`en`, renderer và symbol; CI chạy `npm run catalog` ở mỗi push/PR.
- [x] Thêm trang gallery phát triển để render toàn bộ catalog trong một lần.
  - Chạy `cd frontend && npm run gallery`, mở `http://127.0.0.1:4173`; trang dùng chính renderer 3D và registry symbol 2D của editor, có tìm kiếm/lọc nhóm và báo lỗi theo từng mẫu.
  - `npm run gallery:check` bundle trang độc lập mà không đưa mã gallery vào frontend production.

Điều kiện hoàn thành: 92 mục cũ hiển thị tương đương, typecheck/test/build qua và gallery không có mẫu mất hình.

### Giai đoạn 2 — Nhà ở Việt Nam thiết yếu (`v1.20.x`)

Mục tiêu: hoàn thiện bốn nhóm được dùng nhiều nhất trước, khoảng 100–120 mẫu/biến thể mới.

- [x] Phòng khách: sofa góc trái/phải, ghế đôn, bàn trà, kệ TV, tủ trang trí, vách lam, tủ thờ và bàn thờ nhiều cỡ.
  - Đợt 1 đã thêm sofa 2/3/4 chỗ, sofa góc trái/phải, ghế đôn bọc nệm, kệ TV thấp và tủ trưng bày; các ID cũ `sofa`, `sofa_l`, `stool`, `tv_board` vẫn được giữ nguyên.
  - Đợt 2 đã thêm bàn trà tròn/kính, bộ bàn lồng, bàn phụ tròn, kệ sách rộng, kệ ô 2×2/4×2, kệ treo tường và hai kiểu bàn–tủ thờ Việt Nam; các họ dùng renderer tham số hóa để dễ bổ sung kích cỡ tiếp theo.
  - Đợt 3 đã thêm bốn dáng sofa, ba ghế bành/ghế bập bênh, kệ ô 4×4, kệ ngăn phòng và bàn console; footprint sofa chaise/chữ U được khóa bằng test riêng.
  - Đợt 4 đã thêm sáu mẫu ghế thư giãn/ghế ăn, ba lowboard cố định và highboard; test khóa số khoang lowboard tăng theo chiều rộng.
  - Đợt 5 đã thêm sofa nhung ba chỗ, sofa module năm khối, bốn bàn ăn kích thước cố định, băng ghế ăn, tủ ba ngăn kéo, TV chân đứng và lò sưởi củi; TV hỗ trợ Live Screen và tự liên kết media player.
  - Đợt 6 đã thêm vách media có TV, piano đứng kèm ghế, bình pampas, monstera lớn, thảm tròn và lò sưởi điện; độ phủ phòng khách đạt mốc tham chiếu 69/69 và model/symbol mới nằm trong module Living riêng.
- [x] Phòng ngủ: giường đơn/đôi, giường tầng, tủ áo cánh mở/cửa lùa, bàn trang điểm, nôi và tủ đầu giường.
  - Đợt 1 đã thêm năm cỡ giường cố định, ba kiểu giường bọc/box-spring/futon và tủ áo 2/3 cánh; renderer và symbol nằm trong module Bedroom riêng.
  - Đợt 2 đã thêm tủ áo 4/6 cánh, tủ gương, tủ góc, ba kiểu tủ đầu giường và ba tủ ngăn kéo; tủ đầu giường treo có cao độ 48 cm và không tạo bóng tiếp xúc sàn.
  - Đợt 3 đã thêm 14 mẫu tủ mở/phụ kiện/nội thất có đèn; độ phủ phòng ngủ đạt mốc tham chiếu 41/41, bốn mẫu có đèn có vùng trạng thái entity riêng.
- [x] Phòng tắm/giặt: lavabo bàn/treo, bồn cầu, khu tắm kính, bình nóng lạnh, máy giặt cửa trên/cửa trước và giàn phơi.
  - Đợt 1 đã thêm năm loại lavabo/vanity, hai bồn tắm và ba khu tắm kính kích thước cố định; model/symbol mới nằm trong module Bathroom riêng, độ phủ đạt 15/37.
  - Đợt 2 đã thêm bồn cầu két liền/treo, bidet, hai tủ, hai gương sáng, kệ tường, giá khăn và bồn tắm độc lập; độ phủ đạt 25/37.
  - Đợt 3 đã thêm 13 mẫu wellness, lưu trữ đồ giặt và thiết bị điện; chuyển vách kính rời sang nhóm tham chiếu Kiến trúc để Bathroom đạt đúng mốc 37/37 mà không tạo biến thể vô nghĩa.
- [x] Đèn và làm mát: sửa hình `fan_ceiling`, thêm `fan_ceiling_light`, quạt treo tường và các kiểu đèn phổ biến; quạt có đèn phải điều khiển riêng phần quạt và phần sáng.
  - Đã hoàn thành `fan_ceiling`, biến thể 3/4/5 cánh, `fan_ceiling_light` với entity quạt/đèn riêng và `fan_wall`.
  - Đã thêm chín kiểu đèn theo gallery Smart Home: cột đèn, cặp thanh sáng TV, đèn bàn cầu, đèn xách tay, đèn ambient, khối đèn, panel tròn, cụm đèn sân vườn và đèn tường hắt hai đầu; mỗi kiểu có symbol 2D, hình học 3D và hiệu ứng sáng riêng.
- [x] Mở rộng gói bố trí nhanh theo diện tích phòng nhỏ, vừa và lớn; không tự ghi đè đồ đã đặt.
  - Đã thêm 12 gói nhỏ/vừa/lớn cho bếp, phòng tắm, phòng ngủ và phòng khách; thuật toán loại các món có footprint giao với đồ đang có trong phòng.

Điều kiện hoàn thành: có thể dựng hoàn chỉnh một căn hộ Việt Nam thông dụng mà không cần pack ngoài.

### Giai đoạn 3 — Smart Home và hệ kỹ thuật (`v1.21.x`)

Mục tiêu: đồ vật không chỉ đẹp mà còn phản ánh đúng trạng thái Home Assistant.

- [x] Smart Home: công tắc, ổ cắm, cảm biến, chuông cửa, khóa, rèm, camera, loa, robot hút bụi có dock, robot cắt cỏ có garage và màn hình điều khiển.
  - Đã hoàn thành robot hút bụi với trạm sạc dạng tháp, robot cắt cỏ có garage, màn hình điều khiển Live Screen và lô 8 mẫu công tắc/ổ cắm/cảm biến/chuông cửa có lọc entity theo domain/device class.
- [x] Hạ tầng mạng và an toàn theo ảnh kiểm kê: tủ mạng, NAS, access point trần, thermostat, báo khói và còi có đèn chớp.
- [ ] Kỹ thuật: tủ điện, UPS, modem/router, bơm, bồn nước, bình nước nóng, điều hòa, quạt thông gió và thiết bị năng lượng.
  - Đã hoàn thành tủ điện, UPS, modem/router, dàn nóng bơm nhiệt, bình tích nước nóng, quạt thông gió, máy tạo ẩm, tháp máy giặt–sấy và bộ pin mặt trời ban công; nhóm Utility đạt 18/18 mẫu tham chiếu, còn mở rộng thiết bị năng lượng và các biến thể bơm/bồn.
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

- `frontend/src/model.ts`: lớp tương thích re-export metadata furniture cũ.
- `frontend/src/furniture/`: metadata thuần, catalog, báo cáo và validator.
- `frontend/src/viewer/furniture-builder.ts` và `frontend/src/viewer/furniture-models/`: primitive dùng chung và renderer theo họ.
- `frontend/src/viewer/furniture.ts`: cầu nối renderer, màn hình động và pack.
- `frontend/src/components/furniture-symbols/`: symbol SVG và registry theo họ.
- `frontend/src/components/furniture2d.ts`: cầu nối ký hiệu 2D và fallback cho pack.
- `frontend/src/components/editor.ts`: thư viện, bộ lọc, gallery và xem trước.
- `frontend/src/devices.ts`: ánh xạ entity và trạng thái động.
- `frontend/src/packages.ts`: tiếp tục tương thích với pack nhập ngoài, không trộn ID built-in với `pack:*`.
- `frontend/lang/*.json` và `custom_components/neonplan3d/frontend/lang/*.json`: tên và giao diện song ngữ.
- `frontend/src/**/*.test.ts`: validator catalog, hình học, tương thích bản vẽ và entity.

## Mốc bắt đầu đề xuất

PR đầu tiên nên thực hiện **Giai đoạn 0 + khung catalog của Giai đoạn 1**, đồng thời tạo bảng kiểm kê từ ảnh gallery chính thức. PR thứ hai dùng cặp `fan_ceiling` và `fan_ceiling_light` để kiểm chứng trọn đường đi: sửa mẫu cũ không hỏng bản vẽ, thêm mẫu mới, ký hiệu 2D, hoạt ảnh rotor, ánh sáng và hai entity độc lập. Khi hai PR này ổn định mới triển khai từng họ sản phẩm của Giai đoạn 2.
