import { NextResponse } from "next/server";

export async function GET() {
  const BackendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
  try {
    // 🚀 Change 'popcornpick-backend' to your exact Dokploy service name
    const response = await fetch(`${BackendLink}/movies`, {
      method: "GET",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch movie list from core backend" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Movie List Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
