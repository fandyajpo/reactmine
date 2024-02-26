interface Props {
  method?: "CREATE" | "UPDATE";
}

const ConditionalComponent = (props: Props) => {
  return (
    <>
      {props.method === "CREATE" ? (
        <p>Create Item Form</p>
      ) : (
        <p>Update Item Form</p>
      )}
    </>
  );
};

export default ConditionalComponent;
