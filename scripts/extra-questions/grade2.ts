import type { ExtraEntry } from "./grade1";

export const GRADE2_EXTRA: ExtraEntry[] = [
  // ===== Toán — Lớp 2 =====
  {
    subjectId: "toan",
    grade: 2,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Số 99 liền sau là số nào?",
        options: ["98", "100", "90", "109"],
        correctAnswer: "100",
        explanation: "99 + 1 = 100.",
      },
      {
        type: "multiple_choice",
        content: "Số tròn chục nhỏ nhất có hai chữ số là số nào?",
        options: ["1", "10", "100", "0"],
        correctAnswer: "10",
        explanation: "Số tròn chục nhỏ nhất có 2 chữ số là 10.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Số nào bé nhất: 34, 43, 24?",
        options: ["34", "43", "24", "Không xác định"],
        correctAnswer: "24",
        explanation: "24 có chữ số hàng chục nhỏ nhất trong ba số.",
      },
      {
        type: "multiple_choice",
        content: "Điền dấu thích hợp: 50 ... 50",
        options: [">", "<", "="],
        correctAnswer: "=",
        explanation: "Hai số bằng nhau.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "56 + 27 = ?",
        options: ["73", "83", "93", "63"],
        correctAnswer: "83",
        explanation: "6+7=13 viết 3 nhớ 1; 5+2+1=8. Kết quả 83.",
      },
      {
        type: "multiple_choice",
        content: "18 + 15 = ?",
        options: ["23", "33", "43", "13"],
        correctAnswer: "33",
        explanation: "8+5=13 viết 3 nhớ 1; 1+1+1=3. Kết quả 33.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "70 - 34 = ?",
        options: ["36", "46", "26", "44"],
        correctAnswer: "36",
        explanation: "70 - 34 = 36.",
      },
      {
        type: "multiple_choice",
        content: "44 - 19 = ?",
        options: ["25", "35", "15", "24"],
        correctAnswer: "25",
        explanation: "44 - 19 = 25.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "2 x 6 = ?",
        options: ["10", "12", "14", "8"],
        correctAnswer: "12",
        explanation: "2 x 6 = 12.",
      },
      {
        type: "multiple_choice",
        content: "2 x 8 = ?",
        options: ["14", "16", "18", "12"],
        correctAnswer: "16",
        explanation: "2 x 8 = 16.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "5 x 2 = ?",
        options: ["7", "10", "12", "5"],
        correctAnswer: "10",
        explanation: "5 x 2 = 10.",
      },
      {
        type: "multiple_choice",
        content: "5 x 6 = ?",
        options: ["25", "30", "35", "20"],
        correctAnswer: "30",
        explanation: "5 x 6 = 30.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "1m bằng bao nhiêu dm?",
        options: ["1", "10", "100", "1000"],
        correctAnswer: "10",
        explanation: "1m = 10dm.",
      },
      {
        type: "multiple_choice",
        content: "20cm bằng bao nhiêu dm?",
        options: ["1", "2", "20", "200"],
        correctAnswer: "2",
        explanation: "20cm = 2dm vì 1dm = 10cm.",
      },
    ],
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Kim dài chỉ số 9 là bao nhiêu phút?",
        options: ["9", "30", "45", "15"],
        correctAnswer: "45",
        explanation: "Số 9 trên mặt đồng hồ tương ứng 45 phút.",
      },
      {
        type: "multiple_choice",
        content: "Kim ngắn chỉ số 10, kim dài chỉ số 12. Lúc đó là mấy giờ?",
        options: ["9 giờ", "10 giờ", "11 giờ", "12 giờ"],
        correctAnswer: "10 giờ",
        explanation: "Kim ngắn chỉ số 10, kim dài chỉ 12 nghĩa là 10 giờ đúng.",
      },
    ],
  },

  // ===== Tiếng Việt — Lớp 2 =====
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào viết đúng chính tả?",
        options: ["cây tre", "cây che", "cây chè", "cây te"],
        correctAnswer: "cây tre",
        explanation: "'Cây tre' viết đúng, dùng 'tr' không phải 'ch'.",
      },
      {
        type: "multiple_choice",
        content: "Từ nào viết sai chính tả?",
        options: ["con trâu", "con châu", "sách vở", "lo lắng"],
        correctAnswer: "con châu",
        explanation: "Phải viết là 'con trâu', không phải 'con châu'.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào là từ chỉ hoạt động?",
        options: ["hát", "cao", "đỏ", "to"],
        correctAnswer: "hát",
        explanation: "'Hát' là từ chỉ hoạt động.",
      },
      {
        type: "multiple_choice",
        content: "Từ chỉ hoạt động trong câu 'Bé đang nhảy dây.' là từ nào?",
        options: ["Bé", "đang", "nhảy dây", "dây"],
        correctAnswer: "nhảy dây",
        explanation: "'Nhảy dây' là hoạt động của bé.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "Từ nào là từ chỉ đặc điểm?",
        options: ["chạy", "học", "cao lớn", "đọc"],
        correctAnswer: "cao lớn",
        explanation: "'Cao lớn' miêu tả đặc điểm.",
      },
      {
        type: "multiple_choice",
        content: "Từ chỉ đặc điểm trong câu 'Bầu trời trong xanh.' là từ nào?",
        options: ["Bầu trời", "trong xanh", "trời", "trong"],
        correctAnswer: "trong xanh",
        explanation: "'Trong xanh' miêu tả đặc điểm bầu trời.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào thuộc kiểu 'Ai là gì?'",
        options: ["Em là học sinh lớp 2.", "Em đang học bài.", "Em rất ngoan.", "Em đi học."],
        correctAnswer: "Em là học sinh lớp 2.",
        explanation: "Câu giới thiệu 'Em là học sinh lớp 2', đúng mẫu Ai là gì?",
      },
      {
        type: "multiple_choice",
        content: "Từ 'là' trong câu 'Ai là gì?' có tác dụng gì?",
        options: [
          "Nối chủ ngữ và phần giới thiệu",
          "Chỉ hoạt động",
          "Chỉ đặc điểm",
          "Kết thúc câu",
        ],
        correctAnswer: "Nối chủ ngữ và phần giới thiệu",
        explanation: "Từ 'là' nối phần chủ ngữ với phần giới thiệu.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào thuộc kiểu 'Ai làm gì?'",
        options: ["Bé đang tô màu.", "Bé là học sinh.", "Bé rất vui.", "Trời đang mưa."],
        correctAnswer: "Bé đang tô màu.",
        explanation: "Câu kể hoạt động 'tô màu' của bé.",
      },
      {
        type: "multiple_choice",
        content: "Từ chỉ hoạt động trong câu 'Chị quét nhà.' là từ nào?",
        options: ["Chị", "quét nhà", "quét", "nhà"],
        correctAnswer: "quét",
        explanation: "'Quét' là từ chỉ hoạt động.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu nào thuộc kiểu 'Ai thế nào?'",
        options: ["Bé đang ăn cơm.", "Nước biển xanh biếc.", "Em là học sinh.", "Bé đi học."],
        correctAnswer: "Nước biển xanh biếc.",
        explanation: "Câu miêu tả đặc điểm 'xanh biếc' của nước biển.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Bạn Lan rất chăm chỉ.' thuộc kiểu câu nào?",
        options: ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Không phải câu"],
        correctAnswer: "Ai thế nào?",
        explanation: "Câu miêu tả đặc điểm 'chăm chỉ' của bạn Lan.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "Câu 'Bạn ơi, đợi mình với!' cần dấu gì ở cuối?",
        options: ["Dấu chấm", "Dấu chấm hỏi", "Dấu chấm than", "Dấu phẩy"],
        correctAnswer: "Dấu chấm than",
        explanation: "Đây là câu cầu khiến, cần dấu chấm than.",
      },
      {
        type: "multiple_choice",
        content: "Câu 'Hôm nay là thứ mấy' cần dấu gì ở cuối?",
        options: ["Dấu chấm", "Dấu chấm hỏi", "Dấu chấm than", "Dấu hai chấm"],
        correctAnswer: "Dấu chấm hỏi",
        explanation: "Đây là câu hỏi, cần dấu chấm hỏi.",
      },
    ],
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "Mỗi buổi tối gia đình bạn nhỏ thường làm gì?",
        options: [
          "Xem tivi riêng",
          "Cùng ăn cơm và kể chuyện vui",
          "Đi ngủ sớm",
          "Ra ngoài chơi",
        ],
        correctAnswer: "Cùng ăn cơm và kể chuyện vui",
        explanation: "Bài đọc kể cả nhà cùng ăn cơm và kể chuyện vui mỗi tối.",
      },
      {
        type: "multiple_choice",
        content: "Bạn nhỏ trong bài cảm thấy thế nào về gia đình mình?",
        options: ["Không thích", "Rất yêu gia đình", "Buồn chán", "Sợ hãi"],
        correctAnswer: "Rất yêu gia đình",
        explanation: "Bài đọc kết luận bạn nhỏ rất yêu gia đình của mình.",
      },
    ],
  },

  // ===== Tiếng Anh — Lớp 2 =====
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 1,
    questions: [
      {
        type: "multiple_choice",
        content: "'I am 8 years old.' nghĩa là gì?",
        options: ["Tôi tên là 8", "Tôi 8 tuổi", "Tôi học lớp 8", "Tôi có 8 quyển sách"],
        correctAnswer: "Tôi 8 tuổi",
        explanation: "'I am 8 years old.' nghĩa là tôi 8 tuổi.",
      },
      {
        type: "multiple_choice",
        content: "Câu hỏi 'How old are you?' hỏi về điều gì?",
        options: ["Tên", "Tuổi", "Nơi ở", "Sở thích"],
        correctAnswer: "Tuổi",
        explanation: "Câu hỏi này hỏi về tuổi.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 2,
    questions: [
      {
        type: "multiple_choice",
        content: "'Twelve' nghĩa là số mấy?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        explanation: "'Twelve' nghĩa là số 12.",
      },
      {
        type: "multiple_choice",
        content: "Số 17 trong tiếng Anh đọc là gì?",
        options: ["Seventeen", "Seventy", "Seven", "Sixteen"],
        correctAnswer: "Seventeen",
        explanation: "Số 17 đọc là 'seventeen'.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 3,
    questions: [
      {
        type: "multiple_choice",
        content: "'Vietnamese' nghĩa là môn gì?",
        options: ["Tiếng Anh", "Tiếng Việt", "Toán", "Thể dục"],
        correctAnswer: "Tiếng Việt",
        explanation: "'Vietnamese' nghĩa là môn Tiếng Việt.",
      },
      {
        type: "multiple_choice",
        content: "'Art' nghĩa là môn gì?",
        options: ["Âm nhạc", "Mỹ thuật", "Thể dục", "Toán"],
        correctAnswer: "Mỹ thuật",
        explanation: "'Art' nghĩa là môn Mỹ thuật.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 4,
    questions: [
      {
        type: "multiple_choice",
        content: "'Cold' nghĩa là thời tiết gì?",
        options: ["Nóng", "Lạnh", "Có gió", "Nhiều mây"],
        correctAnswer: "Lạnh",
        explanation: "'Cold' nghĩa là lạnh.",
      },
      {
        type: "multiple_choice",
        content: "'Cloudy' nghĩa là thời tiết gì?",
        options: ["Nắng", "Nhiều mây", "Mưa", "Nóng"],
        correctAnswer: "Nhiều mây",
        explanation: "'Cloudy' nghĩa là nhiều mây.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 5,
    questions: [
      {
        type: "multiple_choice",
        content: "'Bread' nghĩa là gì?",
        options: ["Cơm", "Bánh mì", "Nước", "Chuối"],
        correctAnswer: "Bánh mì",
        explanation: "'Bread' nghĩa là bánh mì.",
      },
      {
        type: "multiple_choice",
        content: "'Banana' nghĩa là gì?",
        options: ["Quả táo", "Quả chuối", "Quả cam", "Quả nho"],
        correctAnswer: "Quả chuối",
        explanation: "'Banana' nghĩa là quả chuối.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 6,
    questions: [
      {
        type: "multiple_choice",
        content: "'Ball' nghĩa là gì?",
        options: ["Quả bóng", "Búp bê", "Con diều", "Trò xếp hình"],
        correctAnswer: "Quả bóng",
        explanation: "'Ball' nghĩa là quả bóng.",
      },
      {
        type: "multiple_choice",
        content: "'Puzzle' nghĩa là gì?",
        options: ["Trò xếp hình", "Con diều", "Người máy", "Búp bê"],
        correctAnswer: "Trò xếp hình",
        explanation: "'Puzzle' nghĩa là trò xếp hình.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 7,
    questions: [
      {
        type: "multiple_choice",
        content: "'School' nghĩa là gì?",
        options: ["Bệnh viện", "Trường học", "Chợ", "Công viên"],
        correctAnswer: "Trường học",
        explanation: "'School' nghĩa là trường học.",
      },
      {
        type: "multiple_choice",
        content: "'Market' nghĩa là gì?",
        options: ["Chợ", "Sở thú", "Bệnh viện", "Công viên"],
        correctAnswer: "Chợ",
        explanation: "'Market' nghĩa là chợ.",
      },
    ],
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 8,
    questions: [
      {
        type: "multiple_choice",
        content: "'March' nghĩa là tháng mấy?",
        options: ["Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm"],
        correctAnswer: "Tháng Ba",
        explanation: "'March' nghĩa là Tháng Ba.",
      },
      {
        type: "multiple_choice",
        content: "'September' nghĩa là tháng mấy?",
        options: ["Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười"],
        correctAnswer: "Tháng Chín",
        explanation: "'September' nghĩa là Tháng Chín.",
      },
    ],
  },
];
