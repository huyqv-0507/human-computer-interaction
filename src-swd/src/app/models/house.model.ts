export class HouseEntity {
  id: string;
  title: string;
  img: string[];
  price: string;
  description: string;
  furniture: string;
  area: string;
  address: string;
  addressDetail: string;
  username: string;
  numFloor: string;
  numRoom: string;
  numToilet: string;
  numBedroom: string;
  legal: string;
  project: string;
  deposit: string;
  priceNumber: number;
  areaNumber: number;
  nearMe: number;
}

export class HouseList {
  housesTopPrice: HouseEntity[] = [
    {
      id: 'h1',
      title: 'Cho thuê căn hộ 2PN full nội thất CC HQC Hóc Môn',
      img: [
        '../assets/imgs/h1-0.jpg',
        '../assets/imgs/h1-1.jpg',
        '../assets/imgs/h1-2.jpg'
      ],
      price: '6.000.000 VNĐ/tháng',
      description: 'Dự án chung cư HQC Hóc Môn, full nội thất, ƯU TIÊN GIẢM GIÁ KHI THANH TOÁN 6 THÁNG CỌC 2 THÁNG . LIÊN HỆ A. LÂM Ưu tiên cho vơ chồng trẻ , vì nhà mới , nội thất đều mới người thiện chí kí hợp đồng 1 năm.',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '62m2',
      address: 'Xã Xuân Thới Đông, Huyện Hóc Môn',
      addressDetail: '18/1 Nguyễn Thị sóc, Xã Xuân Thới Đông, Huyện Hóc Môn, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '8',
      numRoom: '802',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đang chờ bàn giao sổ',
      project: 'HQC',
      deposit: '12.000.000 VNĐ',
      priceNumber: 6000000,
      areaNumber: 62,
      nearMe: 2
    },
    {
      id: 'h2',
      title: 'Cho Căn hộ HQC Hóc Môn 60m² 2PN',
      img: [
        '../assets/imgs/h2-0.jpg',
        '../assets/imgs/h2-1.jpg',
        '../assets/imgs/h2-2.jpg'
      ],
      price: '4.500.000 VNĐ/tháng',
      description: 'Dự án chung cư HQC Hóc Môn, full nội thất, ƯU TIÊN GIẢM GIÁ KHI THANH TOÁN 6 THÁNG CỌC 2 THÁNG . LIÊN HỆ A. LÂM Ưu tiên cho vơ chồng trẻ , vì nhà mới , nội thất đều mới người thiện chí kí hợp đồng 1 năm.',
      furniture: 'Không',
      area: '60m2',
      address: 'Xã Xuân Thới Đông, Huyện Hóc Môn',
      addressDetail: '50 Nguyễn thị sóc, Xã Xuân Thới Đông, Huyện Hóc Môn, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '5',
      numRoom: '503',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'HQC',
      deposit: '4.500.000 VNĐ',
      priceNumber: 4500000,
      areaNumber: 60,
      nearMe: 3
    },
    {
      id: 'h3',
      title: 'Căn hộ mini full nội thất đối diện đài Tr/hình HTV',
      img: [
        '../assets/imgs/h3-0.jpg',
        '../assets/imgs/h3-1.jpg',
        '../assets/imgs/h3-2.jpg'
      ],
      price: '7.000.000 VNĐ/tháng',
      description: 'Căn hộ mini full nội thất, đối diện đài truyền hình HTV, sân vận động Hoa Lư, quận 1, khu vực an ninh, dọn vệ sinh 3 lần/ tuần...',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '27m2',
      address: 'Phường Đa Kao, Quận 1, Tp Hồ Chí Minh',
      addressDetail: '8/19A đường Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '104',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã có sổ',
      project: 'HQC',
      deposit: '14.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 27,
      nearMe: 4
    },
    {
      id: 'h4',
      title: 'Căn hộ chung cư Vạn Đô BVĐ Quận 4',
      img: [
        '../assets/imgs/h4-0.jpg',
        '../assets/imgs/h4-1.jpg',
        '../assets/imgs/h4-2.jpg',
        '../assets/imgs/h4-3.jpg'
      ],
      price: '12.000.000 VNĐ/tháng',
      description: 'Căn hộ 2 phòng ngủ, 1 toilet, gần TTTM, Siêu Thị, Nhà Hàng',
      furniture: 'Điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '60m2',
      address: 'Phường 1, Quận 4',
      addressDetail: '348 đường Bến Vân Đồn, phường 1, quận 4, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '3',
      numRoom: '305',
      numToilet: '1 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Vạn Đô',
      deposit: '20.000.000 VNĐ',
      priceNumber: 12000000,
      areaNumber: 60,
      nearMe: 5
    },
    {
      id: 'h5',
      title: 'Căn hộ Cityland Park Hills 80m² 2PN NTCB 12tr',
      img: [
        '../assets/imgs/h5-0.jpg',
        '../assets/imgs/h5-1.jpg',
        '../assets/imgs/h5-2.jpg',
        '../assets/imgs/h5-3.jpg'
      ],
      price: '12.000.000 VNĐ/tháng',
      description: 'Cho thuê chung cư Cityland Park Hills, nội thất cơ bản, LH để xem trực tiếp',
      furniture: 'Bếp, rèm, 3 máy lạnh',
      area: '80m2',
      address: 'Phường 10, Quận Gò Vấp',
      addressDetail: '18 đường Phan Văn Trị, phường 10, Quận Gò Vấp, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '2',
      numRoom: '208',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Khu dân cư Cityland Park Hills',
      deposit: '12.000.000 VNĐ',
      priceNumber: 12000000,
      areaNumber: 80,
      nearMe: 6
    },
  ];

