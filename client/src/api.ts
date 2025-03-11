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

export async function registerNewUser(username: string, password: string) {
  await axios.post(`${BASE_URL}/user`, {
    username,
    password,
  });
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

export async function updateReview(review: Review): Promise<void> {
  await axios.put(`${BASE_URL}/review`, review);
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
  await axios.post(`${BASE_URL}/user/login`, { username, password });
}

/**
 * Gets the current user in the session and returns the user's username if they are logged in.
 * @returns username if logged in and null if not.
 */
export async function getUser(): Promise<string | null> {
  try {
    const res = await axios.get<string>(`${BASE_URL}/user`);
    return res.data;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}

export async function logout(): Promise<void> {
  await axios.post(`${BASE_URL}/user/logout`);

}

export async function deleteReview(review: Review): Promise<void> {
  await axios.delete(`${BASE_URL}/review`, { data: review });

}

export async function changeUsername(oldUsername : string, newUsername : string) : Promise<void> {
  await axios.patch(`${BASE_URL}/user`, { oldUsername, newUsername})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
}
