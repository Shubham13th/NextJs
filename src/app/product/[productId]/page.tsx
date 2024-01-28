export default function productDetails({
        params,
} : {
    params:{productId:string};
})
{
    return(
        <>
        <h1>This is product with product id {params.productId}</h1>
        <p>To create dynamic routing make a folder inside square bracket and write syntax like this.</p>
        </>
    )
}