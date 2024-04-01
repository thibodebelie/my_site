import { loadFlash } from 'sveltekit-flash-message/server';
import { redirect } from '@sveltejs/kit';

export const load = loadFlash(async (event) => {
  const data = { someOther: 'data' };
  redirect(302, '/home');
  return data;
});