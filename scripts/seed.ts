import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";

const LESSONS = [
  // ===== Toán — Lớp 1 =====
  {
    subjectId: "toan",
    grade: 1,
    order: 1,
    title: "Các số từ 0 đến 10",
    content: `# Các số từ 0 đến 10

Con hãy đếm các số theo thứ tự: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

- Số **0** nghĩa là không có gì cả.
- Số **10** là số lớn nhất trong dãy số này.

**Ví dụ:** Có 3 quả táo 🍎🍎🍎 — ta đếm: một, hai, ba. Vậy có 3 quả táo.

**Con thử:** Đếm số ngón tay trên một bàn tay của con. Có đúng 5 ngón không nào?`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 2,
    title: "So sánh các số trong phạm vi 10",
    content: `# So sánh các số trong phạm vi 10

Khi so sánh hai số, ta xem số nào đứng sau trong dãy đếm thì **lớn hơn**.

- Dấu **>** nghĩa là "lớn hơn". Ví dụ: 7 > 4
- Dấu **<** nghĩa là "bé hơn". Ví dụ: 2 < 6
- Dấu **=** nghĩa là "bằng nhau". Ví dụ: 5 = 5

**Ví dụ:** So sánh 6 và 9. Vì 9 đứng sau 6 trong dãy đếm nên 6 < 9.

**Con thử:** So sánh 3 và 8. Số nào lớn hơn?`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 3,
    title: "Phép cộng trong phạm vi 10",
    content: `# Phép cộng trong phạm vi 10

Khi cộng hai số, con đếm thêm số thứ hai vào số thứ nhất.

**Ví dụ:** 3 + 5 = 8

Con hãy đếm thêm 5 từ số 3: *4, 5, 6, 7, 8*.

**Con thử:** Có 4 quả bóng, mẹ cho thêm 3 quả nữa. Hỏi con có tất cả bao nhiêu quả bóng?`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 4,
    title: "Phép trừ trong phạm vi 10",
    content: `# Phép trừ trong phạm vi 10

Khi trừ, con đếm lùi lại từ số bị trừ.

**Ví dụ:** 8 - 3 = 5

Con hãy đếm lùi 3 lần từ số 8: *7, 6, 5*.

**Con thử:** Con có 9 cái kẹo, con ăn hết 4 cái. Hỏi con còn lại bao nhiêu cái kẹo?`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 5,
    title: "Các số từ 11 đến 20",
    content: `# Các số từ 11 đến 20

Sau số 10, ta đếm tiếp: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.

Các số này gồm **1 chục** và một số **đơn vị**. Ví dụ: 15 gồm 1 chục và 5 đơn vị.

**Ví dụ:** Số 13 gồm 1 chục và 3 đơn vị, đọc là "mười ba".

**Con thử:** Số 18 gồm mấy chục và mấy đơn vị?`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 6,
    title: "Phép cộng, trừ trong phạm vi 20 (không nhớ)",
    content: `# Phép cộng, trừ trong phạm vi 20 (không nhớ)

Với các số có 2 chữ số, con cộng hoặc trừ phần đơn vị trước, giữ nguyên phần chục.

**Ví dụ cộng:** 12 + 5 = 17 (giữ 1 chục, cộng 2 + 5 = 7 đơn vị)

**Ví dụ trừ:** 19 - 6 = 13 (giữ 1 chục, trừ 9 - 6 = 3 đơn vị)

**Con thử:** Tính 14 + 3 và 16 - 4.`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 7,
    title: "Nhận biết các hình khối cơ bản",
    content: `# Nhận biết các hình khối cơ bản

Xung quanh con có rất nhiều hình dạng thú vị:

- **Hình vuông** 🟨 — có 4 cạnh bằng nhau.
- **Hình tròn** ⚪ — không có góc, không có cạnh.
- **Hình tam giác** 🔺 — có 3 cạnh và 3 góc.
- **Hình chữ nhật** ▭ — có 4 cạnh, 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau.

**Con thử:** Hãy tìm 3 đồ vật trong nhà có hình dạng là hình tròn.`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 8,
    title: "Xem đồng hồ — Giờ đúng",
    content: `# Xem đồng hồ — Giờ đúng

Đồng hồ có kim ngắn (giờ) và kim dài (phút).

Khi kim dài chỉ đúng vào số 12 và kim ngắn chỉ vào một số nào đó, ta đọc đó là **giờ đúng**.

**Ví dụ:** Kim ngắn chỉ số 3, kim dài chỉ số 12 — đồng hồ chỉ **3 giờ**.

**Con thử:** Nếu kim ngắn chỉ số 7 và kim dài chỉ số 12 thì lúc đó là mấy giờ?`,
  },

  // ===== Tiếng Việt — Lớp 1 =====
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 1,
    title: "Làm quen với các nét chữ cơ bản",
    content: `# Làm quen với các nét chữ cơ bản

Trước khi viết chữ, con cần biết các nét cơ bản:

- Nét **thẳng đứng** ( | )
- Nét **thẳng ngang** ( — )
- Nét **xiên** ( / hoặc \\ )
- Nét **cong** ( ⌒ )
- Nét **móc**

Các chữ cái đều được tạo thành từ những nét này ghép lại với nhau.

**Con thử:** Dùng ngón tay vẽ trong không khí một nét thẳng đứng và một nét cong.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 2,
    title: "Bảng chữ cái Tiếng Việt",
    content: `# Bảng chữ cái Tiếng Việt

Tiếng Việt có 29 chữ cái: a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y.

Trong đó có **12 nguyên âm**: a, ă, â, e, ê, i, o, ô, ơ, u, ư, y — và các chữ còn lại là **phụ âm**.

**Con thử:** Đọc to từng chữ cái trong bảng chữ cái theo đúng thứ tự.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 3,
    title: "Các dấu thanh trong Tiếng Việt",
    content: `# Các dấu thanh trong Tiếng Việt

Tiếng Việt có 6 thanh điệu, trong đó 5 thanh có dấu:

- Thanh **ngang** (không dấu): ba
- Thanh **huyền** ( \` ): bà
- Thanh **sắc** ( ´ ): bá
- Thanh **hỏi** ( ? ): bả
- Thanh **ngã** ( ~ ): bã
- Thanh **nặng** ( . ): bạ

**Ví dụ:** Chữ "ma" khi thêm dấu huyền thành "mà", thêm dấu sắc thành "má".

**Con thử:** Đọc 6 tiếng trên với 6 thanh điệu khác nhau: ba, bà, bá, bả, bã, bạ.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 4,
    title: "Ghép âm thành vần đơn giản",
    content: `# Ghép âm thành vần đơn giản

Khi ghép một phụ âm với một nguyên âm, ta được một tiếng.

**Ví dụ:**
- b + a → **ba**
- m + e → **me**
- l + a → **la**

**Con thử:** Ghép chữ "c" với "o" thì được tiếng gì? Ghép chữ "t" với "o" thì được tiếng gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 5,
    title: "Ghép vần với dấu thanh",
    content: `# Ghép vần với dấu thanh

Sau khi ghép được tiếng, con thêm dấu thanh để tạo thành tiếng có nghĩa.

**Ví dụ:**
- "ba" + dấu huyền → "bà" (nghĩa là bà của con)
- "me" + dấu nặng → "mẹ" (nghĩa là mẹ của con)

**Con thử:** Thêm dấu sắc vào tiếng "la" thì được tiếng gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 6,
    title: "Tập đọc: Từ và câu đơn giản",
    content: `# Tập đọc: Từ và câu đơn giản

Con hãy đọc chậm rãi các từ và câu sau:

> Bé đi học.
> Bà đi chợ.
> Mẹ nấu cơm.

Mỗi câu đều có **chữ hoa** ở đầu câu và **dấu chấm** ở cuối câu.

**Con thử:** Đọc lại 3 câu trên thật rõ ràng, sau đó đặt một câu tương tự về ba của con.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 7,
    title: "Từ chỉ sự vật quen thuộc",
    content: `# Từ chỉ sự vật quen thuộc

Từ chỉ sự vật là từ gọi tên người, con vật, đồ vật, cây cối xung quanh con.

**Ví dụ:**
- Người: bố, mẹ, bé, cô giáo
- Con vật: mèo, chó, gà
- Đồ vật: bàn, ghế, sách, bút

**Con thử:** Kể tên 3 đồ vật có trong lớp học của con.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 8,
    title: "Kể chuyện: Con vật quanh em",
    content: `# Kể chuyện: Con vật quanh em

> Nhà Bé có một chú mèo tên là Mun. Mun có bộ lông màu đen, đôi mắt tròn xoe. Mỗi sáng, Mun hay ngồi cạnh cửa sổ sưởi nắng. Bé rất yêu quý Mun.

**Câu hỏi:**
1. Con mèo trong câu chuyện tên là gì?
2. Mun có bộ lông màu gì?
3. Mun thường làm gì mỗi sáng?

**Con thử:** Kể cho ba mẹ nghe về một con vật mà con yêu thích.`,
  },

  // ===== Tiếng Anh — Lớp 1 =====
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 1,
    title: "Greetings — Lời chào",
    content: `# Greetings — Lời chào

- **Hello!** — Xin chào!
- **Good morning!** — Chào buổi sáng!
- **How are you?** — Bạn khỏe không?
- **I'm fine, thank you.** — Mình khỏe, cảm ơn bạn.
- **Goodbye!** — Tạm biệt!

**Con thử:** Nói "Hello" và "Goodbye" với ba mẹ bằng tiếng Anh nhé!`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 2,
    title: "Numbers 1-10 — Các số đếm",
    content: `# Numbers 1-10 — Các số đếm

- 1 — one
- 2 — two
- 3 — three
- 4 — four
- 5 — five
- 6 — six
- 7 — seven
- 8 — eight
- 9 — nine
- 10 — ten

**Con thử:** Đếm từ 1 đến 10 bằng tiếng Anh thật to nào!`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 3,
    title: "Colors — Màu sắc",
    content: `# Colors

- red — đỏ
- blue — xanh dương
- yellow — vàng
- green — xanh lá
- black — đen
- white — trắng

**Con thử:** Nhìn quanh phòng và gọi tên màu sắc của 3 đồ vật bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 4,
    title: "My Family — Gia đình của em",
    content: `# My Family — Gia đình của em

- father — bố
- mother — mẹ
- brother — anh/em trai
- sister — chị/em gái
- grandfather — ông
- grandmother — bà

**Ví dụ:** "This is my mother." — Đây là mẹ của tôi.

**Con thử:** Giới thiệu về gia đình mình bằng câu "This is my..."`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 5,
    title: "Animals — Các con vật",
    content: `# Animals — Các con vật

- dog — chó
- cat — mèo
- bird — chim
- fish — cá
- chicken — gà
- elephant — voi

**Ví dụ:** "I have a cat." — Tôi có một con mèo.

**Con thử:** Chọn một con vật con thích và nói "I like the [tên con vật]".`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 6,
    title: "Classroom Objects — Đồ dùng học tập",
    content: `# Classroom Objects — Đồ dùng học tập

- book — quyển sách
- pen — cây bút mực
- pencil — cây bút chì
- eraser — cục tẩy
- ruler — cây thước
- bag — cái cặp

**Con thử:** Chỉ vào từng đồ vật trong cặp sách của con và gọi tên bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 7,
    title: "Body Parts — Các bộ phận cơ thể",
    content: `# Body Parts — Các bộ phận cơ thể

- head — đầu
- eyes — mắt
- nose — mũi
- mouth — miệng
- hands — tay
- feet — chân

**Con thử:** Chạm vào từng bộ phận cơ thể và gọi tên bằng tiếng Anh: head, eyes, nose, mouth.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 8,
    title: "Days of the Week — Các ngày trong tuần",
    content: `# Days of the Week — Các ngày trong tuần

- Monday — thứ Hai
- Tuesday — thứ Ba
- Wednesday — thứ Tư
- Thursday — thứ Năm
- Friday — thứ Sáu
- Saturday — thứ Bảy
- Sunday — Chủ Nhật

**Con thử:** Hôm nay là thứ mấy? Hãy nói tên ngày đó bằng tiếng Anh.`,
  },

  // ===== Toán — Lớp 2 =====
  {
    subjectId: "toan",
    grade: 2,
    order: 1,
    title: "Các số đến 100",
    content: `# Các số đến 100

Số có hai chữ số gồm **chữ số hàng chục** và **chữ số hàng đơn vị**.

**Ví dụ:** Số 45 gồm 4 chục và 5 đơn vị, đọc là "bốn mươi lăm".

Đếm tròn chục: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.

**Con thử:** Số 78 gồm mấy chục và mấy đơn vị?`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 2,
    title: "So sánh các số trong phạm vi 100",
    content: `# So sánh các số trong phạm vi 100

Khi so sánh hai số có hai chữ số, con so sánh chữ số hàng chục trước, nếu bằng nhau thì so sánh tiếp hàng đơn vị.

**Ví dụ:** So sánh 42 và 47. Hai số đều có 4 chục, nhưng 7 đơn vị > 2 đơn vị, nên 47 > 42.

**Con thử:** So sánh 56 và 65. Số nào lớn hơn?`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 3,
    title: "Phép cộng có nhớ trong phạm vi 100",
    content: `# Phép cộng có nhớ trong phạm vi 100

Khi cộng hai số mà tổng ở hàng đơn vị lớn hơn 9, con phải **nhớ 1** sang hàng chục.

**Ví dụ:** 38 + 25 = ?
- Cộng hàng đơn vị: 8 + 5 = 13, viết 3 nhớ 1.
- Cộng hàng chục: 3 + 2 = 5, cộng thêm 1 nhớ = 6.
- Kết quả: 63.

**Con thử:** Tính 47 + 36.`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 4,
    title: "Phép trừ có nhớ trong phạm vi 100",
    content: `# Phép trừ có nhớ trong phạm vi 100

Khi trừ mà chữ số hàng đơn vị của số bị trừ nhỏ hơn số trừ, con phải **mượn 1** từ hàng chục.

**Ví dụ:** 52 - 27 = ?
- Hàng đơn vị: 2 không trừ được 7, mượn 1 chục thành 12 - 7 = 5.
- Hàng chục: 5 - 1 (đã mượn) - 2 = 2.
- Kết quả: 25.

**Con thử:** Tính 63 - 38.`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 5,
    title: "Bảng nhân 2",
    content: `# Bảng nhân 2

Phép nhân là cách cộng nhanh nhiều số hạng giống nhau.

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10

**Ví dụ:** 2 x 3 nghĩa là 2 + 2 + 2 = 6.

**Con thử:** 2 x 4 bằng bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 6,
    title: "Bảng nhân 5",
    content: `# Bảng nhân 5

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25

**Ví dụ:** 5 x 3 nghĩa là 5 + 5 + 5 = 15.

**Con thử:** 5 x 4 bằng bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 7,
    title: "Đơn vị đo độ dài: cm, dm, m",
    content: `# Đơn vị đo độ dài: cm, dm, m

- **cm** (xăng-ti-mét): đơn vị đo nhỏ, dùng cho vật ngắn như cây bút.
- **dm** (đề-xi-mét): 1 dm = 10 cm.
- **m** (mét): 1 m = 10 dm = 100 cm.

**Ví dụ:** Cây thước dài 20 cm, tức là 2 dm.

**Con thử:** 3 dm bằng bao nhiêu cm?`,
  },
  {
    subjectId: "toan",
    grade: 2,
    order: 8,
    title: "Xem đồng hồ — Giờ và phút",
    content: `# Xem đồng hồ — Giờ và phút

Kim dài chỉ vào số nào thì phút tương ứng: mỗi số cách nhau 5 phút.

- Kim dài chỉ số 3 → 15 phút.
- Kim dài chỉ số 6 → 30 phút (còn gọi là "rưỡi").

**Ví dụ:** Kim ngắn chỉ số 4, kim dài chỉ số 6 — đồng hồ chỉ **4 giờ 30 phút** (4 giờ rưỡi).

**Con thử:** Kim ngắn chỉ số 8, kim dài chỉ số 3. Lúc đó là mấy giờ mấy phút?`,
  },

  // ===== Tiếng Việt — Lớp 2 =====
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 1,
    title: "Ôn tập bảng chữ cái và chính tả cơ bản",
    content: `# Ôn tập bảng chữ cái và chính tả cơ bản

Con cần phân biệt một số âm dễ viết sai:
- **l** và **n**: "lo lắng" không phải "no nắng".
- **ch** và **tr**: "cây tre" không phải "cây che".
- **s** và **x**: "sách vở" không phải "xách vở".

**Con thử:** Chọn từ đúng chính tả: "con trâu" hay "con châu"?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 2,
    title: "Từ chỉ hoạt động, trạng thái",
    content: `# Từ chỉ hoạt động, trạng thái

