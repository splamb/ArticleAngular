export class CreateArticleRequest{
    constructor(
        public title: String,
        public author: String,
        public content: String
    ){}
}