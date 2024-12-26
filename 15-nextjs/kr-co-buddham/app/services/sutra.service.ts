import axios from 'axios';
import { ISutra, HangulOrder, HangulOrderArray } from '@/app/interfaces/sutra';

const baseUrl = 'https://db.buddham.co.kr';
export const fetchSutras = async (): Promise<ISutra[]> => {
    const response = await axios.get<ISutra[]>(`${baseUrl}/api/sutras`);
    return response.data;
};