Từ chỉ hoạt động là từ nói về việc làm của người, vật.

**Ví dụ:** chạy, nhảy, đọc, viết, ngủ, hát.

Câu ví dụ: "Bé **đọc** sách." — từ "đọc" là từ chỉ hoạt động.

**Con thử:** Tìm từ chỉ hoạt động trong câu: "Mèo con đang ngủ."`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 3,
    title: "Từ chỉ đặc điểm",
    content: `# Từ chỉ đặc điểm

Từ chỉ đặc điểm là từ miêu tả tính chất, hình dáng, màu sắc của sự vật.

**Ví dụ:** cao, thấp, xinh đẹp, to, nhỏ, đỏ, ngoan.

Câu ví dụ: "Bông hoa rất **đẹp**." — từ "đẹp" là từ chỉ đặc điểm.

**Con thử:** Tìm từ chỉ đặc điểm trong câu: "Con voi to lớn."`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 4,
    title: "Câu kiểu Ai là gì?",
    content: `# Câu kiểu Ai là gì?

Mẫu câu "Ai là gì?" dùng để giới thiệu hoặc nhận xét về một người, vật.

**Ví dụ:** "Bạn Lan **là** học sinh giỏi."

Cấu trúc: [Ai] + là + [gì].

**Con thử:** Đặt một câu theo mẫu "Ai là gì?" để giới thiệu về con.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 5,
    title: "Câu kiểu Ai làm gì?",
    content: `# Câu kiểu Ai làm gì?

Mẫu câu "Ai làm gì?" dùng để kể về hoạt động của người, vật.

**Ví dụ:** "Bố **đọc** báo."

Cấu trúc: [Ai] + [làm gì].

**Con thử:** Đặt một câu theo mẫu "Ai làm gì?" để kể về việc mẹ đang làm.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 6,
    title: "Câu kiểu Ai thế nào?",
    content: `# Câu kiểu Ai thế nào?

