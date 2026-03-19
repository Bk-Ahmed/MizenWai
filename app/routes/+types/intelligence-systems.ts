export interface MetaArgs {
  params: Record<string, string>;
  data: unknown;
  location: { pathname: string; search: string; hash: string; state: unknown };
  matches: unknown[];
  error: unknown;
}

export interface LoaderArgs {
  params: Record<string, string>;
  request: Request;
}
