import axios from 'axios';

export interface ICategories {
    id: number;
    name: string;
}

export const fetchCategories = async (): Promise<ICategories[]> => {
    const response = await axios.get<ICategories[]>(
        'https://api.vivabm.com/api/category/list'
    );
    return response.data;
};