Mẫu câu "Ai thế nào?" dùng để miêu tả đặc điểm, tính chất.

**Ví dụ:** "Bầu trời **xanh trong**."

Cấu trúc: [Ai/Cái gì] + [thế nào].

**Con thử:** Đặt một câu theo mẫu "Ai thế nào?" để miêu tả con mèo nhà con.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 7,
    title: "Dấu chấm, dấu chấm hỏi, dấu chấm than",
    content: `# Dấu chấm, dấu chấm hỏi, dấu chấm than

- **Dấu chấm (.)** dùng khi kết thúc câu kể. Ví dụ: "Bé đi học."
- **Dấu chấm hỏi (?)** dùng khi kết thúc câu hỏi. Ví dụ: "Bé đi đâu vậy?"
- **Dấu chấm than (!)** dùng khi kết thúc câu cảm thán hoặc câu cầu khiến. Ví dụ: "Ôi, đẹp quá!"

**Con thử:** Câu "Con có thích ăn kem không" cần thêm dấu gì ở cuối?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 2,
    order: 8,
    title: "Tập đọc: Gia đình của em",
    content: `# Tập đọc: Gia đình của em

> Gia đình em có bốn người: bố, mẹ, em và em gái. Bố em là bác sĩ, mẹ em là giáo viên. Mỗi buổi tối, cả nhà cùng nhau ăn cơm và kể chuyện vui. Em rất yêu gia đình của mình.

**Câu hỏi:**
1. Gia đình bạn nhỏ có mấy người?
2. Bố bạn nhỏ làm nghề gì?
3. Mỗi buổi tối cả nhà thường làm gì?

**Con thử:** Kể cho bạn bè nghe về công việc của bố mẹ con.`,
  },

  // ===== Tiếng Anh — Lớp 2 =====
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 1,
    title: "Introductions — Giới thiệu bản thân",
    content: `# Introductions — Giới thiệu bản thân

- **What's your name?** — Bạn tên là gì?
- **My name is...** — Tôi tên là...
- **How old are you?** — Bạn bao nhiêu tuổi?
- **I am ... years old.** — Tôi ... tuổi.

**Con thử:** Trả lời câu hỏi "What's your name?" bằng chính tên của con.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 2,
    title: "Numbers 11-20",
    content: `# Numbers 11-20

- 11 — eleven
- 12 — twelve
- 13 — thirteen
- 14 — fourteen
- 15 — fifteen
- 16 — sixteen
- 17 — seventeen
- 18 — eighteen
- 19 — nineteen
- 20 — twenty

**Con thử:** Đếm từ 11 đến 20 bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 3,
    title: "School Subjects — Các môn học",
    content: `# School Subjects — Các môn học

- Math — Toán
- Vietnamese — Tiếng Việt
- English — Tiếng Anh
- Art — Mỹ thuật
- Music — Âm nhạc
- P.E. (Physical Education) — Thể dục

**Ví dụ:** "I like Math." — Tôi thích môn Toán.

**Con thử:** Nói tên môn học con thích nhất bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 4,
    title: "Weather — Thời tiết",
    content: `# Weather — Thời tiết

- sunny — nắng
- rainy — mưa
- cloudy — nhiều mây
- windy — có gió
- hot — nóng
- cold — lạnh

**Ví dụ:** "It's sunny today." — Hôm nay trời nắng.

**Con thử:** Hôm nay thời tiết ở chỗ con thế nào? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 5,
    title: "Food and Drinks — Đồ ăn và thức uống",
    content: `# Food and Drinks — Đồ ăn và thức uống

