// Frozen public layout snapshot. HTML only displays this data.
window.room2Layout = {
  version: 'v0.2',
  title: 'Giao Ước Máu: Asylum · Room 2 Layout Demo',
  eyebrow: 'Phòng chơi 02 · Báo cáo layout công khai',
  heading: ['Demo:', 'hành lang hình số 8.'],
  subtitle: 'Phương án bốn phòng và hành lang hình số 8 đang được mở lại để review cùng sức chứa, action flow và no room reuse.',
  statusLegend: {
    draft: 'Draft · chưa được duyệt',
    stable: 'Stable · phép tính nhất quán, không phải phê duyệt'
  },
  labels: {
    diagram: 'Sơ đồ quan hệ',
    diagramNote: 'Không theo tỷ lệ · không dùng để thi công',
    playerRoute: 'Luồng người chơi minh họa',
    staffAccess: 'Lối nhân sự minh họa',
    gmOnly: 'Chỉ nhân sự',
    room: 'Phòng',
    expand: 'Xem chi tiết',
    tabs: 'Chọn nội dung',
    summaryTab: 'Demo',
    measuredTab: 'Draft C01 · I02',
    summaryVersion: 'Demo · chỉ xem'
  },
  tabs: [
    { id: 'demo', label: 'Demo' },
    { id: 'draft-c01-i02', label: 'Draft C01 · I02' }
  ],
  notice: 'Demo Draft · không phải layout đã duyệt hoặc bản vẽ xây dựng. Kích thước, vị trí cửa và kiểm tra thoát hiểm chưa được chốt.',
  feature: {
    keyword: 'Sơ đồ',
    brief: '4 phòng; hành lang hình số 8.',
    status: 'draft',
    details: [
      'A–B là hai phòng độc lập có đủ bốn vách.',
      'C–D có ba vách và dùng tường giáp phòng GM làm cạnh còn lại.',
      'Đường màu lam chỉ minh họa quan hệ hình số 8; toàn bộ topology và hình học vẫn là Draft.'
    ]
  },
  plan: {
    rooms: [
      { id: 'GM', name: 'PHÒNG GM', note: 'chỉ nhân sự', x: 80, y: 35, width: 840, height: 115, kind: 'gm', status: 'draft' },
      { id: 'C', name: 'PHÒNG C', note: '3 vách · giáp GM', x: 180, y: 150, width: 270, height: 155, kind: 'attached', status: 'draft' },
      { id: 'D', name: 'PHÒNG D', note: '3 vách · giáp GM', x: 550, y: 150, width: 270, height: 155, kind: 'attached', status: 'draft' },
      { id: 'A', name: 'PHÒNG A', note: 'độc lập · 4 vách', x: 180, y: 410, width: 270, height: 190, kind: 'freestanding', status: 'draft' },
      { id: 'B', name: 'PHÒNG B', note: 'độc lập · 4 vách', x: 550, y: 410, width: 270, height: 190, kind: 'freestanding', status: 'draft' }
    ],
    playerRoutes: [
      { d: 'M500 650 C100 650 85 355 315 355 C500 355 500 650 500 650', status: 'draft' },
      { d: 'M500 650 C900 650 915 355 685 355 C500 355 500 650 500 650', status: 'draft' }
    ],
    staffAccess: [
      { from: [315, 80], to: [315, 195], status: 'draft' },
      { from: [685, 80], to: [685, 195], status: 'draft' }
    ]
  },
  measurementDraft: {
    title: 'Room 2 Layout · Draft C01 · I02',
    eyebrow: 'Phòng chơi 02 · Draft C01 · I02',
    heading: ['C01 · I02:', 'Opposite reveal.'],
    subtitle: 'Bản xuất chỉ đọc của iteration C01-I02: 60 m² nội bộ, hai phòng trung tâm, vách 0,10 m và hành lang thông thủy 0,80 m.',
    notice: 'Draft · chưa được duyệt. Layer toggle chỉ thay đổi phần hiển thị; config, hình học, phép tính và marker không thể chỉnh sửa trên trang công khai.',
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
      assumptionBrief: '5 điều đang dùng để tính.',
      config: 'Config snapshot · chỉ đọc',
      layers: 'Layer visibility',
      readonly: 'Chỉ đọc',
      measurements: 'Measurements',
      player: 'User flow',
      puzzle: 'Puzzle location',
      lighting: 'Lighting',
      vfx: 'Visual effect / decoration',
      ghost: 'Ghost NPC in / out',
      hiddenDoor: 'Hidden door',
      acts: 'Story acts'
    },
    configFields: [
      { key: 'area', label: 'Internal gross area', value: '60', unit: 'm²' },
      { key: 'ratio', label: 'Shell width ÷ height', value: '1.6666666667', unit: '' },
      { key: 'wall', label: 'Partition wall thickness', value: '0.10', unit: 'm' },
      { key: 'hall', label: 'Clear hallway width', value: '0.80', unit: 'm' },
      { key: 'rooms', label: 'Central rooms', value: '2', unit: '' },
      { key: 'circulation', label: 'Circulation', value: 'figure-eight', unit: '' },
      { key: 'shell', label: 'Calculated shell', value: '10.00 × 6.00', unit: 'm' },
      { key: 'parent', label: 'Parent iteration', value: 'c01-i01', unit: '' }
    ],
    layers: [
      { id: 'measurements', label: 'Measurements', symbol: '↔', color: '#ffd591', visible: true },
      { id: 'player', label: 'User flow', symbol: '→', color: '#72ddd1', visible: true },
      { id: 'puzzle', label: 'Puzzle location', symbol: '◆', color: '#ffd591', visible: false },
      { id: 'lighting', label: 'Lighting', symbol: '☀', color: '#fff09a', visible: false },
      { id: 'vfx', label: 'Visual effect / decoration', symbol: '✦', color: '#d0b5f7', visible: false },
      { id: 'ghost', label: 'Ghost NPC in / out', symbol: 'G', color: '#ff8fcf', visible: false },
      { id: 'hiddenDoor', label: 'Hidden door', symbol: 'HD', color: '#cda7ff', visible: false },
      { id: 'acts', label: 'Story acts', symbol: 'A', color: '#75bfff', visible: false }
    ],
    marks: {
      player: [{ x:0.50,y:0.50 },{ x:0.54,y:0.94 },{ x:0.92,y:0.94 },{ x:0.96,y:0.50 },{ x:0.92,y:0.06 },{ x:0.54,y:0.06 },{ x:0.50,y:0.50 },{ x:0.46,y:0.94 },{ x:0.08,y:0.94 },{ x:0.04,y:0.50 },{ x:0.08,y:0.06 },{ x:0.46,y:0.06 },{ x:0.50,y:0.50 }],
      puzzle: [{ x:0.28,y:0.66,label:'P1' },{ x:0.72,y:0.34,label:'P2' },{ x:0.72,y:0.70,label:'P3' }],
      lighting: [{ x:0.08,y:0.20,label:'L1' },{ x:0.92,y:0.80,label:'L2' }],
      vfx: [{ x:0.50,y:0.82,label:'V1' },{ x:0.72,y:0.50,label:'V2' }],
      ghost: [{ x:-0.04,y:0.18 },{ x:0.08,y:0.18 },{ x:0.46,y:0.18 },{ x:0.46,y:0.50 },{ x:0.92,y:0.50 },{ x:1.04,y:0.50 }],
      hiddenDoor: [{ x:0.08,y:0.18,label:'IN' },{ x:0.92,y:0.50,label:'OUT' }],
      acts: [{ x:0.16,y:0.80,label:'1' },{ x:0.50,y:0.20,label:'2' },{ x:0.72,y:0.50,label:'3' }]
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
      'Diện tích vách đang tính theo vách liên tục trước khi trừ các ô cửa; cửa, cột và thiết bị kỹ thuật chưa được bố trí.',
      'Với 60 m², thiết kế phải đánh đổi bề rộng hoặc chiều dài hành lang, tính tái sử dụng của phòng, hoặc khả năng chứa đủ 8 người trong từng phòng; chưa chọn phương án.'
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
      { keyword: 'Conflict · 60 m²', brief: 'Không thể đồng thời tối đa hành lang, phòng tái sử dụng và sức chứa 8 người.', status: 'draft', details: ['Các hướng đánh đổi: thu hẹp hành lang; rút ngắn tuyến hành lang; dùng phòng chuyên biệt/không tái sử dụng; hoặc chấp nhận phòng nhỏ khiến một số người phải đứng ngoài hành lang vì không đủ chỗ cho cả 8.', 'Hành lang hẹp hơn và để người chơi tràn ra hành lang chưa phải phương án được duyệt; cần kiểm tra vận hành, sức chứa, tiếp cận và thoát hiểm trước khi chọn.'] },
      { keyword: 'Đối chiếu', brief: 'Tổng phân bổ = 60,00 m².', status: 'stable', details: ['Hành lang + hai phòng thông thủy + vách ngăn cân bằng đúng tổng diện tích nội bộ cấu hình.'] }
    ]
  },
  sections: [
    {
      title: 'Demo · cấu trúc Draft',
      rows: [
        {
          keyword: 'Phòng A–B',
          brief: 'Độc lập, 4 vách mỗi phòng.',
          status: 'draft',
          details: ['Hai phòng nằm trong khu vực chơi; hành lang vòng quanh để tạo hai nhánh của hình số 8.']
        },
        {
          keyword: 'Phòng C–D',
          brief: '3 vách, áp tường phòng GM.',
          status: 'draft',
          details: ['C và D dùng tường giáp phòng GM làm cạnh thứ tư; nhân sự có thể tiếp cận khu vực chơi tại hai phòng này.']
        },
        {
          keyword: 'Hành lang',
          brief: 'Hai vòng gặp nhau tại vùng chuyển tiếp trung tâm.',
          status: 'draft',
          details: ['Sơ đồ minh họa quan hệ hình số 8; chiều đi, vị trí giao nhau và hình học cụ thể đều đang review.']
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
          status: 'draft'
        },
        {
          keyword: 'Nét đứt',
          brief: 'Hình học minh họa, chưa được đo hoặc duyệt.',
          status: 'draft'
        }
      ]
    }
  ],
  footer: 'v0.2 · Demo công khai chỉ để thảo luận. Topology A–D, quan hệ với phòng GM, kích thước và hình học đều là Draft, chưa được duyệt.'
};
