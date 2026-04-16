export const runtime = "nodejs";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Md_Ammar_Shahab_Resume.pdf",
    },
  });
}
