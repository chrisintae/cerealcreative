type Props = {
  block?: boolean;
  postDate: Date;
};

export default function DateCard({ block, postDate }: Props) {
  return (
    <div className={`flex flex-col items-center ${block && "p-4 bg-teal-100"}`}>
      {block && (
        <span className="text-zinc-700 font-sans text-sm uppercase tracking-widest leading-none mb-1">
          {postDate.toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </span>
      )}
      <span className="text-zinc-700 font-sans text-lg tracking-widest leading-none">
        {postDate.toLocaleDateString("en-US", {
          month: "long",
        })}
      </span>
      <span className="text-zinc-700 font-sans font-light text-3xl leading-none my-2">
        {postDate.toLocaleDateString("en-US", {
          day: "numeric",
        })}
      </span>
      <span className="text-zinc-700 font-sans text-lg tracking-widest leading-none">
        {postDate.toLocaleDateString("en-US", {
          year: "numeric",
        })}
      </span>
    </div>
  );
}