- rice — cơm
- bread — bánh mì
- milk — sữa
- water — nước
- apple — táo
- banana — chuối

**Ví dụ:** "I like milk." — Tôi thích uống sữa.

**Con thử:** Kể tên 3 món ăn con thích bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 6,
    title: "Toys and Games — Đồ chơi",
    content: `# Toys and Games — Đồ chơi

- ball — quả bóng
- doll — búp bê
- kite — con diều
- robot — người máy
- puzzle — trò xếp hình

**Ví dụ:** "I have a ball." — Tôi có một quả bóng.

**Con thử:** Kể tên đồ chơi con yêu thích nhất bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 7,
    title: "Places in Town — Các địa điểm trong thị trấn",
    content: `# Places in Town — Các địa điểm trong thị trấn

- school — trường học
- park — công viên
- hospital — bệnh viện
- market — chợ
- zoo — sở thú

**Ví dụ:** "I go to school every day." — Tôi đi học mỗi ngày.

**Con thử:** Con thích đi đến đâu nhất trong các địa điểm trên?`,
  },
  {
    subjectId: "tieng-anh",
    grade: 2,
    order: 8,
    title: "Months of the Year — Các tháng trong năm",
    content: `# Months of the Year — Các tháng trong năm

- January — tháng Một
- February — tháng Hai
- March — tháng Ba
- April — tháng Tư
- May — tháng Năm
- June — tháng Sáu
- July — tháng Bảy
- August — tháng Tám
- September — tháng Chín
- October — tháng Mười
- November — tháng Mười Một
- December — tháng Mười Hai

**Con thử:** Tháng sinh nhật của con là tháng mấy? Nói bằng tiếng Anh.`,
  },

  // ===== Toán — Lớp 3 =====
  {
    subjectId: "toan",
    grade: 3,
    order: 1,
    title: "Ôn tập các số đến 1000",
    content: `# Ôn tập các số đến 1000

Số có ba chữ số gồm **hàng trăm**, **hàng chục** và **hàng đơn vị**.

**Ví dụ:** Số 358 gồm 3 trăm, 5 chục, 8 đơn vị, đọc là "ba trăm năm mươi tám".

**Con thử:** Số 724 gồm mấy trăm, mấy chục, mấy đơn vị?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 2,
    title: "Phép cộng, trừ các số có ba chữ số",
    content: `# Phép cộng, trừ các số có ba chữ số

Cách cộng, trừ giống với số có hai chữ số, nhưng có thêm hàng trăm.

**Ví dụ cộng:** 245 + 137 = 382

**Ví dụ trừ:** 563 - 278 = 285

**Con thử:** Tính 356 + 219.`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 3,
    title: "Bảng nhân 3, 4",
    content: `# Bảng nhân 3, 4

**Bảng nhân 3:** 3x1=3, 3x2=6, 3x3=9, 3x4=12, 3x5=15

**Bảng nhân 4:** 4x1=4, 4x2=8, 4x3=12, 4x4=16, 4x5=20

**Con thử:** 3 x 4 bằng bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 4,
    title: "Bảng chia 2, 3",
    content: `# Bảng chia 2, 3

Phép chia là phép tính ngược lại của phép nhân.

**Bảng chia 2:** 4:2=2, 6:2=3, 8:2=4, 10:2=5

**Bảng chia 3:** 6:3=2, 9:3=3, 12:3=4, 15:3=5

**Con thử:** 12 : 3 bằng bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 5,
    title: "Chu vi hình chữ nhật, hình vuông",
    content: `# Chu vi hình chữ nhật, hình vuông

- Chu vi hình chữ nhật = (chiều dài + chiều rộng) x 2
- Chu vi hình vuông = cạnh x 4

**Ví dụ:** Hình chữ nhật dài 5cm, rộng 3cm có chu vi = (5 + 3) x 2 = 16cm.

**Con thử:** Hình vuông cạnh 4cm có chu vi bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 6,
    title: "Gấp một số lên nhiều lần, giảm một số đi nhiều lần",
    content: `# Gấp một số lên nhiều lần, giảm một số đi nhiều lần

- Muốn **gấp** một số lên nhiều lần, ta lấy số đó **nhân** với số lần.
- Muốn **giảm** một số đi nhiều lần, ta lấy số đó **chia** cho số lần.

**Ví dụ:** Gấp 3 lên 4 lần: 3 x 4 = 12. Giảm 12 đi 4 lần: 12 : 4 = 3.

**Con thử:** Gấp 5 lên 3 lần được bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 7,
    title: "Đơn vị đo khối lượng: gam, ki-lô-gam",
    content: `# Đơn vị đo khối lượng: gam, ki-lô-gam

- **gam (g)**: đơn vị đo khối lượng nhỏ.
- **ki-lô-gam (kg)**: 1 kg = 1000 g.

**Ví dụ:** Một gói đường nặng 1kg tức là nặng 1000g.

**Con thử:** 2kg bằng bao nhiêu gam?`,
  },
  {
    subjectId: "toan",
    grade: 3,
    order: 8,
    title: "Xem lịch — Ngày, tháng, năm",
    content: `# Xem lịch — Ngày, tháng, năm

- Một năm có **12 tháng**.
- Một tuần có **7 ngày**: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.
- Các tháng có 30 hoặc 31 ngày, riêng tháng 2 thường có 28 ngày.

**Con thử:** Một tuần có bao nhiêu ngày?`,
  },

  // ===== Tiếng Việt — Lớp 3 =====
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 1,
    title: "Từ chỉ sự vật, hình ảnh so sánh",
    content: `# Từ chỉ sự vật, hình ảnh so sánh

**So sánh** là đối chiếu sự vật này với sự vật khác có nét giống nhau, thường dùng từ "như", "là".

**Ví dụ:** "Trăng tròn như quả bóng." — so sánh trăng với quả bóng.

**Con thử:** Tìm hình ảnh so sánh trong câu: "Mặt trời đỏ như quả cầu lửa."`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 2,
    title: "Nhân hóa",
    content: `# Nhân hóa

**Nhân hóa** là gọi hoặc tả con vật, cây cối, đồ vật bằng những từ ngữ vốn dùng để gọi hoặc tả con người.

**Ví dụ:** "Ông mặt trời thức dậy." — mặt trời được nhân hóa như một con người.

**Con thử:** Câu "Chị gió thổi nhẹ nhàng." dùng biện pháp gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 3,
    title: "Các kiểu câu hỏi: Khi nào? Ở đâu? Vì sao?",
    content: `# Các kiểu câu hỏi: Khi nào? Ở đâu? Vì sao?

- **Khi nào?** hỏi về thời gian. Ví dụ: "Khi nào lớp em đi dã ngoại?"
- **Ở đâu?** hỏi về địa điểm. Ví dụ: "Em học ở đâu?"
- **Vì sao?** hỏi về nguyên nhân. Ví dụ: "Vì sao hoa lại héo?"

