'use client'
import React from 'react'
import { BooksWrapper } from "./styles"
import { Button } from "@/components"


const Books = (props: any) => {
    return (
        <BooksWrapper className="item">
            <div className="container">
                <h1 className="title-books">Become an
                    <br />
                    early adopter</h1>
                <Button type="button" $variant='primary'>BOOK A DEMO</Button>
            </div>
        </BooksWrapper>
    )
}

export default Books