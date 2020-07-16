export class User {
    username: string;
    password: string;
    img: string;
    fullName: string;
    address: string;
    phone1: string;
    phone2: string;
    role: number;
    status: boolean;
    reason: string;
}

export class UserList {
    list: User[];

    listUser: User[] = [
        {
            username: "user1",
            password: "user1",
            img: "../../../assets/imgs/user1.jpg",
            fullName: "Nguyễn Lê Huy",
            address: "Quận 9",
            phone1: "0363334449",
            phone2: "",
            role: 1,
            status: true,
            reason:""
        },
        {
            username: "khanl",
            password: "khanl",
            img: "../../../assets/imgs/user2.jpg",
            fullName: "Nguyễn Lê Kha",
            address: "Quận 9",
            phone1: "0363334477",
            phone2: "",
            role: 0,
            status: true,
            reason:""
        },
        {
            username: "phuhd",
            password: "phuhd",
            img: "../../../assets/imgs/user3.jpg",
            fullName: "Hồ Duy Phú",
            address: "Quận 2",
            phone1: "0363355555",
            phone2: "",
            role: 1,
            status: true,
            reason:""
        },
        {
            username: "toandt",
            password: "toandt",
            img: "../../../assets/imgs/user4.jpg",
            fullName: "Dương Tài Toàn",
            address: "Quận 3",
            phone1: "0363334456",
            phone2: "",
            role: 0,
            status: false,
            reason:"Đăng nội dung bạo lực nhiều lần"
        },
        {
            username: "thanhhx",
            password: "thanhhx",
            img: "../../../assets/imgs/user5.jpg",
            fullName: "Hoàng Thành",
            address: "Quận 5",
            phone1: "0363675449",
            phone2: "",
            role: 1,
            status: true,
            reason:""
        },
        {
            username: "hoangnl",
            password: "hoangnl",
            img: "../../../assets/imgs/user5.jpg",
            fullName: "Lê Hoàng",
            address: "Quận 5",
            phone1: "0363675449",
            phone2: "",
            role: 0,
            status: true,
            reason:""
        },
        {
            username: "hieubd",
            password: "hieubd",
            img: "../../../assets/imgs/user6.jpg",
            fullName: "Bùi Đức Hiếu",
            address: "Quận 6",
            phone1: "0363444445",
            phone2: "",
            role: 0,
            status: false,
            reason:"Đăng nội dung bạo lực nhiều lần"
        },
        {
            username: "chiennd",
            password: "chiennd",
            img: "../../../assets/imgs/admin.jpg",
            fullName: "Nguyễn Chiến",
            address: "Bình Dương",
            phone1: "0363095151",
            phone2: "",
            role: 0,
            status: true,
            reason:""
        },
        {
            username: "admin",
            password: "admin",
            img: "../../../assets/imgs/admin.jpg",
            fullName: "Nguyễn Đình Chiến",
            address: "Bình Dương",
            phone1: "0363095151",
            phone2: "",
            role: 2,
            status: true,
            reason:""
        }
    ];

    public getListUser() {
        return this.listUser;
    }

    public getListUserExcept() {
        this.list = new Array();
        this.listUser.forEach(element => {
            if (!element.username.match("admin")) {
                this.list.push(element);
            }
        });
        return this.list;
    }

}