export class Article{
    constructor(
        public id: Number,
        public title: String,
        public content: String,
        public author: String,
        public createdAt: Number,
        public url: String
    ) {}
}