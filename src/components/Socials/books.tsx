'use client'
import React from 'react'
import { BooksWrapper } from "./styles"


const Books = (props: any) => {
    return (
        <BooksWrapper>
            <h1 className="title-books">Become an
                <br />
                early adopter</h1>
            <button type="button" className="btn-books">BOOK A DEMO</button>
        </BooksWrapper>
    )
}

export default Books