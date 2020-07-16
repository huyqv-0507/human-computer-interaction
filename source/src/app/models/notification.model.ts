export class Notification {
    userIDTo: string;
    message: string;
    from: string;
    status: boolean;
    img: string;
    userIDFrom: string;
    createAt: number;
}

export class NotificationList {

    public listNotification: Notification[] = [
        {
            //user là người đăng nhà
            //user1, user2, user3 là người cần thuê nhà
            userIDTo: "user1",
            message: "Hello",
            from: "Chiến",
            status: false,
            img: "../../../assets/imgs/admin.jpg",
            userIDFrom: "chiennd",
            createAt: 1583681766243,
        },
        {
            userIDTo: "phuhd",
            message: "Hello",
            from: "Kha",
            status: true,
            img: "../../../assets/imgs/user2.jpg",
            userIDFrom: "khanl",
            createAt: 1583681766443,
        },
        {
            userIDTo: "khanl",
            message: "Chào bạn",
            from: "Phú",
            status: false,
            img: "../../../assets/imgs/user3.jpg",
            userIDFrom: "phuhd",
            createAt: 1583681866643,
        },
        {
            userIDTo: "chiennd",
            message: "Bạn cần thuê nhà ạ",
            from: "Huy",
            status: true,
            img: "../../../assets/imgs/user1.jpg",
            userIDFrom: "user1",
            createAt: 1583681977843,
        },
        {
            userIDTo: "user1",
            message: "Có giảm giá chút không a",
            from: "Chiến",
            status: true,
            img: "../../../assets/imgs/admin.jpg",
            userIDFrom: "chiennd",
            createAt: 1583699767243,
        },
        {
            userIDTo: "khanl",
            message: "Bạn cần thuê nhà ạ",
            from: "Phú",
            status: false,
            img: "../../../assets/imgs/user3.jpg",
            userIDFrom: "phuhd",
            createAt: 1583699767243,
        },
        {
            userIDTo: "user1",
            message: "Hello",
            from: "Hoàng",
            status: false,
            img: "../../../assets/imgs/user3.jpg",
            userIDFrom: "hoangnl",
            createAt: 1583699767243,
        },
        {
            userIDTo: "user1",
            message: "Mình muốn thuê nhà",
            from: "Hoàng",
            status: false,
            img: "../../../assets/imgs/user3.jpg",
            userIDFrom: "hoangnl",
            createAt: 1583699767243,
        },
        // {
        //     id: "n6",
        //     userID: "user",
        //     message: "eeeee",
        //     from: "Huy",
        //     status: true,
        //     img: "../../../assets/imgs/user1.jpg",
        //     order: 4,
        //     userIDFrom: ""
        // },

    ];

    getListNotification() {
        return [...this.listNotification];
    }


}