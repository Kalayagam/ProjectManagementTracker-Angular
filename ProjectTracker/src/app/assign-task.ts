export class AssignTask {
    constructor(
        public name: string,
        public mID: number = 0,
        public taskName: string,
        public deliverables: string,
        public taskStartDate: string,
        public taskEndDate: string
    ) { }
}
