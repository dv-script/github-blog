export function pathRegex(path: string) {
  path.replace('/\/$/', '%20')
}