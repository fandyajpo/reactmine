import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [name, setName] = useState<string>("Fandy");

  useEffect(() => {
    console.log("name : ", name);
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default EffectComponent;
