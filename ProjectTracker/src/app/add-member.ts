export class AddMember {
    constructor(
        public name: string,
        public mID: number = 0,
        public _id: string = "",
        public yearsofExperience: number,
        public description: string,
        public projectStartDate: string,
        public projectEndDate: string,
        public skillSet: number,
        public allocation: number
    ) { }
}