**Con thử:** Câu "Vì sao hoa lại héo?" hỏi về điều gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 4,
    title: "Dấu phẩy",
    content: `# Dấu phẩy

Dấu phẩy dùng để **ngăn cách các bộ phận cùng chức vụ** trong câu, hoặc ngăn cách trạng ngữ với phần còn lại của câu.

**Ví dụ:** "Sáng nay, em dậy sớm để tập thể dục."

**Con thử:** Câu "Em có bút chì tẩy và thước kẻ" cần thêm dấu phẩy ở đâu?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 5,
    title: "Mở rộng vốn từ: Quê hương",
    content: `# Mở rộng vốn từ: Quê hương

Những từ ngữ gắn với quê hương: làng xóm, cánh đồng, dòng sông, luỹ tre, mái đình, con đò.

**Ví dụ:** "Quê em có cánh đồng lúa xanh mướt."

**Con thử:** Kể tên 2 hình ảnh gắn với quê hương mà con biết.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 6,
    title: "Từ trái nghĩa",
    content: `# Từ trái nghĩa

**Từ trái nghĩa** là những từ có nghĩa đối lập nhau.

**Ví dụ:** cao - thấp, to - nhỏ, nhanh - chậm, chăm chỉ - lười biếng.

**Con thử:** Từ trái nghĩa với "chăm chỉ" là gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 7,
    title: "Ôn tập đặt câu theo mẫu",
    content: `# Ôn tập đặt câu theo mẫu

Ôn lại 3 mẫu câu đã học:
- **Ai là gì?** Ví dụ: "Em là học sinh lớp 3."
- **Ai làm gì?** Ví dụ: "Bạn Nam đang vẽ tranh."
- **Ai thế nào?** Ví dụ: "Bầu trời trong xanh."

**Con thử:** Đặt một câu theo mẫu "Ai thế nào?" để tả bầu trời hôm nay.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 3,
    order: 8,
    title: "Tập đọc: Bài học về tình bạn",
    content: `# Tập đọc: Bài học về tình bạn

> Trên đường đến trường, bạn Hùng không may bị ngã xe đạp. Thấy vậy, bạn Mai liền dừng lại giúp Hùng dựng xe rồi cùng Hùng đi bộ đến trường, dù phải đến lớp trễ giờ. Từ đó, Hùng và Mai trở thành đôi bạn thân thiết, luôn giúp đỡ nhau trong học tập.

**Câu hỏi:**
1. Bạn Hùng gặp chuyện gì trên đường đến trường?
2. Ai đã giúp đỡ bạn Hùng?
3. Sau chuyện đó, Hùng và Mai trở thành gì?

**Con thử:** Kể một lần con đã giúp đỡ bạn bè của mình.`,
  },

  // ===== Tiếng Anh — Lớp 3 =====
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 1,
    title: "Classroom Language — Ngôn ngữ trong lớp học",
    content: `# Classroom Language — Ngôn ngữ trong lớp học

- **Stand up!** — Đứng lên!
- **Sit down!** — Ngồi xuống!
- **Open your book!** — Mở sách ra!
- **Close your book!** — Đóng sách lại!
- **Listen!** — Lắng nghe!

**Con thử:** Làm theo hiệu lệnh "Stand up!" rồi "Sit down!" nhé.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 2,
    title: "Numbers 20-100",
    content: `# Numbers 20-100

- 20 — twenty
- 30 — thirty
- 40 — forty
- 50 — fifty
- 60 — sixty
- 70 — seventy
- 80 — eighty
- 90 — ninety
- 100 — one hundred

**Con thử:** Đếm các số tròn chục từ 20 đến 100 bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 3,
    title: "Family and Friends — Gia đình và bạn bè",
    content: `# Family and Friends — Gia đình và bạn bè

- uncle — chú/bác/cậu
- aunt — cô/dì/thím
- cousin — anh/chị/em họ
- friend — bạn bè

**Ví dụ:** "My cousin is nine years old." — Anh họ tôi 9 tuổi.

**Con thử:** Kể tên một người họ hàng của con bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 4,
    title: "Daily Routines — Sinh hoạt hằng ngày",
    content: `# Daily Routines — Sinh hoạt hằng ngày

- wake up — thức dậy
- get up — ngủ dậy, ra khỏi giường
- brush teeth — đánh răng
- go to school — đi học
- do homework — làm bài tập
- go to bed — đi ngủ

**Ví dụ:** "I wake up at 6 o'clock." — Tôi thức dậy lúc 6 giờ.

**Con thử:** Kể việc đầu tiên con làm mỗi sáng bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 5,
    title: "Sports — Thể thao",
    content: `# Sports — Thể thao

- football — bóng đá
- swimming — bơi lội
- badminton — cầu lông
- table tennis — bóng bàn
- basketball — bóng rổ
- running — chạy bộ

**Ví dụ:** "I like playing football." — Tôi thích chơi bóng đá.

**Con thử:** Con thích môn thể thao nào? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 6,
    title: "My House — Ngôi nhà của em",
    content: `# My House — Ngôi nhà của em

- bedroom — phòng ngủ
- kitchen — nhà bếp
- bathroom — phòng tắm
- living room — phòng khách
- garden — khu vườn

**Ví dụ:** "My bedroom is small but cozy." — Phòng ngủ của tôi nhỏ nhưng ấm cúng.

**Con thử:** Kể tên các phòng trong nhà con bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 7,
    title: "Feelings — Cảm xúc",
    content: `# Feelings — Cảm xúc

- happy — vui
- sad — buồn
- tired — mệt
- hungry — đói
- angry — tức giận
- scared — sợ hãi

**Ví dụ:** "I am happy today." — Hôm nay tôi rất vui.

**Con thử:** Hôm nay con cảm thấy thế nào? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 3,
    order: 8,
    title: "Seasons — Các mùa",
    content: `# Seasons — Các mùa

- spring — mùa xuân
- summer — mùa hè
- autumn / fall — mùa thu
- winter — mùa đông

**Ví dụ:** "I like summer because I can go swimming." — Tôi thích mùa hè vì tôi có thể đi bơi.

**Con thử:** Con thích mùa nào nhất? Nói bằng tiếng Anh.`,
  },

  // ===== Toán — Lớp 4 =====
  {
    subjectId: "toan",
    grade: 4,
    order: 1,
    title: "Các số đến hàng triệu",
    content: `# Các số đến hàng triệu

Số lớn được chia thành các **lớp**: lớp đơn vị, lớp nghìn, lớp triệu — mỗi lớp gồm 3 hàng: trăm, chục, đơn vị.

**Ví dụ:** Số 2.345.678 đọc là "hai triệu ba trăm bốn mươi lăm nghìn sáu trăm bảy mươi tám".

**Con thử:** Số 1.234.000 có mấy chữ số?`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 2,
    title: "Phép nhân với số có hai chữ số",
    content: `# Phép nhân với số có hai chữ số

Khi nhân với số có hai chữ số, ta nhân lần lượt với từng hàng rồi cộng kết quả lại.

**Ví dụ:** 23 x 15 = 23 x 10 + 23 x 5 = 230 + 115 = 345.

**Con thử:** Tính 32 x 12.`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 3,
    title: "Phép chia cho số có một chữ số",
    content: `# Phép chia cho số có một chữ số

Chia lần lượt từ hàng cao nhất đến hàng thấp nhất của số bị chia.

**Ví dụ:** 96 : 4 = 24.

**Con thử:** Tính 84 : 4.`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 4,
    title: "Phân số — Khái niệm cơ bản",
    content: `# Phân số — Khái niệm cơ bản

