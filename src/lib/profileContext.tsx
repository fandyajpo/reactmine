import { PropsWithChildren, createContext, useState } from "react";

interface Props extends PropsWithChildren {}

export const ProfileContext = createContext({});

const ProfileProvider = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(21);

  return (
    <ProfileContext.Provider
      value={{
        name,
        age,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
