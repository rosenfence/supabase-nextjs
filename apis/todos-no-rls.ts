'use client';
import { createSupabaseBrowserClient } from '@/lib/client/supabase';

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    .order('id', { ascending: false });

  return result.data;
};

export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    .eq('id', id);

  return result.data;
};

export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    .ilike('contens', `%${terms}`)
    .order('id', { ascending: false });

  return result.data;
};

export const createTodos = async (content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase.from('todos_no_rls').insert({ content }).select();

  return result.data;
};

export const updateTodos = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from('todos_no_rls')
    .update({ content, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select();

  return result.data;
};

export const deleteTodosSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from('todos_no_rls')
    .update({ updated_at: new Date().toISOString(), deleted_at: new Date().toISOString() })
    .eq('id', id)
    .select();

  return result.data;
};

// export const deleteTodosHard = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase.from('todos_no_rls').delete().eq('id', id).select();

//   return result.data;
// };
