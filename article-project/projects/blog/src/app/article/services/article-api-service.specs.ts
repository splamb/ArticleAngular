import { ArticleApiService } from "./article-api.service"

describe("Test getAllArticles returns 4", () => {

    let service = new ArticleApiService();

    it("Should Return 4 ArticlePreviews", () => {
        expect(service.getAllArticles().length).toBe(4);
    })

})