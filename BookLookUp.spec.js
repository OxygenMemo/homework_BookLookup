function BookLookUp(service){
    this.service=service

    this.search=(ISBN)=>{
        let result=service(ISBN)
        return result
    }
}

test('Get data book call function search(ISBN) with AmazonService',()=>{
    const output={
        title:"banana",
        image:"img1.jpg",
        ISBN:"A91nm"
    }
    const input="A91nm"
    const AmazonService=jest.fn(input)
        .mockReturnValue(output)
    let app=new BookLookUp(AmazonService)
    let result=app.search(input)

    expect(result).toEqual(output)
    expect(AmazonService).toBeCalled()
    expect(AmazonService).toBeCalledWith(input)
    
})