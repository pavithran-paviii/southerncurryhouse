import { useNavigate } from "react-router-dom";
import "./button.scss";

export const GeneralButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      class="button-52"
      role="button"
      onClick={() => {
        navigate("/menu");
      }}
    >
      {text}
    </div>
  );
};
