import axios from "axios";
import { Beer } from "./interfaces/beer";
import { Review } from "./interfaces/review";

const BASE_URL = "http://localhost:8080";
axios.defaults.withCredentials = true;

export async function getAllBeers(): Promise<Beer[]> {
  try {
    const response = await axios.get<Beer[]>(`${BASE_URL}/beer`);
    return response.data;
  } catch (e: any) {
    console.error(`failed to fetch beers`, e);
    return [];
  }
}

export async function addBeer(beer: Beer): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/`, beer);
  } catch (e: any) {
    console.log(e);
  }
}

export async function getBeer(name: string): Promise<Beer | null> {
  if (!name.trim()) {
    console.warn("getBeer called with an empty name.");
    return null;
  }
  try {
    const response = await axios.get<Beer>(`${BASE_URL}/beer/${name}`);
    return response.data;
  } catch (e: any) {
    console.error(`failed to fetch beer: ${name}`, e);
    return null;
  }
}

export async function registerNewUser(
  username: string,
  password: string
): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/user`, {
      username,
      password,
    });
  } catch (e: any) {
    console.log(e);
  }
}

export async function getMyReviews(): Promise<Review[] | undefined> {
  try {
    const reviews = await axios.get<Review[]>(`${BASE_URL}/review/myreviews`);
    return reviews.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function addReview(review: Review): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/review`, review);
  } catch (e: any) {
    console.log(e);
  }
}

export async function getBeerReviews(
  beerName: string
): Promise<Review[] | undefined> {
  try {
    const reviews = await axios.get<Review[]>(`${BASE_URL}/review/${beerName}`);
    return reviews.data;
  } catch (e: any) {
    console.log(e);
  }
}

export async function login(username: string, password: string): Promise<void> {
  await axios.post(`${BASE_URL}/user/login`, {
    username: username,
    password: password,
  });
}

export async function getUser() : Promise<string | null>{
  try{
    const res = await axios.get<string>(`${BASE_URL}/user`);
    return res.data;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}
