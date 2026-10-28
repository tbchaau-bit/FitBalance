# FitBalance - Quản lý thực đơn & Tính toán Calo thông minh

Ứng dụng web trực quan hỗ trợ lên kế hoạch thực đơn dinh dưỡng và tính toán lượng Calo (kcal), Macro (Protein, Carbs, Fat) trong ngày theo thời gian thực (Real-time).

---

## 🌟 Tính Năng Đã Triển Khai Trong Step 2

### 1. Logic tương tác Thêm/Xóa món ăn theo từng bữa:
- **Kế Hoạch Thực Đơn 4 Bữa Trực Quan**:
  - Giao diện 4 cột tương ứng: **Bữa Sáng 🍳**, **Bữa Trưa 🍲**, **Bữa Tối 🥗**, và **Bữa Phụ 🥑**.
  - Hiển thị danh sách các món ăn đã chọn dưới dạng **thẻ (card) gọn gàng, sắc nét**:
    - Ảnh món ăn thu nhỏ (thumbnail).
    - Tên món, định lượng phần ăn và chi tiết dinh dưỡng đa lượng (**P**, **C**, **F**).
    - Lượng calo tính theo khẩu phần hiện tại.
  - **Bộ điều khiển khẩu phần thông minh**: Nút bấm `[-]` `[ 1 ]` `[+]` cho phép điều chỉnh số lượng phần ăn ngay tại thẻ món.
  - **Nút xóa trực quan cho từng món**: Nút `[🗑️ Xóa]` màu đỏ nổi bật với hiệu ứng chuyển động mượt mà khi gỡ bỏ món ăn.
  - **Nút "+ Thêm món vào bữa này"**: Mở modal chọn món nhanh với ô tìm kiếm tức thì.
  - **Menu chọn bữa linh hoạt ở Thư viện**: Cho phép người dùng đưa bất kỳ món ăn nào vào bất kỳ bữa nào mong muốn.

### 2. Tự động tính toán Calo thời gian thực (Real-time):
- **Cộng dồn tự động**: Hàm `calculateAndSyncRealtimeCalo()` tự động tính toán tổng năng lượng của tất cả các món ăn được chọn trong ngày.
- **Cập nhật Progress Bar tức thì**:
  - Thanh tiến trình ngang (Linear Progress Bar) co giãn linh hoạt theo tỷ lệ phần trăm so với mục tiêu (2,000 kcal mặc định).
  - Vòng tròn tiến trình SVG (Circular Progress Gauge) xoay mượt mà với stroke-dashoffset động.
  - Tự động đổi màu cảnh báo (xanh lá khi cân bằng, cam/đỏ khi vượt quá 100% mục tiêu).
  - Hiển thị lượng Calo còn lại (hoặc vượt mức) kèm thông điệp nhắc nhở sức khỏe thông minh.
- **Tự động cân bằng Dinh Dưỡng Đa Lượng (Macros)**:
  - Cập nhật thời gian thực lượng Đạm (Protein), Tinh bột (Carbs) và Chất béo (Fat).

---

## 🚀 Hướng Dẫn Sử Dụng & Khởi Chạy

Server nội bộ đang phục vụ ứng dụng tại:
👉 **`http://localhost:8080`**

Lệnh khởi động server bất kỳ lúc nào:
```powershell
python -m http.server 8080
```
Sau đó truy cập `http://localhost:8080` trên trình duyệt để trải nghiệm tính năng thêm/xóa món ăn và theo dõi thanh tiến trình Calo nhảy số trực tiếp!
