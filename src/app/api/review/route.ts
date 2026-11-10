import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, rating, comment } = body;
    
    if (!name || !rating || !comment) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: { name, rating, comment },
    });
    return NextResponse.json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}