  housesTop: HouseEntity[] = [
    {
      id: 'g1',
      title: 'Cho thuê căn hộ Jamila Khang Điền, 2PN giá tốt',
      img: [
        '../assets/imgs/map1-1.jpg',
        '../assets/imgs/map1-2.jpg',
        '../assets/imgs/map1-3.jpg'
      ],
      price: '8.500.000 VNĐ/tháng',
      description: 'Cho thuê căn hộ chung cư Jamila Khang Điền - liền kề Quận 2 - sát bên Lakeview City nhiều tiện ích Phong Phú đa dạng, phục vụ mọi nhu cầu của quý khách.\nVị trí đắc địa, giao thông thuận tiện,...',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '75m2',
      address: 'Phường Phú Hữu, quận 9',
      addressDetail: 'Đường Song Hành, phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '8',
      numRoom: '816',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Jamila Khang Điền',
      deposit: '16.000.000 VNĐ',
      priceNumber: 8500000,
      areaNumber: 75,
      nearMe: 8
    },
    {
      id: 'h7',
      title: 'Căn hộ full nội thất đường Nguyễn Duy Cung Gò Vấp',
      img: [
        '../assets/imgs/h7-0.jpg',
        '../assets/imgs/h7-1.jpg',
        '../assets/imgs/h7-2.jpg'
      ],
      price: '4.500.000 VNĐ/tháng',
      description: 'căn hộ 27m2 đầy đủ nội thất, có ban công cửa sổ cực kì thoáng mát, nhà mới 100%, tiện ích xung quanh đầy đủ, nhà dc trang bị camera, khóa vân tay, quản lí 24/24 an ninh tuyệt đối, điện 3k5 1kw, nước 100k 1ng, wifi 100k 1ng.',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '27m2',
      address: 'Phường 12, Quận Gò Vấp',
      addressDetail: '37/5 đường Nguyễn Duy Cung, phường 12, Quận Gò Vấp, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '101',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '8.000.000 VNĐ',
      priceNumber: 4500000,
      areaNumber: 27,
      nearMe: 9
    },
    {
      id: 'h8',
      title: 'Căn hộ Quận Phú Nhuận 32m² 1PN giá 8tr',
      img: [
        '../assets/imgs/h8-0.jpg',
        '../assets/imgs/h8-1.jpg',
        '../assets/imgs/h8-2.jpg'
      ],
      price: '8.000.000 VNĐ/tháng',
      description: 'Căn hộ được trang bị nội thất hiện đại, mới 100%, đầy đủ tiện nghi.\nBaor vệ 24/24, camera an ninh, full nội thất, giờ giấc tự do\nFREE: Gửi xe 2 chiếc/phòng...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '32m2',
      address: 'Phường 9, Quận Phú Nhuận',
      addressDetail: '37 đường Phan Xích Long, phường 9, Quận Phú Nhuận, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '102',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '12.000.000 VNĐ',
      priceNumber: 8000000,
      areaNumber: 32,
      nearMe: 12
    },
    {
      id: 'h9',
      title: 'Chung cư Botanica Premier gần sân bay căn 1PN',
      img: [
        '../assets/imgs/h4-0.jpg',
        '../assets/imgs/h4-1.jpg',
        '../assets/imgs/h4-2.jpg'
      ],
      price: '14.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '53m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '1',
      numRoom: '118',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '20.000.000 VNĐ',
      priceNumber: 14000000,
      areaNumber: 53,
      nearMe: 15
    },
    {
      id: 'h10',
      title: 'CĂN HỘ LAVITA GARDEN BAO PHÍ QUẢN LÝ 1 NĂM 2PN=2WC',
      img: [
        '../assets/imgs/h2-0.jpg',
        '../assets/imgs/h2-1.jpg',
        '../assets/imgs/h2-2.jpg'
      ],
      price: '7.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '68m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '109',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '10.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 18
    },
  ];

