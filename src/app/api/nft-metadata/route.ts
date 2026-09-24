import { NextRequest, NextResponse } from "next/server";

const nftPattern = /^https:\/\/t\.me\/nft\/([A-Za-z0-9][A-Za-z0-9_-]*)-(\d+)\/?$/;

function meta(html: string, property: string) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.match(new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]+content=["']([^"']+)["']`, "i"))?.[1];
}

export async function GET(request: NextRequest) {
  const value = request.nextUrl.searchParams.get("url")?.trim() ?? "";
  const match = value.match(nftPattern);
  if (!match) return NextResponse.json({ error: "Invalid NFT URL" }, { status: 400 });

  try {
    const response = await fetch(value, { headers: { Accept: "text/html" }, cache: "no-store" });
    if (!response.ok) return NextResponse.json({}, { status: 200 });
    const html = await response.text();
    return NextResponse.json({
      name: meta(html, "og:title"),
      imageUrl: meta(html, "og:image"),
      slug: match[1],
    });
  } catch {
    return NextResponse.json({}, { status: 200 });
  }
}
