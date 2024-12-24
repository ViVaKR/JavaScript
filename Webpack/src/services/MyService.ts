import axios from 'axios';

export interface ICategories {
    id: number;
    name: string;
}
export class MyService {
    private baseUrl = "https://api.vivabm.com";

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    sayHello() {
        console.log('Hello from MyService!');
    }

    async getCodes(): Promise<ICategories[]> {
        try {
            const response = await axios.get<ICategories[]>(`${this.baseUrl}/api/category/list`);
            return response.data;
        } catch (error) {
            console.error('Error fetching codes:', error);
            throw error;
        }
    }


}

export const fetchCategories = async (): Promise<ICategories[]> => {
    const response = await axios.get<ICategories[]>('https://api.vivabm.com/api/category/list');
    return response.data;
};

/*
  //--> Get all categories
  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/api/category/list`, {
      context: new HttpContext().set(SkipLoading, true)
    });
  }

*/