Phân số gồm **tử số** (số trên) và **mẫu số** (số dưới).

**Ví dụ:** Phân số 3/4 có tử số là 3, mẫu số là 4 — nghĩa là chia hình thành 4 phần bằng nhau và lấy 3 phần.

**Con thử:** Phân số 2/5 có tử số và mẫu số là bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 5,
    title: "So sánh phân số",
    content: `# So sánh phân số

Hai phân số **cùng mẫu số**: phân số nào có tử số lớn hơn thì phân số đó lớn hơn.

**Ví dụ:** So sánh 3/5 và 2/5. Vì 3 > 2 nên 3/5 > 2/5.

**Con thử:** So sánh 3/7 và 5/7.`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 6,
    title: "Hình bình hành, hình thoi",
    content: `# Hình bình hành, hình thoi

- **Hình bình hành**: có 2 cặp cạnh đối diện song song và bằng nhau.
- **Hình thoi**: có 4 cạnh bằng nhau.

**Con thử:** Hình thoi có bao nhiêu cạnh bằng nhau?`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 7,
    title: "Diện tích hình chữ nhật, hình vuông",
    content: `# Diện tích hình chữ nhật, hình vuông

- Diện tích hình chữ nhật = chiều dài x chiều rộng
- Diện tích hình vuông = cạnh x cạnh

**Ví dụ:** Hình chữ nhật dài 6cm, rộng 4cm có diện tích = 6 x 4 = 24 cm².

**Con thử:** Hình vuông cạnh 5cm có diện tích bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 4,
    order: 8,
    title: "Trung bình cộng",
    content: `# Trung bình cộng

Muốn tính trung bình cộng của nhiều số, ta lấy **tổng các số hạng chia cho số các số hạng**.

**Ví dụ:** Trung bình cộng của 3, 5, 7 là (3 + 5 + 7) : 3 = 5.

**Con thử:** Tính trung bình cộng của 4 và 8.`,
  },

  // ===== Tiếng Việt — Lớp 4 =====
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 1,
    title: "Danh từ, động từ, tính từ",
    content: `# Danh từ, động từ, tính từ

- **Danh từ**: chỉ người, vật, hiện tượng. Ví dụ: học sinh, bàn, mưa.
- **Động từ**: chỉ hoạt động, trạng thái. Ví dụ: chạy, học, ngủ.
- **Tính từ**: chỉ đặc điểm, tính chất. Ví dụ: đẹp, cao, ngoan.

**Con thử:** Từ "quyển sách" là danh từ, động từ hay tính từ?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 2,
    title: "Câu kể, câu hỏi, câu cảm, câu khiến",
    content: `# Câu kể, câu hỏi, câu cảm, câu khiến

- **Câu kể**: kể sự việc, kết thúc bằng dấu chấm. Ví dụ: "Bé đi học."
- **Câu hỏi**: dùng để hỏi, kết thúc bằng dấu chấm hỏi. Ví dụ: "Bạn tên là gì?"
- **Câu cảm**: bộc lộ cảm xúc, kết thúc bằng dấu chấm than. Ví dụ: "Ôi, đẹp quá!"
- **Câu khiến**: yêu cầu, đề nghị, kết thúc bằng dấu chấm than. Ví dụ: "Hãy giữ trật tự!"

**Con thử:** Câu "Hãy giữ trật tự!" là câu gì?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 3,
    title: "Chủ ngữ, vị ngữ trong câu kể Ai làm gì?",
    content: `# Chủ ngữ, vị ngữ trong câu kể Ai làm gì?

- **Chủ ngữ** trả lời cho câu hỏi "Ai?", "Con gì?".
- **Vị ngữ** trả lời cho câu hỏi "làm gì?".

**Ví dụ:** "Đàn chim // đang bay về tổ." — Chủ ngữ: "Đàn chim", vị ngữ: "đang bay về tổ".

**Con thử:** Xác định chủ ngữ trong câu "Bạn Lan đang đọc sách."`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 4,
    title: "Mở rộng vốn từ: Ước mơ",
    content: `# Mở rộng vốn từ: Ước mơ

Từ ngữ về chủ đề ước mơ: mơ ước, khát vọng, hoài bão, lý tưởng.

**Ví dụ:** "Em có hoài bão trở thành bác sĩ trong tương lai."

**Con thử:** Ước mơ của con là gì? Hãy dùng một từ trong bài để nói.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 5,
    title: "Từ ghép, từ láy",
    content: `# Từ ghép, từ láy

- **Từ ghép**: ghép các tiếng có nghĩa lại với nhau. Ví dụ: xe đạp, học sinh.
- **Từ láy**: các tiếng có âm hoặc vần giống nhau lặp lại. Ví dụ: lung linh, xinh xắn.

**Con thử:** "Xinh xắn" là từ ghép hay từ láy?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 6,
    title: "Dấu hai chấm, dấu ngoặc kép",
    content: `# Dấu hai chấm, dấu ngoặc kép

- **Dấu hai chấm** báo hiệu lời giải thích hoặc lời nói trực tiếp phía sau.
- **Dấu ngoặc kép** dùng để đánh dấu lời nói trực tiếp hoặc từ ngữ đặc biệt.

**Ví dụ:** Mẹ nói: "Con nhớ ăn cơm đầy đủ nhé."

**Con thử:** Câu nào cần dùng dấu hai chấm: "Mẹ nói Con nhớ ăn cơm đầy đủ nhé"?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 7,
    title: "Câu ghép",
    content: `# Câu ghép

**Câu ghép** gồm hai hay nhiều vế câu nối với nhau, mỗi vế đều có đủ chủ ngữ và vị ngữ.

**Ví dụ:** "Trời mưa to // nên đường rất trơn."

**Con thử:** Câu "Em học bài và em xem tivi." có phải câu ghép không?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 4,
    order: 8,
    title: "Tập đọc: Lòng dũng cảm",
    content: `# Tập đọc: Lòng dũng cảm

> Trong một lần đi dã ngoại, bạn Tuấn thấy một em nhỏ bị lạc và đang khóc bên bờ suối. Dù trời đã tối, Tuấn vẫn quyết định ở lại cùng em cho đến khi tìm được bố mẹ em. Hành động của Tuấn khiến mọi người rất cảm phục.

**Câu hỏi:**
1. Bạn Tuấn đã gặp ai bên bờ suối?
2. Tuấn đã làm gì để giúp em nhỏ?
3. Hành động của Tuấn khiến mọi người cảm thấy thế nào?

**Con thử:** Kể một hành động dũng cảm mà con biết hoặc từng làm.`,
  },

  // ===== Tiếng Anh — Lớp 4 =====
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 1,
    title: "What time is it? — Hỏi giờ",
    content: `# What time is it? — Hỏi giờ

- **What time is it?** — Bây giờ là mấy giờ?
- **It's 7 o'clock.** — Bây giờ là 7 giờ.
- **It's half past 7.** — Bây giờ là 7 giờ rưỡi.

**Con thử:** Bây giờ là mấy giờ? Hãy trả lời bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 2,
    title: "Free Time Activities — Hoạt động thời gian rảnh",
    content: `# Free Time Activities — Hoạt động thời gian rảnh

- reading — đọc sách
- drawing — vẽ tranh
- playing games — chơi trò chơi
- watching TV — xem tivi
- listening to music — nghe nhạc

**Ví dụ:** "I like reading in my free time." — Tôi thích đọc sách vào thời gian rảnh.

**Con thử:** Con thích làm gì vào thời gian rảnh? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 3,
    title: "Jobs and Occupations — Nghề nghiệp",
    content: `# Jobs and Occupations — Nghề nghiệp

