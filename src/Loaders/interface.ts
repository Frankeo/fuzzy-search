export interface Loader {
  canResolve: (arg: any) => boolean;
  load: (arg: any) => string[];
}