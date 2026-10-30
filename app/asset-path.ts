// Public-file URLs need the project prefix on GitHub Pages; Vercel uses the root.
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
