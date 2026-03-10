import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadPropertyImage(file, propertyId) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${propertyId}/${Date.now()}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from('property-images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('property-images')
    .getPublicUrl(fileName);

  return publicUrl;
}

export async function deletePropertyImage(imageUrl) {
  const path = imageUrl.split('/property-images/')[1];
  const { error } = await supabase.storage
    .from('property-images')
    .remove([path]);

  if (error) throw error;
}

export async function testConnection() {
  try {
    const { data, error } = await supabase.from('users').select('count');
    if (error) throw error;
    return { success: true, message: 'Connected to Supabase!' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
