import { useQuery } from "@tanstack/react-query";

const TanstackExample = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("https://catfact.ninja/fact", { method: "GET" }).then((prom) =>
        prom.json()
      ),
  });

  return (
    <div>
      {JSON.stringify(data, null, 2)}
      {isLoading ? "Lagi loading" : "Udah ga loading"}
    </div>
  );
};

export default TanstackExample;
