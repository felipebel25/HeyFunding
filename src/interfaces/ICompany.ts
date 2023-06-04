export interface ICompany {
    url: string;
    name: string;
    images: string[];
    tags: Tag[];
    description: string;
    money: Money;
}

export interface Money    {
    current: string;
    goal: string;
    currentNumber: number;
    goalNumber: number;
}
export interface Tag {
    name: string;
}
