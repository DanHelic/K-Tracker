let refreshTokens: string[] = [];

export function add(token: string) {
    refreshTokens.push(token);
    console.log(refreshTokens);
}

export function remove(token: string) {
    refreshTokens = refreshTokens.filter(t => t !== token);
}

export function exists(token: string): boolean {
  return refreshTokens.includes(token);
}