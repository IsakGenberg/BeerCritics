import axios from 'axios';
import { Beer } from './interfaces/beer';

const BASE_URL = "http://localhost:8080";

export async function getAllBeers() : Promise<Beer[] | null> {
  try{
    const response = await axios.get<Beer[]>(`${BASE_URL}/beer`);
    return response.data;
  }
  catch(e : any){
    console.error(`failed to fetch beers`, e);
    return null;
  }
}

export async function getBeer(name : string) : Promise<Beer |null>{
    if(!name.trim()){
      console.warn("getBeer called with an empty name.");
      return null;
    }
    try{
      const response = await axios.get<Beer>(`${BASE_URL}/beer/${name}`);
      return response.data;
    }
    catch(e : any){
      console.error(`failed to fetch beer: ${name}`, e);
      return null;
    }
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