  listApartment: HouseEntity[] = [
    {
      id: 'h11',
      title: 'Cho thuê căn hộ Jamila Khang Điền, 2PN giá tốt',
      img: [
        '../assets/imgs/map1-1.jpg',
        '../assets/imgs/map1-2.jpg',
        '../assets/imgs/map1-3.jpg'
      ],
      price: '8.500.000 VNĐ/tháng',
      description: 'Cho thuê căn hộ chung cư Jamila Khang Điền - liền kề Quận 2 - sát bên Lakeview City nhiều tiện ích Phong Phú đa dạng, phục vụ mọi nhu cầu của quý khách.\nVị trí đắc địa, giao thông thuận tiện,...',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '75m2',
      address: 'Phường Phú Hữu, quận 9',
      addressDetail: 'Đường Song Hành, phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '8',
      numRoom: '816',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Jamila Khang Điền',
      deposit: '16.000.000 VNĐ',
      priceNumber: 8500000,
      areaNumber: 75,
      nearMe: 19
    },
    {
      id: 'h12',
      title: 'Căn hộ full nội thất đường Nguyễn Duy Cung Gò Vấp',
      img: [
        '../assets/imgs/h7-0.jpg',
        '../assets/imgs/h7-1.jpg',
        '../assets/imgs/h7-2.jpg'
      ],
      price: '4.500.000 VNĐ/tháng',
      description: 'căn hộ 27m2 đầy đủ nội thất, có ban công cửa sổ cực kì thoáng mát, nhà mới 100%, tiện ích xung quanh đầy đủ, nhà dc trang bị camera, khóa vân tay, quản lí 24/24 an ninh tuyệt đối, điện 3k5 1kw, nước 100k 1ng, wifi 100k 1ng.',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '27m2',
      address: 'Phường 12, Quận Gò Vấp',
      addressDetail: '37/5 đường Nguyễn Duy Cung, phường 12, Quận Gò Vấp, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '101',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '8.000.000 VNĐ',
      priceNumber: 4500000,
      areaNumber: 27,
      nearMe: 20
    },
    {
      id: 'h13',
      title: 'Căn hộ Quận Phú Nhuận 32m² 1PN giá 8tr',
      img: [
        '../assets/imgs/h8-0.jpg',
        '../assets/imgs/h8-1.jpg',
        '../assets/imgs/h8-2.jpg'
      ],
      price: '8.000.000 VNĐ/tháng',
      description: 'Căn hộ được trang bị nội thất hiện đại, mới 100%, đầy đủ tiện nghi.\nBaor vệ 24/24, camera an ninh, full nội thất, giờ giấc tự do\nFREE: Gửi xe 2 chiếc/phòng...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '32m2',
      address: 'Phường 9, Quận Phú Nhuận',
      addressDetail: '37 đường Phan Xích Long, phường 9, Quận Phú Nhuận, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '102',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '12.000.000 VNĐ',
      priceNumber: 8000000,
      areaNumber: 32,
      nearMe: 21
    },
    {
      id: 'h14',
      title: 'Chung cư Botanica Premier gần sân bay căn 1PN',
      img: [
        '../assets/imgs/h4-0.jpg',
        '../assets/imgs/h4-1.jpg',
        '../assets/imgs/h4-2.jpg'
      ],
      price: '14.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '53m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '1',
      numRoom: '118',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '20.000.000 VNĐ',
      priceNumber: 14000000,
      areaNumber: 53,
      nearMe: 21
    },
    {
      id: 'h15',
      title: 'CĂN HỘ LAVITA GARDEN BAO PHÍ QUẢN LÝ 1 NĂM 2PN=2WC',
      img: [
        '../assets/imgs/h2-0.jpg',
        '../assets/imgs/h2-1.jpg',
        '../assets/imgs/h2-2.jpg'
      ],
      price: '7.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '68m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '109',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '10.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 22
    },
  ];

