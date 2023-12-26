import { NextResponse } from "next/server";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const tn = searchParams.get("tn");
  const res = await fetch(
    `https://www.davaocityportal.com/gord/ajax/dataprocessor.php?jawhead=1&year=${year}&tn=${tn}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  return NextResponse.json({ data });
}
