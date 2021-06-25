const production: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production';

export default function isProd(): boolean {
  return production;
}