  listMotel: HouseEntity[] = [
    {
      id: 'h16',
      title: 'Phòng trọ MÁY LẠNH. Mới Sạch Đẹp đường Liên Phường',
      img: [
        '../assets/imgs/motel1-1.jpg',
        '../assets/imgs/motel2-2.jpg',
        '../assets/imgs/motel3-3.jpg'
      ],
      price: '4.200.000 VNĐ/tháng',
      description: 'Nhà 4 tầng có 12 phòng mới xây. Có camera an ninh, có ban công thoáng mát.\nChỉ nhận 2 đến 3 người trên phòng.',
      furniture: 'Máy lạnh, tivi, bộ bàn ăn',
      area: '30m2',
      address: 'Phường Phước Long B, quận 9',
      addressDetail: 'Khu dân cư Kiến Á, Đường Liên Phường, phường Phước Long B, Quận 9, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '2',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '4.000.000 VNĐ',
      priceNumber: 4200000,
      areaNumber: 30,
      nearMe: 1
    },
    {
      id: 'h17',
      title: 'Phòng trọ gần công viên phần mềm Quang Trung',
      img: [
        '../assets/imgs/motel2-1.jpg',
        '../assets/imgs/motel2-2.jpg',
        '../assets/imgs/motel2-3.jpg'
      ],
      price: '3.500.000 VNĐ/tháng',
      description: 'Phòng trọ sang trọng mới xây dựng, trang bị máy lạnh, internet, nước nóng, phòng có gác có ban công, cách công viên phần mềm Quang trung 300m',
      furniture: 'Máy lạnh, máy nước nóng',
      area: '20m2',
      address: 'Phường Trung Mỹ Tây, Quận 12',
      addressDetail: '32, đường Hà Thị Thiêm, phường Trung Mỹ Tây, Quận 12, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '3.500.000 VNĐ',
      priceNumber: 3500000,
      areaNumber: 20,
      nearMe: 24
    },
    {
      id: 'h18',
      title: 'Cho thuê phòng trọ đường Nguyễn Thị Kiểu Q12',
      img: [
        '../assets/imgs/motel3-1.jpg',
        '../assets/imgs/motel3-2.jpg',
        '../assets/imgs/motel3-3.jpg'
      ],
      price: '2.500.000 VNĐ/tháng',
      description: 'Giờ giấc tự do, camera an ninh 24/24, ở không giới hạn người, có ban công phơi đồ,...',
      furniture: 'Không',
      area: '18m2',
      address: 'Phường Tân Thới Hiệp, quận 12',
      addressDetail: '18C Nguyễn Thị Kiểu, phường Tân Thới Hiệp, quận 12, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '2',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '2.000.000 VNĐ',
      priceNumber: 2500000,
      areaNumber: 18,
      nearMe: 22
    },
    {
      id: 'h19',
      title: 'Phòng trọ Nguyễn Oanh FREE 1 tháng mùa dịch',
      img: [
        '../assets/imgs/motel4-1.jpg',
        '../assets/imgs/motel4-2.jpg',
        '../assets/imgs/motel4-3.jpg'
      ],
      price: '3.000.000 VNĐ/tháng',
      description: 'Nội thất đầy đủ, nhà vệ sinh riêng, căn hộ ngay Trung tâm quận Gò Vấp',
      furniture: 'Bếp, máy lạnh, sào phơi thông minh, ',
      area: '40m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: 'Đường Nguyễn Oanh, phường 6, Quận Gò Vấp, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '3',
      numRoom: '2',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '3.000.000 VNĐ',
      priceNumber: 3000000,
      areaNumber: 40,
      nearMe: 17
    },
    {
      id: 'h20',
      title: 'Phòng trọ Quận Bình Thạnh 25m2',
      img: [
        '../assets/imgs/motel5-1.jpg',
        '../assets/imgs/motel5-3.jpg',
        '../assets/imgs/motel5-2.jpg'
      ],
      price: '5.000.000 VNĐ/tháng',
      description: 'Phòng trong nhà nguyên căn, có hầm để xe rộng rãi free, phòng sạch sẽ,...',
      furniture: 'Máy giặT, tủ quần áo, giường, ti vi, máy lạnh',
      area: '25m2',
      address: 'Phường 22, Quận Bình Thạnh',
      addressDetail: '43, Đường Phú Mỹ, Phường 22, Quận Bình Thạnh, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '3',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '7.000.000 VNĐ',
      priceNumber: 5000000,
      areaNumber: 25,
      nearMe: 12
    },
  ];

