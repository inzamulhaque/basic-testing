const PrimaryButton = ({ actionType = "Add" }: { actionType?: string }) => {
  return (
    <>
      <button>Click to {actionType}</button>
    </>
  );
};

export default PrimaryButton;
