import type { ExtraEntry } from "./grade1";

export const GRADE3_EXTRA: ExtraEntry[] = [
  // ===== Toán — Lớp 3 =====
  {
    subjectId: "toan",
    grade: 3,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Số 1000 có mấy chữ số?",
        options: ["3", "4", "5", "2"],
        correctAnswer: "4",
        explanation: "Số 1000 gồm 4 chữ số: 1, 0, 0, 0.",
      },
      {
        type: "multiple_choice",
        content: "Số nào bé nhất: 205, 250, 502?",
        options: ["205", "250", "502", "Không xác định"],
        correctAnswer: "205",
        explanation: "205 có chữ số hàng chục nhỏ nhất trong nhóm.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "412 + 256 = ?",
        options: ["658", "668", "678", "648"],
        correctAnswer: "668",
        explanation: "412 + 256 = 668.",
      },
      {
        type: "multiple_choice",
        content: "800 - 345 = ?",
        options: ["445", "455", "465", "435"],
        correctAnswer: "455",
        explanation: "800 - 345 = 455.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "4 x 3 = ?",
        options: ["7", "12", "16", "9"],
        correctAnswer: "12",
        explanation: "4 x 3 = 12.",
      },
      {
        type: "multiple_choice",
        content: "3 x 2 = ?",
        options: ["5", "6", "9", "3"],
        correctAnswer: "6",
        explanation: "3 x 2 = 6.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "6 : 2 = ?",
        options: ["2", "3", "4", "1"],
        correctAnswer: "3",
        explanation: "6 : 2 = 3.",
      },
      {
        type: "multiple_choice",
        content: "15 : 3 = ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "15 : 3 = 5.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Hình chữ nhật dài 7cm, rộng 3cm. Chu vi là bao nhiêu?",
        options: ["10cm", "20cm", "21cm", "14cm"],
        correctAnswer: "20cm",
        explanation: "Chu vi = (7 + 3) x 2 = 20cm.",
      },
      {
        type: "multiple_choice",
        content: "Hình vuông cạnh 6cm có chu vi bao nhiêu?",
        options: ["12cm", "18cm", "24cm", "36cm"],
        correctAnswer: "24cm",
        explanation: "Chu vi = 6 x 4 = 24cm.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Gấp 4 lên 5 lần được bao nhiêu?",
        options: ["9", "20", "16", "24"],
        correctAnswer: "20",
        explanation: "4 x 5 = 20.",
      },
      {
        type: "multiple_choice",
        content: "Giảm 20 đi 5 lần được bao nhiêu?",
        options: ["4", "5", "15", "25"],
        correctAnswer: "4",
        explanation: "20 : 5 = 4.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "3kg bằng bao nhiêu gam?",
        options: ["300", "3000", "30000", "30"],
        correctAnswer: "3000",
        explanation: "3kg = 3 x 1000g = 3000g.",
      },
      {
        type: "multiple_choice",
        content: "1000g bằng bao nhiêu kg?",
        options: ["1", "10", "100", "0,1"],
        correctAnswer: "1",
        explanation: "1000g = 1kg.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Tháng nào có 31 ngày?",
        options: ["Tháng 2", "Tháng 4", "Tháng 1", "Tháng 6"],
        correctAnswer: "Tháng 1",
        explanation: "Tháng 1 có 31 ngày, còn tháng 4 và tháng 6 chỉ có 30 ngày.",
      },
      {
        type: "multiple_choice",
        content: "Sau ngày Chủ Nhật là ngày nào?",
        options: ["Thứ Bảy", "Thứ Hai", "Thứ Ba", "Thứ Sáu"],
        correctAnswer: "Thứ Hai",
        explanation: "Sau Chủ Nhật là Thứ Hai, bắt đầu tuần mới.",
      },
    ],
  },

  // ===== Tiếng Việt — Lớp 3 =====
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào có hình ảnh so sánh?",
        options: ["Bé đi học.", "Dòng sông như dải lụa.", "Trời hôm nay đẹp.", "Em thích đọc sách."],
        correctAnswer: "Dòng sông như dải lụa.",
        explanation: "Câu dùng từ 'như' để so sánh dòng sông với dải lụa.",
      },
      {
        type: "multiple_choice",
        content: "Trong câu so sánh, từ nào thường được dùng để nối hai sự vật?",
        options: ["và", "như", "thì", "nhưng"],
        correctAnswer: "như",
        explanation: "'Như' là từ thường dùng trong câu so sánh.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào có sử dụng nhân hóa?",
        options: [
          "Bầu trời xanh.",
          "Chú mèo lười biếng ngủ suốt ngày.",
          "Ông trăng tròn vành vạnh đang mỉm cười.",
          "Con đường dài.",
        ],
        correctAnswer: "Ông trăng tròn vành vạnh đang mỉm cười.",
        explanation: "Trăng được gọi 'ông' và 'mỉm cười' như con người, đây là nhân hóa.",
      },
      {
        type: "multiple_choice",
        content: "Biện pháp nhân hóa giúp câu văn trở nên như thế nào?",
        options: ["Khô khan", "Sinh động, gần gũi", "Khó hiểu", "Ngắn gọn hơn"],
        correctAnswer: "Sinh động, gần gũi",
        explanation: "Nhân hóa làm sự vật trở nên sinh động, gần gũi như con người.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Em học ở đâu?' hỏi về điều gì?",
        options: ["Thời gian", "Địa điểm", "Nguyên nhân", "Cách thức"],
        correctAnswer: "Địa điểm",
        explanation: "'Ở đâu' hỏi về địa điểm.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào dùng để hỏi về nguyên nhân?",
        options: ["Khi nào", "Ở đâu", "Vì sao", "Như thế nào"],
        correctAnswer: "Vì sao",
        explanation: "'Vì sao' dùng để hỏi về nguyên nhân.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Em thích vẽ tranh hát và múa.' cần thêm dấu phẩy ở đâu?",
        options: ["Sau 'vẽ tranh'", "Sau 'Em'", "Sau 'thích'", "Không cần thêm"],
        correctAnswer: "Sau 'vẽ tranh'",
        explanation: "Dấu phẩy ngăn cách các từ liệt kê: vẽ tranh, hát và múa.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Vì trời mưa nên em nghỉ học.' có cần dấu phẩy sau 'Vì trời mưa' không?",
        options: [
          "Có, để ngăn cách trạng ngữ",
          "Không cần thiết",
          "Chỉ cần dấu chấm",
          "Chỉ cần dấu hỏi",
        ],
        correctAnswer: "Có, để ngăn cách trạng ngữ",
        explanation: "Dấu phẩy ngăn cách phần nguyên nhân với phần kết quả trong câu.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào sau đây gắn với hình ảnh quê hương?",
        options: ["Con đò", "Thang máy", "Tòa nhà", "Xe hơi"],
        correctAnswer: "Con đò",
        explanation: "'Con đò' là hình ảnh quen thuộc của làng quê Việt Nam.",
      },
      {
        type: "multiple_choice",
        content: "'Mái đình' thường gắn với hình ảnh nào?",
        options: ["Thành phố hiện đại", "Làng quê Việt Nam", "Trường học", "Siêu thị"],
        correctAnswer: "Làng quê Việt Nam",
        explanation: "'Mái đình' là hình ảnh đặc trưng của làng quê Việt Nam.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ trái nghĩa với 'to' là gì?",
        options: ["Lớn", "Nhỏ", "Dài", "Rộng"],
        correctAnswer: "Nhỏ",
        explanation: "'To' và 'nhỏ' là cặp từ trái nghĩa.",
      },
      {
        type: "multiple_choice",
        content: "Từ trái nghĩa với 'vui' là gì?",
        options: ["Buồn", "Hạnh phúc", "Sung sướng", "Thích thú"],
        correctAnswer: "Buồn",
        explanation: "'Vui' và 'buồn' là cặp từ trái nghĩa.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Chú chó chạy nhanh trong sân.' thuộc mẫu câu nào?",
        options: ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Không phải câu"],
        correctAnswer: "Ai làm gì?",
        explanation: "Câu kể hoạt động 'chạy nhanh' của chú chó.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Con mèo của em rất tinh nghịch.' thuộc mẫu câu nào?",
        options: ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Không phải câu"],
        correctAnswer: "Ai thế nào?",
        explanation: "Câu miêu tả đặc điểm 'tinh nghịch' của con mèo.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu chuyện xảy ra trên đường đi đâu?",
        options: ["Đi chợ", "Đi học", "Đi chơi", "Đi công viên"],
        correctAnswer: "Đi học",
        explanation: "Câu chuyện kể việc xảy ra trên đường đến trường.",
      },
      {
        type: "multiple_choice",
        content: "Qua câu chuyện, con rút ra bài học gì?",
        options: [
          "Không nên giúp đỡ người khác",
          "Nên giúp đỡ bạn bè khi gặp khó khăn",
          "Chỉ nên quan tâm bản thân",
          "Không cần đi học đúng giờ",
        ],
        correctAnswer: "Nên giúp đỡ bạn bè khi gặp khó khăn",
        explanation: "Câu chuyện đề cao tinh thần giúp đỡ bạn bè.",
      },
    ],
  },

  // ===== Tiếng Anh — Lớp 3 =====
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "'Close your book' nghĩa là gì?",
        options: ["Mở sách ra", "Đóng sách lại", "Đứng lên", "Ngồi xuống"],
        correctAnswer: "Đóng sách lại",
        explanation: "'Close your book' nghĩa là đóng sách lại.",
      },
      {
        type: "multiple_choice",
        content: "'Sit down' nghĩa là gì?",
        options: ["Đứng lên", "Ngồi xuống", "Lắng nghe", "Nhìn"],
        correctAnswer: "Ngồi xuống",
        explanation: "'Sit down' nghĩa là ngồi xuống.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "'Thirty' nghĩa là số mấy?",
        options: ["13", "30", "33", "3"],
        correctAnswer: "30",
        explanation: "'Thirty' nghĩa là số 30.",
      },
      {
        type: "multiple_choice",
        content: "Số 60 trong tiếng Anh đọc là gì?",
        options: ["Sixteen", "Sixty", "Six", "Sixtieth"],
        correctAnswer: "Sixty",
        explanation: "Số 60 đọc là 'sixty'.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "'Friend' nghĩa là gì?",
        options: ["Bạn bè", "Anh chị em", "Cô dì", "Chú bác"],
        correctAnswer: "Bạn bè",
        explanation: "'Friend' nghĩa là bạn bè.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'My cousin is nine years old.' nghĩa là gì?",
        options: ["Em họ tôi 9 tuổi", "Anh trai tôi 9 tuổi", "Bạn tôi 9 tuổi", "Cô tôi 9 tuổi"],
        correctAnswer: "Em họ tôi 9 tuổi",
        explanation: "'Cousin' nghĩa là anh/chị/em họ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "'Do homework' nghĩa là gì?",
        options: ["Làm bài tập", "Đi học", "Ăn sáng", "Chơi thể thao"],
        correctAnswer: "Làm bài tập",
        explanation: "'Do homework' nghĩa là làm bài tập.",
      },
      {
        type: "multiple_choice",
        content: "'Get up' nghĩa là gì?",
        options: ["Đi ngủ", "Ra khỏi giường", "Đánh răng", "Ăn cơm"],
        correctAnswer: "Ra khỏi giường",
        explanation: "'Get up' nghĩa là ra khỏi giường sau khi thức dậy.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Basketball' nghĩa là môn gì?",
        options: ["Bóng rổ", "Bóng bàn", "Bóng đá", "Cầu lông"],
        correctAnswer: "Bóng rổ",
        explanation: "'Basketball' nghĩa là bóng rổ.",
      },
      {
        type: "multiple_choice",
        content: "'Running' nghĩa là gì?",
        options: ["Bơi lội", "Chạy bộ", "Nhảy dây", "Đá bóng"],
        correctAnswer: "Chạy bộ",
        explanation: "'Running' nghĩa là chạy bộ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "'Bathroom' nghĩa là gì?",
        options: ["Phòng tắm", "Phòng ngủ", "Phòng khách", "Nhà bếp"],
        correctAnswer: "Phòng tắm",
        explanation: "'Bathroom' nghĩa là phòng tắm.",
      },
      {
        type: "multiple_choice",
        content: "'Garden' nghĩa là gì?",
        options: ["Khu vườn", "Phòng khách", "Nhà bếp", "Phòng ngủ"],
        correctAnswer: "Khu vườn",
        explanation: "'Garden' nghĩa là khu vườn.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "'Sad' nghĩa là cảm xúc gì?",
        options: ["Vui", "Buồn", "Mệt", "Đói"],
        correctAnswer: "Buồn",
        explanation: "'Sad' nghĩa là buồn.",
      },
      {
        type: "multiple_choice",
        content: "'Angry' nghĩa là cảm xúc gì?",
        options: ["Vui vẻ", "Tức giận", "Sợ hãi", "Mệt mỏi"],
        correctAnswer: "Tức giận",
        explanation: "'Angry' nghĩa là tức giận.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "'Autumn' (hay 'Fall') nghĩa là mùa gì?",
        options: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"],
        correctAnswer: "Mùa thu",
        explanation: "'Autumn'/'Fall' nghĩa là mùa thu.",
      },
      {
        type: "multiple_choice",
        content: "Có mấy mùa chính trong năm theo cách chia bốn mùa?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "Bốn mùa chính là xuân, hạ, thu, đông.",
      },
    ],
  },
];
