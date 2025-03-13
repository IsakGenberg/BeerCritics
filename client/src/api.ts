import axios from "axios";
import { Beer } from "./interfaces/beer";
import { Review } from "./interfaces/review";

const BASE_URL = "http://localhost:8080";
axios.defaults.withCredentials = true;
/**
 *
 * @returns a list of all beers in the database
 */
export async function getAllBeers(): Promise<Beer[]> {
  try {
    const response = await axios.get<Beer[]>(`${BASE_URL}/beer`);
    return response.data;
  } catch (e: any) {
    console.error(`failed to fetch beers`, e);
    return [];
  }
}

/**
 *
 * @param beer object to be added to the database
 */
export async function addBeer(beer: Beer): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/`, beer);
  } catch (e: any) {
    console.log(e);
  }
}

/**
 *
 * @param name name of the beer to be fetched
 * @returns Beer object if the beer exists in the database, otherwise null
 */
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

/**
 *
 * @param username username of the user to be registered
 * @param password password of the user to be registered
 */
export async function registerNewUser(username: string, password: string) {
  await axios.post(`${BASE_URL}/user`, {
    username,
    password,
  });
}

/**
 *
 * @returns a list of reviews for the current user
 */
export async function getMyReviews(): Promise<Review[] | undefined> {
  try {
    const reviews = await axios.get<Review[]>(`${BASE_URL}/review/myreviews`);
    return reviews.data;
  } catch (e: any) {
    console.log(e);
  }
}

/**
 *
 * @param review object to be added to the database
 */
export async function addReview(review: Review): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/review`, review);
  } catch (e: any) {
    console.log(e);
  }
}

/**
 *
 * @param review object to be updated in the database
 */
export async function updateReview(review: Review): Promise<void> {
  await axios.put(`${BASE_URL}/review`, review);
}

/**
 *
 * @param beerName name of the beer to get reviews for
 * @returns list of reviews for the specified beer
 */
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

/**
 *
 * @param username username of the user to be logged in
 * @param password password of the user to be logged in
 * @returns void
 */
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

/**
 * Logs the user out of the session.
 */
export async function logout(): Promise<void> {
  await axios.post(`${BASE_URL}/user/logout`);
}

/**
 * Deletes a review from the database.
 * @param review object to be deleted from the database
 */
export async function deleteReview(review: Review): Promise<void> {
  await axios.delete(`${BASE_URL}/review`, { data: review });
}

/**
 * Updates a user's username with a new username
 * @param oldUsername
 * @param newUsername
 */
export async function changeUsername(
  oldUsername: string,
  newUsername: string
): Promise<void> {
  await axios
    .patch(`${BASE_URL}/user`, { oldUsername, newUsername })
    .then((response) => console.log(response.data));
}
