export function Artwork({ src }: { src: string }) {
  return <img className="artwork" src={src} alt="" loading="lazy" decoding="async" />
}
