# Kiểm kê gallery nội thất công khai

Ngày đối chiếu: **09/10/2026**. Bảng này là dấu vết tái tạo được cho Giai đoạn 0 của roadmap. Số ảnh là số URL `data-large_image` duy nhất trong gallery sản phẩm tại thời điểm xem; ảnh chỉ được tải vào thư mục tạm để tạo contact sheet và **không được đưa vào repository**.

Trạng thái có nghĩa:

- `đã phù hợp`: catalog hiện có phủ các công năng nhận diện được; không yêu cầu cùng mesh, màu hoặc số biến thể.
- `cần sửa hình`: giữ ID hiện tại và cải thiện silhouette/hành vi.
- `cần thêm mới`: còn khoảng trống công năng có ích, không dùng biến thể chỉ đổi kích thước để lấp số.

| Nhóm | Nguồn chính thức | Ảnh gallery | Độ phủ catalog | Trạng thái/kết luận |
|---|---|---:|---:|---|
| Phòng khách | [Living Room](https://mastershort.de/product/neonplan3d-living-room/) | 12 | 69/69 | Đã phù hợp; sofa, bàn, tủ, TV/media, đèn và trang trí đều có họ chức năng tương ứng. |
| Nhà bếp | [Kitchen](https://mastershort.de/product/neonplan3d-kitchen/) | 11 | 19/66 | Cần thêm mới; giữ module tủ tổng quát nhưng bổ sung các thiết bị/kiểu lưu trữ có công năng riêng trong Giai đoạn 6. |
| Phòng ngủ | [Bedroom](https://mastershort.de/product/neonplan3d-bedroom/) | 9 | 41/41 | Đã phù hợp; kích thước giường, tủ áo, tủ đầu giường và đồ có đèn đã tách rõ. |
| Phòng tắm | [Bathroom](https://mastershort.de/product/neonplan3d-bathroom/) | 9 | 37/37 | Đã phù hợp; vanity, bồn, khu tắm, lưu trữ, wellness và thiết bị điện đều có model riêng. |
| Smart Home & công nghệ | [Smart Home & Tech](https://mastershort.de/product/neonplan3d-smart-home-tech/) | 8 | 45/30 | Đã phù hợp và vượt mốc; `fan_ceiling` cùng `robot_vacuum` là hai ID cũ đã sửa hình. |
| Tiện ích & kỹ thuật | [Utility & Building Services](https://mastershort.de/product/neonplan3d-utility-building-services/) | 7 | 18/18 | Đã phù hợp; cấp điện/nước, mạng, HVAC, giặt và năng lượng có hành vi entity tương ứng. |
| Kiến trúc & hoàn thiện | [Architecture & Fit-out](https://mastershort.de/product/neonplan3d-architecture-fit-out/) | 7 | 17/17 | Đã phù hợp; cấu kiện, vách, hốc, bục và lan can được dựng thủ tục. |
| Sân vườn & hiên | [Garden & Patio](https://mastershort.de/product/neonplan3d-garden-patio/) | 8 | 37/33 | Đã phù hợp và vượt mốc bằng cây xanh, tiện ích hiên và công trình nhẹ có silhouette riêng. |
| Cầu thang & lan can | [Stairs & Railings](https://mastershort.de/product/neonplan3d-stairs-railings/) | 13 | 12/12 | Đã phù hợp; mọi họ cầu thang cắt sàn theo footprint và lấy chiều cao tầng kế. |
| Garage & xưởng | [Garage & Workshop](https://mastershort.de/product/neonplan3d-garage-workshop/) | 7 | 17/17 | Đã phù hợp; bàn nguội, tủ/kệ, máy xưởng, thang và phụ kiện xe có model riêng. |
| Phương tiện | [Vehicles](https://mastershort.de/product/neonplan3d-vehicles/) | 7 | 15/15 | Đã phù hợp; các thân xe, xe hai bánh và chỗ đỗ có trạng thái Car Pro. |
| Văn phòng & gaming | [Office & Gaming](https://mastershort.de/product/neonplan3d-office-gaming/) | 8 | 25/25 | Đã phù hợp; bàn/ghế, monitor, gaming, in ấn và hạ tầng có footprint riêng. |
| Phòng trẻ em | [Kids Room](https://mastershort.de/product/neonplan3d-kids-room/) | 7 | 18/18 | Đã phù hợp; ngủ, học, chơi, lưu trữ, đèn và baby monitor đã phủ đủ. |
| Thú cưng | [Pets](https://mastershort.de/product/neonplan3d-pets/) | 7 | 24/24 | Đã phù hợp; chó/mèo, ăn uống, lồng/chuồng và sinh cảnh kính đã phủ đủ. |
| Fitness | [Fitness](https://mastershort.de/product/neonplan3d-fitness/) | 7 | 17/17 | Đã phù hợp; cardio, sức mạnh, tập nhẹ, phục hồi và thiết bị thông minh đã phủ đủ. |
| Home Cinema & Hi-Fi | [Home Cinema & Hi-Fi](https://mastershort.de/product/neonplan3d-home-cinema-hifi/) | 9 | 35/35 | Đã phù hợp; màn hình, máy chiếu, loa, nguồn phát, ghế, âm học và trần sao đã phủ đủ. |

## Danh sách rà soát ID tương thích ưu tiên

Mười ID cũ sau được chọn để kiểm tra trước vì xuất hiện nhiều trong bản vẽ hiện hữu. Không đổi ID hay schema lưu trữ:

| ID | Kết quả rà soát |
|---|---|
| `fan_ceiling` | Đã sửa hình 5 cánh/motor nhưng giữ biến thể 3/4 cánh và hoạt ảnh. |
| `robot_vacuum` | Đã thêm dock dạng tháp, giữ chuyển động và tương thích kích thước cũ. |
| `sofa` | Giữ model tổng quát; thêm ID kích thước cố định thay vì đổi ý nghĩa ID cũ. |
| `sofa_l` | Giữ hướng cũ; thêm hai ID trái/phải rõ ràng. |
| `coffee_table` | Giữ bàn chữ nhật; thêm các họ tròn/kính/bàn lồng riêng. |
| `bathtub` | Giữ bồn tổng quát; thêm bồn âm, góc và độc lập bằng ID mới. |
| `crib` | Hình và footprint cũ đã phù hợp, giữ nguyên cho bản vẽ phòng trẻ em. |
| `bunk_bed` | Hình và footprint cũ đã phù hợp, giữ nguyên cho bản vẽ phòng trẻ em. |
| `stairs` | Giữ ID/hình thẳng, bổ sung cơ chế cắt sàn chung cho mọi họ cầu thang. |
| `tv_board` | Giữ TV liền kệ và liên kết media; thêm TV/kệ độc lập bằng ID mới. |

## Kết luận cho lô nội dung tiếp theo

Không cần sao chép đủ từng biến thể thương mại. Khoảng trống chức năng còn đáng làm là Kitchen: tủ rượu, máy pha cà phê, đảo bar, thùng rác phân loại và một số module tủ có mục đích bố trí khác nhau. Các nhóm khác chuyển sang kiểm thử, lọc catalog và tối ưu tải ở Giai đoạn 6.
