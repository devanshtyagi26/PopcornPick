import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const BackendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
  try {
    const { title } = params;

    if (!title) {
      return NextResponse.json(
        { error: "Movie title parameter is missing" },
        { status: 400 },
      );
    }
    const response = await fetch(
      `${BackendLink}/movies/${encodeURIComponent(title)}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Recommendation engine failed" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Recommendation Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
