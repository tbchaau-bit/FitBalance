/**
 * CaloBalance - Mock Database Món Ăn Việt Nam & Healthy
 * Dữ liệu phong phú chia theo 4 bữa: Sáng, Trưa, Tối, Phụ
 * Đầy đủ chỉ số Calo (kcal) và Dinh dưỡng đa lượng (Protein, Carbs, Fat)
 */

const FOOD_DATABASE = [
  // --- BỮA SÁNG (BREAKFAST) ---
  {
    id: "bf-01",
    name: "Phở Bò Tái Lăn Thanh Vị",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 480,
    protein: 34,
    carbs: 62,
    fat: 10,
    portion: "1 tô vừa (~450g)",
    tags: ["Món Việt", "Giàu Protein", "Năng lượng chuẩn"],
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&auto=format&fit=crop&q=80",
    description: "Thịt bò nạc xào tái thơm lừng với gừng tỏi, nước dùng xương bò ninh tự nhiên không dầu mỡ, ăn kèm bánh phở tươi và hành hoa thơm ngát."
  },
  {
    id: "bf-02",
    name: "Bánh Mì Ức Gà Nướng Tiêu Đen",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 385,
    protein: 30,
    carbs: 44,
    fat: 8,
    portion: "1 ổ vừa (~220g)",
    tags: ["Eat Clean", "Giàu Đạm", "Tiện lợi"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
    description: "Bánh mì nguyên cám giòn rụm kẹp ức gà ướp sốt tiêu đen thượng hạng, dưa leo tươi giòn và rau mùi thơm mát."
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
    tags: ["Thuần Chay", "Ít Béo", "Giàu Chất Xơ"],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&auto=format&fit=crop&q=80",
    description: "Yến mạch cán dẹt ngâm sữa hạnh nhân qua đêm, kết hợp sữa chua Hy Lạp sánh mịn, dâu tây, việt quất tươi và hạt chia dinh dưỡng."
  },
  {
    id: "bf-04",
    name: "Trứng Ốp La Bơ Bánh Mì Đen",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 360,
    protein: 20,
    carbs: 32,
    fat: 16,
    portion: "1 đĩa (~200g)",
    tags: ["Keto Thân Thiện", "Nhanh Gọn", "Chất Béo Tốt"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
    description: "2 quả trứng gà ta ốp lòng đào mềm ngậy, ăn kèm 1/2 trái bơ sáp béo bùi và lát bánh mì lúa mạch đen nướng giòn."
  },
  {
    id: "bf-05",
    name: "Hủ Tiếu Nam Vang Tôm Thịt Nạc",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 430,
    protein: 28,
    carbs: 58,
    fat: 9,
    portion: "1 tô (~400g)",
    tags: ["Món Việt", "Thanh Đạm", "Đậm Đà"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80",
    description: "Sợi hủ tiếu dai dai hòa quyện nước hầm củ quả ngọt thanh, tôm tươi bóc nõn, thịt heo nạc và trứng cút bùi ngậy."
  },
  {
    id: "bf-06",
    name: "Cháo Yến Mạch Thịt Bằm Cà Rốt",
    category: "breakfast",
    categoryName: "Bữa Sáng",
    calories: 295,
    protein: 22,
    carbs: 38,
    fat: 6,
    portion: "1 bát (~350g)",
    tags: ["Dễ Tiêu Hóa", "Ít Calo", "Ấm Bụng"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80",
    description: "Cháo yến mạch dẻo sánh nấu cùng thịt nạc thăn băm nhỏ, cà rốt hạt lựu và hành tiêu thơm dịu, thanh lọc cơ thể đầu ngày."
  },

  // --- BỮA TRƯA (LUNCH) ---
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
    tags: ["Giàu Omega-3", "Chất Lượng Cao", "Tươi Sống"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
    description: "Phi lê cá hồi Na Uy tươi nướng lá xạ hương, măng tây xanh mướt giòn thơm và hạt diêm mạch (quinoa) giàu khoáng chất."
  },
  {
    id: "lu-03",
    name: "Bún Chả Nướng Eat Clean Hà Nội",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 475,
    protein: 32,
    carbs: 60,
    fat: 11,
    portion: "1 phần (~400g)",
    tags: ["Món Việt", "Ít Mỡ", "Hương Vị Cổ Truyền"],
    image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=600&auto=format&fit=crop&q=80",
    description: "Chả nạc thăn ướp sả ớt nướng nồi chiên không dầu thơm lừng, nước mắm pha chua ngọt thanh nhẹ từ mật mía và rau sống phong phú."
  },
  {
    id: "lu-04",
    name: "Bò Xào Bông Cải Xanh Cơm Gạo Lứt",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 490,
    protein: 38,
    carbs: 50,
    fat: 13,
    portion: "1 phần (~370g)",
    tags: ["Tăng Cơ", "Giàu Sắt", "Món Quen Thuộc"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    description: "Thăn bò Úc thái mỏng xào nhanh cùng tỏi cô đơn và súp lơ xanh giòn ngọt, giữ trọn vẹn vitamin và vị ngọt tự nhiên."
  },
  {
    id: "lu-05",
    name: "Cơm Tấm Sườn Nạc Áp Chảo & Chả Trứng Hấp",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 560,
    protein: 36,
    carbs: 68,
    fat: 14,
    portion: "1 đĩa (~420g)",
    tags: ["Món Việt", "Năng Lượng Dồi Dào"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description: "Sườn cốt lết lọc sạch mỡ ướp sốt mật ong áp chảo xém cạnh, chả trứng nấm mèo hấp mềm, dưa leo chua ngọt kèm nước mắm chấm cay thơm."
  },
  {
    id: "lu-06",
    name: "Đậu Phụ Sốt Cà Nấm & Cơm Ngũ Cốc",
    category: "lunch",
    categoryName: "Bữa Trưa",
    calories: 420,
    protein: 24,
    carbs: 56,
    fat: 11,
    portion: "1 phần (~360g)",
    tags: ["Thuần Chay", "Thanh Đạm", "Ít Calo"],
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=80",
    description: "Đậu phụ non áp chảo sốt cà chua bi tươi và nấm hương tươi giòn, cung cấp đạm thực vật chất lượng cao kèm cơm ngũ cốc 6 loại hạt."
  },

  // --- BỮA TỐI (DINNER) ---
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
    tags: ["Low Carb", "Giảm Mỡ", "Mát Lành"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    description: "Cá ngừ đại dương ngâm nước khoáng tách muối, trứng gà luộc lòng đào, xà lách Romaine, cà chua cherry và dầu giấm sốt mè rang bùi bùi."
  },
  {
    id: "di-02",
    name: "Tôm Hấp Sả Rau Củ Luộc Kho Quẹt Ăn Kiêng",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 270,
    protein: 35,
    carbs: 18,
    fat: 4,
    portion: "1 phần (~300g)",
    tags: ["Siêu Ít Calo", "Giàu Đạm", "Món Việt"],
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&auto=format&fit=crop&q=80",
    description: "Tôm sú tươi nhảy tanh tách hấp gừng sả giữ trọn vị ngọt biển, chấm cùng sốt kho quẹt chay ít natri và đĩa thập cẩm rau củ luộc xanh mướt."
  },
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
    tags: ["Ngủ Ngon", "Bồi Bổ", "Nhẹ Bụng"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80",
    description: "Gà ta bỏ da hầm liu riu cùng hạt sen Huế bở tơi, nấm đông cô tươi và táo đỏ, giúp an thần ngủ sâu giấc và bồi bổ sức khỏe."
  },
  {
    id: "di-04",
    name: "Miến Xào Ức Gà Nấm Hương Cà Rốt",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 380,
    protein: 28,
    carbs: 52,
    fat: 6,
    portion: "1 dĩa (~350g)",
    tags: ["Dễ Ăn", "Ít Dầu Mỡ", "Thanh Đạm"],
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80",
    description: "Miến dong nguyên chất xào tơi không dính, ngập tràn thịt ức gà xé phay, mộc nhĩ, nấm hương giòn sần sật và rau củ thanh mát."
  },
  {
    id: "di-05",
    name: "Salad Ức Gà Nướng Bơ Sốt Chanh Dây",
    category: "dinner",
    categoryName: "Bữa Tối",
    calories: 345,
    protein: 32,
    carbs: 16,
    fat: 15,
    portion: "1 đĩa (~330g)",
    tags: ["Eat Clean", "Giàu Vitamin", "Chống Lão Hóa"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description: "Ức gà ướp sốt thảo mộc nướng vàng thơm, quả bơ béo ngậy kết hợp sốt chanh dây chua ngọt tươi mát đánh thức vị giác."
  },

  // --- BỮA PHỤ / SNACKS ---
  {
    id: "sn-01",
    name: "Sữa Chua Hy Lạp Hạt Chia & Việt Quất",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 160,
    protein: 15,
    carbs: 18,
    fat: 3,
    portion: "1 ly (~180g)",
    tags: ["Probiotic", "Ít Đường", "Đẹp Da"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
    description: "Sữa chua Hy Lạp lên men tự nhiên đặc sánh, bổ sung hạt chia nở mềm giàu chất xơ và trái việt quất tươi mọng nước."
  },
  {
    id: "sn-02",
    name: "Sinh Tố Bơ Chuối Whey Protein",
    category: "snack",
    categoryName: "Bữa Phụ",
    calories: 235,
    protein: 22,
    carbs: 26,
    fat: 7,
    portion: "1 ly (~300ml)",
    tags: ["Phục Hồi Cơ", "Năng Lượng", "Vị Thơm Ngon"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    description: "Thức uống hoàn hảo trước hoặc sau tập luyện: 1 muỗng whey vani, 1/2 trái chuối tiêu, 1/3 quả bơ xay nhuyễn cùng sữa chua không đường."
  },
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
    tags: ["Chống Đói", "Chất Xơ Cao", "Giòn Ngọt"],
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&auto=format&fit=crop&q=80",
    description: "Táo xanh Granny Smith chua ngọt giòn rụm thái lát mỏng quệt kèm 1 thìa bơ đậu phộng nguyên chất 100% không thêm đường."
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
    tags: ["Chất Béo Tốt", "Ăn Liền", "Văn Phòng"],
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",
    description: "Hỗn hợp hạnh nhân rang muối hồng, hạt điều Bình Phước bùi béo và quả óc chó sấy giòn thơm, bổ sung vitamin E và khoáng chất."
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
    tags: ["Detox", "Zero Fat", "Thanh Lọc Cơ Thể"],
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80",
    description: "Nước ép nguyên chất ép chậm từ cần tây Đà Lạt, dưa leo mát lành và táo xanh thanh lọc đường ruột, làm sáng mịn làn da."
  }
];

// Khởi tạo thực đơn mẫu mặc định cho một ngày năng động (khoảng 1450 kcal ban đầu)
const INITIAL_SELECTED_FOOD_IDS = [
  "bf-01", // Phở Bò Tái Lăn: 480 kcal
  "lu-01", // Cơm Gạo Lứt Ức Gà: 510 kcal
  "di-01", // Salad Cá Ngừ: 320 kcal
  "sn-01"  // Sữa Chua Hy Lạp: 160 kcal
  // Tổng = 1470 kcal / 2000 kcal mục tiêu (~73.5%)
];
