import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const niche = searchParams.get('niche');
  const brand = searchParams.get('brand');
 
  try {
    await sql`INSERT INTO Contacts (Name, Email, Niche, Brand) VALUES (${name}, ${email}, ${niche}, ${brand});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}