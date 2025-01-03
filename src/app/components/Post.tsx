interface PostProps {
  content: string;
}

export default function Post({ content }: PostProps) {
  return (
    <div className="border p-4 rounded-lg my-4 bg-white shadow">
      <p>{content}</p>
    </div>
  );
}
