import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const name = searchParams.get('name');
 
  try {
    await sql`INSERT INTO Newsletter (Name, Email) VALUES (${name}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}