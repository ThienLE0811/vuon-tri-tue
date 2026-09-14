import type { ExtraEntry } from "./grade1";

export const GRADE5_EXTRA: ExtraEntry[] = [
  // ===== Toán — Lớp 5 =====
  {
    subjectId: "toan",
    grade: 5,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Rút gọn phân số 6/9 được kết quả nào?",
        options: ["2/3", "3/6", "1/3", "2/9"],
        correctAnswer: "2/3",
        explanation: "Chia cả tử và mẫu cho 3: 6/9 = 2/3.",
      },
      {
        type: "multiple_choice",
        content: "Phân số nào tối giản (không thể rút gọn thêm)?",
        options: ["4/8", "3/5", "6/9", "2/4"],
        correctAnswer: "3/5",
        explanation: "3/5 không có ước chung nào khác 1 nên là phân số tối giản.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "2/5 + 1/5 = ?",
        options: ["3/10", "3/5", "2/10", "1/5"],
        correctAnswer: "3/5",
        explanation: "Cùng mẫu số: 2/5 + 1/5 = 3/5.",
      },
      {
        type: "multiple_choice",
        content: "5/6 - 1/3 = ?",
        options: ["1/2", "4/3", "4/6", "1/3"],
        correctAnswer: "1/2",
        explanation: "Quy đồng: 5/6 - 2/6 = 3/6 = 1/2.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "2/3 x 3/4 = ?",
        options: ["6/12", "5/7", "6/7", "1/2"],
        correctAnswer: "6/12",
        explanation: "(2x3)/(3x4) = 6/12.",
      },
      {
        type: "multiple_choice",
        content: "3/4 : 1/4 = ?",
        options: ["3", "4", "1/3", "12/4"],
        correctAnswer: "3",
        explanation: "3/4 : 1/4 = 3/4 x 4/1 = 12/4 = 3.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Số 0,5 đọc là gì?",
        options: ["Không phẩy năm", "Năm phẩy không", "Năm mươi", "Không chấm năm"],
        correctAnswer: "Không phẩy năm",
        explanation: "0,5 đọc là 'không phẩy năm'.",
      },
      {
        type: "multiple_choice",
        content: "Số nào có phần nguyên là 8?",
        options: ["8,3", "3,8", "0,8", "18,3"],
        correctAnswer: "8,3",
        explanation: "Trong 8,3, phần đứng trước dấu phẩy (8) là phần nguyên.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "9,6 - 4,2 = ?",
        options: ["5,2", "5,4", "5,6", "5,3"],
        correctAnswer: "5,4",
        explanation: "9,6 - 4,2 = 5,4.",
      },
      {
        type: "multiple_choice",
        content: "2,3 + 4,7 = ?",
        options: ["6,0", "7,0", "6,5", "7,5"],
        correctAnswer: "7,0",
        explanation: "2,3 + 4,7 = 7,0.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "3,3 x 2 = ?",
        options: ["6,3", "6,6", "6,9", "7,0"],
        correctAnswer: "6,6",
        explanation: "3,3 x 2 = 6,6.",
      },
      {
        type: "multiple_choice",
        content: "9,6 : 4 = ?",
        options: ["2,2", "2,4", "2,6", "2,8"],
        correctAnswer: "2,4",
        explanation: "9,6 : 4 = 2,4.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Tam giác đáy 10cm, chiều cao 6cm. Diện tích là bao nhiêu?",
        options: ["16cm²", "30cm²", "60cm²", "20cm²"],
        correctAnswer: "30cm²",
        explanation: "Diện tích = (10 x 6) : 2 = 30cm².",
      },
      {
        type: "multiple_choice",
        content: "Hình thang có đáy lớn 8cm, đáy bé 4cm, chiều cao 5cm. Diện tích là bao nhiêu?",
        options: ["30cm²", "60cm²", "20cm²", "24cm²"],
        correctAnswer: "30cm²",
        explanation: "Diện tích = (8 + 4) x 5 : 2 = 30cm².",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Hình hộp chữ nhật dài 5cm, rộng 2cm, cao 3cm. Thể tích là bao nhiêu?",
        options: ["10cm³", "30cm³", "20cm³", "15cm³"],
        correctAnswer: "30cm³",
        explanation: "Thể tích = 5 x 2 x 3 = 30cm³.",
      },
      {
        type: "multiple_choice",
        content: "Hình lập phương cạnh 2cm có thể tích bao nhiêu?",
        options: ["4cm³", "6cm³", "8cm³", "16cm³"],
        correctAnswer: "8cm³",
        explanation: "Thể tích = 2 x 2 x 2 = 8cm³.",
      },
    ],
  },

  // ===== Tiếng Việt — Lớp 5 =====
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào đồng nghĩa với 'đẹp'?",
        options: ["Xinh", "Xấu", "Cũ", "Buồn"],
        correctAnswer: "Xinh",
        explanation: "'Xinh' có nghĩa gần giống 'đẹp'.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào đồng nghĩa với 'to lớn'?",
        options: ["Khổng lồ", "Nhỏ bé", "Xinh xắn", "Mảnh mai"],
        correctAnswer: "Khổng lồ",
        explanation: "'Khổng lồ' có nghĩa gần giống 'to lớn'.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ 'đầu' trong 'đầu người' là nghĩa gì?",
        options: ["Nghĩa gốc", "Nghĩa chuyển", "Không có nghĩa", "Từ đồng âm"],
        correctAnswer: "Nghĩa gốc",
        explanation: "'Đầu người' là nghĩa gốc, chỉ bộ phận cơ thể.",
      },
      {
        type: "multiple_choice",
        content: "Từ 'đầu' trong 'đầu làng' là nghĩa gì?",
        options: ["Nghĩa gốc", "Nghĩa chuyển", "Không xác định", "Từ trái nghĩa"],
        correctAnswer: "Nghĩa chuyển",
        explanation: "'Đầu làng' dùng nghĩa chuyển, chỉ vị trí bắt đầu của làng.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào sau đây là đại từ?",
        options: ["chạy", "bàn", "chúng ta", "đẹp"],
        correctAnswer: "chúng ta",
        explanation: "'Chúng ta' là đại từ xưng hô.",
      },
      {
        type: "multiple_choice",
        content: "Đại từ giúp câu văn tránh điều gì?",
        options: ["Tránh lặp từ", "Tránh sai chính tả", "Tránh câu dài", "Tránh dấu câu"],
        correctAnswer: "Tránh lặp từ",
        explanation: "Đại từ giúp tránh lặp lại danh từ đã nhắc đến.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Nếu trời mưa thì em sẽ ở nhà.' dùng cặp quan hệ từ nào?",
        options: ["Vì...nên", "Nếu...thì", "Tuy...nhưng", "Không những...mà còn"],
        correctAnswer: "Nếu...thì",
        explanation: "'Nếu...thì' là cặp quan hệ từ chỉ điều kiện - kết quả.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào sau đây không phải là quan hệ từ?",
        options: ["và", "nhưng", "đẹp", "vì"],
        correctAnswer: "đẹp",
        explanation: "'Đẹp' là tính từ, không phải quan hệ từ.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Cách lặp từ ngữ để liên kết câu là gì?",
        options: [
          "Dùng lại một từ ngữ đã xuất hiện ở câu trước",
          "Luôn thay đổi từ ngữ",
          "Không dùng từ nối",
          "Viết câu thật ngắn",
        ],
        correctAnswer: "Dùng lại một từ ngữ đã xuất hiện ở câu trước",
        explanation: "Lặp từ ngữ là nhắc lại một từ đã dùng để liên kết ý.",
      },
      {
        type: "multiple_choice",
        content: "Từ nối nào thường dùng để liên kết câu?",
        options: ["vì vậy, tuy nhiên", "chạy, nhảy", "đẹp, xấu", "bàn, ghế"],
        correctAnswer: "vì vậy, tuy nhiên",
        explanation: "Đây là các từ nối thường dùng để liên kết câu trong đoạn văn.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào có nghĩa gần với 'đoàn kết'?",
        options: ["Chia rẽ", "Hợp tác", "Tranh chấp", "Xung đột"],
        correctAnswer: "Hợp tác",
        explanation: "'Hợp tác' có nghĩa gần với 'đoàn kết'.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào sau đây thể hiện tinh thần hòa bình?",
        options: ["Thân thiện", "Thù địch", "Xung đột", "Chiến tranh"],
        correctAnswer: "Thân thiện",
        explanation: "'Thân thiện' thể hiện tinh thần hòa bình, hữu nghị.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Khi tả cảnh buổi sáng, con nên bắt đầu miêu tả từ đâu?",
        options: [
          "Chi tiết nhỏ nhất trước",
          "Bao quát khung cảnh trước rồi đến chi tiết",
          "Chỉ tả một chi tiết",
          "Không cần tả gì",
        ],
        correctAnswer: "Bao quát khung cảnh trước rồi đến chi tiết",
        explanation: "Văn tả cảnh thường đi từ bao quát đến chi tiết.",
      },
      {
        type: "multiple_choice",
        content: "Câu văn tả người nên tránh điều gì?",
        options: [
          "Miêu tả ngoại hình",
          "Miêu tả tính cách",
          "Liệt kê khô khan, thiếu cảm xúc",
          "Sử dụng từ ngữ gợi hình",
        ],
        correctAnswer: "Liệt kê khô khan, thiếu cảm xúc",
        explanation: "Văn tả người cần tránh liệt kê khô khan, nên có cảm xúc, hình ảnh sinh động.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Ông của Lan thường kể chuyện gì cho cả nhà nghe?",
        options: [
          "Chuyện cổ tích",
          "Những năm tháng chiến đấu bảo vệ đất nước",
          "Chuyện học tập",
          "Chuyện đi làm",
        ],
        correctAnswer: "Những năm tháng chiến đấu bảo vệ đất nước",
        explanation: "Bài đọc kể ông kể chuyện những năm tháng chiến đấu bảo vệ đất nước.",
      },
      {
        type: "multiple_choice",
        content: "Câu chuyện muốn nhắn nhủ điều gì đến người đọc?",
        options: [
          "Nên quên đi quá khứ",
          "Biết ơn và trân trọng sự hy sinh của thế hệ trước",
          "Không cần học hành",
          "Chỉ nên vui chơi",
        ],
        correctAnswer: "Biết ơn và trân trọng sự hy sinh của thế hệ trước",
        explanation: "Câu chuyện đề cao lòng biết ơn đối với thế hệ đi trước.",
      },
    ],
  },

  // ===== Tiếng Anh — Lớp 5 =====
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "'I am doing my homework.' nghĩa là gì?",
        options: [
          "Tôi đang làm bài tập",
          "Tôi đã làm bài tập",
          "Tôi thích làm bài tập",
          "Tôi không làm bài tập",
        ],
        correctAnswer: "Tôi đang làm bài tập",
        explanation: "'I am doing my homework.' nghĩa là tôi đang làm bài tập.",
      },
      {
        type: "multiple_choice",
        content: "Động từ trong thì hiện tại tiếp diễn được thêm đuôi gì?",
        options: ["-ed", "-ing", "-s", "-er"],
        correctAnswer: "-ing",
        explanation: "Động từ thêm đuôi -ing trong thì hiện tại tiếp diễn.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "'Smaller' nghĩa là gì?",
        options: ["Lớn hơn", "Nhỏ hơn", "Cao hơn", "Nhanh hơn"],
        correctAnswer: "Nhỏ hơn",
        explanation: "'Smaller' nghĩa là nhỏ hơn.",
      },
      {
        type: "multiple_choice",
        content: "'Taller' nghĩa là gì?",
        options: ["Thấp hơn", "Cao hơn", "To hơn", "Nhỏ hơn"],
        correctAnswer: "Cao hơn",
        explanation: "'Taller' nghĩa là cao hơn.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "'Stomachache' nghĩa là gì?",
        options: ["Đau đầu", "Đau bụng", "Đau răng", "Sốt"],
        correctAnswer: "Đau bụng",
        explanation: "'Stomachache' nghĩa là đau bụng.",
      },
      {
        type: "multiple_choice",
        content: "'Cough' nghĩa là gì?",
        options: ["Ho", "Sốt", "Đau đầu", "Đau bụng"],
        correctAnswer: "Ho",
        explanation: "'Cough' nghĩa là ho.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "'Save water' nghĩa là gì?",
        options: ["Lãng phí nước", "Tiết kiệm nước", "Làm bẩn nước", "Uống nước"],
        correctAnswer: "Tiết kiệm nước",
        explanation: "'Save water' nghĩa là tiết kiệm nước.",
      },
      {
        type: "multiple_choice",
        content: "Việc nào sau đây gây hại cho môi trường?",
        options: ["Trồng cây", "Tái chế rác", "Vứt rác bừa bãi", "Tiết kiệm nước"],
        correctAnswer: "Vứt rác bừa bãi",
        explanation: "Vứt rác bừa bãi gây ô nhiễm môi trường.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Christmas' là lễ hội gì?",
        options: ["Giáng sinh", "Tết Nguyên Đán", "Trung thu", "Halloween"],
        correctAnswer: "Giáng sinh",
        explanation: "'Christmas' nghĩa là lễ Giáng sinh.",
      },
      {
        type: "multiple_choice",
        content: "'Fireworks' nghĩa là gì?",
        options: ["Đèn lồng", "Pháo hoa", "Bánh trung thu", "Cây nêu"],
        correctAnswer: "Pháo hoa",
        explanation: "'Fireworks' nghĩa là pháo hoa.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Người đến từ England gọi là gì?",
        options: ["English", "America", "Japan", "Vietnam"],
        correctAnswer: "English",
        explanation: "Người đến từ England gọi là 'English'.",
      },
      {
        type: "multiple_choice",
        content: "'I am English.' nghĩa là gì?",
        options: ["Tôi là người Anh", "Tôi là người Mỹ", "Tôi là người Nhật", "Tôi là người Việt"],
        correctAnswer: "Tôi là người Anh",
        explanation: "'English' nghĩa là người Anh.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "'I am going to play football tomorrow.' nghĩa là gì?",
        options: [
          "Tôi đã chơi bóng đá hôm qua",
          "Ngày mai tôi định chơi bóng đá",
          "Tôi không thích bóng đá",
          "Tôi đang chơi bóng đá",
        ],
        correctAnswer: "Ngày mai tôi định chơi bóng đá",
        explanation: "'I am going to...' diễn tả dự định trong tương lai.",
      },
      {
        type: "multiple_choice",
        content: "Cấu trúc 'going to' thường đi kèm với động từ ở dạng nào?",
        options: ["Động từ nguyên thể", "Động từ thêm -ed", "Động từ thêm -ing", "Động từ thêm -s"],
        correctAnswer: "Động từ nguyên thể",
        explanation: "Sau 'going to' là động từ nguyên thể (không chia).",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "'River' nghĩa là gì?",
        options: ["Núi", "Sông", "Biển", "Rừng"],
        correctAnswer: "Sông",
        explanation: "'River' nghĩa là sông.",
      },
      {
        type: "multiple_choice",
        content: "'Ocean' nghĩa là gì?",
        options: ["Đại dương", "Sa mạc", "Rừng", "Thác nước"],
        correctAnswer: "Đại dương",
        explanation: "'Ocean' nghĩa là đại dương.",
      },
    ],
  },
];
