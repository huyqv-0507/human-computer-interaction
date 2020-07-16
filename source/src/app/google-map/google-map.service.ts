import { Injectable } from '@angular/core';
import { HouseEntity } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {

  houseMap: HouseEntity[] = [
    {
      id: 'g1',
      title: 'Cho thuê căn hộ Jamila Khang Điền, 2PN giá tốt',
      img: [
        '../assets/imgs/map1-1.jpg',
        '../assets/imgs/map1-2.jpg',
        '../assets/imgs/map1-3.jpg'
      ],
      price: '8.500.000 VNĐ/tháng',
      description: 'Vị trí thuận lợi, giao thông thuận tiện.',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '75m2',
      address: 'Phường Phú Hữu, Quận 9',
      addressDetail: 'Đường Song Hành, phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'user2',
      numFloor: '8',
      numRoom: '816',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã có sổ đỏ/sổ hồng',
      project: 'Jamila Khang Điền',
      deposit: '16.000.000 VNĐ',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4,
      datePost: '17 giờ trước',
      direct: 'Đông Nam',
      status: true,
      order: 1,
    },
    
    {
      id: 'g2',
      title: 'Căn hộ The Eastern 96m² 3PN',
      img: [
        '../assets/imgs/g31.jpg',
        '../assets/imgs/g32.jpg',
        '../assets/imgs/g33.jpg',
        '../assets/imgs/g34.jpg',
      ],
      price: '10.000.000 VNĐ/tháng',
      description: 'Cho thuê căn hộ full nội thất, quận 9\nFull nội thất\n',
      furniture: 'Sofa, tivi, , giường, tủ quần áo, điều hòa, nóng lạnh, wifi, bàn làm việc , tủ bếp trên dưới, bếp hồng ngoại, máy hút mùi, thiết bị vệ sinh, thiết bị chiếu sáng',
      area: '96m2',
      address: 'Phường Phú Hữu, Quận 9',
      addressDetail: 'Đường Liên Phường, phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'user2',
      numFloor: '8',
      numRoom: '818',
      numToilet: '2 phòng',
      numBedroom: '3 phòng',
      legal: 'Đã có sổ hồng',
      project: 'The Eastern', 
      deposit: '18.000.000 VND',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4,
      datePost: '7 giờ trước',
      direct: 'Đông Nam',
      status: true,
      order: 1,
    },
    {
      id: 'g3',
      title: 'Cho thuê chung cư Sky 9',
      img: [
        '../assets/imgs/g4-1.jpg',
        '../assets/imgs/g4-2.jpg',
        '../assets/imgs/g4-3.jpg',
        '../assets/imgs/g4-4.jpg'
      ],
      price: '6.500.000 VNĐ/tháng',
      description: 'Dự án ở gần Vòng xoay liên phường quận 9, gần đường cao tốc, thông thoáng nên dịch chuyển vào trung tâm dễ dàng',
      furniture: 'Không có',
      area: '65m2',
      address: 'Phường Phú Hữu, Quận 9',
      addressDetail: '61 đường số 1, Phường Phú Hữu, Quận 9, Tp Hồ Chí Minh',
      username: 'user2',
      numFloor: '15',
      numRoom: '1521',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã có sổ đỏ/sổ hồng',
      project: 'Sky 9',
      deposit: '6.500.000 VND',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4,
      
      datePost: '1 giờ trước',
      direct: 'Đông Nam',
      status: true,
      order: 1,
    },
    {
      id: 'g4',
      title: 'Cho thuê căn hộ green building 75m đầy đủ nội thất',
      img: [
        '../assets/imgs/g4-1.jpg',
        '../assets/imgs/g4-2.jpg',
        '../assets/imgs/g4-3.jpg',
        '../assets/imgs/g4-4.jpg'
      ],
      price: '8.500.000 VNĐ/tháng',
      description: 'Chuyển công tác cần cho thuê lại căn hộ Green Building số 144 đường Nam Hoà, căn hộ ngay tại ngã tư Bình Thái, xa lộ Hà Nội',
      furniture: 'Không có',
      area: '75m2',
      address: 'Phường Phước Long A, quận 9',
      addressDetail: '144 đường Nam Hoà, Phường Phước Long A, Quận 9, Tp Hồ Chí Minh',
      username: 'user2',
      numFloor: '8',
      numRoom: '808',
      numToilet: '2 phòng',
      numBedroom: '2 phòng',
      legal: 'Đã có sổ đỏ/sổ hồng',
      project: 'Green Building',
      deposit: '8.500.000 VND',
      priceNumber: 7000000,
      areaNumber: 68,
      nearMe: 4,
      datePost: '10 giờ trước',
      direct: 'Đông Nam',
      status: true,
      order: 1,
    },
    {
    id: 'g5',
    title: 'Căn hộ Flora 54m² 1PN, Mới và đẹp',
    img: [
      '../assets/imgs/g5-4.jpg',
      '../assets/imgs/g5-3.jpg',
      '../assets/imgs/g5-2.jpg',
      '../assets/imgs/g5-1.jpg'
    ],
    price: '6.350.000 VNĐ/tháng',
    description: 'cho thuê căn Anh Đào , có một vài nội thất như hình,',
    furniture: 'Tủ, tivi, bàn, ghế',
    area: '54m2',
    address: 'Phường Phước Long A, quận 9',
    addressDetail: 'Đường đỗ Xuân Hợp, Phường Phước Long B, Quận 9, Tp Hồ Chí Minh',
    username: 'user2',
    numFloor: '3',
    numRoom: '303',
    numToilet: '1 phòng',
    numBedroom: '1 phòng',
    legal: 'Đã có sổ đỏ/sổ hồng',
    project: 'Flora Anh Đào',
    deposit: '10.000.000 VND',
    priceNumber: 7000000,
    areaNumber: 68,
    nearMe: 4,
    
    datePost: '17 giờ trước',
    direct: 'Đông Nam',
    status: true,
    order: 1,
  },
  ];

  houseId: string;

  constructor() { 
  }



  getAllHouse() {
    return [...this.houseMap];
  }
  getHouse(houseId: string) {
    return {
      ...this.houseMap.find(house => {
        return house.id === houseId;
      })
    };
  }
}
