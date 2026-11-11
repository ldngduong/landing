# Học tổ chức file Figma qua SyncFlow

Mở frame `Home` rộng 1440 px trên page `SyncFlow / Landing` và theo dõi các ví dụ trong panel **Layers**. Bản hiện tại dùng khung nội dung desktop 1100 px, với cỡ chữ và khoảng cách được chỉnh để đối chiếu với bản web ở zoom 100%. [Mở SyncFlow trong Figma](https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=1-2)

Khi thực hành, tạo bản sao của file hoặc nhân bản frame trước. Ghi tên cho bản thử, chẳng hạn `Practice / Organize features`. Trong page `SyncFlow / Landing`, frame mobile nằm bên cạnh desktop để bạn đối chiếu từng section. Các main component nằm ở page riêng. [Mobile 390 px](https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=61-62) · [SyncFlow / Components](https://www.figma.com/design/9IklZ21HmUDD1eikzg3MNk/SyncFlow?node-id=53-137)

## 1. Đọc cây layer theo từng cấp

Ở cấp page, `SyncFlow / Landing` giúp nhận ra file chứa landing page. Ở cấp frame, `Home` đủ rõ vì file chỉ có một trang web. Cấp tiếp theo là các section. Mỗi section có những cụm nội dung đủ nhỏ để tìm và sửa riêng.

```text
SyncFlow / Landing
└── Home
    ├── Intro
    │   ├── Hero
    │   │   ├── Background crop
    │   │   ├── Header
    │   │   ├── Hero copy
    │   │   ├── Hero actions
    │   │   └── Workflow builder preview
    │   └── Brand logos
    ├── Features
    ├── How it works
    ├── Pricing
    ├── FAQ
    ├── Testimonials
    └── Footer
```

Trong sơ đồ trên, section được liệt kê theo thứ tự trên trang. Panel **Layers** hiển thị các layer vẽ phía trước ở trên. Vì vậy thứ tự trong một cụm chồng lớp, như `Intro`, cần được đọc theo cả vị trí trên canvas và thứ tự xếp lớp.

**Bài tập.** Thu gọn tất cả các section rồi tìm ảnh dashboard, câu hỏi về gói Pro và tên người trích dẫn Alex Morgan. Nếu phải mở nhiều nhóm ngẫu nhiên mới tìm ra, xem lại tên của nhóm và layer.

## 2. Đặt tên theo thứ người khác cần tìm

| Tên trước khi dọn | Tên sau khi dọn | Vì sao |
| --- | --- | --- |
| Hai layer cùng tên `Hero Image` | `Background artwork` và `Workflow builder preview` | Một layer là nền, layer kia là ảnh sản phẩm. |
| `Left`, `Top`, `Custom Intergrations` | `Feature / AI Workflow Automations`, `Feature / Real-time sync`, `Feature / Custom Integrations` | Tên vẫn đúng khi bạn đổi vị trí card. |
| `Real-to-end` hoặc `Frame 1` trong card | `Card copy` | Mở card là tìm thấy nhóm chữ. |
| `CTA` | `CTA / Join Waitlist` | Tên nói rõ nút dẫn đến việc gì. |
| `Testimonial tem → Frame 2 → Frame 4` | `Testimonial / Sophia Chen → Author → Author details` | Cây layer mô tả đúng các phần của một testimonial. |
| Cả đoạn mô tả dài nằm trong tên layer | `Description` | Copy có thể thay đổi, vai trò của layer vẫn giữ nguyên. |

Dùng tên ngắn như `Title`, `Description`, `Label` khi tên frame cha đã cho biết ngữ cảnh. Ví dụ `Pricing → Plan / Pro → Price` đọc rõ hơn một layer dài như `Price of the Pro pricing card`. Với các layer anh em dễ nhầm, thêm phần phân biệt sau dấu gạch chéo, chẳng hạn `FAQ item / Waitlist` và `FAQ item / Security`.

**Bài tập.** Trong bản thử, chọn một section có nhiều layer mặc định như `Frame 1`. Đổi tên frame cha trước. Sau đó lần lượt đặt tên cho nhóm nội dung, phần text và ảnh. Thu gọn section rồi mở lại và thử tìm từng mục chỉ qua tên.

## 3. Chọn Group, Frame và Auto Layout

| Công cụ | Khi nào dùng | Ví dụ trong SyncFlow |
| --- | --- | --- |
| **Group** | Cần gom những layer đã có vị trí riêng và muốn giữ cách chồng lớp. | Có thể dùng khi gom một cụm minh họa trước khi đưa vào frame. |
| **Frame** | Cần một vùng có kích thước, giới hạn hoặc thuộc tính riêng. | `Hero` giữ ảnh, chữ và nền chồng lớp. |
| **Auto Layout** | Các layer con có quan hệ hàng hoặc cột, cần padding, gap và căn chỉnh theo nội dung. | Nút CTA và nhiều cụm nội dung bên trong frame gốc. |

Trong `Intro`, ảnh dashboard chồng lên vùng nền bên dưới và header nằm trên hero. Frame `Hero` giữ các lớp này ở vị trí riêng. Auto Layout dọc được dùng để xếp các section của `Home` và dùng trong các cụm như `Hero copy`. Khi chuyển một cụm sang Auto Layout, kiểm tra phần nào cần xếp theo luồng và phần nào cần chồng lớp.

**Bài tập.** Nhân bản một nút. Đổi label thành cụm dài hơn rồi xem kích thước nào đang **Hug** và kích thước nào đang **Fixed**. Tiếp theo, thử tạo một nút mới từ text bằng **Shift+A**, thêm padding và đặt chiều rộng **Hug contents**. Thao tác này giúp bạn thấy khi nào Auto Layout có lợi mà không phải sửa cả trang. [Figma Learn · Auto Layout](https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma)

## 4. Đặt tên text style và variable

Text style lưu thông số chữ như font, cỡ, độ đậm và line height. Variable lưu một giá trị dùng lại như màu. Hãy mở một text layer và xem **Typography** và **Fill** riêng để biết cái nào điều khiển chữ, cái nào điều khiển màu.

- `H1`, `H2` và `h3` được đặt chung dưới `Typography/Heading/`. Dấu gạch chéo tạo nhóm trong danh sách style.
- `Button Text black`, `Button Text White` và `h4` có cùng thông số Roboto Bold 24 px. Ba style đã gộp thành `Typography/Emphasis/Bold 24`. Màu chữ từng chỗ vẫn do **Fill** quyết định.
- `regular lg bold` dùng cùng thông số Roboto Bold 32 px với `h3`. Tên gói, giá và các tiêu đề dùng chung `Typography/Heading/H3`.
- `small bold` đổi thành `Typography/Testimonial/Author` vì trong file nó dùng cho tên người trích dẫn.
- Collection `Dark` đổi tên thành `Color palette`. Các variable mang tên như `Palette/White`, `Palette/Navy 950` và `Palette/Mist` để dễ tìm theo giá trị màu. Các giá trị và liên kết với layer vẫn như trước.

**Bài tập.** Chọn `Intro → Hero → Hero copy → Headline` và xác nhận nó dùng `Typography/Desktop/Display`. Chọn tiếp `CTA / Join Waitlist → Label` và xem `Typography/Shared/Action`. Các main component có style mặc định, còn instance desktop và mobile có thể gắn style theo kích thước dùng trên trang. [Figma Learn · Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)

### Kiểm tra trước khi gom hoặc xóa một style

Hai style cùng cỡ và độ đậm vẫn có thể khác chữ hoa, tracking, line height hoặc khoảng cách đoạn. Đọc từng thông số, tìm layer đang dùng, rồi gắn lại style chuẩn trước khi xóa bản trùng. Trong SyncFlow, `Regular lg` và paint style `BG CARD` đã được xóa vì không có layer nào dùng trong file. Hai paint style đang dùng được đổi tên thành `Surface/Pricing/Background` và `Surface/Testimonial/Card`.

## 5. Tách component từ giao diện đã có

| Component | Cách dùng lại trong Home |
| --- | --- |
| `Button` | Chọn variant theo hình dáng và màu có sẵn. Sửa `Label` trên instance. Nút của Pricing nằm bên trong `Pricing Card`. |
| `FAQ Item` | Ba câu hỏi dùng chung một main component. Đổi `Question` để chỉnh chữ, phần dấu cộng và layout đi theo component. |
| `Brand Lockup` | Header và Footer dùng cùng logo và wordmark. |
| `Pricing Card` | Starter và Enterprise dùng `Standard`, Pro dùng `Featured`. Đổi tên, mô tả và giá bằng text property. Sửa `Feature list` trực tiếp trong instance để giữ bullet, indent và khoảng cách danh sách gốc. |
| `Testimonial Card` | Ba card dùng cùng layout. Đổi quote, tên và vai trò bằng text property. Chọn `Portrait` bên trong instance để đổi ảnh trong **Fill**. |

**Bài tập.** Tự tách một cụm lặp trên bản sao.

1. Tìm hai frame có cùng cấu trúc và so padding, gap, stroke, fill. Chọn một frame đại diện và dùng **Create component** để giữ layout đang có.
2. Đưa main component lên page Components. Chèn một **instance** từ Assets vào đúng vị trí của frame cũ. Kiểm tra width và height của instance đang là Fixed, Hug hay Fill. Copy ngắn và dài đều cần vừa trong bố cục.
3. Với nội dung ngắn như nhãn nút hoặc câu hỏi, mở layer chữ và tạo text property. Đặt tên property theo ý nghĩa, chẳng hạn `Label` hoặc `Question`. Thử nhập nội dung khác trên hai instance.
4. Dùng **variant** khi kiểu hoặc trạng thái thực sự khác, chẳng hạn nút nền sáng so với nút viền. Nội dung khác nhau như tên gói hay câu hỏi được xử lý bằng override trên instance.
5. Với text đã có nhiều định dạng, so lại sau khi tạo property. Trong SyncFlow, khi nối danh sách Pricing với một text property, bản thử bị mất dấu bullet và giãn dòng. Giữ danh sách thành text layer chỉnh trực tiếp trong instance bảo toàn định dạng.
6. Export cùng frame trước và sau để so layout. Nếu ảnh khác, tìm đúng component và kiểm tra sizing, text range, màu hoặc thứ tự layer trước khi áp dụng tiếp.

Thử mở `FAQ Item` từ Assets, thêm một instance vào bản thực hành rồi đổi `Question`. Sau đó thử chỉnh padding của **main component**. Mọi instance sẽ nhận padding mới và vẫn giữ câu hỏi riêng. [Figma Learn · Component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Explore-component-properties) · [Variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants)

## 6. Dọn mục thừa an toàn

1. **Xác định vai trò.** Chọn layer và kiểm tra Fill, Stroke, Effects, mask và liên kết ở tab Prototype. Một rectangle trong suốt vẫn có thể làm vùng bấm hoặc mặt nạ.
2. **Kiểm tra nơi tham chiếu.** Với style, variable hoặc component, xem có layer, instance hoặc file khác đang dùng tài nguyên đó không. Với một page cũ, mở page và rà những frame thuộc dự án trước khi dọn.
3. **Thử một thay đổi nhỏ.** Ẩn layer trên bản thực hành và kiểm tra màn hình. Với một layer đã xác nhận trống, xóa rồi so lại canvas. Trong SyncFlow, rectangle `Hero image` cũ rỗng, còn `Workflow builder preview` là ảnh cần giữ.
4. **So trước và sau.** Export cùng frame, cùng kích thước. Kiểm tra hero, ảnh dashboard, vùng chuyển nền và phần logos trước, vì đây là nơi thay đổi thứ tự layer dễ lộ nhất. Nếu ảnh khác, hoàn tác thay đổi cuối và xem lại stacking order.

## 7. Áp dụng cho landing page tiếp theo

Khi làm Seev hoặc Trivos, tạo một frame thử và tập theo thứ tự này:

1. Tách section ngay khi bố cục đã rõ. Đặt tên frame theo nội dung như `Hero`, `Features` và `Footer`.
2. Với mỗi section, gom những layer cần di chuyển hoặc chỉnh cùng nhau. Dùng **Auto Layout** cho nhóm cần co giãn và **Group** cho cụm minh họa cần giữ vị trí tương đối.
3. Đặt tên style theo vai trò và kiểm tra trước khi thêm style mới. Khi cùng một cấu trúc bắt đầu lặp nhiều lần, có thể luyện tạo component trên bản thử.
4. Thu gọn cây layer và tự tìm hero title, ảnh sản phẩm và một CTA. Nếu tìm được nhanh mà không dựa vào vị trí trái/phải, cách đặt tên đã có tác dụng.

## 8. Dựng bản mobile trong Figma

Mở `Home / Mobile 390` và chọn frame ngoài cùng. Frame rộng **390 px** và dùng Auto Layout dọc. Các section dùng **Fill container** cho chiều rộng và **Hug contents** cho chiều cao. Lề ngang 20 px tạo vùng nội dung 350 px. Ở 320 px, vùng nội dung còn 280 px. Lấy chiều rộng còn lại này để quyết định cách xếp card và text.

| Cụm | Cách bố trí trên mobile | Điều cần kiểm tra |
| --- | --- | --- |
| Header | Hàng đầu là logo và Get Early Access. Bốn link nằm ở hàng bên dưới. Nhóm logo và CTA bật **Wrap** để CTA xuống hàng khi thiếu chỗ. | Link đọc được và không đè lên CTA khi kéo hẹp. Các khung link cao 44 px để dành chỗ cho vùng bấm. |
| Hero | Headline và mô tả tự xuống dòng. Hai CTA xếp dọc. Preview giữ tỷ lệ khi thu hẹp. | Thứ tự đọc và CTA chính vẫn rõ. Ảnh không bị kéo dãn. |
| Brand logos | Chia thành hai hàng, ba logo rồi hai logo. | Logo giữ tỷ lệ và khoảng cách đủ để nhận diện. |
| Features và How it works | Feature card xếp theo một cột. Phần How it works đặt copy trước ảnh thiết bị. | Title và description xuống dòng trong card. |
| Pricing, FAQ, Testimonials | Xếp từng card hoặc item một hàng. Giữ instance từ bộ component của file. | Tên gói, giá, danh sách bullet và câu hỏi dài vẫn đọc được ở khung hẹp. |
| Footer | Brand và social links ở trên. Các nhóm link được chia thành hàng nhỏ. | Người xem phân biệt rõ Product, Resources và Legal. |

### Thiết lập từ ngoài vào trong

1. Tạo frame rộng 390 px. Thêm Auto Layout **Vertical**, đặt chiều cao **Hug contents**. Tạo một frame con cho mỗi section và đặt chiều rộng của section là **Fill container**.
2. Đặt padding ngang cho section là 20 px. Giữ một hàng ngang nếu các mục còn vừa. Với Pricing, đổi `Plan cards` thành **Vertical** và đặt từng card **Fill container** để mỗi gói dùng trọn cột.
3. Với heading hay mô tả, đặt chiều rộng **Fill container** và chế độ chữ **Auto height**. Gắn style phù hợp trong `Typography/Mobile` rồi thử đổi nội dung dài hơn. Kiểm tra card cao lên và đẩy card sau xuống.
4. Kéo instance từ **Assets** hoặc copy instance từ desktop. Điều chỉnh sizing và padding trên bản mobile. Khi cần thay cỡ chữ riêng cho mobile, chọn text layer bên trong instance và gắn style mobile. Kiểm tra lại liên kết đến main component qua **Go to main component**.
5. Với ảnh sản phẩm, khóa tỷ lệ và kéo chiều rộng theo vùng chứa. Kiểm tra lại phần crop. Ở mobile, ưu tiên để người xem nhận ra bố cục sản phẩm, còn lời giải thích đặt trong text layer để đọc được độc lập với ảnh.

Khi ảnh nền được crop lại ở mobile, vùng sáng có thể rơi đúng dưới chữ trắng. Trong SyncFlow, nút viền **See how it works** có thêm một lớp navy bán trong suốt trên mobile để chữ vẫn dễ đọc. Khi tự làm, kiểm tra màu nền ngay bên dưới chữ tại những vùng sáng nhất.

### Cỡ chữ trong bản mobile

| Vai trò | Style | Cỡ chữ / line height |
| --- | --- | --- |
| Headline hero | `Typography/Mobile/H1` | 32 / 38 |
| Tiêu đề section | `Typography/Mobile/H2` | 26 / 32 |
| Tiêu đề card | `Typography/Mobile/Card` | 22 / 28 |
| Nội dung | `Typography/Shared/Body` | 16 / 24 |
| Nhãn CTA chính | `Typography/Shared/Action` | 16 / 22 |
| Link nav và CTA gọn ở header | `Typography/Mobile/Nav` | 14 / 20 |

Đây là thông số dùng cho SyncFlow. Với landing khác, thử bằng nội dung thật. Một giá dài, CTA dài hoặc câu FAQ xuống ba dòng là phép thử tốt hơn một ô lorem ipsum ngắn.

**Bài tập kiểm tra ở 320 px.** Nhân bản frame mobile, đổi chiều rộng thành 320 và giữ chiều cao **Hug contents**. Kiểm tra lần lượt header, preview, Pricing và Footer. Nếu một hàng tràn, thử giảm gap hoặc chuyển nhóm sang cột. Nếu text bị cắt, kiểm tra **Auto height**, padding và chiều cao Fixed của cha trước khi giảm cỡ chữ. Sau khi dựng web, kiểm tra thêm chiều rộng giữa mobile và desktop, phóng chữ 200% và reflow ở 320 CSS px. [Figma Learn · Auto Layout](https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout-in-Figma) · [WCAG · Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) · [WCAG · Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

## 9. Tổ chức mỗi landing thành một project Vite riêng

Mỗi thư mục là một project tự chạy và tự build. Khi bàn giao SyncFlow, khách có thể mở đúng thư mục SyncFlow, cài dependency và chạy demo mà không cần Seev hay Trivos. Đây là cấu trúc gợi ý khi hoàn thiện code.

```text
Landing/
├── SyncFlow/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── README.md
│   ├── FIGMA-GUIDE.md
│   ├── public/                  # favicon, ảnh chia sẻ, tài nguyên tĩnh
│   └── src/
│       ├── main.tsx            # khởi động React
│       ├── App.tsx             # sắp các section theo thứ tự trong Figma
│       ├── index.css           # font, token màu, style dùng chung
│       ├── assets/             # ảnh và logo được import trong giao diện
│       └── components/
│           ├── sections/      # Hero, Features, Pricing, FAQ...
│           └── ui/            # Button, Accordion và thành phần shadcn/ui
├── Seev/                       # project Vite độc lập
└── Trivos/                     # project Vite độc lập
```

### Chuyển bố cục Figma sang code

1. Dựng CSS mặc định theo bản mobile. Dùng grid một cột cho pricing, flex cho các cụm nút, ảnh có chiều rộng tối đa theo container và chiều cao tự tính.
2. Mở trình duyệt và kéo từ mobile lên desktop. Đặt breakpoint tại chỗ bố cục đủ chỗ để đổi. Chẳng hạn, chỉ chuyển pricing thành ba cột khi tên gói, giá và bullet vẫn đọc được. So lại với desktop 1440 px sau khi đổi.
3. Giữ component UI dùng chung **trong project**. Map `Button` từ Figma sang Button trong `src/components/ui`, còn phần nội dung như `Pricing` nằm ở `sections`. Giữ đường dẫn ảnh và import trong thư mục của landing tương ứng.
4. Trong README, ghi link Figma, phiên bản Node cần dùng, lệnh chạy và build, nguồn asset, cùng phần nào là mô phỏng. Trước khi giao, thử lại từ một bản sao sạch của thư mục.

Từ thư mục của landing, dùng `npm ci` để cài đúng dependency theo lockfile, `npm run dev` để phát triển, `npm run build` để tạo `dist/` và `npm run preview` để kiểm tra bản build tại máy. Gói source bàn giao gồm mã, config, lockfile và asset có quyền chuyển giao. `dist/` là đầu ra dùng khi deploy. [Vite · Deploying a Static Site](https://vite.dev/guide/static-deploy.html)

## 10. Chọn tỷ lệ để Figma và web nhìn hài hòa ở 100%

Khi so giao diện, nhấn **Ctrl+0** để trình duyệt về 100%. Dùng chế độ Responsive của DevTools và đặt viewport theo **CSS px**, chẳng hạn 1440 × 900. Trong Figma, chọn frame 1440 px và kiểm tra giá trị trong panel Design. Zoom canvas của Figma chỉ thay cách nhìn. Zoom trình duyệt còn đổi lượng nội dung và số CSS px vừa trong cửa sổ, nên ảnh chụp ở 60% phù hợp để tham khảo tỷ lệ chứ không phải để lấy mọi số đo nhân 0,6.

| Vai trò | Desktop SyncFlow | Mobile SyncFlow |
| --- | --- | --- |
| Khung nội dung | Tối đa 1100 px, nền vẫn phủ hết chiều rộng | Lề 20 px mỗi bên |
| Dashboard hero | Tối đa 920 px, giữ tỷ lệ ảnh | Tối đa 330 px và co theo vùng chứa |
| Headline | 44 / 52 | 32 / 38 |
| Tiêu đề section | 32 / 38 | 26 / 32 |
| Đoạn giới thiệu | 18 / 26 | 16 / 24 |
| Chữ trong card pricing | 16 / 24 | 16 / 24 |
| Nhãn nút chính | 16 / 22, nút cao 44–46 px | 16 / 22, nút chính cao 46 px |

1. **Chọn khung và ảnh trước.** Giữ nền toàn màn hình, giới hạn khung nội dung và đặt trần riêng cho ảnh hero. Khi kéo viewport lớn hơn, vùng trống hai bên tăng lên còn chữ và ảnh không phình theo.
2. **Chọn cỡ chữ theo vai trò.** Headline được lớn hơn để tạo điểm nhấn. Nav, CTA và đoạn đọc dài có cỡ riêng. Tạo style theo vai trò trong Figma và dùng các biến tương ứng trong CSS. Những vai trò có cùng thông số ở hai kích thước có thể dùng chung style.
3. **Đặt line height, padding và gap riêng.** Thu card bằng cách giảm padding và khoảng trống thừa. Giữ chữ trong card dễ đọc, giữ vùng bấm đủ cao và để card tự nở khi câu dài hơn.
4. **So ở cùng kích thước.** Đối chiếu Figma và web ở 1440 và 390 px tại zoom 100%. Kiểm tra thêm 320, 768 và khoảng 1920 px. Xem vị trí hero, điểm bắt đầu dải logo, số dòng của CTA và khoảng cách giữa các section.
5. **Thử tăng zoom như người dùng.** Ở 200%, nội dung cần tự xuống dòng và điều khiển vẫn dùng được. Giữ cỡ chữ trong CSS bằng `rem`, ảnh dùng giới hạn chiều rộng và chiều cao theo tỷ lệ. Tránh thu cả trang bằng `zoom` hoặc `transform: scale()`, vì cách đó cũng thu vùng bấm và che mất vấn đề reflow. [WCAG · Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) · [WCAG · Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

**Bài tập.** Trong một bản sao, giữ headline và body rồi thử dashboard ở 850, 920 và 1020 px. Sau đó khóa ảnh ở kích thước bạn thích và thử H1 40, 44 và 48 px. So ở zoom 100% để biết cảm giác “to” đến từ ảnh, chữ hay khoảng trống giữa các cụm. Lưu lại cặp thông số bạn chọn trước khi chỉnh breakpoint.

**Nối nền hero với phần dưới.** Trên desktop, đặt một lớp gradient lên 26% cuối của `Background crop`, từ màu nền trang ở độ đục 0% đến 100%. Dùng cùng màu ở cả hai điểm, chỉ đổi độ đục. Trong CSS, `mask-image` làm ảnh nền trong dần để lộ đúng màu nền bên dưới. Đặt hiệu ứng trên riêng lớp ảnh nền để chữ, nút và dashboard vẫn rõ. Kiểm tra ở 1440 và 1920 px: đường cắt cũ dễ lộ nhất ở khoảng trống hai bên dashboard.
