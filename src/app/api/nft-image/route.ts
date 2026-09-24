import { NextRequest } from "next/server";

const pattern = /^https:\/\/t\.me\/nft\/[A-Za-z0-9][A-Za-z0-9_-]*-(\d+)\/?$/;

export async function GET(request: NextRequest) {
  const value = request.nextUrl.searchParams.get("url")?.trim() ?? "";
  const match = value.match(pattern);
  if (!match) return new Response("Invalid NFT URL", { status: 400 });
  try {
    const response = await fetch(value, { headers: { Accept: "text/html" }, cache: "no-store" });
    const html = await response.text();
    const title = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)?.[1] ?? "";
    const image = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)?.[1];
    if (!image || title.startsWith("Telegram:")) return new Response("NFT image not found", { status: 404 });
    return Response.redirect(image, 302);
  } catch {
    return new Response("Image unavailable", { status: 502 });
  }
}
