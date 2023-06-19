import CustomButton from "../../../../../components/form/CustomButton";
import { useNavigate } from "react-router-dom";

function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mx-auto lg:mt-64 xs:mt-10 items-center">
      <div className="m-auto text-center">
        <p className="text-white-30 text-s font-regular leading-5 mt-[3rem] mb-[1.5rem]">
          You Have no Products yet Get a <br /> payment link to create product
        </p>

        <CustomButton onClick={() => navigate("/payment-link")}>
          Create link
        </CustomButton>
      </div>
    </div>
  );
}
export default EmptyState;
