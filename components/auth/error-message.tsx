export default function ErrorMessage({ message }: { message: string }) {
  return <p className="text-sm italic">{message}</p>;
}
