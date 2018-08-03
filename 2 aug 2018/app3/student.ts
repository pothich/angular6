export class Student {
    id: number;
    name: string;
    pocketMoney: number;
    jeeScore:number;
    attemptDate:Date;

    static students: Student[] = [
        { id: 1, name: 'RK',pocketMoney:1000,jeeScore:2204,attemptDate: new Date("9/27/2017 11:25")},
        { id: 2, name: 'Sathya',pocketMoney:5000,jeeScore:2876,attemptDate: new Date("9/27/2016 11:25")},
        { id: 3, name: 'Ventech',pocketMoney:2500,jeeScore:2600,attemptDate: new Date("9/27/2015 11:25")},
        { id: 4, name: 'Deepak',pocketMoney:7000,jeeScore:2800,attemptDate: new Date("9/27/2013 11:25")}
    ];
}