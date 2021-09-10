import renderer from "react-test-renderer";
import Top from "../pages/Top";

describe("<Top />", () => {
  it("スナップショット", () => {
    const tree = renderer.create(<Top />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <div
          className="headerContainer"
        >
          Weather App
        </div>
        <div
          className="emptyComponent"
        >
          <h1>
            Empty
          </h1>
        </div>
        <div
          className="footerContainer"
        >
          Weather App
        </div>
      </div>
    `);
  });
});
