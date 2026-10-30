/**
 * FitBalance - Danh Sách Món Ăn & Nước Uống Đa Dạng
 * Bao gồm đầy đủ Món chính, Cơm/Phở, Đồ ăn vặt, Tráng miệng, Nước uống và Thực đơn Eat Clean
 */

// 1. Danh sách món ăn tổng hợp kèm lượng Calo chuẩn
const foodList = [
  // --- Món chính / Cơm / Phở ---
  { name: "Phở bò truyền thống", calories: 400 },
  { name: "Cơm tấm sườn bì chả", calories: 650 },
  { name: "Bún chả Hà Nội", calories: 450 },
  { name: "Bánh mì pate trứng", calories: 350 },
  { name: "Mì tôm trứng luộc", calories: 380 },
  { name: "Cơm trắng (1 bát)", calories: 130 },
  { name: "Ức gà áp chảo (100g)", calories: 165 },
  { name: "Ức gà luộc", calories: 150 },
  { name: "Salad rau trộn sốt mè", calories: 120 },

  // --- Eat Clean & Dinh Dưỡng Cao ---
  { name: "Yến Mạch Ngâm Sữa Chua & Quả Mọng", calories: 320 },
  { name: "Canh Gà Hầm Hạt Sen Nấm Đông Cô", calories: 330 },
  { name: "Táo Xanh Giòn & Bơ Đậu Phộng Mộc", calories: 175 },
  { name: "Hạt Dinh Dưỡng Mix Sấy Mộc", calories: 155 },
  { name: "Nước Ép Cần Tây Táo Xanh & Dưa Leo", calories: 75 },
  { name: "Cơm Gạo Lứt Ức Gà Áp Chảo Mè Rang", calories: 510 },
  { name: "Cá Hồi Nướng Măng Tây Hạt Quinoa", calories: 540 },
  { name: "Salad Cá Ngừ Trứng Luộc Sốt Mè Rang", calories: 320 },

  // --- Đồ ăn vặt / Tráng miệng ---
  { name: "Bánh ngọt su kem", calories: 250 },
  { name: "Trà sữa trân châu đường đen (1 ly lớn)", calories: 480 },
  { name: "Khoai tây chiên (vừa)", calories: 340 },
  { name: "Bánh flan (1 cái)", calories: 180 },

  // --- Nước uống các loại ---
  { name: "Trà sữa truyền thống", calories: 350 },
  { name: "Trà đào cam sả", calories: 150 },
  { name: "Cà phê sữa đá", calories: 180 },
  { name: "Cà phê đen không đường", calories: 10 },
  { name: "Nước ngọt có gas (Coca/Pepsi - 1 lon)", calories: 140 },
  { name: "Nước ép cam tươi", calories: 110 },
  { name: "Sinh tố bơ", calories: 270 },
  { name: "Nước dừa tươi", calories: 60 },
  { name: "Nước lọc", calories: 0 }
];

