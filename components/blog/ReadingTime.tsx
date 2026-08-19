interface Props {
  text: string;
}

export default function ReadingTime({
  text,
}: Props) {
  const words = text.split(/\s+/).length;

  const minutes = Math.max(
    1,
    Math.ceil(words / 220)
  );

  return (
    <span>{minutes} min read</span>
  );
}