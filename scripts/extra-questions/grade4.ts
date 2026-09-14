import type { ExtraEntry } from "./grade1";

export const GRADE4_EXTRA: ExtraEntry[] = [
  // ===== Toán — Lớp 4 =====
  {
    subjectId: "toan",
    grade: 4,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Số 5.000.000 đọc là gì?",
        options: ["Năm mươi nghìn", "Năm trăm nghìn", "Năm triệu", "Năm mươi triệu"],
        correctAnswer: "Năm triệu",
        explanation: "5.000.000 đọc là 'năm triệu'.",
      },
      {
        type: "multiple_choice",
        content: "Số nào lớn hơn: 1.500.000 hay 999.999?",
        options: ["1.500.000", "999.999"],
        correctAnswer: "1.500.000",
        explanation: "1.500.000 có 7 chữ số, lớn hơn 999.999 có 6 chữ số.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "25 x 11 = ?",
        options: ["265", "275", "285", "255"],
        correctAnswer: "275",
        explanation: "25 x 11 = 275.",
      },
      {
        type: "multiple_choice",
        content: "18 x 13 = ?",
        options: ["224", "234", "244", "214"],
        correctAnswer: "234",
        explanation: "18 x 13 = 234.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "108 : 4 = ?",
        options: ["25", "26", "27", "28"],
        correctAnswer: "27",
        explanation: "108 : 4 = 27.",
      },
      {
        type: "multiple_choice",
        content: "63 : 7 = ?",
        options: ["7", "8", "9", "6"],
        correctAnswer: "9",
        explanation: "63 : 7 = 9.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Phân số 5/6 có mẫu số là bao nhiêu?",
        options: ["5", "6", "11", "1"],
        correctAnswer: "6",
        explanation: "Trong phân số 5/6, mẫu số là 6.",
      },
      {
        type: "multiple_choice",
        content: "Phân số nào có tử số bằng mẫu số?",
        options: ["3/4", "4/4", "4/3", "1/4"],
        correctAnswer: "4/4",
        explanation: "4/4 có tử số và mẫu số đều bằng 4.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "So sánh 4/5 và 2/5",
        options: ["4/5 > 2/5", "4/5 < 2/5", "4/5 = 2/5", "Không so sánh được"],
        correctAnswer: "4/5 > 2/5",
        explanation: "Cùng mẫu số, 4 > 2 nên 4/5 > 2/5.",
      },
      {
        type: "multiple_choice",
        content: "Phân số nào bé hơn: 1/8 hay 5/8?",
        options: ["1/8", "5/8"],
        correctAnswer: "1/8",
        explanation: "Cùng mẫu số 8, tử số 1 < 5 nên 1/8 bé hơn.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Hình bình hành có mấy góc?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "Hình bình hành có 4 góc.",
      },
      {
        type: "multiple_choice",
        content: "Đặc điểm nào đúng với hình thoi?",
        options: ["4 góc vuông", "4 cạnh bằng nhau", "3 cạnh", "Không có cạnh nào bằng nhau"],
        correctAnswer: "4 cạnh bằng nhau",
        explanation: "Hình thoi có đặc điểm 4 cạnh bằng nhau.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Hình chữ nhật dài 9cm, rộng 3cm. Diện tích là bao nhiêu?",
        options: ["12cm²", "18cm²", "24cm²", "27cm²"],
        correctAnswer: "27cm²",
        explanation: "Diện tích = 9 x 3 = 27cm².",
      },
      {
        type: "multiple_choice",
        content: "Hình vuông cạnh 7cm có diện tích bao nhiêu?",
        options: ["14cm²", "28cm²", "49cm²", "36cm²"],
        correctAnswer: "49cm²",
        explanation: "Diện tích = 7 x 7 = 49cm².",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Trung bình cộng của 2, 4, 6, 8 là bao nhiêu?",
        options: ["4", "5", "6", "20"],
        correctAnswer: "5",
        explanation: "(2+4+6+8):4 = 20:4 = 5.",
      },
      {
        type: "multiple_choice",
        content: "Trung bình cộng của 10 và 20 là bao nhiêu?",
        options: ["10", "15", "20", "30"],
        correctAnswer: "15",
        explanation: "(10+20):2 = 15.",
      },
    ],
  },

  // ===== Tiếng Việt — Lớp 4 =====
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ 'học sinh' thuộc từ loại nào?",
        options: ["Danh từ", "Động từ", "Tính từ", "Không phải từ loại"],
        correctAnswer: "Danh từ",
        explanation: "'Học sinh' chỉ người, là danh từ.",
      },
      {
        type: "multiple_choice",
        content: "Từ 'ngoan ngoãn' thuộc từ loại nào?",
        options: ["Danh từ", "Động từ", "Tính từ", "Không phải từ loại"],
        correctAnswer: "Tính từ",
        explanation: "'Ngoan ngoãn' chỉ đặc điểm, là tính từ.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Hôm nay trời đẹp.' là câu gì?",
        options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"],
        correctAnswer: "Câu kể",
        explanation: "Câu kể lại sự việc, kết thúc bằng dấu chấm.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Đừng làm ồn!' là câu gì?",
        options: ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"],
        correctAnswer: "Câu khiến",
        explanation: "Câu yêu cầu, đề nghị là câu khiến.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "Vị ngữ trong câu 'Bé đang chơi bóng.' là gì?",
        options: ["Bé", "đang chơi bóng", "bóng", "chơi"],
        correctAnswer: "đang chơi bóng",
        explanation: "'Đang chơi bóng' trả lời cho câu hỏi 'làm gì?', là vị ngữ.",
      },
      {
        type: "multiple_choice",
        content: "Chủ ngữ trong câu 'Cả lớp đang làm bài kiểm tra.' là gì?",
        options: ["Cả lớp", "đang làm", "bài kiểm tra", "làm bài"],
        correctAnswer: "Cả lớp",
        explanation: "'Cả lớp' trả lời cho câu hỏi 'Ai?', là chủ ngữ.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào có nghĩa gần với 'ước mơ'?",
        options: ["Mơ ước", "Lo âu", "Chán nản", "Giận dữ"],
        correctAnswer: "Mơ ước",
        explanation: "'Mơ ước' đồng nghĩa với 'ước mơ'.",
      },
      {
        type: "multiple_choice",
        content: "'Lý tưởng' trong chủ đề ước mơ có nghĩa gần với điều gì?",
        options: ["Mục tiêu sống cao đẹp", "Nỗi sợ", "Sự chán nản", "Sự tức giận"],
        correctAnswer: "Mục tiêu sống cao đẹp",
        explanation: "'Lý tưởng' nghĩa là mục tiêu, ước mơ cao đẹp mà con người hướng tới.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Học tập' là từ gì?",
        options: ["Từ ghép", "Từ láy", "Từ đơn", "Không xác định"],
        correctAnswer: "Từ ghép",
        explanation: "'Học' và 'tập' đều có nghĩa, ghép lại thành từ ghép.",
      },
      {
        type: "multiple_choice",
        content: "'Long lanh' là từ gì?",
        options: ["Từ ghép", "Từ láy", "Từ đơn", "Không xác định"],
        correctAnswer: "Từ láy",
        explanation: "'Long lanh' có âm đầu lặp lại, là từ láy.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Dấu ngoặc kép trong câu 'Bé nói: \"Con yêu mẹ.\"' dùng để làm gì?",
        options: [
          "Đánh dấu lời nói trực tiếp của bé",
          "Kết thúc câu",
          "Ngăn cách các từ",
          "Thể hiện câu hỏi",
        ],
        correctAnswer: "Đánh dấu lời nói trực tiếp của bé",
        explanation: "Dấu ngoặc kép đánh dấu lời nói trực tiếp.",
      },
      {
        type: "multiple_choice",
        content: "Câu nào sau đây dùng dấu hai chấm đúng cách?",
        options: [
          "Cô giáo dặn: Các em nhớ làm bài tập.",
          "Cô giáo dặn Các em nhớ làm bài tập.",
          "Cô giáo, dặn các em nhớ làm bài tập.",
          "Cô giáo dặn các em! nhớ làm bài tập.",
        ],
        correctAnswer: "Cô giáo dặn: Các em nhớ làm bài tập.",
        explanation: "Trước lời dặn trực tiếp cần dùng dấu hai chấm.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào là câu ghép?",
        options: ["Em học bài.", "Vì trời lạnh nên em mặc áo ấm.", "Em đi học.", "Con mèo kêu."],
        correctAnswer: "Vì trời lạnh nên em mặc áo ấm.",
        explanation: "Câu có 2 vế nối bằng 'vì...nên', là câu ghép.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào thường dùng để nối các vế trong câu ghép?",
        options: ["và, nhưng, vì, nên", "chỉ, chỉ có", "rất, quá", "đã, đang"],
        correctAnswer: "và, nhưng, vì, nên",
        explanation: "Đây là các từ nối phổ biến trong câu ghép.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu chuyện xảy ra trong hoàn cảnh nào?",
        options: ["Trong lớp học", "Trong một lần đi dã ngoại", "Ở nhà", "Ở sân trường"],
        correctAnswer: "Trong một lần đi dã ngoại",
        explanation: "Câu chuyện kể về một lần đi dã ngoại.",
      },
      {
        type: "multiple_choice",
        content: "Vì sao hành động của Tuấn được coi là dũng cảm?",
        options: [
          "Vì Tuấn khỏe mạnh",
          "Vì Tuấn dám ở lại nơi tối một mình để giúp em nhỏ",
          "Vì Tuấn học giỏi",
          "Vì Tuấn chạy nhanh",
        ],
        correctAnswer: "Vì Tuấn dám ở lại nơi tối một mình để giúp em nhỏ",
        explanation: "Tuấn dám đối mặt với khó khăn (trời tối) để giúp đỡ người khác.",
      },
    ],
  },

  // ===== Tiếng Anh — Lớp 4 =====
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "'It's a quarter past 8.' nghĩa là gì?",
        options: ["8 giờ", "8 giờ 15 phút", "8 giờ 30 phút", "8 giờ 45 phút"],
        correctAnswer: "8 giờ 15 phút",
        explanation: "'A quarter past' nghĩa là 15 phút.",
      },
      {
        type: "multiple_choice",
        content: "Câu nào dùng để hỏi về giờ giấc?",
        options: ["What is your name?", "What time is it?", "Where are you?", "How are you?"],
        correctAnswer: "What time is it?",
        explanation: "Đây là câu hỏi về giờ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "'Reading' nghĩa là gì?",
        options: ["Đọc sách", "Vẽ tranh", "Xem tivi", "Chơi game"],
        correctAnswer: "Đọc sách",
        explanation: "'Reading' nghĩa là đọc sách.",
      },
      {
        type: "multiple_choice",
        content: "'Watching TV' nghĩa là gì?",
        options: ["Xem tivi", "Nghe nhạc", "Đọc sách", "Vẽ tranh"],
        correctAnswer: "Xem tivi",
        explanation: "'Watching TV' nghĩa là xem tivi.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "'Engineer' nghĩa là nghề gì?",
        options: ["Kỹ sư", "Ca sĩ", "Tài xế", "Nông dân"],
        correctAnswer: "Kỹ sư",
        explanation: "'Engineer' nghĩa là kỹ sư.",
      },
      {
        type: "multiple_choice",
        content: "'Singer' nghĩa là nghề gì?",
        options: ["Ca sĩ", "Tài xế", "Giáo viên", "Bác sĩ"],
        correctAnswer: "Ca sĩ",
        explanation: "'Singer' nghĩa là ca sĩ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "'Next to' nghĩa là gì?",
        options: ["Ở trên", "Ở dưới", "Bên cạnh", "Phía sau"],
        correctAnswer: "Bên cạnh",
        explanation: "'Next to' nghĩa là bên cạnh.",
      },
      {
        type: "multiple_choice",
        content: "'Behind' nghĩa là gì?",
        options: ["Phía trước", "Phía sau", "Bên trên", "Bên trong"],
        correctAnswer: "Phía sau",
        explanation: "'Behind' nghĩa là phía sau.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Monkey' nghĩa là con gì?",
        options: ["Con khỉ", "Con hổ", "Con voi", "Con sư tử"],
        correctAnswer: "Con khỉ",
        explanation: "'Monkey' nghĩa là con khỉ.",
      },
      {
        type: "multiple_choice",
        content: "'Tiger' nghĩa là con gì?",
        options: ["Con hổ", "Con sư tử", "Con voi", "Con khỉ"],
        correctAnswer: "Con hổ",
        explanation: "'Tiger' nghĩa là con hổ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "'Car' nghĩa là phương tiện gì?",
        options: ["Ô tô", "Xe đạp", "Xe buýt", "Tàu hỏa"],
        correctAnswer: "Ô tô",
        explanation: "'Car' nghĩa là ô tô.",
      },
      {
        type: "multiple_choice",
        content: "'Bike' nghĩa là phương tiện gì?",
        options: ["Xe đạp", "Xe máy", "Ô tô", "Máy bay"],
        correctAnswer: "Xe đạp",
        explanation: "'Bike' nghĩa là xe đạp.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "'Trousers' nghĩa là gì?",
        options: ["Áo sơ mi", "Quần dài", "Giày", "Mũ"],
        correctAnswer: "Quần dài",
        explanation: "'Trousers' nghĩa là quần dài.",
      },
      {
        type: "multiple_choice",
        content: "'Money' nghĩa là gì?",
        options: ["Tiền", "Giá cả", "Cửa hàng", "Món quà"],
        correctAnswer: "Tiền",
        explanation: "'Money' nghĩa là tiền.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "'Principal' nghĩa là gì?",
        options: ["Hiệu trưởng", "Giáo viên", "Bạn cùng lớp", "Thủ thư"],
        correctAnswer: "Hiệu trưởng",
        explanation: "'Principal' nghĩa là hiệu trưởng.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'I play football on the playground.' nghĩa là gì?",
        options: [
          "Tôi đọc sách trong thư viện",
          "Tôi chơi bóng đá ở sân chơi",
          "Tôi học bài trong lớp",
          "Tôi ăn trưa ở căng tin",
        ],
        correctAnswer: "Tôi chơi bóng đá ở sân chơi",
        explanation: "'Playground' nghĩa là sân chơi.",
      },
    ],
  },
];