// 2. Cơ sở dữ liệu chi tiết cho FitBalance Web App (kèm hình ảnh, định lượng & dinh dưỡng đa lượng Protein, Carbs, Fat)
const FOOD_DATABASE = [
  // ==========================================
  // --- BỮA SÁNG (BREAKFAST) ---
  // ==========================================
  {
    id: "main-01",
    name: "Phở bò truyền thống",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 400,
    protein: 28,
    carbs: 54,
    fat: 8,
    portion: "1 tô tiêu chuẩn (~400g)",
    tags: ["Món Chính", "Món Việt", "Cơm/Phở"],
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&auto=format&fit=crop&q=80",
    description: "Phở bò Hà Nội gia truyền, nước dùng ninh xương thanh trong thơm mùi hoa hồi thảo quả, thịt bò nạc mềm và bánh phở dẻo dai."
  },
  {
    id: "bf-03",
    name: "Yến Mạch Ngâm Sữa Chua & Quả Mọng",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 320,
    protein: 16,
    carbs: 50,
    fat: 6,
    portion: "1 hũ (~250g)",
    tags: ["Eat Clean", "Ít Béo", "Giàu Chất Xơ"],
    image: "images/yen_mach_sua_chua.jpg",
    description: "Yến mạch cán dẹt ngâm sữa tươi và sữa chua Hy Lạp sánh mịn qua đêm, phủ việt quất, dâu tây mọng nước và hạt chia dinh dưỡng."
  },
  {
    id: "main-04",
    name: "Bánh mì pate trứng",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 350,
    protein: 18,
    carbs: 38,
    fat: 14,
    portion: "1 ổ vừa (~180g)",
    tags: ["Món Chính", "Tiện Lợi", "Bữa Sáng Nhanh"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
    description: "Bánh mì Việt Nam vỏ giòn ruột xốp, kẹp pate thơm béo, 1 quả trứng ốp la lòng đào, dưa leo tươi mát và sốt ớt thơm cay."
  },
  {
    id: "main-05",
    name: "Mì tôm trứng luộc",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 380,
    protein: 16,
    carbs: 50,
    fat: 13,
    portion: "1 tô vừa (~350g)",
    tags: ["Món Chính", "Nhanh Gọn", "Quen Thuộc"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80",
    description: "Mì tôm sợi dai đậm vị nước dùng chua cay cay nồng, ăn kèm 1 quả trứng gà luộc chín tới bổ dưỡng và hành hoa xanh mướt."
  },
  {
    id: "drink-03",
    name: "Cà phê sữa đá",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 180,
    protein: 3,
    carbs: 28,
    fat: 6,
    portion: "1 ly (~200ml)",
    tags: ["Nước Uống", "Cà Phê", "Tỉnh Táo"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    description: "Cà phê phin Robusta đậm chất Việt Nam nhỏ giọt từ tốn trên lớp sữa đặc béo ngọt, thêm đá mát lạnh giúp bạn bừng tỉnh năng lượng đầu ngày."
  },
  {
    id: "drink-04",
    name: "Cà phê đen không đường",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 10,
    protein: 1,
    carbs: 1,
    fat: 0,
    portion: "1 ly (~150ml)",
    tags: ["Nước Uống", "Zero Calo", "Đốt Mỡ", "Tập Luyện"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    description: "Cà phê đen nguyên chất không đường, vị đắng thanh thuần túy, thúc đẩy trao đổi chất và hỗ trợ đốt mỡ hiệu quả trước khi vận động."
  },
  {
    id: "drink-06",
    name: "Nước ép cam tươi",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 110,
    protein: 2,
    carbs: 26,
    fat: 0,
    portion: "1 ly (~250ml)",
    tags: ["Nước Uống", "Vitamin C", "Tăng Sức Đề Kháng"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80",
    description: "Cam sành tươi vắt nguyên chất dồi dào Vitamin C và khoáng chất tự nhiên, giúp tăng cường hệ miễn dịch và làm sáng mịn làn da."
  },

  // ==========================================
  // --- BỮA TRƯA (LUNCH) ---
  // ==========================================
  {
    id: "main-02",
    name: "Cơm tấm sườn bì chả",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 650,
    protein: 38,
    carbs: 78,
    fat: 22,
    portion: "1 đĩa đầy đủ (~450g)",
    tags: ["Món Chính", "Món Việt", "Đậm Đà"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description: "Cơm tấm thơm hạt tấm vỡ, sườn nướng mật ong vàng óng, bì heo thơm thính gạo, chả trứng bùi bùi và nước mắm chua ngọt."
  },
  {
    id: "main-03",
    name: "Bún chả Hà Nội",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 450,
    protein: 26,
    carbs: 58,
    fat: 12,
    portion: "1 phần (~380g)",
    tags: ["Món Chính", "Món Việt", "Hương Vị Thủ Đô"],
    image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=600&auto=format&fit=crop&q=80",
    description: "Chả viên và chả miếng nướng than hoa thơm lừng, ngập trong bát nước chấm ấm vị chua ngọt kèm đu đủ giòn và đĩa bún tươi."
  },
  {
    id: "main-06",
    name: "Cơm trắng (1 bát)",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 130,
    protein: 3,
    carbs: 28,
    fat: 0,
    portion: "1 chén cơm vừa (~100g)",
    tags: ["Món Chính", "Tinh Bột", "Cơ Bản"],
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&auto=format&fit=crop&q=80",
    description: "Cơm trắng dẻo thơm nấu từ gạo Tám Thơm hạt ngọc trời, cung cấp nguồn năng lượng carbohydrate cơ bản cho cơ thể."
  },
  {
    id: "lu-01",
    name: "Cơm Gạo Lứt Ức Gà Áp Chảo Mè Rang",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 510,
    protein: 45,
    carbs: 54,
    fat: 10,
    portion: "1 phần tiêu chuẩn (~380g)",
    tags: ["Eat Clean", "Gym & Tăng Cơ", "Best Seller"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    description: "150g ức gà mềm mọng áp chảo cùng sốt mè rang thanh bùi, 1 chén cơm gạo lứt huyết rồng dẻo thơm và bông cải xanh hấp giòn ngọt."
  },
  {
    id: "lu-02",
    name: "Cá Hồi Nướng Măng Tây Hạt Quinoa",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 540,
    protein: 38,
    carbs: 36,
    fat: 24,
    portion: "1 phần (~350g)",
    tags: ["Giàu Omega-3", "Chất Lượng Cao", "Eat Clean"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
    description: "Phi lê cá hồi Na Uy tươi nướng lá xạ hương, măng tây xanh mướt giòn thơm và hạt diêm mạch (quinoa) giàu khoáng chất."
  },

  // ==========================================
  // --- BỮA TỐI (DINNER) ---
  // ==========================================
  {
    id: "di-03",
    name: "Canh Gà Hầm Hạt Sen Nấm Đông Cô",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 330,
    protein: 30,
    carbs: 32,
    fat: 8,
    portion: "1 tô canh (~400g)",
    tags: ["Món Việt", "Bồi Bổ", "Nhẹ Bụng", "Ngủ Ngon"],
    image: "images/canh_ga_hat_sen.jpg",
    description: "Gà ta bỏ da hầm liu riu cùng hạt sen Huế bở tơi, nấm đông cô tươi thơm ngát, táo đỏ và kỷ tử, giúp an thần ngủ sâu giấc và bồi bổ sức khỏe."
  },
  {
    id: "main-07",
    name: "Ức gà áp chảo (100g)",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 4,
    portion: "100g thịt nạc",
    tags: ["Eat Clean", "Giàu Protein", "Tăng Cơ Giảm Mỡ"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    description: "100g ức gà tươi ướp muối tiêu và lá thơm oregano áp chảo vàng xém hai mặt, thịt mềm ngọt mọng nước không hề bị khô."
  },
  {
    id: "main-08",
    name: "Ức gà luộc",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 150,
    protein: 32,
    carbs: 0,
    fat: 2,
    portion: "100g thịt nạc luộc",
    tags: ["Eat Clean", "Zero Carb", "Gym/Fitness"],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
    description: "Ức gà ta luộc với gừng và hoa hồi khử tanh, giàu protein nguyên chất, cực kỳ ít chất béo, lý tưởng cho người tập gym và siết cân."
  },
  {
    id: "main-09",
    name: "Salad rau trộn sốt mè",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 120,
    protein: 3,
    carbs: 12,
    fat: 7,
    portion: "1 đĩa lớn (~180g)",
    tags: ["Eat Clean", "Chất Xơ", "Nhẹ Bụng"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    description: "Xà lách Romaine giòn ngọt, cà chua bi, dưa leo mát lành rưới nước sốt mè rang thơm bùi, bổ sung chất xơ và vitamin dồi dào."
  },
  {
    id: "di-01",
    name: "Salad Cá Ngừ Trứng Luộc Sốt Mè Rang",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 320,
    protein: 34,
    carbs: 14,
    fat: 12,
    portion: "1 tô lớn (~320g)",
    tags: ["Low Carb", "Giảm Mỡ", "Eat Clean"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    description: "Cá ngừ đại dương ngâm nước khoáng tách muối, trứng gà luộc lòng đào, xà lách Romaine, cà chua cherry và dầu giấm sốt mè rang bùi bùi."
  },

  // ==========================================
  // --- BỮA PHỤ / ĐỒ ĂN VẶT & NƯỚC UỐNG (SNACK & DRINKS) ---
  // ==========================================
  {
    id: "sn-03",
    name: "Táo Xanh Giòn & Bơ Đậu Phộng Mộc",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 175,
    protein: 6,
    carbs: 22,
    fat: 8,
    portion: "1 đĩa nhỏ (~150g)",
    tags: ["Eat Clean", "Chất Xơ Cao", "Giòn Ngọt", "Chống Đói"],
    image: "images/tao_xanh_bo_dau_phong.jpg",
    description: "Táo xanh Granny Smith chua ngọt giòn rụm thái lát mỏng quệt kèm 1 thìa bơ đậu phộng nguyên chất 100% không đường."
  },
  {
    id: "sn-04",
    name: "Hạt Dinh Dưỡng Mix Sấy Mộc",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 155,
    protein: 5,
    carbs: 7,
    fat: 13,
    portion: "1 gói nhỏ (~28g)",
    tags: ["Eat Clean", "Chất Béo Tốt", "Ăn Liền", "Văn Phòng"],
    image: "images/hat_dinh_duong_mix.jpg",
    description: "Hỗn hợp hạnh nhân rang mộc, hạt điều Bình Phước bùi béo, quả óc chó và mắc ca sấy giòn thơm, bổ sung vitamin E và omega-3 lành mạnh."
  },
  {
    id: "sn-05",
    name: "Nước Ép Cần Tây Táo Xanh & Dưa Leo",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 75,
    protein: 2,
    carbs: 17,
    fat: 0,
    portion: "1 chai (~330ml)",
    tags: ["Nước Uống", "Detox", "Zero Fat", "Thanh Lọc"],
    image: "images/nuoc_ep_can_tay.jpg",
    description: "Nước ép nguyên chất ép chậm từ cần tây tươi Đà Lạt, dưa leo mát lành và táo xanh thanh lọc đường ruột, làm sáng mịn làn da."
  },
  {
    id: "drink-02",
    name: "Trà đào cam sả",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 150,
    protein: 1,
    carbs: 36,
    fat: 0,
    portion: "1 ly (~500ml)",
    tags: ["Nước Uống", "Thanh Mát", "Ít Béo"],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80",
    description: "Hương thơm nồng nàn của sả cây, vị chua thanh mát của cam vàng tươi mọng hòa cùng những miếng đào ngâm giòn ngọt thanh lọc cơ thể."
  },
  {
    id: "snack-01",
    name: "Bánh ngọt su kem",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 250,
    protein: 5,
    carbs: 28,
    fat: 14,
    portion: "2 cái vừa (~70g)",
    tags: ["Đồ Ăn Vặt", "Tráng Miệng", "Bánh Ngọt"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    description: "Vỏ bánh choux nướng xốp vàng rụm ôm trọn lớp nhân kem sữa tươi custard béo ngậy, ngọt ngào tan ngay nơi đầu lưỡi."
  },
  {
    id: "snack-02",
    name: "Trà sữa trân châu đường đen (1 ly lớn)",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 480,
    protein: 6,
    carbs: 88,
    fat: 12,
    portion: "1 ly lớn (~700ml)",
    tags: ["Đồ Ăn Vặt", "Nước Uống", "Năng Lượng Cao"],
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&auto=format&fit=crop&q=80",
    description: "Sữa tươi thanh trùng béo ngậy kết hợp dòng siro đường đen đậm đặc và trân châu dẻo quánh nấu kỹ, vị ngọt bùi khó cưỡng."
  },
  {
    id: "snack-03",
    name: "Khoai tây chiên (vừa)",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 340,
    protein: 4,
    carbs: 44,
    fat: 16,
    portion: "1 phần vừa (~115g)",
    tags: ["Đồ Ăn Vặt", "Giòn Ngon", "Fast Food"],
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80",
    description: "Khoai tây cắt lát chiên ngập dầu giòn rụm màu vàng óng, rắc chút muối biển tinh tế, chấm cùng tương cà chua cay kích thích vị giác."
  },
  {
    id: "snack-04",
    name: "Bánh flan (1 cái)",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 180,
    protein: 6,
    carbs: 24,
    fat: 7,
    portion: "1 hũ (~100g)",
    tags: ["Tráng Miệng", "Mềm Mịn", "Đồ Ăn Vặt"],
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&auto=format&fit=crop&q=80",
    description: "Bánh flan trứng sữa caramel mềm mướt như lụa, vị ngọt dịu thơm hương vani và sốt caramel hổ phách đăng đắng thanh nhẹ."
  },
  {
    id: "drink-01",
    name: "Trà sữa truyền thống",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 350,
    protein: 5,
    carbs: 62,
    fat: 9,
    portion: "1 ly vừa (~500ml)",
    tags: ["Nước Uống", "Trà Sữa", "Giải Khát"],
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&auto=format&fit=crop&q=80",
    description: "Trà đen ủ đậm đà hòa quyện cùng sữa béo thơm ngọt, thức uống được giới trẻ yêu thích hàng đầu cho những buổi trò chuyện."
  },
  {
    id: "drink-05",
    name: "Nước ngọt có gas (Coca/Pepsi - 1 lon)",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 140,
    protein: 0,
    carbs: 36,
    fat: 0,
    portion: "1 lon (330ml)",
    tags: ["Nước Uống", "Giải Khát", "Có Gas"],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80",
    description: "Nước giải khát có gas hương cola sảng khoái với bọt ga tê nồng, mang lại cảm giác đã khát tức thì sau các bữa ăn nhiều đạm."
  },
  {
    id: "drink-07",
    name: "Sinh tố bơ",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 270,
    protein: 4,
    carbs: 34,
    fat: 14,
    portion: "1 ly (~300ml)",
    tags: ["Nước Uống", "Chất Béo Tốt", "Bổ Dưỡng"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    description: "Bơ sáp Đắk Lắk dẻo quánh xay cùng sữa tươi và đá tuyết, sánh mịn béo ngậy, cung cấp nguồn chất béo không bão hòa đơn lành mạnh."
  },
  {
    id: "drink-08",
    name: "Nước dừa tươi",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 60,
    protein: 1,
    carbs: 14,
    fat: 0,
    portion: "1 trái (~300ml)",
    tags: ["Nước Uống", "Điện Giải", "Thanh Mát"],
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&auto=format&fit=crop&q=80",
    description: "Nước dừa xiêm ngọt thanh tự nhiên, giàu ion điện giải Kali và Magie giúp bù nước cấp tốc và thanh nhiệt cơ thể trong những ngày oi ả."
  },
  {
    id: "drink-09",
    name: "Nước lọc",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    portion: "1 ly (~250ml)",
    tags: ["Nước Uống", "Zero Calo", "Thiết Yếu"],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=600&auto=format&fit=crop&q=80",
    description: "Nước tinh khiết 0 kcal đóng vai trò quan trọng hàng đầu cho quá trình trao đổi chất, thanh lọc độc tố và duy trì sức khỏe tối ưu mỗi ngày."
  }
];

// 3. Khởi tạo thực đơn 4 món mẫu chuẩn từ danh sách mới (Tổng = 1,650 kcal)
const INITIAL_SELECTED_FOOD_IDS = [
  "main-01", // Phở bò truyền thống: 400 kcal (Bữa Sáng)
  "main-02", // Cơm tấm sườn bì chả: 650 kcal (Bữa Trưa)
  "main-03", // Bún chả Hà Nội: 450 kcal (Bữa Tối)
  "drink-02"  // Trà đào cam sả: 150 kcal (Bữa Phụ)
  // Tổng = 1650 kcal / 2000 kcal mục tiêu (~82.5%)
];