  listOffice: HouseEntity[] = [
    {
      id: 'h21',
      title: 'Văn phòng quận Bình Thạnh 80m2',
      img: [
        '../assets/imgs/office1-1.jpg',
        '../assets/imgs/office1-2.jpg',
        '../assets/imgs/office1-3.jpg'
      ],
      price: '10.000.000 VNĐ/tháng',
      description: 'Cho thuê tầng 1 làm văn phòng, diện tích 4x20m. Tầng trệt chủ nhà kinh doanh sữa, cafe',
      furniture: 'Không',
      area: '80m2',
      address: 'Phường 25, Quận Bình Thạnh',
      addressDetail: 'Số 7, đường Võ Oanh, Phường 25, Quận Bình Thạnh, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '0 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '8.000.000 VNĐ',
      priceNumber: 10000000,
      areaNumber: 80,
      nearMe: 11
    },
    {
      id: 'h22',
      title: 'Giảm giá 50% tiền thuê văn phòng hỗ trợ công ty mùa dịch COVID',
      img: [
        '../assets/imgs/h7-0.jpg',
        '../assets/imgs/h7-1.jpg',
        '../assets/imgs/h7-2.jpg'
      ],
      price: '8.000.000 VNĐ/tháng',
      description: 'Hiện tại bên mình con trống các phòng 45m2, 80m2. Có thang máy, hầm để xe, bảo vệ 24/24, hỗ trợ tăng ca, miễn phí quản lý',
      furniture: 'Bàn làm việc',
      area: '45m2',
      address: 'Phường 25, Quận Bình Thạnh',
      addressDetail: '112, Đường D1, Phường 25, Quận Bình Thạnh, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '2',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '6.000.000 VNĐ',
      priceNumber: 8000000,
      areaNumber: 45,
      nearMe: 11
    },
    {
      id: 'h23',
      title: 'Văn phòng quận 1 30m2',
      img: [
        '../assets/imgs/office3-1.jpg',
        '../assets/imgs/office3-2.jpg',
        '../assets/imgs/office3-3.jpg'
      ],
      price: '11.000.000 VNĐ/tháng',
      description: 'Villa với diện tích tầng trệt không phải lên xuống bất tiện, toilet các tầng, rộng rãi, an ninh tuyệt đối.',
      furniture: 'Không',
      area: '30m2',
      address: 'Phường Đa Kao, Quận 1',
      addressDetail: '2 Bis, Đường Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '11.000.000 VNĐ',
      priceNumber: 11000000,
      areaNumber: 30,
      nearMe: 13
    },
    {
      id: 'h24',
      title: 'Cho thuê văn phòng 9 Trần Hưng Đạo Q1',
      img: [
        '../assets/imgs/office4-1.jpg',
        '../assets/imgs/office4-2.jpg',
        '../assets/imgs/office4-3.jpg'
      ],
      price: '10.000.000 VNĐ/tháng',
      description: 'CHO THUÊ VĂN PHÒNG 9 trần hưng đạo RẺ Q1.10tr/80m2, khu vực chợ bến thành',
      furniture: 'Không',
      area: '80m2',
      address: 'Phường Cầu Kho, Quận 1',
      addressDetail: '9, đường Trần Hưng Đạo, Phường Cầu Kho, Quận 1, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '1',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '10.000.000 VNĐ',
      priceNumber: 10000000,
      areaNumber: 80,
      nearMe: 12
    },
    {
      id: 'h25',
      title: 'Văn Phòng 57m2, 18A Nam Quốc Cang, Phạm Ngũ Lão, Quận 1',
      img: [
        '../assets/imgs/office5-1.jpg',
        '../assets/imgs/office5-2.jpg',
        '../assets/imgs/office5-3.jpg'
      ],
      price: '23.000.000 VNĐ/tháng',
      description: 'Hiện chủ đầu tư WIN HOME chúng tôi cần cho thuê văn phòng tại quận 1 .\nToà nhà được toạ lạc tại tuyến đường Nam Quốc Cang, là tuyến đường 2 chiều xung quanh là khu văn phòng tập trung nhiều tiện ích ăn uống, café và đây là thế mạnh của vị trí toà nhà chúng tôi.',
      furniture: 'Không',
      area: '57m2',
      address: 'Phường Phạm Ngũ Lão, Quận 1',
      addressDetail: '18A, Đường Nam Quốc Cang, Phường Phạm Ngũ Lão, Quận 1, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '0',
      numRoom: '1',
      numToilet: '1 phòng',
      numBedroom: '0 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '23.000.000 VNĐ',
      priceNumber: 23000000,
      areaNumber: 57,
      nearMe: 13
    },
  ];

