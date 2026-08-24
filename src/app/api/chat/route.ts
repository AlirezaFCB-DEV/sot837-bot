import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error?.message || "OpenRouter request failed",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      message: data.choices[0].message.content,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
