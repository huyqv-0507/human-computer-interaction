import { HouseEntity } from './house.model';

export class Interest {
    id: number;
    userID: string;
    listHouse: any[];
}

export class InterestList {
    listInterest: Interest[] = [
        {
            id: 1,
            userID: "khanl",
            listHouse: [
                {
                    id: "h3",
                },
                {
                    id: "h7",
                },
                {
                    id: "h8",
                },
                {
                    id: "h10",
                },
                {
                    id: "h9",
                }
            ]
        },
        {
            id: 2,
            userID: "hieubd",
            listHouse: [
                {
                    id: "h7",
                },
                {
                    id: "h6",
                },
                {
                    id: "h9",
                },
                {
                    id: "h10",
                },
                {
                    id: "h11",
                }
            ]
        },
        {
            id: 3,
            userID: "chiennd",
            listHouse: [
                {
                    id: "h3",
                },
                {
                    id: "h8",
                },
                {
                    id: "h12",
                },
                {
                    id: "h13",
                },
                {
                    id: "h14",
                }
            ]
        }
    ];

    public getListInterest() {
        return [...this.listInterest];
    }
}