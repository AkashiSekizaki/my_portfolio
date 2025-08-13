export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // パスが既に絶対パスの場合はそのまま返す
  if (path.startsWith("http") || path.startsWith("//")) {
    return path;
  }

  // パスの先頭の/を除去してベースパスと結合
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

export function getAssetPath(path: string): string {
  return getImagePath(path);
}
