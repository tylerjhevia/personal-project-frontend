import React from "react";
import Library from "../../Components/Library";
import { shallow, render, mount } from "enzyme";

describe('Library component', () => {

    const mockFn = jest.fn()
     const mockUser = {
      id: 1000,
      username: 'user',
      email: 'user@internet.com',
      password: 'books',
      created_at: 'date'
  }
  const mockBook = {
      kind: "books#volume",
      id: "afee3325i",
      etag: 'afwedsai32',
      volumeInfo :{
          title: 'Cool book',
          authors: ['tyler'],
          categories: ['cool stuff'],
          description: 'book about cool stuff',
          imageLink: {
              smallThumbnail: 'adsfewfdas',
              thumbnail: 'aksfdewdsaf'
          }
      }
  }
  const mockLibrary = [mockBook, mockBook, mockBook, mockBook]

  const wrapper = shallow(<Library user={mockUser} library={mockLibrary} fetchUserProps={mockFn}/>)

  it("should render a div with a class of 'library-div'", () => {
      expect(wrapper.find('div.library-div').length).toEqual(1)
  }) 
})