import Footer from "./src/components/Footer";
import PostFooter from "./src/components/PostFooter";
import PreHeader from "./src/components/PreHeader";
import { registerPlugin, registerComponent } from "actions/plugin";

export default function initialize({ dispatch }) {
  dispatch(registerPlugin("myCustomComponents"));
  dispatch(
    registerComponent(
      "myCustomComponents",
      "Frontend.Components.Layout.Footer",
      Footer
    )
  );
  dispatch(
    registerComponent(
      "myCustomComponents",
      "Frontend.Components.Layout.PostFooter",
      PostFooter
    )
  );
  dispatch(
    registerComponent(
      "myCustomComponents",
      "Frontend.Components.Layout.PreHeader",
      PreHeader
    )
  );
  dispatch(
    registerComponent(
      "myCustomComponents",
      "Reader.Components.Layout.PreHeader",
      PreHeader
    )
  );
  dispatch(
    registerComponent(
      "myCustomComponents",
      "Reader.Components.Layout.PostFooter",
      PostFooter
    )
  );
}