- teacher — giáo viên
- doctor — bác sĩ
- farmer — nông dân
- engineer — kỹ sư
- singer — ca sĩ
- driver — tài xế

**Ví dụ:** "My mother is a teacher." — Mẹ tôi là giáo viên.

**Con thử:** Con muốn làm nghề gì khi lớn lên? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 4,
    title: "In the Classroom — Giới từ chỉ vị trí",
    content: `# In the Classroom — Giới từ chỉ vị trí

- in — ở trong
- on — ở trên
- under — ở dưới
- next to — bên cạnh
- behind — phía sau

**Ví dụ:** "The book is on the table." — Quyển sách ở trên bàn.

**Con thử:** Đặt một câu với từ "under" để tả vị trí của một đồ vật.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 5,
    title: "At the Zoo — Động vật hoang dã",
    content: `# At the Zoo — Động vật hoang dã

- lion — sư tử
- tiger — hổ
- elephant — voi
- giraffe — hươu cao cổ
- monkey — khỉ
- zebra — ngựa vằn

**Ví dụ:** "The giraffe has a long neck." — Con hươu cao cổ có chiếc cổ dài.

**Con thử:** Con thích con vật nào ở sở thú nhất? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 6,
    title: "Transportation — Phương tiện giao thông",
    content: `# Transportation — Phương tiện giao thông

- car — ô tô
- bus — xe buýt
- bike — xe đạp
- train — tàu hỏa
- plane — máy bay
- boat — thuyền

**Ví dụ:** "I go to school by bike." — Tôi đi học bằng xe đạp.

**Con thử:** Con thường đi học bằng phương tiện gì? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 7,
    title: "Shopping — Đi mua sắm",
    content: `# Shopping — Đi mua sắm

- shirt — áo sơ mi
- trousers — quần dài
- shoes — giày
- price — giá cả
- **How much is it?** — Cái này giá bao nhiêu?

**Ví dụ:** "How much is this shirt?" — Chiếc áo này giá bao nhiêu?

**Con thử:** Hỏi giá một món đồ bằng tiếng Anh với câu "How much is it?"`,
  },
  {
    subjectId: "tieng-anh",
    grade: 4,
    order: 8,
    title: "My School — Trường học của em",
    content: `# My School — Trường học của em

- library — thư viện
- playground — sân chơi
- principal — hiệu trưởng
- classmate — bạn cùng lớp

**Ví dụ:** "I read books in the library." — Tôi đọc sách trong thư viện.

**Con thử:** Kể tên một khu vực trong trường của con bằng tiếng Anh.`,
  },

  // ===== Toán — Lớp 5 =====
  {
    subjectId: "toan",
    grade: 5,
    order: 1,
    title: "Ôn tập phân số: Rút gọn, quy đồng mẫu số",
    content: `# Ôn tập phân số: Rút gọn, quy đồng mẫu số

- **Rút gọn phân số**: chia cả tử số và mẫu số cho cùng một số. Ví dụ: 6/8 = 3/4 (chia cả 2 cho 2).
- **Quy đồng mẫu số**: đưa các phân số về cùng một mẫu số. Ví dụ: 1/2 và 1/3 quy đồng thành 3/6 và 2/6.

**Con thử:** Rút gọn phân số 4/8.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 2,
    title: "Cộng, trừ phân số",
    content: `# Cộng, trừ phân số

- **Cùng mẫu số**: cộng (hoặc trừ) tử số, giữ nguyên mẫu số.
- **Khác mẫu số**: quy đồng mẫu số rồi mới cộng (hoặc trừ).

**Ví dụ:** 1/2 + 1/3 = 3/6 + 2/6 = 5/6.

**Con thử:** Tính 1/3 + 1/6.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 3,
    title: "Nhân, chia phân số",
    content: `# Nhân, chia phân số

- **Nhân phân số**: lấy tử số nhân tử số, mẫu số nhân mẫu số.
- **Chia phân số**: nhân với phân số đảo ngược của số chia.

**Ví dụ:** 2/3 : 1/2 = 2/3 x 2/1 = 4/3.

**Con thử:** Tính 1/2 x 2/5.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 4,
    title: "Số thập phân — Khái niệm và đọc, viết",
    content: `# Số thập phân — Khái niệm và đọc, viết

Số thập phân gồm **phần nguyên** và **phần thập phân**, ngăn cách nhau bởi dấu phẩy.

**Ví dụ:** Số 12,7 đọc là "mười hai phẩy bảy".

**Con thử:** Đọc số 3,5 theo đúng cách đọc số thập phân.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 5,
    title: "Cộng, trừ số thập phân",
    content: `# Cộng, trừ số thập phân

Khi cộng, trừ số thập phân, ta đặt tính sao cho **các dấu phẩy thẳng cột**, rồi cộng/trừ như với số tự nhiên.

**Ví dụ:** 3,5 + 2,4 = 5,9.

**Con thử:** Tính 7,8 - 3,5.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 6,
    title: "Nhân, chia số thập phân với số tự nhiên",
    content: `# Nhân, chia số thập phân với số tự nhiên

Nhân/chia số thập phân với số tự nhiên tương tự như với số tự nhiên, sau đó đặt dấu phẩy vào kết quả đúng vị trí.

**Ví dụ:** 2,5 x 3 = 7,5.

**Con thử:** Tính 4,8 : 2.`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 7,
    title: "Diện tích hình tam giác, hình thang",
    content: `# Diện tích hình tam giác, hình thang

- Diện tích hình tam giác = (đáy x chiều cao) : 2
- Diện tích hình thang = (đáy lớn + đáy bé) x chiều cao : 2

**Ví dụ:** Tam giác đáy 6cm, cao 4cm có diện tích = (6 x 4) : 2 = 12cm².

**Con thử:** Tam giác có đáy 8cm, chiều cao 5cm. Diện tích là bao nhiêu?`,
  },
  {
    subjectId: "toan",
    grade: 5,
    order: 8,
    title: "Thể tích hình hộp chữ nhật, hình lập phương",
    content: `# Thể tích hình hộp chữ nhật, hình lập phương

- Thể tích hình hộp chữ nhật = chiều dài x chiều rộng x chiều cao
- Thể tích hình lập phương = cạnh x cạnh x cạnh

**Ví dụ:** Hình hộp chữ nhật dài 3cm, rộng 2cm, cao 4cm có thể tích = 3 x 2 x 4 = 24cm³.

**Con thử:** Hình lập phương cạnh 3cm có thể tích bao nhiêu?`,
  },

  // ===== Tiếng Việt — Lớp 5 =====
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 1,
    title: "Từ đồng nghĩa",
    content: `# Từ đồng nghĩa

**Từ đồng nghĩa** là những từ có nghĩa giống nhau hoặc gần giống nhau.

**Ví dụ:** chăm chỉ - siêng năng, đẹp - xinh, vui vẻ - hớn hở.

**Con thử:** Tìm một từ đồng nghĩa với "vui vẻ".`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 2,
    title: "Từ nhiều nghĩa",
    content: `# Từ nhiều nghĩa

**Từ nhiều nghĩa** là từ có một nghĩa gốc và một hay nhiều nghĩa chuyển.

**Ví dụ:** Từ "chân" trong "chân người" là nghĩa gốc, còn trong "chân bàn" là nghĩa chuyển.

**Con thử:** Từ "mắt" trong "mắt người" và "mắt bão" có phải từ nhiều nghĩa không?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 3,
    title: "Đại từ",
    content: `# Đại từ

