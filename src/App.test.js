import { shallow } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a div", () => {
    expect(wrapper.find("div.App").length).toEqual(1);
  });
});
