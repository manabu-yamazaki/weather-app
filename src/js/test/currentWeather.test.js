import renderer from "react-test-renderer";
import CurrentWeather from "../pages/CurrentWeather";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import axiosEx from "../axios";

describe("<CurrentWeather />", () => {
  it("スナップショット", () => {
    //アンマウント
    const tree = renderer
      .create(
        <BrowserRouter>
          <CurrentWeather />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div>
        <div
          className="headerContainer"
        >
          Weather App
        </div>
        <div>
          <a
            className="routeContainer__linkEmpty"
            href="/"
            onClick={[Function]}
          >
            Empty
          </a>
          <div>
            <div
              className="MuiFormControl-root MuiTextField-root cityName"
            >
              <label
                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                data-shrink={false}
              >
                City
              </label>
              <div
                className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                onClick={[Function]}
              >
                <input
                  aria-invalid={false}
                  autoFocus={false}
                  className="MuiInputBase-input MuiOutlinedInput-input"
                  disabled={false}
                  onAnimationStart={[Function]}
                  onBlur={[Function]}
                  onChange={[Function]}
                  onFocus={[Function]}
                  required={false}
                  type="text"
                />
                <fieldset
                  aria-hidden={true}
                  className="PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline"
                >
                  <legend
                    className="PrivateNotchedOutline-legendLabelled-3"
                  >
                    <span>
                      City
                    </span>
                  </legend>
                </fieldset>
              </div>
            </div>
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-contained searchButton MuiButton-containedPrimary"
              disabled={false}
              onBlur={[Function]}
              onClick={[Function]}
              onDragLeave={[Function]}
              onFocus={[Function]}
              onKeyDown={[Function]}
              onKeyUp={[Function]}
              onMouseDown={[Function]}
              onMouseLeave={[Function]}
              onMouseUp={[Function]}
              onTouchEnd={[Function]}
              onTouchMove={[Function]}
              onTouchStart={[Function]}
              tabIndex={0}
              type="button"
            >
              <span
                className="MuiButton-label"
              >
                Search
              </span>
            </button>
          </div>
          <h2>
            Result
          </h2>
          <div
            className="weatherInfo"
          >
            <div>
              
            </div>
            <div>
              <h3>
                天気
              </h3>
              <ul>
                <li>
                  
                </li>
              </ul>
            </div>
            <div
              className="weatherInfo__itemTemp"
            >
              気温：
              
            </div>
            <div>
              体感気温：
              
            </div>
            <div>
              最高気温：
              
            </div>
            <div>
              最低気温：
              
            </div>
            <div>
              気圧：
              
            </div>
            <div>
              湿度：
              
            </div>
            <div>
              風速：
              
            </div>
          </div>
          <div>
            
          </div>
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

// let mockError = false;
// jest.mock('axios', () => ({
//   get: (url, body) => {
//     return new Promise(resolve => {
//       if (mockError) throw Error('Mock Error')

//       resolve({ url, body})
//     })
//   }
// }));

// test('async', async () => {
//   const res = axiosEx.getWeatherInfo("")
//   const expected = 1
//   expect(res).toEqual(expected)
// })

jest.mock("axios");

test('searchWeather ("") => ', async () => {
  const weather = null;
  const resp = { data: weather };
  axios.get.mockResolvedValue(resp);

  return axiosEx.getWeatherInfo("").then((data) => expect(data).toBeNull);
});

test('searchWeather ("") => ', async () => {
  const weather = { name: "Tokyo" };
  const resp = { data: weather };
  axios.get.mockResolvedValue(resp);

  return axiosEx
    .getWeatherInfo("Tokyo")
    .then((data) => expect(data).toEqual(weather));
});
