import renderer from "react-test-renderer";
import CurrentWeather from "../pages/CurrentWeather";

describe("<CurrentWeather />", () => {
  it("スナップショット", () => {
    const tree = renderer.create(<CurrentWeather />).toJSON();
    expect(tree).toMatchInlineSnapshot();
  });
});
