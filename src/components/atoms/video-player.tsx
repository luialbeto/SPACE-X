export default function VideoPlayer({ src }: { src: string }) {
  return (
    <iframe
      src={src.replace('watch?v=', 'embed/')}
      width="100%"
      height="315"
      aria-label="Launch Video"
      allowFullScreen
    />
  );
}