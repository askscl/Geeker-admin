// ts缺省，挑选，可选语法

interface Article{
    title: string;
    content: string;
    author: string;
    date: Date;
    readCount: number;
}

/* interface CreateArticleOptions {
    title: string;
    content: string;
    author?: string;
    date?: Date;
    readCount?: number;
} */

/**
 * Omit: 从T中去掉第二个参数所代表的属性
 * Pick: 从T中挑出第二个参数所代表的属性
 * Partial: 将所有属性变成可选的
 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type CreateArticleOptions = Optional<Article, 'author' | 'date' | 'readCount'>;

function createArticle(option: CreateArticleOptions){
    // option.
}



export{}