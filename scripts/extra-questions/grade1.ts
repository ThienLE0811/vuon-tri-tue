export type QuizQuestion = {
  type: "multiple_choice";
  content: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type ExtraEntry = {
  subjectId: string;
  grade: number;
  order: number;
  questions: QuizQuestion[];
};

export const GRADE1_EXTRA: ExtraEntry[] = [
  // ===== Toán — Lớp 1 =====
  {
    subjectId: "toan",
    grade: 1,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Số liền trước số 5 là số nào?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "Số liền trước nhỏ hơn 1 đơn vị: 5 - 1 = 4.",
      },
      {
        type: "multiple_choice",
        content: "Số nào lớn nhất: 2, 7, 4?",
        options: ["2", "7", "4", "0"],
        correctAnswer: "7",
        explanation: "7 là số lớn nhất trong ba số.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Số nào bé hơn: 3 hay 8?",
        options: ["3", "8"],
        correctAnswer: "3",
        explanation: "3 đứng trước 8 trong dãy đếm nên bé hơn.",
      },
      {
        type: "multiple_choice",
        content: "Điền dấu thích hợp: 10 ... 9",
        options: [">", "<", "="],
        correctAnswer: ">",
        explanation: "10 đứng sau 9 trong dãy đếm nên lớn hơn.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "5 + 4 = ?",
        options: ["8", "9", "10", "7"],
        correctAnswer: "9",
        explanation: "Đếm thêm 4 từ 5: 6, 7, 8, 9.",
      },
      {
        type: "multiple_choice",
        content: "1 + 6 = ?",
        options: ["6", "7", "8", "5"],
        correctAnswer: "7",
        explanation: "1 + 6 = 7.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "7 - 2 = ?",
        options: ["4", "5", "6", "3"],
        correctAnswer: "5",
        explanation: "7 - 2 = 5.",
      },
      {
        type: "multiple_choice",
        content: "10 - 5 = ?",
        options: ["4", "5", "6", "3"],
        correctAnswer: "5",
        explanation: "10 - 5 = 5.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Số 20 gồm mấy chục?",
        options: ["1", "2", "3", "0"],
        correctAnswer: "2",
        explanation: "20 = 2 chục 0 đơn vị.",
      },
      {
        type: "multiple_choice",
        content: "Số nào lớn hơn: 16 hay 19?",
        options: ["16", "19"],
        correctAnswer: "19",
        explanation: "19 lớn hơn 16.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "15 + 4 = ?",
        options: ["18", "19", "20", "17"],
        correctAnswer: "19",
        explanation: "15 + 4 = 19.",
      },
      {
        type: "multiple_choice",
        content: "18 - 5 = ?",
        options: ["12", "13", "14", "11"],
        correctAnswer: "13",
        explanation: "18 - 5 = 13.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Hình chữ nhật có bao nhiêu cạnh?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "Hình chữ nhật có 4 cạnh.",
      },
      {
        type: "multiple_choice",
        content: "Biển báo giao thông hình tam giác có hình dạng giống hình gì con đã học?",
        options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"],
        correctAnswer: "Hình tam giác",
        explanation: "Biển báo hình tam giác có hình dạng giống hình tam giác.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Trong hai kim của đồng hồ, kim nào chỉ giờ?",
        options: ["Kim dài", "Kim ngắn", "Cả hai kim", "Không kim nào"],
        correctAnswer: "Kim ngắn",
        explanation: "Kim ngắn (kim giờ) chỉ số giờ hiện tại.",
      },
      {
        type: "multiple_choice",
        content: "Kim ngắn chỉ số 9, kim dài chỉ số 12. Lúc đó là mấy giờ?",
        options: ["9 giờ", "12 giờ", "3 giờ", "6 giờ"],
        correctAnswer: "9 giờ",
        explanation: "Kim ngắn chỉ số 9 và kim dài chỉ 12 nghĩa là 9 giờ đúng.",
      },
    ],
  },

  // ===== Tiếng Việt — Lớp 1 =====
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Nét thẳng ngang có hình dạng giống dấu nào?",
        options: ["—", "|", "/", "⌒"],
        correctAnswer: "—",
        explanation: "Nét thẳng ngang là đường nằm ngang, giống dấu gạch ngang.",
      },
      {
        type: "multiple_choice",
        content: "Chữ cái nào được tạo từ nét thẳng đứng và nét thẳng ngang?",
        options: ["T", "O", "C", "S"],
        correctAnswer: "T",
        explanation: "Chữ T gồm một nét ngang và một nét đứng.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Tiếng Việt có bao nhiêu nguyên âm?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "Tiếng Việt có 12 nguyên âm.",
      },
      {
        type: "multiple_choice",
        content: "Chữ cái nào đứng đầu bảng chữ cái Tiếng Việt?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a",
        explanation: "Chữ 'a' là chữ cái đầu tiên trong bảng chữ cái.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "Tiếng 'bả' mang thanh gì?",
        options: ["Thanh sắc", "Thanh huyền", "Thanh hỏi", "Thanh nặng"],
        correctAnswer: "Thanh hỏi",
        explanation: "Dấu hỏi ( ? ) tạo thành tiếng 'bả'.",
      },
      {
        type: "multiple_choice",
        content: "Thanh nào không mang dấu?",
        options: ["Thanh sắc", "Thanh ngang", "Thanh huyền", "Thanh nặng"],
        correctAnswer: "Thanh ngang",
        explanation: "Thanh ngang là thanh không có dấu.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Ghép chữ 'b' với 'a' được tiếng gì?",
        options: ["ba", "bo", "be", "bi"],
        correctAnswer: "ba",
        explanation: "b + a = ba.",
      },
      {
        type: "multiple_choice",
        content: "Ghép chữ 'l' với 'a' được tiếng gì?",
        options: ["lo", "la", "le", "li"],
        correctAnswer: "la",
        explanation: "l + a = la.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Thêm dấu hỏi vào tiếng 'ba' được tiếng gì?",
        options: ["bá", "bà", "bả", "bạ"],
        correctAnswer: "bả",
        explanation: "'ba' + dấu hỏi = 'bả'.",
      },
      {
        type: "multiple_choice",
        content: "Thêm dấu ngã vào tiếng 'me' được tiếng gì?",
        options: ["mé", "mè", "mẻ", "mẽ"],
        correctAnswer: "mẽ",
        explanation: "'me' + dấu ngã = 'mẽ'.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào viết đúng quy tắc (chữ hoa đầu câu, dấu chấm cuối câu)?",
        options: ["bé đi học", "Bé đi học.", "Bé đi học", "bé đi học."],
        correctAnswer: "Bé đi học.",
        explanation: "Câu đúng phải viết hoa chữ đầu và có dấu chấm cuối câu.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Bà đi chợ.' nói về ai đang làm gì?",
        options: ["Bé đi học", "Bà đi chợ", "Mẹ nấu cơm", "Bố đọc sách"],
        correctAnswer: "Bà đi chợ",
        explanation: "Câu văn nói đúng về việc bà đang đi chợ.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào là từ chỉ cây cối?",
        options: ["Mèo", "Cây bàng", "Bàn", "Cô giáo"],
        correctAnswer: "Cây bàng",
        explanation: "Cây bàng là tên một loài cây.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào sau đây không phải từ chỉ sự vật?",
        options: ["Bàn", "Mèo", "Chạy", "Sách"],
        correctAnswer: "Chạy",
        explanation: "'Chạy' là từ chỉ hoạt động, không phải từ chỉ sự vật.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Bé trong câu chuyện có tình cảm như thế nào với Mun?",
        options: ["Không thích", "Sợ hãi", "Rất yêu quý", "Ghét bỏ"],
        correctAnswer: "Rất yêu quý",
        explanation: "Bài đọc kể Bé rất yêu quý Mun.",
      },
      {
        type: "multiple_choice",
        content: "Mun là loài vật gì?",
        options: ["Chó", "Mèo", "Gà", "Chim"],
        correctAnswer: "Mèo",
        explanation: "Mun là một chú mèo.",
      },
    ],
  },

  // ===== Tiếng Anh — Lớp 1 =====
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "'Good morning' nghĩa là gì?",
        options: ["Chào buổi tối", "Chào buổi sáng", "Tạm biệt", "Cảm ơn"],
        correctAnswer: "Chào buổi sáng",
        explanation: "'Good morning' nghĩa là chào buổi sáng.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào dùng để cảm ơn?",
        options: ["Hello", "Goodbye", "Thank you", "Sorry"],
        correctAnswer: "Thank you",
        explanation: "'Thank you' nghĩa là cảm ơn.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "'Three' nghĩa là số mấy?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "'Three' nghĩa là số 3.",
      },
      {
        type: "multiple_choice",
        content: "Số 6 trong tiếng Anh đọc là gì?",
        options: ["Five", "Six", "Seven", "Four"],
        correctAnswer: "Six",
        explanation: "Số 6 đọc là 'six'.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "'Black' nghĩa là màu gì?",
        options: ["Trắng", "Đen", "Đỏ", "Xanh"],
        correctAnswer: "Đen",
        explanation: "'Black' nghĩa là màu đen.",
      },
      {
        type: "multiple_choice",
        content: "Màu trắng trong tiếng Anh là gì?",
        options: ["Black", "White", "Blue", "Red"],
        correctAnswer: "White",
        explanation: "'White' nghĩa là màu trắng.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "'Father' nghĩa là gì?",
        options: ["Mẹ", "Bố", "Anh trai", "Bà"],
        correctAnswer: "Bố",
        explanation: "'Father' nghĩa là bố.",
      },
      {
        type: "multiple_choice",
        content: "'Brother' nghĩa là gì?",
        options: ["Chị/em gái", "Anh/em trai", "Mẹ", "Bố"],
        correctAnswer: "Anh/em trai",
        explanation: "'Brother' nghĩa là anh/em trai.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Dog' nghĩa là con gì?",
        options: ["Con mèo", "Con chó", "Con gà", "Con cá"],
        correctAnswer: "Con chó",
        explanation: "'Dog' nghĩa là con chó.",
      },
      {
        type: "multiple_choice",
        content: "'Fish' nghĩa là con gì?",
        options: ["Con cá", "Con gà", "Con chim", "Con voi"],
        correctAnswer: "Con cá",
        explanation: "'Fish' nghĩa là con cá.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "'Ruler' nghĩa là gì?",
        options: ["Cây bút chì", "Cây thước", "Cục tẩy", "Cái cặp"],
        correctAnswer: "Cây thước",
        explanation: "'Ruler' nghĩa là cây thước.",
      },
      {
        type: "multiple_choice",
        content: "'Bag' nghĩa là gì?",
        options: ["Cái cặp", "Quyển sách", "Cây bút", "Cục tẩy"],
        correctAnswer: "Cái cặp",
        explanation: "'Bag' nghĩa là cái cặp.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "'Nose' nghĩa là bộ phận nào?",
        options: ["Mắt", "Mũi", "Miệng", "Tai"],
        correctAnswer: "Mũi",
        explanation: "'Nose' nghĩa là mũi.",
      },
      {
        type: "multiple_choice",
        content: "'Mouth' nghĩa là bộ phận nào?",
        options: ["Miệng", "Tay", "Chân", "Đầu"],
        correctAnswer: "Miệng",
        explanation: "'Mouth' nghĩa là miệng.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "'Wednesday' nghĩa là thứ mấy?",
        options: ["Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"],
        correctAnswer: "Thứ Tư",
        explanation: "'Wednesday' nghĩa là Thứ Tư.",
      },
      {
        type: "multiple_choice",
        content: "'Saturday' nghĩa là ngày nào?",
        options: ["Thứ Bảy", "Chủ Nhật", "Thứ Sáu", "Thứ Năm"],
        correctAnswer: "Thứ Bảy",
        explanation: "'Saturday' nghĩa là Thứ Bảy.",
      },
    ],
  },
];
