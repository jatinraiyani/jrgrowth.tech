import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('admin_profile')
      .select('name, photo')
      .eq('id', 1)
      .single();
    
    if (error || !data) {
      return NextResponse.json({ name: 'Jatin Raiyani', photo: '' }, { status: 200 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ name: 'Jatin Raiyani', photo: '' }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { error } = await supabase
      .from('admin_profile')
      .upsert({ id: 1, name: body.name, photo: body.photo });
      
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
