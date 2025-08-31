// import OrderForm from "../OrderForm/OrderForm";

import { useState } from "react";
import SearchForm from "../ SearchForm/SearchForm";
import axios from "axios";
import type { Article } from "../../types/article";
import ArticleList from "../ArticleList/ArticleList";

// function App() {
//     const handleOrder = (data: string) => {
//         console.log("Order:", data);
        
//     }

//     return <div>
//     <OrderForm onSubmit={handleOrder} />
// </div>
// }

interface ArticlesHttpResponse {
  hits: Article[];
}

function App() {
    const [articles, setArticles] = useState<Article[]>([]);

    const handleSearch = async (topic: string) => {
        const response = await axios.get<ArticlesHttpResponse>
            (`https://hn.algolia.com/api/v1/search?query=${topic}`);
        
        setArticles(response.data.hits);
        
    }

    return <div>
        <SearchForm onSubmit={handleSearch} />
        {articles.length > 0 && <ArticleList items={articles} />}
    </div>
}

export default App