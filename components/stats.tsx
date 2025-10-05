import { statsData } from "@/lib/data";

export const Stats = () => {
  return (
    <section className="p-12 bg-accent rounded-[20px]">
      <ul className="flex flex-wrap gap-y-8">
        {statsData.map(({ id, value, text }) => (
          <li
            key={id}
            className="min-h-17.5 w-1/2 lg:flex-1 flex flex-col justify-center odd:border-r lg:even:border-r lg:even:last:border-none"
          >
            <p className="text-2xl lg:text-4xl font-semibold">{value}</p>
            <p className="max-w-27.5 mx-auto text-base lg:text-xl font-light">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
