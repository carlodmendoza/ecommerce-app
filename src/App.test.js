import { shallow } from "enzyme";
import App from "./App";
import NavBar from "./components/general/NavBar";
import Footer from "./components/general/Footer";

describe("<App/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render the App div", () => {
    expect(wrapper.find("div.App").length).toEqual(1);
  });

  it("should render the NavBar", () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it("should render the Footer", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