  listHouses: HouseEntity[] = [
    {
      id: 'h26',
      title: 'Cho thuê căn hộ Jamila Khang Điền, 2PN giá tốt',
      img: [
        '../assets/imgs/map1-1.jpg',
        '../assets/imgs/map1-2.jpg',
        '../assets/imgs/map1-3.jpg'
      ],
      price: '8.500.000 VNĐ/tháng',
      description: 'Cho thuê căn hộ chung cư Jamila Khang Điền - liền kề Quận 2 - sát bên Lakeview City nhiều tiện ích Phong Phú đa dạng, phục vụ mọi nhu cầu của quý khách.\nVị trí đắc địa, giao thông thuận tiện,...',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '75m2',
      address: 'Phường Phú Hữu, quận 9',
      addressDetail: 'Đường Song Hành, phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '8',
      numRoom: '816',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Jamila Khang Điền',
      deposit: '16.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4
    },
    {
      id: 'h27',
      title: 'Căn hộ full nội thất đường Nguyễn Duy Cung Gò Vấp',
      img: [
        '../assets/imgs/h7-0.jpg',
        '../assets/imgs/h7-1.jpg',
        '../assets/imgs/h7-2.jpg'
      ],
      price: '4.500.000 VNĐ/tháng',
      description: 'căn hộ 27m2 đầy đủ nội thất, có ban công cửa sổ cực kì thoáng mát, nhà mới 100%, tiện ích xung quanh đầy đủ, nhà dc trang bị camera, khóa vân tay, quản lí 24/24 an ninh tuyệt đối, điện 3k5 1kw, nước 100k 1ng, wifi 100k 1ng.',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '27m2',
      address: 'Phường 12, Quận Gò Vấp',
      addressDetail: '37/5 đường Nguyễn Duy Cung, phường 12, Quận Gò Vấp, Tp Hồ Chí Minh',
      username: 'thanhhx',
      numFloor: '1',
      numRoom: '101',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '8.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 7
    },
    {
      id: 'h28',
      title: 'Căn hộ Quận Phú Nhuận 32m² 1PN giá 8tr',
      img: [
        '../assets/imgs/h8-0.jpg',
        '../assets/imgs/h8-1.jpg',
        '../assets/imgs/h8-2.jpg'
      ],
      price: '8.000.000 VNĐ/tháng',
      description: 'Căn hộ được trang bị nội thất hiện đại, mới 100%, đầy đủ tiện nghi.\nBaor vệ 24/24, camera an ninh, full nội thất, giờ giấc tự do\nFREE: Gửi xe 2 chiếc/phòng...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '32m2',
      address: 'Phường 9, Quận Phú Nhuận',
      addressDetail: '37 đường Phan Xích Long, phường 9, Quận Phú Nhuận, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '102',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Không',
      deposit: '12.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4
    },
    {
      id: 'h29',
      title: 'Chung cư Botanica Premier gần sân bay căn 1PN',
      img: [
        '../assets/imgs/h4-0.jpg',
        '../assets/imgs/h4-1.jpg',
        '../assets/imgs/h4-2.jpg'
      ],
      price: '14.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '53m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'user1',
      numFloor: '1',
      numRoom: '118',
      numToilet: '1 phòng',
      numBedroom: '1 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '20.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 5
    },
    {
      id: 'h30',
      title: 'CĂN HỘ LAVITA GARDEN BAO PHÍ QUẢN LÝ 1 NĂM 2PN=2WC',
      img: [
        '../assets/imgs/h2-0.jpg',
        '../assets/imgs/h2-1.jpg',
        '../assets/imgs/h2-2.jpg'
      ],
      price: '7.000.000 VNĐ/tháng',
      description: 'Căn hộ 1 phòng ngủ, view cực đẹp, thoáng mát, yên tĩnh, 2 hồ bơi, gym,...',
      furniture: 'Tủ lạnh, sofa, bàn làm việc, máy giặt, máy điều hoà,...',
      area: '68m2',
      address: 'Phường 2, Quận Tân Bình',
      addressDetail: '37 đường Hồng Hà, phường 2, Quận Tân Bình, Tp Hồ Chí Minh',
      username: 'phuhd',
      numFloor: '1',
      numRoom: '109',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã bàn giao',
      project: 'Botanica Premier',
      deposit: '10.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 17
    },
  ];

  public getListHouseTopPrice() {
    return [...this.housesTopPrice];
  }

  public getListHousesTop() {
    return [...this.housesTop];
  }

  public getListApartment() {
    return [...this.listApartment];
  }

  public getListMotel() {
    return [...this.listMotel];
  }

  public getListOffice() {
    return [...this.listOffice];
  }

  public getListHouses() {
    return [...this.listHouses];
  }

}