**Đại từ** dùng để xưng hô hoặc thay thế cho danh từ đã nói trước đó, tránh lặp lại từ.

**Ví dụ:** "Nam học giỏi, em ấy luôn được cô khen." — "em ấy" thay thế cho "Nam".

**Con thử:** Tìm đại từ trong câu "Nam học giỏi, em ấy luôn được cô khen."`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 4,
    title: "Quan hệ từ",
    content: `# Quan hệ từ

**Quan hệ từ** dùng để nối các từ ngữ hoặc các câu, thể hiện quan hệ giữa chúng.

**Ví dụ:** và, nhưng, vì, nên, nếu, thì.

Câu ví dụ: "Em học giỏi **vì** em chăm chỉ."

**Con thử:** Câu "Em học giỏi vì em chăm chỉ." dùng quan hệ từ nào?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 5,
    title: "Liên kết câu trong đoạn văn",
    content: `# Liên kết câu trong đoạn văn

Các câu trong đoạn văn được liên kết với nhau bằng cách **lặp từ ngữ**, **thay thế từ ngữ**, hoặc **dùng từ nối**.

**Ví dụ:** "Lan rất chăm học. Bạn ấy luôn làm bài đầy đủ." — "Bạn ấy" thay thế cho "Lan".

**Con thử:** Từ nào trong câu 2 của ví dụ trên dùng để thay thế cho "Lan"?`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 6,
    title: "Mở rộng vốn từ: Hòa bình — Hữu nghị",
    content: `# Mở rộng vốn từ: Hòa bình — Hữu nghị

Từ ngữ thuộc chủ đề: hòa bình, hữu nghị, đoàn kết, hợp tác, thân thiện.

**Ví dụ:** "Các nước cùng hợp tác để giữ gìn hòa bình thế giới."

**Con thử:** Kể tên một từ khác có nghĩa gần với "hòa bình".`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 7,
    title: "Ôn tập văn tả người, tả cảnh",
    content: `# Ôn tập văn tả người, tả cảnh

Bài văn tả cảnh thường miêu tả theo trình tự: **từ bao quát đến chi tiết** hoặc **theo thời gian**.

Bài văn tả người cần chú ý miêu tả: ngoại hình, tính cách, hoạt động.

**Con thử:** Kể 2 chi tiết con sẽ miêu tả khi tả cảnh buổi sáng ở quê.`,
  },
  {
    subjectId: "tieng-viet",
    grade: 5,
    order: 8,
    title: "Tập đọc: Lòng biết ơn",
    content: `# Tập đọc: Lòng biết ơn

> Ông của Lan là một cựu chiến binh. Mỗi dịp Tết, cả nhà đều quây quần bên ông để nghe ông kể chuyện những năm tháng chiến đấu bảo vệ đất nước. Lan luôn tự nhủ phải học thật giỏi để xứng đáng với sự hy sinh của thế hệ ông cha.

**Câu hỏi:**
1. Ông của Lan từng là gì?
2. Vào dịp nào cả nhà Lan quây quần nghe ông kể chuyện?
3. Lan tự nhủ điều gì sau khi nghe chuyện của ông?

**Con thử:** Kể một điều con biết ơn ông bà, cha mẹ của mình.`,
  },

  // ===== Tiếng Anh — Lớp 5 =====
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 1,
    title: "What are you doing? — Thì hiện tại tiếp diễn",
    content: `# What are you doing? — Thì hiện tại tiếp diễn

Cấu trúc: **am/is/are + V-ing**

- **What are you doing?** — Bạn đang làm gì?
- **I am reading a book.** — Tôi đang đọc sách.

**Con thử:** Con đang làm gì? Trả lời bằng cấu trúc "I am ...ing".`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 2,
    title: "Comparisons — So sánh",
    content: `# Comparisons — So sánh

- bigger — lớn hơn
- smaller — nhỏ hơn
- taller — cao hơn
- shorter — thấp hơn
- faster — nhanh hơn

**Ví dụ:** "The elephant is bigger than the cat." — Con voi lớn hơn con mèo.

**Con thử:** So sánh chiều cao của con và bạn con bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 3,
    title: "Health — Sức khỏe",
    content: `# Health — Sức khỏe

- headache — đau đầu
- stomachache — đau bụng
- fever — sốt
- cough — ho
- **see a doctor** — đi khám bác sĩ

**Ví dụ:** "I have a headache." — Tôi bị đau đầu.

**Con thử:** Khi bị ốm, con nên làm gì? Trả lời bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 4,
    title: "Environment — Môi trường",
    content: `# Environment — Môi trường

- recycle — tái chế
- pollution — ô nhiễm
- trees — cây xanh
- save water — tiết kiệm nước

**Ví dụ:** "We should plant more trees." — Chúng ta nên trồng thêm cây xanh.

**Con thử:** Kể một việc con làm để bảo vệ môi trường bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 5,
    title: "Festivals — Lễ hội",
    content: `# Festivals — Lễ hội

- Tet holiday — Tết Nguyên Đán
- Christmas — Giáng sinh
- Mid-Autumn Festival — Tết Trung thu
- lantern — đèn lồng
- fireworks — pháo hoa

**Ví dụ:** "I like the Mid-Autumn Festival." — Tôi thích Tết Trung thu.

**Con thử:** Con thích lễ hội nào nhất? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 6,
    title: "Countries and Nationalities — Quốc gia và quốc tịch",
    content: `# Countries and Nationalities — Quốc gia và quốc tịch

- Vietnam — Vietnamese (người Việt Nam)
- England — English (người Anh)
- Japan — Japanese (người Nhật)
- America — American (người Mỹ)

**Ví dụ:** "I am Vietnamese." — Tôi là người Việt Nam.

**Con thử:** Con là người nước nào? Nói bằng tiếng Anh.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 7,
    title: "Future Plans — Kế hoạch tương lai",
    content: `# Future Plans — Kế hoạch tương lai

Cấu trúc: **I am going to + động từ** dùng để diễn tả dự định trong tương lai.

**Ví dụ:** "I am going to visit my grandma." — Tôi định thăm bà.

**Con thử:** Cuối tuần này con định làm gì? Trả lời bằng cấu trúc "I am going to...".`,
  },
  {
    subjectId: "tieng-anh",
    grade: 5,
    order: 8,
    title: "Natural Wonders — Thiên nhiên kỳ vĩ",
    content: `# Natural Wonders — Thiên nhiên kỳ vĩ

- mountain — núi
- river — sông
- ocean — đại dương
- forest — rừng
- waterfall — thác nước
- desert — sa mạc

**Ví dụ:** "The waterfall is very beautiful." — Thác nước rất đẹp.

**Con thử:** Con thích cảnh thiên nhiên nào nhất? Nói bằng tiếng Anh.`,
  },
];

async function main() {
  await connectDB();

  for (const lesson of LESSONS) {
    await LessonModel.updateOne(
      { subjectId: lesson.subjectId, grade: lesson.grade, order: lesson.order },
      { $set: lesson },
      { upsert: true }
    );
  }

  console.log(`Seeded ${LESSONS.length} lessons.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
