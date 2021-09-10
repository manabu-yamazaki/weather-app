import { Selector, RequestMock } from 'testcafe'

fixture('１画面目').page('http://localhost:3000/')

test('パスが正しいこと（１画面目）', async t => {
  const el = Selector(".emptyComponent")
  await t.expect(el.exists).eql(true)
  return await el.exists
})

test('パスが正しいこと（１画面目→２画面目）', async t => {
  const link = Selector('.routeContainer__linkCurrentWeather')
  await t.expect(link.exists).eql(true)
  await t.click(link)
  const el = Selector(".weatherInfo")
  await t.expect(el.exists).eql(true)
  return await el.exists
})

const mock = RequestMock()
  .onRequestTo(/https:\/\/api.openweathermap.org\/*/)
  .respond((req, res) => {
    res.headers["Access-Control-Allow-Origin"] = "*";
    res.setBody({
      name:"",
      weather: [
        {
          description: "",
          icon: ""
        }
      ],
      main: {
        temp: "25",
        feel_like: "",
        pressure: "",
        humidity: "",
        temp_max: "",
        temp_min: ""
      },
      wind: {
        speed: ""
      }
    })
  })
fixture('２画面目')
  .page('http://localhost:3000/CurrentWeather')
  .requestHooks(mock)

test('モックデータが表示されていること（２画面目）', async t => {
  const cityName = Selector('.cityName')
  const searchButton = Selector('.searchButton')
  await t.typeText(cityName, 'Tokyo').click(searchButton)
  const temp = Selector('.weatherInfo__itemTemp')
  await t.expect(temp.exists).eql(true)
  return await t.expect(temp.textContent).eql('気温：25')
})

test('「戻るボタン」を押下して1画面目に戻ること', async t => {
  const link = Selector('.routeContainer__linkEmpty')
  await t.expect(link.exists).eql(true)
  await t.click(link)
  const el = Selector(".emptyComponent")
  await t.expect(el.exists).eql(true)
  return await el.exists
})