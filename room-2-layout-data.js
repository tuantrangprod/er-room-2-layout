// Frozen public layout snapshot. HTML only displays this data.
window.room2Layout = {
  version: 'v0.1',
  title: 'Giao Ước Máu: Asylum · Room 2 Layout v0.1',
  eyebrow: 'Phòng chơi 02 · Tóm tắt layout công khai',
  heading: ['Hành lang', 'hình số 8.'],
  subtitle: 'Bốn phòng quanh hai vòng di chuyển; cấu trúc đã duyệt được tách khỏi các kích thước và vị trí cửa chưa chốt.',
  statusLegend: {
    locked: 'Locked · cấu trúc đã duyệt',
    draft: 'Draft · minh họa hoặc chưa có số đo',
    stable: 'Stable · phép tính nhất quán, không phải phê duyệt'
  },
  labels: {
    diagram: 'Sơ đồ quan hệ',
    diagramNote: 'Không theo tỷ lệ · không dùng để thi công',
    playerRoute: 'Luồng người chơi minh họa',
    staffAccess: 'Lối nhân sự đã xác nhận',
    gmOnly: 'Chỉ nhân sự',
    room: 'Phòng',
    expand: 'Xem chi tiết',
    tabs: 'Chọn nội dung',
    summaryTab: 'Tóm tắt đã duyệt',
    measuredTab: 'Bản nháp đo đạc',
    summaryVersion: 'Bản tóm tắt chỉ xem'
  },
  tabs: [
    { id: 'summary', label: 'Tóm tắt đã duyệt' },
    { id: 'measured-draft', label: 'Bản nháp đo đạc' }
  ],
  notice: 'Đây là sơ đồ ý tưởng công khai, không phải bản vẽ xây dựng. Chưa có kích thước nguồn, bề dày vách, bề rộng thông thủy, hướng mở cửa hoặc kiểm tra thoát hiểm.',
  feature: {
    keyword: 'Sơ đồ',
    brief: '4 phòng; hành lang hình số 8.',
    status: 'locked',
    details: [
      'A–B là hai phòng độc lập có đủ bốn vách.',
      'C–D có ba vách và dùng tường giáp phòng GM làm cạnh còn lại.',
      'Đường màu lam chỉ giải thích quan hệ hình số 8; chưa phải tuyến đi hoặc kích thước đã duyệt.'
    ]
  },
  plan: {
    rooms: [
      { id: 'GM', name: 'PHÒNG GM', note: 'chỉ nhân sự', x: 80, y: 35, width: 840, height: 115, kind: 'gm', status: 'locked' },
      { id: 'C', name: 'PHÒNG C', note: '3 vách · giáp GM', x: 180, y: 150, width: 270, height: 155, kind: 'attached', status: 'locked' },
      { id: 'D', name: 'PHÒNG D', note: '3 vách · giáp GM', x: 550, y: 150, width: 270, height: 155, kind: 'attached', status: 'locked' },
      { id: 'A', name: 'PHÒNG A', note: 'độc lập · 4 vách', x: 180, y: 410, width: 270, height: 190, kind: 'freestanding', status: 'locked' },
      { id: 'B', name: 'PHÒNG B', note: 'độc lập · 4 vách', x: 550, y: 410, width: 270, height: 190, kind: 'freestanding', status: 'locked' }
    ],
    playerRoutes: [
      { d: 'M500 650 C100 650 85 355 315 355 C500 355 500 650 500 650', status: 'draft' },
      { d: 'M500 650 C900 650 915 355 685 355 C500 355 500 650 500 650', status: 'draft' }
    ],
    staffAccess: [
      { from: [315, 80], to: [315, 195], status: 'locked' },
      { from: [685, 80], to: [685, 195], status: 'locked' }
    ]
  },
  measurementDraft: {
    title: 'Room 2 Layout · Measured Draft v0.2',
    eyebrow: 'Phòng chơi 02 · Bản nháp đo đạc',
    heading: ['60 m²:', 'hai vòng, hai phòng.'],
    subtitle: 'Mặt bằng nội bộ 10,0 × 6,0 m gồm vách ngăn 0,10 m và hành lang thông thủy 0,80 m quanh hai phòng trung tâm.',
    notice: 'Bản nháp này thay cấu trúc 4 phòng Locked bằng 2 phòng lớn. Đây là phương án so sánh, chưa thay thế layout đã duyệt. Hành lang 0,80 m cần được chuyên gia kiểm tra về thoát hiểm, tiếp cận, sức chứa và vận hành trước khi chốt.',
    status: 'draft',
    labels: {
      version: 'Bản nháp đo đạc v0.2',
      plan: 'Mặt bằng phân bổ 60 m²',
      planNote: 'Diện tích nội bộ gồm vách · vách ngăn 0,10 m',
      planAria: 'Mặt bằng nội bộ 10,0 × 6,0 m, hai phòng trung tâm, vách 0,10 m và hành lang rộng 0,80 m',
      hallwayTotal: 'Hành lang thông thủy · 26,56 m²',
      report: 'Báo cáo diện tích',
      calculations: 'Phép tính',
      assumptions: 'Giả định và giới hạn',
      assumptionKeyword: 'Giả định',
      assumptionBrief: '4 điều đang dùng để tính.'
    },
    areaCards: [
      { label: 'Hành lang', value: '26,56 m²', note: '44,27% tổng diện tích' },
      { label: 'Phòng A', value: '15,12 m²', note: '3,60 × 4,20 m thông thủy' },
      { label: 'Phòng B', value: '15,12 m²', note: '3,60 × 4,20 m thông thủy' },
      { label: 'Vách ngăn', value: '3,20 m²', note: '5,33% tổng diện tích' }
    ],
    assumptions: [
      '60 m² là tổng diện tích nội bộ đo tới mặt trong vỏ phòng hiện hữu; diện tích này bao gồm vách ngăn mới.',
      'Hành lang 0,80 m là bề rộng thông thủy từ mặt ngoài vách phòng tới biên trong của vỏ phòng.',
      'Mỗi phòng có kích thước ngoài vách 3,80 × 4,40 m và kích thước thông thủy 3,60 × 4,20 m.',
      'Diện tích vách đang tính theo vách liên tục trước khi trừ các ô cửa; cửa, cột và thiết bị kỹ thuật chưa được bố trí.'
    ],
    geometry: {
      shell: { width: 10, height: 6 },
      hallwayWidth: 0.8,
      wallThickness: 0.1,
      rooms: [
        { id: 'A', name: 'PHÒNG LỚN A', x: 0.8, y: 0.8, width: 3.8, height: 4.4, clearWidth: 3.6, clearHeight: 4.2, area: 15.12 },
        { id: 'B', name: 'PHÒNG LỚN B', x: 5.4, y: 0.8, width: 3.8, height: 4.4, clearWidth: 3.6, clearHeight: 4.2, area: 15.12 }
      ]
    },
    calculations: [
      { keyword: 'Tổng nội bộ', brief: '10,0 × 6,0 = 60,00 m².', value: 60, share: '100%' },
      { keyword: 'Hành lang', brief: '60,00 − 2 × (3,80 × 4,40) = 26,56 m².', value: 26.56, share: '44,27%' },
      { keyword: 'Phòng A', brief: '(3,80 − 0,20) × (4,40 − 0,20) = 15,12 m².', value: 15.12, share: '25,20%' },
      { keyword: 'Phòng B', brief: '(3,80 − 0,20) × (4,40 − 0,20) = 15,12 m².', value: 15.12, share: '25,20%' },
      { keyword: 'Vách ngăn', brief: '2 × [(3,80 × 4,40) − (3,60 × 4,20)] = 3,20 m².', value: 3.2, share: '5,33%' }
    ],
    check: '26,56 + 15,12 + 15,12 + 3,20 = 60,00 m².',
    footer: 'Bản nháp đo đạc v0.2 · Đã tính vách ngăn 0,10 m; chưa trừ ô cửa hoặc bố trí cột và thiết bị. Cần đo mặt bằng và duyệt an toàn trước khi phát triển thành blueprint.',
    report: [
      { keyword: 'Hành lang', brief: '26,56 m² · rộng thông thủy 0,80 m.', status: 'draft', details: ['Hành lang chạy quanh mặt ngoài hai khối phòng và qua nhánh giữa; không bao gồm diện tích vách.'] },
      { keyword: 'Phòng A', brief: '15,12 m² · thông thủy 3,60 × 4,20 m.', status: 'draft' },
      { keyword: 'Phòng B', brief: '15,12 m² · thông thủy 3,60 × 4,20 m.', status: 'draft' },
      { keyword: 'Vách ngăn', brief: '3,20 m² · dày 0,10 m.', status: 'draft', details: ['Ước tính theo hai vòng vách kín trước khi trừ diện tích ô cửa.'] },
      { keyword: 'Đối chiếu', brief: 'Tổng phân bổ = 60,00 m².', status: 'stable', details: ['Hành lang + hai phòng thông thủy + vách ngăn cân bằng đúng tổng diện tích nội bộ cấu hình.'] }
    ]
  },
  sections: [
    {
      title: 'Cấu trúc đã duyệt',
      rows: [
        {
          keyword: 'Phòng A–B',
          brief: 'Độc lập, 4 vách mỗi phòng.',
          status: 'locked',
          details: ['Hai phòng nằm trong khu vực chơi; hành lang vòng quanh để tạo hai nhánh của hình số 8.']
        },
        {
          keyword: 'Phòng C–D',
          brief: '3 vách, áp tường phòng GM.',
          status: 'locked',
          details: ['C và D dùng tường giáp phòng GM làm cạnh thứ tư; nhân sự có thể tiếp cận khu vực chơi tại hai phòng này.']
        },
        {
          keyword: 'Hành lang',
          brief: 'Hai vòng gặp nhau tại vùng chuyển tiếp trung tâm.',
          status: 'locked',
          details: ['Sơ đồ chỉ khóa quan hệ hình số 8, không khóa chiều đi, vị trí giao nhau hoặc hình học cụ thể.']
        }
      ]
    },
    {
      title: 'Chưa có số đo nguồn',
      rows: [
        {
          keyword: 'Kích thước',
          brief: 'Chưa xác định diện tích, chiều dài, chiều rộng hoặc tỷ lệ.',
          status: 'draft',
          details: ['Các hộp phòng trong hình chỉ biểu diễn quan hệ. Không đo tỷ lệ trực tiếp từ sơ đồ này.']
        },
        {
          keyword: 'Lối đi',
          brief: 'Chưa xác định bề rộng thông thủy và điểm thắt.',
          status: 'draft',
          details: ['Cần đo mặt bằng thật và kiểm tra sức chứa, tiếp cận, vận hành cùng thoát hiểm trước khi chốt.']
        },
        {
          keyword: 'Cửa',
          brief: 'Chưa chốt vị trí, kích thước hoặc hướng mở.',
          status: 'draft',
          details: ['Lối nhân sự từ GM tới C–D là quan hệ chức năng; ký hiệu trong hình không phải chi tiết cửa.']
        }
      ]
    },
    {
      title: 'Cách đọc sơ đồ',
      rows: [
        {
          keyword: 'Màu lam',
          brief: 'Minh họa hai vòng của hành lang người chơi.',
          status: 'draft'
        },
        {
          keyword: 'Màu tím',
          brief: 'Lối nhân sự từ GM tới C–D.',
          status: 'locked'
        },
        {
          keyword: 'Nét đứt',
          brief: 'Hình học minh họa, chưa được đo hoặc duyệt.',
          status: 'draft'
        }
      ]
    }
  ],
  footer: 'v0.1 · Bản tóm tắt layout công khai. Chỉ topology A–D và quan hệ với phòng GM là Locked; mọi kích thước và hình học chi tiết vẫn là Draft.'
};
