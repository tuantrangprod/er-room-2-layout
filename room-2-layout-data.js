// Frozen public layout snapshot. HTML only displays this data.
window.room2Layout = {
  version: 'v0.1',
  title: 'Giao Ước Máu: Asylum · Room 2 Layout v0.1',
  eyebrow: 'Phòng chơi 02 · Tóm tắt layout công khai',
  heading: ['Hành lang', 'hình số 8.'],
  subtitle: 'Bốn phòng quanh hai vòng di chuyển; cấu trúc đã duyệt được tách khỏi các kích thước và vị trí cửa chưa chốt.',
  statusLegend: {
    locked: 'Locked · cấu trúc đã duyệt',
    draft: 'Draft · minh họa hoặc chưa có số đo'
  },
  labels: {
    diagram: 'Sơ đồ quan hệ',
    diagramNote: 'Không theo tỷ lệ · không dùng để thi công',
    playerRoute: 'Luồng người chơi minh họa',
    staffAccess: 'Lối nhân sự đã xác nhận',
    gmOnly: 'Chỉ nhân sự',
    room: 'Phòng',
    expand: 'Xem chi tiết'
  },
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
