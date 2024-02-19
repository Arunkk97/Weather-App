
import { Container, Navbar } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'




function App() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState('')



  const getData = async () => {
    try {
      if (city === '') {
        alert('Please enter the city')
      } else {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
        const res = await response.json()
        setResult(res)

        console.log(res);
        // console.log(Result);
      }

    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <Navbar style={{ height: '80px' }} className='navImgg' >
          <Container>
            <Navbar.Brand href="#home" className='d-flex'>
              <img
                alt=""
                src="https://img.freepik.com/premium-vector/flat-sun-cloud-weather-web-icon_721813-233.jpg"
                width="50"
                height="50"
                className="d-inline-block align-top brimg"
              />{' '}
              <h4 className='ms-2 mt-2 text-light '> Weather App</h4>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <div className=' bgimg   '>

        <div className='d-flex justify-content-center mt-5 '>
          <input value={city} onChange={(e) => setCity(e.target.value)} style={{ height: '50px' }} className='w-25 ps-2 rounded' type="text" placeholder='Enter City Name' />
          <button onClick={getData} className='btn btn-primary ms-1 rounded'>Submit</button>

        </div>
        <div className='d-flex justify-content-center align-items-center '>
          {result && (<div className="card mt-3  ">
            <div className="card-body text-center fw-bold">
              <h5 className="card-title fw-bold ">{result.name}, {result.sys.country}</h5>
              <p className="card-text text-capitalize">{result.weather[0].description}</p>
              <p className="card-text">Temperature: {result.main.temp}°C</p>
              <p className="card-text">Humidity: {result.main.humidity}%</p>
            </div>
          </div>)}
        </div>
      </div>




    </>
  )
}

export default App
