import axios from 'axios';
import { Beer } from './interfaces/beer';

const BASE_URL = "http://localhost:8080";

export async function getAllBeers() : Promise<Beer[]> {
    const response = await axios.get<Beer[]>(`${BASE_URL}/beer`);
    return response.data;
}

export async function getBeer(name : string) : Promise<Beer>{
    const response = await axios.get<Beer>(`${BASE_URL}/beer/${name}`);
    return response.data;
}

export async function registerNewUser(
  username: string,
  password: string
): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/user`, { username, password});
  } catch (e: any) {
    console.log(e);
  }
}