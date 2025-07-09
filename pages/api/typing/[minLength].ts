import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Validate HTTP method
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Validate and sanitize input
    const minLength = req.query.minLength;
    if (!minLength || Array.isArray(minLength)) {
      return res.status(400).json({ error: "Invalid minLength parameter" });
    }

    const parsedLength = parseInt(minLength, 10);
    if (isNaN(parsedLength) || parsedLength < 0 || parsedLength > 500) {
      return res.status(400).json({ error: "Invalid minLength value" });
    }

    // Construct secure URL
    const apiUrl = new URL("http://api.quotable.io/random");
    apiUrl.searchParams.set("minLength", parsedLength.toString());

    // Fetch with timeout and security options
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

    const response = await fetch(apiUrl.toString(), {
      signal: controller.signal,
      headers: {
        "User-Agent": "YourApp/1.0 (+https://anaflous.com)",
        Accept: "application/json",
      },
    });

    clearTimeout(timeoutId);

    // Validate response status
    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    // Validate JSON schema
    const data = await response.json();
    if (
      typeof data.content !== "string" ||
      typeof data.authorSlug !== "string"
    ) {
      throw new Error("Invalid API response structure");
    }

    // Security headers
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
    res.setHeader("Access-Control-Allow-Origin", "https://anaflous.com");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    return res
      .status(200)
      .json({ quote: data.content, author: data.authorSlug });
  } catch (err) {
    console.error("API Error:", err);
    return res.status(500).json({ error: "Failed to fetch quote" });
  }
}
