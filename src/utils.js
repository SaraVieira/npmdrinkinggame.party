export default async p => {
  const url = 'https://api.npms.io/v2/package'
  const f = await fetch(`${url}/${p.toLowerCase().trim()}`)
  const rsp = await f.json()

  return rsp
}
