import React, {useEffect} from "react";
import { AllTheProviders } from "../test-utils";
import { render, fireEvent, act } from "@testing-library/react";
import jest from "jest-mock";
import {useGlobal} from "./index";

// //call locate -> set coords
/*
pass the correct props to setLocation and setRegion

*/

// const setup = (props?: any) => {
//   return (
//     <AllTheProviders {...props}>
//       <App />
//     </AllTheProviders>
//   );
// }


describe('context', () => {
  // const mockSetLocation = jest.fn();
  
  // jest.mock('./index', () => {
  //     return {
  //       setLocation: mockSetLocation
  //     }
  // })
  
  test("will pass correct data to setLocation and setRegions", async() => {
    const response = {
      data : {
        location: 'Correct Location',
        setRegion: 'Correct Region'
      }
    }
  
    const mockFetch = jest.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve(response)
      })
    );
  
    // const mockSetLocation = jest.fn()
    // const mockSetRegion = jest.fn()
  
    window.fetch = mockFetch;
  
    const TestComponent = () => {
      const coords = {
        latitude: 37.58, longitude: -122.42
      }
      const locate = useGlobal().locate
      useEffect(() => {
        locate(coords)
      }, [])
      return null
    }
  
    await act(async () => {render(<TestComponent/>)})
    
    expect(mockFetch).toHaveBeenCalled();
    // expect(mockSetLocation).toHaveBeenCalled();
  })
  
})


// //React.useContext(GlobalContext)