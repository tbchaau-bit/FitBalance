# FitBalance - Quản lý thực đơn & Tính toán Calo thông minh

Ứng dụng web trực quan hỗ trợ lên kế hoạch thực đơn dinh dưỡng, tính toán lượng Calo (kcal) và Dinh dưỡng đa lượng (Protein, Carbs, Fat) trong ngày theo thời gian thực (Real-time), tích hợp tự động lưu trữ cục bộ (LocalStorage).

Link Repository: [https://github.com/tbchaau-bit/FitBalance/tree/main/FitBalance](https://github.com/tbchaau-bit/FitBalance/tree/main/FitBalance)

---

## 🌟 Tổng Hợp Các Tính Năng Đã Triển Khai (Step 1 -> Step 3)

### 📌 Step 1: Khởi Tạo Cấu Trúc & Giao Diện Bắt Mắt
- **Thiết kế Clean UI**: Tông màu xanh lá tươi sáng (Emerald & Mint: `#10B981`, `#ECFDF5`) kết hợp nền trắng, Google Fonts (**Plus Jakarta Sans** & **Outfit**), giao diện tiếng Việt 100%.
- **Dashboard Tổng Quan**: Vòng tròn tiến trình SVG (Circular Gauge) và thanh tiến trình (Progress Bar) theo dõi lượng Calo đã nạp / mục tiêu (2,000 kcal mặc định).
- **Thư Viện Món Ăn Phong Phú**: Hơn 20 món ăn truyền thống Việt Nam và Eat Clean thịnh hành, chia theo 4 bữa với hình ảnh sắc nét và đầy đủ chỉ số Macros.

### 📌 Step 2: Tương Tác Thêm/Xóa Món & Tính Toán Calo Real-time
- **Kế Hoạch Thực Đơn 4 Bữa Trực Quan**: 4 cột riêng biệt cho **Bữa Sáng 🍳**, **Bữa Trưa 🍲**, **Bữa Tối 🥗**, và **Bữa Phụ 🥑**.
- **Thẻ hiển thị món ăn gọn gàng (Card)**:
  - Ảnh thu nhỏ (thumbnail), tên món, định lượng phần ăn, chỉ số **Protein**, **Carbs**, **Fat**.
  - Bộ điều khiển khẩu phần thông minh: Nút `[-]` `[ 1 ]` `[+]` tăng giảm khẩu phần tức thì.
  - Nút `[🗑️ Xóa]` màu đỏ cho từng món với chuyển động mượt mà.
- **Tính toán Calo tự động thời gian thực**: Hàm `calculateAndSyncRealtimeCalo()` tự động cộng dồn tổng calo và cập nhật ngay lập tức thanh tiến trình khi thêm/bớt món.

### 📌 Step 3: Tích Hợp Lưu Trữ Cục Bộ (LocalStorage)
- **Tự động lưu trữ (Auto-save)**: Mỗi khi người dùng thêm món, xóa món, tăng giảm khẩu phần, thêm món ăn tự chọn hoặc thay đổi mục tiêu Calo, toàn bộ dữ liệu được tự động đồng bộ vào `localStorage` của trình duyệt.
- **Tự động khôi phục (Auto-restore on Reload/F5)**: Khi tải lại trang hoặc mở lại trình duyệt vào lần sau, ứng dụng tự động khôi phục nguyên vẹn thực đơn đã chọn và tính toán lại chính xác tổng calo và tiến trình.
- **Huy hiệu trạng thái lưu trữ**: Badge `● Đã lưu LocalStorage ✓` hiển thị trực tiếp ở thanh điều hướng.
- **Nút "Đặt Lại / Reset"**: Nút `🔄 Đặt Lại / Reset` ở Header và bảng kế hoạch cho phép người dùng làm mới nhanh thực đơn và xóa dữ liệu đã lưu trong LocalStorage khi muốn lên thực đơn mới cho ngày tiếp theo.

---

## 📁 Cấu Trúc Mã Nguồn Dự Án

```
FitBalance/
├── index.html         # Giao diện HTML5 Semantic, Dashboard, Meal Planner, Modals
├── css/
│   └── style.css      # Hệ thống thiết kế Fresh Clean UI, animations, responsive
├── js/
│   ├── database.js    # Mock Database các món ăn Việt Nam & Eat Clean
│   └── app.js         # Logic tính toán real-time, bộ lọc, tương tác & LocalStorage
├── images/            # Hình ảnh chất lượng cao các món ăn Eat Clean & Dinh dưỡng
└── README.md          # Tài liệu hướng dẫn sử dụng và khởi chạy
```

---

## 🚀 Hướng Dẫn Sử Dụng & Khởi Chạy

Server nội bộ đang phục vụ ứng dụng tại:
👉 **`http://localhost:8080`**

Lệnh khởi động server nếu cần:
```powershell
python -m http.server 8080
```
Sau đó truy cập `http://localhost:8080` trên trình duyệt để trải nghiệm tính năng!
