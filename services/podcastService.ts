import { PodcastEpisode } from "../models/podcast";
import base64 from "base-64";

export async function fetchPodcastEpisodesData(): Promise<PodcastEpisode[]> {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  const base64Credentials = base64.encode(`${clientId}:${clientSecret}`);
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${base64Credentials}`,
    },
    body: "grant_type=client_credentials",
  });

  const tokenResult = await tokenResponse.json();
  const token = tokenResult["access_token"];

  const dataResponse = await fetch(
    "https://api.spotify.com/v1/shows/6vpFsJgsIzvbOOISnIxHal/episodes",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const dataResult = await dataResponse.json();

  const result = mapTo(dataResult.items);
  return Promise.resolve(result);
}

function mapTo(
  items: {
    id: string;
    description: string;
    external_urls: { spotify: string };
    images: { url: string }[];
    name: string;
  }[]
): PodcastEpisode[] {
  return items.map(
    (i) =>
      ({
        id: i.id,
        title: i.name,
        description: i.description,
        link: i.external_urls.spotify,
      } as PodcastEpisode)
  );
}
