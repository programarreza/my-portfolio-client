import RWModal from "./RWModal";

interface IProps {
  buttonText: string;
  title: string;
  features: string[];
}

const SeeFeaturesModal = ({ buttonText, features, title }: IProps) => {
  return (
    <RWModal buttonClassName="flex-1" buttonText={buttonText} title={title}>
      <div>
        {features.map((item, index) => (
          <p className="py-2 px-1 rounded-md my-2 bg-[#0F212F]">
            {index + 1}
            {"."} {item}
          </p>
        ))}
      </div>
    </RWModal>
  );
};

export default SeeFeaturesModal;
