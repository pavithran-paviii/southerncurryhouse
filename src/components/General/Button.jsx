import { useNavigate } from "react-router-dom";
import "./button.scss";

export const GeneralButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      class="button-52"
      role="button"
      onClick={() => {
        if (text === "Locate") {
          window.open("https://maps.app.goo.gl/dyze1JtCRM72gSic7", "_blank");
        } else {
          navigate("/menu");
        }
      }}
    >
      {text}
    </div>
  );
};
