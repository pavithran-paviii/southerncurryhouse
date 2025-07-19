import { useRouter } from "next/navigation";
import "./button.scss";

export const GeneralButton = ({ text }) => {
  const router = useRouter();
  return (
    <div
      class="button-52"
      role="button"
      onClick={() => {
        if (text === "Locate") {
          window.open("https://maps.app.goo.gl/dyze1JtCRM72gSic7", "_blank");
        } else {
          router.push("/menu");
        }
      }}
    >
      {text}
    </div>
  );
};
