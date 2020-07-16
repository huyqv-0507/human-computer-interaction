export class Acreage {
    fromText: string;
    toText: string;
    from: number;
    to: number;
    isChecked: boolean;
}

export class AcreageList {
    list: Acreage[] = [
        {
            fromText: "0 m²",
            toText: "50 m²",
            from: 0,
            to: 50,
            isChecked: false
        },
        {
            fromText: "51 m²",
            toText: "100 m²",
            from: 51,
            to: 100,
            isChecked: false
        },
        {
            fromText: "101 m²",
            toText: "200 m²",
            from: 101,
            to: 200,
            isChecked: false
        },
        {
            fromText: "",
            toText: "Trên 200 m²",
            from: 201,
            to: 500000000000,
            isChecked: false
        },
    ];

    getList() {
        return [...this.list];
    }
}