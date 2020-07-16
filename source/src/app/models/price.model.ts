export class Price {
    fromText: string;
    toText: string;
    from: number;
    to: number;
    isChecked: boolean;
}

export class PriceList {
    list: Price[] = [
        {
            fromText: "0 triệu",
            toText: "5 triệu",
            from: 0,
            to: 5000000,
            isChecked: false
        },
        {
            fromText: "5 triệu",
            toText: "10 triệu",
            from: 5000000,
            to: 10000000,
            isChecked: false
        },
        {
            fromText: "10 triệu",
            toText: "20 triệu",
            from: 10000000,
            to: 20000000,
            isChecked: false
        },
        {
            fromText: "",
            toText: "Trên 20 triệu",
            from: 20000000,
            to: 500000000000,
            isChecked: false
        },
    ];

    getList() {
        return [...this.list];
    }
}