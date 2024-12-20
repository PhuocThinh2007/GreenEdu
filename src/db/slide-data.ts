import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export enum EDataType {
  BASIC,
  STORY,
  ACTIVITY,
}

export interface IObjectData {
  [key: string]: IData;
}

export const basic: IObjectData = {
  1: {
    id: 1,
    image: require("../assets/env/pollution1.png"),
    title: "Ô nhiễm đất",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
    content: [
      {
        title: "Nguồn gốc ảnh hưởng đến ô nhiễm đất",
        body: [
          "Công nghiệp: Các nhà máy sản xuất thường xuyên xả khí thải và chất thải ra môi trường, gây ô nhiễm đất bởi các hóa chất độc hại như kim loại nặng, chất độc hại từ quá trình sản xuất.",
          "Nông nghiệp: Sử dụng phân bón hóa học và thuốc trừ sâu không an toàn có thể làm tăng nồng độ các chất hóa học độc hại trong đất.",
          "Xây dựng và phát triển đô thị: Các hoạt động xây dựng có thể làm thay đổi cấu trúc đất, làm giảm tính hấp thụ và làm mất cân bằng môi trường sống của động thực vật.",
          "Văn phòng: Các chất thải từ môi trường chất xây dựng để environment ch quyền đô have diritto.",
        ],
        image: require("../assets/env/noise1.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm đất:",
        body: [
          "Môi trường: Ô nhiễm đất có thể làm thay đổi cấu trúc đất và làm mất cân bằng sinh thái của các hệ sinh thái đất. Nó cũng có thể làm giảm đa dạng sinh học và số lượng các loài động vật và thực vật trong môi trường đất.",
          "Sức khỏe con người: Các chất độc hại trong đất có thể xuyên qua chu trình thực phẩm và nước uống, gây ra các vấn đề sức khỏe nghiêm trọng như độc tính cho gan, ung thư, và ảnh hưởng đến hệ thần kinh và nội tiết của con người.",
          "Sự sản xuất nông nghiệp: Ô nhiễm đất có thể làm giảm hiệu suất sản xuất nông nghiệp do các chất độc hại làm hại đến cây trồng và động vật nuôi.",
        ],
        image: require("../assets/env/noise3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Sử dụng hợp lý phân bón và thuốc trừ sâu: Lựa chọn các loại phân bón hữu cơ và thuốc trừ sâu không độc hại để giảm thiểu tác động xấu lên đất và môi trường.",
          "Quản lý chất thải: Xử lý và tái chế chất thải một cách hiệu quả để ngăn chặn các chất độc hại từ việc xả thải vào đất.",
          "Kiểm soát nước thải: Đảm bảo hệ thống thoát nước và xử lý nước thải từ các nguồn công nghiệp và gia đình để tránh xả nước thải ô nhiễm vào môi trường.",
          "Bảo vệ vùng đất xanh: Bảo vệ và duy trì các vùng đất xanh tự nhiên, giảm thiểu hoặc ngăn chặn việc phá rừng, phá hoại môi trường tự nhiên.",
        ],
        image: require("../assets/env/noise4.jpg"),
      },
    ],
  },
  2: {
    id: 2,
    image: require("../assets/env/pollution2.png"),
    title: "Ô nhiễm nước",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm nước",
        body: [
          "Nguồn tự nhiên: Bao gồm các yếu tố như xói mòn đất, núi lửa, và hiện tượng tự nhiên khác có thể gây ô nhiễm nước.",
          "Nguồn nhân tạo: Chủ yếu bao gồm các hoạt động công nghiệp, nông nghiệp, và sinh hoạt của con người. Ví dụ, nước thải từ nhà máy, hóa chất từ nông nghiệp, và rác thải sinh hoạt.",
        ],
        image: require("../assets/env/water1.png"),
      },
      {
        title: "Các loại chất ô nhiễm:",
        body: [
          "Chất hữu cơ: Bao gồm các hợp chất hóa học có chứa carbon, ví dụ như dầu mỡ, thuốc trừ sâu, và các chất thải sinh học.",
          "Chất vô cơ: Bao gồm các kim loại nặng như chì, thủy ngân, và cadmium, cũng như các hợp chất hóa học khác như nitrat và phosphat.",
          "Vi sinh vật: Bao gồm vi khuẩn, virus, và ký sinh trùng có thể gây bệnh cho con người và động vật.",
          "Chất phóng xạ: Bao gồm các đồng vị phóng xạ từ hoạt động công nghiệp, y tế và quân sự.",
        ],
        image: require("../assets/env/water2.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm nước",
        body: [
          "Sức khỏe con người: Ô nhiễm nước có thể gây ra nhiều bệnh tật như bệnh tiêu chảy, viêm gan, và các bệnh lây nhiễm qua đường nước khác.",
          "Hệ sinh thái: Ô nhiễm nước làm giảm đa dạng sinh học, gây chết hàng loạt động vật và thực vật trong các hệ sinh thái nước ngọt và biển.",
          "Kinh tế: Ảnh hưởng đến ngành công nghiệp du lịch, nuôi trồng thủy sản, và nguồn cung cấp nước sạch, gây thiệt hại kinh tế lớn.",
          "Xã hội: Gây bất ổn xã hội, ảnh hưởng đến chất lượng cuộc sống và gây ra các xung đột về nguồn nước.",
        ],
        image: require("../assets/env/water3.png"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm nước",
        body: [
          "Quản lý nguồn nước: Xây dựng các hệ thống quản lý nước hiệu quả, bảo vệ các nguồn nước tự nhiên.",
          "Xử lý nước thải: Sử dụng công nghệ xử lý nước thải tiên tiến để loại bỏ các chất ô nhiễm trước khi xả ra môi trường.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền, giáo dục cộng đồng về tác hại của ô nhiễm nước và khuyến khích các hành vi bảo vệ môi trường.",
          "Chính sách và pháp luật: Áp dụng các chính sách và quy định nghiêm ngặt về bảo vệ môi trường, xử phạt nghiêm minh các hành vi gây ô nhiễm nước.",
        ],
        image: require("../assets/env/water4.png"),
      },
    ],
  },
  3: {
    id: 3,
    image: require("../assets/env/pollution3.jpg"),
    title: "Ô nhiễm tiếng ồn",
    description:
      "Là sự phát ra của các âm thanh không mong muốn hoặc quá lớn từ các nguồn như giao thông, công trình xây dựng, và công nghiệp, có thể gây ra căng thẳng và ảnh hưởng đến sức khỏe tinh thần và thể chất.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm tiếng ồn",
        body: [
          "Giao thông: Bao gồm tiếng ồn từ xe cộ, xe lửa, máy bay, và tàu thuyền. Đây là nguồn ô nhiễm tiếng ồn phổ biến nhất, đặc biệt ở các khu vực đô thị.",
          "Công nghiệp: Các nhà máy, xưởng sản xuất, và công trường xây dựng thường tạo ra tiếng ồn lớn do máy móc và hoạt động sản xuất.",
          "Hoạt động thương mại và giải trí: Bao gồm tiếng ồn từ các khu vui chơi giải trí, nhà hàng, quán bar, và các hoạt động thương mại khác.",
          "Sinh hoạt hàng ngày: Tiếng ồn từ các hoạt động hàng ngày như tiệc tùng, thiết bị gia dụng, và động vật nuôi.",
        ],
        image: require("../assets/env/noise1.jpg"),
      },
      {
        title: "Các loại tiếng ồn:",
        body: [
          "Tiếng ồn liên tục: Tiếng ồn duy trì liên tục trong một khoảng thời gian dài, như tiếng ồn từ máy lạnh, quạt, hoặc giao thông.",
          "Tiếng ồn xung: Tiếng ồn xảy ra đột ngột và kéo dài trong một khoảng thời gian ngắn, như tiếng nổ, tiếng va đập, hoặc tiếng còi xe.",
          "Tiếng ồn tần số thấp: Tiếng ồn có tần số thấp hơn 250 Hz, thường đến từ các máy móc công nghiệp lớn hoặc hệ thống thông gió.",
          "Tiếng ồn tần số cao: Tiếng ồn có tần số cao hơn 2000 Hz, như tiếng hú của còi xe cứu thương hoặc tiếng chói tai từ thiết bị điện tử.",
        ],
        image: require("../assets/env/noise2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm tiếng ồn:",
        body: [
          "Sức khỏe con người: Ô nhiễm tiếng ồn có thể gây ra các vấn đề về thính lực, stress, mất ngủ, tăng huyết áp, và các vấn đề tim mạch.",
          "Hệ sinh thái: Tiếng ồn có thể ảnh hưởng đến hành vi và sức khỏe của động vật, làm gián đoạn giao tiếp, săn mồi, và di cư của các loài động vật.",
          "Kinh tế: Chi phí cho việc điều trị các bệnh liên quan đến tiếng ồn và giảm năng suất lao động do mất ngủ và stress.",
          "Xã hội: Ô nhiễm tiếng ồn ảnh hưởng đến chất lượng cuộc sống, gây ra căng thẳng xã hội và mâu thuẫn giữa các cộng đồng.",
        ],
        image: require("../assets/env/noise3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Quy hoạch đô thị: Xây dựng các khu dân cư cách xa các nguồn gây tiếng ồn, tạo ra các vùng đệm cây xanh để giảm tiếng ồn.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các quy định về mức độ tiếng ồn cho phép, kiểm soát tiếng ồn từ các nguồn công nghiệp và giao thông.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm tiếng ồn và khuyến khích các hành vi giảm thiểu tiếng ồn trong cộng đồng.",
        ],
        image: require("../assets/env/noise4.jpg"),
      },
    ],
  },
  4: {
    id: 4,
    image: require("../assets/env/pollution4.jpg"),
    title: "Ô nhiễm không khí",
    description:
      "Ô nhiễm không khí là sự thay đổi lớn trong thành phần của không khí, chủ yếu do khói, bụi, hơi hoặc các khí lạ được đưa vào không khí, có sự tỏa mùi, làm giảm tầm nhìn xa, gây biến đổi khí hậu, gây bệnh cho con người",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm không khí:",
        body: [
          "Nguồn tự nhiên: Bao gồm các hiện tượng tự nhiên như núi lửa phun trào, cháy rừng, và bão bụi.",
          "Nguồn nhân tạo: Chủ yếu do các hoạt động của con người như công nghiệp, giao thông vận tải, nông nghiệp, và sinh hoạt hàng ngày. Ví dụ, khí thải từ nhà máy, xe cộ, và đốt nhiên liệu hóa thạch.",
        ],
        image: require("../assets/env/air1.jpg"),
      },
      {
        title: "Các loại chất ô nhiễm không khí",
        body: [
          "Chất ô nhiễm sơ cấp: Các chất này được thải trực tiếp vào không khí từ nguồn gây ô nhiễm, bao gồm:Carbon monoxide (CO),Sulfur dioxide (SO₂),Nitrogen oxides (NOₓ),Particulate matter (PM),Volatile organic compounds (VOCs)",
          "Chất ô nhiễm thứ cấp: Các chất này được hình thành trong không khí thông qua phản ứng hóa học của các chất ô nhiễm sơ cấp, bao gồm:Ozone (O₃),Smog (khói quang hóa)",
        ],
        image: require("../assets/env/air2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm không khí:",
        body: [
          "Sức khỏe con người: Ô nhiễm không khí gây ra nhiều bệnh lý nghiêm trọng như bệnh hô hấp (hen suyễn, viêm phổi), bệnh tim mạch, và ung thư phổi. Nó cũng làm suy giảm hệ miễn dịch và gây ra các vấn đề về sinh sản.",
          "Môi trường: Ô nhiễm không khí ảnh hưởng đến sự phát triển của thực vật, làm giảm đa dạng sinh học, và gây ra hiện tượng mưa axit, làm hại đất và nguồn nước.",
          "Kinh tế: Chi phí cho chăm sóc y tế tăng cao do các bệnh liên quan đến ô nhiễm không khí, giảm năng suất lao động và thiệt hại về tài nguyên thiên nhiên.",
          "Xã hội: Ảnh hưởng đến chất lượng cuộc sống, gây ra sự bất mãn xã hội và tác động tiêu cực đến du lịch và các hoạt động ngoài trời.",
        ],
        image: require("../assets/env/air3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm không khí:",
        body: [
          "Chính sách và quy định: Áp dụng các tiêu chuẩn về khí thải và chất lượng không khí, kiểm soát nghiêm ngặt việc phát thải từ các nguồn công nghiệp và giao thông.",
          "Công nghệ và cải tiến kỹ thuật: Phát triển và sử dụng các công nghệ sạch, như hệ thống lọc bụi, công nghệ đốt nhiên liệu hiệu quả và phương tiện giao thông thân thiện với môi trường.",
          "Năng lượng tái tạo: Khuyến khích sử dụng năng lượng tái tạo như năng lượng mặt trời, gió, và thủy điện để giảm thiểu phát thải từ việc đốt nhiên liệu hóa thạch.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm không khí và khuyến khích cộng đồng tham gia vào các hoạt động bảo vệ môi trường.",
        ],
        image: require("../assets/env/air4.jpg"),
      },
    ],
  },
  5: {
    id: 5,
    image: require("../assets/env/pollution5.png"),
    title: "Ô nhiễm ánh sáng",
    description:
      "Ô nhiễm ánh sáng xảy ra do sự hiện diện những hành động của con người và các loại hình ánh sáng nhân tạo trong môi trường ban đêm",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm ánh sáng",
        body: [
          "Ánh sáng đô thị: Bao gồm đèn đường, biển quảng cáo, ánh sáng từ tòa nhà cao tầng và khu thương mại. Các khu đô thị phát triển mạnh là nguồn chính gây ô nhiễm ánh sáng.",
          "Khu công nghiệp: Các nhà máy và xí nghiệp thường sử dụng ánh sáng mạnh để hoạt động ban đêm, góp phần vào ô nhiễm ánh sáng.",
          "Khu dân cư: Ánh sáng từ các khu dân cư, đèn vườn, đèn sân chơi, và các thiết bị chiếu sáng khác cũng gây ra ô nhiễm ánh sáng.",
          "Hoạt động giải trí: Các sự kiện thể thao ban đêm, concert, và các hoạt động giải trí ngoài trời sử dụng đèn chiếu sáng mạnh cũng là nguồn ô nhiễm ánh sáng.",
        ],
        image: require("../assets/env/light2.jpg"),
      },
      {
        title: "Các loại ô nhiễm ánh sáng:",
        body: [
          "Chói sáng (Glare): Ánh sáng quá mạnh gây khó chịu hoặc làm mất khả năng nhìn rõ. Thường xảy ra do đèn đường, biển quảng cáo.",
          "Ánh sáng xâm nhập (Light Trespass): Ánh sáng không mong muốn chiếu vào khu vực không cần chiếu sáng, như ánh sáng đèn đường vào cửa sổ nhà ở.",
          "Sáng nền (Skyglow): Hiện tượng bầu trời bị chiếu sáng bởi ánh sáng nhân tạo, làm giảm khả năng nhìn thấy các ngôi sao và thiên thể vào ban đêm.",
          "Ánh sáng rối (Clutter): Sự tập trung của nhiều nguồn ánh sáng không cần thiết, gây rối mắt và khó chịu.",
        ],
        image: require("../assets/env/light2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm ánh sáng:",
        body: [
          "Sức khỏe con người: Ô nhiễm ánh sáng có thể gây rối loạn giấc ngủ, dẫn đến các vấn đề về sức khỏe như stress, mệt mỏi, và các bệnh liên quan đến giấc ngủ. Ánh sáng ban đêm còn ảnh hưởng đến nhịp sinh học và hormone melatonin.",
          "Động vật và hệ sinh thái: Ảnh hưởng đến hành vi của động vật, gây rối loạn di cư, săn mồi và sinh sản. Ví dụ, chim di cư bị lạc đường do ánh sáng nhân tạo, rùa con không thể tìm đường ra biển.",
          "Thiên văn học: Ánh sáng nền làm giảm khả năng quan sát thiên văn, gây khó khăn cho các nhà thiên văn học và người yêu thích quan sát bầu trời đêm.",
          "Kinh tế: Chi phí năng lượng tăng cao do sử dụng ánh sáng không hiệu quả. Ô nhiễm ánh sáng cũng có thể làm giảm giá trị bất động sản trong các khu vực bị ảnh hưởng.",
        ],
        image: require("../assets/env/light3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm ánh sáng:",
        body: [
          "Quy hoạch đô thị: Thiết kế hệ thống chiếu sáng hợp lý, sử dụng đèn có hướng chiếu sáng phù hợp để giảm ánh sáng xâm nhập và chói sáng.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các tiêu chuẩn về chiếu sáng đô thị, yêu cầu tắt đèn vào ban đêm ở các khu vực không cần thiết. Khuyến khích sử dụng ánh sáng có bước sóng ít gây hại cho môi trường.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm ánh sáng và khuyến khích cộng đồng tham gia vào các hoạt động giảm thiểu ánh sáng không cần thiết.",
        ],
        image: require("../assets/env/light4.jpg"),
      },
    ],
  },
  6: {
    id: 6,
    image: require("../assets/env/pollution6.png"),
    title: "Ô nhiễm tầm nhìn",
    description:
      "Là hiện tượng rác thải, các vật dụng được xả ra môi trường tự nhiên một cách phản logic. Chúng khiến mất mỹ quan đô thị, làm khó chịu cho người nhìn.",
    content: [
      {
        title: "Nguồn gây ô nhiễm tầm nhìn",
        body: [
          "Giao thông: Xe cộ và phương tiện giao thông là một nguồn gây ô nhiễm lớn, phát thải khí CO2, khí thải ô nhiễm và các hạt bụi từ động cơ đốt nhiên liệu.",
          "Công nghiệp:Các nhà máy, nhà máy sản xuất và cơ sở công nghiệp phát thải ra không khí và nước các chất ô nhiễm như khí thải, hóa chất độc hại, và chất thải rắn.",
          "Nông nghiệp:Sử dụng phân bón hóa học và thuốc trừ sâu trong nông nghiệp có thể gây ra ô nhiễm nước và đất.",
          "Chất thải nhựa và rác thải:  Sự sử dụng và xử lý chất thải nhựa không đúng cách có thể dẫn đến ô nhiễm môi trường, đặc biệt là ô nhiễm nước và đất.",
        ],
        image: require("../assets/env/visual1.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm không khí:",
        body: [
          "Hệ hô hấp:có thể gây ra các vấn đề về hô hấp, như viêm phế quản, hen suyễn, viêm phổi, và các vấn đề về dị ứng.",
          "Hệ tim mạch: Ô nhiễm không khí có thể gây ra các vấn đề về huyết áp, đau tim, và các bệnh tim mạch khác, do ảnh hưởng của các chất ô nhiễm lên hệ thống tim mạch..",
          "Hệ tiêu hóa: Các chất ô nhiễm trong nước và thực phẩm, như kim loại nặng và các hợp chất hóa học, có thể gây ra các vấn đề về tiêu hóa và hấp thụ chất dinh dưỡng.",
        ],
        image: require("../assets/env/visual2.jpg"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm tiếng ồn:",
        body: [
          "Sức khỏe con người: Ô nhiễm tiếng ồn có thể gây ra các vấn đề về thính lực, stress, mất ngủ, tăng huyết áp, và các vấn đề tim mạch.",
          "Hệ sinh thái: Tiếng ồn có thể ảnh hưởng đến hành vi và sức khỏe của động vật, làm gián đoạn giao tiếp, săn mồi, và di cư của các loài động vật.",
          "Kinh tế: Chi phí cho việc điều trị các bệnh liên quan đến tiếng ồn và giảm năng suất lao động do mất ngủ và stress.",
          "Xã hội: Ô nhiễm tiếng ồn ảnh hưởng đến chất lượng cuộc sống, gây ra căng thẳng xã hội và mâu thuẫn giữa các cộng đồng.",
        ],
        image: require("../assets/env/visual3.jpg"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm tiếng ồn:",
        body: [
          "Quy hoạch đô thị: Xây dựng các khu dân cư cách xa các nguồn gây tiếng ồn, tạo ra các vùng đệm cây xanh để giảm tiếng ồn.",
          "Công nghệ và thiết kế: Sử dụng vật liệu cách âm trong xây dựng, phát triển và sử dụng các thiết bị và phương tiện ít gây tiếng ồn.",
          "Chính sách và quy định: Áp dụng các quy định về mức độ tiếng ồn cho phép, kiểm soát tiếng ồn từ các nguồn công nghiệp và giao thông.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm tiếng ồn và khuyến khích các hành vi giảm thiểu tiếng ồn trong cộng đồng.",
        ],
        image: require("../assets/env/visual3.jpg"),
      },
    ],
  },
};
export const story: IObjectData = {
  1: {
    id: 1,
    title: "Trách nhiệm của học sinh trong việc bảo vệ môi trường sống",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
    content: [
      {
        title: "Học tập và tìm hiểu về môi trường",
        body: [
          "Ở một ngôi trường nhỏ nằm trong một thị trấn yên bình, có một nhóm học sinh rất yêu thiên nhiên và mong muốn làm điều gì đó để bảo vệ môi trường. Nhóm gồm ba bạn là Minh, Lan và Hùng, luôn cảm thấy buồn khi thấy rác thải xung quanh trường học và khu dân cư ngày càng nhiều.",
          'Một ngày, sau khi thấy công viên gần trường bị ngập rác sau một buổi dã ngoại, ba bạn quyết định bắt đầu một chiến dịch bảo vệ môi trường. Họ cùng nhau lên kế hoạch và đặt tên cho chiến dịch là "Hành động xanh".',
          "Minh, người giỏi vẽ, đã thiết kế những tấm áp phích kêu gọi mọi người tham gia vào chiến dịch. Lan, với khả năng diễn đạt tốt, đã thuyết phục thầy cô giáo và các bạn học sinh trong lớp cùng tham gia. Hùng, với niềm đam mê công nghệ, đã tạo ra một trang blog nhỏ để chia sẻ các hoạt động của nhóm và kêu gọi sự ủng hộ từ cộng đồng mạng.",
          "Chiến dịch bắt đầu bằng việc dọn dẹp khuôn viên trường học và công viên gần đó. Những ngày cuối tuần, các bạn học sinh tập trung nhau lại, trang bị găng tay và túi rác, cùng nhau nhặt rác và phân loại chúng. Họ còn trồng thêm cây xanh và chăm sóc các bồn hoa trong trường, biến những khu vực trống trải thành những góc xanh tươi mát.",
          'Nhờ sự nhiệt tình và kiên trì của Minh, Lan và Hùng, chiến dịch "Hành động xanh" nhanh chóng lan rộng ra khắp trường. Các lớp học khác cũng bắt đầu tham gia, thậm chí các thầy cô và phụ huynh cũng không đứng ngoài cuộc. Những buổi nói chuyện về bảo vệ môi trường được tổ chức, các buổi triển lãm tranh vẽ về môi trường được dựng lên, và các cuộc thi tìm hiểu kiến thức môi trường cũng được tổ chức.',
          "Không chỉ dừng lại ở việc làm sạch và xanh hóa môi trường xung quanh, các bạn học sinh còn lan tỏa tinh thần bảo vệ môi trường đến cộng đồng. Họ tổ chức các buổi tuyên truyền tại khu dân cư, khuyến khích mọi người sử dụng túi vải thay cho túi ni lông, và hướng dẫn cách phân loại rác thải tại nguồn.",
          "Nhờ vào những nỗ lực không ngừng nghỉ của các bạn học sinh, thị trấn trở nên sạch sẽ hơn, cây cối xanh mát hơn và ý thức bảo vệ môi trường của mọi người cũng được nâng cao. Câu chuyện về Minh, Lan và Hùng đã trở thành nguồn cảm hứng cho nhiều bạn trẻ khác, góp phần tạo nên một thế hệ mới với ý thức bảo vệ môi trường mạnh mẽ và hành động thiết thực.",
        ],
        image: require("../assets/env/Nhat_rac.jpg"),
      },
    ],
    image: require("../assets/env/story1.png"),
  },
  2: {
    id: 2,
    title: "Phong trào em yêu môi trường xanh",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
    content: [
      {
        title: "Giữ gìn vệ sinh môi trường",
        body: [
          "Phong trào 'Em yêu môi trường' bắt đầu từ một nhóm học sinh tại một trường tiểu học ở thành phố nhỏ. Nhóm học sinh này, nhận thấy sự thay đổi tiêu cực trong môi trường xung quanh như rác thải ngày càng nhiều, cây cối bị chặt phá và không khí trở nên ô nhiễm hơn, đã quyết định hành động. Các em cùng nhau lên kế hoạch tổ chức một phong trào để nâng cao nhận thức và thúc đẩy hành động bảo vệ môi trường trong trường và cộng đồng xung quanh.",
          "Các hoạt động của phong trào bao gồm việc tổ chức các buổi dọn dẹp vệ sinh khuôn viên trường và các khu vực công cộng, trồng cây xanh xung quanh trường, và tổ chức các buổi học về bảo vệ môi trường. Các em học sinh đã phân chia thành từng nhóm nhỏ, mỗi nhóm phụ trách một hoạt động cụ thể và cùng nhau thực hiện với sự hướng dẫn của các thầy cô giáo.",
          "Phong trào nhanh chóng nhận được sự ủng hộ nhiệt tình từ phụ huynh, giáo viên và cả cộng đồng. Họ cùng tham gia vào các hoạt động và hỗ trợ các em bằng cách cung cấp cây giống, dụng cụ vệ sinh và các tài liệu giáo dục về môi trường. Nhờ vào những nỗ lực này, khuôn viên trường học trở nên xanh mát hơn, sạch sẽ hơn và bầu không khí cũng trong lành hơn.",
          "Câu chuyện về phong trào 'Em yêu môi trường' không chỉ dừng lại ở việc làm sạch và xanh hóa môi trường xung quanh mà còn lan tỏa tinh thần bảo vệ môi trường đến nhiều trường học khác trong khu vực. Các trường học khác đã học hỏi và triển khai các hoạt động tương tự, tạo nên một phong trào rộng khắp, giúp nâng cao ý thức bảo vệ môi trường của thế hệ trẻ và góp phần bảo vệ hành tinh xanh của chúng ta.",
        ],
        image: require("../assets/env/Nhat_rac2.jpg"),
      },
    ],
    image: require("../assets/env/story2.png"),
  },
  3: {
    id: 3,
    title: "Sáng kiến 'Giảm thiểu rác thải nhựa'",
    description:
      "Một nhóm học sinh tiểu học tại một thành phố lớn nhận thấy số lượng rác thải nhựa ngày càng tăng, gây ô nhiễm nghiêm trọng cho môi trường, và họ đã khởi xướng phong trào giảm thiểu rác thải nhựa trong trường học.",
    content: [
      {
        title: "Phong trào giảm rác thải nhựa",
        body: [
          "Nhóm học sinh đã cùng nhau lên kế hoạch hạn chế sử dụng nhựa dùng một lần trong trường. Các em thực hiện chiến dịch truyền thông để nâng cao nhận thức về tác hại của nhựa và kêu gọi các bạn đồng hành sử dụng các sản phẩm thay thế như bình nước cá nhân và hộp cơm thân thiện với môi trường.",
          "Các hoạt động của phong trào bao gồm việc vận động các bạn học sinh và giáo viên sử dụng bình nước tái sử dụng thay vì chai nhựa, tổ chức các hội thảo về phân loại rác thải và ý nghĩa của việc tái chế nhựa.",
          "Phong trào đã nhận được sự hỗ trợ từ ban giám hiệu và phụ huynh, giúp cung cấp các bình nước và hộp cơm thân thiện với môi trường cho học sinh và giáo viên. Sau một thời gian, trường học giảm đáng kể lượng rác thải nhựa, tạo nên môi trường học tập trong lành và bền vững hơn.",
          "Phong trào không chỉ dừng lại trong trường học mà còn được nhiều trường khác áp dụng, giúp lan tỏa thông điệp về việc giảm thiểu rác thải nhựa và bảo vệ môi trường đến các trường học khác trong khu vực.",
        ],
        image: require("../assets/env/giam_nhua.jpg"),
      },
    ],
    image: require("../assets/env/story3.png"),
  },
4: {
    id: 4,
    title: "Chương trình 'Cùng nhau trồng cây xanh'",
    description:
      "Chương trình trồng cây nhằm tạo ra không gian xanh mát, cải thiện chất lượng không khí và giúp bảo vệ môi trường tại địa phương.",
    content: [
      {
        title: "Phong trào trồng cây của học sinh",
        body: [
          "Một nhóm học sinh tiểu học tại một ngôi trường nhỏ đã khởi xướng chương trình 'Cùng nhau trồng cây xanh' với mong muốn giúp khuôn viên trường và khu vực xung quanh trở nên xanh mát hơn. Các em được thầy cô hướng dẫn về tầm quan trọng của cây xanh đối với môi trường và khuyến khích tham gia vào việc chăm sóc cây.",
          "Các hoạt động của chương trình bao gồm việc trồng cây trong sân trường, tưới cây hàng ngày, và thỉnh thoảng làm vệ sinh xung quanh khu vực trồng cây. Các em còn được chia thành từng nhóm nhỏ để phân công chăm sóc từng loại cây và ghi chép quá trình phát triển của chúng.",
          "Với sự hỗ trợ từ các thầy cô và phụ huynh, các em học sinh được cung cấp cây giống và dụng cụ làm vườn phù hợp với lứa tuổi. Sau một thời gian, không gian trong sân trường trở nên xanh mát hơn với những hàng cây lớn nhỏ do chính tay các em chăm sóc, tạo nên một không gian học tập và vui chơi đầy sinh động.",
          "Phong trào 'Cùng nhau trồng cây xanh' này nhanh chóng lan rộng, trở thành một hoạt động được nhiều lớp học trong trường tham gia, và truyền cảm hứng cho các trường tiểu học khác trong khu vực cũng tổ chức những chương trình trồng cây tương tự."
        ],
        
        image: require("../assets/env/trong_cay.jpg"),
      },
    ],
    image: require("../assets/env/story4.png"),
  },
5: {
    id: 5,
    title: "Sáng kiến 'Tái chế giấy học tập'",
    description:
      "Các học sinh nhận thấy rằng lượng giấy sử dụng trong trường học rất lớn và đã nảy ra sáng kiến tái chế giấy để bảo vệ môi trường.",
    content: [
      {
        title: "Phong trào tái chế giấy của học sinh",
        body: [
          "Một nhóm học sinh đã nảy ra sáng kiến tái chế giấy học tập cũ thành các sản phẩm hữu ích như sổ tay và bìa sách. Nhóm tổ chức các buổi hướng dẫn tái chế cho các bạn trong trường, đồng thời lập một khu vực thu gom giấy cũ để phục vụ cho việc tái chế.",
          "Các em học sinh tự tay làm ra các sản phẩm tái chế từ giấy đã qua sử dụng, và tặng những món đồ này cho các bạn có hoàn cảnh khó khăn hoặc sử dụng cho các hoạt động học tập trong trường.",
          "Phong trào này không chỉ giúp giảm lượng rác thải giấy trong trường mà còn giáo dục các bạn học sinh về ý thức tiết kiệm tài nguyên và ý nghĩa của tái chế.",
          "Sáng kiến tái chế giấy của nhóm học sinh đã thu hút sự quan tâm của nhiều trường học khác, giúp lan tỏa thông điệp bảo vệ môi trường và thúc đẩy ý thức bảo vệ tài nguyên thiên nhiên.",
        ],
        image: require("../assets/env/tai_che.jpg"),
      },
    ],
    image: require("../assets/env/story5.jpg"),
  },

};

export interface IActivity {
  id: number;
  title: string;
  target: string;
  image: string;
  material: string[];
  instructions: Array<{
    title: string;
    body: string[];
    image: string;
  }>;
  benefit: string[];
}

export interface IObjectActivity {
  [key: string]: IActivity;
}

export const activity: IObjectActivity = {
  1: {
    id: 1,
    title: "Trồng cây bằng nhựa tái chế",
    image:
      "https://afamilycdn.com/150157425591193600/2020/8/15/bottle-farm-hydroponic-indoor-garden-602500-15974860178341141155425.gif",
    target: "Học sinh",
    material: [
      "Chai nhựa",
      "Đất trồng cây",
      "Hạt giống hoặc cây giống",
      "Sơn",
      "Cọ vẽ",
      "Kéo",
      "Dao cắt",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị chai nhựa",
        body: [
          "Rửa sạch chai nhựa và để khô.",
          "Cắt phần trên của chai để tạo miệng rộng cho việc trồng cây. Để an toàn, hãy nhờ người lớn giúp đỡ khi sử dụng dao hoặc kéo.",
        ],
        image: "https://example.com/images/step1.jpg",
      },
      {
        title: "Bước 2: Tạo lỗ thoát nước",
        body: [
          "Dùng kéo hoặc dao cắt một vài lỗ nhỏ ở đáy chai để giúp thoát nước khi tưới cây.",
        ],
        image: "https://example.com/images/step2.jpg",
      },
      {
        title: "Bước 3: Trang trí chai nhựa (tuỳ chọn)",
        body: [
          "Học sinh có thể sơn và trang trí chai nhựa theo ý thích để làm cho chậu cây thêm sinh động và đẹp mắt.",
        ],
        image: "https://example.com/images/step3.jpg",
      },
      {
        title: "Bước 4: Trồng cây",
        body: [
          "Đổ một lớp đất trồng vào chai nhựa, khoảng 2/3 chiều cao của chai.",
          "Nếu trồng từ hạt giống: Gieo hạt giống vào đất và phủ một lớp đất mỏng lên trên.",
          "Nếu trồng từ cây giống: Đặt cây giống vào giữa chai và bổ sung đất xung quanh rễ cây. Nén nhẹ đất để cây đứng vững.",
        ],
        image: "https://example.com/images/step4.jpg",
      },
      {
        title: "Bước 5: Tưới nước",
        body: [
          "Tưới nước đủ ẩm cho đất, nhưng không quá nhiều để tránh làm úng rễ cây. Theo dõi và tưới nước định kỳ tuỳ theo nhu cầu của loại cây trồng.",
        ],
        image: "https://example.com/images/step5.jpg",
      },
      {
        title: "Bước 6: Chăm sóc cây",
        body: [
          "Đặt chai nhựa ở nơi có đủ ánh sáng mặt trời.",
          "Theo dõi cây thường xuyên để đảm bảo cây phát triển tốt, tưới nước đều đặn và bón phân (nếu cần).",
        ],
        image: "https://example.com/images/step6.jpg",
      },
    ],
    benefit: [
      "Giáo dục về tái chế: Học sinh sẽ hiểu được tầm quan trọng của việc tái chế và giảm thiểu rác thải nhựa.",
      "Bảo vệ môi trường: Trồng cây giúp làm xanh sạch môi trường, cải thiện chất lượng không khí.",
      "Kỹ năng sống: Học sinh học được cách chăm sóc cây, trách nhiệm và kiên nhẫn.",
    ],
  },
  2: {
    id: 2,
    title: "Làm chong chóng từ ống hút nhựa",
    image:
      "http://mncamlinhb.edu.vn/upload/48857/fck/01271341/2024_03_16_13_51_0669.jpg",
    target: "Trẻ em",
    material: [
      "Ống hút nhựa",
      "Giấy cứng",
      "Kim chỉ",
      "Keo dán",
      "Bút màu",
      "Kéo",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị ống hút",
        body: [
          "Lựa chọn các ống hút có kích thước và màu sắc khác nhau để làm cánh chong chóng.",
          "Cắt ống hút thành những đoạn ngắn để phù hợp với kích thước mong muốn.",
        ],
        image: "https://example.com/images/step1-windmill.jpg",
      },
      {
        title: "Bước 2: Làm cánh chong chóng",
        body: [
          "Cắt giấy cứng thành hình tam giác hoặc hình tròn.",
          "Gắn các ống hút vào các cạnh của hình giấy để tạo thành cánh chong chóng.",
        ],
        image: "https://example.com/images/step2-windmill.jpg",
      },
      {
        title: "Bước 3: Trang trí",
        body: [
          "Trang trí chong chóng bằng cách dùng bút màu vẽ hoa văn trên giấy.",
        ],
        image: "https://example.com/images/step3-windmill.jpg",
      },
      {
        title: "Bước 4: Gắn kim chỉ",
        body: [
          "Dùng kim chỉ để xuyên qua tâm của cánh chong chóng và gắn nó vào tay cầm.",
          "Kiểm tra xem chong chóng có quay trơn tru không, điều chỉnh nếu cần.",
        ],
        image: "https://example.com/images/step4-windmill.jpg",
      },
    ],
    benefit: [
      "Phát triển kỹ năng thủ công: Trẻ sẽ học được cách làm chong chóng từ nguyên liệu tái chế.",
      "Giáo dục về tái chế: Trẻ hiểu được cách sử dụng lại ống hút nhựa thay vì vứt đi.",
      "Kích thích sáng tạo: Trẻ có thể tự do trang trí và thiết kế chong chóng của mình.",
    ],
  },
  3: {
    id: 3,
    title: "Làm lồng đèn từ chai nhựa",
    image:
      "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/Thanh%20Mai%20MKT/C%C3%A2y%20Trung%20thu/Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(79).jpg",
    target: "Học sinh tiểu học",
    material: [
      "Chai nhựa",
      "Giấy màu",
      "Keo dán",
      "Bút màu",
      "Dao rọc giấy",
      "Đèn LED nhỏ",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị chai nhựa",
        body: [
          "Làm sạch và cắt chai nhựa theo hình dáng lồng đèn mong muốn. Có thể cắt ngang hoặc cắt dọc tùy theo thiết kế.",
        ],
        image: "https://example.com/images/step1-lantern.jpg",
      },
      {
        title: "Bước 2: Trang trí lồng đèn",
        body: [
          "Sử dụng giấy màu, bút vẽ để trang trí mặt ngoài của chai nhựa.",
          "Có thể dán các họa tiết như sao, trăng hoặc các hình trang trí khác.",
        ],
        image: "https://example.com/images/step2-lantern.jpg",
      },
      {
        title: "Bước 3: Thêm đèn LED",
        body: [
          "Đặt đèn LED nhỏ vào trong chai nhựa để tạo ánh sáng cho lồng đèn.",
        ],
        image: "https://example.com/images/step3-lantern.jpg",
      },
      {
        title: "Bước 4: Hoàn thiện",
        body: [
          "Kiểm tra lại lồng đèn, đảm bảo mọi chi tiết được dán chắc chắn. Lồng đèn có thể sử dụng để trang trí hoặc thắp sáng trong các dịp lễ.",
        ],
        image: "https://example.com/images/step4-lantern.jpg",
      },
    ],
    benefit: [
      "Kích thích sáng tạo: Học sinh có cơ hội tự do sáng tạo trong việc thiết kế lồng đèn của riêng mình.",
      "Kỹ năng thủ công: Học sinh học được cách tái chế chai nhựa thành vật dụng trang trí.",
      "Ý thức bảo vệ môi trường: Giảm thiểu việc sử dụng đèn nhựa thương mại, tăng cường việc tái chế.",
    ],
  },
  4: {
    id: 4,
    title: "Làm bẫy bắt muỗi từ chai nhựa",
    image: "https://image.baophapluat.vn/w840/Uploaded/2024/carwqwrwq/2018_05_19/0_UXBO.jpg",
    target: "Học sinh trung học",
    material: [
      "Chai nhựa",
      "Đường",
      "Men nở",
      "Nước ấm",
      "Keo dán",
      "Giấy đen hoặc vải đen",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị chai nhựa",
        body: ["Cắt chai nhựa làm đôi, giữ lại cả hai phần."],
        image: "https://example.com/images/step1-mosquito.jpg",
      },
      {
        title: "Bước 2: Chuẩn bị dung dịch bắt muỗi",
        body: [
          "Hòa tan đường vào nước ấm, sau đó thêm men nở. Dung dịch này sẽ phát ra khí CO2, thu hút muỗi.",
        ],
        image: "https://example.com/images/step2-mosquito.jpg",
      },
      {
        title: "Bước 3: Lắp bẫy",
        body: [
          "Đổ dung dịch vào phần đáy chai, đặt phần đầu chai úp ngược vào để tạo thành một phễu.",
          "Dán kín các mép bằng keo để muỗi không thể thoát ra ngoài.",
        ],
        image: "https://example.com/images/step3-mosquito.jpg",
      },
      {
        title: "Bước 4: Bọc chai nhựa",
        body: [
          "Dùng giấy đen hoặc vải đen bọc quanh chai để làm tối không gian bên trong, giúp thu hút muỗi hơn.",
        ],
        image: "https://example.com/images/step4-mosquito.jpg",
      },
    ],
    benefit: [
      "Giảm muỗi trong nhà: Bẫy giúp thu hút và bắt muỗi một cách hiệu quả.",
      "Bảo vệ sức khỏe: Giảm nguy cơ mắc các bệnh do muỗi truyền như sốt xuất huyết.",
      "Giáo dục về khoa học: Học sinh sẽ hiểu về quy trình tạo ra CO2 và cách nó thu hút muỗi.",
    ],
  },
  5: {
    id: 5,
    title: "Làm vật nuôi mini từ chai nhựa",
    image: "https://cdn.tgdd.vn//News/0//lam-do-choi-bang-chai-nhua-thanh-ong-heo-845x564.jpg",
    target: "Học sinh tiểu học",
    material: ["Chai nhựa", "Màu vẽ", "Keo dán", "Giấy", "Bút màu"],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị chai nhựa",
        body: [
          "Làm sạch chai nhựa và cắt chúng thành hình dạng của các con vật, như con thỏ, con mèo hoặc con lợn.",
        ],
        image: "https://example.com/images/step1-pet.jpg",
      },
      {
        title: "Bước 2: Trang trí",
        body: ["Dùng bút màu và giấy để vẽ và trang trí tạo hình cho con vật."],
        image: "https://example.com/images/step2-pet.jpg",
      },
      {
        title: "Bước 3: Hoàn thiện",
        body: [
          "Dán thêm các chi tiết như tai, mắt và mũi để làm cho con vật thêm sinh động.",
        ],
        image: "https://example.com/images/step3-pet.jpg",
      },
    ],
    benefit: [
      "Phát triển sáng tạo: Học sinh có thể tự do sáng tạo hình dạng và trang trí con vật.",
      "Giáo dục về tái chế: Sử dụng lại chai nhựa để làm đồ chơi hoặc vật trang trí.",
      "Kỹ năng thủ công: Học sinh học cách cắt dán và trang trí từ các vật liệu đơn giản.",
    ],
  },
};

export const allData = {
  [EDataType.BASIC]: basic,
  [EDataType.ACTIVITY]: activity,
  [EDataType.STORY]: story,
};
