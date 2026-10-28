/**
 * FitBalance - Main Application Logic (Step 2)
 * Quản lý tương tác Thêm/Xóa món ăn theo 4 bữa (Sáng, Trưa, Tối, Phụ),
 * Thẻ hiển thị món ăn gọn gàng kèm nút xóa & điều chỉnh khẩu phần,
 * Tự động tính toán tổng Calo (Real-time) và cập nhật thanh tiến trình tức thì.
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    allFoods: [...FOOD_DATABASE],
    targetCalories: 2000,

    // Cấu trúc 4 bữa ăn trong ngày (Step 2)
    mealPlan: {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: []
    },

    // Toolbar & Filter states
    activeCategory: 'all',
    activeTag: null,
    calorieFilter: 'all',
    sortOption: 'default',
    searchQuery: '',

    // Quick Add Modal Context
    activeModalTargetMeal: 'breakfast',
    quickAddSearchQuery: '',

    isPresentationMode: false,
  };

  // --- DOM SELECTORS ---
  const dom = {
    // Header
    currentDateText: document.getElementById('currentDateText'),
    headerSelectedCount: document.getElementById('headerSelectedCount'),
    togglePptxModeBtn: document.getElementById('togglePptxModeBtn'),
    exitPptxBtn: document.getElementById('exitPptxBtn'),
    pptxBanner: document.getElementById('pptxBanner'),
    openAddFoodModalBtn: document.getElementById('openAddFoodModalBtn'),
    openMenuDrawerBtn: document.getElementById('openMenuDrawerBtn'),

    // Dashboard Hero Metrics
    openTargetModalBtn: document.getElementById('openTargetModalBtn'),
    targetBadgeText: document.getElementById('targetBadgeText'),
    targetCaloriesVal: document.getElementById('targetCaloriesVal'),
    consumedCaloriesVal: document.getElementById('consumedCaloriesVal'),
    remainingCaloriesVal: document.getElementById('remainingCaloriesVal'),
    mainProgressBarFill: document.getElementById('mainProgressBarFill'),
    circleProgressGauge: document.getElementById('circleProgressGauge'),
    gaugePercentVal: document.getElementById('gaugePercentVal'),
    calorieStatusBox: document.getElementById('calorieStatusBox'),
    statusDot: document.getElementById('statusDot'),
    calorieStatusText: document.getElementById('calorieStatusText'),
    calorieStatusSub: document.getElementById('calorieStatusSub'),

    // Macros
    macroProteinVal: document.getElementById('macroProteinVal'),
    macroProteinTarget: document.getElementById('macroProteinTarget'),
    macroProteinBar: document.getElementById('macroProteinBar'),
    macroCarbVal: document.getElementById('macroCarbVal'),
    macroCarbTarget: document.getElementById('macroCarbTarget'),
    macroCarbBar: document.getElementById('macroCarbBar'),
    macroFatVal: document.getElementById('macroFatVal'),
    macroFatTarget: document.getElementById('macroFatTarget'),
    macroFatBar: document.getElementById('macroFatBar'),

    // Meal Summary Bars in Hero
    sumCalBreakfast: document.getElementById('sumCalBreakfast'),
    countBreakfast: document.getElementById('countBreakfast'),
    sumCalLunch: document.getElementById('sumCalLunch'),
    countLunch: document.getElementById('countLunch'),
    sumCalDinner: document.getElementById('sumCalDinner'),
    countDinner: document.getElementById('countDinner'),
    sumCalSnack: document.getElementById('sumCalSnack'),
    countSnack: document.getElementById('countSnack'),
    quickResetMenuBtn: document.getElementById('quickResetMenuBtn'),
    todayAvatarStack: document.getElementById('todayAvatarStack'),
    openTrayDetailBtn: document.getElementById('openTrayDetailBtn'),
    trayCountBadge: document.getElementById('trayCountBadge'),

    // Step 2: Meal Planner Boards
    mealPlannerSection: document.getElementById('mealPlannerSection'),
    plannerResetBtn: document.getElementById('plannerResetBtn'),
    plannerClearAllBtn: document.getElementById('plannerClearAllBtn'),
    boardCalBreakfast: document.getElementById('boardCalBreakfast'),
    boardCalLunch: document.getElementById('boardCalLunch'),
    boardCalDinner: document.getElementById('boardCalDinner'),
    boardCalSnack: document.getElementById('boardCalSnack'),
    boardListBreakfast: document.getElementById('boardListBreakfast'),
    boardListLunch: document.getElementById('boardListLunch'),
    boardListDinner: document.getElementById('boardListDinner'),
    boardListSnack: document.getElementById('boardListSnack'),

    // Toolbar & Catalog
    foodSearchInput: document.getElementById('foodSearchInput'),
    calorieRangeSelect: document.getElementById('calorieRangeSelect'),
    sortSelect: document.getElementById('sortSelect'),
    categoryTabs: document.querySelectorAll('.meal-tabs .tab-btn'),
    tagChips: document.querySelectorAll('.filter-tags-group .tag-chip'),
    catalogCountText: document.getElementById('catalogCountText'),
    foodGridContainer: document.getElementById('foodGridContainer'),

    // Tab Badge Counts
    badgeCountAll: document.getElementById('badgeCountAll'),
    badgeCountBreakfast: document.getElementById('badgeCountBreakfast'),
    badgeCountLunch: document.getElementById('badgeCountLunch'),
    badgeCountDinner: document.getElementById('badgeCountDinner'),
    badgeCountSnack: document.getElementById('badgeCountSnack'),

    // Drawer
    menuDrawer: document.getElementById('menuDrawer'),
    menuDrawerBackdrop: document.getElementById('menuDrawerBackdrop'),
    closeMenuDrawerBtn: document.getElementById('closeMenuDrawerBtn'),
    drawerItemList: document.getElementById('drawerItemList'),
    drawerTotalCalories: document.getElementById('drawerTotalCalories'),
    drawerTotalP: document.getElementById('drawerTotalP'),
    drawerTotalC: document.getElementById('drawerTotalC'),
    drawerTotalF: document.getElementById('drawerTotalF'),
    clearAllSelectedBtn: document.getElementById('clearAllSelectedBtn'),
    drawerApplyBtn: document.getElementById('drawerApplyBtn'),

    // Detail Modal
    foodDetailModal: document.getElementById('foodDetailModal'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    detailImg: document.getElementById('detailImg'),
    detailMealBadge: document.getElementById('detailMealBadge'),
    detailCalories: document.getElementById('detailCalories'),
    detailTitle: document.getElementById('detailTitle'),
    detailPortion: document.getElementById('detailPortion'),
    detailDesc: document.getElementById('detailDesc'),
    detailProtein: document.getElementById('detailProtein'),
    detailCarbs: document.getElementById('detailCarbs'),
    detailFat: document.getElementById('detailFat'),
    detailAddMenuBtn: document.getElementById('detailAddMenuBtn'),

    // Target Modal
    targetModal: document.getElementById('targetModal'),
    closeTargetModalBtn: document.getElementById('closeTargetModalBtn'),
    customTargetInput: document.getElementById('customTargetInput'),
    presetTargetButtons: document.querySelectorAll('.preset-target'),
    saveTargetBtn: document.getElementById('saveTargetBtn'),

    // Add Food Modal
    addFoodModal: document.getElementById('addFoodModal'),
    closeAddFoodModalBtn: document.getElementById('closeAddFoodModalBtn'),
    addFoodForm: document.getElementById('addFoodForm'),

    // Step 2: Quick Add Meal Modal
    quickAddMealModal: document.getElementById('quickAddMealModal'),
    closeQuickAddModalBtn: document.getElementById('closeQuickAddModalBtn'),
    quickAddModalTitle: document.getElementById('quickAddModalTitle'),
    quickAddSearchInput: document.getElementById('quickAddSearchInput'),
    quickAddListContainer: document.getElementById('quickAddListContainer'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer'),
  };

  // --- INITIALIZATION ---
  function init() {
    renderCurrentDate();
    initDefaultMealPlan();
    updateTabBadges();
    calculateAndSyncRealtimeCalo();
    renderMealBoards();
    renderFoodCatalog();
    bindEvents();
  }

  // --- RENDER CURRENT DATE ---
  function renderCurrentDate() {
    try {
      const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
      const now = new Date();
      const dayName = days[now.getDay()];
      const d = String(now.getDate()).padStart(2, '0');
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const y = now.getFullYear();
      if (dom.currentDateText) {
        dom.currentDateText.textContent = `${dayName}, ${d}/${m}/${y}`;
      }
    } catch (e) {
      console.error(e);
    }
  }

  // --- DEFAULT MEAL PLAN INITIALIZATION (Khởi tạo 4 món mẫu chuẩn) ---
  function initDefaultMealPlan() {
    state.mealPlan = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snack: []
    };

    // 1. Phở bò cho Bữa Sáng (480 kcal)
    const bf = state.allFoods.find((f) => f.id === 'bf-01');
    if (bf) state.mealPlan.breakfast.push({ foodId: bf.id, quantity: 1, food: bf });

    // 2. Cơm gạo lứt gà cho Bữa Trưa (510 kcal)
    const lu = state.allFoods.find((f) => f.id === 'lu-01');
    if (lu) state.mealPlan.lunch.push({ foodId: lu.id, quantity: 1, food: lu });

    // 3. Salad cá ngừ cho Bữa Tối (320 kcal)
    const di = state.allFoods.find((f) => f.id === 'di-01');
    if (di) state.mealPlan.dinner.push({ foodId: di.id, quantity: 1, food: di });

    // 4. Sữa chua việt quất cho Bữa Phụ (160 kcal)
    const sn = state.allFoods.find((f) => f.id === 'sn-01');
    if (sn) state.mealPlan.snack.push({ foodId: sn.id, quantity: 1, food: sn });
  }

  // --- REAL-TIME CALORIE & NUTRITION CALCULATION ---
  // Hàm tự động cộng dồn tổng calo và cập nhật ngay lập tức thanh tiến trình
  function calculateAndSyncRealtimeCalo() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalDishCount = 0;

    const mealCalories = {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snack: 0
    };

    const mealItemCounts = {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snack: 0
    };

    const allSelectedList = [];

    // Duyệt qua từng bữa trong state.mealPlan
    ['breakfast', 'lunch', 'dinner', 'snack'].forEach((mealKey) => {
      state.mealPlan[mealKey].forEach((entry) => {
        const { food, quantity } = entry;
        const cal = food.calories * quantity;
        const p = food.protein * quantity;
        const c = food.carbs * quantity;
        const f = food.fat * quantity;

        totalCalories += cal;
        totalProtein += p;
        totalCarbs += c;
        totalFat += f;
        totalDishCount += quantity;

        mealCalories[mealKey] += cal;
        mealItemCounts[mealKey] += quantity;

        allSelectedList.push({ ...entry, mealKey });
      });
    });

    const targetCal = state.targetCalories;
    const percentage = Math.round((totalCalories / targetCal) * 100 * 10) / 10;
    const remainingCal = targetCal - totalCalories;

    // Macro Targets (Tỉ lệ chuẩn Healthy 30% Đạm : 50% Carbs : 20% Béo)
    const targetProtein = Math.round((targetCal * 0.28) / 4);
    const targetCarbs = Math.round((targetCal * 0.47) / 4);
    const targetFat = Math.round((targetCal * 0.25) / 9);

    // 1. Cập nhật số liệu Calo Hero
    if (dom.targetBadgeText) dom.targetBadgeText.textContent = targetCal.toLocaleString('vi-VN');
    if (dom.targetCaloriesVal) dom.targetCaloriesVal.textContent = targetCal.toLocaleString('vi-VN');
    if (dom.consumedCaloriesVal) dom.consumedCaloriesVal.textContent = totalCalories.toLocaleString('vi-VN');

    // 2. CẬP NHẬT TRỰC TIẾP THANH TIẾN TRÌNH (PROGRESS BAR)
    const clampedWidth = Math.min(percentage, 100);
    if (dom.mainProgressBarFill) {
      dom.mainProgressBarFill.style.width = `${clampedWidth}%`;
      if (percentage > 105) {
        dom.mainProgressBarFill.classList.add('exceeded');
      } else {
        dom.mainProgressBarFill.classList.remove('exceeded');
      }
    }

    // 3. Cập nhật vòng tròn tiến trình (Circular Progress Gauge)
    const circumference = 2 * Math.PI * 42; // r = 42
    if (dom.circleProgressGauge) {
      const offset = circumference - (clampedWidth / 100) * circumference;
      dom.circleProgressGauge.style.strokeDashoffset = offset;
    }
    if (dom.gaugePercentVal) {
      dom.gaugePercentVal.textContent = `${percentage}%`;
    }

    // 4. Lượng Calo còn lại & Trạng thái nhắc nhở
    if (dom.remainingCaloriesVal) {
      if (remainingCal >= 0) {
        dom.remainingCaloriesVal.textContent = `${remainingCal.toLocaleString('vi-VN')} kcal`;
        dom.remainingCaloriesVal.style.color = 'var(--text-main)';
      } else {
        dom.remainingCaloriesVal.textContent = `+${Math.abs(remainingCal).toLocaleString('vi-VN')} kcal (Vượt)`;
        dom.remainingCaloriesVal.style.color = '#ef4444';
      }
    }

    if (dom.calorieStatusText && dom.calorieStatusSub) {
      dom.calorieStatusSub.textContent = `${percentage}%`;
      if (totalCalories === 0) {
        dom.calorieStatusText.textContent = 'Chưa chọn món nào. Bắt đầu lên thực đơn ngay phía dưới!';
        dom.statusDot.style.background = '#94a3b8';
      } else if (percentage < 50) {
        dom.calorieStatusText.textContent = 'Mới nạp năng lượng nhẹ. Hãy tiếp tục chọn thêm món cho các bữa chính!';
        dom.statusDot.style.background = '#3b82f6';
      } else if (percentage <= 90) {
        dom.calorieStatusText.textContent = 'Trạng thái lý tưởng: Thực đơn cân đối, đủ năng lượng hoạt động!';
        dom.statusDot.style.background = '#10b981';
      } else if (percentage <= 105) {
        dom.calorieStatusText.textContent = 'Rất tuyệt vời! Đã đạt trọn vẹn mục tiêu Calo hôm nay.';
        dom.statusDot.style.background = '#059669';
      } else {
        dom.calorieStatusText.textContent = 'Cảnh báo vượt mức calo: Cân nhắc giảm khẩu phần bữa phụ hoặc vận động thêm!';
        dom.statusDot.style.background = '#ef4444';
      }
    }

    // 5. Cập nhật Macros
    if (dom.macroProteinVal) dom.macroProteinVal.textContent = totalProtein;
    if (dom.macroProteinTarget) dom.macroProteinTarget.textContent = targetProtein;
    if (dom.macroProteinBar) dom.macroProteinBar.style.width = `${Math.min((totalProtein / targetProtein) * 100, 100)}%`;

    if (dom.macroCarbVal) dom.macroCarbVal.textContent = totalCarbs;
    if (dom.macroCarbTarget) dom.macroCarbTarget.textContent = targetCarbs;
    if (dom.macroCarbBar) dom.macroCarbBar.style.width = `${Math.min((totalCarbs / targetCarbs) * 100, 100)}%`;

    if (dom.macroFatVal) dom.macroFatVal.textContent = totalFat;
    if (dom.macroFatTarget) dom.macroFatTarget.textContent = targetFat;
    if (dom.macroFatBar) dom.macroFatBar.style.width = `${Math.min((totalFat / targetFat) * 100, 100)}%`;

    // 6. Cập nhật Calo từng bữa ở Step 2 Meal Boards
    if (dom.boardCalBreakfast) dom.boardCalBreakfast.textContent = mealCalories.breakfast.toLocaleString('vi-VN');
    if (dom.boardCalLunch) dom.boardCalLunch.textContent = mealCalories.lunch.toLocaleString('vi-VN');
    if (dom.boardCalDinner) dom.boardCalDinner.textContent = mealCalories.dinner.toLocaleString('vi-VN');
    if (dom.boardCalSnack) dom.boardCalSnack.textContent = mealCalories.snack.toLocaleString('vi-VN');

    // Cập nhật ở Mini Summary Card
    if (dom.sumCalBreakfast) dom.sumCalBreakfast.textContent = mealCalories.breakfast;
    if (dom.countBreakfast) dom.countBreakfast.textContent = mealItemCounts.breakfast;
    if (dom.sumCalLunch) dom.sumCalLunch.textContent = mealCalories.lunch;
    if (dom.countLunch) dom.countLunch.textContent = mealItemCounts.lunch;
    if (dom.sumCalDinner) dom.sumCalDinner.textContent = mealCalories.dinner;
    if (dom.countDinner) dom.countDinner.textContent = mealItemCounts.dinner;
    if (dom.sumCalSnack) dom.sumCalSnack.textContent = mealCalories.snack;
    if (dom.countSnack) dom.countSnack.textContent = mealItemCounts.snack;

    // 7. Cập nhật Header Count & Drawer
    if (dom.headerSelectedCount) dom.headerSelectedCount.textContent = totalDishCount;
    if (dom.trayCountBadge) dom.trayCountBadge.textContent = totalDishCount;
    if (dom.drawerTotalCalories) dom.drawerTotalCalories.textContent = `${totalCalories.toLocaleString('vi-VN')} kcal`;
    if (dom.drawerTotalP) dom.drawerTotalP.textContent = `${totalProtein}g`;
    if (dom.drawerTotalC) dom.drawerTotalC.textContent = `${totalCarbs}g`;
    if (dom.drawerTotalF) dom.drawerTotalF.textContent = `${totalFat}g`;

    // 8. Cập nhật Avatars Stack
    renderAvatarStack(allSelectedList);

    // 9. Cập nhật nội dung trong Drawer
    renderDrawerItems();

    // 10. Đồng bộ nút bấm ở Catalog
    syncCatalogCardButtons();
  }

  // --- RENDER MEAL PLANNER BOARDS (STEP 2) ---
  // Hiển thị danh sách các món đã chọn dưới dạng các thẻ (card) gọn gàng kèm nút xóa
  function renderMealBoards() {
    const mealKeys = ['breakfast', 'lunch', 'dinner', 'snack'];
    const containers = {
      breakfast: dom.boardListBreakfast,
      lunch: dom.boardListLunch,
      dinner: dom.boardListDinner,
      snack: dom.boardListSnack
    };
    const mealNames = {
      breakfast: 'Bữa Sáng',
      lunch: 'Bữa Trưa',
      dinner: 'Bữa Tối',
      snack: 'Bữa Phụ'
    };
    const mealIcons = {
      breakfast: '🍳',
      lunch: '🍲',
      dinner: '🥗',
      snack: '🥑'
    };

    mealKeys.forEach((mealKey) => {
      const container = containers[mealKey];
      if (!container) return;

      const items = state.mealPlan[mealKey];
      container.innerHTML = '';

      if (items.length === 0) {
        container.innerHTML = `
          <div class="empty-meal-box">
            <span class="empty-meal-icon">${mealIcons[mealKey]}</span>
            <span>Chưa có món cho ${mealNames[mealKey]}</span>
          </div>
        `;
        return;
      }

      items.forEach((entry) => {
        const { food, quantity } = entry;
        const subtotal = food.calories * quantity;

        const card = document.createElement('div');
        card.className = 'selected-dish-card';
        card.setAttribute('data-food-id', food.id);
        card.setAttribute('data-meal-key', mealKey);

        card.innerHTML = `
          <div class="selected-dish-top">
            <img 
              src="${food.image}" 
              alt="${food.name}" 
              class="selected-dish-thumb" 
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80';"
            />
            <div class="selected-dish-meta">
              <span class="selected-dish-name" title="${food.name}">${food.name}</span>
              <div class="selected-dish-cal">${subtotal} kcal <small style="font-weight:normal; color:var(--text-muted);">(${food.calories} kcal/phần)</small></div>
              <div class="selected-dish-macros">
                <span>P: ${food.protein * quantity}g</span>
                <span>•</span>
                <span>C: ${food.carbs * quantity}g</span>
                <span>•</span>
                <span>F: ${food.fat * quantity}g</span>
              </div>
            </div>
          </div>

          <div class="selected-dish-bottom">
            <!-- Stepper tăng giảm khẩu phần -->
            <div class="stepper-wrap" title="Tăng/giảm số lượng khẩu phần">
              <button class="stepper-btn" data-action="decrease-board-qty" data-meal="${mealKey}" data-id="${food.id}">-</button>
              <span class="stepper-val">${quantity}</span>
              <button class="stepper-btn" data-action="increase-board-qty" data-meal="${mealKey}" data-id="${food.id}">+</button>
            </div>

            <!-- Nút Xóa Món Ăn Khỏi Bữa -->
            <button class="btn-dish-delete" data-action="delete-board-item" data-meal="${mealKey}" data-id="${food.id}" title="Xóa món này khỏi ${mealNames[mealKey]}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Xóa</span>
            </button>
          </div>
        `;

        container.appendChild(card);
      });
    });
  }

  // --- ACTIONS: THÊM & XÓA MÓN ĂN VÀO BỮA CỤ THỂ ---
  function addFoodToSpecificMeal(foodId, mealKey) {
    const food = state.allFoods.find((f) => f.id === foodId);
    if (!food) return;

    if (!state.mealPlan[mealKey]) {
      state.mealPlan[mealKey] = [];
    }

    const existing = state.mealPlan[mealKey].find((item) => item.foodId === foodId);
    if (existing) {
      existing.quantity += 1;
      showToast(`Đã tăng khẩu phần: ${food.name} (x${existing.quantity})`, 'success');
    } else {
      state.mealPlan[mealKey].push({
        foodId: food.id,
        quantity: 1,
        food: food
      });
      const mealNames = {
        breakfast: 'Bữa Sáng',
        lunch: 'Bữa Trưa',
        dinner: 'Bữa Tối',
        snack: 'Bữa Phụ'
      };
      showToast(`Đã thêm "${food.name}" vào ${mealNames[mealKey]} (+${food.calories} kcal)`, 'success');
    }

    renderMealBoards();
    calculateAndSyncRealtimeCalo();
  }

  function removeFoodFromSpecificMeal(mealKey, foodId) {
    if (!state.mealPlan[mealKey]) return;

    const idx = state.mealPlan[mealKey].findIndex((item) => item.foodId === foodId);
    if (idx !== -1) {
      const removed = state.mealPlan[mealKey][idx];
      state.mealPlan[mealKey].splice(idx, 1);
      showToast(`Đã xóa "${removed.food.name}" khỏi thực đơn`, 'info');
      renderMealBoards();
      calculateAndSyncRealtimeCalo();
    }
  }

  function adjustMealItemQuantity(mealKey, foodId, delta) {
    if (!state.mealPlan[mealKey]) return;

    const item = state.mealPlan[mealKey].find((i) => i.foodId === foodId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFoodFromSpecificMeal(mealKey, foodId);
    } else {
      renderMealBoards();
      calculateAndSyncRealtimeCalo();
    }
  }

  // --- RENDER FOOD CATALOG GRID (Lưới món ăn với nút chọn bữa linh hoạt) ---
  function renderFoodCatalog() {
    if (!dom.foodGridContainer) return;

    let filtered = [...state.allFoods];

    // Filter by Tab
    if (state.activeCategory !== 'all') {
      filtered = filtered.filter((f) => f.category === state.activeCategory);
    }

    // Filter by Tag
    if (state.activeTag) {
      filtered = filtered.filter((f) => f.tags && f.tags.includes(state.activeTag));
    }

    // Filter by Calorie
    if (state.calorieFilter === 'under-300') {
      filtered = filtered.filter((f) => f.calories < 300);
    } else if (state.calorieFilter === '300-500') {
      filtered = filtered.filter((f) => f.calories >= 300 && f.calories <= 500);
    } else if (state.calorieFilter === 'above-500') {
      filtered = filtered.filter((f) => f.calories > 500);
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          (f.tags && f.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    // Sort
    if (state.sortOption === 'cal-asc') {
      filtered.sort((a, b) => a.calories - b.calories);
    } else if (state.sortOption === 'cal-desc') {
      filtered.sort((a, b) => b.calories - a.calories);
    } else if (state.sortOption === 'protein-desc') {
      filtered.sort((a, b) => b.protein - a.protein);
    }

    if (dom.catalogCountText) {
      dom.catalogCountText.textContent = filtered.length;
    }

    dom.foodGridContainer.innerHTML = '';

    if (filtered.length === 0) {
      dom.foodGridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">Không tìm thấy món ăn phù hợp</h3>
          <p class="empty-state-desc">Hãy thử đổi từ khóa tìm kiếm hoặc bấm đặt lại bộ lọc để xem toàn bộ thực đơn.</p>
          <button class="btn btn-outline-primary" id="resetCatalogFilterBtn" style="margin-top: 1rem;">
            Đặt Lại Bộ Lọc
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('resetCatalogFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeCategory = 'all';
          state.activeTag = null;
          state.calorieFilter = 'all';
          state.searchQuery = '';
          state.sortOption = 'default';
          if (dom.foodSearchInput) dom.foodSearchInput.value = '';
          if (dom.calorieRangeSelect) dom.calorieRangeSelect.value = 'all';
          if (dom.sortSelect) dom.sortSelect.value = 'default';
          dom.categoryTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.category === 'all'));
          dom.tagChips.forEach((chip) => chip.classList.remove('active'));
          renderFoodCatalog();
        });
      }
      return;
    }

    const mealIcons = {
      breakfast: '🍳',
      lunch: '🍲',
      dinner: '🥗',
      snack: '🥑',
    };

    filtered.forEach((food) => {
      // Kiểm tra món đã được chọn trong bất kỳ bữa nào chưa
      let totalQty = 0;
      ['breakfast', 'lunch', 'dinner', 'snack'].forEach((key) => {
        const item = state.mealPlan[key].find((i) => i.foodId === food.id);
        if (item) totalQty += item.quantity;
      });

      const card = document.createElement('article');
      card.className = 'food-card';
      card.setAttribute('data-id', food.id);

      const tagsHtml = (food.tags || [])
        .map((tag) => `<span class="dish-tag">${tag}</span>`)
        .join('');

      card.innerHTML = `
        <div class="card-media">
          <img 
            src="${food.image}" 
            alt="${food.name}" 
            class="card-img" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80';"
          />
          <span class="badge-meal-type ${food.category}">
            ${mealIcons[food.category] || '🍽️'} ${food.categoryName}
          </span>
          <span class="badge-calorie">
            <span>🔥</span> ${food.calories} <span>kcal</span>
          </span>
        </div>

        <div class="card-content">
          <div class="card-title-block">
            <h3 class="card-dish-name" title="${food.name}">${food.name}</h3>
            <div class="card-portion">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              ${food.portion || '1 khẩu phần tiêu chuẩn'}
            </div>
          </div>

          <div class="card-tags">
            ${tagsHtml}
          </div>

          <div class="card-macro-grid" aria-label="Thành phần dinh dưỡng">
            <div class="macro-chip p">
              <span class="macro-chip-label">Đạm (P)</span>
              <span class="macro-chip-val">${food.protein}g</span>
            </div>
            <div class="macro-chip c">
              <span class="macro-chip-label">Carb (C)</span>
              <span class="macro-chip-val">${food.carbs}g</span>
            </div>
            <div class="macro-chip f">
              <span class="macro-chip-label">Béo (F)</span>
              <span class="macro-chip-val">${food.fat}g</span>
            </div>
          </div>

          <div class="card-footer-actions">
            <button class="btn-detail" data-action="view-detail" data-id="${food.id}" title="Xem chi tiết nguyên liệu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              </svg>
            </button>

            <!-- Bộ nút thông minh: Thêm vào bữa mặc định hoặc Chọn bữa tùy ý -->
            <div class="card-action-split">
              <button 
                class="btn-add-quick ${totalQty > 0 ? 'added' : ''}" 
                data-action="add-to-default-meal" 
                data-id="${food.id}"
                data-meal="${food.category}"
              >
                ${totalQty > 0 ? `✓ Đã chọn (x${totalQty})` : `+ Thêm vào ${food.categoryName}`}
              </button>

              <button class="btn-meal-picker-toggle" data-action="toggle-meal-picker" title="Chọn bữa ăn cụ thể để đưa món vào">
                ▼
              </button>

              <!-- Dropdown Menu chọn đưa vào bữa ăn cụ thể -->
              <div class="meal-picker-menu">
                <button class="meal-picker-item" data-action="pick-meal-add" data-id="${food.id}" data-meal="breakfast">
                  🍳 Bữa Sáng
                </button>
                <button class="meal-picker-item" data-action="pick-meal-add" data-id="${food.id}" data-meal="lunch">
                  🍲 Bữa Trưa
                </button>
                <button class="meal-picker-item" data-action="pick-meal-add" data-id="${food.id}" data-meal="dinner">
                  🥗 Bữa Tối
                </button>
                <button class="meal-picker-item" data-action="pick-meal-add" data-id="${food.id}" data-meal="snack">
                  🥑 Bữa Phụ
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      dom.foodGridContainer.appendChild(card);
    });
  }

  // --- SYNC CATALOG CARD BUTTONS ---
  function syncCatalogCardButtons() {
    if (!dom.foodGridContainer) return;

    const cards = dom.foodGridContainer.querySelectorAll('.food-card');
    cards.forEach((card) => {
      const id = card.dataset.id;
      const food = state.allFoods.find((f) => f.id === id);
      if (!food) return;

      let totalQty = 0;
      ['breakfast', 'lunch', 'dinner', 'snack'].forEach((key) => {
        const item = state.mealPlan[key].find((i) => i.foodId === id);
        if (item) totalQty += item.quantity;
      });

      const quickBtn = card.querySelector('.btn-add-quick');
      if (quickBtn) {
        if (totalQty > 0) {
          quickBtn.classList.add('added');
          quickBtn.innerHTML = `✓ Đã chọn (x${totalQty})`;
        } else {
          quickBtn.classList.remove('added');
          quickBtn.innerHTML = `+ Thêm vào ${food.categoryName}`;
        }
      }
    });
  }

  // --- RENDER DRAWER ITEMS (Khay trượt tổng hợp) ---
  function renderDrawerItems() {
    if (!dom.drawerItemList) return;

    const mealOrder = ['breakfast', 'lunch', 'dinner', 'snack'];
    const mealTitles = {
      breakfast: '🍳 Bữa Sáng',
      lunch: '🍲 Bữa Trưa',
      dinner: '🥗 Bữa Tối',
      snack: '🥑 Bữa Phụ'
    };

    let totalItems = 0;
    let html = '';

    mealOrder.forEach((cat) => {
      const itemsInCat = state.mealPlan[cat];
      if (itemsInCat.length > 0) {
        totalItems += itemsInCat.length;
        const catCal = itemsInCat.reduce((sum, item) => sum + item.food.calories * item.quantity, 0);

        html += `
          <div class="drawer-meal-group">
            <div class="drawer-meal-label">
              <span>${mealTitles[cat]}</span>
              <span style="color: var(--primary-600); font-weight:800;">${catCal} kcal</span>
            </div>
        `;

        itemsInCat.forEach((entry) => {
          const { food, quantity } = entry;
          html += `
            <div class="drawer-food-item" data-id="${food.id}" data-meal="${cat}">
              <img src="${food.image}" alt="${food.name}" class="drawer-food-img" onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80';"/>
              <div class="drawer-food-details">
                <span class="drawer-food-name">${food.name}</span>
                <span class="drawer-food-cal">${food.calories * quantity} kcal <small style="color:var(--text-muted); font-weight:normal;">(${food.calories} x ${quantity})</small></span>
              </div>
              <div class="drawer-food-qty">
                <button class="qty-btn" data-action="drawer-decrease" data-meal="${cat}" data-id="${food.id}" title="Giảm">-</button>
                <span class="qty-count">${quantity}</span>
                <button class="qty-btn" data-action="drawer-increase" data-meal="${cat}" data-id="${food.id}" title="Tăng">+</button>
                <button class="btn-del-food" data-action="drawer-remove" data-meal="${cat}" data-id="${food.id}" title="Xóa">✕</button>
              </div>
            </div>
          `;
        });

        html += `</div>`;
      }
    });

    if (totalItems === 0) {
      dom.drawerItemList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🥗</div>
          <p style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">Thực đơn hôm nay đang trống</p>
          <p style="font-size: 0.8rem; margin-top: 0.25rem;">Hãy bấm nút <strong>"+ Thêm vào thực đơn"</strong> ở các bữa để bắt đầu tính toán Calo.</p>
        </div>
      `;
    } else {
      dom.drawerItemList.innerHTML = html;
    }
  }

  // --- RENDER AVATAR STACK IN HERO ---
  function renderAvatarStack(allSelectedList) {
    if (!dom.todayAvatarStack) return;
    dom.todayAvatarStack.innerHTML = '';

    const maxAvatars = 5;
    const items = allSelectedList.slice(0, maxAvatars);

    if (items.length === 0) {
      dom.todayAvatarStack.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">Chưa chọn món nào</span>';
      return;
    }

    items.forEach((entry) => {
      const avatar = document.createElement('div');
      avatar.className = 'dish-avatar-item';
      avatar.style.backgroundImage = `url('${entry.food.image}')`;
      avatar.title = `${entry.food.name} (${entry.food.calories} kcal)`;
      dom.todayAvatarStack.appendChild(avatar);
    });

    if (allSelectedList.length > maxAvatars) {
      const plusBadge = document.createElement('div');
      plusBadge.className = 'dish-avatar-item';
      plusBadge.style.background = 'var(--primary-600)';
      plusBadge.style.color = 'white';
      plusBadge.style.display = 'flex';
      plusBadge.style.alignItems = 'center';
      plusBadge.style.justifyContent = 'center';
      plusBadge.style.fontSize = '0.7rem';
      plusBadge.style.fontWeight = '700';
      plusBadge.textContent = `+${allSelectedList.length - maxAvatars}`;
      dom.todayAvatarStack.appendChild(plusBadge);
    }
  }

  // --- UPDATE TAB COUNTS ---
  function updateTabBadges() {
    const counts = {
      all: state.allFoods.length,
      breakfast: state.allFoods.filter((f) => f.category === 'breakfast').length,
      lunch: state.allFoods.filter((f) => f.category === 'lunch').length,
      dinner: state.allFoods.filter((f) => f.category === 'dinner').length,
      snack: state.allFoods.filter((f) => f.category === 'snack').length,
    };

    if (dom.badgeCountAll) dom.badgeCountAll.textContent = counts.all;
    if (dom.badgeCountBreakfast) dom.badgeCountBreakfast.textContent = counts.breakfast;
    if (dom.badgeCountLunch) dom.badgeCountLunch.textContent = counts.lunch;
    if (dom.badgeCountDinner) dom.badgeCountDinner.textContent = counts.dinner;
    if (dom.badgeCountSnack) dom.badgeCountSnack.textContent = counts.snack;
  }

  // --- QUICK ADD TO MEAL MODAL (Modal chọn món nhanh cho từng bữa) ---
  function openQuickAddMealModal(targetMeal) {
    state.activeModalTargetMeal = targetMeal;
    state.quickAddSearchQuery = '';

    const mealNames = {
      breakfast: '🍳 Bữa Sáng',
      lunch: '🍲 Bữa Trưa',
      dinner: '🥗 Bữa Tối',
      snack: '🥑 Bữa Phụ'
    };

    if (dom.quickAddModalTitle) {
      dom.quickAddModalTitle.textContent = `Thêm Món Vào ${mealNames[targetMeal] || 'Bữa Ăn'}`;
    }

    if (dom.quickAddSearchInput) {
      dom.quickAddSearchInput.value = '';
    }

    renderQuickAddList();
    openModal(dom.quickAddMealModal);
  }

  function renderQuickAddList() {
    if (!dom.quickAddListContainer) return;

    let list = [...state.allFoods];
    const q = state.quickAddSearchQuery.toLowerCase().trim();

    if (q) {
      list = list.filter((f) => f.name.toLowerCase().includes(q) || (f.tags && f.tags.some((t) => t.toLowerCase().includes(q))));
    } else {
      // Ưu tiên hiển thị các món thuộc đúng bữa đó trước
      list.sort((a, b) => {
        if (a.category === state.activeModalTargetMeal && b.category !== state.activeModalTargetMeal) return -1;
        if (b.category === state.activeModalTargetMeal && a.category !== state.activeModalTargetMeal) return 1;
        return 0;
      });
    }

    dom.quickAddListContainer.innerHTML = '';

    if (list.length === 0) {
      dom.quickAddListContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          Không tìm thấy món ăn phù hợp với từ khóa "${q}".
        </div>
      `;
      return;
    }

    list.forEach((food) => {
      const itemRow = document.createElement('div');
      itemRow.className = 'drawer-food-item';
      itemRow.style.background = 'var(--bg-app)';

      itemRow.innerHTML = `
        <img src="${food.image}" alt="${food.name}" class="drawer-food-img" onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80';"/>
        <div class="drawer-food-details">
          <span class="drawer-food-name">${food.name}</span>
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary-600);">${food.calories} kcal • P: ${food.protein}g | C: ${food.carbs}g | F: ${food.fat}g</span>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${food.portion || '1 khẩu phần'}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm" data-action="quick-modal-add" data-id="${food.id}" style="padding: 0.4rem 0.75rem; white-space: nowrap;">
          + Thêm ngay
        </button>
      `;

      dom.quickAddListContainer.appendChild(itemRow);
    });
  }

  // --- VIEW FOOD DETAILS MODAL ---
  function openFoodDetail(foodId) {
    const food = state.allFoods.find((f) => f.id === foodId);
    if (!food) return;

    const mealIcons = {
      breakfast: '🍳',
      lunch: '🍲',
      dinner: '🥗',
      snack: '🥑',
    };

    if (dom.detailImg) dom.detailImg.src = food.image;
    if (dom.detailMealBadge) {
      dom.detailMealBadge.className = `badge-meal-type ${food.category}`;
      dom.detailMealBadge.innerHTML = `${mealIcons[food.category] || '🍽️'} ${food.categoryName}`;
    }
    if (dom.detailCalories) dom.detailCalories.textContent = `${food.calories} kcal`;
    if (dom.detailTitle) dom.detailTitle.textContent = food.name;
    if (dom.detailPortion) dom.detailPortion.textContent = `Khẩu phần: ${food.portion || 'Tiêu chuẩn (~350g)'}`;
    if (dom.detailDesc) dom.detailDesc.textContent = food.description;
    if (dom.detailProtein) dom.detailProtein.textContent = `${food.protein}g`;
    if (dom.detailCarbs) dom.detailCarbs.textContent = `${food.carbs}g`;
    if (dom.detailFat) dom.detailFat.textContent = `${food.fat}g`;

    if (dom.detailAddMenuBtn) {
      dom.detailAddMenuBtn.onclick = () => {
        addFoodToSpecificMeal(food.id, food.category);
        closeModal(dom.foodDetailModal);
      };
    }

    openModal(dom.foodDetailModal);
  }

  // --- MODAL UTILS ---
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- TOAST SYSTEM ---
  function showToast(message, type = 'info') {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `
      <span style="font-weight: 800; color: #10b981; font-size: 1rem;">${icon}</span>
      <span>${message}</span>
    `;

    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2400);
  }

  // --- EVENT BINDING ---
  function bindEvents() {
    // 1. PPTX Mode Toggle
    if (dom.togglePptxModeBtn) {
      dom.togglePptxModeBtn.addEventListener('click', () => {
        document.body.classList.add('presentation-mode');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Đã bật Chế Độ Báo Cáo PPTX! Layout chuẩn sẵn sàng để chụp ảnh slide.', 'success');
      });
    }

    if (dom.exitPptxBtn) {
      dom.exitPptxBtn.addEventListener('click', () => {
        document.body.classList.remove('presentation-mode');
        showToast('Đã thoát Chế Độ Báo Cáo PPTX.', 'info');
      });
    }

    // 2. Step 2: Meal Planner Boards Interaction (Stepper, Delete, Add to Meal)
    if (dom.mealPlannerSection) {
      dom.mealPlannerSection.addEventListener('click', (e) => {
        // Nút mở modal thêm món vào bữa cụ thể
        const addMealBtn = e.target.closest('.btn-add-to-meal');
        if (addMealBtn) {
          const mealKey = addMealBtn.dataset.meal;
          openQuickAddMealModal(mealKey);
          return;
        }

        // Nút xóa món khỏi bữa
        const deleteBtn = e.target.closest('[data-action="delete-board-item"]');
        if (deleteBtn) {
          const mealKey = deleteBtn.dataset.meal;
          const foodId = deleteBtn.dataset.id;
          removeFoodFromSpecificMeal(mealKey, foodId);
          return;
        }

        // Nút tăng khẩu phần trong board
        const incBtn = e.target.closest('[data-action="increase-board-qty"]');
        if (incBtn) {
          const mealKey = incBtn.dataset.meal;
          const foodId = incBtn.dataset.id;
          adjustMealItemQuantity(mealKey, foodId, 1);
          return;
        }

        // Nút giảm khẩu phần trong board
        const decBtn = e.target.closest('[data-action="decrease-board-qty"]');
        if (decBtn) {
          const mealKey = decBtn.dataset.meal;
          const foodId = decBtn.dataset.id;
          adjustMealItemQuantity(mealKey, foodId, -1);
          return;
        }
      });
    }

    // Planner Global Actions (Reset & Clear All)
    if (dom.plannerResetBtn) {
      dom.plannerResetBtn.addEventListener('click', () => {
        initDefaultMealPlan();
        renderMealBoards();
        calculateAndSyncRealtimeCalo();
        showToast('Đã khôi phục thực đơn 4 bữa mẫu chuẩn (1,470 kcal)', 'success');
      });
    }

    if (dom.plannerClearAllBtn) {
      dom.plannerClearAllBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ các món trong 4 bữa ăn hôm nay?')) {
          state.mealPlan = { breakfast: [], lunch: [], dinner: [], snack: [] };
          renderMealBoards();
          calculateAndSyncRealtimeCalo();
          showToast('Đã xóa toàn bộ thực đơn hôm nay', 'info');
        }
      });
    }

    if (dom.quickResetMenuBtn) {
      dom.quickResetMenuBtn.addEventListener('click', () => {
        initDefaultMealPlan();
        renderMealBoards();
        calculateAndSyncRealtimeCalo();
        showToast('Đã khôi phục thực đơn mẫu tiêu chuẩn', 'success');
      });
    }

    // 3. Quick Add Meal Modal Events
    if (dom.closeQuickAddModalBtn) {
      dom.closeQuickAddModalBtn.addEventListener('click', () => closeModal(dom.quickAddMealModal));
    }

    if (dom.quickAddSearchInput) {
      dom.quickAddSearchInput.addEventListener('input', (e) => {
        state.quickAddSearchQuery = e.target.value;
        renderQuickAddList();
      });
    }

    if (dom.quickAddListContainer) {
      dom.quickAddListContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="quick-modal-add"]');
        if (btn) {
          const foodId = btn.dataset.id;
          addFoodToSpecificMeal(foodId, state.activeModalTargetMeal);
          // Không đóng modal để người dùng có thể chọn thêm nhiều món cùng lúc
        }
      });
    }

    // 4. Catalog Grid Interactions (Add to default meal, Open meal dropdown, Pick meal)
    if (dom.foodGridContainer) {
      dom.foodGridContainer.addEventListener('click', (e) => {
        // Nút thêm nhanh vào bữa mặc định
        const quickAddBtn = e.target.closest('[data-action="add-to-default-meal"]');
        if (quickAddBtn) {
          const id = quickAddBtn.dataset.id;
          const meal = quickAddBtn.dataset.meal;
          addFoodToSpecificMeal(id, meal);
          return;
        }

        // Toggle dropdown chọn bữa
        const togglePickerBtn = e.target.closest('[data-action="toggle-meal-picker"]');
        if (togglePickerBtn) {
          const parent = togglePickerBtn.closest('.card-action-split');
          const menu = parent ? parent.querySelector('.meal-picker-menu') : null;
          if (menu) {
            // Close other open menus
            document.querySelectorAll('.meal-picker-menu.active').forEach((m) => {
              if (m !== menu) m.classList.remove('active');
            });
            menu.classList.toggle('active');
          }
          return;
        }

        // Click chọn bữa trong dropdown
        const pickItemBtn = e.target.closest('[data-action="pick-meal-add"]');
        if (pickItemBtn) {
          const id = pickItemBtn.dataset.id;
          const meal = pickItemBtn.dataset.meal;
          addFoodToSpecificMeal(id, meal);
          const menu = pickItemBtn.closest('.meal-picker-menu');
          if (menu) menu.classList.remove('active');
          return;
        }

        // Xem chi tiết món ăn
        const detailBtn = e.target.closest('[data-action="view-detail"]');
        if (detailBtn) {
          const id = detailBtn.dataset.id;
          openFoodDetail(id);
          return;
        }
      });
    }

    // Close any meal-picker dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.card-action-split')) {
        document.querySelectorAll('.meal-picker-menu.active').forEach((m) => {
          m.classList.remove('active');
        });
      }
    });

    // 5. Drawer Open & Actions
    if (dom.openMenuDrawerBtn) {
      dom.openMenuDrawerBtn.addEventListener('click', () => {
        dom.menuDrawer.classList.add('active');
        dom.menuDrawerBackdrop.classList.add('active');
      });
    }

    if (dom.openTrayDetailBtn) {
      dom.openTrayDetailBtn.addEventListener('click', () => {
        dom.menuDrawer.classList.add('active');
        dom.menuDrawerBackdrop.classList.add('active');
      });
    }

    if (dom.closeMenuDrawerBtn) {
      dom.closeMenuDrawerBtn.addEventListener('click', () => {
        dom.menuDrawer.classList.remove('active');
        dom.menuDrawerBackdrop.classList.remove('active');
      });
    }

    if (dom.menuDrawerBackdrop) {
      dom.menuDrawerBackdrop.addEventListener('click', () => {
        dom.menuDrawer.classList.remove('active');
        dom.menuDrawerBackdrop.classList.remove('active');
      });
    }

    if (dom.drawerApplyBtn) {
      dom.drawerApplyBtn.addEventListener('click', () => {
        dom.menuDrawer.classList.remove('active');
        dom.menuDrawerBackdrop.classList.remove('active');
        showToast('Thực đơn đã được đồng bộ chuẩn xác!', 'success');
      });
    }

    if (dom.drawerItemList) {
      dom.drawerItemList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const action = btn.dataset.action;
        const id = btn.dataset.id;
        const meal = btn.dataset.meal;
        if (!id || !meal) return;

        if (action === 'drawer-increase') {
          adjustMealItemQuantity(meal, id, 1);
        } else if (action === 'drawer-decrease') {
          adjustMealItemQuantity(meal, id, -1);
        } else if (action === 'drawer-remove') {
          removeFoodFromSpecificMeal(meal, id);
        }
      });
    }

    if (dom.clearAllSelectedBtn) {
      dom.clearAllSelectedBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa tất cả món đã chọn?')) {
          state.mealPlan = { breakfast: [], lunch: [], dinner: [], snack: [] };
          renderMealBoards();
          calculateAndSyncRealtimeCalo();
          showToast('Đã xóa toàn bộ thực đơn', 'info');
        }
      });
    }

    // 6. Search & Filter
    if (dom.foodSearchInput) {
      let debounceTimeout;
      dom.foodSearchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          state.searchQuery = e.target.value;
          renderFoodCatalog();
        }, 200);
      });
    }

    if (dom.calorieRangeSelect) {
      dom.calorieRangeSelect.addEventListener('change', (e) => {
        state.calorieFilter = e.target.value;
        renderFoodCatalog();
      });
    }

    if (dom.sortSelect) {
      dom.sortSelect.addEventListener('change', (e) => {
        state.sortOption = e.target.value;
        renderFoodCatalog();
      });
    }

    dom.categoryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        dom.categoryTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        state.activeCategory = tab.dataset.category;
        renderFoodCatalog();
      });
    });

    dom.tagChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const tag = chip.dataset.tag;
        if (state.activeTag === tag) {
          state.activeTag = null;
          chip.classList.remove('active');
        } else {
          dom.tagChips.forEach((c) => c.classList.remove('active'));
          state.activeTag = tag;
          chip.classList.add('active');
        }
        renderFoodCatalog();
      });
    });

    // 7. Target Modal
    if (dom.openTargetModalBtn) {
      dom.openTargetModalBtn.addEventListener('click', () => {
        if (dom.customTargetInput) dom.customTargetInput.value = state.targetCalories;
        openModal(dom.targetModal);
      });
    }

    if (dom.closeTargetModalBtn) {
      dom.closeTargetModalBtn.addEventListener('click', () => closeModal(dom.targetModal));
    }

    dom.presetTargetButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.presetTargetButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const cal = parseInt(btn.dataset.cal, 10);
        if (dom.customTargetInput) dom.customTargetInput.value = cal;
      });
    });

    if (dom.saveTargetBtn) {
      dom.saveTargetBtn.addEventListener('click', () => {
        const newTarget = parseInt(dom.customTargetInput.value, 10);
        if (newTarget >= 500 && newTarget <= 10000) {
          state.targetCalories = newTarget;
          closeModal(dom.targetModal);
          calculateAndSyncRealtimeCalo();
          showToast(`Đã cập nhật mục tiêu mới: ${newTarget.toLocaleString('vi-VN')} kcal/ngày`, 'success');
        } else {
          alert('Vui lòng nhập mục tiêu calo hợp lệ (từ 500 đến 10,000 kcal).');
        }
      });
    }

    // 8. Custom Food Modal
    if (dom.openAddFoodModalBtn) {
      dom.openAddFoodModalBtn.addEventListener('click', () => openModal(dom.addFoodModal));
    }

    if (dom.closeAddFoodModalBtn) {
      dom.closeAddFoodModalBtn.addEventListener('click', () => closeModal(dom.addFoodModal));
    }

    if (dom.addFoodForm) {
      dom.addFoodForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('newFoodName').value.trim();
        const category = document.getElementById('newFoodCategory').value;
        const calories = parseInt(document.getElementById('newFoodCalories').value, 10);
        const protein = parseInt(document.getElementById('newFoodP').value, 10) || 0;
        const carbs = parseInt(document.getElementById('newFoodC').value, 10) || 0;
        const fat = parseInt(document.getElementById('newFoodF').value, 10) || 0;
        const portion = document.getElementById('newFoodPortion').value.trim() || '1 phần (~300g)';
        const tagsInput = document.getElementById('newFoodTags').value.trim();
        const tags = tagsInput ? tagsInput.split(',').map((t) => t.trim()) : ['Tự Chọn'];
        const description = document.getElementById('newFoodDesc').value.trim() || 'Món ăn tùy chỉnh theo sở thích dinh dưỡng.';

        const categoryNames = {
          breakfast: 'Bữa Sáng',
          lunch: 'Bữa Trưa',
          dinner: 'Bữa Tối',
          snack: 'Bữa Phụ',
        };

        const defaultImages = {
          breakfast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80',
          lunch: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
          dinner: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
          snack: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80',
        };

        const newFood = {
          id: `custom-${Date.now()}`,
          name,
          category,
          categoryName: categoryNames[category] || 'Món Ăn',
          calories,
          protein,
          carbs,
          fat,
          portion,
          tags,
          image: defaultImages[category],
          description,
        };

        state.allFoods.unshift(newFood);
        addFoodToSpecificMeal(newFood.id, newFood.category);
        updateTabBadges();
        renderFoodCatalog();
        closeModal(dom.addFoodModal);
        dom.addFoodForm.reset();
        showToast(`Đã thêm món "${name}" vào ${categoryNames[category]}!`, 'success');
      });
    }

    if (dom.closeDetailModalBtn) {
      dom.closeDetailModalBtn.addEventListener('click', () => closeModal(dom.foodDetailModal));
    }

    // Modal background click to close
    [dom.foodDetailModal, dom.targetModal, dom.addFoodModal, dom.quickAddMealModal].forEach((modal) => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            closeModal(modal);
          }
        });
      }
    });

    // Keyboard ESC to close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(dom.foodDetailModal);
        closeModal(dom.targetModal);
        closeModal(dom.addFoodModal);
        closeModal(dom.quickAddMealModal);
        if (dom.menuDrawer) dom.menuDrawer.classList.remove('active');
        if (dom.menuDrawerBackdrop) dom.menuDrawerBackdrop.classList.remove('active');
      }
    });
  }

  // --- START APP ---
  document.addEventListener('DOMContentLoaded', init);
})();
